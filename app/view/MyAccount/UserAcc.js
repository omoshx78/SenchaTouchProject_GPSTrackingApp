/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */

var btnstatus;
var pwdsts;
var tabActive;
Ext.define('MyGPS.view.MyAccount.UserAcc', {
    extend: 'Ext.tab.Panel',
    xtype: 'UserAccount',
    requires: [
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
        'MyGPS.view.MyAccount.ResponderAlertList',
        //'MyGPS.view.MyAccount.TrackieItems',
        'MyGPS.view.MyAccount.singlesummarypanel',
      'MyGPS.view.MyAccount.listgeofTrackingitems',
        'Ext.field.Radio'
    ],
    id: 'basicform',
    config: {
       
        activeItem: 0,
        tabBar: {
           // ui: 'plain',
            ui: 'neutral',
            layout: {


                pack: 'center'

            },
            listeners: {

},
        },


        items: [

{

    xtype: 'toolbar',
    title: 'My Account',
    docked: 'top',
    id: 'toolbarMyAccountTop',
    //  hidden:true,
    items:
           [


               {
                   xtype: 'button',

                   id: 'btnMyAccountHome',
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
                               id: 'btnMyAccountTopAccInfo',
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
              layout: {
                  pack: 'end',
                  align: 'right',
              },
              items: [



                   {

                       ui: 'action',
                       xtype: 'button',
                       id: 'BackMyAccountDetails',
                       text: 'Back',

                       // hidden:true,
                       handler: function () {
                           if(tabActive == 'AccInfo')
                           {
                               Ext.getCmp('mainView').setActiveItem(1);
                           } if (tabActive == 'TrackingItems') {
                               Ext.getCmp('basicform').setActiveItem(0);

                           } if (tabActive == 'ResponderAlert') {
                               Ext.getCmp('basicform').setActiveItem(1);
                           }
                        
                       }
                   },
              
                {
                   
                    ui: 'action',
                    xtype: 'button',
                    id: 'Backuseracc',
                    text: 'Back',
                   
                   // hidden:true,
                    handler: function () {
                        Ext.getCmp('basicform').setActiveItem(1);
                        Ext.getCmp('Backuseracc').setHidden(true);
                        Ext.getCmp('ViewlastLocuseracc').setHidden(true);
                        Ext.getCmp('useraccStartlivetracking').setHidden(true);
                        Ext.getCmp('BackuserTracerDev').setHidden(true);
                       
                        //if (markerUserAcc) {
                        //    markerUserAcc.setMap(null);
                        //}

                    ///    stopClockSingle();
                        
                    }
                },
                          {

                              ui: 'round',
                              xtype: 'button',
                              id: 'BackuserTracerDev',
                              text: 'Back',
                             hidden: true,
                              handler: function () {
                                  Ext.getCmp('basicform').setActiveItem(4);
                                  Ext.getCmp('Backuseracc').setHidden(false);
                                  Ext.getCmp('useraccStartlivetracking').setHidden(true);
                                  Ext.getCmp('BackuserTracerDev').setHidden(true);
                                  Ext.getCmp('ViewlastLocuseracc').setHidden(false);
                                  //if (markerUserAcc) {
                                  //    markerUserAcc.setMap(null);
                                  //}

                                  //stopClockSingle();

                              }
                          },
//                {
//xtype:'spacer',
//                },
                      {

                          ui: 'plain',
                          xtype: 'button',

                          id: 'ViewlastLocuseracc',
                        //  text: '-',
                          hidden: true,
                          handler: function () {
                              Ext.getCmp('BackuserTracerDev').setHidden(true);
                              loaddoubletap();
                          }
                      },
          {

              ui: 'action',
              xtype: 'button',
              id: 'btnBackResponderAlert',
              text: 'Back',
             hidden: true,
              handler: function () {
                  Ext.getCmp('useraccStartlivetracking').setHidden(true);
                  Ext.getCmp('ViewlastLocuseracc').setHidden(true);
                  Ext.getCmp('Backuseracc').setHidden(true);
                  Ext.getCmp('btnBackResponderAlert').setHidden(true);

                  //Ext.getStore('ResponderAlertGetByAcc').getProxy().setExtraParams({
                  //    AccNo: Ext.getCmp('AccNo').getValue(),
                  //});
                  //Ext.StoreMgr.get('ResponderAlertGetByAcc').load();

                  Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching data11,Please Wait..1' });
                  var task = Ext.create('Ext.util.DelayedTask', function () {
                      //Ext.getStore('ResponderAlertGetByAcc').getProxy().setExtraParams({
                      //    AccNo: Ext.getCmp('AccNo').getValue(),
                      //});
                      //Ext.StoreMgr.get('ResponderAlertGetByAcc').load();
                    
                      Ext.Viewport.unmask();
                  });
                  task.delay(1000);
                  Ext.getCmp('basicform').setActiveItem(2);
              }
          },
                        {
                            //  align: 'center',
                            // width: 50,
                            ui: 'round',
                            xtype: 'button',
                            id: 'useraccStartlivetracking',
                            text: 'Start Live Tracking',
                            hidden: true,
                            handler: function () {
                                //startSingle();

                                Ext.getCmp('Backuseracc').setHidden(true);
                                Ext.getCmp('ViewlastLocuseracc').setHidden(true);
                                Ext.getCmp('useraccStartlivetracking').setHidden(true);
                                Ext.getCmp('BackuserTracerDev').setHidden(true);
                                Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                                    TrackID: SingleTrackID,
                                    AccountNo: AAccountNo
                                });
                                Ext.StoreMgr.get('singlesignalstore').load();

                                Ext.Viewport.mask({ xtype: 'loadmask', message: 'Start Live Tracking..Please Wait..' });
                                var task = Ext.create('Ext.util.DelayedTask', function () {
                                    //   loadTrackID();
                                    var txt = Ext.getCmp('containerdental');
                                    txt.list.select(2);
                                    if (viewmap == 'streetview')
                                    {
                                        viewmap = 'normal';
                                        var cntr = Ext.ComponentQuery.query("#panelMainGmapSingle")[0];
                                        cntr.setActiveItem(0);

                                    }


                                    setTimeout(function () {
                                   
                                    Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                                        TrackID: SingleTrackID,
                                        AccountNo: AAccountNo
                                    });
                                    Ext.StoreMgr.get('singlesignalstore').load();
                                    var myStoresd = Ext.getStore('singlesignalstore');
                                    var modelRecordss = myStoresd.getAt(0);
                                    var pointXYnm = new google.maps.LatLng(modelRecordss.get('Latitude'), modelRecordss.get('Longitude'))
                                   // alert(pointXYnm);
                                    petamap.setZoom(11);
                                    petamap.setCenter(pointXYnm);
                                    }, 1000);



                                    isSingleTrackingRun = "On";
                                    startSingle();

                                    Ext.Viewport.unmask();
                                });
                                task.delay(2000);


                            }
                        },
              
              ],
          },
    
            {
                 title:'Acc.Info',
                xtype:'formpanel',
                id: 'AccountInfo',
                listeners: {

                    activate: function() {
                        Ext.getCmp('Backuseracc').setHidden(true);
                        Ext.getCmp('ViewlastLocuseracc').setHidden(true);
                        Ext.getCmp('useraccStartlivetracking').setHidden(true);
                        Ext.getCmp('BackuserTracerDev').setHidden(true);
                        if (_IsSuccessLogin)
                            SetMyAccountDetailsByAccountNo();
                        tabActive = 'AccInfo';
                    }
                   
                },
              
                items: [
                    {


                            xtype: 'fieldset',
                            id: 'fieldsetAccount',
                            title: 'Account Info',
                            defaults: {
                                labelWidth: '45%',
                            
                            },

                           
                            items: [


                                      
                              

                           {
                               xtype: 'textfield',
                               id: 'AccID',
                               label: 'ID',
                               hidden: true,
                               disabled: true,
                               autoCapitalize: true,
                               //required: true,
                               clearIcon: true
                           },
                               
                                {
                                    xtype: 'textfield',
                                    id: 'AccNo',                                    
                                    label: 'Acc.No',
                                    disabled: true,
                                   // name:'Accou',
                                    //placeHolder: 'Tom Roy',
                                    autoCapitalize: true,
                                    //required: true,
                                    clearIcon: true
                                },
                                 {
                                     xtype: 'textfield',
                                     id: 'AccName',
                                     label: 'Acc.Name',
                                     
                                     //placeHolder: 'Tom Roy',
                                     autoCapitalize: true,
                                     //required: true,
                                     clearIcon: true
                                 },
                                  {
                                      xtype: 'textareafield',
                                      id: 'AccAddress',
                                      label: 'Address',
                                      //placeHolder: 'Tom Roy',
                                      autoCapitalize: true,
                                      //required: true,
                                      clearIcon: true
                                  },
                                    {
                                        xtype: 'textfield',
                                        id: 'AccMobilePhone',
                                        label: 'MobilePhone',
                                        //placeHolder: 'Tom Roy',
                                        autoCapitalize: true,
                                        //required: true,
                                        clearIcon: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'AccHousePhone',
                                        label: 'HousePhone',
                                        //placeHolder: 'Tom Roy',
                                        autoCapitalize: true,
                                        //required: true,
                                        clearIcon: true
                                    },
                                    
                                     {
                                         xtype: 'textfield',
                                         id: 'AccOfficePhone',
                                         label: 'Office Phone',
                                         //placeHolder: 'Tom Roy',
                                         autoCapitalize: true,
                                         //required: true,
                                         clearIcon: true
                                     },


                                       {
                                           xtype: 'textfield',
                                           id: 'AccAlertPhone',
                                           label: 'Alert Phone',
                                           hidden:true,
                                           //placeHolder: 'Tom Roy',
                                           autoCapitalize: true,
                                           //required: true,
                                           clearIcon: true
                                       },
                                       {
                                           xtype: 'emailfield',
                                           id: 'AccEmail',
                                           label: 'Email',
                                           //placeHolder: 'Tom Roy',
                                           autoCapitalize: true,
                                           //required: true,
                                           clearIcon: true
                                       },
                                        {
                                            xtype: 'emailfield',
                                            id: 'AccAlertEmail',
                                            label: 'Alert Email',
                                            hidden:true,
                                            //placeHolder: 'Tom Roy',
                                            autoCapitalize: true,
                                            //required: true,
                                            clearIcon: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            id: 'AccVersion',
                                            label: 'Version',
                                           disabled: true,
                                            //placeHolder: 'Tom Roy',
                                            autoCapitalize: true,
                                            //required: true,
                                            clearIcon: true
                                        },
                                              
                                        {
                                            xtype: 'textfield',
                                            id: 'AccRegisteredDate',
                                            label: 'Register Date',
                                            disabled: true,
                                            //placeHolder: 'Tom Roy',
                                            autoCapitalize: true,
                                            //required: true,
                                            clearIcon: true
                                        },
                                         {
                                             xtype: 'textfield',
                                             id: 'AccExpiredDate',
                                             label: 'Expired Date',
                                             hidden:true,
                                             disabled: true,
                                             //placeHolder: 'Tom Roy',
                                             autoCapitalize: true,
                                             //required: true,
                                             clearIcon: true
                                         },
                                          {
                                              xtype: 'textfield',
                                              id: 'AccCreatedBy',
                                              label: 'CreatedBy',
                                              disabled: true,
                                              //placeHolder: 'Tom Roy',
                                              autoCapitalize: true,
                                              //required: true,
                                              clearIcon: true
                                          },
                                          {
                                              xtype: 'textfield',
                                              id: 'AccCreatedDate',
                                              label: 'Created Date',
                                              //placeHolder: 'Tom Roy',
                                              disabled: true,
                                              autoCapitalize: true,
                                              //required: true,
                                              clearIcon: true
                                          },
                                          {
                                              xtype: 'textfield',
                                              id: 'AccModifiedBy',
                                              label: 'Modified By',
                                              //placeHolder: 'Tom Roy',
                                              disabled: true,
                                              autoCapitalize: true,
                                              //required: true,
                                              clearIcon: true
                                          },

                                           {
                                               xtype: 'textfield',
                                               id: 'AccModifiedDate',
                                               label: 'Modified Date',
                                               //placeHolder: 'Tom Roy',
                                               disabled: true,
                                               autoCapitalize: true,
                                               //required: true,
                                               clearIcon: true
                                           },
                                            {
                                                xtype: 'textfield',
                                                id: 'AccStatus',
                                                label: 'Status',
                                                //placeHolder: 'Tom Roy',
                                                disabled: true,
                                                autoCapitalize: true,
                                                //required: true,
                                                clearIcon: true
                                            },
                                               {
                                                   xtype: 'textfield',
                                                   id: 'AccItemRegisterCount',
                                                   label: 'Item Registered',
                                                   //placeHolder: 'Tom Roy',
                                                   disabled: true,
                                                   autoCapitalize: true,
                                                   //required: true,
                                                   clearIcon: true
                                               },
                                             
                                             //{
                                             //    xtype: 'button',
                                             //    style: 'margin: .5em',
                                             //    id: 'UserAccViewItembtn',
                                             //   // hidden: true,
                                             //    text: 'Tracking Items',
                                             //    handler: function () {
                                             //        Ext.getStore('TrackingItemList').getProxy().setExtraParams({
                                             //            AccNo: AAccountNo,
                                             //        });
                                             //        Ext.StoreMgr.get('TrackingItemList').load();
                                             //        Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching data,Please Wait..' });
                                             //        var task = Ext.create('Ext.util.DelayedTask', function () {
                                             //            Ext.getStore('TrackingItemList').getProxy().setExtraParams({
                                             //                AccNo: AAccountNo,
                                             //            });
                                             //            Ext.StoreMgr.get('TrackingItemList').load();
                                             //          //  var myStore = Ext.getStore('TrackingItemList');
                                             //            //  var co = myStore.getCount() - 1;
                                             //           // var countListItem = myStore.getCount();
                                                       
                                             //            //if (countListItem >= 1) {
                                                             
                                             //            //}
                                             //            //if (countListItem == 0) {
                                             //            //    //Ext.Msg.alert('Info', 'No Trackies Item,,Please add new Item');
                                             //            //    if ((messageboxss())) {
                                             //            //        Ext.Viewport.add(messageboxss('No Trackies Item'));
                                             //            //    }
                                             //            //    Ext.getCmp('basicform').setActiveItem(3);
                                             //            //}
                                             //            Ext.Viewport.unmask();
                                             //        });
                                             //        task.delay(1000);
                                             //        Ext.getCmp('basicform').setActiveItem(2);
                                                   

                                             //    }
                                             //},
                                                 //{
                                                 //    xtype: 'button',
                                                 //    style: 'margin: .5em',
                                                 //    id: 'UserAccViewResponderAlertbtn',
                                                 //    hidden: true,
                                                 //    text: 'Responder Alerted',
                                                 //    handler: function () {
                                                 //        Ext.getCmp('useraccStartlivetracking').setHidden(true);
                                                 //        Ext.getCmp('ViewlastLocuseracc').setHidden(true);
                                                 //        Ext.getCmp('Backuseracc').setHidden(true);

                                                 //        Ext.getStore('ResponderAlertGetByAcc').getProxy().setExtraParams({
                                                 //            AccNo: Ext.getCmp('AccNo').getValue(),
                                                 //        });
                                                 //        Ext.StoreMgr.get('ResponderAlertGetByAcc').load();

                                                 //        Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching data,Please Wait..' });
                                                 //        var task = Ext.create('Ext.util.DelayedTask', function () {
                                                 //            Ext.getStore('ResponderAlertGetByAcc').getProxy().setExtraParams({
                                                 //                AccNo: Ext.getCmp('AccNo').getValue(),
                                                 //            });
                                                 //            Ext.StoreMgr.get('ResponderAlertGetByAcc').load();
                                                 //            //  alert(Ext.getCmp('AccNo').getValue());
                                                 //            Ext.Viewport.unmask();
                                                 //        });
                                                 //        task.delay(1000);
                                                 //        Ext.getCmp('basicform').setActiveItem(7);
                                                 //    }
                                                 //},

                               
                                     {
                                         xtype: 'container',
                                         id: 'ContainerbtnAccInfo',
                                         // hidden:true,
                                         defaults: {
                                             xtype: 'button',
                                             style: 'margin: .5em',
                                             flex: 1
                                         },
                                         layout: {
                                             type: 'hbox'
                                         },
                                         items: [
                                             {
                                                 text: 'Save',
                                                 scope: this,

                                                 hasDisabled: false,
                                                 handler: function (btn) {



                                                     var chkvalue = Ext.getCmp('AccNo').getValue();

                                                     if (chkvalue) {








                                                        // AVersion, ACreatedBy, status,
                                                         Ext.Viewport.mask({ xtype: 'loadmask', message: 'Saving...' });
                                                         var task = Ext.create('Ext.util.DelayedTask', function () {
                                                             InsertUpdateAccount(Ext.getCmp('AccNo').getValue(), Ext.getCmp('AccName').getValue(), Ext.getCmp('AccAddress').getValue(), Ext.getCmp('AccMobilePhone').getValue(), Ext.getCmp('AccHousePhone').getValue(), Ext.getCmp('AccOfficePhone').getValue(), Ext.getCmp('AccAlertPhone').getValue(),
                                     Ext.getCmp('AccEmail').getValue(), Ext.getCmp('AccAlertEmail').getValue(), Ext.getCmp('AccVersion').getValue(), GetCurrentUserName(), Ext.getCmp('AccStatus').getValue(), Ext.getCmp('AccItemRegisterCount').getValue());

                                                             Ext.getCmp('LoginAccNo').setValue(chkvalue);
                                                             Ext.Viewport.unmask();
                                                         });
                                                         task.delay(1000);
                                                      
                                                         //   Ext.getCmp('LoginAccNo').setValue(Ext.getCmp('AccNo').getValue());

                                                     } else {
                                                       
                                                        Ext.Msg.alert("Failed Save!!!");
                                                     }





                                                 }
                                             },
                                           
                                         ]

                                     },


                                        










                            ]
                        },

 {
     xtype: 'fieldset',
     id: 'fieldset2',
     title: 'Login Info',
     defaults: {

         labelWidth: '45%'
     },
     items: [


            {
                xtype: 'textfield',
                id: 'LoginID',
                label: 'ID',
                hidden:true,
                //placeHolder: 'Tom Roy',
                disabled: true,
                autoCapitalize: true,
                //required: true,
                clearIcon: true
            },
          {
              xtype: 'textfield',
              id: 'LoginAccNo',
              label: 'AccNo',
              disabled: true,
              //placeHolder: 'Tom Roy',
              autoCapitalize: true,
              //required: true,
              clearIcon: true
          },
         {
             xtype: 'textfield',
             id: 'LoginUserName',
             label: 'UserName',
             //placeHolder: 'Tom Roy',
             autoCapitalize: true,
             //required: true,
             clearIcon: true
         },
         {
             // xtype: 'textfield',
             xtype: 'passwordfield',
             id: 'LoginPassword',
             label: 'Password',
             //placeHolder: 'Tom Roy',
             autoCapitalize: true,
             //required: true,
             clearIcon: true
         },
          {
              xtype: 'textfield',
              id: 'LoginPasswordtxt',
              label: 'Password',
              hidden: true,
              //placeHolder: 'Tom Roy',
              autoCapitalize: true,
              //required: true,
              clearIcon: true
          },


     ]




 },


                          {
                              xtype: 'container',
                              id: 'ContainerbtnLoginInfo',
                              //  hidden:true,
                              defaults: {
                                  xtype: 'button',
                                  style: 'margin: .5em',
                                  flex: 1
                              },
                              layout: {
                                  type: 'hbox'
                              },
                              items: [
                                  {
                                      text: 'Save',
                                      scope: this,

                                      hasDisabled: false,
                                      handler: function (btn) {
                                          var pwdvalue = Ext.getCmp('LoginPassword').getValue();
                                          var usrnamevalue = Ext.getCmp('LoginUserName').getValue();
                                          if (pwdsts == '1') {
                                              pwdvalue = Ext.getCmp('LoginPasswordtxt').getValue();
                                          }
                                          if (pwdsts == '0') {
                                              pwdvalue = Ext.getCmp('LoginPassword').getValue();
                                          }
                                          if (pwdvalue == "") {
                                              // pwdsts = '0';
                                              Ext.Msg.alert("cannot Empty!!");

                                              return;
                                          }
                                          if (usrnamevalue == "") {
                                              // pwdsts = '0';
                                              Ext.Msg.alert("cannot Empty!!");

                                              return;
                                          }
                                          var OperatingSystem = detectos();
                                          Ext.getCmp('LoginPassword').setValue(pwdvalue);
                                          Ext.getCmp('LoginPasswordtxt').setValue(pwdvalue);


                                          Ext.Viewport.mask({ xtype: 'loadmask', message: 'Save ...' });
                                          var task = Ext.create('Ext.util.DelayedTask', function () {
                                              UpdateGPSuser(Ext.getCmp('LoginUserName').getValue(), pwdvalue, Ext.getCmp('LoginAccNo').getValue(), UserName,
         myip, Ext.browser.name, OperatingSystem, Ext.getCmp('LoginID').getValue());
                                              Ext.Viewport.unmask();
                                          });
                                          task.delay(1000);



                                      }
                                  },

                                   {
                                       text: 'Show Password.',
                                       // scope: this,
                                       id: 'btnshowpwd',

                                       hasDisabled: false,
                                       handler: function (btnn) {


                                           //   UserAccpwdConfirm.show();


                                           UserAccpwdConfirmShow();
                                           Ext.getCmp('UserAccpwdConfirmtxt').setValue("");
                                           //  pwdsts = '1';
                                           //Ext.getCmp('btnshowpwd').setHidden(true);
                                           //Ext.getCmp('btnhidepwd').setHidden(false);
                                           //  Ext.getCmp('LoginPasswordtxt').setHidden(false);
                                           //  Ext.getCmp('LoginPassword').setHidden(true);


                                       }
                                   },
                                 {
                                     text: 'Hide Password',
                                     scope: this,
                                     hidden: true,
                                     id: 'btnhidepwd',
                                     // hasDisabled: false,
                                     handler: function (btn) {
                                         UserAccpwdConfirmHide();
                                         pwdsts = '0';
                                         Ext.getCmp('btnshowpwd').setHidden(false);
                                         Ext.getCmp('btnhidepwd').setHidden(true);
                                         Ext.getCmp('LoginPasswordtxt').setHidden(true);
                                         Ext.getCmp('LoginPassword').setHidden(false);


                                     }

                                 },
                              ]

                          }
                ],





            },


              




               {
                   title: 'Tracking Items',
                  // xtype: 'listgeofenceitems',
                   xtype: 'listgeofTrackingitems',
                   listeners: {

                       activate: function () {
                         
                           if (_IsSuccessLogin)
                           {
                               tabActive = 'TrackingItems';
                           Ext.getStore('TrackingItemList').getProxy().setExtraParams({
                               AccNo: AAccountNo,
                           });
                           Ext.StoreMgr.get('TrackingItemList').load();
                           setTimeout(function () {
                                   
                            
                                   Ext.getStore('TrackingItemList').getProxy().setExtraParams({
                                       AccNo: AAccountNo,
                                   });
                                   Ext.StoreMgr.get('TrackingItemList').load();
                           }, 500);

                           }

                       }

                   },
                

               },
                  {

                      title: 'Responder<br>Alert',
                      //xtype: 'TrackieItemed'
                      xtype: 'ResponderAlertList',
                      //  hidden: true,
                      listeners: {

                          activate: function () {

                              Ext.getCmp('useraccStartlivetracking').setHidden(true);
                              Ext.getCmp('ViewlastLocuseracc').setHidden(true);
                              Ext.getCmp('Backuseracc').setHidden(true);
                              if (_IsSuccessLogin)
                                  tabActive = 'ResponderAlert';
                              Ext.getStore('ResponderAlertGetByAcc').getProxy().setExtraParams({
                                  // AccNo: Ext.getCmp('AccNo').getValue(),
                                  AccNo: AAccountNo,
                              });
                              Ext.StoreMgr.get('ResponderAlertGetByAcc').load();

                              Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching data,Please Wait..' });
                              var task = Ext.create('Ext.util.DelayedTask', function () {
                                  Ext.getStore('ResponderAlertGetByAcc').getProxy().setExtraParams({
                                      AccNo: AAccountNo,
                                  });
                                  Ext.StoreMgr.get('ResponderAlertGetByAcc').load();
                                  //  alert(Ext.getCmp('AccNo').getValue());
                                  Ext.Viewport.unmask();
                              });
                              task.delay(1000);
                              //    Ext.getCmp('basicform').setActiveItem(7);

                          }

                      },




                  },
                {
                    title: '  ',
                    xtype: 'panelsinglesummary',
                    hidden:true
                 
                },

                                 {


                                     xtype: 'formpanel',

                                     id: 'TrackingItemDetail',
                                     title: 'TrackingItemDetail',
                                      hidden: true,
                                     scrollable:'vertical',

                                     listeners: {

                                         activate: function () {
                                             if (_IsSuccessLogin)
                                             try {
                                                 Ext.getStore('TrackingItemCheckIDstore').getProxy().setExtraParams({
                                                     TrackID: Ext.getCmp('TrackIDDetails').getValue(),
                                                 });
                                                 Ext.StoreMgr.get('TrackingItemCheckIDstore').load();
                                             } catch (ex) {
                                                 console.log("exception");
                                             }
                                         }

                                     },
                                  
                                     items: [
                                         {
                                             xtype: 'fieldset',
                                             id: 'fieldset44',
                                             //disabled: true,
                                             title: 'Kid Details',
                                             left:-7,
                                             //defaults: {

                                             //    labelWidth: '45%'
                                             //},
                                        
                                             items: [

                                                
                                                  {

                                                      xtype: 'image',
                                                      src: '/resources/icons/About.jpg',
                                                      width: 220,
                                                      id: 'Pictureprofile',
                                                       margin: '10 0 5 -20',
                                                     //left:-2,
                                                      height: 150,
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       id: 'UsrAccEditPhotoCont',
                                                       //hidden: true,
                                                      // disabled: true,
                                                       items: [
                                                        {
                                                            html: '<input type=file id="fileOpenProfileEdit" onchange="startReadProfileEdit()"/>',
                                                        }
                                                       ]

                                                   },


                                                 {
                                                      xtype: 'textfield',
                                                      id: 'IDDetails',
                                                      label: 'ID',
                                                      disabled: true,
                                                      //placeHolder: 'Tom Roy',
                                                      autoCapitalize: true,
                                                      //required: true,
                                                      clearIcon: true
                                                  },
                                                 {
                                                     xtype: 'textfield',
                                                     id: 'AccountNoDetails',
                                                     label: 'Account No',
                                                     disabled: true,
                                                     //placeHolder: 'Tom Roy',
                                                     autoCapitalize: true,
                                                     required: true,
                                                     clearIcon: true
                                                 },
                                                 {
                                                     xtype: 'textfield',
                                                     id: 'TrackIDDetails',
                                                     label: 'TrackID',
                                                     disabled: true,
                                                     //placeHolder: 'Tom Roy',
                                                     autoCapitalize: true,
                                                     required: true,
                                                    // clearIcon: true
                                                 },
                                                  {
                                                      xtype: 'textfield',
                                                      id: 'TrackItemDetails',
                                                      label: 'Kid Name',
                                                      //disabled: true,
                                                      //placeHolder: 'Tom Roy',
                                                      autoCapitalize: true,
                                                      //required: true,
                                                      clearIcon: true
                                                  },
                                                  
                                                    {
                                                        xtype: 'textfield',
                                                        id: 'GpsDeviceIDDetails',
                                                        label: 'GPS Device ID',
                                                        disabled: true,
                                                        //disabled: true,
                                                        //placeHolder: 'Tom Roy',
                                                        autoCapitalize: true,
                                                        //required: true,
                                                        clearIcon: true
                                                    },
                                                   
                                                {
                                                    xtype: 'textfield',
                                                    id: 'GpsModelDetails',
                                                    label: 'Gps Tracker Model',
                                                    disabled: true,
                                                    //disabled: true,
                                                    //placeHolder: 'Tom Roy',
                                                    autoCapitalize: true,
                                                    //required: true,
                                                    clearIcon: true
                                                },
                                                 
                                                

                                                 
                                                   {
                                                       xtype: 'textfield',
                                                       id: 'GenderDetails',
                                                       label: 'Gender',
                                                       //disabled: true,
                                                       //placeHolder: 'Tom Roy',
                                                       autoCapitalize: true,
                                                       //required: true,
                                                       clearIcon: true
                                                   },
                                                   {
                                                       xtype: 'textfield',
                                                       id: 'RiskDetails',
                                                       label: 'Risk',
                                                       //disabled: true,
                                                       //placeHolder: 'Tom Roy',
                                                       autoCapitalize: true,
                                                       //required: true,
                                                       clearIcon: true
                                                   },
                                                     {
                                                         xtype: 'textfield',
                                                         id: 'AgeDetails',
                                                         label: 'Age',
                                                         //disabled: true,
                                                         //placeHolder: 'Tom Roy',
                                                         autoCapitalize: true,
                                                         //required: true,
                                                         clearIcon: true
                                                     },
                                                      
                                                     

                                                 

                                             ]




                                         },
                                          




                                     ]
                                




                                 },
                                              

                                                    {


                                                        xtype: 'formpanel',
                                                        id: 'ResponderAlertpanel',
                                                        title: ' ',
                                                        hidden: true,


                                                        items: [




                                                            {
                                                                xtype: 'fieldset',
                                                                id: 'fieldsetResponderAlert',
                                                                title: 'Responder Virtual Boundary Alert',
                                                                defaults: {

                                                                    labelWidth: '45%'
                                                                },
                                                                items: [


                                                                       {
                                                                           xtype: 'textfield',
                                                                           id: 'ResponderAlertID',
                                                                           label: 'ID',
                                                                           //placeHolder: 'Tom Roy',
                                                                           disabled: true,
                                                                           autoCapitalize: true,
                                                                           //required: true,
                                                                           clearIcon: true
                                                                       },
                                                                     {
                                                                         xtype: 'textfield',
                                                                         id: 'ResponderAlertAccNo',
                                                                         label: 'AccNo',
                                                                         disabled: true,
                                                                         //placeHolder: 'Tom Roy',
                                                                         autoCapitalize: true,
                                                                         //required: true,
                                                                         clearIcon: true
                                                                     },
                                                                    {
                                                                        xtype: 'textfield',
                                                                        id: 'ResponderAlertName',
                                                                        label: 'Name',
                                                                        disabled: true,
                                                                        //placeHolder: 'Tom Roy',
                                                                        autoCapitalize: true,
                                                                        //required: true,
                                                                        clearIcon: true
                                                                    },
                                                                    {
                                                                        // xtype: 'textfield',
                                                                        xtype: 'textfield',
                                                                        id: 'ResponderAlertRelationShip',
                                                                        label: 'RelationShip',
                                                                        //placeHolder: 'Tom Roy',
                                                                        autoCapitalize: true,
                                                                        disabled: true,
                                                                        //required: true,
                                                                        clearIcon: true
                                                                    },
                                                                     {
                                                                         // xtype: 'textfield',
                                                                         xtype: 'textfield',
                                                                         id: 'ResponderAlertPhoneNo',
                                                                         label: 'Phone Number',
                                                                         //placeHolder: 'Tom Roy',
                                                                         autoCapitalize: true,
                                                                         disabled: true,
                                                                         //required: true,
                                                                         clearIcon: true
                                                                     },
                                                                     {
                                                                         // xtype: 'textfield',
                                                                         xtype: 'textfield',
                                                                         id: 'ResponderAlertEmail',
                                                                         label: 'Email',
                                                                         //placeHolder: 'Tom Roy',
                                                                         autoCapitalize: true,
                                                                         disabled: true,
                                                                         //required: true,
                                                                         clearIcon: true
                                                                     },
                                                                     {
                                                                         // xtype: 'textfield',
                                                                         xtype: 'textfield',
                                                                         id: 'ResponderAlertStatus',
                                                                         label: 'Status',
                                                                         disabled: true,
                                                                         //placeHolder: 'Tom Roy',
                                                                         autoCapitalize: true,
                                                                         //required: true,
                                                                         clearIcon: true
                                                                     },
                                                                     {

                                                                         xtype: 'selectfield',
                                                                         hidden: true,
                                                                         label: 'Status',
                                                                       
                                                                         id: 'ResponderAlertStatusEdit',
                                                                         options: [{
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

                                                                ]




                                                            },


                                                             {
                                                                 xtype: 'container',
                                                                 id: 'ContainerbtnResponderAlert',
                                                                 //  hidden:true,
                                                                 defaults: {
                                                                     xtype: 'button',
                                                                     style: 'margin: .5em',
                                                                     flex: 1
                                                                 },
                                                                 layout: {
                                                                     type: 'hbox'
                                                                 },
                                                                 items: [
                                                                     {
                                                                         text: 'Save',
                                                                         scope: this,

                                                                         hasDisabled: false,
                                                                         handler: function () {
                                                                             if (Ext.getCmp('ResponderAlertName').getValue() == '') {
                                                                                 Ext.Msg.alert('Error', 'ResponderAlertName cannot Empty');
                                                                                 return;
                                                                             }
                                                                             else if (Ext.getCmp('ResponderAlertRelationShip').getValue() == '') {
                                                                                 Ext.Msg.alert('Error', 'RelationShip cannot Empty');
                                                                                 return;
                                                                                 //return;
                                                                             }
                                                                             else if (Ext.getCmp('ResponderAlertPhoneNo').getValue() == '') {
                                                                                 Ext.Msg.alert('Error', 'PhoneNo cannot Empty');
                                                                                 return;
                                                                             }
                                                                             else if (Ext.getCmp('ResponderAlertEmail').getValue() == '') {
                                                                                 Ext.Msg.alert('Error', 'Email cannot Empty');
                                                                                 return;
                                                                             }
                                                                             else if (Ext.getCmp('ResponderAlertStatus').getValue() == '') {
                                                                                 Ext.Msg.alert('Error', 'AlertStatus cannot Empty');
                                                                                 return;
                                                                             }
                                                                             else if (Ext.getCmp('ResponderAlertStatusEdit').getValue() == '') {
                                                                                
                                                                                 Ext.Msg.alert('Error', 'AlertStatus cannot Empty');
                                                                                 return;
                                                                             }
                                                                             Ext.Viewport.mask({ xtype: 'loadmask', message: 'Saving...' });
                                                                             var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                                 ReaponderAlertInsertUpdate(Ext.getCmp('ResponderAlertID').getValue(), Ext.getCmp('ResponderAlertAccNo').getValue(), Ext.getCmp('ResponderAlertName').getValue(),
                                                                               Ext.getCmp('ResponderAlertRelationShip').getValue(), Ext.getCmp('ResponderAlertPhoneNo').getValue(),
                                                                               Ext.getCmp('ResponderAlertEmail').getValue(), Ext.getCmp('ResponderAlertStatusEdit').getValue(), 'UnKnown', 'mizi');

                                                                                 Ext.Viewport.unmask();
                                                                             });
                                                                             task.delay(1000);

                                                                          

                                                                         }
                                                                     },

                                                                      {
                                                                          text: 'Edit',
                                                                          // scope: this,
                                                                          id: 'btnRespondAlertID',

                                                                          hasDisabled: false,
                                                                          handler: function () {
                                                                              Ext.getCmp('ResponderAlertName').setDisabled(false);
                                                                              Ext.getCmp('ResponderAlertRelationShip').setDisabled(false);
                                                                              Ext.getCmp('ResponderAlertPhoneNo').setDisabled(false);
                                                                              Ext.getCmp('ResponderAlertEmail').setDisabled(false);
                                                                              Ext.getCmp('ResponderAlertStatus').setHidden(true);
                                                                              Ext.getCmp('ResponderAlertStatusEdit').setHidden(false);


                                                                          }
                                                                      },

                                                                 ]

                                                             }


                                                        ]







                                                    },

            



                

        
    


]

}

});



function resetbox()
{

    //Ext.getCmp('AccNo').setValue("");

    Ext.getCmp('AccName').setValue("");
    Ext.getCmp('AccAddress').setValue("");
    Ext.getCmp('AccMobilePhone').setValue("");
    Ext.getCmp('AccHousePhone').setValue("");
    Ext.getCmp('AccOfficePhone').setValue("");
    Ext.getCmp('AccAlertPhone').setValue("");
   // Ext.getCmp('AccEmail').setValue("");
    //Ext.getCmp('AccAlertEmail').setValue("");
    Ext.getCmp('AccVersion').setHidden(true);
    Ext.getCmp('AccRegisteredDate').setHidden(true);
    Ext.getCmp('AccExpiredDate').setHidden(true);
    Ext.getCmp('AccCreatedBy').setValue(UserName);
    Ext.getCmp('AccCreatedDate').setHidden(true);
    Ext.getCmp('AccModifiedBy').setHidden(true);
    Ext.getCmp('AccModifiedDate').setHidden(true);
    Ext.getCmp('AccStatus').setValue("Active");
    Ext.getCmp('AccItemRegisterCount').setValue("0");
    Ext.getCmp('UserAccViewItembtn').setHidden(true);
  
}

function clrtxtbox()
{
    Ext.getCmp('TrackIDDetails').setValue("");
    Ext.getCmp('TrackItemDetails').setValue("");
    Ext.getCmp('TrackItemTypeDetails').setValue("");
    Ext.getCmp('GPSSimNumberDetails').setValue("");
    Ext.getCmp('GpsModelDetails').setValue("");
    Ext.getCmp('TrackingModeDetails').setValue("");
    Ext.getCmp('CreatedDateDetails').setValue("");
    Ext.getCmp('CreatedByDetails').setValue("");
    Ext.getCmp('ModifiedDateDetails').setValue("");
    Ext.getCmp('ModifiedbyDetails').setValue("");
    Ext.getCmp('StatusDetails').setValue("");
    Ext.getCmp('ExpiredDateDetails').setValue("");
    Ext.getCmp('TermDetails').setValue("0");
}


function clrtxttrackerdevice() {
   // Ext.getCmp('TrackerID').setValue(modelRecord.get('ID'));
   // Ext.getCmp('TrackerDevID').setValue(modelRecord.get('DeviceID'));
    Ext.getCmp('TrackerDevDevName').setValue("");
   // Ext.getCmp('TrackerDevDevModel').setValue(modelRecord.get('DeviceModel'));
    Ext.getCmp('TrackerDevManuf').setValue("");
    Ext.getCmp('TrackerDevSupplier').setValue("");
    Ext.getCmp('TrackerDevCapability').setValue("");
    Ext.getCmp('TrackerDevCoorType').setValue("");
    Ext.getCmp('TrackerDevSimNum').setValue("");
    Ext.getCmp('TrackerDevSimOprt').setValue("");

    // 'SimOperator',
    Ext.getCmp('TrackerDevStatus').setValue("");
    Ext.getCmp('TrackerDevIgnRem').setValue("");
    Ext.getCmp('TrackerDevLkDoorRem').setValue("");
    Ext.getCmp('TrackerDevArmedRem').setValue("");

    Ext.getCmp('TrackerDevHornRem').setValue("");
    Ext.getCmp('TrackerDevInterval').setValue("");

    Ext.getCmp('TrackerDevGpsPac').setValue("");
    Ext.getCmp('TrackerDevPwd').setValue("");
    Ext.getCmp('TrackerDevUsrnm').setValue("");
    Ext.getCmp('TrackerDevPort').setValue("");
    Ext.getCmp('TrackerDevIP').setValue("");
    Ext.getCmp('TrackerDevCreatedBy').setValue("");
    Ext.getCmp('TrackerDevCreatedDate').setValue("");
    Ext.getCmp('TrackerDevModifiedBy').setValue("");
    Ext.getCmp('TrackerDevModifiedDate').setValue("");
}

var PatImage64;
function startReadProfileEdit(evt) {
    PatImage64 = '';
    var file = document.getElementById('fileOpenProfileEdit').files[0];
  
    if (file) {
        var reader2 = new FileReader();

        reader2.readAsDataURL(file/*, "UTF-8"*/);

        reader2.onload = function (event) {
            ContentString = event.target.result;

            //     alert("saving " + file.name + " bit64 image into database\n" + ContentString);
            PatImage64 = ContentString;
            // Ext.getCmp('Pictureprofile').setSrc("data:image/png;base64," + store2.get('Picture64'));
            Ext.getCmp('Pictureprofile').setSrc(ContentString);

        };
       
    }
    else {
        PatImage64 = '';
    }
   // alert(evt);
    //var file = document.getElementById('fileOpenProfileEdit').files[0];
    //if (file) {

    //    if (file.type.match("image.*")) {
    //        var reader = new FileReader();
    //        reader.readAsDataURL(file/*, "UTF-8"*/);
    //        reader.onload = function (event) { ContentString = event.target.result; };

    //        var reader2 = new FileReader();
    //        reader2.readAsDataURL(file);
    //        reader2.onload = addImgProfileEdit;

    //        alert("Name: " + file.name + "\n" + "Last Modified Date :" + file.lastModifiedDate);
    //        loadimage();
    //    }
    //    else {
    //        getAsTextProfileAdd(file);
    //        alert("Name: " + file.name + "\n" + "Last Modified Date :" + file.lastModifiedDate);
    //        loadimage();
    //    }
    //}


}

function addImgProfileEdit(imgsrc) {
    var img = document.createElement('img');
    img.setAttribute("src", imgsrc.target.result);
    img.setAttribute("width", "150");
    img.setAttribute("height", "150");
    document.getElementById("opProfileEdit").insertBefore(img);

}

function getAsTextProfileEdit(readFile) {
    var reader = new FileReader();
    reader.readAsText(readFile, 'UTF-8');
    reader.onload = loadedProfileEdit;
}

function loadedProfileEdit(evt) {
    alert("File Loaded Successfully" + fileString);
    var fileString = evt.target.result;
    $("#opProfileAdd").text(fileString);
}


function SetMyAccountDetailsByAccountNo()
{
   
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Load Data....' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        _DataStore_RegisteredAccount_LoadByAccountNo.getProxy().setExtraParams({
            AccountNo: GetCurrentUserAccountNo(),
            
        });
        _DataStore_RegisteredAccount_LoadByAccountNo.load({

            callback: function (record, operation, success) {


                if (success) {
                    var store = _DataStore_RegisteredAccount_LoadByAccountNo.getAt(0);


                    if (store != null) {
                        Ext.getCmp('AccID').setValue(store.get('AccID'));
                        Ext.getCmp('AccNo').setValue(store.get('AccountNo'));
                        Ext.getCmp('AccName').setValue(store.get('AccountName'));
                        Ext.getCmp('AccAddress').setValue(store.get('AAddress'));
                        Ext.getCmp('AccMobilePhone').setValue(store.get('AMobilePhone'));
                        Ext.getCmp('AccHousePhone').setValue(store.get('AHousePhone'));
                        Ext.getCmp('AccOfficePhone').setValue(store.get('AOfficePhone'));
                        Ext.getCmp('AccAlertPhone').setValue(store.get('AAlertPhone'));
                        Ext.getCmp('AccEmail').setValue(store.get('AEmail'));
                        Ext.getCmp('AccAlertEmail').setValue(store.get('AAlertEmail'));
                        Ext.getCmp('AccVersion').setValue(store.get('AVersion'));
                        Ext.getCmp('AccRegisteredDate').setValue(store.get('ARegisteredDate'));
                        Ext.getCmp('AccExpiredDate').setValue(store.get('AExpiredDate'));
                        Ext.getCmp('AccCreatedBy').setValue(store.get('ACreatedBy'));
                        Ext.getCmp('AccCreatedDate').setValue(store.get('ACreatedDate'));
                        Ext.getCmp('AccModifiedBy').setValue(store.get('AModifiedBy'));
                        Ext.getCmp('AccModifiedDate').setValue(store.get('AModifiedDate'));
                        Ext.getCmp('AccStatus').setValue(store.get('AStatus'));
                        Ext.getCmp('AccItemRegisterCount').setValue(store.get('AItemRegisterCount'));


                        Ext.getCmp('LoginID').setValue(GetCurrentUserID());
                        Ext.getCmp('LoginAccNo').setValue(GetCurrentUserAccountNo());
                        Ext.getCmp('LoginUserName').setValue(GetCurrentUserName());
                        Ext.getCmp('LoginPassword').setValue(Ext.getCmp('loginpasswordTextField').getValue());


                    }
                }
                else {

                    Ext.Msg.alert("Failed.!");
                }



            }
        })

        Ext.Viewport.setMasked(false);
    });
    task.delay(1000);









}


var _userAccpwdConfirm;
function UserAccpwdConfirm()
{


    _userAccpwdConfirm = Ext.create('Ext.Panel', {
        draggable: false,
        centered: true,
        scrollable: false,
        height: 150,
        width: 280,
        // flex: 1,
        //width: '50%',
        //height: '50%',
        modal: true,
     //   hideOnMaskTap: true,
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },

        items: [

             {

                 xtype: 'toolbar',
                 title: 'Re-Confirm Password',
                 docked: 'top',

             },



             {

                 xtype: 'container',
                 items:[
                       {
                           // xtype: 'textfield',
                           xtype: 'passwordfield',
                           id: 'UserAccpwdConfirmtxt',
                           label: 'Password',
                           labelWrap:true,
                           //placeHolder: 'Tom Roy',
                           autoCapitalize: true,
                           //required: true,
                           clearIcon: true
                       },

                 ]
             },







             
            //{

            //    xtype: 'passwordfield',
            //    name: 'IDtxt',
            //    //  label: 'ID',
            //    id: 'UserAccpwdConfirmtxt',
            //    placeHolder: 'Please Re-insert Password',
            //    autoCapitalize: true,
            //    //required: true,
            //    clearIcon: true


            //},
                  {

                      xtype: 'toolbar',
                      docked: 'bottom',

                      items: [
                           {
                               //docked: 'right',
                               // width: 50,
                               ui: 'round',
                               xtype: 'button',
                               id: 'UserAccpwdConfirmCancel',
                               text: 'Cancel',
                               handler: function () {
                                   UserAccpwdConfirmHide();
                               }
                           },

                           {
                               xtype: 'spacer',
                           },

                           {
                               //docked: 'right',
                               // width: 50,
                               ui: 'round',
                               xtype: 'button',
                               id: 'UserAccpwdConfirmOK',
                               text: 'Check',
                               handler: function () {


                                   var strconfirmpwd = Ext.getCmp('UserAccpwdConfirmtxt').getValue();
                                   if (strconfirmpwd === "") {
                                       pwdsts = '0';
                                       Ext.Msg.alert("cannot Empty!!");

                                       return;
                                   }
                                   if (strconfirmpwd != GetCurrentUserPd()) {
                                       pwdsts = '0';
                                       Ext.Msg.alert("Not match.!!");

                                       return;
                                   }
                                   if (strconfirmpwd == GetCurrentUserPd()) {
                                       pwdsts = '1';
                                       Ext.getCmp('btnshowpwd').setHidden(true);
                                       Ext.getCmp('btnhidepwd').setHidden(false);
                                       Ext.getCmp('LoginPasswordtxt').setValue(GetCurrentUserPd());
                                       Ext.getCmp('LoginPasswordtxt').setHidden(false);
                                       Ext.getCmp('LoginPassword').setHidden(true);
                                       UserAccpwdConfirmHide();
                                       //  Ext.Msg.alert("Success..!!");
                                       return;
                                   }




                               }
                           },


                      ]

                  },



        ],


    });
    return _userAccpwdConfirm;
}







function UserAccpwdConfirmShow()
{
    Ext.Viewport.remove(_userAccpwdConfirm);
    this.overlay = Ext.Viewport.add(UserAccpwdConfirm());
    this.overlay.show();
}


function UserAccpwdConfirmHide() {
    _userAccpwdConfirm.hide();
}