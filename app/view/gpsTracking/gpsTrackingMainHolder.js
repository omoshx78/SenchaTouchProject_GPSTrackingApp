Ext.define('MyGPS.view.gpsTracking.gpsTrackingMainHolder', {
    extend: 'Ext.Container',
    requires: ['Ext.Map', 'Ext.dataview.List',
       'Ext.data.Store', 'Ext.field.Select',
       'Ext.field.Hidden', 'Ext.form.FieldSet', 'MyGPS.view.gpsTracking.gpsTrackingItemList', 'MyGPS.view.gpsTracking.gpsTrackingMap',
       'MyGPS.view.gpsTracking.gpsTrackingProcess', 'MyGPS.view.gpsTrackingStreetView.gpsTrackingStreetViewMainHolder'],

    xtype: 'gpsTrackingMainHolder',
    id: 'gpsTrackingMainHolderID',
    config: {
        layout: 'card',
        animation: {
            type: 'slide',
            direction: 'left'
        },

        items: [{
            xtype: 'listSingleTrackingitem'
        }, {
            xtype: 'gpsTrackingMap'
        },
        {
            xtype: 'gpsTrackingStreetViewMainHolder'
        }


        ]
    }
});