Ext.define('MyGPS.store.Places', {
    extend : 'Ext.data.Store',
    config : {
        model : 'MyGPS.model.Place',
        proxy: {
            type: 'ajax',
            url: 'app/data/MapData.json',
            reader: {
                type: 'json',
                rootProperty :'places'
            }
        }
    }
});
