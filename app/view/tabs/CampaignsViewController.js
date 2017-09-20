Ext.define('MyApp.view.tabs.CampaignsViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.binding.campaigns',

    filterApply: function () {
        var viewModel = this.getViewModel(),
            store = this.getCampaignsStore();

        store.filter('name', viewModel.data.filterText);
    },

    filterClear: function () {
        var viewModel = this.getViewModel(),
            store = this.getCampaignsStore();
        
        viewModel.setData({ filterText: '' });
        store.filter('name', '');
    },

    addRecord: function () {
        var store = this.getCampaignsStore(),
            campaign = Ext.create('MyApp.model.Campaign', {
                name: 'New Campaign'
            });

        store.add(campaign);
    },
    
    updateRecord: function () {
        var viewModel = this.getViewModel(),
            store = this.getCampaignsStore(),
            updatedRecord = viewModel.data.selectedCampaign,
            record = store.findRecord('id', updatedRecord.id);

        record.set(updatedRecord.data);
    },

    recordRun: function () {
        this.updateRecordStatus('Running');
    },

    recordSchedule: function () {
        this.updateRecordStatus('Scheduled');
    },

    recordStop: function () {
        this.updateRecordStatus('Stopped');
    },

    recordComplete: function () {
        this.updateRecordStatus('Completed');
    },

    updateRecordStatus: function (status) {
        var store = this.getCampaignsStore(),
            records = this.getSelectedRows(); 

        Ext.iterate(records, function(record, index) {
            record.set('status', status);
        });
    },

    removeRecords: function(btn) {
        var store = this.getCampaignsStore(),
            records = this.getSelectedRows(); 
        
        this.confirmRemove(function () {
            Ext.iterate(records, function(record, index) {
                store.remove(record);
            });

            this.updateSelection();
        });        
    },

    confirmRemove: function (callback) {
        callback = callback.bind(this);

        Ext.MessageBox.show({
            title: 'Remove Campaign(s)',
            msg: 'Are you sure you want to proceed?',
            buttons: Ext.MessageBox.OKCANCEL,
            icon: Ext.MessageBox.WARNING,
            fn: function(btn){
                if(btn == 'ok'){
                    callback();
                } else {
                    return;
                }
            }
        });
    },

    getSelectedRows: function () {
        var grid = this.getCampaignsGrid();
        return grid.getSelectionModel().getSelection();
    },

    updateSelection: function () {
        var viewModel = this.getViewModel(),
            selectedRows = this.getSelectedRows();

        viewModel.setData({ selected: selectedRows });

        if(selectedRows.length === 1) {
            viewModel.setData({ selectedCampaign: Ext.merge({}, selectedRows[0]) });
        }
    },    

    getCampaignsStore: function () {
        return Ext.data.StoreManager.lookup('campaigns');
    },
    
    getCampaignsGrid: function () {
        return Ext.ComponentQuery.query('campaignsGrid')[0];
    }

});