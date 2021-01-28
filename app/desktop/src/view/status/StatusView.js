Ext.define('MyExtGenApp.view.status.StatusView',{
    extend: 'Ext.grid.Grid',
    xtype: 'statusview',

    requires: [
        "MyExtGenApp.view.status.StatusViewController",
        "MyExtGenApp.view.status.StatusViewModel",
        "Ext.grid.plugin.RowExpander",
        "MyExtGenApp.view.status.StatusForm"
    ],
    plugins: {
        rowexpander: true
    },
    itemConfig: {
        body: {
            tpl: new Ext.XTemplate (
                '<h3> Historia </h3>',
                '<table>',
                        '<thead">',
                            '<td>ID</td>',
                            '<td>DocID</td>',
                            '<td>Status</td>',
                            '<td>Date</td>',
                        '</thead>',
                        '<tr>',
                            '<tpl for="History">',
                                '<tr>',
                                    '<td>{ID}</td>',
                                    '<td>{DocID}</td>',
                                    '<td>{Status}</td>',
                                    '<td>{Date}</td>',
                                '</tr>',
                            '</tpl>',
                        '</tr>',
                '</table>',
            )
        }
    },
    cls: 'statusview',
    controller: {type: 'statusviewcontroller'},
    viewModel: {type: 'statusviewmodel'},
    bind:{
        store: '{Status}'
    },
    columns: [
        {text: 'Id', dataIndex: 'ID'},
        {text: 'Nazwa', dataIndex: 'Name'},
        {text: 'Data utworzenia', dataIndex: 'DateCreated'},
        {text: 'Status', dataIndex: 'Status'},
        {text: 'Ostatni dzień', dataIndex: 'DateLast'},
        {
            xtype: 'gridcolumn',
            width: 120,
            dataIndex: 'button',
            text: 'Action',
            cell: {
                xtype: 'widgetcell',
                widget: {
                    xtype: 'button',
                    text: 'Edytuj',
                    width: '100%',
                    handler: 'onEditClick'
                }
            }
        }


    ]
});

