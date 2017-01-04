//SUDAH TAK PAKAI BOLEH DELETE
Ext.define('MyGPS.store.multipletrackingitemselectF', {
    extend: 'Ext.data.Store',

    config: {
        model: 'MyGPS.model.TrackingItem',
        autoLoad: false,
        storeId: 'multipletrackingitemselectFID',
        proxy: {

            type: 'ajax',
            url: document.location.protocol + '//' + document.location.host + '/TrackingItem/GetTrackingItem?AccNo=C01',

            // url: 'http://192.168.0.105:9007/TrackingAppAPI/TrackingItem/GetTrackingItem?AccNo=C01',
            //url: 'http://localhost:9007/TrackingAppAPI/TrackingItem/GetTrackingItem?AccNo=C01',

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