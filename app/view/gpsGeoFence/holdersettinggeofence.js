Ext.define('MyGPS.view.SettingFence.holdersettinggeofence', {
    extend: 'Ext.Container',
    requires: ['Ext.Map', 'Ext.dataview.List',
       'Ext.data.Store', 'Ext.field.Select',
       'Ext.field.Hidden', 'Ext.form.FieldSet',
       'MyGPS.view.SettingFence.listgeofenceitemsettinggeofence',
       'MyGPS.view.SettingFence.SettingFenceDrawMap'],

    xtype: 'geoFencesSettingholder',
    id: 'geoFencesSettingholderID',
    config: {
        layout: 'card',
        animation: {
            type: 'slide',
            duration:350,
            direction: 'left'
        },

        items: [{
            xtype: 'listgeofenceitemssettinggeofence'
        }, {
            xtype: 'SettingFenceDrawMapType'
        }]
    }
});