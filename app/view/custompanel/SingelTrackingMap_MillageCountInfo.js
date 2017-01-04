
var _singelTrackingMap_MillageCountInfo;
Ext.define('MyGPS.view.custompanel.SingelTrackingMap_MillageCountInfo', {

});



function SingelTrackingMap_MillageCountInfo() {



     _singelTrackingMap_MillageCountInfo =
         Ext.create('Ext.Panel', {
             // draggable: true,
             centered: true,
             id:'singelTrackingMap_MillageCountInfoID',
             //  scrollable: false,
             //right: 0,

             //top: 50,
             //bottom: 50,
             //left: 0,

             height: 380,
             width: 276,
             // width: '70%',
             // height: '50%',
            // modal: true,
             zIndex: 40,
             //  style: "background-color: #57A0DC; color:white;",
             style: "background-color: #57A0DC;",
             //hideOnMaskTap: true,
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
                     height: 370,
                     style: "background-color: #57A0DC;",
                     // height: 148,
                     items: [


                         {

                             xtype: 'container',
                             height: 370,
                             layout: {

                                 type: 'vbox',
                               //  style: "background-color: #57A0DC; color:white;",

                             },
                             style: "background-color: #57A0DC;",
                             // style: 'background-color: transparent;',
                             items: [



                                 {
                                    

                                         xtype: 'container',
                                        
                                         layout: {

                                             type: 'hbox',
                                             //  style: "background-color: #57A0DC; color:white;",

                                         },
                                         style: "background-color: #57A0DC;",
                                         items: [
                                               {
                                                   id: 'btnsingelTrackingMap_MillageCountInfoID_header',
                                                   width: 155,
                                                   height: 55,
                                                   ui: 'plain',
                                                   //  ui: 'action',
                                                   //   margin: '4 0 0 -2',
                                                   xtype: 'button',

                                                   html: '<div><img src="resources/icons/PointInfo_MillageCount.png" width="145" height="45" alt="Company Name" ></div>',

                                                   //  text: 'Command',
                                                   handler: function () {
                                                   }

                                                   //html: '<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Status:Static (11h20m24s)</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img src="/resources/icons/protonWTP2681.jpg" style="width:228px;height:150px;"></td> </tr></table>',
                                               },

                                                  {
                                                      id: 'btnsingelTrackingMap_MillageCountInfoID_Close',
                                                      width: 55,
                                                      height: 55,
                                                      ui: 'plain',
                                                      //  ui: 'action',
                                                        margin: '-13 0 0 70',
                                                      xtype: 'button',
                                                     // margin: '-20 0 0 0',
                                                      text: '<font size="5" color="white" >X</font>',
                                                      handler: function () {
                                                          SingleTrackingMap_MillageCountInfoHide();
                                                      }

                                                      //html: '<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Status:Static (11h20m24s)</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img src="/resources/icons/protonWTP2681.jpg" style="width:228px;height:150px;"></td> </tr></table>',
                                                  },
                                         ]
                                 },

                               
                                          {
                                              id: 'btnsingelTrackingMap_MillageCountInfoID_Line',
                                           //   hidden:true,
                                              //width: 160,
                                              //height: 55,
                                              //ui: 'plain',
                                              //  ui: 'action',
                                              //   margin: '4 0 0 -2',
                                            //  xtype: 'button',
                                              margin:'-20 0 0 0',
                                              html: '<hr size="2" color="white">',

                                              
                                              //html: '<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Status:Static (11h20m24s)</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img src="/resources/icons/protonWTP2681.jpg" style="width:228px;height:150px;"></td> </tr></table>',
                                          },


  {
      xtype: 'button',
      //height: 30,
    //  top: 38,
      width: 200,
      margin: '-8 0 0 30',
      id: 'btnsingelTrackingMap_MillageCountInfoID_milageCount',
      text: '<font size="5" color="white" >0|0|0|4|3|5|6|6|9</font>',
      //  iconCls: 'home',
      // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
      // ui: 'action-round',
      ui: 'plain',
      handler: function () {
          
      }



  },
       {
           id: 'btnsingelTrackingMap_MillageCountInfoID_Line2',
           margin: '-6 0 0 0',
           //width: 160,
           //height: 55,
           //ui: 'plain',
           //  ui: 'action',
           //   margin: '4 0 0 -2',
           //  xtype: 'button',
         //  margin: '-20 0 0 0',
           html: '<hr size="2" color="white">',


           //html: '<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Status:Static (11h20m24s)</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img src="/resources/icons/protonWTP2681.jpg" style="width:228px;height:150px;"></td> </tr></table>',
       },

       {
           xtype: 'container',
           //  height: 370,
           margin: '0 0 0 0',
           layout: {

               type: 'hbox',
               //  style: "background-color: #57A0DC; color:white;",

           },
           style: "background-color: #57A0DC;",
           items: [
                 {
                     id: 'btnsingelTrackingMap_MillageCountInfoID_milagecount',
                     margin: '-5 0 0 0',
                     //width: 160,
                     //height: 55,
                     //ui: 'plain',
                     //  ui: 'action',
                     //   margin: '4 0 0 -2',
                     //  xtype: 'button',
                     //  margin: '-20 0 0 0',
                     html: '<font size="2" color="white"><b><u>Milage Count Info</u></b></font>',


                     //html: '<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Status:Static (11h20m24s)</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img src="/resources/icons/protonWTP2681.jpg" style="width:228px;height:150px;"></td> </tr></table>',
                 },
                  {
                      id: 'btnsingelTrackingMap_MillageCountInfoID_MilageCountInfoSetting',
                      width: 32,
                      height: 32,
                      ui: 'plain',
                      //  ui: 'action',
                      margin: '-7 0 0 123',
                      xtype: 'button',

                      html: '<div><img src="resources/icons/MillageCount_milagealerinfoSetting.png" width="22" height="22" alt="Company Name" ></div>',

                      //  text: 'Command',
                      handler: function () {

                        

                        

                          Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading data..Please Wait.' });
                          var task = Ext.create('Ext.util.DelayedTask', function () {
 
                               MilageCountInfoLoadByAccountNoDeviceID_CallFromPointInfo(GetCurrentUserAccountNo(), GetCurrentDeviceID());
                              Ext.Viewport.unmask();
                              SettingResponderAlert_LoadByAccountNoModule(GetCurrentUserAccountNo(), 'MilageCount');
                            
                              MilageCountSettingCallFromPointInfoShow();
                              SingleTrackingMap_PointInfoHide();
                          });
                          task.delay(200);


                      }

                      //html: '<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Status:Static (11h20m24s)</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img src="/resources/icons/protonWTP2681.jpg" style="width:228px;height:150px;"></td> </tr></table>',
                  },


           ]
       },

     



                                               {

                                                   xtype: 'carousel',
                                                   height: 100,
                                                   margin: '-5 0 0 0',

                                                   //defaults: {
                                                   //    styleHtmlContent: true
                                                   //},
                                                   // top:-200,
                                                   // height: 148,
                                                   items: [
                                                       {
                                                           id: 'carouselSingelTrackingMap_MillageCountInfoID1',
                                                           //html: '<table class="tabledetail"><tr> <td class="tdeMilageInfo">ACTIVE</td> <td class="tdeMilageInfo">45673455 KM</td></tr> <tr > <td class="tdkMilageInfo">Subscribtion</td> <td class="tdkMilageInfo">Next Alert Milage</td></tr><tr > <td class="tdeMilageInfo">5000 KM</td> <td class="tdeMilageInfo">SMS</td></tr> <tr > <td class="tdkMilageInfo">Interval Alert</td> <td class="tdkMilageInfo">Alert Via</td></tr><tr > <td class="tdeMilageInfo">{Speed}</td> <td class="tdeMilageInfo">160km/h</td></tr> <tr > <td class="tdkMilageInfo">Current Speed</td> <td class="tdkMilageInfo">Max Speed</td></tr><tr > <td class="tdeMilageInfo">{BatteryReading}</td> <td class="tdeMilageInfo">BATTERY</td></tr> <tr > <td class="tdkMilageInfo">Batery Status</td> <td class="tdkMilageInfo">Power Mode</td></tr><tr > <td class="tdeMilageInfo">{GPSModel}</td> <td class="tdeMilageInfo">Standard</td></tr> <tr > <td class="tdkMilageInfo">GPS Tracker Model</td> <td class="tdkMilageInfo">Tracking Mode</td></tr><tr > <td class="tdeMilageInfo">{GPSSimNumber}</td> <td class="tdeMilageInfo">68 meter</td></tr> <tr > <td class="tdkMilageInfo">Sim Number</td> <td class="tdkMilageInfo">Max Elevation</td></tr></table>',

                                                           html: '<table class="tabledetail"><tr> <td class="tde">ACTIVE</td> <td class="tde">45673455 KM</td></tr> <tr > <td class="tdk">Subscription</td> <td class="tdk">Next Alert Milage</td></tr><tr > <td class="tde">5000 KM</td> <td class="tde">SMS</td></tr> <tr > <td class="tdk">Milage Interval Alert</td> <td class="tdk">Milage Alert Via</td></tr><tr > <td class="tde">{Speed}</td> <td class="tdeMilageInfo">160km/h</td></tr> <tr > <td class="tdkMilageInfo">Current Speed</td> <td class="tdkMilageInfo">Max Speed</td></tr><tr > <td class="tdeMilageInfo">{BatteryReading}</td> <td class="tdeMilageInfo">BATTERY</td></tr> <tr > <td class="tdkMilageInfo">Batery Status</td> <td class="tdkMilageInfo">Power Mode</td></tr><tr > <td class="tdeMilageInfo">{GPSModel}</td> <td class="tdeMilageInfo">Standard</td></tr> <tr > <td class="tdkMilageInfo">GPS Tracker Model</td> <td class="tdkMilageInfo">Tracking Mode</td></tr><tr > <td class="tdeMilageInfo">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                                                           cls: 'card1',
                                                           //  style: 'background-color: #tabledetailMilageInfo',
                                                       },
                                                        //{
                                                           // id: 'GeofenceDetailpanel2',
                                                          //  html: '<table class="tabledetail"><tr> <td class="tde">X=1.02154554<br>Y:1.0255881</td> <td class="tde">JALAN SRI PERMAISURI 1 ,BANDAR SRI PERMAISURI,56000 KUALA LUMPUR</td></tr> <tr > <td class="tdk">Location</td> <td class="tdk">Geocode Adress</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                           // cls: 'card2'
                                                        //},
                                                       {
                                                           id: 'carouselSingelTrackingMap_MillageCountInfoID12',
                                                           html: '<table class="tabledetailMilageInfo"><tr> <td class="tdeMilageInfo">ACTIVE</td> <td class="tdeMilageInfo">45673455 KM</td></tr> <tr > <td class="tdkMilageInfo">Subscribtion</td> <td class="tdkMilageInfo">Next Alert Milage</td></tr><tr > <td class="tdeMilageInfo">5000 KM</td> <td class="tdeMilageInfo">SMS</td></tr> <tr > <td class="tdkMilageInfo">Interval Alert</td> <td class="tdkMilageInfo">Alert Via</td></tr><tr > <td class="tdeMilageInfo">{Speed}</td> <td class="tdeMilageInfo">160km/h</td></tr> <tr > <td class="tdkMilageInfo">Current Speed</td> <td class="tdkMilageInfo">Max Speed</td></tr><tr > <td class="tdeMilageInfo">{BatteryReading}</td> <td class="tdeMilageInfo">BATTERY</td></tr> <tr > <td class="tdkMilageInfo">Batery Status</td> <td class="tdkMilageInfo">Power Mode</td></tr><tr > <td class="tdeMilageInfo">{GPSModel}</td> <td class="tdeMilageInfo">Standard</td></tr> <tr > <td class="tdkMilageInfo">GPS Tracker Model</td> <td class="tdkMilageInfo">Tracking Mode</td></tr><tr > <td class="tdeMilageInfo">{GPSSimNumber}</td> <td class="tdeMilageInfo">68 meter</td></tr> <tr > <td class="tdkMilageInfo">Sim Number</td> <td class="tdkMilageInfo">Max Elevation</td></tr></table>',
                                                           //html: '<table class="tabledetail"><tr> <td class="tde">TARMIZI BIN RAHIM (FATHER)</td> <td class="tde">AZULIANA BT MOHAMMAD (MOTHER)</td></tr> <tr > <td class="tdk">Responder 1</td> <td class="tdk">Responder 2</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                           cls: 'card2'
                                                       },
                                                       {
                                                           id: 'carouselSingelTrackingMap_MillageCountInfoID3',
                                                           html: '<table class="tabledetail"><tr> <td class="tde">MOHD HELMI BIN RAHIM(RELATIVE)</td> <td class="tde">ZULKIFLI BIN RAHIM (RELATIVE)</td></tr> <tr > <td class="tdk">Responder 3</td> <td class="tdk">Responder 4</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                           //html: '<table class="tabledetail"><tr> <td class="tde">MOHD HELMI BIN RAHIM(RELATIVE)</td> <td class="tde">ZULKIFLI BIN RAHIM (RELATIVE)</td></tr> <tr > <td class="tdk">Responder3</td> <td class="tdk">Responder4</td></tr><tr ><td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                                                           cls: 'card3'
                                                       },
                                                       {
                                                           id: 'carouselSingelTrackingMap_MillageCountInfoID4',
                                                           html: '<table class="tabledetail"><tr> <td class="tde">10.5KM</td> <td class="tde">20-10-2015 09:35AM</td></tr> <tr > <td class="tdk">Fence Length</td> <td class="tdk">Fence Date</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                           //html: '<table class="tabledetail"><tr> <td class="tde">MOHD HELMI BIN RAHIM(RELATIVE)</td> <td class="tde">ZULKIFLI BIN RAHIM (RELATIVE)</td></tr> <tr > <td class="tdk">Responder3</td> <td class="tdk">Responder4</td></tr><tr ><td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                                                           cls: 'card3'
                                                       }
                                                   ]




                                               },

                                                {

                                                    xtype: 'container',
                                                  //  height: 370,
                                                    margin: '0 0 0 0',
                                                    layout: {

                                                        type: 'hbox',
                                                        //  style: "background-color: #57A0DC; color:white;",

                                                    },
                                                    style: "background-color: #57A0DC;",
                                                    items: [

                                                       
 {
     id: 'btnsingelTrackingMap_MillageCountInfoID_milagecountInfoAlertHistory',
     margin: '10 0 0 0',
                                                   
     //width: 160,
     //height: 55,
     //ui: 'plain',
     //  ui: 'action',
     //   margin: '4 0 0 -2',
     //  xtype: 'button',
     //  margin: '-20 0 0 0',
     html: '<font size="2" color="white"><b><u>Milage Alert History (year-2015)</u></b></font>',


     //html: '<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Status:Static (11h20m24s)</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img src="/resources/icons/protonWTP2681.jpg" style="width:228px;height:150px;"></td> </tr></table>',
 },
                                                       

 {
     id: 'btnsingelTrackingMap_MillageCountInfoID_MilageAlertHistoryCalender',
     width: 36,
     height: 36,
     ui: 'plain',
     //  ui: 'action',
     margin: '2 0 0 35',
     xtype: 'button',

     html: '<div><img src="resources/icons/MillageCount_milagealertHistoryCalender.png" width="26" height="26" alt="Company Name" ></div>',

     //  text: 'Command',
     handler: function () {
     }

     //html: '<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Status:Static (11h20m24s)</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img src="/resources/icons/protonWTP2681.jpg" style="width:228px;height:150px;"></td> </tr></table>',
 },

                                                    ]


                                                },
                                              

                                               {
                                                   height: 100,
                                                   xtype: 'list',
                                                   mode: 'SINGLE',
                                                   margin:'-5 0 0 0',
                                                   store: _DataStore_MilageCountAlertHistoryStore_LoadByDeviceIDAccountNo,
                                                  // itemTpl: '<div style="overflow:auto;width:100%;height:100%;font-size: 100%"><div style="float:left;width:70%"><span style="font-family: Arial; text-transform:uppercase;"><b>{MilageCountString}</b></br>{AlertDateMilageCount}<br>{AlertRespondedDate}<br><b>{AlertRespondedStatus}</b></div ></div>',
                                                   //flex: 1,
                                                   itemTpl: '<div class="myContent">' +
                  '<div><font size="3"><b>Milage: </b></font><font size="3"><b>{MilageCountString}</b></font></div>' +
                  '<div><font size="2"><b>Alert Date: </b></font><font size="2">{AlertDateMilageCount}</font></div>' +
                     '<div><font size="2"><b>Respond Status: </b></font><font size="2">{AlertRespondedStatus}</font></div>' +
                  '<div><font size="2"><b>Responded On: </b></font><font size="2">{AlertRespondedDate}</font></div>' +
                  
                       //'<div>{GPSSimNumber}</div>' +
                   '<div style="display: none;">{DeviceID}</div>' +
                  '</div>',
                                                 
                                                   //onItemDisclosure: function (record, btn, index) {

                                                   //    record.get('MPI')
                                                  

                                                   //},

                                                 

                                                   id: 'milageCountListAlertHistory',
                                                  
                                                   emptyText: '<div class="myContent">No Alert History List</div>',
                                                   listeners: {
                                                       itemsingletap: function (list, idx, target, record, evt) {

                                                       },
                                                       itemdoubletap: function (list, idx, target, record, evt) {
                                                         
                                                        

                                                           SingelTrackingMap_MilageCountAlertHistoryDetailShow();
                                                           SingleTrackingMap_MillageCountInfoHide();
                                                          //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching Data....' });

                                                          //var task = Ext.create('Ext.util.DelayedTask', function () {

                                                              var MilageCountString = record.get('MilageCountString');
                                                              var AlertDate = record.get('AlertDateMilageCount');
                                                              var RespondStatus = record.get('AlertRespondedStatus');
                                                              var RespondDate = record.get('AlertRespondedDate');
                                                              var MilageCountNote = record.get('AlertMilageCountNote');
                                                              var LastUpdate = record.get('AlertMillageUpdateInfoDate');
                                                              var LastUpdateBy = record.get('AlertRespondedBy');
                                                              MillageCountAlertHistory_LoadDetails(MilageCountString, AlertDate, RespondStatus, RespondDate, MilageCountNote, LastUpdate, LastUpdateBy);
                                                         
                                                          //    Ext.Viewport.setMasked(false);
                                                          //    // loadlogin(OperatingSystem, Ext.getCmp('loginuserNameTextField').getValue(), Ext.getCmp('loginpasswordTextField').getValue());
                                                          //});
                                                          //task.delay(1000);
                                                           
                                                       }
                                                   }
                                               },



                                               {
                                                   xtype: 'container',
                                                   //  height: 370,
                                                   margin: '0 0 0 0',
                                                   layout: {

                                                       type: 'hbox',
                                                       //  style: "background-color: #57A0DC; color:white;",

                                                   },
                                                   style: "background-color: #57A0DC;",
                                                   items: [

                                                           {
                                                               id: 'btnsingelTrackingMap_MillageCountInfoID_remarks',
                                                               margin: '0 0 0 0',

                                                               //width: 160,
                                                               //height: 55,
                                                               //ui: 'plain',
                                                               //  ui: 'action',
                                                               //   margin: '4 0 0 -2',
                                                               //  xtype: 'button',
                                                               //  margin: '-20 0 0 0',
                                                               html: '<font size="1" color="white"><b>*Double click to view milage alert history details.</b></font>',


                                                               //html: '<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Status:Static (11h20m24s)</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img src="/resources/icons/protonWTP2681.jpg" style="width:228px;height:150px;"></td> </tr></table>',
                                                           },
                                                               {
                                                                   id: 'btnsingelTrackingMap_MillageCountInfoID_MilageAlertCountList',
                                                                   margin: '0 0 0 15',

                                                                   //width: 160,
                                                                   //height: 55,
                                                                   //ui: 'plain',
                                                                   //  ui: 'action',
                                                                   //   margin: '4 0 0 -2',
                                                                   //  xtype: 'button',
                                                                   //  margin: '-20 0 0 0',
                                                                   html: '<font size="2" color="white"><b>( 1 )</b></font>',


                                                                   //html: '<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Status:Static (11h20m24s)</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img src="/resources/icons/protonWTP2681.jpg" style="width:228px;height:150px;"></td> </tr></table>',
                                                               },



                                                   ]

                                               },



                                           

                             ],

                         },

                     ]
                 },




             ],



         });



    return _singelTrackingMap_MillageCountInfo;





}


function SingleTrackingMap_MillageCountInfoHide()
{
    _singelTrackingMap_MillageCountInfo.hide();
}

function SingleTrackingMap_MillageCountInfoShow()
{
    Ext.Viewport.remove(_singelTrackingMap_MillageCountInfo);
    this.overlay = Ext.Viewport.add(SingelTrackingMap_MillageCountInfo());
    this.overlay.show();
}



