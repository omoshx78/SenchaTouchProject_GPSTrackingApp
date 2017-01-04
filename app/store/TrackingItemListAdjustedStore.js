Ext.define('MyGPS.store.TrackingItemListAdjustedStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'MyGPS.model.TrackingItemAdjusted',
       autoLoad: false,
        // storeId: 'TrackingItemListID',
        //Id: 'TrackingItemListID',
        proxy: {

            type: 'ajax',
            url: document.location.protocol + '//' + document.location.host + '/TrackingItem/GetTrackingItem',

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
