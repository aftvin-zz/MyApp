Ext.define('MyApp.view.tabs.CampaignsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.campaigns',   

    data: {
        selected: [],
        selectedCampaign: {},
        filterText: ''
    }
    
});