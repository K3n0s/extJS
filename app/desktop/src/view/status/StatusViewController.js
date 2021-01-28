Ext.define('MyExtGenApp.view.status.StatusViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.statusviewcontroller',
    onEditClick: function(button) {

        var view = this.getView();


        var status = Ext.getStore('statusId').getAt(0).data

        this.dialog = view.add({
            xtype: 'StatusForm',
            viewModel: {
                links: {
                    Status: {
                        reference: 'MyExtGenApp.model.Status',
                        id: status.id,
                        Name: status.Name,
                        Status: status.Status
                    }
                }
            },
        });

        this.dialog.show();
    }
});