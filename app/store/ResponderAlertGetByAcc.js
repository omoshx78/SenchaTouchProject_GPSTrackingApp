

Ext.define('MyGPS.store.ResponderAlertGetByAcc', {
    extend: 'Ext.data.Store',
  //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'MyGPS.model.ResponderAlertModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            url: document.location.protocol + '//' + document.location.host + '/ResponderAlert/GetResponderAlertByAccNo',
          
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
