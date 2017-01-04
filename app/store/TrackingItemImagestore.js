Ext.define('MyGPS.store.TrackingItemImagestore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'MyGPS.model.TrackingItemImage',
       autoLoad: false,
        // storeId: 'TrackingItemListID',
        //Id: 'TrackingItemListID',
        proxy: {

            type: 'ajax',
            url: document.location.protocol + '//' + document.location.host + '/TrackingItem/GetTrackingItemImage',

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
