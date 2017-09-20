Ext.application({
    name: 'MyApp',
    extend: 'MyApp.Application',  // <<== added

    requires: [
        'MyApp.*'   // tell Cmd to include all app classes
    ]
});