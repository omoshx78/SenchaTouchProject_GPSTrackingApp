Ext.define('MyGPS.model.geoFenceAreaModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
                 'ID',
                 'AccountNo',
                'FencePath',
                 'FenceName',
                  'CreatedDate',
                 'FenceLength',
                 'Status',
                 'ShapeType',
                 'TrackID'
        ]
    }
});