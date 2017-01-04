

Ext.define('MyGPS.store.GeofenceAlertHistoryGetByAcc', {
    extend: 'Ext.data.Store',
  //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'MyGPS.model.GeofenceAlertHistory',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            url: document.location.protocol + '//' + document.location.host + '/GeofenceAlertHistory/GeofenceAlertHistoryByAccNo',
          
            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },

          

        }


    }
});
