Ext.define('MyGPS.store.RegisteredAccount.RegisteredAccountStore', {

});


    var _DataStore_RegisteredAccount_LoadByAccountNo = Ext.create('Ext.data.Store', {
        model: 'MyGPS.model.RegisteredAccount.RegisteredAccountModel',
        id: 'RegisteredAccount_LoadByAccountNoID',
        proxy: {
            type: 'ajax',
            url: document.location.protocol + '//' + document.location.host + '/RegisterAccount/RegisteredAccount_LoadByAccNo',
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

