Ext.define('MyGPS.store.TrackingItemList.TrackingItemListsStore', {

});


var _DataStore_TrackingItemListStore_AccountNo = Ext.create('Ext.data.Store', {
    model: 'MyGPS.model.TrackingItemList.TrackingItemModel',
    id: 'TrackingItemList_LoadByAccountNoID',
    proxy: {
        type: 'ajax',
        url: document.location.protocol + '//' + document.location.host + '/TrackingItem/GetTrackingItem',
        //url: document.location.protocol + '//' + document.location.host + '/MilageCountAlertHistory/MilageCountAlertHistoryLoadByDeviceIDAccNo',
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

    listeners: {
        exception: function (proxy, response, orientation) {
           // console.error('Failure Notificssssssation', response.responseText);
            //console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceSelect');
            Ext.Msg.alert('Loading failed', response.statusText);
        }
    }
    //autoLoad: true
});