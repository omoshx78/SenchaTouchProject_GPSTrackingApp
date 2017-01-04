var petahistory ;
var dialogboxHistoryTimeset;
Ext.define('MyGPS.view.Gmaphistory', {
    extend: 'Ext.Panel',



    //extend: 'Ext.form.Panel',
    requires: [
      'Ext.data.Store'

    ],
    xtype: 'gMapHistory',
    config: {
        // fullscreen: true,
        id: 'mainViewgmaphistory',

        layout: { type: 'card', animation: { type: 'slide', direction: 'right' } },
        //layout: 'card',
        items: [{







            items: [


                    {

                        xtype: 'toolbar',
                        title: 'History Route',
                        docked: 'top',
                        id: 'toolbarHistoryRouteTop',
                        //  hidden:true,
                        items:
                               [


                                   {
                                       xtype: 'button',

                                       id: 'btnHistoryRouteHome',
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
                    // html: '<img src="resources/icons/Pictureheadertrackinghostory.png" width="100%" height="30%"></img>',
                    //xtype: 'image',
                    //src: document.location.protocol + '//' + document.location.host + '/Pictureheadertrackinghostory.png',
                    //width: '100%'

                    xtype: 'label',
                    html: ' Track back your item log journey on map by date range.<br> Recommended to put time as paramater to get maximize smoothness of ploting point :'
                }, {
                    xtype: 'label',
                    html: '.'

                },

                {
                    xtype: 'label',
                    html: 'Tracking ID:'

                },
                {
                    xtype: 'selectfield',

                    id: 'HistoryTrackingID',

                    //  _DataStore_getTrackID
                    labelWidth: '40%',
                    //store: 'multipletrackingitemselectFID',
                    store: 'TrackingItemList',
                    valueField: 'DeviceID',
                    displayField: 'TrackID',
                    //listeners: {
                    //    change: function () {

                    //        }


                    //}

                },
                {
                    xtype: 'label',
                    html: 'Date From:'

                },

                 {

                     xtype: 'toolbar',
                     // xtype: 'titlebar',
                     docked: 'bottom',

                     items: [
                      {
                          xtype: 'spacer',


                      },

                          {
                              //  align: 'center',
                              // width: 50,
                              ui: 'round',
                              xtype: 'button',
                              id: 'runButtonhistoryploting',
                              text: 'Start Ploting',
                              handler: function () {
                                  // loadTrackID();
                                  firstime = '1';
                                  resumeCounter = 0;
                                  counter = 0;
                              //    Ext.getCmp('Infotrackedhistory').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  ' + Ext.getCmp('HistoryTrackingID').getValue() + '</u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">' + dateFromFormated + '  ' + timeFrom + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel">' + dateToFormated + '  ' + timeTo + '</td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel">null</td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">null</td></tr></table>');
                                  var tf = Ext.getCmp('txttimefrom').getValue();

                                  //  alert(tf.length);
                                  if (tf.length < 1) {


                                      if (!dialogboxHistoryTimeset) {
                                          dialogboxHistoryTimeset = Ext.create('Ext.form.Panel', {
                                              centered: true,
                                              modal: true,
                                              hideOnMaskTap: true,
                                              width: 250,
                                              height: 120,
                                              style: "background-color: black;",
                                              scrollable: false,

                                              items: [
                                                  {

                                                      html: '<font size="4" color="white">You are not set Time,recommended to set time,Continue?</font>'
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
                                                      items: [{
                                                          xtype: 'button',

                                                          itemId: 'BtnHistoryContinueCancel',
                                                          ui: 'round',
                                                          //  padding: '10px',
                                                          text: '<font size="3" color="white">Cancel</font>',
                                                          handler: function () {

                                                              dialogboxHistoryTimeset.hide();

                                                          }
                                                      }, {
                                                          xtype: 'spacer'
                                                      },
                                                                  {
                                                                      xtype: 'button',

                                                                      itemId: 'BtnHistoryContinueOK',
                                                                      ui: 'round',
                                                                      // padding: '10px',
                                                                      // text: 'OK/Procced.',
                                                                      html: '<font size="3" color="white">OK/Procced.</font>',
                                                                      handler: function () {
                                                                          dialogboxHistoryTimeset.hide();
                                                                          Ext.getStore('trackingitemhistorystore').getProxy().setExtraParams({
                                                                              AccNo: AAccountNo,
                                                                              tracID: Ext.getCmp('HistoryTrackingID').getValue(),

                                                                          });
                                                                          Ext.StoreMgr.get('trackingitemhistorystore').load();

                                                                          var myStoreH = Ext.getStore('trackingitemhistorystore');
                                                                          var modelRecordH = myStoreH.getAt(0);

                                                                          Ext.getStore('signalhistorystore').getProxy().setExtraParams({
                                                                              DeviceID: Ext.getCmp('HistoryTrackingID').getValue(),
                                                                              TrackID: Ext.getCmp('HistoryTrackingID').getValue(),
                                                                              GPSSimNumber: '0133376958',
                                                                              DateFrom: dateFromFormated + ' ' + timeFrom,
                                                                              DateTo: dateToFormated + ' ' + timeTo,

                                                                          });
                                                                          Ext.StoreMgr.get('signalhistorystore').load();

                                                                          Ext.getCmp('mainViewgmaphistory').setActiveItem(2);

                                                                          Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point in progress..Please Wait..' });
                                                                          var task = Ext.create('Ext.util.DelayedTask', function () {

                                                                              //console.log(DeviceID + "|" + TrackID + "|" + GPSSimNumber + "|" + DateFrom + "|" + DateTo);
                                                                              // console.log( TrackID + "|" + GPSSimNumber + "|" + DateFrom + "|" + DateTo);
                                                                              Ext.getStore('signalhistorystore').getProxy().setExtraParams({
                                                                                  DeviceID: Ext.getCmp('HistoryTrackingID').getValue(),
                                                                                  TrackID: Ext.getCmp('HistoryTrackingID').getValue(),
                                                                                  GPSSimNumber: '0133376958',
                                                                                  DateFrom: dateFromFormated + ' ' + timeFrom,
                                                                                  DateTo: dateToFormated + ' ' + timeTo,

                                                                              });
                                                                              Ext.StoreMgr.get('signalhistorystore').load();
                                                                              var myStoreHH = Ext.getStore('signalhistorystore');
                                                                              var co = myStoreHH.getCount();

                                                                             // TrackItem = myStoreHH.get('TrackItem');

                                                                              var ii = 0;
                                                                              Xarr.length = 0;
                                                                              Yarr.length = 0;
                                                                              Spdarr.length = 0;
                                                                              DTarr.length = 0;
                                                                              pathXY = "";
                                                                              if (co > 1) {

                                                                                  for (ii = 0; ii < co; ii++) {
                                                                                      var modelRecordHH = myStoreHH.getAt(ii);

                                                                                      Xarr[ii] = modelRecordHH.get('Longitude');
                                                                                      Yarr[ii] = modelRecordHH.get('Latitude');
                                                                                      Spdarr[ii] = modelRecordHH.get('Speed');
                                                                                      DTarr[ii] = modelRecordHH.get('DateDT');

                                                                                  }
                                                                                  isrecenter = '1';

                                                                                  drawlinexypathhistory(pathXY);
                                                                              } else {
                                                                                  isrecenter = '0';
                                                                                  Ext.Msg.alert("No Signal Point Detected.!!");
                                                                                  //if ((messageboxss())) {
                                                                                  //    Ext.Viewport.add(messageboxss('No Point Detected'));
                                                                                  //    dialogboxHistoryTimeset.hide();
                                                                                  //}
                                                                              }



                                                                              Ext.Viewport.unmask();

                                                                          });
                                                                          task.delay(2000);

                                                                      }
                                                                  },

                                                      ]

                                                  },

                                              ]
                                          });
                                          Ext.Viewport.add(dialogboxHistoryTimeset);
                                      }
                                      dialogboxHistoryTimeset.show();





                                      //Ext.Msg.show({
                                      //    title: 'Confirmation?',
                                      //    message: 'You are not set Time,recommended to set time,Continue?',
                                      //    width: 500,
                                      //    buttons: Ext.MessageBox.YESNO,
                                      //    iconCls: Ext.MessageBox.INFO,
                                      //    fn: function (buttonId) {
                                      //        //alert('You pressed the "' + buttonId + '" button.');

                                      //        if (buttonId != "yes")
                                      //        { return; }








                                      //    }
                                      //});


                                  }
                                  else {

                                      Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point in progress..Please Wait..' });
                                      var task = Ext.create('Ext.util.DelayedTask', function () {
                                          Ext.getStore('trackingitemhistorystore').getProxy().setExtraParams({
                                              AccNo: AAccountNo,
                                              tracID: Ext.getCmp('HistoryTrackingID').getValue(),


                                          });
                                          Ext.StoreMgr.get('trackingitemhistorystore').load();

                                      });
                                      task.delay(2000);
                                      plotingHistoryXypath();
                                  }


                              }
                          },
                           {
                               xtype: 'spacer',


                           },

                     ]

                 },







               {
                   xtype: 'container',
                   layout: 'hbox',
                   // align: 'stretch',
                   // width: '100%',


                   items: [
                            {
                                xtype: 'datepickerfield',
                                id: 'historyFromDate',
                                destroyPickerOnHide: true,
                                name: 'Queue_GetDetailQueue',
                                dateFormat: "d/m/Y",
                                clearIcon: true,
                                //  dateFormat: "Y-m-d",

                                flex: 3,

                                value: new Date(),
                                picker: {
                                    yearFrom: 1900
                                },
                                listeners: {
                                    change: function () {
                                        // dateFrom = new Date(Ext.getCmp('historyFromDate').getValue()).toDateString('Y-m-d');

                                        //  dateFrom = Ext.getCmp('historyFromDate').getValue().toString();
                                        //   dateFrom = new Date(Ext.getCmp('historyFromDate').getValue());
                                        //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading..Please Wait..' });
                                        //var task = Ext.create('Ext.util.DelayedTask', function () {

                                        //    Ext.Viewport.unmask();
                                        //});

                                        //task.delay(1000);

                                        dateFromFormated = Ext.Date.format(new Date(Ext.getCmp('historyFromDate').getValue()), 'Y-m-d');
                                        //Ext.Function.defer(function () {
                                        //    Ext.Viewport.setMasked(null);
                                        //  //  alert("xxxxx");
                                        //}, 1000, this);
                                        // alert(dateFromFormated);
                                        // alert(Ext.Date.format(dateFrom, 'Y-m-d'));
                                        //   'Y-m-d'
                                        // dateFrom = new Date(Ext.getCmp('historyFromDate').getValue()).tostring();
                                        //  alert(dateFrom);

                                        //var age = _calculateAge(date);
                                        ////Ext.getCmp('Maintain_ProfileAddAgeTxt').setValue(age);
                                        //var obj = Ext.getCmp('Maintain_ProfileAddAgeTxt');
                                        ////console.log(obj);
                                        //if (Ext.getCmp('Maintain_ProfileAddAgeTxt') != null) {
                                        //    Ext.getCmp('Maintain_ProfileAddAgeTxt').setValue(age)
                                        //}
                                    }
                                }




                            },

                             {
                                 xtype: 'textfield',
                                 // name: 'ID',
                                 flex: 2,

                                 //  label: 'ID',
                                 id: 'txttimefrom',
                                 placeHolder: '- 00:00',
                                 autoCapitalize: true,
                                 //required: true,
                                 clearIcon: true

                             },

                                {
                                    xtype: 'button',
                                    name: 'timebutton',
                                    text: 'Time',
                                    ui: 'confirm',
                                    align: 'right',
                                    hidden: false,
                                    flex: 1,


                                    handler: function () {



                                        var hours = [
                      {
                          text: '00',
                          value: '00'
                      }, {
                          text: '01',
                          value: '01'
                      }, {
                          text: '02',
                          value: '02'
                      }, {
                          text: '03',
                          value: '03'
                      }, {
                          text: '04',
                          value: '04'
                      }, {
                          text: '05',
                          value: '05'
                      }, {
                          text: '06',
                          value: '06'
                      }, {
                          text: '07',
                          value: '07'
                      }, {
                          text: '08',
                          value: '08'
                      }, {
                          text: '09',
                          value: '09'
                      }, {
                          text: '10',
                          value: '10'
                      }, {
                          text: '11',
                          value: '11'
                      }, {
                          text: '12',
                          value: '12'
                      }, {
                          text: '13',
                          value: '13'
                      }, {
                          text: '14',
                          value: '14'
                      }, {
                          text: '15',
                          value: '15'
                      }, {
                          text: '16',
                          value: '16'
                      }, {
                          text: '17',
                          value: '17'
                      }, {
                          text: '18',
                          value: '18'
                      }, {
                          text: '19',
                          value: '19'
                      }, {
                          text: '20',
                          value: '20'
                      }, {
                          text: '21',
                          value: '21'
                      }, {
                          text: '22',
                          value: '22'
                      }, {
                          text: '23',
                          value: '23'
                      }];

                                        var minutes = [
                                            {
                                                text: '00',
                                                value: '00'
                                            }, {
                                                text: '05',
                                                value: '05'
                                            }, {
                                                text: '10',
                                                value: '10'
                                            }, {
                                                text: '15',
                                                value: '15'
                                            }, {
                                                text: '20',
                                                value: '20'
                                            }, {
                                                text: '25',
                                                value: '25'
                                            }, {
                                                text: '30',
                                                value: '30'
                                            }, {
                                                text: '35',
                                                value: '35'
                                            }, {
                                                text: '40',
                                                value: '40'
                                            }, {
                                                text: '45',
                                                value: '45'
                                            }, {
                                                text: '50',
                                                value: '50'
                                            }, {
                                                text: '55',
                                                value: '55'
                                            }
                                        ];
                                        var picker = Ext.create('Ext.Picker', {
                                            useTitles: true,
                                            listeners: {
                                                change: function (picker, value, eOpts) {
                                                    // alert(value.hour + ':' + value.minute);
                                                    // Ext.getCmp('').setHidden(true);
                                                    Ext.getCmp('txttimefrom').setValue(value.hour + ':' + value.minute);
                                                    timeFrom = (value.hour + ':' + value.minute);
                                                    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Please Wait..' });
                                                    var task = Ext.create('Ext.util.DelayedTask', function () {
                                                        Ext.getStore('trackingitemhistorystore').getProxy().setExtraParams({
                                                            AccNo: AAccountNo,
                                                            tracID: Ext.getCmp('HistoryTrackingID').getValue(),


                                                        });
                                                        Ext.StoreMgr.get('trackingitemhistorystore').load();
                                                        Ext.Viewport.unmask();
                                                    });

                                                    task.delay(1000);
                                                }
                                            },
                                            slots: [{
                                                align: 'left',
                                                name: 'hour',
                                                title: 'hour',
                                                data: hours
                                            }, {
                                                align: 'right',
                                                name: 'minute',
                                                title: 'minute',
                                                data: minutes
                                            }] // slots
                                        }); // create()

                                        Ext.Viewport.add(picker);
                                    }
                                }
                   ]


               },

                      {
                          xtype: 'label',
                          html: 'Date To:'

                      },

               {
                   xtype: 'container',
                   layout: 'hbox',
                   // align: 'stretch',
                   // width: '100%',


                   items: [
                            {
                                xtype: 'datepickerfield',
                                id: 'historytoDate',
                                destroyPickerOnHide: true,
                                name: 'Queue_GetDetailQueue',
                                dateFormat: "d/m/Y",
                                flex: 3,

                                value: new Date(),
                                picker: {
                                    yearFrom: 1900
                                },

                                listeners: {
                                    change: function () {
                                        // dateTo = new Date(Ext.getCmp('historytoDate').getValue()).toDateString("d/m/Y");

                                        dateToFormated = Ext.Date.format(new Date(Ext.getCmp('historytoDate').getValue()), 'Y-m-d');
                                        //var age = _calculateAge(date);
                                        ////Ext.getCmp('Maintain_ProfileAddAgeTxt').setValue(age);
                                        //var obj = Ext.getCmp('Maintain_ProfileAddAgeTxt');
                                        ////console.log(obj);
                                        //if (Ext.getCmp('Maintain_ProfileAddAgeTxt') != null) {
                                        //    Ext.getCmp('Maintain_ProfileAddAgeTxt').setValue(age)
                                        //}
                                    }
                                }



                            },

                             {
                                 xtype: 'textfield',
                                 //   name: 'ID',
                                 flex: 2,

                                 //  label: 'ID',
                                 id: 'txttimeto',
                                 placeHolder: '- 00:00',
                                 autoCapitalize: true,
                                 //required: true,
                                 clearIcon: true

                             },

                                {
                                    xtype: 'button',
                                    name: 'timebutton',
                                    text: 'Time',
                                    ui: 'confirm',
                                    align: 'right',
                                    hidden: false,
                                    flex: 1,


                                    handler: function () {



                                        var hours = [
                      {
                          text: '00',
                          value: '00'
                      }, {
                          text: '01',
                          value: '01'
                      }, {
                          text: '02',
                          value: '02'
                      }, {
                          text: '03',
                          value: '03'
                      }, {
                          text: '04',
                          value: '04'
                      }, {
                          text: '05',
                          value: '05'
                      }, {
                          text: '06',
                          value: '06'
                      }, {
                          text: '07',
                          value: '07'
                      }, {
                          text: '08',
                          value: '08'
                      }, {
                          text: '09',
                          value: '09'
                      }, {
                          text: '10',
                          value: '10'
                      }, {
                          text: '11',
                          value: '11'
                      }, {
                          text: '12',
                          value: '12'
                      }, {
                          text: '13',
                          value: '13'
                      }, {
                          text: '14',
                          value: '14'
                      }, {
                          text: '15',
                          value: '15'
                      }, {
                          text: '16',
                          value: '16'
                      }, {
                          text: '17',
                          value: '17'
                      }, {
                          text: '18',
                          value: '18'
                      }, {
                          text: '19',
                          value: '19'
                      }, {
                          text: '20',
                          value: '20'
                      }, {
                          text: '21',
                          value: '21'
                      }, {
                          text: '22',
                          value: '22'
                      }, {
                          text: '23',
                          value: '23'
                      }];

                                        var minutes = [
                                            {
                                                text: '00',
                                                value: '00'
                                            }, {
                                                text: '05',
                                                value: '05'
                                            }, {
                                                text: '10',
                                                value: '10'
                                            }, {
                                                text: '15',
                                                value: '15'
                                            }, {
                                                text: '20',
                                                value: '20'
                                            }, {
                                                text: '25',
                                                value: '25'
                                            }, {
                                                text: '30',
                                                value: '30'
                                            }, {
                                                text: '35',
                                                value: '35'
                                            }, {
                                                text: '40',
                                                value: '40'
                                            }, {
                                                text: '45',
                                                value: '45'
                                            }, {
                                                text: '50',
                                                value: '50'
                                            }, {
                                                text: '55',
                                                value: '55'
                                            }
                                        ];
                                        var picker = Ext.create('Ext.Picker', {
                                            useTitles: true,
                                            listeners: {
                                                change: function (picker, value, eOpts) {
                                                    //alert(value.hour + ' ' + value.minute);
                                                    Ext.getCmp('txttimeto').setValue(value.hour + ':' + value.minute);

                                                    timeTo = (value.hour + ':' + value.minute + ':59');




                                                    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Please Wait..' });
                                                    var task = Ext.create('Ext.util.DelayedTask', function () {
                                                        Ext.getStore('trackingitemhistorystore').getProxy().setExtraParams({
                                                            AccNo: AAccountNo,
                                                            tracID: Ext.getCmp('HistoryTrackingID').getValue(),


                                                        });
                                                        Ext.StoreMgr.get('trackingitemhistorystore').load();
                                                        Ext.Viewport.unmask();
                                                    });

                                                    task.delay(1000);
                                                }
                                            },
                                            slots: [{
                                                align: 'left',
                                                name: 'hour',
                                                title: 'hour',
                                                data: hours
                                            }, {
                                                align: 'right',
                                                name: 'minute',
                                                title: 'minute',
                                                data: minutes
                                            }] // slots
                                        }); // create()

                                        Ext.Viewport.add(picker);
                                    }
                                }
                   ]


               },





            ]



            //style: "background-color: #CC0000; color:white;",
            //html: '<center>Item 1</center>'









        },

        //second item

 {



     xtype: 'map',
     id: 'maphistorycard',
     mapOptions: {

         // center: new google.maps.LatLng(5.4445234, 101.91246603),
         zoom: 6,
         //mapTypeId: google.maps.MapTypeId.HYBRID,
         mapTypeId: google.maps.MapTypeId.ROADMAP,



         streetViewControl: true,
         streetViewControlOptions: {
             position: google.maps.ControlPosition.TOP_RIGHT,
         },
         mapTypeControl: true,
         mapTypeControlOptions: {
             style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
             position: google.maps.ControlPosition.TOP_RIGHT
         },
         //zoomControl: true,
         //zoomControlOptions: {
         //    position: google.maps.ControlPosition.LEFT_TOP,
         //},
     },

     listeners: {
         maprender: function (comp, map) {

             petahistory = map;

             //var bounds;
             //var flightPlanCoordinates = new Array();

             //bounds = new google.maps.LatLngBounds();







             //setTimeout(function () {

             //    try {

             //        var locations = [[3.2096, 101.74971, '000.12'], [3.2096, 101.74972, '000.02'], [3.2096, 101.74972, '000.28'], [3.2096, 101.74972, '000.17'], [3.2096, 101.74967, '000.28'], [3.2096, 101.74967, '000.47'], [3.2098, 101.74981, '000.78'], [3.2098, 101.74981, '000.32'], [3.2098, 101.74980, '000.22'], [3.2098, 101.74979, '000.16'], [3.2096, 101.74971, '000.12'], [3.2096, 101.74972, '000.02'], [3.2096, 101.74972, '000.28'], [3.2096, 101.74972, '000.17'], [3.2096, 101.74967, '000.28'], [3.2096, 101.74967, '000.47'], [3.2098, 101.74981, '000.78'], [3.2098, 101.74981, '000.32'], [3.2098, 101.74980, '000.22'], [3.2098, 101.74979, '000.16'], ];
             //        bounds = new google.maps.LatLngBounds();
             //        for (i = 0; i < locations.length; i++) {
             //            var point = new google.maps.LatLng(locations[i][0], locations[i][1]);
             //            bounds.extend(point);
             //            // imagie = 'images/markerpoint1.png';
             //            marker = new google.maps.Marker({
             //                position: new google.maps.LatLng(locations[i][0], locations[i][1]),
             //                animation: google.maps.Animation.DROP,
             //                //  icon: imagie,
             //                map: map
             //            });
             //            flightPlanCoordinates.push(point);
             //            flightPath = new google.maps.Polyline({
             //                path: flightPlanCoordinates,
             //                geodesic: true,
             //                strokeColor: '#FF0000',
             //                strokeOpacity: 1.0,
             //                strokeWeight: 2
             //            });

             //            markersArray.push(marker);
             //        }








             //        map.fitBounds(bounds);
             //        flightPath.setMap(map);
             //    } catch (err) {
             //        console.log(err);
             //    }





             //}, 5000);


         }
     },






     items: [



         {

             xtype: 'toolbar',
             title: 'History Route',
             docked: 'top',
             id: 'toolbarHistoryRouteMapTop',
             //  hidden:true,
             items:
                    [


                        {
                            xtype: 'button',

                            id: 'btnHistoryRouteMapHome',
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
             // xtype: 'titlebar',
             docked: 'bottom',

             items: [


                  {
                      //  align: 'center',
                      //height: 10,
                      //margin: '2 10 2 10',
                      ui: 'plain',
                      xtype: 'button',

                      id: 'backButtonhistoryploting',
                      text: '<< Back',
                      handler: function () {
                       //   _valuepanelhistoryPlay.hide();
                          Ext.getCmp('mainViewgmaphistory').setActiveItem(0);
                          //if (isrecenter == '1') {
                          //    resetMap();
                          //}


                         


                      }
                  },
                  {
                      xtype: 'spacer'
                  },

                  {
                      //  align: 'center',
                      // width: 50,
                      ui: 'plain',
                      xtype: 'button',
                      id: 'testButtonhistoryploting',
                      text: 'show Info',
                      handler: function (btn) {

                          Ext.getCmp('Playtrackedhistory').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 26px; color: #fff; text-align: center;">0</td> </tr> <tr > <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;   font-weight: bold;">0.0km/h</td> </tr> <tr> <td colspan="2" style="background-color: #57A0DC; font-weight: bold; font-size: 10px; color: #fff; text-align: center;  ">00:00:00:00:0</td> </tr>  </table>');

                          // _valuepanelhistoryPlay.show();
                          //  _valuepanelhistoryinfo.show();




                          if (!this.overlay) {
                              this.overlay = Ext.Viewport.add(_valuepanelhistoryinfo
                          );

                          }
                          this.overlay.show();
                          //if (btn.hasDisabled) {

                          //    _valuepanelhistoryinfo.hide();






                          //    btn.hasDisabled = false;
                          //    btn.setText('show Infos');

                          //} else {
                          //    _valuepanelhistoryinfo.show();
                          //   // _valuepanelhistoryinfo.add(aboutPanel);
                          //  //  aboutPanel.show();
                          //   // _valuepanelhistoryinfo.show();
                          //    btn.hasDisabled = true;
                          //    btn.setText('Show Infos');
                          //}






                          //_valuepanelhistoryinfo.show();
                          // plotingpoint();
                      }
                  },
             ]


         }]

















     //items:[{


     //{
     //    xtype: 'container',
     //    layout: 'hbox',





 },








        ]
    }
});
var pathXY = "";
var LatitudeHH;
var LongitudeHH;
var SpeedHH;
var DateDTHH;
var _DataStore_getTrackID;
var dateFrom;
var dateFromFormated;
var dateTo;
var dateToFormated;
var timeFrom = '00:00';
var timeTo = '00:00';
var trackID;
var TrackItem;

//xyHistory = new Array(50)

//xyHistory[0] = new Array(3)
var lineXYpath = [];
var Xarr = [];
var Yarr = [];
var Spdarr = [];
var DTarr = [];
var xyHistory = [];
var markersArray = [];
var flightPath;

var polyLengthInMeters;
var isrecenter;

//function plotingpoint() {


//    if (markersArray) {
//        for (i in markersArray) {
//            markersArray[i].setMap(null);
//        }
//        markersArray.length = 0;
//    }
//   // flightPath.setMap(null);
//   // marker.setMap(null);





//    var bounds;
//    var flightPlanCoordinates = new Array();
//    //var me = this;
//    //me.map = map;
//    bounds = new google.maps.LatLngBounds();







//    setTimeout(function () {

//        try {

//            var locations = [[3.2096, 101.74971, '000.12'], [3.2096, 101.74972, '000.02'], [3.2096, 101.74972, '000.28'], [3.2096, 101.74972, '000.17'], [3.2096, 101.74967, '000.28'], [3.2096, 101.74967, '000.47'], [3.2098, 101.74981, '000.78'], [3.2098, 101.74981, '000.32'], [3.2098, 101.74980, '000.22'], [3.2098, 101.74979, '000.16'], [3.2096, 101.74971, '000.12'], [3.2096, 101.74972, '000.02'], [3.2096, 101.74972, '000.28'], [3.2096, 101.74972, '000.17'], [3.2096, 101.74967, '000.28'], [3.2096, 101.74967, '000.47'], [3.2098, 101.74981, '000.78'], [3.2098, 101.74981, '000.32'], [3.2098, 101.74980, '000.22'], [3.2098, 101.74979, '000.16'], ];
//            bounds = new google.maps.LatLngBounds();
//            for (i = 0; i < locations.length; i++) {
//                var point = new google.maps.LatLng(locations[i][0], locations[i][1]);
//                bounds.extend(point);
//                // imagie = 'images/markerpoint1.png';
//                marker = new google.maps.Marker({
//                    position: new google.maps.LatLng(locations[i][0], locations[i][1]),
//                    animation: google.maps.Animation.DROP,
//                    //  icon: imagie,
//                    map: petahistory
//                });
//                flightPlanCoordinates.push(point);
//               flightPath = new google.maps.Polyline({
//                    path: flightPlanCoordinates,
//                    geodesic: true,
//                    strokeColor: '#FF0000',
//                    strokeOpacity: 1.0,
//                    strokeWeight: 2
//               });




//            }




//            google.maps.event.addListener(marker, 'mousedown',
//function (event) {
//    //ib.record = {
//    //    //places: data
//    //};


//    var ib = new InfoBubble({
//        hideCloseButton: false,
//        disableAutoPan: true,
//        maxHeight: 110,
//        // position: posisi

//    });


//    ib.setContent([
//        '<div class="infobox">',
//        '<div class="content">',
//       // data.get('description'),
//     'ID:<br>Types:<br>GeoCode Address:<br>Kampung ulu gelas besar<br>564739 Terengganu<br> Malaysia',
//        '</div>',
//      // '<img src="resources/images/arrow.png">',
//        '</div>'
//    ].join(''));



//    /*
// * center the map on the marker position
// **/
//    // map.setCenter(selfMarker.position);
//    ib.open(petahistory, this);



//});



//            petahistory.fitBounds(bounds);
//            flightPath.setMap(petahistory);
//        } catch (err) {
//            console.log(err);
//        }





//    }, 1000);





//}



function removeLine() {
    //for (i = 0; i < line.length; i++) {
    //    line[i].setMap(null); //or line[i].setVisible(false);
    //}
    if (lineXYpath) {
        for (i in lineXYpath) {
            lineXYpath[i].setMap(null);
        }
        lineXYpath.length = 0;
    }




}

function continueploting() {
    var continu;
    Ext.Msg.show({
        title: 'Confirmation?',
        message: 'You are not set Time,this will make ploting point taking long time,recommended to set time,Continue?',
        width: 500,
        buttons: Ext.MessageBox.YESNO,
        iconCls: Ext.MessageBox.INFO,
        fn: function (buttonId) {
            //alert('You pressed the "' + buttonId + '" button.');
            continu = buttonId;
        }
    });
    return continu;
}


function resetMap() {

    var bound;

    if (markersArray) {
        for (i in markersArray) {
            markersArray[i].setMap(null);
        }
        markersArray.length = 0;
    }
    if (lineXYpath) {
        for (i in lineXYpath) {
            lineXYpath[i].setMap(null);
        }
        lineXYpath.length = 0;
    }



    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Re-Center Map...' });
    var task = Ext.create('Ext.util.DelayedTask', function () {


        petahistory.setZoom(5);      // This will trigger a zoom_changed on the map
        petahistory.setCenter(new google.maps.LatLng(4.65307992, 102.11242676));

        //var points = new google.maps.LatLng(4.65307992, 102.11242676);
        //var bound = new google.maps.LatLngBounds();
        // bound.extend(points);
        // petahistory.fitBounds(bound);


        Ext.Viewport.unmask();

    });
    task.delay(1000);
    //setTimeout(function () {

    // var points = new google.maps.LatLng(3.10017121, 101.71019197);
    //var bound = new google.maps.LatLngBounds();
    // bound.extend(points);
    // petahistory.fitBounds(bound);


    //  petahistory.setZoom(8);      // This will trigger a zoom_changed on the map
    //     petahistory.setCenter(new google.maps.LatLng(4.03961783, 107.86376953));

    //   petahistory.map.setCenter(new google.maps.LatLng(4.03961783, 107.86376953));

    //peta.map.setCenter(new google.maps.LatLng(5.4445234, 101.91246603));
    // peta.map.bounds.extend(5.4445234, 101.91246603);

    // petahistory.setZoom(10);

    // marker.setMap(null);
    //}, 1000);



}

function plotingHistoryXypath() {



    Ext.getStore('trackingitemhistorystore').getProxy().setExtraParams({
        AccNo: AAccountNo,
        tracID: Ext.getCmp('HistoryTrackingID').getValue(),


    });
    Ext.StoreMgr.get('trackingitemhistorystore').load();

    var myStoreH = Ext.getStore('trackingitemhistorystore');
    var modelRecordH = myStoreH.getAt(0);
    var Did = modelRecordH.get('DeviceID');
    var TrID = Ext.getCmp('HistoryTrackingID').getValue();
    var GsimNumber = modelRecordH.get('SimNum');
    //var cooo = myStoreH.getCount();
    // TrackItem








    //plotingpoint();
    Ext.getStore('signalhistorystore').getProxy().setExtraParams({
        DeviceID: Did,
        TrackID: TrID,
        GPSSimNumber: GsimNumber,
        DateFrom: dateFromFormated + ' ' + timeFrom,
        DateTo: dateToFormated + ' ' + timeTo,

    });
    Ext.StoreMgr.get('signalhistorystore').load();
    // console.log(dateFromFormated + ' ' + timeFrom + '|' + dateToFormated + ' ' + timeTo + modelRecordH.get('GPSSimNumber') + '  ' + modelRecordH.get('DeviceID') + ' ' + Ext.getCmp('HistoryTrackingID').getValue() + '' + modelRecordH.get('GPSSimNumber'));
    Ext.getCmp('mainViewgmaphistory').setActiveItem(2);
    // drawlinexypathhistory();

    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point in progress..Please Wait..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        //   loadTrackID();

        //  alert(dateFromFormated + ' ' + timeFrom + '|' + dateToFormated + ' ' + timeTo + modelRecordH.get('GPSSimNumber') + '  ' + modelRecordH.get('DeviceID') + ' ' + Ext.getCmp('HistoryTrackingID').getValue() + '' + modelRecordH.get('GPSSimNumber'));


        // console.log(Did + "|" + TrID + "|" + GsimNumber + "|" + dateFromFormated + ' ' + timeFrom + "|" + dateToFormated + ' ' + timeTo);


        Ext.getStore('signalhistorystore').getProxy().setExtraParams({
            DeviceID: Did,
            TrackID: TrID,
            GPSSimNumber: GsimNumber,
            DateFrom: dateFromFormated + ' ' + timeFrom,
            DateTo: dateToFormated + ' ' + timeTo,

        });
        Ext.StoreMgr.get('signalhistorystore').load();
        var myStoreHH = Ext.getStore('signalhistorystore');
        var co = myStoreHH.getCount();
        // var modelRecord = myStore.getAt(0);
        // alert(co);

        TrackItem = modelRecordH.get('TrackItem');
        //pointCount = co;

        //Ext.getStore('trackingitemhistorystore').getProxy().setExtraParams({
        //    AccNo: AAccountNo,
        //    tracID: Ext.getCmp('HistoryTrackingID').getValue(),


        //});
        //Ext.StoreMgr.get('trackingitemhistorystore').load();
        //var myStoreHz = Ext.getStore('trackingitemhistorystore');
        //var modelRecordHz = myStoreHz.getAt(0);
        // alert(modelRecordHz.get('TrackItem'));


        var ii = 0;
        Xarr.length = 0;
        Yarr.length = 0;
        Spdarr.length = 0;
        DTarr.length = 0;
        pathXY = "";
        if (co > 1) {
            //  [undefined[3.15830443,101.71043068,10Kkm/h,28/1/2015 10:43:44 PM],[3.15868472,101.71032876,15,28/1/2015 10:45:15 PM],[3.15898468,101.71016783,27,28/1/2015 10:46:32 PM],[3.15914536,101.70979768,15,28/1/2015 10:47:35 PM],[3.15914536,101.70979768,20,28/1/2015 10:48:32 PM],[3.15899539,101.70948118,50,28/1/2015 10:49:49 PM],[3.15886684,101.7091915,55,28/1/2015 10:50:59 PM],[3.15851332,101.70859605,60,28/1/2015 10:52:05 PM],[3.15803662,101.70772702,69,28/1/2015 10:53:16 PM],[3.15761883,101.70702964,80,28/1/2015 10:54:40 PM],[3.15710462,101.70614988,85,28/1/2015 10:55:58 PM],[3.1567404,101.70540959,45,28/1/2015 10:57:05 PM],[3.15652079,101.70485169,10,28/1/2015 10:57:51 PM],]
            // undefined3.15830443,101.71043068|3.15868472,101.71032876|3.15898468,101.71016783|3.15914536,101.70979768|3.15914536,101.70979768|3.15899539,101.70948118|3.15886684,101.7091915|3.15851332,101.70859605|3.15803662,101.70772702|3.15761883,101.70702964|3.15710462,101.70614988|3.1567404,101.70540959|3.15652079,101.70485169|
            // var locations = [[3.10017121, 101.71019197, '000.12'], [3.10002658, 101.70988619, '000.02'], [3.09978018, 101.70955896, '000.28'], [3.099507, 101.70911908, '000.17'], [3.09966234, 101.70884013, '000.28'], [3.10007479, 101.70851827, '000.47'], [3.10055153, 101.70820713, '000.78'], [3.10098541, 101.70786917, '000.32'], ];
            pointCount = co;
            console.log("first:" + pointCount);
            for (ii = 0; ii < co; ii++) {
                var modelRecordHH = myStoreHH.getAt(ii);
                //LatitudeHH ='['+ modelRecordHH.get('Latitude')+',';
                // LongitudeHH = modelRecordHH.get('Longitude')+',';
                // SpeedHH = '"'+ modelRecordHH.get('Speed')+'"'+'],';
                ////  DateDTHH = modelRecordHH.get('DateDT')+'],';
                // pathXY += LatitudeHH + LongitudeHH + SpeedHH;


                //LatitudeHH =  modelRecordHH.get('Latitude');
                //LongitudeHH = modelRecordHH.get('Longitude');
                //SpeedHH =  modelRecordHH.get('Speed') ;
                //xyHistory[ii][0] = LatitudeHH;
                //xyHistory[ii][1] = LongitudeHH; xyHistory[ii][2] = SpeedHH;

                Xarr[ii] = modelRecordHH.get('Longitude');
                Yarr[ii] = modelRecordHH.get('Latitude');
                Spdarr[ii] = modelRecordHH.get('Speed');
                DTarr[ii] = modelRecordHH.get('DateDT');
                if (ii === 5000) {
                    pointCount = ii;
                    console.log(pointCount);
                    Ext.Msg.show({
                        title: 'Tracking Log History',
                        message: 'Reached Maximum Point(5000) Allowed.,system will only draw first 5000 point ,the rest point will be ignored.',
                        width: 300,
                        buttons: Ext.MessageBox.OK,
                        iconCls: Ext.MessageBox.INFO,
                        fn: function (buttonIdmsg) {
                            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Removing extra point...' });
                            var task = Ext.create('Ext.util.DelayedTask', function () {

                                Ext.Viewport.unmask();
                            });
                            task.delay(1000);


                        }
                    });
                    // Ext.Msg.alert("Reached Maximum Point(55)");

                    break;
                }
                //   images.push(["a", "b", "c"]);
                //  pathXY += "[" + LatitudeHH + "," + LongitudeHH + ",'" + SpeedHH+"'],";
                //  texting += "[" + convertedy + "," + convertedx + ",'" + ds.Tables[0].Rows[i][2].ToString() + "'],";
                //  loadMarkeri(petamapmultiple, Latitude, Longitude, "tracking", TrackID, TrackItem, Speed, ii);


            }
            //  multiDimensionalArray[0][1]
            //  drawlinexypathhistory('[' + pathXY + ']');

            // Array[0, 0]:= "Tom" Array[0, 1]:= "scientist" Array[1, 0]:= "Beryl" Array[1, 1]:= "engineer" Array[2, 0]:= "Ann" Array[2, 1]:= "surgeon" Array[3, 0]:= "Bill" Array[3, 1]:= "taxman" Array[4, 0]:= "Myrtal" Array[4, 1]:= "bank robber"
            isrecenter = '1';
            drawlinexypathhistory(pathXY);
        } else {
            isrecenter = '0';
            Ext.Msg.alert("No Signal Point Detected.!!");
           
        }

        //  console.log('['+pathXY+']');

        Ext.Viewport.unmask();

    });
    task.delay(2000);

}



//var infoBubble;
var map;
var bounds;
var imagie;
var flightPath;
var travellength;
var travellengthkm;
var marker, i;
var pointCount;
//var flightPlanCoordinates = new Array();
function drawlinexypathhistory(XYhistoryPath) {
    // flightPlanCoordinates.length = 0;


    var flightPlanCoordinates = new Array();

    var locations = [];
    //  var locations = new [];
    // locations.push(XYhistoryPath);
    //  locations.push(XYhistoryPath)
    //  locations = xyHistory;
    // locations ='['+XYhistoryPath+']';

    // var locations = ["['3.10017121','101.71019197', '000.12'], ['3.10002658', '101.70988619', '000.02'], ['3.09978018', '101.70955896', '000.28'], ['3.099507', '101.70911908', '000.17'], ['3.09966234', '101.70884013', '000.28']," ];
    //  var locations =  [[3.15830443,101.71043068,"10"],[3.15868472,101.71032876,"15"],[3.15898468,101.71016783,"27"],[3.15914536,101.70979768,"15"],[3.15914536,101.70979768,"20"],[3.15899539,101.70948118,"50"],[3.15886684,101.7091915,"55"],[3.15851332,101.70859605,"60"],[3.15803662,101.70772702,"69"],[3.15761883,101.70702964,"80"],[3.15710462,101.70614988,"85"],[3.1567404,101.70540959,"45"],[3.15652079,101.70485169,"10"],];
    //  var  locations= [[3.15830443, 101.71043068, "10"], [3.15868472, 101.71032876, "15"], [3.15898468, 101.71016783, "27"], [3.15914536, 101.70979768, "15"], [3.15914536, 101.70979768, "20"], [3.15899539, 101.70948118, "50"], [3.15886684, 101.7091915, "55"], [3.15851332, 101.70859605, "60"], [3.15803662, 101.70772702, "69"], [3.15761883, 101.70702964, "80"], [3.15710462, 101.70614988, "85"], [3.1567404, 101.70540959, "45"], [3.15652079, 101.70485169, "10"], ]
    // var locations = [XYhistoryPath];

    //                [[3.15830443,101.71043068,'10'],[3.15868472,101.71032876,15],[3.15898468,101.71016783,27],[3.15914536,101.70979768,15],[3.15914536,101.70979768,20],[3.15899539,101.70948118,50],[3.15886684,101.7091915,55],[3.15851332,101.70859605,60],[3.15803662,101.70772702,69],[3.15761883,101.70702964,80],[3.15710462,101.70614988,85],[3.1567404,101.70540959,45],[3.15652079,101.70485169,10],]
    // var locations=[[3.15830443,101.71043068,10Kkm/h,28/1/2015 10:43:44 PM], [3.15868472, 101.71032876, 15 , 28/1/2015 10:45:15 PM],[3.15898468,101.71016783,27,28/1/2015 10:46:32 PM],[3.15914536,101.70979768,15,28/1/2015 10:47:35 PM],[3.15914536,101.70979768,20,28/1/2015 10:48:32 PM],[3.15899539,101.70948118,50,28/1/2015 10:49:49 PM],[3.15886684,101.7091915,55,28/1/2015 10:50:59 PM],[3.15851332,101.70859605,60,28/1/2015 10:52:05 PM],[3.15803662,101.70772702,69,28/1/2015 10:53:16 PM],[3.15761883,101.70702964,80,28/1/2015 10:54:40 PM],[3.15710462,101.70614988,85,28/1/2015 10:55:58 PM],[3.1567404,101.70540959,45,28/1/2015 10:57:05 PM],[3.15652079,101.70485169,10,28/1/2015 10:57:51 PM],]

    //  var locations = XYhistoryPath;

    //var contentstring;
    //[[3.15830443,101.71043068,10],[3.15868472,101.71032876,15],[3.15898468,101.71016783,27],[3.15914536,101.70979768,15],[3.15914536,101.70979768,20],[3.15899539,101.70948118,50],[3.15886684,101.7091915,55],[3.15851332,101.70859605,60],[3.15803662,101.70772702,69],[3.15761883,101.70702964,80],[3.15710462,101.70614988,85],[3.1567404,101.70540959,45],[3.15652079,101.70485169,10],]
    //[[3.15830443,101.71043068,10Kkm/h],[3.15868472,101.71032876,15],[3.15898468,101.71016783,27],[3.15914536,101.70979768,15],[3.15914536,101.70979768,20],[3.15899539,101.70948118,50],[3.15886684,101.7091915,55],[3.15851332,101.70859605,60],[3.15803662,101.70772702,69],[3.15761883,101.70702964,80],[3.15710462,101.70614988,85],[3.1567404,101.70540959,45],[3.15652079,101.70485169,10],]
    console.log(Xarr.length);

    // console.log(XYhistoryPath);

    //Xarr[ii] = modelRecordHH.get('Longitude');
    //Yarr[ii] = modelRecordHH.get('Latitude');
    //Spdarr[ii] = modelRecordHH.get('Speed');
    //DTarr[ii] = modelRecordHH.get('DateDT');

    setTimeout(function () {



        bounds = new google.maps.LatLngBounds();

        for (i = 0; i < Xarr.length; i++) {
            //var point = new google.maps.LatLng(locations[i][0], locations[i][1]);
            // bounds.extend(point);
            var point = new google.maps.LatLng(Yarr[i], Xarr[i]);
            bounds.extend(point);
            //  console.log(locations[i][0], locations[i][1]);
            marker = new google.maps.Marker({
                //    position: new google.maps.LatLng(locations[i][0], locations[i][1]),
                position: new google.maps.LatLng(Yarr[i], Xarr[i]),
                animation: google.maps.Animation.DROP,
                //icon: imagie,
                map: petahistory
            });

            markersArray.push(marker);








            flightPlanCoordinates.push(point);
            var flightPath = new google.maps.Polyline({
                path: flightPlanCoordinates,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            lineXYpath.push(flightPath);

            flightPath.setMap(petahistory);
            polyLengthInMeters = google.maps.geometry.spherical.computeLength(flightPath.getPath().getArray());
            // var travellength = parseInt(polyLengthInMeters);
            travellength = +Math.floor(polyLengthInMeters);


            google.maps.event.addListener(marker, 'mousedown', (function (marker, i) {


                return function () {
                    var infowindow = new google.maps.InfoWindow();
                    var dt = DTarr[i].replace(/(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}/g, '');


                    infowindow.setContent("<font color=red>Signal seq:<b>" + i + "</b><br> Speed :<b>" + Spdarr[i] + "km/h</b><br> Time :<b>" + dt + "</b></font>");
                    infowindow.open(petahistory, marker);
                }
            })
    (marker, i));


        }

        petahistory.fitBounds(bounds);
        travellengthkm = travellength / 1000;
        // alert(travellengthkm.toFixed(1) + " km");
        // console.log(travellength);
        Ext.getCmp('Infotrackedhistory').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  ' + Ext.getCmp('HistoryTrackingID').getValue() + '</u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">' + dateFromFormated + '  ' + timeFrom + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel">' + dateToFormated + '  ' + timeTo + '</td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel">' + travellengthkm.toFixed(1) + " KM" + "| Point:" + pointCount + '</td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackItem + '</td></tr></table>');
    }, 1000);


}


var isfirst = '1';
function initxy() {
    alert("initxffffy");
    if (markersArray) {
        for (i in markersArray) {
            markersArray[i].setMap(null);
        }
        markersArray.length = 0;
    }
    if (lineXYpath) {
        for (i in lineXYpath) {
            lineXYpath[i].setMap(null);
        }
        lineXYpath.length = 0;
    }

    Ext.getStore('trackingitemhistorystore').getProxy().setExtraParams({
        AccNo: AAccountNo,
        tracID: Ext.getCmp('HistoryTrackingID').getValue(),


    });
    Ext.StoreMgr.get('trackingitemhistorystore').load();

    var myStoreH = Ext.getStore('trackingitemhistorystore');
    var modelRecordH = myStoreH.getAt(0);

    //plotingpoint();
    Ext.getStore('signalhistorystore').getProxy().setExtraParams({
        DeviceID: modelRecordH.get('DeviceID'),
        TrackID: Ext.getCmp('HistoryTrackingID').getValue(),
        GPSSimNumber: modelRecordH.get('GPSSimNumber'),
        DateFrom: dateFromFormated + ' ' + timeFrom,
        DateTo: dateToFormated + ' ' + timeTo,

    });
    Ext.StoreMgr.get('signalhistorystore').load();



    Ext.getStore('signalhistorystore').getProxy().setExtraParams({
        DeviceID: modelRecordH.get('DeviceID'),
        TrackID: Ext.getCmp('HistoryTrackingID').getValue(),
        GPSSimNumber: modelRecordH.get('GPSSimNumber'),
        DateFrom: dateFromFormated + ' ' + timeFrom,
        DateTo: dateToFormated + ' ' + timeTo,

    });
    Ext.StoreMgr.get('signalhistorystore').load();
    var myStoreHH = Ext.getStore('signalhistorystore');
    var co = myStoreHH.getCount();

    TrackItem = modelRecordH.get('TrackItem');


    var ii = 0;
    Xarr.length = 0;
    Yarr.length = 0;
    Spdarr.length = 0;
    DTarr.length = 0;
    pathXY = "";
    if (co > 1) {

        for (ii = 0; ii < co; ii++) {
            var modelRecordHH = myStoreHH.getAt(ii);

            Xarr[ii] = modelRecordHH.get('Longitude');
            Yarr[ii] = modelRecordHH.get('Latitude');
            Spdarr[ii] = modelRecordHH.get('Speed');
            DTarr[ii] = modelRecordHH.get('DateDT');


        }

        isrecenter = '1';

    }


    myLoopXY();


}




var ixy = 1;                     //  set your counter to 1

function calcDistance(p1, p2) {
    return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(1);
}


var flightPlanCoordinatess = new Array();
var ttpoint;
//var XYinit;
function loopingXY(number) {
    console.log(number);

    // alert(Yarr[number] + ',' + Xarr[number]);


    if (number == "1") {

        ttpoint = Xarr.length - 1
        //  alert(XYinit);
        Ext.getCmp('Infotrackedhistory').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  ' + Ext.getCmp('HistoryTrackingID').getValue() + '</u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">' + dateFromFormated + '  ' + timeFrom + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel">' + dateToFormated + '  ' + timeTo + '</td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel">Calculating..</td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackItem + '</td></tr></table>');
        if (markersArray) {
            for (i in markersArray) {
                markersArray[i].setMap(null);
            }
            markersArray.length = 0;
        }
        if (lineXYpath) {
            for (i in lineXYpath) {
                lineXYpath[i].setMap(null);
            }
            lineXYpath.length = 0;
        }
    }
    var rnumber = number - 1;

    //var point = new google.maps.LatLng(Yarr[rnumber], Xarr[rnumber]);
    //bounds.extend(point);
    //  console.log(locations[i][0], locations[i][1]);
    marker = new google.maps.Marker({
        //    position: new google.maps.LatLng(locations[i][0], locations[i][1]),
        position: new google.maps.LatLng(Yarr[rnumber], Xarr[rnumber]),
        // animation: google.maps.Animation.DROP,
        //icon: imagie,
        map: petahistory
    });


    //NEW


    //var XYinit = new google.maps.LatLng(Yarr[0], Xarr[0]);

    //var restXY= new google.maps.LatLng(Yarr[rnumber], Xarr[rnumber]);


    var p1 = new google.maps.LatLng(Yarr[0], Xarr[0]);
    var p2 = new google.maps.LatLng(Yarr[rnumber], Xarr[rnumber]);

    //alert(calcDistance(p1, p2));
    //var fres
    //  alert(XYinit + " ------ " + restXY);
    //alert();
    //console.log(XYinit);
    //console.log(restXY);



    //var calculateR = google.maps.geometry.spherical.computeDistanceBetween((XYinit, restXY) / 1000).toFixed(2);
    //alert(calculateR);

    //  polyLengthInMeters = google.maps.geometry.spherical.computeLength(flightPaths.getPath().getArray());
    // var travellength = parseInt(polyLengthInMeters);
    //  travellength = +Math.floor(polyLengthInMeters);


    Ext.getCmp('Infotrackedhistory').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  ' + Ext.getCmp('HistoryTrackingID').getValue() + '</u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">' + dateFromFormated + '  ' + timeFrom + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel">' + dateToFormated + '  ' + timeTo + '</td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel">' + calcDistance(p1, p2) + " KM | Total Point:" + ttpoint + '</td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackItem + '</td></tr></table>');


    //  _valuepanelStatusPlay.hide();

    //


    var dtt = DTarr[rnumber].replace(/(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}/g, '');
    markersArray.push(marker);
    Ext.getCmp('Playtrackedhistory').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 26px; color: #fff; text-align: center;">' + rnumber + '</td> </tr> <tr > <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;   font-weight: bold;">' + Spdarr[rnumber] + 'km/h</td> </tr> <tr> <td colspan="2" style="background-color: #57A0DC; font-weight: bold; font-size: 10px; color: #fff; text-align: center;  ">' + dtt + '</td> </tr>  </table>');
    //   Ext.getCmp('Playtrackedhistory').setHtml('<table>  <tr> <td colspan="3" rowspan="2" font-weight: bold; style="background-color: red;  font-size: 25px; color: #fff; text-align: center;">' + rnumber + '</td> </tr>  <tr > <td colspan="3" style="background-color: red;  font-size: 15px; color: #fff; text-align: center;   font-weight: bold;">' + Spdarr[rnumber] + 'km/h</td> </tr> <tr> <td colspan="3" style="background-color: red; font-weight: bold; font-size: 15px; color: #fff; text-align: center;  ">' + dtt + '</td> </tr>  </table>');
    google.maps.event.addListener(marker, 'mousedown', (function (marker, rnumber) {


        return function () {
            var infowindow = new google.maps.InfoWindow();
            var dt = DTarr[rnumber].replace(/(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}/g, '');


            infowindow.setContent("<font color=red>Signal seq:<b>" + rnumber + "</b><br> Speed :<b>" + Spdarr[rnumber] + "km/h</b><br> Time :<b>" + dt + "</b></font>");
            infowindow.open(petahistory, marker);
        }
    })
(marker, rnumber));


    //  console.log(rnumber+'-----'+number + '-------' + pointCount)

    if (number == pointCount) {

        Ext.Msg.show({
            title: 'DONE..',
            message: 'Draw line over point?',
            width: 500,
            buttons: Ext.MessageBox.YESNO,
            iconCls: Ext.MessageBox.INFO,
            fn: function (buttonId) {
                if (buttonId != "yes") {
                    firstime = '1';
                    resumeCounter = 0;
                    counter = 0;
                    btnplay.setHtml('<div ><img src="resources/icons/playhistory.png" width="40" height="40" alt="Company Name"></div>');
                    //  Ext.getCmp('playTrackhistorylbl').setHtml('<div ><img src="resources/icons/playhistory.png" width="40" height="40" alt="Company Name"></div>');
                    firstime = '1'; return;
                }
                Ext.Viewport.mask({ xtype: 'loadmask', message: 'Drawing Line...' });
                var task = Ext.create('Ext.util.DelayedTask', function () {




                    var flightPlanCoordinates = new Array();

                    var points;

                    for (i = 0; i < Xarr.length; i++) {
                        //var point = new google.maps.LatLng(locations[i][0], locations[i][1]);
                        // bounds.extend(point);
                        points = new google.maps.LatLng(Yarr[i], Xarr[i]);
                        flightPlanCoordinates.push(points);
                    }




                    var flightPath = new google.maps.Polyline({
                        path: flightPlanCoordinates,
                        geodesic: true,
                        strokeColor: '#FF0000',
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    });

                    lineXYpath.push(flightPath);

                    flightPath.setMap(petahistory);
                    polyLengthInMeters = google.maps.geometry.spherical.computeLength(flightPath.getPath().getArray());
                    // var travellength = parseInt(polyLengthInMeters);
                    travellength = +Math.floor(polyLengthInMeters);
                    Ext.getCmp('Infotrackedhistory').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  ' + Ext.getCmp('HistoryTrackingID').getValue() + '</u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">' + dateFromFormated + '  ' + timeFrom + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel">' + dateToFormated + '  ' + timeTo + '</td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel">' + travellengthkm.toFixed(1) + " KM | Total Point:" + ttpoint + '</td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackItem + '</td></tr></table>');
                    firstime = '1';
                    resumeCounter = 0;
                    counter = 0;
                    btnplay.setHtml('<div ><img src="resources/icons/playhistory.png" width="40" height="40" alt="Company Name"></div>');
                    Ext.Viewport.unmask();
                });
                task.delay(2000);

            }
        });



    }
    //drawline(Xarr[rnumber], Yarr[rnumber]);













}


