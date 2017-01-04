Ext.define('MyGPS.model.ResponderAlert.ResponderAlertModel', {
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
                 'CreatedDate',
                   'CreatedBy',
                 'ModifiedDate',
                 'ModifiedBy',
                 'RespondModule',
                 'Notes',

        ]
    }
});