Ext.define('MyGPS.model.geoFenceModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
                 'ID',
                 'AccountNo',
                 'TrackID',
                 'TrackItem',
                 'Fencelenght',
                 'FencePath',
                 'ShapeType',
                 'FenceAlertemail',
                 'FenceAlertemail2',
                 'FenceAlertemail3',
                 'FenceAlertPhone',
                 'FenceAlertPhone2',
                 'FenceAlertPhone3',
                 'Createdby',
                 'Createddate',
                 'CreatedOS',
                 'FenceStatus',
                 'SendAlertStatus',
                 'SenderEmail',
                 'Senderphone',
                 'ModifiedDate',
                 'ModifiedBy',
                 'IsOutOfFence',
                 'OutOfFenceRespond',
                 'FenceName'

        ]
    }
});