Ext.define('MyGPS.model.ResponderAlertModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
                 'ID',
                 'AccountNo',
                 'ResponderName',
                 'ResponderRelationShip',
                 'ResponderPhoneNo',
                 'ResponderEmail',
                 'Status',
                 'GeofenceStatus',
                 'User'                 

        ]
    }
});