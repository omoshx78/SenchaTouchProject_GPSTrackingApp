Ext.define('MyGPS.view.TraceAlertFence.holderTraceAlertFence', {
    extend: 'Ext.Container',
    requires: ['Ext.Map', 'Ext.dataview.List',
       'Ext.data.Store', 'Ext.field.Select',
       'Ext.field.Hidden', 'Ext.form.FieldSet', 'MyGPS.view.TraceAlertFence.Gmaphistory', 'MyGPS.view.TraceAlertFence.listTraceAlertFence'],

    xtype: 'holderTraceAlertFenced',
    id: 'holderTraceAlertFenceID',
    config: {
        layout: 'card',
        animation: {
            type: 'slide',
            direction: 'left'
        },

        items: [{
            xtype: 'listTraceAlertFenced'
        }, {
            xtype: 'gMapHistory'
        }]
    }
});