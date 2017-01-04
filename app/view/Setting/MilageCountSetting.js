

Ext.define('MyGPS.view.Setting.MilageCountSetting', {

});


var _milageCountSettingEditor;

var _milageCountSettingEditorCallFromPointInfo;

function MilageCountSettingEditor() {



    _milageCountSettingEditor =
        Ext.create('Ext.Panel', {
            draggable: false,
        //    centered: true,
            // scrollable: true,
            zIndex: 50,
            //height: 343,
            //width: 450,
            // flex: 1,
            width: '100%',
            height: '100%',
          //  modal: true,
            hideOnMaskTap: false,
            scrollable: {
                direction: 'vertical',
                directionLock: true
            },
            showAnimation: {
                type: 'slideIn',
                direction: 'left',
                duration: 550,
                //easing: 'ease-in'
            },
            hideAnimation: {
                type: 'slideOut',
                direction: 'right',
                duration: 250,
                ////easing: 'ease-out'
                //  easing: 'ease-in'
            },
            //showAnimation: {
            //    type: 'popIn',
            //    duration: 250,
            //    easing: 'ease-out'
            //},
            //hideAnimation: {
            //    type: null,
            //    duration: 250,
            //    easing: null
            //},
            //  config: {
            //  style: "background-color: #57A0DC; color:white;",
            items: [

                 {

                     xtype: 'toolbar',
                     title: 'Milage Count Setting',
                     docked: 'top',

                 },

                 {

                     xtype: 'carousel',
                     height: 670,

                     items:[
                         {
                             id: 'MilageCountSettingDetailsID',
                             cls: 'card1',
                             xtype: 'fieldset',
                             title: 'Milage Count Setting Details',
                             margin: '0 -8 0 0',
                             defaults: {
                                 labelWidth: '40%',

                             },


                             items: [
                                  {
                                      xtype: 'textfield',
                                      id: 'MilageCountSetting_Subscription',
                                      label: 'Subscription',
                                      disabled: true,
                                      labelWrap: true,
                                  },

                                 {
                                     xtype: 'textfield',
                                     id: 'MilageCountSetting_AccountNo',
                                     label: 'Account No',
                                     labelWrap: true,
                                     disabled: true,
                                     hidden: true

                                 },
                                                                          {
                                                                              xtype: 'textfield',
                                                                              id: 'MilageCountSetting_DeviceID',
                                                                              label: 'Device ID',
                                                                              disabled: true,
                                                                              labelWrap: true,
                                                                              hidden: true
                                                                          },
                                                                         {
                                                                             xtype: 'textfield',
                                                                             id: 'MilageCountSetting_TrackID',
                                                                             label: 'Track ID',
                                                                             disabled: true,
                                                                             labelWrap: true,
                                                                             hidden: true
                                                                         },
                                                                         {
                                                                             xtype: 'textfield',
                                                                             id: 'MilageCountSetting_CurrentMilage',
                                                                             label: 'Current Milage',
                                                                             disabled: false,
                                                                             labelWrap: true,
                                                                             //hidden: true
                                                                         },



                                                                          {
                                                                              xtype: 'textfield',
                                                                              id: 'MilageCountSetting_NextAlertMilage',
                                                                              label: 'Next Alert Milage',
                                                                              disabled: true,
                                                                              labelWrap: true,
                                                                              hidden: true
                                                                          },
                                                                           {
                                                                               xtype: 'textfield',
                                                                               id: 'MilageCountSetting_RecorrectToleranceMilage',
                                                                               label: 'Recorrect Tolerance Milage',
                                                                               disabled: false,
                                                                               labelWrap: true,
                                                                           },
                                                                           {
                                                                               xtype: 'textfield',
                                                                               id: 'MilageCountSetting_MilageIntervalAlert',
                                                                               label: 'Milage Interval Alert(KM/H)',
                                                                               disabled: false,
                                                                               labelWrap: true,
                                                                           },

                                                                           {
                                                                               xtype: 'textfield',
                                                                               id: 'MilageCountSetting_MilageAlertVia',
                                                                               label: 'Milage Alert Via',
                                                                               disabled: false,
                                                                               labelWrap: true,
                                                                               hidden: true
                                                                           },

                                                                             {
                                                                                 xtype: 'togglefield',
                                                                                 id: 'MilageCountSetting_SentViaSMS',
                                                                                 value: true,
                                                                                 label: 'Milage Alert Via SMS',
                                                                                 labelWrap: true,
                                                                                 listeners: {
                                                                                     change: function () {
                                                                                         // alert(Ext.getCmp('PanMapAfterPointChange').getValue());
                                                                                     }

                                                                                 },

                                                                             },
                                                                          {
                                                                              xtype: 'togglefield',
                                                                              id: 'MilageCountSetting_SentViaEmail',
                                                                              value: true,
                                                                              label: 'Milage Alert Via EMAIL',
                                                                              labelWrap: true,
                                                                              listeners: {
                                                                                  change: function () {
                                                                                      // alert(Ext.getCmp('PanMapAfterPointChange').getValue());
                                                                                  }

                                                                              },

                                                                          }, {
                                                                              xtype: 'togglefield',
                                                                              id: 'MilageCountSetting_SentViaPush',
                                                                              value: false,
                                                                              label: 'Milage Alert Via PUSH',
                                                                              labelWrap: true,
                                                                              listeners: {
                                                                                  change: function () {
                                                                                      // alert(Ext.getCmp('PanMapAfterPointChange').getValue());
                                                                                  }

                                                                              },

                                                                          },

                                                                           {
                                                                               xtype: 'textfield',
                                                                               id: 'MilageCountSetting_ActivationDate',
                                                                               label: 'Activation Date',
                                                                               disabled: true,
                                                                               labelWrap: true,
                                                                               hidden: true
                                                                           },


                                                                             {
                                                                                 xtype: 'textfield',
                                                                                 id: 'MilageCountSetting_ExpiredDate',
                                                                                 label: 'Expired Date',
                                                                                 disabled: true,
                                                                                 labelWrap: true,
                                                                                 hidden: true
                                                                             },
                                                                           {
                                                                               xtype: 'textfield',
                                                                               id: 'MilageCountSetting_AlertSentCount',
                                                                               label: 'Alert Sent Count',
                                                                               disabled: true,
                                                                               labelWrap: true,
                                                                               hidden: true
                                                                           },



                                                                            {
                                                                                xtype: 'textfield',
                                                                                id: 'MilageCountSetting_LastSentMilageAlertDate',
                                                                                label: 'Last Alert Date',
                                                                                disabled: true,
                                                                                labelWrap: true,
                                                                                hidden: true
                                                                            },
                                                                           {
                                                                               xtype: 'textfield',
                                                                               id: 'MilageCountSetting_UpdatedBy',
                                                                               label: 'Updated By',
                                                                               disabled: true,
                                                                               labelWrap: true,
                                                                           },


                                                                            {
                                                                                xtype: 'textfield',
                                                                                id: 'MilageCountSetting_LastUpdateDate',
                                                                                label: 'Last Update Date',
                                                                                disabled: true,
                                                                                labelWrap: true,
                                                                            },

                                                                                  {
                                                                                      xtype: 'container',
                                                                                      id: 'MilageCountSetting_SaveButton',
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
                                                                                              handler: function () {





                                                                                              }
                                                                                          },

                                                                                      ]

                                                                                  },



































                             ]
                         },




                         {


                                 
                                    

                                     xtype: 'container',
                                     cls: 'card2',
                                     layout: {

                                         type: 'vbox',
                                         //  style: "background-color: #57A0DC; color:white;",

                                     },
                                 
                                     items:[

                                         {

                                             id: 'MilageCountResponderAlertID',
                                             cls: 'card2',
                                             xtype: 'fieldset',
                                             title: '<font size="4" color="black">Milage Count Responder Alert</font><br><font size="1" color="black">*Double tap/click to view details</font>',
                                             margin: '0 -8 0 0',
                                             defaults: {
                                                 labelWidth: '40%',

                                             },


                                             items: [

                                                 {
                                                     xtype: 'list',
                                                     height: 400,
                                                     store: _DataStore_ResponderAlert_LoadByAccountNoModule,
                                                     id: 'ResponderAlert_LoadByAccountNoModuleID',
                                                     mode: 'SINGLE',
                                                     itemTpl: '<div class="myContent">' +
                                                        '<div><b>{ResponderName}</b></div>' +
                                                        '<div>{ResponderRelationShip}</div>' +
                                                           //  '<div>{GPSSimNumber}</div>' +
                                                         '<div style="display: none;">{ID}</div>' +
                                                        '</div>',
                                                     // height: '100%',


                                                     listeners: {


                                                         itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                                                             SettingResponderAlertShow();
                                                             SettingResponderAlert_SetDetails((record.get('ID')), (record.get('AccountNo')), (record.get('ResponderName')), (record.get('ResponderRelationShip')), (record.get('ResponderPhoneNo')), (record.get('ResponderEmail')), (record.get('Status')), (record.get('ModifiedDate')), (record.get('ModifiedBy')), (record.get('RespondModule')), (record.get('Notes')));



                                                         },


                                                         //itemsingletap: function (dataview, index, target, record, e, eOpts) {
                                                           

                                                         //}
                                                     }




                                                 }


                                             ]
                                         }, {
                                             xtype: 'container',
                                             id: 'MilageCountSettingResponderalert_AddnewResponderalertButton',
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
                                                     text: 'Add New Responder Alert',
                                                     scope: this,

                                                     hasDisabled: false,
                                                     handler: function () {





                                                     }
                                                 },

                                             ]

                                         },

                                     ]
                         








                         },
                     ]
                 },

                


                      






                      {

                          xtype: 'toolbar',
                          docked: 'bottom',

                          items: [
                               {
                                   //docked: 'right',
                                   // width: 50,
                                   ui: 'action',
                                   xtype: 'button',
                                   id: 'MilageCountSettingCancel',
                                   text: 'Cancel',
                                   handler: function () {

                                       MilageCountSettingHide();
                                   }
                               },
                               {
                                   xtype: 'spacer'
                               },
                               {
                                   ui: 'action',
                                   xtype: 'button',
                                   id: 'MilageCountSettingBack',
                                   text: 'Back',

                                   handler: function () {
                                       MilageCountSettingHide();

                                   }
                               },




                          ]

                      },



            ],


        });



    return _milageCountSettingEditor;





}















function MilageCountSettingEditorCallFromPointInfo() {



    _milageCountSettingEditorCallFromPointInfo =
        Ext.create('Ext.Panel', {
            draggable: false,
            //    centered: true,
            // scrollable: true,
            zIndex: 50,
            //height: 343,
            //width: 450,
            // flex: 1,
            width: '100%',
            height: '100%',
            //  modal: true,
            hideOnMaskTap: false,
            scrollable: {
                direction: 'vertical',
                directionLock: true
            },
            showAnimation: {
                type: 'slide',
                direction: 'left',
                duration: 150,
                //easing: 'ease-in'
            },
            hideAnimation: {
                type: null,
                direction: null,
                duration: 250,
                ////easing: 'ease-out'
                //  easing: 'ease-in'
            },
            //showAnimation: {
            //    type: 'popIn',
            //    duration: 250,
            //    easing: 'ease-out'
            //},
            //hideAnimation: {
            //    type: null,
            //    duration: 250,
            //    easing: null
            //},
            //  config: {
            //  style: "background-color: #57A0DC; color:white;",
            items: [

                 {

                     xtype: 'toolbar',
                     title: 'Milage Count Setting',
                     docked: 'top',

                 },

                 {

                     xtype: 'carousel',
                     height: 670,

                     items: [
                         {
                             id: 'MilageCountSettingDetailsCallFromPointInfoID',
                             cls: 'card1',
                             xtype: 'fieldset',
                             title: 'Milage Count Setting Details',
                             margin: '0 -8 0 0',
                             defaults: {
                                 labelWidth: '40%',

                             },


                             items: [
                                  {
                                      xtype: 'textfield',
                                      id: 'MilageCountSettingCallFromPointInfo_Subscription',
                                      label: 'Subscription',
                                      disabled: true,
                                      labelWrap: true,
                                  },

                                 {
                                     xtype: 'textfield',
                                     id: 'MilageCountSettingCallFromPointInfo_AccountNo',
                                     label: 'Account No',
                                     labelWrap: true,
                                     disabled: true,
                                     hidden: true

                                 },
                                                                          {
                                                                              xtype: 'textfield',
                                                                              id: 'MilageCountSettingCallFromPointInfo_DeviceID',
                                                                              label: 'Device ID',
                                                                              disabled: true,
                                                                              labelWrap: true,
                                                                              hidden: true
                                                                          },
                                                                         {
                                                                             xtype: 'textfield',
                                                                             id: 'MilageCountSettingCallFromPointInfo_TrackID',
                                                                             label: 'Track ID',
                                                                             disabled: true,
                                                                             labelWrap: true,
                                                                             hidden: true
                                                                         },
                                                                         {
                                                                             xtype: 'textfield',
                                                                             id: 'MilageCountSettingCallFromPointInfo_CurrentMilage',
                                                                             label: 'Current Milage',
                                                                             disabled: false,
                                                                             labelWrap: true,
                                                                             //hidden: true
                                                                         },



                                                                          {
                                                                              xtype: 'textfield',
                                                                              id: 'MilageCountSettingCallFromPointInfo_NextAlertMilage',
                                                                              label: 'Next Alert Milage',
                                                                              disabled: true,
                                                                              labelWrap: true,
                                                                              hidden: true
                                                                          },
                                                                           {
                                                                               xtype: 'textfield',
                                                                               id: 'MilageCountSettingCallFromPointInfo_RecorrectToleranceMilage',
                                                                               label: 'Recorrect Tolerance Milage',
                                                                               disabled: false,
                                                                               labelWrap: true,
                                                                           },
                                                                           {
                                                                               xtype: 'textfield',
                                                                               id: 'MilageCountSettingCallFromPointInfo_MilageIntervalAlert',
                                                                               label: 'Milage Interval Alert(KM/H)',
                                                                               disabled: false,
                                                                               labelWrap: true,
                                                                           },

                                                                           {
                                                                               xtype: 'textfield',
                                                                               id: 'MilageCountSettingCallFromPointInfo_MilageAlertVia',
                                                                               label: 'Milage Alert Via',
                                                                               disabled: false,
                                                                               labelWrap: true,
                                                                               hidden: true
                                                                           },

                                                                             {
                                                                                 xtype: 'togglefield',
                                                                                 id: 'MilageCountSettingCallFromPointInfo_SentViaSMS',
                                                                                 value: true,
                                                                                 label: 'Milage Alert Via SMS',
                                                                                 labelWrap: true,
                                                                                 listeners: {
                                                                                     change: function () {
                                                                                         // alert(Ext.getCmp('PanMapAfterPointChange').getValue());
                                                                                     }

                                                                                 },

                                                                             },
                                                                          {
                                                                              xtype: 'togglefield',
                                                                              id: 'MilageCountSettingCallFromPointInfo_SentViaEmail',
                                                                              value: true,
                                                                              label: 'Milage Alert Via EMAIL',
                                                                              labelWrap: true,
                                                                              listeners: {
                                                                                  change: function () {
                                                                                      // alert(Ext.getCmp('PanMapAfterPointChange').getValue());
                                                                                  }

                                                                              },

                                                                          }, {
                                                                              xtype: 'togglefield',
                                                                              id: 'MilageCountSettingCallFromPointInfo_SentViaPush',
                                                                              value: false,
                                                                              label: 'Milage Alert Via PUSH',
                                                                              labelWrap: true,
                                                                              listeners: {
                                                                                  change: function () {
                                                                                      // alert(Ext.getCmp('PanMapAfterPointChange').getValue());
                                                                                  }

                                                                              },

                                                                          },

                                                                           {
                                                                               xtype: 'textfield',
                                                                               id: 'MilageCountSettingCallFromPointInfo_ActivationDate',
                                                                               label: 'Activation Date',
                                                                               disabled: true,
                                                                               labelWrap: true,
                                                                               hidden: true
                                                                           },


                                                                             {
                                                                                 xtype: 'textfield',
                                                                                 id: 'MilageCountSettingCallFromPointInfo_ExpiredDate',
                                                                                 label: 'Expired Date',
                                                                                 disabled: true,
                                                                                 labelWrap: true,
                                                                                 hidden: true
                                                                             },
                                                                           {
                                                                               xtype: 'textfield',
                                                                               id: 'MilageCountSettingCallFromPointInfo_AlertSentCount',
                                                                               label: 'Alert Sent Count',
                                                                               disabled: true,
                                                                               labelWrap: true,
                                                                               hidden: true
                                                                           },



                                                                            {
                                                                                xtype: 'textfield',
                                                                                id: 'MilageCountSettingCallFromPointInfo_LastSentMilageAlertDate',
                                                                                label: 'Last Alert Date',
                                                                                disabled: true,
                                                                                labelWrap: true,
                                                                                hidden: true
                                                                            },
                                                                           {
                                                                               xtype: 'textfield',
                                                                               id: 'MilageCountSettingCallFromPointInfo_UpdatedBy',
                                                                               label: 'Updated By',
                                                                               disabled: true,
                                                                               labelWrap: true,
                                                                           },


                                                                            {
                                                                                xtype: 'textfield',
                                                                                id: 'MilageCountSettingCallFromPointInfo_LastUpdateDate',
                                                                                label: 'Last Update Date',
                                                                                disabled: true,
                                                                                labelWrap: true,
                                                                            },

                                                                                  {
                                                                                      xtype: 'container',
                                                                                      id: 'MilageCountSettingCallFromPointInfo_SaveButton',
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
                                                                                              handler: function () {





                                                                                              }
                                                                                          },

                                                                                      ]

                                                                                  },



































                             ]
                         },




                         {





                             xtype: 'container',
                             cls: 'card2',
                             layout: {

                                 type: 'vbox',
                                 //  style: "background-color: #57A0DC; color:white;",

                             },

                             items: [

                                 {

                                     id: 'MilageCountResponderAlertMilageCountSettingCallFromPointInfoID',
                                     cls: 'card2',
                                     xtype: 'fieldset',
                                     title: '<font size="4" color="black">Milage Count Responder Alert</font><br><font size="1" color="black">*Double tap/click to view details</font>',
                                     margin: '0 -8 0 0',
                                     defaults: {
                                         labelWidth: '40%',

                                     },


                                     items: [

                                         {
                                             xtype: 'list',
                                             height: 400,
                                             store: _DataStore_ResponderAlert_LoadByAccountNoModule,
                                             id: 'ResponderAlert_LoadByAccountNoModuleMilageCountSettingCallFromPointInfoID',
                                             mode: 'SINGLE',
                                             itemTpl: '<div class="myContent">' +
                                                '<div><b>{ResponderName}</b></div>' +
                                                '<div>{ResponderRelationShip}</div>' +
                                                   //  '<div>{GPSSimNumber}</div>' +
                                                 '<div style="display: none;">{ID}</div>' +
                                                '</div>',
                                             // height: '100%',


                                             listeners: {


                                                 itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                                                     SettingResponderAlertShow();
                                                     SettingResponderAlert_SetDetails((record.get('ID')), (record.get('AccountNo')), (record.get('ResponderName')), (record.get('ResponderRelationShip')), (record.get('ResponderPhoneNo')), (record.get('ResponderEmail')), (record.get('Status')), (record.get('ModifiedDate')), (record.get('ModifiedBy')), (record.get('RespondModule')), (record.get('Notes')));



                                                 },


                                                 //itemsingletap: function (dataview, index, target, record, e, eOpts) {


                                                 //}
                                             }




                                         }


                                     ]
                                 }, {
                                     xtype: 'container',
                                     id: 'MilageCountSettingCallFromPointInfoResponderalert_AddnewResponderalertButton',
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
                                             text: 'Add New Responder Alert',
                                             scope: this,

                                             hasDisabled: false,
                                             handler: function () {





                                             }
                                         },

                                     ]

                                 },

                             ]









                         },
                     ]
                 },











                      {

                          xtype: 'toolbar',
                          docked: 'bottom',

                          items: [
                               {
                                   //docked: 'right',
                                   // width: 50,
                                   ui: 'action',
                                   xtype: 'button',
                                   id: 'MilageCountSettingCallFromPointInfoCancel',
                                   text: 'Cancel',
                                   handler: function () {

                                       MilageCountSettingCallFromPointInfoHide();
                                   }
                               },
                               {
                                   xtype: 'spacer'
                               },
                               {
                                   ui: 'action',
                                   xtype: 'button',
                                   id: 'MilageCountSettingCallFromPointInfoBack',
                                   text: 'Back',

                                   handler: function () {
                                       MilageCountSettingCallFromPointInfoHide();

                                   }
                               },




                          ]

                      },



            ],


        });



    return _milageCountSettingEditorCallFromPointInfo;





}




function MilageCountSettingHide()
{
    DeselectMainSettingList();
    _milageCountSettingEditor.hide();
}

function MilageCountSettingShow()
{
    Ext.Viewport.remove(_milageCountSettingEditor);
    this.overlay = Ext.Viewport.add(MilageCountSettingEditor());
    this.overlay.show();
}

function MilageCountSettingCallFromPointInfoShow() {
    Ext.Viewport.remove(_milageCountSettingEditorCallFromPointInfo);
    this.overlay = Ext.Viewport.add(MilageCountSettingEditorCallFromPointInfo());
    this.overlay.show();
}

function MilageCountSettingCallFromPointInfoHide() {
   
    _milageCountSettingEditorCallFromPointInfo.hide();
}

function MilageCountInfoLoadByAccountNoDeviceID(AccountNo, DeviceID)
{    
  
    _DataStore_MilageCountInfoStore_LoadByDeviceIDAccountNo.removeAll();
    _DataStore_MilageCountInfoStore_LoadByDeviceIDAccountNo.getProxy().setExtraParams({

        AccountNo: AccountNo,
        DeviceID: DeviceID
        });

    _DataStore_MilageCountInfoStore_LoadByDeviceIDAccountNo.load({

            callback: function (record, operation, success) {
                if (success) {
                  
                    var store = _DataStore_MilageCountInfoStore_LoadByDeviceIDAccountNo.getAt(0);
                    Ext.getCmp('MilageCountSetting_Subscription').setValue(store.get('Subscription'));
                    Ext.getCmp('MilageCountSetting_AccountNo').setValue(store.get('AccountNo'));
                    Ext.getCmp('MilageCountSetting_DeviceID').setValue(store.get('DeviceID'));
                    Ext.getCmp('MilageCountSetting_TrackID').setValue(store.get('TrackID'));
                    Ext.getCmp('MilageCountSetting_CurrentMilage').setValue(store.get('CurrentMilage'));
                    Ext.getCmp('MilageCountSetting_NextAlertMilage').setValue(store.get('NextAlertMilage'));
                    Ext.getCmp('MilageCountSetting_MilageIntervalAlert').setValue(store.get('MilageIntervalAlert'));
                    Ext.getCmp('MilageCountSetting_RecorrectToleranceMilage').setValue(store.get('RecorrectToleranceMilage'));
                    Ext.getCmp('MilageCountSetting_MilageAlertVia').setValue(store.get('MilageAlertVia'));
                    Ext.getCmp('MilageCountSetting_ActivationDate').setValue(store.get('ActivationDate'));
                    Ext.getCmp('MilageCountSetting_ExpiredDate').setValue(store.get('ExpiredDate'));
                    Ext.getCmp('MilageCountSetting_AlertSentCount').setValue(store.get('AlertSentCount'));
                    Ext.getCmp('MilageCountSetting_LastSentMilageAlertDate').setValue(store.get('LastSentMilageAlertDate'));
                    Ext.getCmp('MilageCountSetting_UpdatedBy').setValue(store.get('UpdatedBy'));
                    Ext.getCmp('MilageCountSetting_LastUpdateDate').setValue(store.get('LastUpdateDate'));
                 

                } else {
                    alert('error' + success);
                    //count = 0;

                }
            }

        });
        //return count;
    
}


function MilageCountInfoLoadByAccountNoDeviceID_CallFromPointInfo(AccountNo, DeviceID) {




    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading data..Please Wait.' });
    var task = Ext.create('Ext.util.DelayedTask', function () {

 






    _DataStore_MilageCountInfoStore_LoadByDeviceIDAccountNo.removeAll();
    _DataStore_MilageCountInfoStore_LoadByDeviceIDAccountNo.getProxy().setExtraParams({

        AccountNo: AccountNo,
        DeviceID: DeviceID
    });

    _DataStore_MilageCountInfoStore_LoadByDeviceIDAccountNo.load({

        callback: function (record, operation, success) {
            if (success) {

                var store = _DataStore_MilageCountInfoStore_LoadByDeviceIDAccountNo.getAt(0);
                Ext.getCmp('MilageCountSettingCallFromPointInfo_Subscription').setValue(store.get('Subscription'));
                Ext.getCmp('MilageCountSettingCallFromPointInfo_AccountNo').setValue(store.get('AccountNo'));
                Ext.getCmp('MilageCountSettingCallFromPointInfo_DeviceID').setValue(store.get('DeviceID'));
                Ext.getCmp('MilageCountSettingCallFromPointInfo_TrackID').setValue(store.get('TrackID'));
                Ext.getCmp('MilageCountSettingCallFromPointInfo_CurrentMilage').setValue(store.get('CurrentMilage'));
                Ext.getCmp('MilageCountSettingCallFromPointInfo_NextAlertMilage').setValue(store.get('NextAlertMilage'));
                Ext.getCmp('MilageCountSettingCallFromPointInfo_MilageIntervalAlert').setValue(store.get('MilageIntervalAlert'));
                Ext.getCmp('MilageCountSettingCallFromPointInfo_RecorrectToleranceMilage').setValue(store.get('RecorrectToleranceMilage'));
                Ext.getCmp('MilageCountSettingCallFromPointInfo_MilageAlertVia').setValue(store.get('MilageAlertVia'));
                Ext.getCmp('MilageCountSettingCallFromPointInfo_ActivationDate').setValue(store.get('ActivationDate'));
                Ext.getCmp('MilageCountSettingCallFromPointInfo_ExpiredDate').setValue(store.get('ExpiredDate'));
                Ext.getCmp('MilageCountSettingCallFromPointInfo_AlertSentCount').setValue(store.get('AlertSentCount'));
                Ext.getCmp('MilageCountSettingCallFromPointInfo_LastSentMilageAlertDate').setValue(store.get('LastSentMilageAlertDate'));
                Ext.getCmp('MilageCountSettingCallFromPointInfo_UpdatedBy').setValue(store.get('UpdatedBy'));
                Ext.getCmp('MilageCountSettingCallFromPointInfo_LastUpdateDate').setValue(store.get('LastUpdateDate'));


            } else {
                alert('error' + success);
                //count = 0;

            }
        }

    });
    Ext.Viewport.setMasked(false);
    });
    task.delay(1000);


}