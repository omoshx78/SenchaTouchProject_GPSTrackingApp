var alertID;
var locationX;
var locationY;
var geocodeXY;
var alertison;
var buttonAlertstate;
var mapgeofence;
var boundaryColor = '#ED1B24'; // initialize color of polyline
var polyCoordinates = []; // initialize an array where we store latitude and longitude pair
var count = 0;
var markerGeofence;
var latGeofence;
var longGeofence;
var drawingManager;
var oriShape;
var countshape;
var countPolygon;
var countPolyline;
var countRectangle;
var oriShapePolygon;
var oriShapePolyline;
var oriShapeRectangle;
var radiuse;
var polygonpaths;
var polylinespaths;
var circlecenterY;
var circlecenterX;
var shapetype;
var coorshape;
var arryPolygon = [];
var mapPoly;
var ip = document.location.protocol + '//' + document.location.host + '/resources/icons/';
var geofencepolyLengthInMeters;
var checklongGeofence;
var geofencetravellength;
var geofencetravellengthkm;
var geofenceLength;
var alertisplay;
var dialogboxdeletegeofence;
var dialogboxdeletemore;
var panelgeofencestatus;
var boundreboundlatlong;
var boundstatus;
var geoFenceStatus;
var geoFenceDate;

var gFenceAlertResponder;
var gFenceAlertResponder2;
var gFenceAlertResponder3;
var gFenceAlertResponder4;
var gFenceAlertResponderRelations;
var gFenceAlertResponderRelations2;
var gFenceAlertResponderRelations3;
var gFenceAlertResponderRelations4;
var gFencelenght;
var gCreateddate;
     var gFenceName;
     var bSex;
     var bAge;
     var bRisk;
     var bPicture;
Ext.define('MyGPS.view.geoFences.geofence', {


    extend: 'Ext.Container',

    requires: ['Ext.Map', 'Ext.dataview.List',
        'Ext.data.Store', 'Ext.field.Select',
        'Ext.field.Hidden', 'Ext.form.FieldSet', ],


    xtype: 'mapGeofence',


    config: {

        layout: 'fit',
        // layout: 'card',
        styleHtmlContent: true,
        items: [
          {
              ui: 'back',
              hidden:true,
              xtype: 'button',
              id: 'backBddddutton',
              text: 'Back',
              handler: function () {
                  mapgeofence.setMapTypeId(google.maps.MapTypeId.SATELLITE);
                  // alert("gxdddssssx");
                 // Ext.getCmp('multitrackiaccID').destroy();


              }

          },
     
              //////////{
              //////////    xtype: 'container',
              //////////    docked: 'top',
              //////////  hidden:true,
              //////////    Id: 'GeofenceInfoUpper',
              //////////    width: '100%',
              
              //////////    layout: {
              //////////        type: 'vbox'
              //////////    },
              //////////    items: [

              //////////        {
              //////////            xtype: 'panel',
              //////////            //flex: 1,
              //////////            height: 20,
              //////////            Id: 'left_blue_bottoma',
              //////////            style: 'border-bottom:1px solid;',
              //////////            layout: {
              //////////                type: 'fit'
              //////////            },
              //////////            xtype: 'label',
              //////////            id: 'GeofenceLastlocatioanAsAt',
              //////////            html: 'Last Location as at:'
              //////////        },




              //////////    ]
              //////////},

           {
               //xtype: 'titlebar',
               xtype: 'container',
               margin: '-22 -5 -5 -5',
               hidden: false,
               // draggable: true,
               layout: {

                   type: 'vbox',
                   pack: 'left',
                 //  align: 'end'
               },

               items: [

                     {
                         xtype: 'button',
                         ui: 'plain',
                         // style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                         height: 24,
                         width: 45,
                         //iconCls: 'download',
                         html: '<div ><img src="resources/icons/download.png" width="25" height="18" alt="Company Name"></div>',
                         //ui:'round'

                         Id: 'panelgeofencestatus',
                        
                         handler: function (btnpanelgeofencestatusx) {
                            // btn.setHidden(true);

                             if (btnpanelgeofencestatusx.hasDisabled) {

                                 btnpanelgeofencestatusx.setHtml('<div ><img src="resources/icons/download.png" width="25" height="18"></div>')
                                 btnpanelgeofencestatusx.hasDisabled = false;
                                 //_GeofenceInfopanel.hide();
                                 
                                 _GeofenceInfopanel.hide();


                             } else {

                               
                                 if (!this.overlay) {
                                     this.overlay = Ext.Viewport.add(_GeofenceInfopanel
                                 );
                                   

                                 }
                                 btnpanelgeofencestatusx.setHtml('<div ><img src="resources/icons/download_screen.png" width="25" height="18"></div>')
                                 this.overlay.show();
                             
                                 btnpanelgeofencestatusx.hasDisabled = true;
                             



                             }
                             //Ext.getCmp('panelgeofencestatus').setHidden(true);
                             //if (panelgeofencestatus == "open") {
                             //    //if (!this.overlay) {
                             //    //    this.overlay = Ext.Viewport.add(_GeofenceInfopanel
                             //    //);
                             //    //    this.overlay.show();
                             //    Ext.Viewport.add(_GeofenceInfopanel
                             //    );
                             //        panelgeofencestatus = "close";
                             //        return;

                                 

                             //} else {
                             //    panelgeofencestatus = "open";
                             //    _GeofenceInfopanel.hide();
                             //}

 
}

                     }
                       
                     ]
         
           
           },
            
]
},







    initialize: function () {
        alertisplay = "no";
        buttonAlertstate = "stop";
        panelgeofencestatus = "open";
        this.callParent();
        map = this.add({
            xtype: 'map',
            //useCurrentLocation: true,
            mapOptions: {

                center: new google.maps.LatLng(5.4445234, 101.91246603),
                zoom: 6,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                panControl: false,
                scaleControl: false,
                //overviewMapControl: true,
                //overviewMapControlOptions: {opened: true},
             
                mapTypeControl:false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DEFAULT,
                    position: google.maps.ControlPosition.BOTTOM_CENTER
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_BOTTOM
                },
                streetViewControl: true,
                streetViewControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP
                }

            },






            listeners: {
                maprender: function (comp, map) {
                    mapgeofence = map;
                    var me = this;
                    me.map = map;
                    countPolygon = 0;
                    countshape = 0;
                    clickedmapgeofence = false;
                    mapgeofencesec = 0;
                    radiuse = 0;
                    shapetype = "none";
                    checklongGeofence='000',
                    //  Listen Click Event to draw Polygon
                    //google.maps.event.addListener(mapgeofence, 'mousedown', function (event) {
                    //    polyCoordinates[count] = event.latLng;
                    //    createPolyline(polyCoordinates);
                    //    count++;
                    //});


                    ////google.maps.event.addListener(mapgeofence, 'dblclick', function (event) {
                    ////    alert("xxx");
                    ////    if (Path) {
                    ////        Path.setMap(null);
                    ////    }

                    ////   // google.maps.event.clearListeners(mapgeofence, 'mousedown');
                    ////});

                    //google.maps.event.addListener(mapgeofence, 'click', function (event) {
                    //    alert("xxx");
                    //  //  google.maps.event.removeListener(mapgeofence, 'mousedown');
                    //});

                    // google.maps.event.clearListeners(map, 'bounds_changed');






                    drawingManager = new google.maps.drawing.DrawingManager({
                        //  drawingMode: google.maps.drawing.OverlayType.MARKER,
                        drawingControl: false,
                        drawingControlOptions: {
                            position: google.maps.ControlPosition.TOP_LEFT,
                            drawingModes: [
                               google.maps.drawing.OverlayType.POLYGON,
                             // google.maps.drawing.OverlayType.POLYLINE,
                             // google.maps.drawing.OverlayType.RECTANGLE,
                              google.maps.drawing.OverlayType.CIRCLE
                            ]
                        },
                        polygonOptions: {
                            //editable: true
                            strokeColor: "#FF004D",
                           // strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillColor: "#FF004D",
                            fillOpacity: 0.5
                             },
                        //markerOptions: {
                        //    icon: 'images/beachflag.png'
                        //},
                        circleOptions: {
                            fillColor: '#FF004D',
                            fillOpacity: 0.5,
                            strokeWeight: 2,
                            clickable: false,
                            editable: true,
                            zIndex: 1
                        }
                    });

                    //drawingManager = new google.maps.drawing.DrawingManager({
                    //    drawingMode: google.maps.drawing.OverlayType.POLYGON,
                    //    markerOptions: {
                    //        draggable: true
                    //    },
                    //    polylineOptions: {
                    //        editable: true
                    //    },


                    //    map: mapgeofence
                    //});




                    drawingManager.setMap(mapgeofence);


                    //google.maps.event.addListener(drawingManager, 'polygoncomplete', function (event) {
                    //    if (event.type == google.maps.drawing.OverlayType.POLYGON) {
                    //        var radius = event.overlay.getRadius();
                    //        alert(radius);
                    //    }
                    //});


                    google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {
                        resetMenuDrawButton();
                        if (countshape <= 0) {
                            var coordinatespolygon = (polygon.getPath().getArray());
                            polygonpaths = new google.maps.Polygon({
                                paths: coordinatespolygon
                            });

                            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Processing V.Bondary..' });
                            var task = Ext.create('Ext.util.DelayedTask', function () {
                                coorshape = '';
                                coorshape += coordinatespolygon;
                                var tempkm;
                                // alert(coorshape);
                                geofencepolyLengthInMeters = google.maps.geometry.spherical.computeLength(polygon.getPath().getArray());

                                geofencetravellength = +Math.floor(geofencepolyLengthInMeters);
                                tempkm = geofencetravellength / 1000;
                                InsertGeoFences(AAccountNo, SingleTrackID, trackingItems, tempkm, coorshape, "polygon", AAlertEmail, AAlertEmail, AAlertEmail, FenceAlertPhone1, FenceAlertPhone2, FenceAlertPhone3, FenceAlertPhone4, UserName, OS, 'CreatedFence', 'initialNotSend', 'ANSxyGPS@hotmail.my', '+60193198764', FenceAlertName1, FenceAlertName2, FenceAlertName3, FenceAlertName4, AISMSAlertMsg, geofenceArea, FenceAlertRelationship1, FenceAlertRelationship2, FenceAlertRelationship3, FenceAlertRelationship4);
                                
                                
                               
                                geofencetravellengthkm = tempkm + 'KM';
                                geofenceLength = tempkm + 'KM';
                                Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">V.Bondary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
                            //    Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
                              //  Ext.getCmp('Infogeofenceinfo').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">GeoFences Info</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Tracking ID</td> <td class="tdgpslabel">' + SingleTrackID + '</td></tr><tr> <td class="tdgpslabel">Track Item</td> <td class="tdgpslabel">' + trackingItems + '</td></tr><tr> <td class="tdgpslabel">Geofence Length</td> <td class="tdgpslabel">' + geofencetravellengthkm + '</td></tr><tr> <td class="tdgpslabel">Geofence Alert</td> <td class="tdgpslabel">' + Ext.getCmp('AccAlertPhone').getValue() + '</td></tr></table>');
                                shapetype = "polygon";
                                Ext.Viewport.unmask();
                            });
                            task.delay(1000);
                          



                            
                            //alert(geofencetravellengthkm);
                        }

                        countshape = countshape + 1;
                        if (countshape > 1) {

                            detectedmoreshape();
                            //drawingManager.setOptions({
                            //    drawingControl: false
                            //});

                        }

                    });


                    google.maps.event.addListener(drawingManager, 'polylinecomplete', function (polyline) {

                        var coordinatespolyline = (polyline.getPath().getArray());
                        polylinespaths = new google.maps.polyline({
                            paths: coordinatespolyline
                        });
                        shapetype = "polyline";
                        coorshape = coordinatespolyline;

                        countshape = countshape + 1;
                        if (countshape >= 2) {

                            detectedmoreshape();
                            //drawingManager.setOptions({
                            //    drawingControl: false
                            //});

                        }
                    });


                    google.maps.event.addListener(drawingManager, 'rectanglecomplete', function (rectangle) {

                        var coordinates = (rectangle.getBounds());
                        alert(coordinates);


                        countshape = countshape + 1;
                        if (countshape >= 2) {

                            detectedmoreshape();
                            //drawingManager.setOptions({
                            //    drawingControl: false
                            //});

                        }
                    });

                    google.maps.event.addListener(drawingManager, 'circlecomplete', function (circle) {
                        resetMenuDrawButton();
                        if (countshape <= 0) {


                            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Processing V.bondary' });
                            var task = Ext.create('Ext.util.DelayedTask', function () {
                               
                                InsertGeoFences(AAccountNo, SingleTrackID, trackingItems, circle.getRadius(), circle.getCenter().lat() + ',' + circle.getCenter().lng(), "circle", AAlertEmail, AAlertEmail, AAlertEmail, FenceAlertPhone1, FenceAlertPhone2, FenceAlertPhone3, FenceAlertPhone4, UserName, OS, 'CreatedFence', 'initialNotSend', 'ANSxyGPS@hotmail.my', '+60193198764', FenceAlertName1, FenceAlertName2, FenceAlertName3, FenceAlertName4, AISMSAlertMsg, geofenceArea, FenceAlertRelationship1, FenceAlertRelationship2, FenceAlertRelationship3, FenceAlertRelationship4);
                                radiuse = circle.getRadius();
                                geofencetravellengthkm = parseInt(radiuse) + 'M(radius)';
                                geofenceLength = +Math.floor(radiuse);
                                circlecenterY = circle.getCenter().lat();
                                circlecenterX = circle.getCenter().lng();
                                shapetype = "circle";
                               // Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
                                Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Fence Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');


                                // Ext.getCmp('Infogeofenceinfo').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">GeoFences Info</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Tracking ID</td> <td class="tdgpslabel">' + SingleTrackID + '</td></tr><tr> <td class="tdgpslabel">Track Item</td> <td class="tdgpslabel">' + trackingItems + '</td></tr><tr> <td class="tdgpslabel">Geofence Length</td> <td class="tdgpslabel">' + geofencetravellengthkm + '</td></tr><tr> <td class="tdgpslabel">Geofence Alert</td> <td class="tdgpslabel">' + Ext.getCmp('AccAlertEmail').getValue() + '</td></tr></table>');
                                Ext.Viewport.unmask();
                            });
                            task.delay(1000);
                           
                            google.maps.event.addListener(circle, 'radius_changed', function () {
                                Ext.Viewport.mask({ xtype: 'loadmask', message: 'Radius change..Processing V.Boundary' });
                                var task = Ext.create('Ext.util.DelayedTask', function () {
                                    InsertGeoFences(AAccountNo, SingleTrackID, trackingItems, circle.getRadius(), circle.getCenter().lat() + ',' + circle.getCenter().lng(), "circle", AAlertEmail, AAlertEmail, AAlertEmail, FenceAlertPhone1, FenceAlertPhone2, FenceAlertPhone3, FenceAlertPhone4, UserName, OS, 'CreatedFence', 'initialNotSend', 'ANSxyGPS@hotmail.my', '+60193198764', FenceAlertName1, FenceAlertName2, FenceAlertName3, FenceAlertName4, AISMSAlertMsg, geofenceArea,FenceAlertRelationship1, FenceAlertRelationship2, FenceAlertRelationship3, FenceAlertRelationship4);
                                    radiuse = circle.getRadius();                                  
                                    geofencetravellengthkm = parseInt(radiuse) + 'M(radius)';
                                    geofenceLength = geofencetravellengthkm + '(radius)';
                                    circlecenterY = circle.getCenter().lat();
                                    circlecenterX = circle.getCenter().lng();
                                    shapetype = "circle";
                                    Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
                                   // Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
                                    Ext.getCmp('Infogeofenceinfo').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">GeoFences Info</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Tracking ID</td> <td class="tdgpslabel">' + SingleTrackID + '</td></tr><tr> <td class="tdgpslabel">Track Item</td> <td class="tdgpslabel">' + trackingItems + '</td></tr><tr> <td class="tdgpslabel">Geofence Length</td> <td class="tdgpslabel">' + geofencetravellengthkm + '</td></tr><tr> <td class="tdgpslabel">Geofence Alert</td> <td class="tdgpslabel">' + Ext.getCmp('AccAlertEmail').getValue() + '</td></tr></table>');
                                    Ext.Viewport.unmask();
                                });
                                task.delay(1000);
                               // console.log('radius changed');
                                radiuse = circle.getRadius();
                                geofencetravellengthkm = radiuse + '(radius)';
                                
                            });



                        }
                        countshape = countshape + 1;
                        if (countshape > 1) {
                            // stopClockGeoFence();
                            detectedmoreshape();
                            //drawingManager.setOptions({
                            //    drawingControl: false
                            //});

                        }

                    });

                    google.maps.event.addListener(drawingManager, 'overlaycomplete', function (e) {
                        if (e.type == google.maps.drawing.OverlayType.POLYGON) {
                            // Switch back to non-drawing mode after drawing a shape.
                            drawingManager.setDrawingMode(null);
                            resetMenuDrawButton();
                            //   countshape = countshape + 1;

                        //    countshape = countshape + 1;

                            if (countshape == 0) {
                                oriShape = e.overlay;
                                oriShape.type = e.type;
                                // alert(oriShape);

                            }

                            if (countshape >= 1) {
                                var newShape = e.overlay;
                                newShape.type = e.type;
                                setSelection(newShape);
                            }


                            //if (countPolygon == 0) {
                            //    oriShapePolygon = e.overlay;
                            //    oriShapePolygon.type = e.type;

                            //}

                            //if (countPolygon >=1)
                            //{
                            //    var newShape = e.overlay;
                            //    newShape.type = e.type;
                            //    setSelection(newShape);
                            //}
                        }
                        if (e.type == google.maps.drawing.OverlayType.POLYLINE) {
                            // Switch back to non-drawing mode after drawing a shape.
                            drawingManager.setDrawingMode(null);

                            //  countshape = countshape + 1;



                            if (countshape == 0) {
                                oriShape = e.overlay;
                                oriShape.type = e.type;


                            }

                            if (countshape >= 1) {
                                var newShape = e.overlay;
                                newShape.type = e.type;
                                setSelection(newShape);
                            }
                        }

                        if (e.type == google.maps.drawing.OverlayType.CIRCLE) {
                            // Switch back to non-drawing mode after drawing a shape.
                            drawingManager.setDrawingMode(null);
                            resetMenuDrawButton();
                         //     countshape = countshape + 1;

                            if (countshape == 0) {
                                oriShape = e.overlay;
                                oriShape.type = e.type;

                            }

                            if (countshape >= 1) {
                                var newShape = e.overlay;
                                newShape.type = e.type;
                                setSelection(newShape);
                            }
                        }
                        if (e.type == google.maps.drawing.OverlayType.RECTANGLE) {
                            // Switch back to non-drawing mode after drawing a shape.
                            drawingManager.setDrawingMode(null);

                            //    countshape = countshape + 1;



                            if (countshape == 0) {
                                oriShape = e.overlay;
                                oriShape.type = e.type;

                            }

                            if (countshape >= 1) {
                                var newShape = e.overlay;
                                newShape.type = e.type;
                                setSelection(newShape);
                            }
                        }
                    });






                    // Clear the current selection when the drawing mode is changed, or when the
                    // map is clicked.


                    //google.maps.event.addListener(drawingManager, 'drawingmode_changed', clearSelection);
                    //google.maps.event.addListener(mapgeofence, 'click', clearSelection);


                    //          google.maps.event.addListener(multimarker, 'mousedown',
                    //function (event) {

                    //var triangleCoords = [
                    //  new google.maps.LatLng(33.5362475, -111.9267386),
                    //  new google.maps.LatLng(33.5104882, -111.9627875),
                    //  new google.maps.LatLng(33.5004686, -111.9027061)
                    //];

                    //// Construct the polygon
                    //bermudaTriangle = new google.maps.Polygon({
                    //    paths: triangleCoords,
                    //    draggable: true, // turn off if it gets annoying
                    //    editable: true,
                    //    strokeColor: '#FF0000',
                    //    strokeOpacity: 0.8,
                    //    strokeWeight: 2,
                    //    fillColor: '#FF0000',
                    //    fillOpacity: 0.35
                    //});



                    //bermudaTriangle.setMap(mapgeofence);
                    //google.maps.event.addListener(bermudaTriangle, "dragend", getPolygonCoords);
                    //google.maps.event.addListener(bermudaTriangle.getPath(), "insert_at", getPolygonCoords);
                    //google.maps.event.addListener(bermudaTriangle.getPath(), "remove_at", getPolygonCoords);
                    //google.maps.event.addListener(bermudaTriangle.getPath(), "set_at", getPolygonCoords);



                }






            }


        });

    }

});




function createPolyline(polyC) {
    //Path = new google.maps.Polyline({
    Path = new google.maps.Polygon({
        path: polyC,
        //   draggable: true,
        editable: true,
        strokeColor: boundaryColor,
        strokeOpacity: 1.0,
        strokeWeight: 4
    });
    Path.setMap(mapgeofence);
}


var selectedShape;



function clearSelection() {
    if (selectedShape) {
        //selectedShape.setEditable(false);
        //selectedShape = null;
    }
}

function setSelection(shape) {
    clearSelection();
    selectedShape = shape;
    //shape.setEditable(true);
    //selectColor(shape.get('fillColor') || shape.get('strokeColor'));
}

function deleteSelectedShape() {
    if (selectedShape) {
        dialogboxdeletemore.hide();
        selectedShape.setMap(null);
      
    }
}

function deleteAllSelectedShape() {
   // alert("oriShapePolygon");
    if (oriShape) {
        //  stopClockGeoFence();
        countshape = 0;
        oriShape.setMap(null);
    }

    if (polygonpaths) {
        countshape = 0;
        polygonpaths.setMap(null);
    } 

    if (draw_circle) {
        countshape = 0;
        draw_circle.setMap(null);
    }
}




function detectedmoreshape() {
    //Ext.Msg.show({
    //    title: 'Geofence Multiple Shape',
    //    message: 'Multiple Shape detected..!,geofence only valid in a shape, new shape will be deleted.!',
    //    width: 300,
    //    buttons: Ext.MessageBox.OK,
    //    iconCls: Ext.MessageBox.INFO,
    //    fn: function (buttonIdmsg) {
    //        Ext.Viewport.mask({ xtype: 'loadmask', message: 'Removing new Shape..' });
    //        var task = Ext.create('Ext.util.DelayedTask', function () {
    //            coorshape = '';
    //            deleteSelectedShape();
    //            //countPolygon = 0;
    //            startmapgeofences();;
    //            Ext.Viewport.unmask();
    //        });
    //        task.delay(1000);


    //    }
    //});

    ////
    if (!dialogboxdeletemore) {
        dialogboxdeletemore = Ext.create('Ext.form.Panel', {
            centered: true,
            modal: true,
            hideOnMaskTap: true,
            width: 250,
            height: 120,
            style: "background-color: black;",
            scrollable: false,

            items: [
                {

                    html: '<font size="4" color="white">Multiple Shape detected..!,geofence only valid in a shape!</font>'
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

                    //    {
                    //    xtype: 'button',

                    //    itemId: 'BtnsremoveContinueCancel',
                    //    ui: 'round',
                    //    //  padding: '10px',
                    //    text: '<font size="3" color="white">Cancel</font>',
                    //    handler: function () {

                    //        dialogboxsendCommand.hide();

                    //    }
                    //},

                    //{
                    //    xtype: 'spacer'
                    //},
                                {
                                    xtype: 'button',

                                    itemId: 'BtnRemoveShapeContinueOK',
                                    ui: 'round',
                                    // padding: '10px',
                                    // text: 'OK/Procced.',
                                    html: '<font size="3" color="white">OK/Procced.</font>',
                                    handler: function () {
                                      
                                        Ext.Viewport.mask({ xtype: 'loadmask', message: 'Removing new Shape..' });
                                        var task = Ext.create('Ext.util.DelayedTask', function () {
                                           
                                            coorshape = '';
                                            deleteSelectedShape();
                                            //countPolygon = 0;
                                            startmapgeofences();
                                            Ext.Viewport.unmask();
                                        });
                                        task.delay(1000);


                                    }
                                },

                    ]

                },

            ]
        });
        Ext.Viewport.add(dialogboxdeletemore);
    }
    dialogboxdeletemore.show();


}


function selectColor(color) {
    selectedColor = boundaryColor;


    // Retrieves the current options from the drawing manager and replaces the
    // stroke or fill color as appropriate.


    //var polygonOptions = drawingManager.get('polygonOptions');
    //polygonOptions.fillColor = boundaryColor;
    //drawingManager.set('polygonOptions', polygonOptions);
}

function setSelectedShapeColor(boundaryColor) {
    //if (selectedShape) {
    //    if (selectedShape.type == google.maps.drawing.OverlayType.POLYLINE) {
    //        selectedShape.set('strokeColor', boundaryColor);
    //    } else {
    //        selectedShape.set('fillColor', boundaryColor);
    //    }
    //}
}



















function loadmarkerGeoFence() {
    Ext.getStore('singlesignalstore').getProxy().setExtraParams({
        TrackID: SingleTrackID,
        AccountNo: AAccountNo
    });
    Ext.StoreMgr.get('singlesignalstore').load();
    Ext.getCmp('Infogeofenceinfo').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">GeoFences Info</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Tracking ID</td> <td class="tdgpslabel">' + SingleTrackID + '</td></tr><tr> <td class="tdgpslabel">Track Item</td> <td class="tdgpslabel">' + trackingItems + '</td></tr><tr> <td class="tdgpslabel">Geofence Length</td> <td class="tdgpslabel">' + geofencetravellengthkm + '</td></tr><tr> <td class="tdgpslabel">Geofence Alert</td> <td class="tdgpslabel">' + Ext.getCmp('AccAlertPhone').getValue() + '</td></tr></table>');
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point..Please Wait.' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('singlesignalstore').getProxy().setExtraParams({
            TrackID: SingleTrackID,
            AccountNo: AAccountNo
        });

     

    
        Ext.StoreMgr.get('singlesignalstore').load();
        var myStore = Ext.getStore('singlesignalstore');
        var modelRecord = myStore.getAt(0);
        latGeofence = modelRecord.get('Latitude');
        longGeofence = modelRecord.get('Longitude');
        boundreboundlatlong = new google.maps.LatLng(latGeofence, longGeofence);
        boundstatus = 'yes';
        var posisigeofence = new google.maps.LatLng(latGeofence, longGeofence);
        //markerGeofence = new google.maps.Marker({
        //    position: posisigeofence,
        //    draggable: false,
        //    map: mapgeofence,
        //    title: SingleTrackID
        //});

        mapgeofence.setCenter(posisigeofence)
        mapgeofence.setZoom(16);


        Ext.Viewport.unmask();

        startmapgeofences('start');
    });
    task.delay(1000);
 
   

    loadgeofence();
   


}



var _valuepanelgeofenceinfo =
    Ext.create('Ext.Panel', {

        xtype: 'panel',
        // style: 'background-color:#57A0DC',
        height: 100,
        //width: 320,
        //  centered: true,
        // height: '10%',
        width: '100%',
        // centered: false,
        id: 'panelgeofenceinfo',
        draggable: false,

        right: 0,
        bottom: 0,


        showAnimation: {
            type: 'slide',
            direction: 'up',
            duration: 350,
            easing: 'ease-out',

        },
        hideAnimation: {
            type: null,
            direction: null,
            duration: 650,
            easing: null,
            out: true

        },


        //right: 1,
        //bottom: 1,
        style: 'background-color: #57A0DC;',
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

            //   html: '<table class="tblmasterhistory"><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr></table>',
            id: 'Infogeofenceinfo',
            html: '<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">GeoFences Setting</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">Tracked Item</td></tr><tr> <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr> <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr> <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr></table>',
            //html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">' + Infotrackid + '</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">' + Infotracktype + '</td> </tr>    <tr > <td class="tdspeedmax">80km/h</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
            //html: 'First Panel<br>ssssssss<br>cvxvc<br>ccdfdfs',
            ////style: 'background-color: #5E99CC;'
            //style: 'background-color: #57A0DC;'



            items: {

                xtype: 'container',
                layout: {
                    type: 'hbox',
                    pack: 'right',
                    // align: 'end'
                },
                items: [


                   


                {
                    xtype: 'button',

                    Id: 'deletegeofenceinfo',
                    //   hidden:true,
                    // margin: 'top left bottom right',
                    margin: '-40 0 0 0',
                    //style: 'margin-top: 350px;margin-left: 500px;',
                    // text: '',
                    height: 45,
                    width: 50,
                    html: '<div ><img src="resources/icons/deletegeofence.png" width="40" height="40" alt="Company Name"></div>',
                    //ui:'round'
                    ui: 'plain',
                    handler: function (btn) {

                        //Ext.Msg.show({
                        //    title: 'DELETE GEOFENCE',
                        //    message: 'Delete Geofence for this item?',
                        //    width: 500,
                        //    buttons: Ext.MessageBox.YESNO,
                        //    iconCls: Ext.MessageBox.INFO,
                        //    fn: function (buttonId) {
                        //        if (buttonId == "yes") {
                        //            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Deleting V.Boundary' });
                        //            var task = Ext.create('Ext.util.DelayedTask', function () {
                        //                Ext.getCmp('sound1').stop();
                        //                _GeofenceAlertSoundPanel.hide();
                        //                alertisplay = "no";
                        //                alertison = "no";
                        //               // Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
                        //                DeleteGeoFences(AAccountNo, SingleTrackID);
                        //                shapetype = "none";
                        //                deleteAllSelectedShape();
                        //                coorshape = '';
                        //                Geofence_OutOfFence_Respond(AAccountNo, SingleTrackID);
                        //                Ext.Viewport.unmask();
                        //                Ext.getCmp('Infogeofenceinfo').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">GeoFences Info</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Tracking ID</td> <td class="tdgpslabel">' + SingleTrackID + '</td></tr><tr> <td class="tdgpslabel">Track Item</td> <td class="tdgpslabel">' + trackingItems + '</td></tr><tr> <td class="tdgpslabel">Geofence Length</td> <td class="tdgpslabel">Disabled</td></tr><tr> <td class="tdgpslabel">Geofence Alert</td> <td class="tdgpslabel">Disabled</td></tr></table>');
                        //                //Ext.Msg.alert("Disabled Geofence..");
                        //                if ((messageboxss())) {
                        //                    Ext.Viewport.add(messageboxss('Disabled Geofence'));
                        //                }
                                       
                        //            });
                        //            task.delay(1000);
                        //            Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
                        //        }


                        //    }
                        //});

                        ///////////////


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

                                        html: '<font size="4" color="white">Delete Geofence for this item?</font>'
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
                                                            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Deleting V.Boundary' });
                                                            var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                Ext.getCmp('sound1').stop();
                                                                _GeofenceAlertSoundPanel.hide();
                                                                alertisplay = "no";
                                                                alertison = "no";
                                                                // Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
                                                                DeleteGeoFences(AAccountNo, SingleTrackID);
                                                                shapetype = "none";
                                                                deleteAllSelectedShape();
                                                                coorshape = '';
                                                                Geofence_OutOfFence_Respond(AAccountNo, SingleTrackID);
                                                                Ext.Viewport.unmask();
                                                                Ext.getCmp('Infogeofenceinfo').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">GeoFences Info</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Tracking ID</td> <td class="tdgpslabel">' + SingleTrackID + '</td></tr><tr> <td class="tdgpslabel">Track Item</td> <td class="tdgpslabel">' + trackingItems + '</td></tr><tr> <td class="tdgpslabel">Geofence Length</td> <td class="tdgpslabel">Disabled</td></tr><tr> <td class="tdgpslabel">Geofence Alert</td> <td class="tdgpslabel">Disabled</td></tr></table>');
                                                                //Ext.Msg.alert("Disabled Geofence..");
                                                               
                                                                //if ((messageboxss())) {
                                                                //    dialogboxdeletegeofence.hide();
                                                                //    Ext.Viewport.add(messageboxss('Disabled Geofence'));
                                                                //}

                                                            });
                                                            task.delay(1000);
                                                           // Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
                                                            Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');

                                                        }
                                                    },

                                        ]

                                    },

                                ]
                            });
                            Ext.Viewport.add(dialogboxdeletegeofence);
                        }
                        dialogboxdeletegeofence.show();




                    }



                },
                {
                    xtype: 'audio',
                    url:  ip+ 'GeofenceAlarm.mp3',
                    id: 'sound1',
                    loop : true,
                    hidden: true
                },
                
                
                
                {
                    xtype: 'button',

                    Id: 'hidegeofenceinfo',
                    //   hidden:true,
                    // margin: 'top left bottom right',
                    margin: '-40 0 0 0',
                    //style: 'margin-top: 350px;margin-left: 500px;',
                    // text: '',
                    height: 45,
                    width: 50,
                    html: '<div ><img src="resources/icons/window_down.png" width="40" height="40" alt="Company Name"></div>',
                    //ui:'round'
                    ui: 'plain',
                    handler: function () {

                     
                        _valuepanelgeofenceinfo.hide();

                        //if (this.overlay) {
                        //    this.overlay = Ext.Viewport.add(_valuepanelgeofenceinfo
                        //);

                        //}
                        //this.overlay.hide();
                    }
                },
                

                ]


            }

        }


    });



var clickedmapgeofence = false;
var mapgeofencesec = 0;
//var clockgeofence;


var timer = 0;
function startmapgeofences(val) {

  
    if (val == 'start') {
        timer = setInterval(function () {
            mapgeofencesec = mapgeofencesec + 1;
            if (mapgeofencesec == 1) {
                Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                    TrackID: SingleTrackID,
                    AccountNo: AAccountNo
                });
                Ext.StoreMgr.get('singlesignalstore').load();
                var myStore = Ext.getStore('singlesignalstore');
                var cou = myStore.getCount();
                if (cou >= 1) {

                    try {
                        var modelRecord = myStore.getAt(0);
                        latGeofence = modelRecord.get('Latitude');
                        longGeofence = modelRecord.get('Longitude');
                        geofenceSpeed = modelRecord.get('Speed');
                        geofenceTrackID = modelRecord.get('TrackID');
                        //IMEI_no = modelRecord.get('IMEI_no');
                        //GPSSimNumber = modelRecord.get('GPSSimNumber');
                        //BatteryReading = modelRecord.get('BatteryReading');
                        gfenceTrackItem = modelRecord.get('TrackItem');
                        //TrackItemType = modelRecord.get('TrackItemType');
                        //GPSModel = modelRecord.get('GPSModel');
                        //AccountNo = modelRecord.get('AccountNo');
                        geofenceDateDT = modelRecord.get('DateDT');


                        gFenceAlertResponder = modelRecord.get('FenceAlertResponder');
                        gFenceAlertResponder2 = modelRecord.get('FenceAlertResponder2');
                        gFenceAlertResponder3 = modelRecord.get('FenceAlertResponder3');
                        gFenceAlertResponder4 = modelRecord.get('FenceAlertResponder4');
                        gFenceAlertResponderRelations = modelRecord.get('FenceAlertResponderRelations');
                        gFenceAlertResponderRelations2 = modelRecord.get('FenceAlertResponderRelations2');
                        gFenceAlertResponderRelations3 = modelRecord.get('FenceAlertResponderRelations3');
                        gFenceAlertResponderRelations4 = modelRecord.get('FenceAlertResponderRelations4');
                        gFencelenght = modelRecord.get('Fencelenght');
                        gCreateddate = modelRecord.get('Createddate');
                        gFenceName = modelRecord.get('FenceName');
                        bSex = modelRecord.get('Sex');
                        bAge = modelRecord.get('Age');
                        bRisk = modelRecord.get('Risk');
                        //  bPicture = modelRecord.get('Picture');
                        // console.log('SelectedMarker:' + SelectedMarker);
                        SelectedMarker = 'Standard';
                        console.log("Running:" + mapgeofencesec);
                        // console.log('checkingimgMarker:' + checkingimgMarker);
                        // if ((SelectedMarker != checkingimgMarker) || (AttachedLabelOnMarker != checkingAttachedLblOnMarker))
                        //   {

                        if (checklongGeofence == longGeofence)
                            {return}


                        boundreboundlatlong = new google.maps.LatLng(latGeofence, longGeofence);



                        if (SelectedMarker == 'Standard') {
                            image = new google.maps.MarkerImage(ip + 'geofencemarker.png', null, null, null, new google.maps.Size(62, 62));
                            if (AttachedLabelOnMarker == '1') {

                                markerGeofence = new MarkerWithLabel({
                                    position: boundreboundlatlong,
                                    icon: image,
                                    flat: true,
                                    //  optimized: false,
                                    draggable: false,
                                    //labelStyle: { opacity: 0.75 },
                                    // labelContent: "<div style=background-color:Black;width:auto;border:2px solid white;padding:15px;><font size=3 color=white>" + trackingItems + "</font></div>",
                                    labelContent: trackingItems,
                                    labelAnchor: new google.maps.Point(50, 79),
                                    labelClass: "labelsMark",// the CSS class for the label
                                    map: mapgeofence,
                                    title: SingleTrackID
                                });
                            } else if (AttachedLabelOnMarker == '0') {

                                markerGeofence = new MarkerWithLabel({
                                    position: boundreboundlatlong,
                                    icon: image,
                                    flat: true,
                                    draggable: false,
                                    map: mapgeofence,
                                    title: SingleTrackID
                                });

                            }
                        }
                        if (SelectedMarker == 'Red Push Pin') {
                            image = new google.maps.MarkerImage(ip + 'marker02.png', null, null, null, new google.maps.Size(62, 62));
                            if (AttachedLabelOnMarker == '1') {

                                markerGeofence = new MarkerWithLabel({
                                    position: boundreboundlatlong,
                                    icon: image,
                                    flat: true,
                                    //  optimized: false,
                                    draggable: false,
                                    //labelStyle: { opacity: 0.75 },
                                    // labelContent: "<div style=background-color:Black;width:auto;border:2px solid white;padding:15px;><font size=3 color=white>" + trackingItems + "</font></div>",
                                    labelContent: trackingItems,
                                    labelAnchor: new google.maps.Point(50, 79),
                                    labelClass: "labelsMark",// the CSS class for the label
                                    map: mapgeofence,
                                    title: SingleTrackID
                                });
                            } else if (AttachedLabelOnMarker == '0') {
                                markerGeofence = new MarkerWithLabel({
                                    position: boundreboundlatlong,
                                    icon: image,
                                    flat: true,
                                    draggable: false,
                                    map: mapgeofence,
                                    title: SingleTrackID
                                });

                            }

                        }
                        if (SelectedMarker == 'Circle Graphic') {
                            image = new google.maps.MarkerImage(ip + '7.gif', null, null, new google.maps.Point(8, 8), new google.maps.Size(32, 32));
                            if (AttachedLabelOnMarker == '1') {
                                markerGeofence = new MarkerWithLabel({
                                    position: boundreboundlatlong,
                                    icon: image,
                                    draggable: false,
                                    flat: true,
                                    labelContent: trackingItems,
                                    labelAnchor: new google.maps.Point(50, 27),
                                    labelClass: "labelsMark",// the CSS class for the label
                                    map: mapgeofence,
                                    title: SingleTrackID
                                });
                            } else if (AttachedLabelOnMarker == '0') {
                                markerGeofence = new MarkerWithLabel({
                                    position: boundreboundlatlong,
                                    icon: image,
                                    flat: true,
                                    draggable: false,
                                    map: mapgeofence,
                                    title: SingleTrackID
                                });


                            }
                        }
                        markerGeofence.id = uniqueId;
                        if (uniqueId > 1) {
                            DeleteMarker(markerGeofence.id - 1);
                        }

                        uniqueId++;

                        checklongGeofence = longGeofence;
                        markers.push(markerGeofence);
                        checkingimgMarker = SelectedMarker;
                        checkingAttachedLblOnMarker = AttachedLabelOnMarker;
                      


                        google.maps.event.addListener(markerGeofence, 'mousedown',
             function (event) {


                 if (!this.overlay) {
                     this.overlay = Ext.Viewport.add(_geofence_detailfencepanel);



                 }

                 this.overlay.show();
                 //  btnGeofenceAreaSaved
                 //   geofenceArea

                 setGeoFencesDetails();

                 Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Fetching..</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + bPicture + '></td> </tr></table>');
             

             });

                   

                  
                    }
                    catch (ert) {
                        console.log(ert);
                    }

                }
              
                if (PanMapAfterPointChange == '1') {
                    mapgeofence.setCenter(boundreboundlatlong)
                    mapgeofence.setZoom(16);
                }

              // mapgeofencesec = 0;

            }

            if (mapgeofencesec == 2) {

                if (shapetype == "polygon" || shapetype == "polyline") {
                    // console.log(shapetype);
                    alertID = SingleTrackID;
                    if (google.maps.geometry.poly.containsLocation(markerGeofence.getPosition(), polygonpaths) == false) {




                        if (alertisplay == "no") {
                            Ext.getCmp('sound1').play();
                            alertisplay = "yes";
                            //  OutOfFence_Alert(AAccountNo, SingleTrackID, "yes");
                            //   console.log("count send to DB:" + mapgeofencesec);
                            //  _GeofenceAlertSoundPanel.show();
                            if (!this.overlay) {
                                this.overlay = Ext.Viewport.add(_GeofenceAlertSoundPanel
                            );

                            }
                            this.overlay.show();
                            //if (OutOfFenceRespond =="Yes")
                            //{
                            //   // alert(OutOfFenceRespond+"  kkk");
                            //    Ext.getCmp('sound1').pause();
                            //}


                        }

                        //  Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: red; text-align: center;">ALERT !!!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 9px; color: red; text-align: left;">out of fence!</td> </tr></table>');

                        Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">Out Of Fence!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">' + geofenceSpeed + '</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + geofenceDateDT + '</td> </tr>  </table>');
                        //  Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">Out Of Fence!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
                        //Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">OUT OF FENCE.!!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + document.location.protocol + '//' + document.location.host + '/resources/icons/About.jpg></td> </tr></table>');
                        Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">OUT OF FENCE.!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + bPicture + '></td> </tr></table>');


                        geoFenceStatus = "OUT OF FENCE.!!";
                        alertison = "yes";
                        setTimeout(function () {
                            Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: Red; text-align: center;  valign:top; height:20%">OUT OF FENCE.!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Fence Status</td> </tr>    <tr > <td class="tdspeedmax">' + geofenceSpeed + '</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + geofenceDateDT + '</td> </tr>  </table>');
                            Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: Red; text-align: center;">OUT OF FENCE.!!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + bPicture + '></td> </tr></table>');
                            //if (markerGeofence) {
                            //    markerGeofence.setMap(null);
                            //}

                        }, 500);
                        return;
                    }
                    if (google.maps.geometry.poly.containsLocation(markerGeofence.getPosition(), polygonpaths) == true) {
                        Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Fence Status</td> </tr>    <tr > <td class="tdspeedmax">' + geofenceSpeed + '</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + geofenceDateDT + '</td> </tr>  </table>');
                        // Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
                        //Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Fence Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
                        // Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Fence Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
                        //  Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + document.location.protocol + '//' + document.location.host + '/resources/icons/About.jpg></td> </tr></table>');

                        Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + bPicture + '></td> </tr></table>');

                        geoFenceStatus = "ENABLED";
                        alertison = "no";
                        if (alertisplay == "yes") {
                            //  OutOfFence_Alert(AAccountNo, SingleTrackID, "no");
                            Ext.getCmp('sound1').stop();
                            _GeofenceAlertSoundPanel.hide();
                            //  Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
                            Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
                            //  Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
                            // Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + document.location.protocol + '//' + document.location.host + '/resources/icons/About.jpg></td> </tr></table>');
                            Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + bPicture + '></td> </tr></table>');

                            geoFenceStatus = "DISABLED";
                            alertisplay = "no";
                        }




                        return;

                    }
                }
                if (shapetype == "circle") {
                    // console.log(shapetype);
                    detectmarkerinradius();
                } else {

                    Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + bPicture + '></td> </tr></table>');
                    Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">' + geofenceSpeed + '</td> <td class="tdspeedmax">Tracking..</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + geofenceDateDT + '</td> </tr>  </table>');
                }
                mapgeofencesec = 0;

            }

        }, 500);
    } else {
      //  console.log("STOPzcxxxxxxc" + val);
        clearInterval(timer);
    }
}




var countaddmarker = 0;
var markers = [];
var uniqueId = 1;
var geofenceSpeed;
var geofenceTrackID;
var geofenceIMEI_no;
var geofenceGPSSimNumber;
var geofenceBatteryReading;
var gfenceTrackItem;
var geofenceTrackItemType;
var geofenceGPSModel;
var geofenceAccountNo;
var geofenceDateDT;
var checkingimgMarker;
var checkingAttachedLblOnMarker;

var image;




function DeleteMarker(id) {
    //Find and remove the marker from the Array

    //console.log("DELETEEEE:"+id);
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].id == id) {
            //Remove the marker from Map                  
            markers[i].setMap(null);

            //Remove the marker from array.
            markers.splice(i, 1);
            return;
        }
    }
}

    function stopClockGeoFence() {
        startmapgeofences('stop');
       // console.log("STOPED");
        // Ext.getCmp('InfoSummDatasingle').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ABC1234</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">-UNKNOWN-</td> </tr>    <tr > <td class="tdspeedmax">000km/h</td> <td class="tdspeedmax">000km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">00:00:00:00:00:00:00</td> </tr>  </table>');
      //  window.clearInterval(clockgeofence);
        checklongGeofence = "000";
        mapgeofencesec = 0;

        clickedmapgeofence = false;

    }


    function detectmarkerinradius() {
        // alert(circlecenterY + "  -  " + circlecenterX);
        var center = new google.maps.LatLng(circlecenterY, circlecenterX);
        var latLng = new google.maps.LatLng(latGeofence, longGeofence);
        var distanceInMetres = google.maps.geometry.spherical.computeDistanceBetween(center, latLng)

      //  console.log("Radius:" + radiuse + " Distance" + distanceInMetres)
        if (distanceInMetres > radiuse) {

            alertID = SingleTrackID;
            alertison = "yes";
            if (alertisplay == "no") {
                Ext.getCmp('sound1').play();
                alertisplay = "yes";
              //  OutOfFence_Alert(AAccountNo, SingleTrackID, "yes");

                //   _GeofenceAlertSoundPanel.show();
                if (!this.overlay) {
                    this.overlay = Ext.Viewport.add(_GeofenceAlertSoundPanel
                );

                }
                this.overlay.show();
            }

           // Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: red; text-align: center;">ALERT !!!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 9px; color: red; text-align: left;">out of fence!</td> </tr></table>');
     
                Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: white; text-align: center;  valign:top; height:20%">OUT OF FENCE.!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">' + geofenceSpeed + '</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + geofenceDateDT + '</td> </tr>  </table>');
                Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: Red; text-align: center;">OUT OF FENCE.!!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + bPicture + '></td> </tr></table>');
            //if (markerGeofence) {
                //    markerGeofence.setMap(null);
                //}

          
            setTimeout(function () {
                //  Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">ALERT !!!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 9px; color: #fff; text-align: left;">out of fence!</td> </tr></table>');
                //Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">Out Of Fence!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
                Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: Red; text-align: center;  valign:top; height:20%">Out Of Fence!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">' + geofenceSpeed + '</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + geofenceDateDT + '</td> </tr>  </table>');
                Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">OUT OF FENCE.!!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + bPicture + '></td> </tr></table>');


                geoFenceStatus = "OUT OF FENCE.!!";
               // Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">OUT OF FENCE.!!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + document.location.protocol + '//' + document.location.host + '/resources/icons/About.jpg></td> </tr></table>');
            }, 500);

            return;
            // Ext.Msg.alert("Geofence breached.!!!");
            // console.log("Out Of Circle");
        }
        if (distanceInMetres < radiuse) {
            Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">' + geofenceSpeed + '</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + geofenceDateDT + '</td> </tr>  </table>');
           // Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
           geoFenceStatus = "ENABLED";
           // Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + document.location.protocol + '//' + document.location.host + '/resources/icons/About.jpg ></td> </tr></table>');
           Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + bPicture + '></td> </tr></table>');
            //   Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
            alertison = "no";
            if (alertisplay == "yes") {
                Ext.getCmp('sound1').pause();
                _GeofenceAlertSoundPanel.hide();
                Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">' + geofenceSpeed + '</td> <td class="tdspeedmax">Tracking..</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + geofenceDateDT + '</td> </tr>  </table>');
              //  Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
              //  Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + document.location.protocol + '//' + document.location.host + '/resources/icons/About.jpg></td> </tr></table>');

                Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + bPicture + '></td> </tr></table>');
                //  Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
               geoFenceStatus = "DISABLED";
                alertisplay = "no";
            }
            return;
        }
    }


    ////////////
    //var _GeofenceInfopanel =
    //    Ext.create('Ext.Panel', {

    //        xtype: 'panel',
    //        // style: 'background-color:#57A0DC',
    //        height: 55,
    //        //width: 320,
    //        //  centered: true,
    //        // height: '10%',
    //        width: 92,
    //        // centered: false,
    //        id: 'GeofenceInfopanels',
    //        draggable: false,

    //        right: 4,
    //        top: 58,


    //        showAnimation: {
    //            type: 'slide',
    //            direction: 'down',
    //            duration: 350,
    //            easing: 'ease-out',

    //        },
    //        hideAnimation: {
    //            type: null,
    //            direction: null,
    //            duration: 650,
    //            easing: null,
    //            out: null

    //        },


    //        //right: 1,
    //        //bottom: 1,
    //        style: 'background-color: #57A0DC;',
    //        //showAnimation: {
    //        //    type: 'slide',
    //        //    direction: 'down',
    //        //    duration: 350,
    //        //    easing: 'ease-out',

    //        //},
    //        //hideAnimation: {
    //        //    type: 'slide',
    //        //    direction: 'up',
    //        //    duration: 650,
    //        //    easing: 'ease-out',
    //        //    out: true
    //        //},


    //        items: {

    //            //   html: '<table class="tblmasterhistory"><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr></table>',
    //            id: 'GeofenceInfopanel',
    //            //  html: 'Point',
    //            // html: '<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr>    <tr > <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;   font-weight: normal;">80km/h</td> </tr> <tr> <td colspan="2" style="background-color: #57A0DC; font-weight: bold; font-size: 10px; color: #fff; text-align: center;  ">10:02:06 AM</td> </tr>  </table>',
    //            html: '<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>',

    //        }



    //    });








    ///////





    /////////////////////////////////////////////////
    var _GeofenceAlertSoundPanel =
        Ext.create('Ext.Panel', {
            xtype: 'panel',

            //height: 130,
            //width: 160,
            height: 0,
            width: 0,
            hidden: false,
            // height: '28.5%',
            // width: '44.5%',
            centered: false,
            id: 'AlertSoundPanel',
            draggable: false,

            right: 36,
            top: 128,
            style: 'background-color: #57A0DC;',

            //showAnimation: {
            //    type: 'slide',
            //    direction: 'left',
            //    duration: 250,
            //    easing: 'ease-out'
            //},
            //hideAnimation: {
            //    type: 'slide',
            //    direction: 'right',
            //    duration: 250,
            //    easing: 'ease-out',
            //    out: true
            //},


            items: {



                xtype: 'button',

                Id: 'stopAlert',
                // margin: 'top left bottom right',
                margin: '0 0 3 -8',
                //style: 'margin-top: 350px;margin-left: 500px;',
                // text: 'Start',
                height: 45,
                width: 50,
                html: '<div ><img src="resources/icons/stophistory.png" width="40" height="40" alt="Company Name"></div>',

                //ui:'round'
                ui: 'plain',
                handler: function (btn) {
                    if (buttonAlertstate == "stop") {
                        btn.setHtml('<div ><img src="resources/icons/playhistory.png" width="40" height="40" alt="Company Name"></div>');
                        Ext.getCmp('sound1').pause();
                        //  alertisplay = "yes";
                        buttonAlertstate = "play";
                        Geofence_OutOfFence_Respond(AAccountNo, SingleTrackID);

                        return;

                    }

                    if (buttonAlertstate == "play") {
                        btn.setHtml('<div ><img src="resources/icons/stophistory.png" width="40" height="40" alt="Company Name"></div>');
                        Ext.getCmp('sound1').play();
                        //    alertisplay = "yes";
                        buttonAlertstate = "stop";
                        return;

                    }

                }


            }



        });



    function generatePolygon(pathing) {

        mapPoly = new google.maps.Polygon({
            paths: pathing,
            strokeColor: "#FF8800",
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: "#FF8800",
            fillOpacity: 0.35
        });
        mapPoly.setMap(mapgeofence);
        countshape = 1;

    }
    var draw_circle;
    function generateCircle(yxcoor, radi) {
        var ctr = new google.maps.LatLng(circlecenterY, circlecenterX);
        draw_circle = new google.maps.Circle({
            center: ctr,
            radius: radiuse,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map: mapgeofence
        });
        countshape = 1;

    }

    var arraygeofence = [];


    function drawgefence(typeshape, pathxy, pathlenght) {
        //  alert(typeshape + pathxy + pathlenght);

       
        if (typeshape == 'circle') {
            var globalFileTypeId = pathxy.split(',');
            var b = parseInt(pathlenght);
            var ctr = new google.maps.LatLng(globalFileTypeId[0], globalFileTypeId[1]);
            draw_circle = new google.maps.Circle({
                center: ctr,
                radius: b,
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
                map: mapgeofence
            });
          // countshape = 1;
           countshape = countshape + 1;
            radiuse = b;
            geofencetravellengthkm = b + 'Meter(radius)';
            circlecenterY = globalFileTypeId[0];
            circlecenterX = globalFileTypeId[1];
            shapetype = "circle";
           // Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">Out Of Fence!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">' + geofenceSpeed + '</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + geofenceDateDT + '</td> </tr>  </table>');
          //  Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
           // Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
           // Ext.getCmp('Infogeofenceinfo').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">GeoFences Info</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Tracking ID</td> <td class="tdgpslabel">' + SingleTrackID + '</td></tr><tr> <td class="tdgpslabel">Track Item</td> <td class="tdgpslabel">' + trackingItems + '</td></tr><tr> <td class="tdgpslabel">Geofence Length</td> <td class="tdgpslabel">' + geofencetravellengthkm + '</td></tr><tr> <td class="tdgpslabel">Geofence Alert</td> <td class="tdgpslabel">' + Ext.getCmp('AccAlertPhone').getValue() + ' |Respond :' + OutOfFenceRespond + '</td></tr></table>');
            if (countshape > 1) {

                deleteShapeFromDrawFence(draw_circle);

            }

        }
        if (typeshape == 'polygon') {
            //arraygeofence.push(new google.maps.LatLng(this.lat, this.lng));

            var polysplit = pathxy.split('),');






            var index, len;
            var a = polysplit;
            for (index = 0, len = a.length; index < len; ++index) {
                //alert(a[index] + ')');

                var splitresult = a[index] + ')'.split(',');
                var text = splitresult.replace(/[\])}[{(]/g, '');
                var pathpoly = text.split(',');

                arraygeofence.push(new google.maps.LatLng(pathpoly[0], pathpoly[1]));

                // alert(text);



            }


            //var mps = ["((" + pathxy + "))"];
            //for (i in mps) {
            //    var lines = drawPoly(mps[i].replace("MULTIPOLYGON", ""));
            //    for (k = 0; k < lines.length; k++) {
            //        lines[k].setMap(map);


            //    }
            //    lines.length = 0;
            //}

            //  latlng.push(new google.maps.LatLng(this.lat, this.lng));

            //////////////////////////////////////




            //mapPoly = new google.maps.Polygon({
            //    paths: arraygeofence,
            //    strokeColor: "#FF8800",
            //    strokeOpacity: 0.8,
            //    strokeWeight: 3,
            //    fillColor: "#FF8800",
            //    fillOpacity: 0.35
            //});
            //mapPoly.setMap(mapgeofence);
            polygonpaths = new google.maps.Polygon({
                paths: arraygeofence,
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
                // strokeColor: "#FF8800",            
                //strokeOpacity: 0.8,
                //strokeWeight: 3,
                //fillColor: "#FF8800",
                //fillOpacity: 0.35
            });
            polygonpaths.setMap(mapgeofence);
            // countshape = 1;
           countshape = countshape + 1;
           arraygeofence.length = 0;
        //   Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">Out Of Fence!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">' + geofenceSpeed + '</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + geofenceDateDT + '</td> </tr>  </table>');
         //   Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
          //  Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
            // Ext.getCmp('Infogeofenceinfo').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">GeoFences Info</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Tracking ID</td> <td class="tdgpslabel">' + SingleTrackID + '</td></tr><tr> <td class="tdgpslabel">Track Item</td> <td class="tdgpslabel">' + trackingItems + '</td></tr><tr> <td class="tdgpslabel">Geofence Length</td> <td class="tdgpslabel">' + pathlenght + ' KM</td></tr><tr> <td class="tdgpslabel">Geofence Alert</td> <td class="tdgpslabel">' + Ext.getCmp('AccAlertEmail').getValue() + '</td></tr></table>');
          //  Ext.getCmp('Infogeofenceinfo').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">GeoFences Info</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Tracking ID</td> <td class="tdgpslabel">' + SingleTrackID + '</td></tr><tr> <td class="tdgpslabel">Track Item</td> <td class="tdgpslabel">' + trackingItems + '</td></tr><tr> <td class="tdgpslabel">Geofence Length</td> <td class="tdgpslabel">' + pathlenght + ' KM</td></tr><tr> <td class="tdgpslabel">Geofence Alert</td> <td class="tdgpslabel">' + Ext.getCmp('AccAlertPhone').getValue() + ' |Respond :' + OutOfFenceRespond + '</td></tr></table>');
            shapetype = "polygon";
            if (countshape > 1) {

                deleteShapeFromDrawFence(polygonpaths);

            }
        }

       

    }
    function deleteShapeFromDrawFence(newshapefence) {
    
            newshapefence.setMap(null);

       
    }

    function loadgeofence() {
        geofenceArea = "";
        Ext.Viewport.mask({ xtype: 'loadmask', message: 'Drawing V.Boundary.!!!!' });
        var task = Ext.create('Ext.util.DelayedTask', function () {
            Ext.getStore('geoFenceStore').getProxy().setExtraParams({
                AccountNo: AAccountNo,
                TrackID: SingleTrackID,


            });


            Ext.StoreMgr.get('geoFenceStore').load();
            var myStore = Ext.getStore('geoFenceStore');
            var co = myStore.getCount();
            //alert(co + "---" + AAccountNo + "---" + SingleTrackID);
            if (co >= 1) {
                var modelRecord = myStore.getAt(0);
                var shp = modelRecord.get('ShapeType');
                var shplgth = modelRecord.get('Fencelenght');
                var shppath = modelRecord.get('FencePath');
                geoFenceDate = modelRecord.get('Createddate');
                geofenceArea = modelRecord.get('FenceName');
                geofenceLength = shplgth;

             
             //    alert("shape:"+shp+" length:"+shplgth+" path:"+shppath)
                drawgefence(shp, shppath, shplgth);
              //  setGeoFencesDetails(shplgth);

            }
            else if (co == 0) {

                shapetype = "none";
                geofenceLength = "Null";
                geoFenceDate = "Null";
             //   Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">Out Of Fence!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">' + geofenceSpeed + '</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + geofenceDateDT + '</td> </tr>  </table>');
                // Ext.getCmp('Infogeofenceinfo').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">GeoFences Info</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Tracking ID</td> <td class="tdgpslabel">' + SingleTrackID + '</td></tr><tr> <td class="tdgpslabel">Track Item</td> <td class="tdgpslabel">' + trackingItems + '</td></tr><tr> <td class="tdgpslabel">Geofence Length</td> <td class="tdgpslabel">No GeoFence</td></tr><tr> <td class="tdgpslabel">Geofence Alert</td> <td class="tdgpslabel">' + Ext.getCmp('AccAlertEmail').getValue() + '</td></tr></table>');
              //  Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">No Geofence</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">Tracking..</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
                //Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">No Geofence</td> </tr></table>');
            }
            Ext.Viewport.unmask();
        });
        task.delay(1000);


    }





    function setGeoFencesDetails()
    {
       // alert(gFenceAlertResponderRelations);
        Ext.getCmp('GeofenceDetailpanel1').setHtml('<table class="tabledetail"><tr> <td class="tde">' + gfenceTrackItem + '</td> <td class="tde">' + bSex + '</td></tr> <tr > <td class="tdk">Name</td> <td class="tdk">Gender</td></tr><tr > <td class="tde">' + bAge + '</td> <td class="tde">' + bRisk + '</td></tr> <tr > <td class="tdk">Age</td> <td class="tdk">Risk</td></tr><tr > <td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>');
        Ext.getCmp('GeofenceDetailpanel3').setHtml('<table class="tabledetail"><tr> <td class="tde">' + gFenceAlertResponder + ' (' + gFenceAlertResponderRelations + ')' + '</td> <td class="tde">' + gFenceAlertResponder2 + ' (' + gFenceAlertResponderRelations2 + ')' + ')</td></tr> <tr > <td class="tdk">Responder 1</td> <td class="tdk">Responder 2</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
        Ext.getCmp('GeofenceDetailpanel4').setHtml('<table class="tabledetail"><tr> <td class="tde">' + gFenceAlertResponder3 + ' (' + gFenceAlertResponderRelations3 + ')' + '</td> <td class="tde">' + gFenceAlertResponder4 + ' (' + gFenceAlertResponderRelations4 + ')' + ')</td></tr> <tr > <td class="tdk">Responder 3</td> <td class="tdk">Responder 4</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
        Ext.getCmp('GeofenceDetailpanel5').setHtml('<table class="tabledetail"><tr> <td class="tde">' + gFencelenght + '</td> <td class="tde">' + gCreateddate + '</td></tr> <tr > <td class="tdk">Fence Length</td> <td class="tdk">Fence Date</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
        if (gFenceName === "" || gFenceName == null) {
            Ext.getCmp('btnFenceArea').setHtml("<u><font size=2>V.Boundary Area: Area Name Not Set.</font></u>");

        }

        else { Ext.getCmp('btnFenceArea').setHtml("<u><font size=2>V.Boundary Area:" + gFenceName + "</font></u>"); }

        //stopClockGeoFence();
        //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading..Please Wait..' });
        //var task = Ext.create('Ext.util.DelayedTask', function () {
          
        //    GeocodeLatLng(longGeofence, latGeofence);
        //    loadTrackingItemGeoFenceAlert(DeviceID, AAccountNo, SingleTrackID);
        //    loadGeofenceLengthCreatedDate();
        //    loadGeofenceResponderAlert();
            

        //    startmapgeofences();
        //    Ext.Viewport.unmask();
        //});
        //task.delay(500);
       
    }


    function getCurrentLocationsingle() {
        //  Ext.Msg.alert("Sor??");
        var me = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                me.latitude = position.coords.latitude;
                me.longitude = position.coords.longitude;

                me.position = new google.maps.LatLng(me.latitude, me.longitude);
                geoX = me.longitude;
                geoY = me.latitude;

            });
        } else {
             Ext.Msg.alert("Sorry, browser does not support geolocation!");
            //if ((messageboxss())) {
            //    Ext.Viewport.add(messageboxss('browser does not support geolocation'));
            //}
        }
    }



    function drawgefenceFromSavedArea(typeshape, pathxy, pathlenght, geofenceAreas) {
        // mapgeofence.setMap(null);
      
        if (typeshape == 'circle') {
            var globalFileTypeId = pathxy.split(',');
            var b = parseInt(pathlenght);
            var ctr = new google.maps.LatLng(globalFileTypeId[0], globalFileTypeId[1]);
            draw_circle = new google.maps.Circle({
                center: ctr,
                radius: b,
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
                map: mapgeofence
            });
            // countshape = 1;
            countshape = countshape + 1;
            radiuse = b;
            geofencetravellengthkm = b + 'Meter(radius)';
            circlecenterY = globalFileTypeId[0];
            circlecenterX = globalFileTypeId[1];
            shapetype = "circle";
         //   Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">Out Of Fence!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">' + geofenceSpeed + '</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + geofenceDateDT + '</td> </tr>  </table>');
          //  Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
            // Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
            // Ext.getCmp('Infogeofenceinfo').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">GeoFences Info</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Tracking ID</td> <td class="tdgpslabel">' + SingleTrackID + '</td></tr><tr> <td class="tdgpslabel">Track Item</td> <td class="tdgpslabel">' + trackingItems + '</td></tr><tr> <td class="tdgpslabel">Geofence Length</td> <td class="tdgpslabel">' + geofencetravellengthkm + '</td></tr><tr> <td class="tdgpslabel">Geofence Alert</td> <td class="tdgpslabel">' + Ext.getCmp('AccAlertPhone').getValue() + ' |Respond :' + OutOfFenceRespond + '</td></tr></table>');
            //if (countshape > 1) {

            //    deleteShapeFromDrawFence(draw_circle);

            //}
            InsertGeoFencesFromSavedArea(AAccountNo, SingleTrackID, trackingItems, b, pathxy, "circle", AAlertEmail, AAlertEmail, AAlertEmail, FenceAlertPhone1, FenceAlertPhone2, FenceAlertPhone3, FenceAlertPhone4, UserName, OS, 'CreatedFence', 'initialNotSend', 'ANSxyGPS@hotmail.my', '+60193198764', FenceAlertName1, FenceAlertName2, FenceAlertName3, FenceAlertName4, AISMSAlertMsg, geofenceAreas, FenceAlertRelationship1, FenceAlertRelationship2, FenceAlertRelationship3, FenceAlertRelationship4);

        }
        if (typeshape == 'polygon') {
            var polysplit = pathxy.split('),');
            var index, len;
            var a = polysplit;
            for (index = 0, len = a.length; index < len; ++index) {
                var splitresult = a[index] + ')'.split(',');
                var text = splitresult.replace(/[\])}[{(]/g, '');
                var pathpoly = text.split(',');
                arraygeofence.push(new google.maps.LatLng(pathpoly[0], pathpoly[1]));
            }
            polygonpaths = new google.maps.Polygon({
                paths: arraygeofence,
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
               
            });
            polygonpaths.setMap(mapgeofence);
            // countshape = 1;
            countshape = countshape + 1;
            arraygeofence.length = 0;
         //   Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
         //   Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">Out Of Fence!</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Virtual Boundary Status</td> </tr>    <tr > <td class="tdspeedmax">' + geofenceSpeed + '</td> <td class="tdspeedmax">V.Boundary</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + geofenceDateDT + '</td> </tr>  </table>');
            shapetype = "polygon";
            //if (countshape > 1) {

            //    deleteShapeFromDrawFence(polygonpaths);

            //}
            InsertGeoFencesFromSavedArea(AAccountNo, SingleTrackID, trackingItems, pathlenght, pathxy, "polygon", AAlertEmail, AAlertEmail, AAlertEmail, FenceAlertPhone1, FenceAlertPhone2, FenceAlertPhone3, FenceAlertPhone4, UserName, OS, 'CreatedFence', 'initialNotSend', 'ANSxyGPS@hotmail.my', '+60193198764', FenceAlertName1, FenceAlertName2, FenceAlertName3, FenceAlertName4, AISMSAlertMsg, geofenceAreas, FenceAlertRelationship1, FenceAlertRelationship2, FenceAlertRelationship3, FenceAlertRelationship4);
          //  InsertGeoFencesFromSavedArea(AAccountNo, SingleTrackID, trackingItems, b, circlecenterY + ',' + circlecenterX, "circle", AAlertEmail, AAlertEmail, AAlertEmail, FenceAlertPhone1, FenceAlertPhone2, FenceAlertPhone3, FenceAlertPhone4, UserName, OS, 'Active', 'initialNotSend', 'ANSxyGPS@hotmail.my', '+60193198764', FenceAlertName1, FenceAlertName2, FenceAlertName3, FenceAlertName4, AISMSAlertMsg);
        }
      
        

    }









