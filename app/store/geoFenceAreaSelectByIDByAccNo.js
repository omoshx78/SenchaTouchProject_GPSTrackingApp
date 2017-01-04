



Ext.define('MyGPS.store.geoFenceAreaSelectByIDByAccNo', {
    extend: 'Ext.data.Store',
    alias: 'store.geoFenceAreaSelectByIDByAccNo',
    config: {
        model: 'MyGPS.model.geoFenceAreaModel',
        autoLoad: false,

        proxy: {

            //type: 'ajax',
            //url: document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/Signals/GetSignalsMultiples?AccNo=C02',


            type: 'ajax',
            url: document.location.protocol + '//' + document.location.host + '/GeoFenceArea/GeoFenceAreaSelectByIDByAccountNo',
            actionMethods: {
                read: 'GET'
            },


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
                    //console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceSelect');
                    // Ext.Msg.alert('Loading failed', response.statusText);
                }
            }

        }


    }
});




