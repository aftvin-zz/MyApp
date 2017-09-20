Ext.define('MyApp.view.components.ButtonsToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'buttonsToolbar',
    dock: 'top',

    items: [
        {
            xtype: 'button',
            iconCls: 'fa fa-filter',
            text: 'Filters'
        },
        {
            xtype: 'button',
            iconCls: 'fa fa-trash',
            text: 'Clear'
        },
        '-',
        {
            xtype: 'button',
            iconCls: 'fa fa-refresh',
            text: 'Refresh'
        },
        '-',        
        {
            xtype: 'button',            
            iconCls: 'fa fa-plus-circle',
            text: 'Create',
            handler: 'addRecord'
        },
        {
            xtype: 'button',            
            iconCls: 'fa fa-close',
            text: 'Delete',
            handler: 'removeRecords',
            bind: {
                disabled: '{!selected.length}'
            }
        },
        '-',
        {
            xtype: 'button',
            iconCls: 'fa fa-check-circle-o',
            text: 'Schedule',
            handler: 'recordSchedule',
            bind: {
                disabled: '{!selected.length}'
            }
        },
        {
            xtype: 'button',
            iconCls: 'fa fa-play',
            text: 'Run',
            handler: 'recordRun',
            
            bind: {
                disabled: '{!selected.length}'
            }
        },
        {
            xtype: 'button',
            iconCls: 'fa fa-stop',
            text: 'Stop',
            menu: [
                {
                    text:'Complete',
                    handler: 'recordComplete'
                },
                {
                    text:'Stop',
                    handler: 'recordStop'
                }
            ],
            bind: {
                disabled: '{!selected.length}'
            }
        },
        '-',
        {
            xtype: 'button',
            iconCls: 'fa fa-check-square',
            text: 'Validate'
        },
    ]
});