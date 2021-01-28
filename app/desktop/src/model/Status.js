Ext.define('MyExtGenApp.model.Status', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'ID', type: 'int' },
        { name: 'Name', type: 'string' },
        { name: 'DateCreated', type: 'date' },
        { name: 'Status', type: 'string' },
        { name: 'DateLast', type: 'date' }
    ],

    proxy:{
        type: 'ajax',
        url: 'resources/data/Sample.json',
        reader:{
            type: 'json',
            rootProperty: 'items'
        }
    }
});