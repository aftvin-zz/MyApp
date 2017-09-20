Ext.define('MyApp.view.components.CampaignsListPanel', {
    extend: 'Ext.panel.Panel',

    xtype: 'campaignsListPanel',

    layout: 'column',    

    items: [
        {
            columnWidth: 0.75,
            xtype: 'campaignsGrid',
            margin: '20 10 0 0'
        },
        {
            columnWidth: 0.25,
            xtype: 'campaignForm',
            bind: {
                hidden: '{selected.length != 1}'
            }
        }
    ]

});