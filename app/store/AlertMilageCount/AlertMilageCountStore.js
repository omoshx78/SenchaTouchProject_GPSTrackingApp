Ext.define('MyGPS.store.AlertMilageCount.AlertMilageCountStore', {

});



//function DataStore_AlertMilageCountStore_LoadByDeviceIDAccountNo()
//{
    var _DataStore_AlertMilageCountStore_LoadByDeviceIDAccountNo = Ext.create('Ext.data.Store', {
        model: 'MyGPS.model.AlertMilageCount.alertMilageCount_LoadByDeviceAccNoModel',
        id: 'AlertMilageCountStore_LoadByDeviceIDAccountNo',
        proxy: {
            type: 'ajax',
            url: document.location.protocol + '//' + document.location.host + '/AlertMilageCount/AlertMilageCountLoadByDeviceIDAccNo',
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


//}

