


Ext.define('MyGPS.view.SettingFence.SettingFenceDrawMap', {
    extend: 'Ext.Panel',
    requires: "MyGPS.view.SettingFence.Settinggeofence",
    alias: "widget.todomapscardWidgetSettingFence",
    xtype: "SettingFenceDrawMapType",


    config: {
       
        styleHtmlContent: true,
        layout: 'fit',
        items: [
            {

                xtype: 'toolbar',
                title: 'Geofence',
                docked: 'top',
                id: 'toolbarGeofenceSettingMapTop',
                //  hidden:true,
                items:
                       [


                           {
                               xtype: 'button',

                               id: 'btnGeofenceSettingMapTHome',
                               //  text: 'Show',
                               iconCls: 'home',
                               // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                   Ext.getCmp('mainView').setActiveItem(1);
                               }



                           },




                       ]

            },

            {

                xtype: 'toolbar',
                id: 'toolbarGeofenceSettingMapBottom',
                docked: 'bottom',
                layout: {
                    pack: 'center'
                },
                items:
                    [{
                        xtype: 'button',
                        //hidden: true,
                        id: 'SettingFenceBackbtn',
                        ui: 'action',
                        text: "<< Back",
                        handler: function () {
                            var cntr = Ext.ComponentQuery.query("#geoFencesSettingholderID")[0];
                            cntr.setActiveItem(0);
                         //   checkClik = 'yes';
                           
                         
                          
                         
                            _geofence_rightpanelSettingDrawFence.hide();
                          //  _SearchLocation.hide();

                         //   ClearShapeFromDrawFence(); deleteAllSelectedShapeSettinggeofence();
                        }

                    },
                        {
                            xtype: 'button',
                            id: 'SettingDrawFence_ShowDetailPanelbtn',
                            ui: 'action',
                            hidden: true,
                            text: "Show Details",
                            handler: function () {
                                Ext.getCmp('SettingDrawFence_ShowDetailPanelbtn').setHidden(true);
                                Ext.getCmp('SettingDrawFence_HideDetailPanelbtn').setHidden(false);
                                Ext.getCmp('SettingDrawFence_detailPanel').setHidden(false);
                            }
                        },
                        {
                            xtype: 'button',
                            id: 'SettingDrawFence_HideDetailPanelbtn',
                            ui: 'action',
                            hidden: true,
                            text: "Hide Details",
                            handler: function () {
                                Ext.getCmp('SettingDrawFence_ShowDetailPanelbtn').setHidden(false);
                                Ext.getCmp('SettingDrawFence_HideDetailPanelbtn').setHidden(true);
                                Ext.getCmp('SettingDrawFence_detailPanel').setHidden(true);
                            }
                        },


                    {
                        xtype: 'spacer'
                    },

                           


                        {
                            xtype: 'button',
                           // hidden: true,
                            id: 'AutoFenceSettingSavebtn',
                            ui: 'action',
                            text: "Save",
                            handler: function (btn) {

                                var ID = Ext.getCmp('SettingDrawFence_ID').getValue();
                                // alert(ID);
                                var TrackID = Ext.getCmp('SettingDrawFence_TrackItem').getValue();
                                //Ext.getCmp('SettingDrawFence_AccountNo').setValue(AAccountNo);
                                var AccountNo = AAccountNo;
                                var FencePath = Ext.getCmp('SettingDrawFence_FencePath').getValue();
                                var ShapeType = Ext.getCmp('SettingDrawFence_ShapeType').getValue();
                                var FenceAreaName = Ext.getCmp('SettingDrawFence_FenceName').getValue();
                                var TimeFrom = parseInt(Ext.getCmp('SettingDrawFence_TimeFrom').getValue());
                                var TimeTo = parseInt(Ext.getCmp('SettingDrawFence_TimeTo').getValue());
                                var DaySetting = Ext.getCmp('SettingDrawFence_DaySetting').getValue();
                                var Status = Ext.getCmp('SettingDrawFence_Status').getValue();
                                var FenceLength = Ext.getCmp('SettingDrawFence_Length').getValue();
                                //  alert(checkDuplicateTimeToStatus);
                                Ext.Viewport.mask({ xtype: 'loadmask', message: 'Saving...' });



                                var task = Ext.create('Ext.util.DelayedTask', function () {



                                    //  alert(TimeFrom +'----'+ TimeTo);
                                    Ext.Viewport.unmask();
                                    if (TrackID == '-1')
                                    { Ext.Msg.alert('ERROR', 'Track Item Not Valid !'); return; }
                                    else if (AccountNo == '')
                                    { Ext.Msg.alert('ERROR', 'Account No Not Valid !'); return; }
                                    else if (FencePath == 'null')
                                    { Ext.Msg.alert('ERROR', 'Fence Path Not Valid !'); return; }
                                    else if (FenceAreaName == 'Enter Fence Area Name' || FenceAreaName == '')
                                    { Ext.Msg.alert('ERROR', 'Fence Area Name Not Valid !'); return; }
                                    else if (TimeFrom == '-1')
                                    { Ext.Msg.alert('ERROR', 'TimeFrom Not Valid !'); return; }
                                    else if (TimeFrom >= TimeTo)
                                    { Ext.Msg.alert('ERROR', 'TimeFrom Not Valid ,TimeFrom >= TimeTo !'); return; }
                                    else if (TimeTo == '-1')
                                    { Ext.Msg.alert('ERROR', 'TimeTo Not Valid !'); return; }
                                    else if (TimeTo <= TimeFrom)
                                    { Ext.Msg.alert('ERROR', 'TimeTo Not Valid !,TimeTo <= TimeFrom'); return; }
                                        //  else if (DaySetting == '-1')
                                        //{ Ext.Msg.alert('ERROR', 'Day Setting Not Valid !'); return; }
                                    else if (Status == '-1')
                                    { Ext.Msg.alert('ERROR', 'Fence Status Not Valid !'); return; }
                                    else if (FenceLength == '-1')
                                    { Ext.Msg.alert('ERROR', 'FenceLength Not Valid !'); return; }

                                    else
                                    {
                                        //Ext.getStore('AutoFenceTimerGetByAcc').getProxy().setExtraParams({
                                        //    AccNo: AAccountNo,
                                        //});
                                        //Ext.StoreMgr.get('AutoFenceTimerGetByAcc').load();
                                        AutoFenceTimerInsertUpdate(ID, 'IDK', TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status, FenceLength);

                                    }

                                    // InsertUpdateSetting(AAccountNo, 'null', Ext.getCmp('SelectedMarker').getValue(), Ext.getCmp('PanMapAfterPointChange').getValue(), Ext.getCmp('AttachedLabelOnMarker').getValue(), Ext.getCmp('Geo_Setting_CIGPS').getValue());

                                });
                                task.delay(1000);

                                //CheckingAutoTimerDuplicate(ID, 'IDK', TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, 'InActive', FenceLength)
                                //  alert(PanMapAfterPointChangeval);
                            }

                        },




                    ]


            },
             {
                 xtype: 'container',
              
                 //height: '100%',
                 //itemId: 'bottom',
                 //width: '100%',
                 layout: {
                     type: 'vbox'
                 },
                 items: [
                     

                     {
                     xtype: 'panel',
                         // flex: 2,
                         height:"100%",
                     itemId: 'left_blue_bottom',
                     style: 'border-bottom:1px solid;',
                     layout: {
                         type: 'fit'
                     },
                     xtype: "SettingmapGeofence"
                 
                     },

                      //{
                      //    xtype: 'button',
                      //    Id: 'SettingDrawFence_HideDetailPanel',
                      //    // margin: 'top left bottom right',
                      //  //  margin: '-75 2 0 0',
                      //   // hidden:true,
                      //     bottom: 70,
                      //    height: 45,
                      //    width: 45,
                      //    html: '<div ><img src="resources/icons/Picture44.png" width="35" height="35" alt="Company Name"></div>',
                      //    //ui:'round'
                      //    ui: 'plain',
                      //    handler: function () {

                      //        Ext.getCmp('SettingDrawFence_detailPanel').setHidden(true);
                      //    }
                      //},
                         //{
                         //    xtype: 'button',
                         //    Id: 'SettingDrawFence_ShowDetailPanel',
                         //    // margin: 'top left bottom right',
                         //    //  margin: '-75 2 0 0',
                         //    // hidden:true,
                         //    zindex:-1,
                         //    bottom: -10,
                         //    height: 35,
                         //    width: 75,
                         //    html: '<div ><img src="resources/icons/Picture44.png" width="65" height="25" alt="Company Name"></div>',
                         //    //ui:'round'
                         //    ui: 'plain',
                         //    handler: function () {

                         //        Ext.getCmp('SettingDrawFence_detailPanel').setHidden(false);
                         //    }
                         //},

                 {
                     xtype: 'panel',
                     // hidden:true,
                     //margin: '-142 0 0 0',
                     margin: '-122 0 0 0',
                  // bottom:150,
                   height: '30%',
                     width:'100%',
                   //  itemId: 'right_yellow_bottoms',
                     style: 'border-bottom:2px solid;border-top:2px solid;background-color:#57A0DC;',
                     layout: {
                         type: 'fit',
                       
                     },
                     //<td class="tdgpslabel">Tracked Item</td>
                    
                     id: 'SettingDrawFence_detailPanel',
                     items: [


                          {
                              xtype: 'container',
                              scrollable: true,
                              layout: {
                                  type: 'vbox',
                                 
                              },
                              //width:'100',
                              items: [

                                   {
                                                   xtype: "button",
                                                   ui: "action",
                                                   text: "Boundary Information",
                                                  // action: 'ButtonBackToHomeClicked'
                                       //xtype: 'button',                                     
                                       //id: 'SettingDrawFence_HideDetailPanel',
                                       //// margin: 'top left bottom right',
                                       // margin: '-40 2 0 0',                                     
                                       //height: 45,
                                       //width: 45,
                                       //html: '<div ><img src="resources/icons/Picture44.png" width="35" height="35" alt="Company Name"></div>',
                                       ////ui:'round'
                                       //ui: 'plain',
                                       //handler: function () {

                                       //  //  Ext.getCmp('SettingDrawFence_detailPanel').setHidden(true);
                                       //}
                                   },
                                  {
                                  xtype: 'selectfield',

                                  id: 'SettingDrawFence_TrackItem',
                                  label: 'Tracking Item',
                                  width: '100%',
                                  //  _DataStore_getTrackID
                                 // labelWidth: '40%',
                                  //store: 'multipletrackingitemselectFID',
                                  store: 'TrackingItemList',
                                  valueField: 'TrackID',
                                  displayField: 'TrackItem',
                                  //listeners: {
                                  //    change: function () {

                                  //        }


                                  //}

                              },


                                  {
                              xtype: 'textfield',
                              label: 'Virtual Boundary Name',
                              width: '100%',
                              id: 'SettingDrawFence_FenceName',
                               labelWrap: true,
                              // disabled: true,
                              // placeHolder: 'C01'

                          },
                              {

                                  xtype: 'selectfield',
                                  width: '100%',
                                  label: 'Time From',
                                  id: 'SettingDrawFence_TimeFrom',
                                  options: [
                                       {
                                           text: '05:00-AM',
                                           value: '5'
                                       }, {
                                           text: '06:00-AM',
                                           value: '6'
                                       },
                                  {
                                      text: '07:00-AM',
                                      value: '7'
                                  }, 
                                      {
                                          text: '08:00-AM',
                                      value: '8'
                                  },
                                  {
                                      text: '09:00-AM',
                                      value: '9'
                                  },
                                   {
                                       text: '10:00-AM',
                                       value: '10'
                                   },
                                  {
                                      text: '11:00-AM',
                                      value: '11'
                                  }, {
                                      text: '12:00-PM',
                                      value: '12'
                                  },
                                  {
                                      text: '01:00-PM',
                                      value: '13'
                                  }, {
                                      text: '02:00-PM',
                                      value: '14'
                                  },
                                  {
                                      text: '03:00-PM',
                                      value: '15'
                                  }, {
                                      text: '04:00-PM',
                                      value: '16'
                                  },
                                  {
                                      text: '05:00-PM',
                                      value: '17'
                                  }, {
                                      text: '06:00-PM',
                                      value: '18'
                                  },
                                  {
                                      text: '07:00-PM',
                                      value: '19'
                                  }, {
                                      text: '08:00-PM',
                                      value: '20'
                                  },
                                  {
                                      text: '09:00-PM',
                                      value: '21'
                                  }, {
                                      text: '10:00-PM',
                                      value: '22'
                                  },
                                  {
                                      text: '11:00-PM',
                                      value: '23'
                                  }, {
                                      text: '12:00-AM',
                                      value: '24'
                                  },
                                  {
                                      text: 'Please Select',
                                      value: '-1'
                                  },


                                  ]
                              },
                                  {

                                      xtype: 'selectfield',
                                      width: '100%',
                                      label: 'Time To',
                                      id: 'SettingDrawFence_TimeTo',
                                      options: [

                                            {
                                                text: '05:00-AM',
                                                value: '5'
                                            }, {
                                                text: '06:00-AM',
                                                value: '6'
                                            },
                                  {
                                      text: '07:00-AM',
                                      value: '7'
                                  },
                                      {
                                          text: '08:00-AM',
                                          value: '8'
                                      },
                                  {
                                      text: '09:00-AM',
                                      value: '9'
                                  },
                                   {
                                       text: '10:00-AM',
                                       value: '10'
                                   },
                                  {
                                      text: '11:00-AM',
                                      value: '11'
                                  }, {
                                      text: '12:00-PM',
                                      value: '12'
                                  },
                                  {
                                      text: '01:00-PM',
                                      value: '13'
                                  }, {
                                      text: '02:00-PM',
                                      value: '14'
                                  },
                                  {
                                      text: '03:00-PM',
                                      value: '15'
                                  }, {
                                      text: '04:00-PM',
                                      value: '16'
                                  },
                                  {
                                      text: '05:00-PM',
                                      value: '17'
                                  }, {
                                      text: '06:00-PM',
                                      value: '18'
                                  },
                                  {
                                      text: '07:00-PM',
                                      value: '19'
                                  }, {
                                      text: '08:00-PM',
                                      value: '20'
                                  },
                                  {
                                      text: '09:00-PM',
                                      value: '21'
                                  }, {
                                      text: '10:00-PM',
                                      value: '22'
                                  },
                                  {
                                      text: '11:00-PM',
                                      value: '23'
                                  }, {
                                      text: '12:00-AM',
                                      value: '24'
                                  },
                                  {
                                      text: 'Please Select',
                                      value: '-1'
                                  },


                                      ]
                                  }, {

                                      xtype: 'selectfield',
				      hidden:true,
                                      width: '100%',
                                      label: 'Days Setting',
                                      id: 'SettingDrawFence_DaySetting',
                                      options: [
                                           
                                          {
                                          text: 'EverDays',
                                          value: '1'
                                      },
                                      {
                                          text: 'Exclude Saturday & Sunday',
                                          value: '0'
                                      },

                                      {
                                          text: 'Please Select',
                                          value: '-1'
                                      },

                                      ]
                                  },
                                   {

                                       xtype: 'selectfield',
                                       width: '100%',
                                       label: 'Status',
                                       id: 'SettingDrawFence_Status',
                                       options: [
                                          
                                           {
                                           text: 'Active',
                                           value: 'Active'
                                       },
                                       {
                                           text: 'InActive',
                                           value: 'InActive'
                                       },
                                        {
                                            text: 'Please Select',
                                            value: '-1'
                                        },


                                       ]
                                   },


                                    {
                                        xtype: 'textfield',
                                        label: 'SettingDrawFenceID',
                                        width: '100%',
                                        id: 'SettingDrawFence_ID',
                                        labelWrap: true,
                                        hidden:true,
                                        // disabled: true,
                                        // placeHolder: 'C01'

                                    }, {
                                        xtype: 'textfield',
                                        label: 'SettingDrawFencePath',
                                        width: '100%',
                                        id: 'SettingDrawFence_FencePath',
                                        labelWrap: true,
                                        hidden: true,
                                        // disabled: true,
                                        // placeHolder: 'C01'

                                    },
                                    {
                                        xtype: 'textfield',
                                        label: 'SettingDrawFenceShapeType',
                                        width: '100%',
                                        id: 'SettingDrawFence_ShapeType',
                                        labelWrap: true,
                                        hidden: true,
                                        // disabled: true,
                                        // placeHolder: 'C01'

                                    }, {
                                        xtype: 'textfield',
                                        label: 'SettingDrawFenceLength',
                                        width: '100%',
                                        id: 'SettingDrawFence_Length',
                                        labelWrap: true,
                                        hidden: true,
                                        // disabled: true,
                                        // placeHolder: 'C01'

                                    }, {
                                        xtype: 'textfield',
                                        label: 'SettingDrawFenceAccountNo',
                                        width: '100%',
                                        id: 'SettingDrawFence_AccountNo',
                                        labelWrap: true,
                                        hidden: true,
                                        // disabled: true,
                                        // placeHolder: 'C01'

                                    },
                                       {
                                           xtype: 'button',
                                           id: 'SettingDrawFence_Mockbtn',
                                           ui: 'plain',
                                           
                                           text: " ",
                                           handler: function () {
                                              
                                           }
                                       },
                                         {
                                             xtype: 'button',
                                             id: 'SettingDrawFence_Mockbtn2',
                                             ui: 'plain',

                                             text: " ",
                                             handler: function () {

                                             }
                                         },
                                           {
                                               xtype: 'button',
                                               id: 'SettingDrawFence_Mockbtn3',
                                               ui: 'plain',

                                               text: " ",
                                               handler: function () {

                                               }
                                           },
                                           {
                                               xtype: 'button',
                                               id: 'SettingDrawFence_Mockbtn4',
                                               ui: 'plain',

                                               text: " ",
                                               handler: function () {

                                               }
                                           },
                                           {
                                               xtype: 'button',
                                               id: 'SettingDrawFence_Mockbtn5',
                                               ui: 'plain',

                                               text: " ",
                                               handler: function () {

                                               }
                                           },
                          //{
                          //    xtype: 'container',
                          //    layout: {
                          //        type: 'hbox',
                          //        //pack: 'start',
                          //    },
                          //    width: '100%',
                          //    items:[
                                
                               
                          //    ]
                          //}

                            

                              ]
                            }
                     ]
                    // html: '<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary</b></center></font></td></tr><tr> <td class="tdgpslabel">Last Tracked On</td> <td class="tdgpslabel">22-1-2015 20:21</td></tr><tr> <td class="tdgpslabel">Last Tracked By</td> <td class="tdgpslabel">Mizi</td></tr><tr> <td class="tdgpslabel">LIcence Status</td> <td class="tdgpslabel">Activated</td></tr></table>',
                    // html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
                 }


                 ]
             },





        //    {
        //    docked: 'bottom',
        //    xtype: 'toolbar',
        //    ui: "light",
        //    title: 'Maps page',
        //    items: [
        //        {
        //            xtype: "button",
        //            ui: "back",
        //            text: "back",
        //            action: 'ButtonBackToHomeClicked'
        //        }]
        //},
        //    {
        //        xtype: "googlemapscard"      
        //        }
        ]
    },

    
    initialize: function () {

        //if (!this.overlay) {
        //    this.overlay = Ext.Viewport.add(_geofence_rightpanelSettingDrawFence
        //);
        //}
        //this.overlay.show();
    }


});


function loadSettingFenceDrawMap(ID, TrackItem, TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status, FenceLength) {

    Ext.getCmp('SettingDrawFence_ID').setValue(ID);
    Ext.getCmp('SettingDrawFence_TrackItem').setValue(TrackID);
    Ext.getCmp('SettingDrawFence_AccountNo').setValue(AccountNo);
    Ext.getCmp('SettingDrawFence_FencePath').setValue(FencePath);
    Ext.getCmp('SettingDrawFence_ShapeType').setValue(ShapeType);
    Ext.getCmp('SettingDrawFence_FenceName').setValue(FenceAreaName);
    Ext.getCmp('SettingDrawFence_TimeFrom').setValue(TimeFrom);
    Ext.getCmp('SettingDrawFence_TimeTo').setValue(TimeTo);
    Ext.getCmp('SettingDrawFence_DaySetting').setValue(DaySetting);
    Ext.getCmp('SettingDrawFence_Status').setValue(Status);
    Ext.getCmp('SettingDrawFence_Length').setValue(FenceLength);
    ClearShapeFromDrawFence();
    deleteAllSelectedShapeSettinggeofence();
    drawgefenceSettinggeofence(ShapeType, FencePath, FenceLength)
}

var draw_circleSettingDrawFence
function drawFence(FencePath, ShapeType, pathlenght)
{

    if(ShapeType=='circle')
    {
        var globalFileTypeId = FencePath.split(',');
        var b = parseInt(pathlenght);
        var ctr = new google.maps.LatLng(globalFileTypeId[0], globalFileTypeId[1]);
        draw_circleSettingDrawFence = new google.maps.Circle({
            center: ctr,
            radius: b,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map: mapgeofence
        });
    }
}
