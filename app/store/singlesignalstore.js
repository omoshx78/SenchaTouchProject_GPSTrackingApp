

//var _DataStore_multipletrackingsignalpoint = Ext.create('Ext.data.Store', {
//    model: 'MyGPS.model.multipletrackingsignal',

//    proxy: {

//        //type: 'ajax',
//        //url: document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/Signals/GetSignalsMultiples?AccNo=C02',


//        type: 'ajax',
//        url: document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/Signals/GetSignalsMultiples',
//        actionMethods: {
//            read: 'GET'
//        },

//        // url: 'http://192.168.0.105:9007/TrackingAppAPI/Signals/GetSignals?DeviceID=MNP-1933',

//        // url: ip + 'TrackingAppAPI/Signals/GetSignalsMultiple?AccNo=C02',

//        // url: 'http://192.168.0.105:9007/TrackingAppAPI/Signals/GetSignalsMultiple?AccNo=C02',

//        reader: {
//            type: 'json',
//            rootProperty: 'results',
//            totalProperty: 'total',
//            successProperty: 'success',
//            messageProperty: 'message'
//        }

//    },
//    autoLoad: true
//});








Ext.define('MyGPS.store.singlesignalstore', {
    extend: 'Ext.data.Store',
    alias: 'store.singlesignalstores',
    config: {
        model: 'MyGPS.model.singlesignalmodel',
        autoLoad: false,

        proxy: {

            //type: 'ajax',
            //url: document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/Signals/GetSignalsMultiples?AccNo=C02',


            type: 'ajax',
            url: document.location.protocol + '//' + document.location.host + '/Signals/GetSignalSingle',
            actionMethods: {
                read: 'GET'
            },

            // url: 'http://192.168.0.105:9007/TrackingAppAPI/Signals/GetSignals?DeviceID=MNP-1933',

            // url: ip + 'TrackingAppAPI/Signals/GetSignalsMultiple?AccNo=C02',

            // url: 'http://192.168.0.105:9007/TrackingAppAPI/Signals/GetSignalsMultiple?AccNo=C02',

            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },

            listeners: {
                exception: function (proxy, response, orientation) {
                    console.error('Failure Notificssssssation', response.responseText);
                    // Ext.Msg.alert('Loading failed', response.statusText);
                }
            }

        }


    }
});






//var _DataStore_SingleSignalTrackingStore = Ext.create('Ext.data.Store', {
//    model: 'MyGPS.model.singlesignalTrackingmodel',
//    id: 'SingleSignalTrackingStore',
//    proxy: {
//        type: 'ajax',
//        url: document.location.protocol + '//' + document.location.host + '/Signals/GetSignalSingleTracking',
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
//    //autoLoad: true
//});