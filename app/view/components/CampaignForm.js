Ext.define('MyApp.view.components.CampaignForm', {
    extend: 'Ext.panel.Panel',
    xtype: 'campaignForm', 

    items: {
        xtype: 'fieldset',

        bind: {
            title: '{selectedCampaign.name}'
        },

        margin: '0',

        items: [
            {
                xtype: 'textfield',
                fieldLabel: 'Id',
                name: 'id',
                bind: '{selectedCampaign.id}',
                disabled: true
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Name',
                name: 'name',
                bind: '{selectedCampaign.name}'
            },
            {
                xtype: 'datefield',
                fieldLabel: 'Start date',
                name: 'startDate',
                bind: '{selectedCampaign.startDate}',
                format: 'd-m-Y H:i:s'
            },
            {
                xtype: 'datefield',
                fieldLabel: 'End date',
                name: 'endDate',
                bind: '{selectedCampaign.endDate}',
                format: 'd-m-Y H:i:s'
            },
            {
                xtype: 'textareafield',
                fieldLabel: 'Description',
                name: 'description',
                bind: '{selectedCampaign.description}'
            },
            {
                xtype: 'fieldset',
                title:'Mail notification',
                defaultType: 'textfield',
                items: [
                    {
                        xtype: 'checkboxfield',
                        name: 'mailCampaignDue',
                        boxLabel: 'Start & End of campaign',
                        bind: '{selectedCampaign.mailCampaignDue}'
                    },
                    {
                        xtype: 'checkboxfield',
                        name: 'mailTasksDue',
                        boxLabel: 'Start & End of tasks',
                        bind: '{selectedCampaign.mailTasksDue}'
                    },
                    {
                        xtype: 'checkboxfield',
                        name: 'mailFailures',
                        boxLabel: 'Failures',
                        bind: '{selectedCampaign.mailFailures}'
                    },
                    {
                        xtype: 'textareafield',
                        fieldLabel: 'CC:',
                        name: 'cc',
                        emptyText: 'some additional emails',
                        bind: {
                            value: '{selectedCampaign.cc}',
                            disabled: '{!selectedCampaign.mailCampaignDue && !selectedCampaign.mailTasksDue && !selectedCampaign.mailFailures}'
                        }
                    }
                ]
            }
        ]
    },
    buttons: [
        { 
            text:'Submit',
            handler: 'updateRecord'
        },
        { 
            text:'Cancel',
            handler: 'updateSelection'
        }
    ]
});