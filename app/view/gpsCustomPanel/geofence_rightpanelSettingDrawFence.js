var countMapChangeSettingDrawFence = 0;
var changeMsgSettingDrawFence;
var drawCircleCountSettingDrawFence = 0;
var drawPolygonCountSettingDrawFence = 0;
var btnGeofenceDrawCircleEventSettingDrawFence;
var btnGeofenceDrawPolygonEventSettingDrawFence;
var checkClik = 'yes';
Ext.define('MyGPS.view.custompanel.geofence_rightpanelSettingDrawFence', {
 
});
var _geofence_rightpanelSettingDrawFence =
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
        id: '_geofence_rightpanelSettingDrawFenceID',
        draggable: false,

        right: -5,
        top: 36,
       //bottom: 212,

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

                            Id: 'btnGeofenceChangeMapSettingDrawFence',
                            height: 55,
                            width: 55,
                            html: '<div ><img src="resources/icons/changeMape1.png" width="45" height="45" alt="Company Name"></div>',
                            ui: 'plain',
                            handler: function (btn) {
                                countMapChangeSettingDrawFence = countMapChangeSettingDrawFence + 1;
                                btn.setHtml('<div ><img src="resources/icons/changeMap2.png" width="45" height="45" alt="Company Name"></div>');
                                if (countMapChangeSettingDrawFence == 1) {
                                     mapgeofenceSettinggeofence.setMapTypeId(google.maps.MapTypeId.SATELLITE);
                                     changeMsg = "Please wait,Change Map SATELLITE";
                                } else if (countMapChangeSettingDrawFence == 2) {
                                     mapgeofenceSettinggeofence.setMapTypeId(google.maps.MapTypeId.HYBRID);
                                     changeMsg = "Please wait,Change Map HYBRID";

                                } else if (countMapChangeSettingDrawFence == 3) {
                                     mapgeofenceSettinggeofence.setMapTypeId(google.maps.MapTypeId.ROADMAP);
                                     changeMsg = "Please wait,Change Map ROADMAP";

                                } else if (countMapChangeSettingDrawFence == 4) {
                                     mapgeofenceSettinggeofence.setMapTypeId(google.maps.MapTypeId.TERRAIN);
                                     changeMsg = "Please wait,Change Map TERRAIN";

                                     countMapChangeSettingDrawFence = 0;
                                 }
                                 Ext.Viewport.mask({ xtype: 'loadmask', message: changeMsg });
                                var task = Ext.create('Ext.util.DelayedTask', function () {                                  

                                    Ext.Viewport.unmask();
                                    btn.setHtml('<div ><img src="resources/icons/changeMape1.png" width="45" height="45" alt="Company Name"></div>');
                                });
                                task.delay(1500);


                               
                                
                            }
                        },
              

                     {
                         xtype: 'button',

                         Id: 'btnDeleteGeofenceSettingDrawFence',
                         height: 55,
                         width: 55,
                         html: '<div ><img src="resources/icons/DeleteGeofence.png" width="45" height="45" alt="Company Name"></div>',
                         ui: 'plain',
                         handler: function () {


                             Ext.Msg.show({
                                 title: 'DELETE V.BOUNDARY',
                                 message: 'Delete v.boundary for this item?',
                                 width: 500,
                                 buttons: Ext.MessageBox.YESNO,
                                 iconCls: Ext.MessageBox.INFO,
                                 fn: function (buttonId) {
                                     if (buttonId == "yes") {
                                         Ext.Viewport.mask({ xtype: 'loadmask', message: 'Deleting v.boundary...' });
                                         var task = Ext.create('Ext.util.DelayedTask', function () {

                                             alertisplaySettinggeofence = "no";


                                             // DeleteGeoFences(AAccountNo, SingleTrackID);
                                             shapetypeSettinggeofence = "none";
                                             deleteAllSelectedShapeSettinggeofence();
                                             coorshapeSettinggeofence = '';
                                             Ext.getCmp('SettingDrawFence_FencePath').setValue('null');
                                             Ext.getCmp('SettingDrawFence_Length').setValue('-1');
                                             Ext.getCmp('SettingDrawFence_Status').setValue('-1');
                                             AutoFenceTimerDelete(Ext.getCmp('SettingDrawFence_ID').getValue(), AAccountNo);
                                         
                                             Ext.Viewport.unmask();
                                             Ext.getStore('AutoFenceTimerGetByAcc').getProxy().setExtraParams({
                                                 AccNo: AAccountNo,
                                             });
                                             Ext.StoreMgr.get('AutoFenceTimerGetByAcc').load();
                                         });
                                         task.delay(1000);

                                     }


                                 }
                             });

                         }
                     },
                      {
                          xtype: 'button',
                          Id: 'btnGeofenceDrawCircleSettingDrawFence',
                          height: 55,
                          width: 55,
                          html: '<div ><img src="resources/icons/drawcircle.png" width="45" height="45" alt="Company Name"></div>',
                          //ui:'round'
                          ui: 'plain',
                          handler: function (btnGeofenceDrawCircleEvent) {
                              drawCircleCountSettingDrawFence = drawCircleCountSettingDrawFence + 1;
                             // loadGeofenceResponderAlert();
                              if (drawCircleCountSettingDrawFence == 1) {
                                 // btnGeofenceDrawCircleEvent.setHtml('<div ><img src="resources/icons/drawcircle2.png" width="45" height="45" alt="Company Name"></div>');
                                  drawingManagerSettinggeofence.setDrawingMode(google.maps.drawing.OverlayType.CIRCLE);

                              } else if (drawCircleCountSettingDrawFence == 2) {
                               //   btnGeofenceDrawCircleEvent.setHtml('<div ><img src="resources/icons/drawcircle.png" width="45" height="45" alt="Company Name"></div>');
                                  drawingManagerSettinggeofence.setDrawingMode(null);
                                  drawCircleCountSettingDrawFence = 0;

                              }

                            
                          }


                      },
                               {
                                   xtype: 'button',
                                   Id: 'btnGeofenceDrawPolygonEventSettingDrawFence',
                                   height: 55,
                                   width: 55,
                              
                                   html: '<div ><img src="resources/icons/drawpolyline.png" width="45" height="45" alt="Company Name"></div>',
                                   //ui:'round'
                                   ui: 'plain',
                                   handler: function (btnGeofenceDrawPolygonEvent) {
                                       drawPolygonCountSettingDrawFence = drawPolygonCountSettingDrawFence + 1;
                                       if (drawPolygonCountSettingDrawFence == 1) {
                                           drawingManagerSettinggeofence.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);

                                       } else if (drawPolygonCountSettingDrawFence == 2) {
                                           drawingManagerSettinggeofence.setDrawingMode(null);
                                           drawPolygonCountSettingDrawFence = 0;

                                       }
                                     
                                   }


                               },
                                {
                                    xtype: 'button',
                                    id: 'btnSettingDrawFenceGeolocation',
                                    height: 55,
                                    width: 55,

                                    html: '<div ><img src="resources/icons/Picture28.png" width="45" height="45" alt="Company Name"></div>',
                                    //ui:'round'
                                    ui: 'plain',
                                    handler: function () {
                                      
                                       

                                        if (checkClik == 'yes')
                                        {
                                            if (!this.overlay) {
                                                this.overlay = Ext.Viewport.add(_SearchLocation
                                            );

                                            }
                                            this.overlay.show();
                                            checkClik = 'no';
                                            return;
                                        }else
                                        {
                                            checkClik = 'yes';
                                            _SearchLocation.hide();
                                        }
                                       

                                      
                                        //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Geolocation Activated...' });
                                        //var task = Ext.create('Ext.util.DelayedTask', function () {
                                        //    window.setTimeout(function () {
                                        //        getLocation();
                                        //    }, 1000);
                                        //    Ext.Viewport.unmask();
                                        //});
                                        //task.delay(1000);

                                    }


                                },
                       

            ]

        },


    });

var isFirstTime='yes';
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
       
        Ext.Msg.alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
 
    var ctr = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(ctr);
    mapgeofenceSettinggeofence.fitBounds(bounds);

    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Please Wait while Geolocation located your position...' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
       
       
        if (isFirstTime == 'yes')
        {
            mapgeofenceSettinggeofence.setZoom(16);
            isFirstTime = 'no';
            Ext.Viewport.unmask();
            return;
          
        } else {
            repositionGeo(position.coords.longitude, position.coords.latitude);
        }
        //window.setTimeout(function () {
          
        //}, 500);
        Ext.Viewport.unmask();
    });
    task.delay(1000);



  


}

function repositionGeo(x,y)
{
    //var ctr = new google.maps.LatLng(y, x);
    //var bounds = new google.maps.LatLngBounds();
    //bounds.extend(ctr);
    //mapgeofenceSettinggeofence.fitBounds(bounds);
    //mapgeofenceSettinggeofence.setZoom(16);
    //console.log('repositionGeo');
    mapgeofenceSettinggeofence.setZoom(16);      // This will trigger a zoom_changed on the map
    mapgeofenceSettinggeofence.setCenter(new google.maps.LatLng(y, x));



}



var filepdf;
//function _SearchLocation() {
filepdf = "location.html";
var _SearchLocation = Ext.create('Ext.Panel', {

    height: 250,
    width: 270,
    right: 55,
    top: 55,
    id: 'SearchLocationID',
    //   center:true,
    //modal: true,
    //hideOnMaskTap: true,
    showAnimation: {
        type: 'slide',
        direction: 'down',
        duration: 350,
        easing: 'ease-out',

    },
    hideAnimation: {
        type: null,
        direction: null,
        duration: 650,
        easing: null,
        out: null

    },
    style: "background-color: #57A0DC; color:white;",
    //style: 'background-color: transparent;',
    items: [
        {
            docked: 'top',
            xtype: 'toolbar',
            id: 'userManual_TitleBar',
            title: 'Enter Address',
            ui: 'light',

        },


          {
              xtype: 'button',
              height: 40,
              width: 258,
              top: 154,
              id: 'btnSearchLocationSearch1',
              ui: 'action',
              text: 'Search',
              handler: function () {
                  var xc = localStorage.getItem("coorX");                
                  if (xc == null || xc== undefined)
                  {
                      Ext.Msg.alert("Address is empty!!");
                      return;
                  }
                  Ext.Viewport.mask({ xtype: 'loadmask', message: 'Locating Address....please wait' });
                  var task = Ext.create('Ext.util.DelayedTask', function () {
                      locateAutocomplete();
                      Ext.Viewport.unmask();

                  });
                  task.delay(1500);

                 
                  // var x = localStorage.getItem("latitudeY");
                  // alert(longitudeXX);
              }

          },




        {
            //html: '<table class="tabledetail">  <tr > <td colspan="2" style="background-color: grey;  font-size: 12px; color: #fff; text-align: center; ">GPS Live Data Info<br>(20-11-2014 01:32AM)</td> </tr><tr > <td class="tde">WTP 2681</td> <td class="tde">Proton Persona Car</td></tr> <tr > <td class="tdk">Tracking ID</td> <td class="tdk">Tracking Item</td></tr><tr > <td class="tde">03.9304893048</td> <td class="tde">101.283746484</td></tr> <tr > <td class="tdk">Latituded</td> <td class="tdk">Longituded</td></tr><tr > <td class="tde">89km/h</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">76.9%</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">TK102-B</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">+60193198764</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
            //  html: '<iframe id="myIframe2" src="http://drms.dsmaf.mil.my/User_manual_Web_DRMS2.pdf" width="100%" height="700" ></iframe>',
            html: '<iframe id="myIframe2" src="' + document.location.protocol + '//' + document.location.host + '/' + filepdf + '"  width="100%" height="100%" ></iframe>',
        },








    ],



});