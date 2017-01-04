
var idxcommands;
Ext.define('MyGPS.view.panelMainmapsendcommand', {
    extend: 'Ext.Panel',
    //requires: "MyGPS.view.MyAccount.singlesummary",
    requires: "MyGPS.view.mapsendcommands",
    //  alias: "widget.todomapscard",
    xtype: "panelMainmapsendcommands",


    config: {
       // styleHtmlContent: true,
       // layout: 'fit',
        items: [



         {

             xtype: 'toolbar',
             title: 'Send Commands',
             docked: 'top',
             id: 'toolbarHTrackieItemSendCommandMapTop',
             //  hidden:true,
             items:
                    [


                        {
                            xtype: 'button',

                            id: 'btnTrackieItemSendCommandMapHome',
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
                    //  title: 'Send Commands',
                    docked: 'bottom',
                    id: 'toolbarHTrackieItemSendCommandMapBottom',
                    layout: {
                        pack: 'center'
                    },
                    //  hidden:true,
                    items:
                           [

                                   {
                                       xtype: 'button',
                                      // hidden: true,
                                       id: 'btnbacksendcommand',
                                       ui: 'round',
                                       text: "Back",
                                       handler: function () {
                                           var cntr = Ext.ComponentQuery.query("#mainsendcommands")[0];
                                           cntr.setActiveItem(0);
                                         //  btn.setHidden(true);
                                           Ext.getCmp('btnviewhistorycommand').setHidden(true);
                                           Ext.getCmp('btnstartsendcommand').setHidden(true);
                                          
                                          stopClockmapsendcommands();

                                           //Ext.getCmp('popuppanel').setHidden(true);

                                       }


                                       //  docked: 'center'                  
                                   },

                                        {
                                            xtype: 'button',
                                            hidden: true,
                                            id: 'btnviewhistorycommand',
                                            ui: 'round',
                                            text: 'View History',
                                            //  docked: 'center'                  
                                        },
       {
           xtype: 'button',
         
           id: 'btnstartsendcommand',
           ui: 'round',
           text: 'Send Commands',
           handler: function (btn) {
               //0-Shutdown Engine
               //1-start up engine
               //2-Armed alarm
               //3-Disarmed alarm
               //4-Horn Alarm

               if (idxcommands) {
                   if (idxcommands == '1') {

                    

                       Ext.Msg.show({
                           title: 'Command:Shut Down Engine',
                           message: 'This Command depend on GPS tracker device capability and only for advance version.',
                           width: 300,
                           buttons: Ext.MessageBox.OK,
                           iconCls: Ext.MessageBox.INFO,
                           fn: function (buttonIdmsg) {
                               Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking GPS Tracker Capability...' });
                               var task = Ext.create('Ext.util.DelayedTask', function () {
                                   Ext.Msg.alert('Command:Shut Down Engine', 'Checked.!Sorry your GPS trcker device is not supported');
                                   Ext.Viewport.unmask();
                               });
                               task.delay(1000);


                           }
                       });






                   }
                   if (idxcommands == '2') {
                       Ext.Msg.show({
                           title: 'Command:Start Engine',
                           message: 'This Command depend on GPS tracker device capability and only for advance version.',
                           width: 300,
                           buttons: Ext.MessageBox.OK,
                           iconCls: Ext.MessageBox.INFO,
                           fn: function (buttonIdmsg) {
                               Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking GPS Tracker Capability...' });
                               var task = Ext.create('Ext.util.DelayedTask', function () {
                                   Ext.Msg.alert('Command:Start Engine', 'Checked.!Sorry your GPS trcker device is not supported');
                                   Ext.Viewport.unmask();
                               });
                               task.delay(1000);


                           }
                       });
                    
                   }
                   if (idxcommands == '3') {
                       Ext.Msg.show({
                           title: 'Command:Armed Alarm',
                           message: 'This Command depend on GPS tracker device capability and only for advance version.',
                           width: 300,
                           buttons: Ext.MessageBox.OK,
                           iconCls: Ext.MessageBox.INFO,
                           fn: function (buttonIdmsg) {
                               Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking GPS Tracker Capability...' });
                               var task = Ext.create('Ext.util.DelayedTask', function () {
                                   Ext.Msg.alert('Command:Armed Alarm', 'Checked.!Sorry your GPS trcker device is not supported');
                                   Ext.Viewport.unmask();
                               });
                               task.delay(1000);


                           }
                       });
                     

                   }
                   if (idxcommands == '4') {
                       Ext.Msg.show({
                           title: 'Command:DiArmed Alarm',
                           message: 'This Command depend on GPS tracker device capability and only for advance version.',
                           width: 300,
                           buttons: Ext.MessageBox.OK,
                           iconCls: Ext.MessageBox.INFO,
                           fn: function (buttonIdmsg) {
                               Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking GPS Tracker Capability...' });
                               var task = Ext.create('Ext.util.DelayedTask', function () {
                                   Ext.Msg.alert('Command:DiArmed Alarm', 'Checked.!Sorry your GPS trcker device is not supported');
                                   Ext.Viewport.unmask();
                               });
                               task.delay(1000);


                           }
                       });
                     
                   }
                   if (idxcommands == '5') {
                       Ext.Msg.show({
                           title: 'Command:Horn',
                           message: 'This Command depend on GPS tracker device capability and only for advance version.',
                           width: 300,
                           buttons: Ext.MessageBox.OK,
                           iconCls: Ext.MessageBox.INFO,
                           fn: function (buttonIdmsg) {
                               Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking GPS Tracker Capability...' });
                               var task = Ext.create('Ext.util.DelayedTask', function () {
                                   Ext.Msg.alert('Command:Horn', 'Checked.!Sorry your GPS trcker device is not supported');
                                   Ext.Viewport.unmask();
                               });
                               task.delay(1000);


                           }
                       });
                      

                   }
               } else {
                     Ext.Msg.alert('Error', 'No command Selected.!');
                   

               }

               //Ext.getCmp('popuppanel').setHidden(true);

           }
           //  docked: 'center'                  
       }





                           ]

                },



            {
                 xtype: 'container',
                // docked: 'top',
                height: '100%',
                 itemId: 'bottomids',
               //  width: '100%',
                 layout: {
                     type: 'vbox'
                 },
                 items: [

                     {
                         xtype: 'container',
                         //flex: 1,
                         //height: 30,
                         //  height: "10%",
                         itemId: 'left_blue_bottoma',
                         style: 'border-bottom:1px solid; background-color:#57A0DC;',
                         layout: {
                             type: 'hbox',
                             //  pack: 'justify'

                         },

                         items: [
                             {
                                 xtype: 'label',
                                 id: 'InfosendcommandTrackID',
                                 html: '<font color="white"; size="2"><b>TrackID - </b></font>'
                             },
                              {
                                  xtype: 'label',
                                  id: 'InfosendcommandTrackItem',
                                  html: '<font color="white"; size="2"><b>TrackItem</b></font>'
                              },
                              {
                                  xtype: 'spacer',

                              },
                                   //{
                                    
                                   //    xtype: 'image',
                                   //    //align: 'right',
                                   //    id: 'stoprun',
                                      
                                   //    html: '<div align="center"><img src="resources/icons/green.png"  width="10" height="10" alt="Company Name"/></div>',
                                   //    // padding: '0 0 -10 150',

                                   //},
                              {
                                  xtype: 'label',
                                  id: 'Infosendcommandspeed',
                                  html: '<font color="white"; size="2">-<b>00.00KM/H</b></font>'
                              },


                         ]

                     },




                     {
                         xtype: 'panel',
                         // flex: 2,
                         height: "55%",
                         itemId: 'left_blue_bosssttom',
                         style: 'border-bottom:1px solid;',
                         layout: {
                             type: 'fit'
                         },
                         xtype: "mapsendcommand"

                     },
                     {
                         // xtype: 'panel',
                         xtype: 'container',
                         //flex: 1,
                         //  height: 20,
                         itemId: 'left_blue_bottomacxx',
                         style: 'border-bottom:1px solid; background-color:#57A0DC;',
                         layout: {
                             // type: 'fit'
                             type: 'hbox',
                         },
                         items: [
                           {
                               xtype: 'label',
                               id: 'InfosendcommandList',
                               html: '<font color="white"; size="2"><b>Commands List</b></font>'
                           },

                            {
                                xtype: 'spacer',

                            },
                            {
                                xtype: 'label',
                                id: 'Infosendcommandstatus',
                                html: '<font color="white"; size="2"><b>Send Status:Standby.</b></font>'
                            },


                         ]
                     },

                     {
                         xtype: 'panel',
                       //  hidden:true,
                         height: "45%",
                         itemId: 'right_yellow_bottom',
                         style: 'border-bottom:1px solid;background-color:#57A0DC;',
                         layout: {
                             type: 'fit'
                         },
                         //<td class="tdgpslabel">Tracked Item</td>






                         items: [
                              {
                                  xtype: 'list',
                                  itemTpl: '{title}',
                                  flex: 1,
                                  data: [{
                                      //   title: 'Shut Down Engine'
                                      title: '<table  style="width:100%"><tr><td >Shut Down Engine</td><td class="alnright"><div><img src="resources/icons/shutdown.png" width="30" height="30" alt="Company Name"></div></td></tr></table>'


                                  }, {
                                      // title: 'Start Up Engine'
                                      title: '<table  style="width:100%"><tr><td>Start Up Engine</td><td class="alnright"><div><img src="resources/icons/startupengine.png" width="30" height="30" alt="Company Name"></div></td></tr></table>'
                                  }, {
                                      //  title: 'Disarmed Alarm'
                                      title: '<table  style="width:100%"><tr><td>Armed Alarm</td><td class="alnright"><div><img src="resources/icons/armedalarm.png" width="30" height="30" alt="Company Name"></div></td></tr></table>'

                                  }, {
                                      //title: 'Armed Alarm'
                                      title: '<table  style="width:100%"><tr><td>DisArmed Alarm</td><td class="alnright"><div><img src="resources/icons/disarmedalarm.png" width="30" height="30" alt="Company Name"></div></td></tr></table>'
                                  }, {
                                      // title: 'Activate Horn'
                                      title: '<table  style="width:100%"><tr><td>Horn</td><td class="alnright"><div><img src="resources/icons/horn.png" width="30" height="30" alt="Company Name"></div></td></tr></table>'
                                  }
                                 // ,

                                  //{
                                  //    title: '<table  style="width:100%"><tr><td>UnLocked Door</td><td class="alnright"><div><img src="resources/icons/unlockdoor.png" width="30" height="30" alt="Company Name"></div></td></tr></table>'
                                  //    //title: 'UnLocked Door'
                                  //},

                                  //{
                                  //    // title: 'Locked Door'
                                  //    title: '<table  style="width:100%"><tr><td>Locked Door</td><td class="alnright"><div><img src="resources/icons/lockeddoor.png" width="30" height="30" alt="Company Name"></div></td></tr></table>'
                                  //}
                                  //, {
                                  //    title: '<table  style="width:100%"><tr><td>On IP Camera</td><td class="alnright"><div><img src="resources/icons/cameraon.png" width="30" height="30" alt="Company Name"></div></td></tr></table>'
                                  //}
                                  //, {
                                  //    title: '<table  style="width:100%"><tr><td>Off IP Camera</td><td class="alnright"><div><img src="resources/icons/cameraoff.png" width="30" height="30" alt="Company Name"></div></td></tr></table>'
                                    //  title: 'Shut Off Camera'
                                  //}, {
                                  //    title: '<table  style="width:100%"><tr><td>standy by</td><td class="alnright"><div width="30" height="30"></div></td></tr></table>'
                                  //    //  title: 'Shut Off Camera'
                                  //},


                                  ]
                                  ,

                                  listeners: {




                                      itemsingletap: function (dataview, index, target, record, e, eOpts) {
                                          idxcommands = index + 1;
                                          // alert(idxcommands);
                                          //0-Shutdown Engine
                                          //1-start up engine
                                          //2-Armed alarm
                                          //3-Disarmed alarm
                                          //4-Horn Alarm
                                          // alert(index);

                                      }
                                  }
                              }



                         ],

                         //id: 'InfoSingleSummaryUserAcc',
                         //html: '<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary</b></center></font></td></tr><tr> <td class="tdgpslabel">Last Tracked On</td> <td class="tdgpslabel">22-1-2015 20:21</td></tr><tr> <td class="tdgpslabel">Last Tracked By</td> <td class="tdgpslabel">Mizi</td></tr><tr> <td class="tdgpslabel">LIcence Status</td> <td class="tdgpslabel">Activated</td></tr></table>',
                         // html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
                     }











                 ]
             },





        ]
    }

});


var _valuesendCommand =
    Ext.create('Ext.Panel', {

        xtype: 'panel',

        //height: 130,
        //width: 160,
        height: 138,
        width: 155,

        // height: '28.5%',
        // width: '44.5%',
        centered: false,
        id: 'popuppanelsingle',
        draggable: false,

        right: 5,
        top: 80,
        style: 'background-color: #57A0DC;',

        showAnimation: {
            type: 'slide',
            direction: 'left',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'slide',
            direction: 'right',
            duration: 250,
            easing: 'ease-out',
            out: true
        },

        items: [


    {



        id: 'InfoSummSendCommands',
        // html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">'+Infotrackid+'</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">'+Infotracktype+'</td> </tr>    <tr > <td class="tdspeedmax">80km/h</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',

        html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
        //original//  html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',

    },


        ],
        scrollable: false

    })
;