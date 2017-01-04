Ext.define('MyGPS.store.MarkerloadAllstore', {
    extend: 'Ext.data.Store',
    alias: 'store.MarkerloadAllstore',
    config: {
        model: 'MyGPS.model.markerModel',
        autoLoad: true,

        proxy: {

            type: 'ajax',
            url: document.location.protocol + '//' + document.location.host + '/Marker/GetMarker',

           // url: 'http://192.168.0.105:9007/TrackingAppAPI/Signals/GetSignals?DeviceID=MNP-1933',
         //  url: 'http://localhost:9007/TrackingAppAPI/Signals/GetSignals?DeviceID=MNP-1933',

            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            }

        }


    }
});


//var _DataStore_Signals = Ext.create('Ext.data.Store', {
//    model: 'MyGPS.model.Signal',
//    proxy: {
//        type: 'ajax',
//        // url: document.location.protocol + '//' + document.location.host + '/SmartCard/getByIpAddress',
//        url: 'http://localhost:9007/TrackingAppAPI/Signals/GetSignals?DeviceID=MNP-1933',
//        actionMethods: {
//            read: 'GET'
//        },
//        reader: {
//            type: 'json',
//            rootProperty: 'results',
//            totalProperty: 'total',
//            successProperty: 'success',
//            messageProperty: 'message'
//        }
//    },
//    //autoLoad: true,

//});