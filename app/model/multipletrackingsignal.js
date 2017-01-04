Ext.define('MyGPS.model.multipletrackingsignal', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'Longitude' },
            { name: 'Latitude' },
            { name: 'IMEI_no' },
            { name: 'Speed' },
            { name: 'GPSSimNumber' },
              { name: 'TrackID' },
            { name: 'BatteryReading' },
            { name: 'TrackItem' },
            { name: 'TrackItemType' },
            { name: 'GPSModel' },
              { name: 'AccountNo' },
            { name: 'DateDT' }

        ]
    }
});