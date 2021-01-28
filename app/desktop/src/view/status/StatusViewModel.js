Ext.define('MyExtGenApp.view.status.StatusViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.statusviewmodel',
	requires: [
		'MyExtGenApp.model.Status'
	],
    stores: {
        Status: {
			storeId: 'statusId',
			autoLoad: true,
			autoSync: true,
			model: 'MyExtGenApp.model.Status'
		}
    }
});