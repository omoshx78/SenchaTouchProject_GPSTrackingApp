
Ext.define('MyGPS.view.TraceAlertFence.listTraceAlertFence', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'listTraceAlertFenced',
    id: 'listTraceAlertFenceID',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    config: {
        style: ' background-color:white;',
        layout: 'vbox', //  add a layout
        items:
        [

            {
                xtype: 'container',
                layout: {
                    type: 'vbox'
                },
                items: [
             {
                 xtype: 'label',
                 // id: 'Queue_GetDetailQueueLabel',
                 html: 'Trace Alert Virtual Boundary.<br>Ploting point out of virtual boundary alert on the map'
             },
              {
                  xtype: 'panel',
                  width: '100%',
                  id: 'TraceAlertHeaderMobile',
                  hidden:true,
                 // docked: 'top',
                  style: 'background-color:black; color: floralwhite;',
                  height: 50,
                  items: [
                      {
                          html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><span style="font-family: Arial; text-transform:uppercase;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><div style="float:left;width:30%"><b>NAME</div><div style="float:left;width:28%"><b>DATE</b></div ><div style="float:left;width:3%"><b>ID</b></div></div></div></div>'
                      }
                  ]
              },
             {
                 xtype: 'panel',
                 width: '100%',
                 id: 'TraceAlertHeaderPC',
                 hidden: true,
                 // docked: 'top',
                 style: 'background-color:black; color: floralwhite;',
                 height: 50,
                 items: [
                     {
                         html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><span style="font-family: Arial; text-transform:uppercase;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><div style="float:left;width:7%"><b>NAME</div><div style="float:left;width:6%"><b>DATE</b></div ><div style="float:left;width:3%"><b>ID</b></div></div></div></div>'
                     }
                 ]
             },
                ]
            },

             



         {
             xtype: 'list',
             flex: 1,
             store: 'GeofenceAlertHistoryGetByAcc',
             id: 'listTraceAlertFencesid',
             mode: 'SINGLE',
             itemTpl: '<div class="myContent">' +
                '<div><b><i>{TrackingItem_Alert}</i></b></div>' +
                //'<div><b>Area:</b><i>{FenceAreaName}</i></div>' +
                // '<div><b>Active Fence Time:</b><i>{TimeFromConverted}-{TimeToConverted}</i></div>' +
                // '<div><b>Status:</b><i>{Status}</i></div>' +
                  //  '<div>{GPSSimNumber}</div>' +
                 '<div style="display: none;">{ID}</div>' +

                '</div>',
             height: '100%',
             listeners: {
                 itemsingletap: function (list, idx, target, records, evt) {

                     var cntr = Ext.ComponentQuery.query("#holderTraceAlertFenceID")[0];
                     cntr.setActiveItem(1);
                     var TrackIDAlert;
                     var DateAlert;
                     var TrackItemAlert;
                     var TrackingItemAlert = records.get('TrackingItem_Alert');
                     var TrackingItemAlert_array = TrackingItemAlert.split(',');
                     var i;
                     for (i = 0; i < TrackingItemAlert_array.length; i++) {

                         TrackingItemAlert_array[i];

                     }
                     TrackItemAlert = TrackingItemAlert_array[0];
                     DateAlert = TrackingItemAlert_array[1];
                     TrackIDAlert = TrackingItemAlert_array[2];
                     Ext.getStore('GeofenceAlertHistoryStore').getProxy().setExtraParams({
                         TrackID: TrackIDAlert,
                         DateFrom: DateAlert,
                         DateTo: DateAlert,
                     });
                     Ext.StoreMgr.get('GeofenceAlertHistoryStore').load();
                     Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point.. Please Wait..' });
                     var task = Ext.create('Ext.util.DelayedTask', function () {
                     Ext.getStore('GeofenceAlertHistoryStore').getProxy().setExtraParams({
                         TrackID: TrackIDAlert,
                         DateFrom: DateAlert,
                         DateTo: DateAlert,                       
                     });
                     Ext.StoreMgr.get('GeofenceAlertHistoryStore').load();
                     plotingHistoryXypath(TrackIDAlert, DateAlert, DateAlert, TrackItemAlert);




                     Ext.Viewport.setMasked(false);
                     });
                     task.delay(2000);

                     setTimeout(function () {
                         list.deselectAll();

                     }, 500);
                 },
                 deselect: function (list, records) {
                     // console.log(records.get('DeviceID'));
                     //var value_to_remove = records.get('DeviceID');
                     //trackingid.splice(trackingid.indexOf(value_to_remove), 1);


                 }
             },

         },
        ]
    }

});
