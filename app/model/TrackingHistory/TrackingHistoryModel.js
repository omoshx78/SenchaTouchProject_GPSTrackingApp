Ext.define('MyGPS.model.TrackingHistory.TrackingHistoryModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'Longitude' },
            { name: 'Latitude' },
            { name: 'Speed' },
             { name: 'DateDT' },
                    { name: 'BatteryReading' },
             { name: 'Direction' },


              { name: 'Altitude' },
             { name: 'GSMSignalReading' },
                    { name: 'TerminalState' },
             { name: 'TrackID' },
      { name: 'TrackItem' },
           

        ]
    }
});