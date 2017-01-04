var countMapChange = 0;
var changeMsg;
var drawCircleCount = 0;
var drawPolygonCount = 0;
var btnGeofenceDrawCircleEvent;
var btnGeofenceDrawPolygonEvent;
Ext.define('MyGPS.view.custompanel.geofence_rightpanel', {
 
});




var _Geofence_rightPanel =
    Ext.create('Ext.Panel', {

        xtype: 'panel',
        // style: 'background-color:#57A0DC',
        height: 1,
      //  modal: true,
     //   hideOnMaskTap: true,
        //width: 320,
        //  centered: true,
        // height: '10%',
        width: 1,
        // centered: false,
        id: '_Geofence_rightPanelID',
        draggable: false,

        right: -5,
         //top: 243,
        bottom: 312,

        showAnimation: {
            type: 'slide',
            direction: 'left',
            duration: 250,
            easing: 'ease-out'
        },
        //showAnimation: {
        //    type: 'slide',
        //    direction: 'down',
        //    duration: 350,
        //    easing: 'ease-out',

        //},
        hideAnimation: {
            type: null,
            direction: null,
            duration: 650,
            easing: null,
            out: null

        },


        //right: 1,
        //bottom: 1,
        style: 'background-color: transparent;',
        //showAnimation: {
        //    type: 'slide',
        //    direction: 'down',
        //    duration: 350,
        //    easing: 'ease-out',

        //},
        //hideAnimation: {
        //    type: 'slide',
        //    direction: 'up',
        //    duration: 650,
        //    easing: 'ease-out',
        //    out: true
        //},


        items: {

            //xtype: 'titlebar',
            xtype: 'container',
            style: 'background-color: transparent;',
           // margin: '110 2 0 0',
            // draggable: true5,
            layout: {

                type: 'vbox',
                pack: 'left',
                align: 'end'
            },

            items: [
                 {
                     xtype: 'button',

                     Id: 'btnGeofencefenceStatus',
                    hidden:true,
                  //   margin: '10 0 0 0',
                     // margin: 'top left bottom right',
                     //// margin: '250 5 -30 20',
                     //margin: '250 2 -30 20',
                     //style: 'margin-top: 350px;margin-left: 500px;',
                     // text: 'Start',
                     //height: 47,
                     //width: 47,
                     //height: 40,
                     //width: 40,
                     height: 55,
                     width: 55,
                     //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                     //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                     html: '<div ><img src="resources/icons/Picture44.png" width="45" height="45" alt="Company Name"></div>',
                     //ui:'round'
                     ui: 'plain',
                     handler: function (btnpanelgeofencestatus) {
                         // btn.setHidden(true);

                         if (btnpanelgeofencestatus.hasDisabled) {

                       //      btnpanelgeofencestatus.setHtml('<div ><img src="resources/icons/download.png" width="25" height="18"></div>')
                             btnpanelgeofencestatus.hasDisabled = false;
                             //_GeofenceInfopanel.hide();

                             _GeofenceInfopanel.hide();


                         } else {


                             if (!this.overlay) {
                                 this.overlay = Ext.Viewport.add(_GeofenceAreaListPanel
                             );


                             }
                          //   btnpanelgeofencestatus.setHtml('<div ><img src="resources/icons/download_screen.png" width="25" height="18"></div>')
                             this.overlay.show();

                             btnpanelgeofencestatus.hasDisabled = true;




                         }
                        

                     }
                 },
                        {
                            xtype: 'button',

                            Id: 'btnGeofenceChangeMap',
                            // margin: '-1 0 0 0',
                            // margin: 'top left bottom right',
                            //// margin: '250 5 -30 20',
                            //margin: '250 2 -30 20',
                            //style: 'margin-top: 350px;margin-left: 500px;',
                            // text: 'Start',
                            //height: 47,
                            //width: 47,
                            //height: 40,
                            //width: 40,
                            height: 55,
                            width: 55,
                            //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                            //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                            html: '<div ><img src="resources/icons/changeMape1.png" width="45" height="45" alt="Company Name"></div>',
                            //ui:'round'
                            ui: 'plain',
                            handler: function (btn) {
                                // changeMsg = "Please wait,Change Map SATELLITE";
                               // alert(OS);
                                countMapChange = countMapChange + 1;
                                btn.setHtml('<div ><img src="resources/icons/changeMap2.png" width="45" height="45" alt="Company Name"></div>');
                                 if (countMapChange == 1) {
                                     mapgeofence.setMapTypeId(google.maps.MapTypeId.SATELLITE);
                                     changeMsg = "Please wait,Change Map SATELLITE";
                                 } else if (countMapChange == 2) {
                                     mapgeofence.setMapTypeId(google.maps.MapTypeId.HYBRID);
                                     changeMsg = "Please wait,Change Map HYBRID";

                                 } else if (countMapChange == 3) {
                                     mapgeofence.setMapTypeId(google.maps.MapTypeId.ROADMAP);
                                     changeMsg = "Please wait,Change Map ROADMAP";

                                 } else if (countMapChange == 4) {
                                     mapgeofence.setMapTypeId(google.maps.MapTypeId.TERRAIN);
                                     changeMsg = "Please wait,Change Map TERRAIN";

                                     countMapChange = 0;
                                 }
                                 Ext.Viewport.mask({ xtype: 'loadmask', message: changeMsg });
                                var task = Ext.create('Ext.util.DelayedTask', function () {                                  

                                    Ext.Viewport.unmask();
                                    btn.setHtml('<div ><img src="resources/icons/changeMape1.png" width="45" height="45" alt="Company Name"></div>');
                                });
                                task.delay(1500);


                                if (OS !='Windows')
                                {
                                    _Geofence_rightPanel.hide();
                                    Ext.getCmp('btnshowgeofencecontrol').setHidden(false);
                                    Ext.getCmp('btnhidegeofencecontrol').setHidden(true);
                                }
                                
                            }
                        },
                {
                    xtype: 'button',

                    Id: 'btnGeofenceZoomPoint',
                    // margin: '-1 0 0 0',
                    // margin: 'top left bottom right',
                    //// margin: '250 5 -30 20',
                    //margin: '250 2 -30 20',
                    //style: 'margin-top: 350px;margin-left: 500px;',
                    // text: 'Start',
                    //height: 47,
                    //width: 47,
                    //height: 40,
                    //width: 40,
                    height: 55,
                    width: 55,
                    //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                    //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                    html: '<div ><img src="resources/icons/zoompoint.png" width="45" height="45" alt="Company Name"></div>',
                    //ui:'round'
                    ui: 'plain',
                    handler: function () {

                        if (boundstatus == 'yes') {
                            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Re-center Map View' });
                            var task = Ext.create('Ext.util.DelayedTask', function () {
                                
                                mapgeofence.setZoom(8);      // This will trigger a zoom_changed on the map
                                mapgeofence.setCenter(new google.maps.LatLng(latGeofence, longGeofence));
                                boundstatus = 'no';
                                Ext.Viewport.unmask();
                            });
                            task.delay(1000);
                            return;

                        }
                        if (boundstatus == 'no') {
                            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Bounds Map to Point..' });
                            var task = Ext.create('Ext.util.DelayedTask', function () {

                                var bounds = new google.maps.LatLngBounds();
                                bounds.extend(boundreboundlatlong);
                                mapgeofence.fitBounds(bounds);
                                boundstatus = 'yes';
                                Ext.Viewport.unmask();
                            });
                            task.delay(1000);
                            return;
                        }
                        if (OS != 'Windows') {
                            _Geofence_rightPanel.hide();
                            Ext.getCmp('btnshowgeofencecontrol').setHidden(false);
                            Ext.getCmp('btnhidegeofencecontrol').setHidden(true);
                        }
                       // mapgeofence.setdrawingModes(google.maps.drawing.OverlayType.CIRCLE)
                    }
                },

                     {
                         xtype: 'button',

                         Id: 'btnDeleteGeofence',
                         //   margin: '-1 0 0 0',
                         // margin: 'top left bottom right',
                         //// margin: '250 5 -30 20',
                         //margin: '250 2 -30 20',
                         //style: 'margin-top: 350px;margin-left: 500px;',
                         // text: 'Start',
                         //height: 47,
                         //width: 47,
                         //height: 40,
                         //width: 40,
                         height: 55,
                         width: 55,
                         //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                         //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                         html: '<div ><img src="resources/icons/DeleteGeofence.png" width="45" height="45" alt="Company Name"></div>',
                         //ui:'round'
                         ui: 'plain',
                         handler: function () {

                             if (!dialogboxdeletegeofence) {
                                 dialogboxdeletegeofence = Ext.create('Ext.form.Panel', {
                                     centered: true,
                                     modal: true,
                                     hideOnMaskTap: true,
                                     width: 250,
                                     height: 120,
                                     style: "background-color: black;",
                                     scrollable: false,

                                     items: [
                                         {

                                             html: '<font size="4" color="white">Delete V.Boundary for this item?</font>'
                                         },
                                         {
                                             xtype: 'spacer'
                                         },
                                         {
                                             //xtype: 'container',
                                             //layout: {
                                             //    type: 'hbox',
                                             //    pack: 'center',
                                             //    align: 'stretch'
                                             //},

                                             xtype: 'toolbar',
                                             docked: 'bottom',
                                             title: '',
                                             //layout: {
                                             //    pack: 'center',
                                             //   // type: 'hbox'
                                             //},
                                             items: [

                                                 {
                                                     xtype: 'button',

                                                     itemId: 'BtnsremoveContinuegeofenceCancel',
                                                     ui: 'round',
                                                     //  padding: '10px',
                                                     text: '<font size="3" color="white">Cancel</font>',
                                                     handler: function () {

                                                         dialogboxdeletegeofence.hide();

                                                     }
                                                 },

                                             {
                                                 xtype: 'spacer'
                                             },
                                                         {
                                                             xtype: 'button',

                                                             itemId: 'BtnRemovegeofenceContinueOK',
                                                             ui: 'round',
                                                             // padding: '10px',
                                                             // text: 'OK/Procced.',
                                                             html: '<font size="3" color="white">OK/Procced.</font>',
                                                             handler: function () {
                                                                 dialogboxdeletegeofence.hide();
                                                                 Ext.Viewport.mask({ xtype: 'loadmask', message: 'Deleting V.Boundary...' });
                                                                 var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                     Ext.getCmp('sound1').stop();
                                                                     _GeofenceAlertSoundPanel.hide();
                                                                     alertisplay = "no";
                                                                     alertison = "no";
                                                                     geofenceLength = "Null";
                                                                     // Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
                                                                     DeleteGeoFences(AAccountNo, SingleTrackID);
                                                                     shapetype = "none";
                                                                     deleteAllSelectedShape();
                                                                     coorshape = '';
                                                                   //  Geofence_OutOfFence_Respond(AAccountNo, SingleTrackID);
                                                                     Ext.Viewport.unmask();
                                                                     Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Fence Status</td> </tr>    <tr > <td class="tdspeedmax">00.00Km</td> <td class="tdspeedmax">Tracking..</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + geofenceDateDT + '</td> </tr>  </table>');
                                                                  //   Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">No Geofence</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">Tracking..</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
                                                                     Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="42" width="42" src=' + document.location.protocol + '//' + document.location.host + '/resources/icons/About.jpg></td> </tr></table>');

                                                                     //   Ext.getCmp('Infogeofenceinfo').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">GeoFences Info</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Tracking ID</td> <td class="tdgpslabel">' + SingleTrackID + '</td></tr><tr> <td class="tdgpslabel">Track Item</td> <td class="tdgpslabel">' + trackingItems + '</td></tr><tr> <td class="tdgpslabel">Geofence Length</td> <td class="tdgpslabel">Disabled</td></tr><tr> <td class="tdgpslabel">Geofence Alert</td> <td class="tdgpslabel">Disabled</td></tr></table>');
                                                                     //Ext.Msg.alert("Disabled Geofence..");

                                                                     //if ((messageboxss())) {
                                                                     //    dialogboxdeletegeofence.hide();
                                                                     //    Ext.Viewport.add(messageboxss('Disabled Geofence'));
                                                                     //}
                                                                     Ext.getStore('AutoFenceTimerGetByAcc').getProxy().setExtraParams({
                                                                         AccNo: AAccountNo,
                                                                     });
                                                                     Ext.StoreMgr.get('AutoFenceTimerGetByAcc').load();


                                                                 });
                                                                 task.delay(1000);
                                                              //   Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');

                                                                // Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Fence Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
                                                             }
                                                         },

                                             ]

                                         },

                                     ]
                                 });
                                 Ext.Viewport.add(dialogboxdeletegeofence);
                             }
                             dialogboxdeletegeofence.show();
                             if (OS != 'Windows') {
                                 _Geofence_rightPanel.hide();
                                 Ext.getCmp('btnshowgeofencecontrol').setHidden(false);
                                 Ext.getCmp('btnhidegeofencecontrol').setHidden(true);
                             }
                         }
                     },
                      {
                          xtype: 'button',
                          Id: 'btnGeofenceDrawCircle',
                          height: 55,
                          width: 55,
                          // margin: 'top left bottom right',
                          //right: 53,
                          //bottom: 0,
                          //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                          //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                          html: '<div ><img src="resources/icons/drawcircle.png" width="45" height="45" alt="Company Name"></div>',
                          //ui:'round'
                          ui: 'plain',
                          handler: function (btnGeofenceDrawCircleEvent) {
                          //    Ext.getCmp('btnGeofenceDrawPolygonEvent').setHtml('<div ><img src="resources/icons/drawpolyline.png" width="45" height="45" alt="Company Name"></div>');
                             // btnGeofenceDrawPolygonEvent.setHtml('<div ><img src="resources/icons/drawpolyline.png" width="45" height="45" alt="Company Name"></div>');
                              drawCircleCount = drawCircleCount + 1;
                              Ext.getStore('ResponderAlertGetByAcc').getProxy().setExtraParams({
                                  AccNo: Ext.getCmp('AccNo').getValue(),
                              });
                              Ext.StoreMgr.get('ResponderAlertGetByAcc').load();
                              loadGeofenceResponderAlert();
                              if (drawCircleCount == 1) {
                                 // btnGeofenceDrawCircleEvent.setHtml('<div ><img src="resources/icons/drawcircle2.png" width="45" height="45" alt="Company Name"></div>');
                                  drawingManager.setDrawingMode(google.maps.drawing.OverlayType.CIRCLE);

                              } else if (drawCircleCount == 2) {
                               //   btnGeofenceDrawCircleEvent.setHtml('<div ><img src="resources/icons/drawcircle.png" width="45" height="45" alt="Company Name"></div>');
                                  drawingManager.setDrawingMode(null);
                                  drawCircleCount = 0;

                              }

                              if (OS != 'Windows') {
                                  _Geofence_rightPanel.hide();
                                  Ext.getCmp('btnshowgeofencecontrol').setHidden(false);
                                  Ext.getCmp('btnhidegeofencecontrol').setHidden(true);
                              }

                          }


                      },
                               {
                                   xtype: 'button',
                                   Id: 'btnGeofenceDrawPolygonEvent',
                                   height: 55,
                                   width: 55,
                                   // margin: 'top left bottom right',
                                   //right: 105,
                                   //bottom: 0,
                                   //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                                   //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                                   html: '<div ><img src="resources/icons/drawpolyline.png" width="45" height="45" alt="Company Name"></div>',
                                   //ui:'round'
                                   ui: 'plain',
                                   handler: function (btnGeofenceDrawPolygonEvent) {
                                    //   btnGeofenceDrawCircleEvent.setHtml('<div ><img src="resources/icons/drawcircle.png" width="45" height="45" alt="Company Name"></div>');
                                   //    Ext.getCmp('btnGeofenceDrawCircle').setHtml('<div ><img src="resources/icons/drawcircle.png" width="45" height="45" alt="Company Name"></div>');
                                       drawPolygonCount = drawPolygonCount + 1;
                                       Ext.getStore('ResponderAlertGetByAcc').getProxy().setExtraParams({
                                           AccNo: Ext.getCmp('AccNo').getValue(),
                                       });
                                       Ext.StoreMgr.get('ResponderAlertGetByAcc').load();
                                       loadGeofenceResponderAlert()
                                       if (drawPolygonCount == 1) {
                                         //  btnGeofenceDrawPolygonEvent.setHtml('<div ><img src="resources/icons/drawpolyline2.png" width="45" height="45" alt="Company Name"></div>');
                                           drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);

                                       } else if (drawPolygonCount == 2) {
                                        //   btnGeofenceDrawPolygonEvent.setHtml('<div ><img src="resources/icons/drawpolyline.png" width="45" height="45" alt="Company Name"></div>');
                                           drawingManager.setDrawingMode(null);
                                           drawPolygonCount = 0;

                                       }
                                       if (OS != 'Windows') {
                                           _Geofence_rightPanel.hide();
                                           Ext.getCmp('btnshowgeofencecontrol').setHidden(false);
                                           Ext.getCmp('btnhidegeofencecontrol').setHidden(true);
                                       }
                                   }


                               },
                        {
                            xtype: 'button',
                            Id: 'btnGeofenceAreaSaved',                          
                            height: 55,
                            width: 55,
                            right: 53,
                            bottom: 0,
                            hidden:true,
                            //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                            //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                            html: '<div ><img src="resources/icons/Picture44.png" width="45" height="45" alt="Company Name"></div>',
                            //ui:'round'
                            ui: 'plain',
                            handler: function () {
                                _GeofenceInfopanel.hide();
                                //_GeofenceInfopanelweb.hide();
                                _Geofence_rightPanel.hide();
                                _GeofenceInfopanelOnOff = 'Off';
                                Ext.getCmp('btngeofenceHideInfo').setHidden(true);
                                Ext.getCmp('btngeofenceShowInfo').setHidden(false);
                                Ext.getStore('geoFenceAreaSelectByAccNo').getProxy().setExtraParams({
                                    AccountNo: AAccountNo,
                                });
                                Ext.StoreMgr.get('geoFenceAreaSelectByAccNo').load();
                                Ext.Viewport.setActiveItem(Ext.create('MyGPS.view.geoFences.listgeofenceArea'));

                            }


                        },
                                {
                                    xtype: 'button',
                                    id: 'btnChangeMaplbl',
                                    height: 55,
                                    width: 155,
                                    right: 45,
                                    bottom: 220,
                                    //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                                    //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                                    html: '<div class="transbox"><p>Change Base Map</p></div>',
                                    //ui:'round'
                                    ui: 'plain',
                                    handler: function () {
                                      

                                    }


                                },
                                {
                                    xtype: 'button',
                                    id: 'btnBoundReboundPointlbl',
                                    height: 55,
                                    width: 155,
                                    right: 45,
                                    bottom: 165,
                                    //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                                    //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                                    html: '<div class="transbox"><p>Bound Point</p></div>',
                                    //ui:'round'
                                    ui: 'plain',
                                    handler: function () {


                                    }


                                },
                                        {
                                            xtype: 'button',
                                            id: 'btnDeleteGeofencelbl',
                                            height: 55,
                                            width: 155,
                                            right: 45,
                                            bottom: 110,
                                            //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                                            //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                                            html: '<div class="transbox"><p>Delete V.Boundary</p></div>',
                                            //ui:'round'
                                            ui: 'plain',
                                            handler: function () {


                                            }


                                        },
                        {
                            xtype: 'button',
                            id: 'btnDrawcirlelbl',
                            height: 55,
                            width: 155,
                            right: 45,
                            bottom: 55,
                            //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                            //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                            html: '<div class="transbox"><p>Draw Circle</p></div>',
                            //ui:'round'
                            ui: 'plain',
                            handler: function () {


                            }


                        },

                        {
                            xtype: 'button',
                            id: 'btnDrawpolygonlbl',
                            height: 55,
                            width: 155,
                            right: 45,
                            bottom: 2,
                            //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                            //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                            html: '<div class="transbox"><p>Draw Polygon</p></div>',
                            //ui:'round'
                            ui: 'plain',
                            handler: function () {


                            }


                        },

            ]

        },


    });





function resetMenuDrawButton() {
   // btnGeofenceDrawCircleEvent.setHtml('<div ><img src="resources/icons/drawcircle.png" width="45" height="45" alt="Company Name"></div>');
  //  btnGeofenceDrawPolygonEvent.setHtml('<div ><img src="resources/icons/drawpolyline.png" width="45" height="45" alt="Company Name"></div>');
}