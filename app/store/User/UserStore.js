Ext.define('MyGPS.store.User.UserStore', {

});


var _DataStore_User_Login = Ext.create('Ext.data.Store', {
    model: 'MyGPS.model.User.UserModel',
    id: 'User_LoginID',
    proxy: {
        type: 'ajax',
        url: document.location.protocol + '//' + document.location.host + '/GPSUser/GPSUserLog_in',
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