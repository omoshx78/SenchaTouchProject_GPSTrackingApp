var _singleTrackingMap_PointInfo;

Ext.define('MyGPS.view.custompanel.SingleTrackingMap_PointInfo', {

});


function SingleTrackingMapPointIfo()
{



     _singleTrackingMap_PointInfo =
         Ext.create('Ext.Panel', {
             // draggable: true,
            centered: true,
             //  scrollable: false,
             //right: 0,

             //top: 50,
             //bottom: 50,
             //left: 0,
             
             height: 370,
             width: 276,
             // width: '70%',
             // height: '50%',
             modal: true,
             zIndex:20,
             //  style: "background-color: #57A0DC; color:white;",
             hideOnMaskTap: true,
             showAnimation: {
                 type: 'popIn',
                 duration: 250,
                 easing: 'ease-out'
             },
             hideAnimation: {
                 type: null,
                 duration: null,
                 easing: null
             },

             items: [



                 {
                 // xtype: 'carousel',
                 xtype: 'panel',
                 height: 330,

                 // height: 148,
                 items: [


                     {

                         xtype: 'container',
                         layout: {

                             type: 'vbox',
                             style: "background-color: #57A0DC; color:white;",

                         },
                         // style: 'background-color: transparent;',
                         items: [
                                     {
                                         id: 'LiveTrackingInfoPanelpanelHeader',
                                         html: '<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Status:Static (11h20m24s)</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img src="/resources/icons/protonWTP2681.jpg" style="width:228px;height:150px;"></td> </tr></table>',
                                     },

                                     {
                                         xtype: 'container',
                                         height: 50,
                                      
                                         width: 264,

                                         //style: 'background-color:#57A0DC color: #fff',
                                         style: 'background-color: #57A0DC',
                                         layout: {

                                             type: 'hbox',

                                         },
                                         scrollable: {
                                             direction: 'horizontal',
                                             directionLock: true
                                         },
                                         items: [



                                              //{
                                              //    xtype: 'spacer',
                                              //    width: 1,
                                              //},


                                              {
                                                  //docked: 'right',
                                                  width: 115,
                                                  height:50,
                                                   ui: 'plain',
                                                 // ui: 'action',
                                                  margin: '0 0 0 -3',
                                                  xtype: 'button',
                                                  id: 'btnPointInfo_TrackingHistory',
                                                  // width: '50%',
                                                  //iconCls: 'time',
                                                  html: '<div ><img src="resources/icons/PointInfo_TrackingHistory.png" width="105" height="40" alt="Company Name"></div>',
                                                  //text: '<font size="1">Playbacked</font>',
                                                  handler: function () {
                                                      _trackingHistoryCreteriaSource = 'PointInfo';
                                                      Ext.getCmp('selectfieldTrackingHistoryCreateriaID').setStore('');
                                                      Ext.getCmp('selectfieldTrackingHistoryCreateriaID').setOptions(
[{ text: 'WTP2681', value: 'first' },
  
]);
                                                      Ext.getCmp('mainView').setActiveItem(5);
                                                  }
                                              },
                                              {
                                                  xtype: 'spacer',
                                                  width: 1,
                                              },
                                                 {
                                                     width: 115,
                                                     height: 60,
                                                    ui: 'plain',
                                                   //  ui: 'action',
                                                    margin:'-6 0 0 -8',
                                                     xtype: 'button',
                                                     id: 'btnPointInfo_SendCommand',
                                                     // width: '50%',
                                                     html: '<div><img src="resources/icons/PointInfo_SendCommand1.png" width="105" height="50" alt="Company Name" ></div>',
                                                     //  text: 'Command',
                                                     handler: function () {
                                                         alert('test');
                                                     }
                                                 },
                                                  {
                                                      xtype: 'spacer',
                                                      width: 1,
                                                  },
                                                 {
                                                     width: 115,
                                                     height: 45,
                                                     ui: 'plain',
                                                     //  ui: 'action',
                                                     margin: '1 0 0 -2',
                                                   //  ui: 'action',
                                                     xtype: 'button',
                                                     id: 'btnPointInfo_Geofence',
                                                     html: '<div><img src="resources/icons/PointInfo_Geofence.png" width="105" height="35" alt="Company Name" ></div>',
                                                     handler: function () {
                                                         alert('test');
                                                     }
                                                 },
                                                  {
                                                      xtype: 'spacer',
                                                      width: 1,
                                                  },
                                                 {
                                                     width: 100,
                                                     height: 40,
                                                     ui: 'plain',
                                                     //  ui: 'action',
                                                     margin: '4 0 0 -2',
                                                     xtype: 'button',
                                                     id: 'btnPointInfo_Setting',
                                                     html: '<div><img src="resources/icons/PointInfo_Setting.png" width="90" height="30" alt="Company Name" ></div>',
                                                    
                                                     //  text: 'Command',
                                                     handler: function () {
                                                         alert('test');
                                                     }
                                                 },


                                                    {
                                                        xtype: 'spacer',
                                                        width: 1,
                                                    },
                                                 {
                                                     width: 110,
                                                     height: 45,
                                                     ui: 'plain',
                                                     //  ui: 'action',
                                                     margin: '4 0 0 -2',
                                                     xtype: 'button',
                                                     id: 'btnPointInfo_MillageCount',
                                                     html: '<div><img src="resources/icons/PointInfo_MillageCount.png" width="100" height="35" alt="Company Name" ></div>',

                                                     //  text: 'Command',
                                                     handler: function () {
                                                         MillageCountAlertHistory_LoadByDeviceIDAccountNo('359710048057492', '2047-Nor-2016-5');
                                                         SingleTrackingMap_MillageCountInfoShow();
                                                     }
                                                 },
                                                  {
                                                      xtype: 'spacer',
                                                      width: 1,
                                                  },
                                                   {
                                                       width: 110,
                                                       height: 45,
                                                       ui: 'plain',
                                                       //  ui: 'action',
                                                       margin: '4 0 0 -2',
                                                       xtype: 'button',
                                                       id: 'btnPointInfo_RentalDetails',
                                                       html: '<div><img src="resources/icons/PointInfo_RentalDetails.png" width="100" height="35" alt="Company Name" ></div>',

                                                       //  text: 'Command',
                                                       handler: function () {
                                                           alert('test');
                                                       }
                                                   },
                                                 
                                                 
                                         ]
                                     },





                                           {

                                               xtype: 'carousel',
                                               height: 100,
                                               // top:-200,
                                               // height: 148,
                                               items: [
                                                   {
                                                       id: 'LiveTrackingInfoPanel1',
                                                       html: '<table class="tabledetail"><tr> <td class="tde">PROTON PERSONA</td> <td class="tde">WTP2681</td></tr> <tr > <td class="tdk">Track Item</td> <td class="tdk">Track ID</td></tr><tr > <td class="tde">OFF</td> <td class="tde">AUTHISME</td></tr> <tr > <td class="tdk">Age</td> <td class="tdk">Risk</td></tr><tr > <td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                                                       cls: 'card1'
                                                   },
                                                    //{
                                                       // id: 'GeofenceDetailpanel2',
                                                      //  html: '<table class="tabledetail"><tr> <td class="tde">X=1.02154554<br>Y:1.0255881</td> <td class="tde">JALAN SRI PERMAISURI 1 ,BANDAR SRI PERMAISURI,56000 KUALA LUMPUR</td></tr> <tr > <td class="tdk">Location</td> <td class="tdk">Geocode Adress</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                       // cls: 'card2'
                                                    //},
                                                   {
                                                       id: 'LiveTrackingInfoPanel3',
                                                       html: '<table class="tabledetail"><tr> <td class="tde">TARMIZI BIN RAHIM (FATHER)</td> <td class="tde">AZULIANA BT MOHAMMAD (MOTHER)</td></tr> <tr > <td class="tdk">Responder 1</td> <td class="tdk">Responder 2</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                       cls: 'card2'
                                                   },
                                                   {
                                                       id: 'LiveTrackingInfoPanel4',
                                                       html: '<table class="tabledetail"><tr> <td class="tde">MOHD HELMI BIN RAHIM(RELATIVE)</td> <td class="tde">ZULKIFLI BIN RAHIM (RELATIVE)</td></tr> <tr > <td class="tdk">Responder 3</td> <td class="tdk">Responder 4</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                       //html: '<table class="tabledetail"><tr> <td class="tde">MOHD HELMI BIN RAHIM(RELATIVE)</td> <td class="tde">ZULKIFLI BIN RAHIM (RELATIVE)</td></tr> <tr > <td class="tdk">Responder3</td> <td class="tdk">Responder4</td></tr><tr ><td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                                                       cls: 'card3'
                                                   },
                                                   {
                                                       id: 'LiveTrackingInfoPanel5',
                                                       html: '<table class="tabledetail"><tr> <td class="tde">10.5KM</td> <td class="tde">20-10-2015 09:35AM</td></tr> <tr > <td class="tdk">Fence Length</td> <td class="tdk">Fence Date</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                       //html: '<table class="tabledetail"><tr> <td class="tde">MOHD HELMI BIN RAHIM(RELATIVE)</td> <td class="tde">ZULKIFLI BIN RAHIM (RELATIVE)</td></tr> <tr > <td class="tdk">Responder3</td> <td class="tdk">Responder4</td></tr><tr ><td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                                                       cls: 'card3'
                                                   }
                                               ]




                                           }



                         ],

                     },

                 ]
             },




             ],



         });



    return _singleTrackingMap_PointInfo;





}





function SingleTrackingMap_PointInfoShow()
{
    Ext.Viewport.remove(_singleTrackingMap_PointInfo);
    this.overlay = Ext.Viewport.add(SingleTrackingMapPointIfo());
    this.overlay.show();
}

function SingleTrackingMap_PointInfoHide()
{
    _singleTrackingMap_PointInfo.hide();
}

//var _SingleTrackingMap_PointIfo =
//    Ext.create('Ext.Panel', {
//        xtype: 'panel',
//        height: 145,
//        width: 195,
//        id: 'SingleTrackingMap_PointIfo',
//        draggable: false,
//        right: 5,
//        top: 50,
//        style: 'background-color: #57A0DC;',

//        showAnimation: {
//            type: 'slide',
//            direction: 'down',
//            duration: 350,
//            easing: 'ease-out',
//        },
//        hideAnimation: {
//            type: 'slide',
//            direction: 'up',
//            duration: 650,
//            out: 'ease-in'
//        },

//        style: 'background-color: #57A0DC;',
//        items:


//            {
//                xtype: 'container',
//                style: 'background-color: transparent;',

//                items: [

//                     {
//                         id: 'SingleTrackingMap_PointIfoTbl',
//                         html: '<table class="tblgpssummary2">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 18px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 14px; color: #fff; text-align: center;  valign:top;  height:20% ">Proton Persona</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',


//                     },



//                ]



//            }







//    });

//return _SingleTrackingMap_PointIfo;