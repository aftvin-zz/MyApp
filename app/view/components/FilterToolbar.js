Ext.define('MyApp.view.components.FilterToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'filterToolbar',
    dock: 'top',

    items: [
        {
            xtype: 'textfield',
            name: 'textfield1',
            fieldLabel: 'Name',
            emptyText: 'Enter filter text...',
            bind: {
                value: '{filterText}'
            }
        },
        {
            xtype: 'button',
            iconCls: 'fa fa-filter',
            handler: 'filterApply'
        },
        {
            xtype: 'button',
            iconCls: 'fa fa-trash',
            handler: 'filterClear'
        }
    ]
});