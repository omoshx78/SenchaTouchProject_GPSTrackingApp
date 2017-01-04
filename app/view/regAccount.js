/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('MyGPS.view.regAccount', {
 
    extend: 'Ext.tab.Panel',
    alias: "widget.regAccount",
    xtype: 'regAccount',
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
      
        'Ext.field.Radio'
    ],
    id: 'regbasicform',
  //  fullscreen: true,
    config: {
       
       
        activeItem: 1,
        tabBar: {
            // ui: 'plain',
            ui: 'neutral',
            layout: {


                pack: 'center'

            },
            listeners: {
                activeitemchange: function (tabPanel, tab, oldTab) {
                   // Ext.Msg.alert('activeitemchange', 'Current tab: ' + tab.config.title);
                } // activeitemchange
            },
        },


        items: [
             {

                 xtype: 'toolbar',
                 docked: 'top',
                 title:'Register Account'
             
             },


            {

              xtype: 'toolbar',
              docked: 'bottom',
              items: [

                {
                    //  align: 'center',
                    // width: 50,
                    ui: 'action',
                    xtype: 'button',
                    id: 'Backuserreg',
                    text: 'Back',
                    hidden: true,
                    handler: function () {
                       // aleret(regpage);
                        Ext.getCmp('userRegsave').setHidden(true);
                        if (regpage == 'regform') {

                            butang.setHidden(false);
                            Ext.getCmp('regbasicform').setActiveItem(0);
                            regpage = 'loginview';
                            return;
                        }
                        if (regpage == 'loginview')
                        {
                           
                           // regpage = 'regform';
                            var txt = Ext.getCmp('containerdental');
                            txt.list.select(10);
                        }
                    }
                },
                {
                    xtype: 'spacer',
                },

                        {
                            //  align: 'center',
                            // width: 50,
                            ui: 'action',
                            xtype: 'button',
                            id: 'useraccReg',
                            text: 'Start Register',
                            hidden: true,
                            handler: function (btn) {
                                butang = btn;
                                regpage = 'regform';
                                Ext.getCmp('GpsUserAcc').setValue('C01');
                                Ext.getCmp('regbasicform').setActiveItem(1);
                                btn.setHidden(true);
                                Ext.getCmp('userRegsave').setHidden(false);
                                

                            }
                        },

                         {
                             //  align: 'center',
                             // width: 50,
                             ui: 'action',
                             xtype: 'button',
                             id: 'userRegsave',
                             text: 'Save',
                            
                             handler: function (btn) {
                                 var UserName = Ext.getCmp('Gpsusr').getValue();
                                 var Password = Ext.getCmp('Gpspwd').getValue();
                                 var Cpassword = Ext.getCmp('Gpspwdconfirm').getValue();
                                 var Version = '3';
                                 var Status = '1';
                                 var AccountNos = 'C01';
                                 var RegisterBy = Ext.getCmp('Gpsusr').getValue();
                                 var UpdateBy = Ext.getCmp('Gpsusr').getValue();
                                 var LoginIPs = LoginIP;
                                 var LoginType = Ext.getCmp('Gpsmobilep').getValue();
                                 var Browsers = Browser;
                                 var OSs = OS;
                                 var EmailReg = Ext.getCmp('Gpsemail').getValue();
                                 var chekcemailresult = contains(EmailReg, '@');



                                 if (!UserName)
                                 {
                                     //Ext.Msg.alert('Error', 'Not valid');
                                     if ((messageboxss())) {
                                         Ext.Viewport.add(messageboxss('Not valid'));
                                     }
                                     
                                     return;
                                 } 
                                 if (!Password) {
                                     if ((messageboxss())) {
                                         Ext.Viewport.add(messageboxss('Not valid'));
                                     }
                                     return;
                                 }
                                 
                                 var length = Password.length;
                                 if (length < 8)
                                 {
                                     //Ext.Msg.alert('Error', 'Password atleast 8 char!');
                                     if ((messageboxss())) {
                                         Ext.Viewport.add(messageboxss('Password atleast 8 char'));
                                     }
                                     return;
                                 }


                                 if (Password != Cpassword) {
                                     if ((messageboxss())) {
                                         Ext.Viewport.add(messageboxss('Password Not match'));
                                     }
                                   //  Ext.Msg.alert('Error', 'Password Not match !');
                                    
                                     return;
                                     }
                                
                                


                                 if (EmailReg) {
                                     if (chekcemailresult == false) {
                                        
                                        // Ext.Msg.alert('Error', 'Not valid Email!');
                                         if ((messageboxss())) {
                                             Ext.Viewport.add(messageboxss('Not valid Email'));
                                         }
                                         return;
                                     }
                                 }
                                 else {
                                    // Ext.Msg.alert('Error', 'Email Is required!');
                                     if ((messageboxss())) {
                                         Ext.Viewport.add(messageboxss('Email Is required'));
                                     }
                                     return;
                                 }

                                 //var GPSacc = Ext.getCmp('GpsUserAcc').getValue();
                                 // alert(UserName);

                                 Ext.getStore('GPSuserStore').getProxy().setExtraParams({
                                     Us: UserName,
                                     Pw: Password,
                                     Bro: Browsers,
                                     Os: OSs,
                                     IP: LoginIPs,

                                 });
                                 Ext.StoreMgr.get('GPSuserStore').load();

                                 Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking ID..' });
                                 var task = Ext.create('Ext.util.DelayedTask', function () {

                                     Ext.getStore('GPSuserStore').getProxy().setExtraParams({
                                         Us: UserName,
                                         Pw: Password,
                                         Bro: Browsers,
                                         Os: OSs,
                                         IP: LoginIPs,

                                     });


                                     Ext.StoreMgr.get('GPSuserStore').load();
                                     var myStore = Ext.getStore('GPSuserStore');
                                     // var co = myStore.getCount() - 1;
                                     var co = myStore.getCount();

                                     if (co >= 1) {
                                        // Ext.Msg.alert("UserName or Password already Exist.!!");

                                         if ((messageboxss())) {
                                             Ext.Viewport.add(messageboxss('UserName or Password Exist'));
                                         }
                                         Ext.Viewport.unmask();
                                     }
                                     else if (co == 0) {
                                         InsertGPSuser(UserName, Password, Version, Status, AccountNos, RegisterBy, UpdateBy,
                               LoginIPs, LoginType, Browsers, OSs, EmailReg);
                                         Ext.Viewport.unmask();

                                     }



                                 });
                                 task.delay(1000);
                                

                             }
                         },

              ],
            },


             {
                 title: 'Registration Info',

                 xtype: 'formpanel',

                 id: 'RegAccountInfo',
                // ui:'plain',


                 items: [

                    
                          //{
                          //    xtype: 'label',
                          //    // id: 'Queue_GetDetailQueueLabel',
                          //    html: 'Registered GPS tracking Item<br>Under this Account'
                          //},
                          
                         
                    
                    
                     {

                         
                         xtype: 'panel',
                                      docked: 'top',
                                     height: '100%',
                                     scrollable: true,
                                     style: 'border: 2px solid black;',
                                      items: [
                                {

                                 //   style: "background-color: #CC0000; color:white;",
                                    html: "<b><u>GPS Tracking Apps Registration Note</u><b><br> <br> To get this application fully functional ,user need to have GPS Tracker Devices installed<br><br> This registration only for demo purpose .For those user who's already have GPS Tracker installed  and interested to use this application<br><br> we providing solution to switch your GPS signal be transfered to this application. This demo will be end  < 3 day after successfuly registered.<br><br>You are encourage to fill up email section,we will get intouch to you very soons.<br><br> Thank You - Mizi"



                                }
                                ]
                            // style: "background-color: #CC0000; color:white;",
                           //  html: "Information"
                        


                     },
                      
                      
                        


                 ],





             },


            {
                title: 'Acc.Info',

                xtype: 'formpanel',

                id: 'AccountInfo',

                hidden:true,
                items: [
                    {

                        xtype: 'fieldset',
                        title: 'Registration Form',

                        items: [
                             {
                                 xtype: 'textfield',
                                 label: 'Account No',
                                 id: 'GpsUserAcc',
                                 labelWrap: true,
                                 disabled: true,
                                placeHolder: 'C01'
                                 
                             },
                            {
                                xtype: 'textfield',
                                label: 'Username',
                                id:'Gpsusr',
                                labelWrap: true,
                                name: 'username',
                                placeHolder: 'Enter Username'
                            },
                            {
                                xtype: 'passwordfield',
                                label: 'Password',
                                id: 'Gpspwd',
                                labelWrap: true,
                                name: 'password',
                                placeHolder: 'Enter Password'
                            },
                            {
                                xtype: 'passwordfield',
                                label: 'Confirm Password',
                                id: 'Gpspwdconfirm',
                                labelWrap: true,
                                name: 'password',
                                placeHolder: 'Enter Password'
                            },
                            {
                                xtype: 'emailfield',
                                label: 'Email',
                                id: 'Gpsemail',
                                required:true,
                                labelWrap: true,
                                name: 'email',
                                placeHolder: 'email@example.com-Required'
                            },
                            {
                                //xtype: 'urlfield',
                                //label: 'Mobile Phone',
                                //id: 'Gpsmobilep',
                                //labelWrap: true,
                                //name: 'Mobile',
                                //placeHolder: 'Optional'
                                
                                xtype: 'textfield',
                                id: 'Gpsmobilep',
                                     component: {
                                         xtype: 'input',
                                         type: 'tel'
                                     },
                                     label: 'MobilePhone',
                                     name: 'phone',
                                     placeHolder: 'cell #'
                                 
                            },
                           
                        ]
                    },
           

                   



                ],





            },
              
               





        ]

    }
});

var regpage;
var butang;



function contains(r, s) {
    return r.indexOf(s) > -1;
}





var _regForm = Ext.create('Ext.Panel', {
    draggable: false,
    centered: true,
    scrollable: true,
    //height: 343,
    //width: 450,
    // flex: 1,
    width: '95%',
    height: '90%',
    modal: true,
    hideOnMaskTap: false,
    showAnimation: {
        type: 'popIn',
        duration: 250,
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
             title: 'Register Account',
             docked: 'top',

         },
         {

             xtype: 'fieldset',
             title: 'Registration Form',

             items: [
                  {
                      xtype: 'textfield',
                      label: 'Account No',
                      id: 'loginregGpsUserAcc',
                      labelWrap: true,
                      disabled: true,
                      // placeHolder: 'C01'

                  },
                 {
                     xtype: 'textfield',
                     label: 'Username',
                     id: 'loginregGpsusr',
                     labelWrap: true,
                     name: 'username',
                     placeHolder: 'Enter Username'
                 },
                 {
                     xtype: 'passwordfield',
                     label: 'Password',
                     id: 'loginregGpspwd',
                     labelWrap: true,
                     name: 'password',
                     placeHolder: 'Enter Password'
                 },
                 {
                     xtype: 'passwordfield',
                     label: 'Confirm Password',
                     id: 'loginregGpspwdconfirm',
                     labelWrap: true,
                     name: 'password',
                     placeHolder: 'Enter Password'
                 },
                 {
                     xtype: 'emailfield',
                     label: 'Email',
                     id: 'loginregGpsemail',
                     required: true,
                     labelWrap: true,
                     name: 'email',
                     placeHolder: 'email@example.com-Required'
                 },
                 {
                     //xtype: 'urlfield',
                     //label: 'Mobile Phone',
                     //id: 'Gpsmobilep',
                     //labelWrap: true,
                     //name: 'Mobile',
                     //placeHolder: 'Optional'

                     xtype: 'textfield',
                     id: 'loginregGpsmobilep',
                     component: {
                         xtype: 'input',
                         type: 'tel'
                     },
                     label: 'MobilePhone',
                     name: 'phone',
                     placeHolder: 'cell #'

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
                           id: '_regFormCancel',
                           text: 'Cancel',
                           handler: function () {

                               _regForm.hide();
                           }
                       },
                       {
                           xtype: 'spacer'
                       },
                       {
                           ui: 'action',
                           xtype: 'button',
                           id: '_regFormsave',
                           text: 'Save',

                           handler: function (btn) {
                               var UserName = Ext.getCmp('loginregGpsusr').getValue();
                               var Password = Ext.getCmp('loginregGpspwd').getValue();
                               var Cpassword = Ext.getCmp('loginregGpspwdconfirm').getValue();
                               var Version = '3';
                               var Status = '1';
                               var AccountNos = 'C01';
                               var RegisterBy = Ext.getCmp('loginregGpsusr').getValue();
                               var UpdateBy = Ext.getCmp('loginregGpsusr').getValue();
                               var LoginIPs = myip;
                               var LoginType = Ext.getCmp('loginregGpsmobilep').getValue();
                               var Browsers = Browser;
                               var OSs = OS;
                               var EmailReg = Ext.getCmp('loginregGpsemail').getValue();
                               var chekcemailresult = contains(EmailReg, '@');



                               if (!UserName) {
                                   Ext.Msg.alert('Not valid');
                                   //if ((messageboxss())) {
                                   //    Ext.Viewport.add(messageboxss('Not valid'));
                                   //}

                                   return;
                               }
                               if (!Password) {
                                   if ((messageboxss())) {
                                       Ext.Viewport.add(messageboxss('Not valid'));
                                   }
                                   return;
                               }

                               var length = Password.length;
                               if (length < 8) {
                                   Ext.Msg.alert('Error', 'Password atleast 8 char!');
                                   //if ((messageboxss())) {
                                   //    Ext.Viewport.add(messageboxss('Password atleast 8 char'));
                                   //}
                                   return;
                               }


                               if (Password != Cpassword) {
                                   //if ((messageboxss())) {
                                   //    Ext.Viewport.add(messageboxss('Password Not match'));
                                   //}
                                   Ext.Msg.alert('Error', 'Password Not match !');

                                   return;
                               }




                               if (EmailReg) {
                                   if (chekcemailresult == false) {

                                       Ext.Msg.alert('Error', 'Not valid Email!');
                                       //if ((messageboxss())) {
                                       //    Ext.Viewport.add(messageboxss('Not valid Email'));
                                       //}
                                       return;
                                   }
                               }
                               else {
                                   Ext.Msg.alert('Error', 'Email Is required!');
                                   //if ((messageboxss())) {
                                   //    Ext.Viewport.add(messageboxss('NEmail Is required'));
                                   //}
                                   return;
                               }

                               //var GPSacc = Ext.getCmp('GpsUserAcc').getValue();
                               // alert(UserName);

                               Ext.getStore('GPSuserStore').getProxy().setExtraParams({
                                   Us: UserName,
                                   Pw: Password,
                                   Bro: Browsers,
                                   Os: OSs,
                                   IP: LoginIPs,

                               });
                               Ext.StoreMgr.get('GPSuserStore').load();

                               Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking ID..' });
                               var task = Ext.create('Ext.util.DelayedTask', function () {

                                   Ext.getStore('GPSuserStore').getProxy().setExtraParams({
                                       Us: UserName,
                                       Pw: Password,
                                       Bro: Browsers,
                                       Os: OSs,
                                       IP: LoginIPs,

                                   });


                                   Ext.StoreMgr.get('GPSuserStore').load();
                                   var myStore = Ext.getStore('GPSuserStore');
                                   // var co = myStore.getCount() - 1;
                                   var co = myStore.getCount();

                                   if (co >= 1) {
                                       Ext.Msg.alert("UserName or Password already Exist.!!");


                                       Ext.Viewport.unmask();
                                   }
                                   else if (co == 0) {
                                       InsertGPSuserloginreg(UserName, Password, Version, Status, AccountNos, RegisterBy, UpdateBy,
                             LoginIPs, LoginType, Browsers, OSs, EmailReg);
                                       Ext.Viewport.unmask();

                                   }



                               });
                               task.delay(1000);


                           }
                       },




                  ]

              },



    ],

    //  }
});
