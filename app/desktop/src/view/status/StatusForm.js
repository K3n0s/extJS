Ext.define('MyExtGenApp.view.status.StatusForm', {
    xtype: 'StatusForm',
    extend: 'Ext.window.Window',
    title: 'Formularz',
    defaultType: 'textfield',
    height: 300,
    width: 400,
    modal: true,
    items: [
            {
                label: 'Name',
                name: 'Name',
                fieldLabel: 'Name',
                id: 'NameField',
                autoComplete: false,
                bind: '{Status.Name}'
            },
            {
                label: 'Status',
                name: 'Status',
                fieldLabel: 'Status',
                id: 'StatusField',
                autoComplete: false,
                bind: '{Status.Status}'
            }
    ],
    buttons: [
        {
            text: 'Anuluj',
            iconCls: 'button-cancel',
            handler: function(btn){
                btn.up('window').close();
            }
        },
        {
            text: 'Zapisz',
            iconCls: 'button-save',
            handler: function(btn) {
                var window = this.up('window'),
                    view = window.viewModel,
                    name = Ext.getCmp('NameField').getValue(),
                    status = Ext.getCmp('StatusField').getValue();


                view.set('Name', name);
                view.set('Status', status);

                btn.up('window').close();
            }
        }
    ]
});
