Ext.define('MyGPS.model.signalhistorymodel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'Longitude' },
            { name: 'Latitude' },          
            { name: 'Speed' },
             { name: 'Direction' },
            { name: 'BatteryReading' },         
            { name: 'DateDT' }

        ]
    }
});