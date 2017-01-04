Ext.define('MyGPS.view.SingleTracking.holderSingleTrackingitem', {
    extend: 'Ext.Container',
    requires: ['Ext.Map', 'Ext.dataview.List',
       'Ext.data.Store', 'Ext.field.Select',
       'Ext.field.Hidden', 'Ext.form.FieldSet', 'MyGPS.view.SingleTracking.listSingleTrackingitem', 'MyGPS.view.SingleTracking.singleTrackingMap','MyGPS.view.SingleTracking.singleTrackingOverViewMap'],

    xtype: 'SingleTrackingholder',
    id: 'SingleTrackingholderID',
    config: {
        layout: 'card',
        animation: {
            type: 'slide',
            direction: 'left'
        },

        items: [

            //{
            //xtype: 'holderMapStreetView'
            //},

        {
            xtype: 'singleTrackingOverViewMap'
        },
        {
          

            xtype: 'listSingleTrackingitem'
        }


        ]
    }
});