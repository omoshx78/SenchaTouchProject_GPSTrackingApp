Ext.define('MyGPS.store.MilageCountAlertHistory.MilageCountAlertHistoryStore', {

});


var _DataStore_MilageCountAlertHistoryStore_LoadByDeviceIDAccountNo = Ext.create('Ext.data.Store', {
    model: 'MyGPS.model.MilageCountAlertHistory.MilageCountAlertHistory_LoadByDeviceAccNoModel',
    id: 'MilageCountAlertHistoryStore_LoadByDeviceIDAccountNo',
    proxy: {
        type: 'ajax',
        url: document.location.protocol + '//' + document.location.host + '/MilageCountAlertHistory/MilageCountAlertHistoryLoadByDeviceIDAccNo',
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