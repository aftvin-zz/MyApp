Ext.define('MyApp.view.tabs.CampaignsTab', {
    extend: 'Ext.panel.Panel',
    
    xtype: 'campaignsTab',

    controller: 'binding.campaigns',
    
    viewModel: {
        type: 'campaigns'
    },

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },    
    
    
    bodyPadding: 10, 

    items: [
        {
            xtype: 'buttonsToolbar',
            margin: '0 0 10 0'
        },
        {
            xtype: 'filterToolbar',
            margin: '0 0 10 0'
        },
        {
            xtype: 'campaignsListPanel',
            margin: '0 0 10 0'
        }
    ]

});