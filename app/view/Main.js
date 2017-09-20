Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',

    controller: 'main',

    layout:'fit',

    items: [
        {
            title: 'Campaigns',
            items: {
                xtype: 'campaignsTab'
            },
            scrollable: 'vertical'
        },
        {
            title: 'Tasks',
            disabled: true
        },
        {
            title: 'Tasks History',
            disabled: true
        }
    ]
});