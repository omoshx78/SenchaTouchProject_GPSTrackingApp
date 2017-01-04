Ext.define('MyGPS.store.MilageCountInfo.MilageCountInfoStore', {

});


var _DataStore_MilageCountInfoStore_LoadByDeviceIDAccountNo = Ext.create('Ext.data.Store', {
    model: 'MyGPS.model.MilageCountInfo.MilageCountInfoLoad_ByAccountNoDeviceIDModel',
    id: 'MilageCountInfoStore_LoadByAccountNoDeviceID',
    proxy: {
        type: 'ajax',
        url: document.location.protocol + '//' + document.location.host + '/MilageCountInfo/MilageCountInfoLoadByAccountNoDeviceID',
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