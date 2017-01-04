var buttonAlertstateSettinggeofence;
var mapgeofenceSettinggeofence;
var boundaryColorSettinggeofence = '#ED1B24'; // initialize color of polyline
//ar polyCoordinatesSettinggeofence = []; // initialize an array where we store latitude and longitude pair
var countSettinggeofence = 0;
var markerGeofenceSettinggeofence;
//var latGeofenceSettinggeofence;
//var longGeofenceSettinggeofence;
var drawingManagerSettinggeofence;
var oriShapeSettinggeofence;
var countshapeSettinggeofence;
var radiuseSettinggeofence;
var polygonpathsSettinggeofence;
var polylinespathsSettinggeofence;
var circlecenterYSettinggeofence;
var circlecenterXSettinggeofence;
var shapetypeSettinggeofence;
var coorshapeSettinggeofence;
var geofencepolyLengthInMetersSettinggeofence;
//var checklongGeofenceSettinggeofence;
var geofencetravellengthSettinggeofence;
var geofencetravellengthkmSettinggeofence;
var geofenceLengthSettinggeofence;
var alertisplaySettinggeofence;
var geoFenceDateSettinggeofence;



     Ext.define('MyGPS.view.SettingFence.Settinggeofence', {


    extend: 'Ext.Container',

    requires: ['Ext.Map', 'Ext.dataview.List',
        'Ext.data.Store', 'Ext.field.Select',
        'Ext.field.Hidden', 'Ext.form.FieldSet', ],


    xtype: 'SettingmapGeofence',


    config: {
      
        layout: 'fit',
        // layout: 'card',
        styleHtmlContent: true,
        items: [
        
]
},
    initialize: function () {
        alertisplaySettinggeofence = "no";
        buttonAlertstateSettinggeofence = "stop";


      

       
        this.callParent();
        map = this.add({
            xtype: 'map',
            //useCurrentLocation: true,
            mapOptions: {
              //  center: new google.maps.LatLng(5.4445234, 101.91246603),
                //zoom: 6,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                panControl: false,
                scaleControl: false,
                mapTypeControl:false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DEFAULT,
                    position: google.maps.ControlPosition.BOTTOM_CENTER
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_BOTTOM
                },
                streetViewControl: true,
                streetViewControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP
                }

            },
            listeners: {

                 
                fn: 'initialize',
                     event: 'painted',
                 

                maprender: function (comp, map) {
                    mapgeofenceSettinggeofence = map;
                    var me = this;
                    me.map = map;
                    countshapeSettinggeofence = 0;
                    radiuseSettinggeofence = 0;
                    shapetypeSettinggeofence = "none";
                    drawingManagerSettinggeofence = new google.maps.drawing.DrawingManager({
                        //  drawingMode: google.maps.drawing.OverlayType.MARKER,
                        drawingControl: false,
                        drawingControlOptions: {
                            position: google.maps.ControlPosition.TOP_LEFT,
                            drawingModes: [
                               google.maps.drawing.OverlayType.POLYGON,
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

                   
                 //   var locationInput = document.getElementById('searchTextField');
                 //   console.log(locationInput);




                 //   //Create new autocomplete object
                 //   locationComplete = new google.maps.places.Autocomplete('Miami, Florida');
                 // //  var places1 = new google.maps.places.Autocomplete(document.getElementById('source_point'));
                 //   ////Bias to users current location
                 //   //this.geolocate();
                 ////   var place;

                 //   google.maps.event.addListener(locationComplete, 'place_changed', function () {
                 //       place = locationComplete.getPlace();
                 //       console.log(place.formatted_address); //address
                 //       console.log(place.geometry.location.lat()); //latitude
                 //       console.log(place.geometry.location.lng()); //longitude
                 //   });























                   
                    drawingManagerSettinggeofence.setMap(mapgeofenceSettinggeofence);
                    google.maps.event.addListener(drawingManagerSettinggeofence, 'polygoncomplete', function (polygon) {
                      //  resetMenuDrawButton();
                        if (countshapeSettinggeofence <= 0) {
                            var coordinatespolygon = (polygon.getPath().getArray());
                            polygonpathsSettinggeofence = new google.maps.Polygon({
                                paths: coordinatespolygon
                            });

                            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Processing geofence..' });
                            var task = Ext.create('Ext.util.DelayedTask', function () {
                                coorshapeSettinggeofence = '';
                                coorshapeSettinggeofence += coordinatespolygon;
                                var tempkm;
                                // alert(coorshapeSettinggeofence);
                                geofencepolyLengthInMetersSettinggeofence = google.maps.geometry.spherical.computeLength(polygon.getPath().getArray());
                                Ext.getCmp('SettingDrawFence_FencePath').setValue(coorshapeSettinggeofence);
                                geofencetravellengthSettinggeofence = +Math.floor(geofencepolyLengthInMetersSettinggeofence);
                                tempkm = geofencetravellengthSettinggeofence / 1000;
                                Ext.getCmp('SettingDrawFence_Length').setValue(tempkm);
                                Ext.getCmp('SettingDrawFence_ShapeType').setValue('polygon');
                               // InsertGeoFences(AAccountNo, SingleTrackID, trackingItems, tempkm, coorshapeSettinggeofence, "polygon", AAlertEmail, AAlertEmail, AAlertEmail, FenceAlertPhone1, FenceAlertPhone2, FenceAlertPhone3, FenceAlertPhone4, UserName, OS, 'Active', 'NotSend', 'ANSxyGPS@hotmail.my', '+60193198764', FenceAlertName1, FenceAlertName2, FenceAlertName3, FenceAlertName4, AISMSAlertMsg, geofenceArea, FenceAlertRelationship1, FenceAlertRelationship2, FenceAlertRelationship3, FenceAlertRelationship4);
                                
                                
                               
                              
                                shapetypeSettinggeofence = "polygon";
                                Ext.Viewport.unmask();
                            });
                            task.delay(1000);
                        }

                        countshapeSettinggeofence = countshapeSettinggeofence + 1;
                        if (countshapeSettinggeofence > 1) {

                            detectedmoreshapeSettinggeofence();
                        }

                    });


                    google.maps.event.addListener(drawingManagerSettinggeofence, 'polylinecomplete', function (polyline) {

                        var coordinatespolyline = (polyline.getPath().getArray());
                        polylinespathsSettinggeofence = new google.maps.polyline({
                            paths: coordinatespolyline
                        });
                        shapetypeSettinggeofence = "polyline";
                        coorshapeSettinggeofence = coordinatespolyline;

                        countshapeSettinggeofence = countshapeSettinggeofence + 1;
                        if (countshapeSettinggeofence >= 2) {

                            detectedmoreshapeSettinggeofence();
                        }
                    });


                    google.maps.event.addListener(drawingManagerSettinggeofence, 'rectanglecomplete', function (rectangle) {

                        var coordinates = (rectangle.getBounds());
                        alert(coordinates);


                        countshapeSettinggeofence = countshapeSettinggeofence + 1;
                        if (countshapeSettinggeofence >= 2) {

                            detectedmoreshapeSettinggeofence();
                        }
                    });

                    google.maps.event.addListener(drawingManagerSettinggeofence, 'circlecomplete', function (circle) {
                     //   resetMenuDrawButton();
                        if (countshapeSettinggeofence <= 0) {


                            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Processing geofence..' });
                            var task = Ext.create('Ext.util.DelayedTask', function () {
                               
                             //   InsertGeoFences(AAccountNo, SingleTrackID, trackingItems, circle.getRadius(), circle.getCenter().lat() + ',' + circle.getCenter().lng(), "circle", AAlertEmail, AAlertEmail, AAlertEmail, FenceAlertPhone1, FenceAlertPhone2, FenceAlertPhone3, FenceAlertPhone4, UserName, OS, 'Active', 'NotSend', 'ANSxyGPS@hotmail.my', '+60193198764', FenceAlertName1, FenceAlertName2, FenceAlertName3, FenceAlertName4, AISMSAlertMsg, geofenceArea, FenceAlertRelationship1, FenceAlertRelationship2, FenceAlertRelationship3, FenceAlertRelationship4);

                                Ext.getCmp('SettingDrawFence_FencePath').setValue(circle.getCenter().lat() + ',' + circle.getCenter().lng());
                                Ext.getCmp('SettingDrawFence_Length').setValue(circle.getRadius());
                                Ext.getCmp('SettingDrawFence_ShapeType').setValue('circle');
                                radiuseSettinggeofence = circle.getRadius();
                                geofencetravellengthkmSettinggeofence = parseInt(radiuseSettinggeofence) + 'M(radius)';
                                geofenceLengthSettinggeofence = +Math.floor(radiuseSettinggeofence);
                                circlecenterYSettinggeofence = circle.getCenter().lat();
                                circlecenterXSettinggeofence = circle.getCenter().lng();
                                shapetypeSettinggeofence = "circle";
                                Ext.Viewport.unmask();
                            });
                            task.delay(1000);
                           
                            google.maps.event.addListener(circle, 'radius_changed', function () {
                                Ext.Viewport.mask({ xtype: 'loadmask', message: 'Radius change..Processing geofence..' });
                                var task = Ext.create('Ext.util.DelayedTask', function () {
                                   // InsertGeoFences(AAccountNo, SingleTrackID, trackingItems, circle.getRadius(), circle.getCenter().lat() + ',' + circle.getCenter().lng(), "circle", AAlertEmail, AAlertEmail, AAlertEmail, FenceAlertPhone1, FenceAlertPhone2, FenceAlertPhone3, FenceAlertPhone4, UserName, OS, 'Active', 'NotSend', 'ANSxyGPS@hotmail.my', '+60193198764', FenceAlertName1, FenceAlertName2, FenceAlertName3, FenceAlertName4, AISMSAlertMsg, geofenceArea,FenceAlertRelationship1, FenceAlertRelationship2, FenceAlertRelationship3, FenceAlertRelationship4);
                                    Ext.getCmp('SettingDrawFence_FencePath').setValue(circle.getCenter().lat() + ',' + circle.getCenter().lng());
                                    Ext.getCmp('SettingDrawFence_Length').setValue(circle.getRadius());
                                    Ext.getCmp('SettingDrawFence_ShapeType').setValue('circle');
                                    radiuseSettinggeofence = circle.getRadius();
                                    geofencetravellengthkmSettinggeofence = parseInt(radiuseSettinggeofence) + 'M(radius)';
                                    geofenceLengthSettinggeofence = geofencetravellengthkmSettinggeofence + '(radius)';
                                    circlecenterYSettinggeofence = circle.getCenter().lat();
                                    circlecenterXSettinggeofence = circle.getCenter().lng();
                                    shapetypeSettinggeofence = "circle";
                                    Ext.Viewport.unmask();
                                });
                                task.delay(1000);
                                console.log('radius changed');
                                radiuseSettinggeofence = circle.getRadius();
                                geofencetravellengthkmSettinggeofence = radiuseSettinggeofence + '(radius)';
                                
                            });



                        }
                        countshapeSettinggeofence = countshapeSettinggeofence + 1;
                        if (countshapeSettinggeofence > 1) {
                            // stopClockGeoFence();
                            detectedmoreshapeSettinggeofence();
                        }

                    });

                    google.maps.event.addListener(drawingManagerSettinggeofence, 'overlaycomplete', function (e) {
                        if (e.type == google.maps.drawing.OverlayType.POLYGON) {
                            // Switch back to non-drawing mode after drawing a shape.
                            drawingManagerSettinggeofence.setDrawingMode(null);
                           // resetMenuDrawButton();
                            if (countshapeSettinggeofence == 0) {
                                oriShapeSettinggeofence = e.overlay;
                                oriShapeSettinggeofence.type = e.type;
                                // alert(oriShape);

                            }

                            if (countshapeSettinggeofence >= 1) {
                                var newShape = e.overlay;
                                newShape.type = e.type;
                                setSelectionSettinggeofence(newShape);
                            }
                        }
                        if (e.type == google.maps.drawing.OverlayType.POLYLINE) {
                            // Switch back to non-drawing mode after drawing a shape.
                            drawingManagerSettinggeofence.setDrawingMode(null);

                            //  countshapeSettinggeofence = countshapeSettinggeofence + 1;
                            if (countshapeSettinggeofence == 0) {
                                oriShapeSettinggeofence = e.overlay;
                                oriShapeSettinggeofence.type = e.type;
                            }

                            if (countshapeSettinggeofence >= 1) {
                                var newShape = e.overlay;
                                newShape.type = e.type;
                                setSelectionSettinggeofence(newShape);
                            }
                        }

                        if (e.type == google.maps.drawing.OverlayType.CIRCLE) {
                            // Switch back to non-drawing mode after drawing a shape.
                            drawingManagerSettinggeofence.setDrawingMode(null);
                          //  resetMenuDrawButton();
                         //     countshapeSettinggeofence = countshapeSettinggeofence + 1;

                            if (countshapeSettinggeofence == 0) {
                                oriShapeSettinggeofence = e.overlay;
                                oriShapeSettinggeofence.type = e.type;

                            }

                            if (countshapeSettinggeofence >= 1) {
                                var newShape = e.overlay;
                                newShape.type = e.type;
                                setSelectionSettinggeofence(newShape);
                            }
                        }
                        if (e.type == google.maps.drawing.OverlayType.RECTANGLE) {
                            // Switch back to non-drawing mode after drawing a shape.
                            drawingManagerSettinggeofence.setDrawingMode(null);

                            //    countshapeSettinggeofence = countshapeSettinggeofence + 1;



                            if (countshapeSettinggeofence == 0) {
                                oriShapeSettinggeofence = e.overlay;
                                oriShapeSettinggeofence.type = e.type;

                            }

                            if (countshapeSettinggeofence >= 1) {
                                var newShape = e.overlay;
                                newShape.type = e.type;
                                setSelectionSettinggeofence(newShape);
                            }
                        }
                    });


                   // var input = document.getElementById('pac-input');

                





                }






            }


        });

    }

});




function createPolyline(polyC) {
    Path = new google.maps.Polygon({
        path: polyC,
        editable: true,
        strokeColor: boundaryColorSettinggeofence,
        strokeOpacity: 1.0,
        strokeWeight: 4
    });
    Path.setMap(mapgeofenceSettinggeofence);
}


var selectedShapeSettinggeofence;



function clearSelectionSettinggeofence() {
    if (selectedShapeSettinggeofence) {;
    }
}

function setSelectionSettinggeofence(shape) {
    clearSelectionSettinggeofence();
    selectedShapeSettinggeofence = shape;
}

function deleteSelectedShapeSettinggeofence() {
    if (selectedShapeSettinggeofence) {
       // dialogboxdeletemore.hide();
        selectedShapeSettinggeofence.setMap(null);
      
    }
}

function deleteAllSelectedShapeSettinggeofence() {
   
    if (oriShapeSettinggeofence) {
        countshapeSettinggeofence = 0;
        oriShapeSettinggeofence.setMap(null);
    }

    if (polygonpathsSettinggeofence) {
        countshapeSettinggeofence = 0;
        polygonpathsSettinggeofence.setMap(null);
    } 

    if (draw_circleSettinggeofence) {
        countshapeSettinggeofence = 0;
        draw_circleSettinggeofence.setMap(null);
    }
}




function detectedmoreshapeSettinggeofence() {
    Ext.Msg.show({
        title: 'Virtual boundary Multiple Shape',
        message: 'Multiple Shape detected..!,virtual boundary only valid in a shape, new shape will be deleted.!',
        width: 300,
        buttons: Ext.MessageBox.OK,
        iconCls: Ext.MessageBox.INFO,
        fn: function (buttonIdmsg) {
            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Removing new Shape..' });
            var task = Ext.create('Ext.util.DelayedTask', function () {
                coorshapeSettinggeofence = '';
                deleteSelectedShapeSettinggeofence();
                Ext.Viewport.unmask();
            });
            task.delay(1000);


        }
    });


}


function selectColor(color) {
    selectedColor = boundaryColorSettinggeofence;
}




















function loadmarkerGeoFenceSettinggeofence() {


    loadgeofenceSettinggeofence();
   


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
            html: '<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">Virtual boundary Setting</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">Tracked Item</td></tr><tr> <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr> <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr> <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr></table>',
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

                        Ext.Msg.show({
                            title: 'DELETE VIRTUAL BOUNDARY',
                            message: 'Delete virtual boundary for this item?',
                            width: 500,
                            buttons: Ext.MessageBox.YESNO,
                            iconCls: Ext.MessageBox.INFO,
                            fn: function (buttonId) {
                                if (buttonId == "yes") {
                                    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Deleting Virtual Boundary...' });
                                    var task = Ext.create('Ext.util.DelayedTask', function () {
                                       
                                        alertisplaySettinggeofence = "no";
                                      
                                       
                                       // DeleteGeoFences(AAccountNo, SingleTrackID);
                                        shapetypeSettinggeofence = "none";
                                        deleteAllSelectedShapeSettinggeofence();
                                        coorshapeSettinggeofence = '';
                                     
                                        Ext.Viewport.unmask();
                                        
                                    });
                                    task.delay(1000);
                                 
                                }


                            }
                        });

                        ///////////////


                    




                    }



                },
          

                ]


            }

        }


    });








function generatePolygonSettinggeofence(pathing) {

        mapPoly = new google.maps.Polygon({
            paths: pathing,
            strokeColor: "#FF8800",
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: "#FF8800",
            fillOpacity: 0.35
        });
        mapPoly.setMap(mapgeofenceSettinggeofence);
        countshapeSettinggeofence = 1;

    }
    var draw_circleSettinggeofence;
    function generateCircleSettinggeofence(yxcoor, radi) {
        var ctr = new google.maps.LatLng(circlecenterYSettinggeofence, circlecenterXSettinggeofence);
        draw_circleSettinggeofence = new google.maps.Circle({
            center: ctr,
            radius: radiuseSettinggeofence,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map: mapgeofenceSettinggeofence
        });
        countshapeSettinggeofence = 1;

    }

    var arraygeofenceSettinggeofence = [];
    var arraygeofenceSettinggeofencePolygonBounds = [];

    function drawgefenceSettinggeofence(typeshape, pathxy, pathlenght) {
        alert(typeshape + pathxy + pathlenght);
      arraygeofenceSettinggeofence.length = 0;
        if (typeshape == 'circle') {
            var globalFileTypeId = pathxy.split(',');
            var b = parseInt(pathlenght);
            var ctr = new google.maps.LatLng(globalFileTypeId[0], globalFileTypeId[1]);
            draw_circleSettinggeofence = new google.maps.Circle({
                center: ctr,
                radius: b,
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
                map: mapgeofenceSettinggeofence
            });
           


           countshapeSettinggeofence = countshapeSettinggeofence + 1;
            radiuseSettinggeofence = b;
            geofencetravellengthkmSettinggeofence = b + 'Meter(radius)';
            circlecenterYSettinggeofence = globalFileTypeId[0];
            circlecenterXSettinggeofence = globalFileTypeId[1];
            shapetypeSettinggeofence = "circle";
   
            window.setTimeout(function () {
                var bounds = new google.maps.LatLngBounds();
                bounds.extend(ctr);
                //mapgeofenceSettinggeofence.panTo(ctr);
                  mapgeofenceSettinggeofence.fitBounds(bounds);

                mapgeofenceSettinggeofence.setZoom(16);
            }, 1000);
          //  mapgeofenceSettinggeofence.map.setCenter(new google.maps.LatLng(45, 19));
          //  mapgeofenceSettinggeofence.setZoom(10);
            //mapgeofenceSettinggeofence.setCenter(ctr); //Make map global
            //mapgeofenceSettinggeofence.setZoom(10);
         
           // mapgeofenceSettinggeofence.fitBounds(draw_circleSettinggeofence.getBounds());
            //mapgeofenceSettinggeofence.setZoom(10);
            if (countshapeSettinggeofence > 1) {

                deleteShapeFromDrawFence(draw_circleSettinggeofence);

            }

        }
        if (typeshape == 'polygon') {
            //arraygeofence.push(new google.maps.LatLng(this.lat, this.lng));

            var polysplit = pathxy.split('),');


            var polyboundsx;
            var polyboundsy;


            var index, len;
            var a = polysplit;
            for (index = 0, len = a.length; index < len; ++index) {
                //alert(a[index] + ')');

                var splitresult = a[index] + ')'.split(',');
                var text = splitresult.replace(/[\])}[{(]/g, '');
                var pathpoly = text.split(',');

                arraygeofenceSettinggeofence.push(new google.maps.LatLng(pathpoly[0], pathpoly[1]));
              //  arraygeofenceSettinggeofencePolygonBounds.push(text);

                
                polyboundsy = pathpoly[0];
                polyboundsx = pathpoly[1];

            }

            polygonpathsSettinggeofence = new google.maps.Polygon({
                paths: arraygeofenceSettinggeofence,
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
            polygonpathsSettinggeofence.setMap(mapgeofenceSettinggeofence);
       
           countshapeSettinggeofence = countshapeSettinggeofence + 1;
         
           shapetypeSettinggeofence = "polygon";
           //var bounds = new google.maps.LatLngBounds();
           //bounds.extend(polybounds);
           //alert(polybounds);
           
          
        //   arraygeofenceSettinggeofence.length = 0;
           window.setTimeout(function () {
               var ctr = new google.maps.LatLng(polyboundsy, polyboundsx);
               var bounds = new google.maps.LatLngBounds();
               bounds.extend(ctr);
               mapgeofenceSettinggeofence.fitBounds(bounds);
               mapgeofenceSettinggeofence.setZoom(16);
           }, 1000);
            if (countshapeSettinggeofence > 1) {

                deleteShapeFromDrawFence(polygonpathsSettinggeofence);

            }
        }

       

    }
    function deleteShapeFromDrawFence(newshapefence) {
    
            newshapefence.setMap(null);

       
    }
    function ClearShapeFromDrawFence() {

        if (polygonpathsSettinggeofence)
        {
            polygonpathsSettinggeofence.setMap(null);
        }
        if (draw_circleSettinggeofence)
        { draw_circleSettinggeofence.setMap(null); }
        
        countshapeSettinggeofence = 0;

    }
    function loadgeofenceSettinggeofence() {
        geofenceAreaSettinggeofence = "";
        Ext.Viewport.mask({ xtype: 'loadmask', message: 'Drawing geofence..!!!!' });
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
                geoFenceDateSettinggeofence = modelRecord.get('Createddate');
                geofenceAreaSettinggeofence = modelRecord.get('FenceName');
                geofenceLengthSettinggeofence = shplgth;
                drawgefenceSettinggeofence(shp, shppath, shplgth);
            }
            else if (co == 0) {

                shapetypeSettinggeofence = "none";
                geofenceLengthSettinggeofence = "Null";
                geoFenceDateSettinggeofence = "Null";
            }
            Ext.Viewport.unmask();
        });
        task.delay(1000);


    }



    function locateAutocomplete() {
       
        var xc = localStorage.getItem("coorX");
        var yc = localStorage.getItem("coorY");
      
        mapgeofenceSettinggeofence.setZoom(14);      // This will trigger a zoom_changed on the map
        mapgeofenceSettinggeofence.setCenter(new google.maps.LatLng(yc, xc));
        localStorage.removeItem("coorX");
        localStorage.removeItem("coorY");
        _SearchLocation.hide();
    }
   















