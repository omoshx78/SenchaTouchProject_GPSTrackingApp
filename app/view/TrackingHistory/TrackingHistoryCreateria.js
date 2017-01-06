Ext.define('MyGPS.view.TrackingHistory.TrackingHistoryCreateria', {

    extend: 'Ext.Container',

    requires: [
        'Ext.MessageBox',
        'Ext.ActionSheet',
        'Ext.picker.Picker',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio'
    ],
    xtype: 'TrackingHistoryCreateria',
    id: 'TrackingHistoryCreateriaID',
  
    config: {
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },

        items: [

            {

                xtype: 'toolbar',
                title: 'Tracking History',
                docked: 'top',
                id: 'toolbarTrackingHistoryCreateriaTop',
                //  hidden:true,
                items:
                       [


                           {
                               xtype: 'button',

                               id: 'btnTrackingHistoryCreateriaTopHome',
                               //  text: 'Show',
                               iconCls: 'home',
                               // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                
                                   Ext.getCmp('mainView').setActiveItem(1);
                               }



                           },
                           {
                               xtype: 'spacer'
                           },
                           {
                               xtype: 'button',
                               //right: -7,
                               //top: 1,
                               id: 'btnTrackingHistoryCreateriaTopAccInfo',
                               html: '<div ><img src="resources/icons/MainMenuPictureProfile.png" width="45" height="45" alt="Company Name"></div>',
                               //  html: '<div ><img src="resources/icons/hideGeofence.png" width="30" height="20" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {



                               }
                           },


                       ]

            },

            {

                xtype: 'toolbar',

                docked: 'bottom',
                id: 'toolbarTrackingHistoryCreateriaBottom',
                align: 'right',
                pack: 'right',
                //listeners: {
                //    initialize: function(self) {
                //        console.log('searchToolbar initialize()');
                //        var innerEl = self.innerElement;
                //        innerEl.removeCls('x-pack-start');
                //        innerEl.addCls('x-pack-right');

                //    },
                //},
                items:
                       [
  {
      //docked: 'right',
      // width: 50,
      hidden:true,
      ui: 'plain',
      xtype: 'button',
      id: 'btnTrackingHistoryCreateriaCount',

      handler: function () {

      }
  },

  {
xtype:'spacer'
  },



  {
      xtype: 'button',

      id: 'btnTrackingHistoryStartPloting',
      text: 'Start Ploting',
      //  iconCls: 'home',
      // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
      ui: 'decline',
      handler: function () {
          Ext.getCmp('mainView').setActiveItem(1);
      }



  },

                  

                        {
                            xtype: 'button',

                            id: 'btnTrackingHistoryCreateriaBack',
                            text: 'Back',
                            //  iconCls: 'home',
                            // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                            ui: 'action',
                            handler: function () {
                                Ext.getCmp('mainView').setActiveItem(1);
                            }



                        },

                       ]


            },



            {
            xtype: 'container',
            layout: {
                type: 'vbox'

            },
            items: [



                {
                   
                    xtype: 'label',
                    html: ' Track back your item log journey on map.'
                }, 

                {
                    html: '<font size=3px><b>Tracking Item:</font>',
                    margin: 10

                },
                {
                    xtype: 'selectfield',

                    id: 'selectfieldTrackingHistoryCreateriaID',

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
                html: '<font size=3px><b>Search By:</font>',
                margin: 10
            },
            {
                xtype: 'fieldset',
                id: 'SelectField1',
                defaults:
                {
                    xtype: 'radiofield',
                    labelWidth: '40%',
                    labelAlign: 'left',
                    style: 'font-size: 90%'

                },
                items: [
                {
                    name: 'SelectSearchBy',
                    id: 'SelectSearchByToday',
                    //value: 'Today',
                    label: 'Today',
                    listeners: {
                        check: function () {
                            Ext.getCmp('fieldsetTrackingHistoryCreateriaDateTime').setHidden(true);
                            Ext.getCmp('htmlUserdefinedID').setHidden(true);
                            //Ext.getCmp('SelectField3').setDisabled(true);
                            //Ext.getCmp('SelectTxtValStrID').setDisabled(true);
                            //Ext.getCmp('SelectPatient_SelUnit').setDisabled(true);
                            //Ext.getCmp('SelectPatient_ServiceTxt').setDisabled(false);
                            //Ext.getCmp('SelectPatient_ServiceTxt').setValue('0');
                            //Ext.getCmp('SelectPatient_SelUnit').setValue('');
                            //Ext.getCmp('SelectPatient_SelUnitHide').setValue('0');
                        }
                    }
                },
                {
                    name: 'SelectSearchBy',
                    //value: 'Yesterday',
                    label: 'Yesterday',
                    id: 'SelectSearchByYesterday',
                    listeners: {
                        check: function () {
                            Ext.getCmp('fieldsetTrackingHistoryCreateriaDateTime').setHidden(true);
                            Ext.getCmp('htmlUserdefinedID').setHidden(true);
                            //Ext.getCmp('SelectField3').setDisabled(false);
                            //Ext.getCmp('SelectTxtValStrID').setDisabled(false);
                            //Ext.getCmp('SelectPatient_SelUnit').setDisabled(true);
                            //Ext.getCmp('SelectPatient_ServiceTxt').setDisabled(false);
                            //Ext.getCmp('SelectPatient_ServiceTxt').setValue('0');
                            //Ext.getCmp('SelectPatient_SelUnit').setValue('');
                            //Ext.getCmp('SelectPatient_SelUnitHide').setValue('0');

                        }
                    }
                },
                {
                    name: 'SelectSearchBy',
                    //value: 'Hour ago',
                    label: 'Hour ago',
                    id: 'SelectSearchByHourago',
                  
                    listeners: {
                        check: function () {
                            Ext.getCmp('fieldsetTrackingHistoryCreateriaDateTime').setHidden(true);
                            Ext.getCmp('htmlUserdefinedID').setHidden(true);
                            //Ext.getCmp('SelectField3').setDisabled(false);
                            //Ext.getCmp('SelectTxtValStrID').setDisabled(false);
                            //Ext.getCmp('SelectPatient_SelUnit').setDisabled(true);
                            //Ext.getCmp('SelectPatient_ServiceTxt').setDisabled(true);
                            //Ext.getCmp('SelectPatient_ServiceTxt').setValue('0');
                            //Ext.getCmp('SelectPatient_SelUnit').setValue('');
                            //Ext.getCmp('SelectPatient_SelUnitHide').setValue('0');

                        }
                    }

                },
                  {
                      name: 'SelectSearchBy',
                      //value: 'User Defined',
                      label: 'User Defined',
                      id: 'SelectSearchByUserDefined',
                     
                      listeners: {
                          check: function () {

                              //Ext.getCmp('SelectField3').setDisabled(false);
                              //Ext.getCmp('SelectTxtValStrID').setDisabled(false);
                              //Ext.getCmp('SelectPatient_SelUnit').setDisabled(true);
                              //Ext.getCmp('SelectPatient_ServiceTxt').setDisabled(true);
                              //Ext.getCmp('SelectPatient_ServiceTxt').setValue('0');
                              //Ext.getCmp('SelectPatient_SelUnit').setValue('');
                              Ext.getCmp('fieldsetTrackingHistoryCreateriaDateTime').setHidden(false);
                              Ext.getCmp('htmlUserdefinedID').setHidden(false);
                              

                          }
                      }

                  }
                ]
            },
           

            {
                html: '<font size=3px><b>User Defined Datetime:</font>',
                id: 'htmlUserdefinedID',
                hidden:true,
                margin: 10
            },


                     {
                         xtype: 'fieldset',
                         id: 'fieldsetTrackingHistoryCreateriaDateTime',
                         hidden:true,
                         //defaults:
                         //{
                          
                         //    labelWidth: '50%',
                         //    labelAlign: 'left',
                         //    style: 'font-size: 90%'

                         //},

                         items: [
                             {
                                 xtype: 'container',
                                 layout: 'vbox',
                                 items:[



                                  
                                            
                                           {
                                               xtype: 'datepickerfield',
                                               id: 'TrackingHistoryCreateriaFromDate',
                                               destroyPickerOnHide: true,
                                               label: 'Date',
                                              // labelWidth: '60%',
                                               //   name: 'Queue_GetDetailQueue',
                                               dateFormat: "d/m/Y",
                                               clearIcon: true,
                                               //  dateFormat: "Y-m-d",



                                               value: new Date(),
                                               picker: {
                                                   yearFrom: 1900
                                               },
                                               listeners: {
                                                   change: function () {

                                                       dateFromFormated = Ext.Date.format(new Date(Ext.getCmp('TrackingHistoryCreateriaFromDate').getValue()), 'Y-m-d');

                                                   }
                                               }




                                           },

                                        



                                     {
                                         xtype: 'container',
                                         layout: 'hbox',
                                         items:[

                                              {
                                                  xtype: 'textfield',
                                                  // name: 'ID',
                                                   width:270,
                                                
                                                  labelWidth: 102,
                                                  label: 'Time From',
                                                  id: 'txttimefrom',
                                                  placeHolder: '-00:00',
                                                  autoCapitalize: true,
                                                  readOnly: true,
                                                  clearIcon: true

                                              },
                                              {
                                                  xtype: 'button',
                                                  text: 'Time',
                                                  ui: 'confirm',
                                                  width: 45,
                                                  height: 35,
                                                  margin:'5 0 0 0',
                                                  id:'TrackingHistoryCreateriaFromTime',
                                                
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
                                xtype: 'container',
                                layout: 'hbox',
                                items: [

                                     {
                                         xtype: 'textfield',
                                         // name: 'ID',
                                         width: 270,

                                         labelWidth: 102,
                                         label: 'Time To',
                                         id: 'txttimeto',
                                         placeHolder: '-00:00',
                                         autoCapitalize: true,
                                         readOnly: true,
                                         clearIcon: true

                                     },
                                     {
                                         xtype: 'button',
                                         text: 'Time',
                                         ui: 'confirm',
                                         width: 45,
                                         height: 35,
                                         margin: '5 0 0 0',
                                         id: 'TrackingHistoryCreateriaToTime',

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







                                 ]

                             }
                           


                         ]

                     },
                        
              








            ]
        }
        ]
    },
    initialize: function () {
        //Ext.getCmp('SelectPatient_SelUnitHide').setValue('0');

    }

});