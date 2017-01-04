Ext.define('MyGPS.model.multipleSignal', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
                    { name: 'Longitude' },
            { name: 'Latitude' },
            { name: 'Speed' },
            { name: 'TrackItemType' },
                 { name: 'TrackItem' },
            { name: 'TrackID' }



        ]
    }
});