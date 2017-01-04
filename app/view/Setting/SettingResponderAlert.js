Ext.define('MyGPS.view.Setting.SettingResponderAlert', {
   
});

var _isRealtioshipOter;
var _settingResponderAlertDetailsEditor;
function SettingResponderAlertDetails() {

    _settingResponderAlertDetailsEditor =
    Ext.create('Ext.Panel', {
        draggable: false,
        //    centered: true,
        // scrollable: true,
        zIndex: 70,
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
        //showAnimation: {
        //    type: 'slideIn',
        //    direction: 'left',
        //    duration: 550,
        //    //easing: 'ease-in'
        //},
        //hideAnimation: {
        //    type: 'slideOut',
        //    direction: 'right',
        //    duration: 250,
        //    ////easing: 'ease-out'
        //    //  easing: 'ease-in'
        //},
        showAnimation: {
            type: 'popIn',
            duration: 100,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: null,
            duration: 250,
            easing: null
        },
        //  config: {
        //  style: "background-color: #57A0DC; color:white;",
        items: [

             {

                 xtype: 'toolbar',
                 title: 'Milage Count Setting',
                 docked: 'top',

             },

             {
                 xtype: 'fieldset',
                 id: 'fieldSettingResponderAlert',
                 title: 'Setting Responder Alert',
                 defaults: {

                     labelWidth: '45%'
                 },
                 items: [


                        {
                            xtype: 'textfield',
                            id: 'SettingResponderAlertID',
                            label: 'ID',
                            //placeHolder: 'Tom Roy',
                            disabled: true,
                            autoCapitalize: true,
                            //required: true,
                            clearIcon: true
                        },
                      {
                          xtype: 'textfield',
                          id: 'SettingResponderAlertAccountNo',
                          label: 'Account No',
                          disabled: true,
                          //placeHolder: 'Tom Roy',
                          autoCapitalize: true,
                          //required: true,
                          clearIcon: true
                      },
                     {
                         xtype: 'textfield',
                         id: 'SettingResponderAlertName',
                         label: 'Name',
                         disabled: false,
                         //placeHolder: 'Tom Roy',
                         autoCapitalize: true,
                         //required: true,
                         clearIcon: true
                     },
                     {
                         // xtype: 'textfield',
                         xtype: 'textfield',
                         id: 'SettingResponderAlertRelationShip',
                         label: 'RelationShip',
                         //placeHolder: 'Tom Roy',
                         autoCapitalize: true,
                         disabled: true,
                         //required: true,
                         clearIcon: true
                     },
                     
                      
                                   
                              {
                                  xtype: 'fieldset',
                                  id: 'SettingResponderAlertRelationShipfieldset',
                                  margin: '0.5em 0.5em 0.5em',
                                  defaults: {
                                      labelWidth: '80%',
                                      style: 'font-size: 90%;'

                                  },
                                  items: [

                                      {
                                          xtype: 'container',
                                          id: 'SettingResponderAlertRelationShipcontainer',
                                          width: '100%',
                                          layout: {
                                              type: 'vbox',

                                          },

                                          items: [
                                               {
                                                   xtype: 'checkboxfield',
                                                   label: '<b><font color=#60A2CF>Father</font></b>',
                                                   id: 'SettingResponderAlertRelationShipFather',
                                                   labelWidth: '45%',
                                                   listeners: {
                                                       check: function () {

                                                             Ext.getCmp('SettingResponderAlertRelationShipMother').setChecked(false);
                                                             Ext.getCmp('SettingResponderAlertRelationShipBrother').setChecked(false);
                                                             Ext.getCmp('SettingResponderAlertRelationShipSister').setChecked(false);
                                                             Ext.getCmp('SettingResponderAlertRelationShipStaff').setChecked(false);
                                                             Ext.getCmp('SettingResponderAlertRelationShipOthers').setChecked(false);
                                                             Ext.getCmp('SettingResponderAlertRelationShipTxtOther').setDisabled(true);
                                                             Ext.getCmp('SettingResponderAlertRelationShip').setValue('FATHER');
                                                             _isRealtioshipOter = 'no';
                                                       },
                                                       uncheck: function () {

                                                          // Ext.getCmp('LabClinicalBridgeCont_Details1').setHidden(true);

                                                       }
                                                   }

                                               },

                                        {
                                            xtype: 'checkboxfield',
                                            label: '<b><font color=#60A2CF>Mother</font></b>',
                                            id: 'SettingResponderAlertRelationShipMother',
                                            labelWidth: '45%',
                                            listeners: {
                                                check: function () {

                                                    Ext.getCmp('SettingResponderAlertRelationShipFather').setChecked(false);
                                                    Ext.getCmp('SettingResponderAlertRelationShipBrother').setChecked(false);
                                                    Ext.getCmp('SettingResponderAlertRelationShipSister').setChecked(false);
                                                    Ext.getCmp('SettingResponderAlertRelationShipStaff').setChecked(false);
                                                    Ext.getCmp('SettingResponderAlertRelationShipOthers').setChecked(false);
                                                    Ext.getCmp('SettingResponderAlertRelationShipTxtOther').setDisabled(true);
                                                    Ext.getCmp('SettingResponderAlertRelationShip').setValue('MOTHER');
                                                    _isRealtioshipOter = 'no';
                                                },
                                                uncheck: function () {

                                                   // Ext.getCmp('LabClinicalBridgeCont_Details1').setHidden(true);

                                                }
                                            }

                                        },

                                           {
                                               xtype: 'checkboxfield',
                                               label: '<b><font color=#60A2CF>Brother</font></b>',
                                               id: 'SettingResponderAlertRelationShipBrother',
                                               labelWidth: '45%',
                                               listeners: {
                                                   check: function () {

                                                       Ext.getCmp('SettingResponderAlertRelationShipFather').setChecked(false);
                                                       Ext.getCmp('SettingResponderAlertRelationShipMother').setChecked(false);
                                                       Ext.getCmp('SettingResponderAlertRelationShipSister').setChecked(false);
                                                       Ext.getCmp('SettingResponderAlertRelationShipStaff').setChecked(false);
                                                       Ext.getCmp('SettingResponderAlertRelationShipOthers').setChecked(false);
                                                       Ext.getCmp('SettingResponderAlertRelationShipTxtOther').setDisabled(true);
                                                       Ext.getCmp('SettingResponderAlertRelationShip').setValue('BROTHER');
                                                       _isRealtioshipOter = 'no';
                                                   },
                                                   uncheck: function () {

                                                       // Ext.getCmp('LabClinicalBridgeCont_Details1').setHidden(true);

                                                   }
                                               }

                                           },

                                            {
                                                xtype: 'checkboxfield',
                                                label: '<b><font color=#60A2CF>Sister</font></b>',
                                                id: 'SettingResponderAlertRelationShipSister',
                                                labelWidth: '45%',
                                                listeners: {
                                                    check: function () {

                                                        Ext.getCmp('SettingResponderAlertRelationShipFather').setChecked(false);
                                                        Ext.getCmp('SettingResponderAlertRelationShipMother').setChecked(false);
                                                        Ext.getCmp('SettingResponderAlertRelationShipBrother').setChecked(false);
                                                        Ext.getCmp('SettingResponderAlertRelationShipStaff').setChecked(false);
                                                        Ext.getCmp('SettingResponderAlertRelationShipOthers').setChecked(false);
                                                        Ext.getCmp('SettingResponderAlertRelationShipTxtOther').setDisabled(true);
                                                        Ext.getCmp('SettingResponderAlertRelationShip').setValue('SISTER');
                                                        _isRealtioshipOter = 'no';
                                                    },
                                                    uncheck: function () {

                                                        // Ext.getCmp('LabClinicalBridgeCont_Details1').setHidden(true);

                                                    }
                                                }

                                            },
                                               {
                                                   xtype: 'checkboxfield',
                                                   label: '<b><font color=#60A2CF>Staff</font></b>',
                                                   id: 'SettingResponderAlertRelationShipStaff',
                                                   labelWidth: '45%',
                                                   listeners: {
                                                       check: function () {

                                                           Ext.getCmp('SettingResponderAlertRelationShipFather').setChecked(false);
                                                           Ext.getCmp('SettingResponderAlertRelationShipMother').setChecked(false);
                                                           Ext.getCmp('SettingResponderAlertRelationShipBrother').setChecked(false);
                                                           Ext.getCmp('SettingResponderAlertRelationShipSister').setChecked(false);
                                                           Ext.getCmp('SettingResponderAlertRelationShipOthers').setChecked(false);
                                                           Ext.getCmp('SettingResponderAlertRelationShipTxtOther').setDisabled(true);
                                                           Ext.getCmp('SettingResponderAlertRelationShip').setValue('STAFF');
                                                           _isRealtioshipOter = 'no';
                                                       },
                                                       uncheck: function () {

                                                           // Ext.getCmp('LabClinicalBridgeCont_Details1').setHidden(true);

                                                       }
                                                   }

                                               },
                                                    {
                                                         xtype: 'checkboxfield',
                                                          label: '<b><font color=#60A2CF>Other</font></b>',
                                                          id: 'SettingResponderAlertRelationShipOthers',
                                                          labelWidth: '45%',
                                                          listeners: {
                                                          check: function () {

                                                              Ext.getCmp('SettingResponderAlertRelationShipFather').setChecked(false);
                                                              Ext.getCmp('SettingResponderAlertRelationShipMother').setChecked(false);
                                                              Ext.getCmp('SettingResponderAlertRelationShipBrother').setChecked(false);
                                                              Ext.getCmp('SettingResponderAlertRelationShipSister').setChecked(false);
                                                              Ext.getCmp('SettingResponderAlertRelationShipStaff').setChecked(false);
                                                              Ext.getCmp('SettingResponderAlertRelationShipTxtOther').setDisabled(false);
                                                              _isRealtioshipOter = 'yes';

                                                         },
                                                          uncheck: function () {

             // Ext.getCmp('LabClinicalBridgeCont_Details1').setHidden(true);

                                                         }
                                                                  }

                                                     },
                                                       {
                                                           xtype: 'textfield',
                                                           id: 'SettingResponderAlertRelationShipTxtOther',
                                                           label: '<b><font color=#60A2CF>Other</font></b>',
                                                           disabled: true,
                                                           labelWrap: true,
                                                         
                                                       },



                                          ]
                                      },


                                     
                                  ]
                              },


                                     
                                 


                        
                     
                      {
                          // xtype: 'textfield',
                          xtype: 'textfield',
                          id: 'SettingResponderAlertPhoneNo',
                          label: 'Phone Number',
                          //placeHolder: 'Tom Roy',
                          autoCapitalize: true,
                          disabled: false,
                          //required: true,
                          clearIcon: true
                      },
                      {
                          // xtype: 'textfield',
                          xtype: 'textfield',
                          id: 'SettingResponderAlertEmail',
                          label: 'Email',
                          //placeHolder: 'Tom Roy',
                          autoCapitalize: true,
                          disabled: false,
                          //required: true,
                          clearIcon: true
                      },
                      {
                          // xtype: 'textfield',
                          xtype: 'textfield',
                          id: 'SettingResponderAlertStatus',
                          label: 'Status',
                          disabled: true,
                          //placeHolder: 'Tom Roy',
                          autoCapitalize: true,
                          //required: true,
                          clearIcon: true
                      },
                      {
                          xtype: 'container',
                          id: 'SettingResponderAlertRelationShipAlertStatuscontainer',
                          width: '100%',
                          layout: {
                              type: 'hbox',

                          },

                          items: [

                                {
                                    xtype: 'checkboxfield',
                                    label: '<b><font color=#60A2CF>Active</font></b>',
                                    id: 'SettingResponderAlertRelationShipAlertStatusActive',
                                    labelWidth: '50%',
                                    listeners: {
                                        check: function () {

                                            Ext.getCmp('SettingResponderAlertRelationShipAlertStatusInActive').setChecked(false);
                                            Ext.getCmp('SettingResponderAlertStatus').setValue('Active');

                                        },
                                        uncheck: function () {

                                            // Ext.getCmp('LabClinicalBridgeCont_Details1').setHidden(true);

                                        }
                                    }

                                },

                                     {
                                         xtype: 'checkboxfield',
                                         label: '<b><font color=#60A2CF>InActive</font></b>',
                                         id: 'SettingResponderAlertRelationShipAlertStatusInActive',
                                         labelWidth: '70%',
                                         listeners: {
                                             check: function () {

                                                 Ext.getCmp('SettingResponderAlertRelationShipAlertStatusActive').setChecked(false);
                                                 Ext.getCmp('SettingResponderAlertStatus').setValue('InActive');
                                             },
                                             uncheck: function () {

                                                 // Ext.getCmp('LabClinicalBridgeCont_Details1').setHidden(true);

                                             }
                                         }

                                     },
                                    

                          ]

                      },
                       {
                           xtype: 'container',
                           id: 'SettingResponderAlertRelationShipAlertSave',
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

                                    var ID=   Ext.getCmp('SettingResponderAlertID').getValue()
                                    var AccountNo=  Ext.getCmp('SettingResponderAlertAccountNo').getValue()
                                    var ResponderName=   Ext.getCmp('SettingResponderAlertName').getValue()
                                    var ResponderRelationShip=   Ext.getCmp('SettingResponderAlertRelationShip').getValue()
                                    var ResponderPhoneNo=  Ext.getCmp('SettingResponderAlertPhoneNo').getValue()
                                    var ResponderEmail=  Ext.getCmp('SettingResponderAlertEmail').getValue()
                                    var Status = Ext.getCmp('SettingResponderAlertStatus').getValue()
                                    var User = GetCurrentUserName();
                                    if (_isRealtioshipOter == 'yes')
                                    {
                                        ResponderRelationShip = Ext.getCmp('SettingResponderAlertRelationShipTxtOther').getValue()
                                        Ext.getCmp('SettingResponderAlertRelationShip').setValue(ResponderRelationShip);
                                    }


                                    SettingResponderAlert_Update(ID, AccountNo, ResponderName, ResponderRelationShip, ResponderPhoneNo, ResponderEmail, Status, User)


                                   }
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
                                   ui: 'plain',
                                   xtype: 'button',
                                   id: 'SettingResponderAlertCancel',
                                   text: '.',
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
                                   id: 'SettingResponderAlertBack',
                                   text: 'Back',

                                   handler: function () {
                                       SettingResponderAlertHide();

                                   }
                               },




                          ]

                      },
        ]
    });



  return _settingResponderAlertDetailsEditor;


}









function SettingResponderAlertShow()
{
    Ext.Viewport.remove(_settingResponderAlertDetailsEditor);
    this.overlay = Ext.Viewport.add(SettingResponderAlertDetails());
    this.overlay.show();
}






function SettingResponderAlertHide() {
    _settingResponderAlertDetailsEditor.hide();
}








function SettingResponderAlert_LoadByAccountNoModule(AccountNo,Module) {
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading data..Please Wait.' });
    var task = Ext.create('Ext.util.DelayedTask', function () {

    _DataStore_ResponderAlert_LoadByAccountNoModule.removeAll();
    _DataStore_ResponderAlert_LoadByAccountNoModule.getProxy().setExtraParams({
       
        AccountNo: AccountNo,
        Module: Module
    });

    _DataStore_ResponderAlert_LoadByAccountNoModule.load({

        callback: function (record, operation, success) {
            if (success) {
                 var store = _DataStore_ResponderAlert_LoadByAccountNoModule.getAt(0);
               

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







function SettingResponderAlert_SetDetails(ID,AccountNo, ResponderName, ResponderRelationShip,ResponderPhoneNo,ResponderEmail,Status, ModifiedDate, ModifiedBy,RespondModule, Notes)
{

    Ext.getCmp('SettingResponderAlertID').setValue(ID)
    Ext.getCmp('SettingResponderAlertAccountNo').setValue(AccountNo)
    Ext.getCmp('SettingResponderAlertName').setValue(ResponderName)
    Ext.getCmp('SettingResponderAlertRelationShip').setValue(ResponderRelationShip)
    Ext.getCmp('SettingResponderAlertPhoneNo').setValue(ResponderPhoneNo)
    Ext.getCmp('SettingResponderAlertEmail').setValue(ResponderEmail)

    Ext.getCmp('SettingResponderAlertStatus').setValue(Status)

}







function SettingResponderAlert_Update(ID, AccountNo, ResponderName, ResponderRelationShip,
         ResponderPhoneNo, ResponderEmail, Status, User) {
             Ext.Viewport.mask({ xtype: 'loadmask', message: 'Updating data..Please Wait.' });
             var task = Ext.create('Ext.util.DelayedTask', function () {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/ResponderAlert/ResponderAlertUpdate',

        params: {

            ID: ID,
            AccountNo: AccountNo,

            ResponderName: ResponderName,

            ResponderRelationShip: ResponderRelationShip,
            ResponderPhoneNo: ResponderPhoneNo,

            ResponderEmail: ResponderEmail,
            Status: Status,
            User: User



        },
        success: function (result, request) {
            Ext.Msg.alert('Success', 'Update Succesfully');


            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
        },
        failure: function (result, request) {
            Ext.Msg.alert('Error', request);

        }
    });

    Ext.Viewport.setMasked(false);
});
task.delay(1000);
}