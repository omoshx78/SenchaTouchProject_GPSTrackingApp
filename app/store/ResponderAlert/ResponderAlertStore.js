Ext.define('MyGPS.store.ResponderAlert.ResponderAlertStore', {

});


var _DataStore_ResponderAlert_LoadByAccountNoModule = Ext.create('Ext.data.Store', {
    model: 'MyGPS.model.ResponderAlert.ResponderAlertModel',
    id: 'ResponderAlert_LoadByAccountNoModuleID',
    proxy: {
        type: 'ajax',
        url: document.location.protocol + '//' + document.location.host + '/ResponderAlert/ResponderAlertLoadbyAccountNoModule',
        actionMethods: {
            read: 'GET'
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },
    //autoLoad: true
});