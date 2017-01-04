

Ext.define('MyGPS.store.AutoFenceTimerGetByID', {
    extend: 'Ext.data.Store',
  //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'MyGPS.model.AutoFenceTimerModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            url: document.location.protocol + '//' + document.location.host + '/AutoFenceTimer/GetAutoFenceTimerByID',
          
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
