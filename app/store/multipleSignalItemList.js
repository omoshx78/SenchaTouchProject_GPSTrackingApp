Ext.define('MyGPS.store.multipleSignalItemList', {
    extend: 'Ext.data.Store',
    alias: 'store.multipleSignalItemList',
    config: {
        model: 'MyGPS.model.multipleSignal',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            url: document.location.protocol + '//' + document.location.host + '/Signals/GetSignalsMultiple?AccNo=C02',

           // url: 'http://192.168.0.105:9007/TrackingAppAPI/Signals/GetSignals?DeviceID=MNP-1933',

           // url: ip + 'TrackingAppAPI/Signals/GetSignalsMultiple?AccNo=C02',

           // url: 'http://192.168.0.105:9007/TrackingAppAPI/Signals/GetSignalsMultiple?AccNo=C02',

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
