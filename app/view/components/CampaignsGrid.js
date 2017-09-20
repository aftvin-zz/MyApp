Ext.define('MyApp.view.components.CampaignsGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'campaignsGrid',

    selType: 'checkboxmodel',

    store: {
        type: 'campaigns',        
        sorters: ['id', 'name', 'startDate', 'endDate', 'status', 'tasksCount', 'createdBy'],
        autoLoad: true
    },

    listeners: {
        selectionchange : 'updateSelection'
    },

    frame: true,
    columnLines: true,
    
    columns: [
        {
            text : '#',
            dataIndex: 'rowIndex',
            sortable : false,
            renderer : function(value, metaData, record, rowIndex) {
                return rowIndex + 1;
            },
            width: 35
        },
        {
            text: 'Id',
            dataIndex: 'id',
            width: 55
        },
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        },
        {
            xtype: 'datecolumn',
            text: 'Start Date',
            dataIndex: 'startDate',
            width: 160,
            format: 'd-m-Y H:i:s'
        },
        {
            xtype: 'datecolumn',
            text: 'End Date',
            dataIndex: 'endDate',
            width: 160,
            format: 'd-m-Y H:i:s'
        },
        {
            text: 'Status',
            dataIndex: 'status'
        },
        {
            text: 'Tasks Count',
            dataIndex: 'tasksCount'
        },
        {
            text: 'Description',
            dataIndex: 'description'
        },
        {
            text: 'Created By',
            dataIndex: 'createdBy'
        }
        
    ]

});