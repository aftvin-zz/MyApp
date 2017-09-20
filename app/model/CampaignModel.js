Ext.define('MyApp.model.Campaign', {
    extend: 'Ext.data.Model',
    identifier: {
        type: 'sequential',
        seed: 8
    },
    fields: [
        {name: 'id', type: 'int'}, 
        {name: 'name', type: 'string'},
        {name: 'startDate', type: 'date', dateFormat: 'd-m-Y H:i:s'}, 
        {name: 'endDate', type: 'date', dateFormat: 'd-m-Y H:i:s'}, 
        {name: 'status', type: 'string'}, 
        {name: 'tasksCount', type: 'int'}, 
        {name: 'description', type: 'string'}, 
        {name: 'createdBy', type: 'string'},
        {name: 'mailCampaignDue', type: 'boolean', defaultValue: false},
        {name: 'mailTasksDue', type: 'boolean', defaultValue: false},
        {name: 'mailFailures', type: 'boolean', defaultValue: false},
        {name: 'cc', type: 'string'}
    ]
});