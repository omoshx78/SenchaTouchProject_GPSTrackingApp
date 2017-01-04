Ext.define('MyGPS.view.geoFences.holdergeofence', {
    extend: 'Ext.Container',
    requires: ['Ext.Map', 'Ext.dataview.List',
       'Ext.data.Store', 'Ext.field.Select',
       'Ext.field.Hidden', 'Ext.form.FieldSet', 'MyGPS.view.geoFences.listgeofenceitem', 'MyGPS.view.geoFences.geofence'],

    xtype: 'geoFencesholder',
    id: 'geoFencesholderssd',
    config: {
        layout: 'card',
        animation: {
            type: 'slide',
            direction: 'left'
        },

        items: [{
            xtype: 'listgeofenceitems'
        }, {
            xtype: 'mapGeofence'
        }


        ]
    }
});