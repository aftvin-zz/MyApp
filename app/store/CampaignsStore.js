Ext.define('MyApp.store.Campaigns', {
    extend: 'Ext.data.Store',
    alias: 'store.campaigns',
    storeId: 'campaigns',
    model: 'MyApp.model.Campaign',

    proxy: {
        type: 'ajax',
        url : 'data/campaigns.json'
    }    
});