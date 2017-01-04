var geofenceSavedAreaID;
var geofenceSavedAreaFenceLength;
var geofenceSavedAreaFencePath;
var geofenceSavedAreaShapeType;
var geofenceArea;
var GeofenceAreaid = [];
Ext.define('MyGPS.view.geoFences.listgeofenceArea', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'listgeofenceArea',
    id: 'listgeofenceAreaID',

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
                xtype: 'toolbar',
                docked: 'top',
                title: 'Virtual Boundary Saved Area',
                //  minHeight: '60px',
                items: [
                    {
                        ui: 'action',
                        xtype: 'button',
                        id: 'backButtonvvv',
                        text: 'Back',
                        handler: function () {
                            // alert("gxdddssssx");
                           Ext.getCmp('listgeofenceAreaID').destroy();

                            //var txt = Ext.getCmp('containerdental');
                            //txt.list.select(2);
                        }

                    },


                ],
            },
             {
                 xtype: 'toolbar',
                 docked: 'bottom',

                 //  minHeight: '60px',
                 items: [

                      {
                          xtype: 'spacer',
                          // width: 50

                      },
                         {
                             align: 'center',
                             // width: 50,
                             ui: 'action',
                             xtype: 'button',
                             id: 'btnDeleteGeofenceArea',
                             text: '  Delete Virtual Boundary area  ',
                             handler: function () {

                             
                               

                                 Ext.Viewport.mask({ xtype: 'loadmask', message: 'Delete..Please Wait..' });
                                 var task = Ext.create('Ext.util.DelayedTask', function () {
                                     var ii;
                                     var strGeofenceAreaid = '';
                                     for (ii = 0; ii < GeofenceAreaid.length; ii++) {
                                         // alert(trackingid[ii]);
                                         GeoFenceAreaDisabled(GeofenceAreaid[ii], AAccountNo);
                                         // alert("counter Account :"+ii);
                                         // strGeofenceAreaid += GeofenceAreaid[ii] + ',';
                                         // strGeofenceAreaid += GeofenceAreaid[ii] + ',';
                                         //Ext.Msg.alert('You selected ' + trackingid.length + ' item(s)', '<ul>' + trackingid[ii] + '</ul>');
                                     }
                                     console.log(strGeofenceAreaid);
                                     GeofenceAreaid, length = 0;
                                     Ext.Viewport.unmask();
                                 });
                                 task.delay(1000);



                             }




                         },
                     {
                         align: 'center',
                         // width: 50,
                         ui: 'action',
                         xtype: 'button',
                         id: 'runButtoxxxn',
                         text: '  Start Drawing  ',
                         handler: function () {
                            
                           
                        

                                
                                 Ext.Viewport.mask({ xtype: 'loadmask', message: 'Processing..Please Wait..' });
                                 var task = Ext.create('Ext.util.DelayedTask', function () {
                                     deleteAllSelectedShape();
                                     Ext.getCmp('listgeofenceAreaID').destroy();
                                     //alert(geofenceSavedAreaID);
                                   //  alert(geofenceSavedAreaShapeType + geofenceSavedAreaFencePath + geofenceSavedAreaFenceLength);
                                  //  
                                     drawgefenceFromSavedArea(geofenceSavedAreaShapeType, geofenceSavedAreaFencePath, geofenceSavedAreaFenceLength, geofenceArea);
                                    startmapgeofences();
                                   //  var txt = Ext.getCmp('containerdental');
                                   //  txt.list.select(2);
                                     Ext.Viewport.unmask();
                                 });
                                 task.delay(1000);
                           


                         }




                     },
                         
                       {
                           xtype: 'spacer',
                           // width: 50

                       },

                 ],
             },
             {
                 xtype: 'label',
                 //  hidden: true,
                 id: 'List_listgeofenceAreaID',
                 html: 'Saved Virtual Boundary Area<br>Tap and Select Area'
             },

            {
                xtype: 'list',
                //  itemTpl: '{title},{author}',
                flex: 1,    //  add a flex property

                store: 'geoFenceAreaSelectByAccNo',
                id: 'geoFenceAreaSelectByAccNoID',
                // mode: 'SINGLE',
                mode: 'MULTI',
                itemTpl: '<div class="myContent">' +
                       //'<div>Saved GeoFences Area</div>' +
                   '<div><u><b>{FenceName}</b></u></div>' +
                   //    '<div>{FenceLength}</div>' +
                  // '<div>{ShapeType}</div>' +
                    '<div style="display: none;">{ID}</div>' +
                    '<div style="display: none;">{FencePath}</div>' +                   
                   '</div>',

                // xtype: 'list',
                //store:'itemsStore',
                height: '100%',
                listeners: {
                    select: function (list, records) {
                        geofenceSavedAreaID=(records.get('ID'));
                        geofenceSavedAreaFencePath = (records.get('FencePath'));
                        geofenceSavedAreaShapeType = (records.get('ShapeType'));
                        geofenceSavedAreaFenceLength = (records.get('FenceLength'));
                        geofenceArea = records.get('FenceName');
                        GeofenceAreaid.push(records.get('ID'));
                        //alert(geofenceArea);
                    },
                    deselect: function (list, records) {
                        //console.log(records.get('DeviceID'));
                        ////  trackingid.remove(records.get('TrackID'));

                        //var value_to_remove = records.get('DeviceID');
                        //trackingid.splice(trackingid.indexOf(value_to_remove), 1);

                        var value_to_remove = records.get('ID');
                        GeofenceAreaid.splice(GeofenceAreaid.indexOf(value_to_remove), 1);

                    }
                },

            }
        ]
    }
});
