var AAccountNo;

Ext.define('MyGPS.view.Login', {
    extend: 'Ext.Container',
    xtype: 'loginpage',
    id: 'loginpageID',
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img', 'Ext.data.Store'],
    config: {
        fullscreen: true,
        scrollable: false,
        style: "background-color: #57A0DC; color:white;",
        defaults: {
        },
        items: [

            {
                xtype: 'container',
                height: '100%',
                width: '100%',
                layout: {
                    flex: 1,
                    type: 'vbox',
                    pack: 'center',
                    align: 'center',
                    style: "background-color: #57A0DC; color:white;",
                },
                style: "background-color: #57A0DC; color:white;",

                //style: {
                //    backgroundImage: 'url(resources/icons/backgroundgeofence.png)',
                //    backgroundRepeat: 'no-repeat',
                //    backgroundSize: 'cover'
                //    //   backgroundPosition: 'center'
                //},
                items: [


            {
                xtype: 'container',
                height: '100%',
                width: '100%',

                //  width: '80%',

                margin: '0 0 0 0',
                //  margin: '10 0 0 0',
                layout: {
                    flex: 1,
                    type: 'vbox',
                    pack: 'center',
                    align: 'center',

                },

                //style: "background-color: #57A0DC; color:white;",
                items: [

            {

                xtype: 'panel',
                //  bodyPadding: 10,
                height: 280,
                width: 320,
                margin: '0 -40 0 0',
                //   left:30,
                //height: '100%',
                //width: '100%',
                html: '<img src="resources/icons/BgLogin.png" style="max-height:100%; max-width:100%;"/>',
                //x: 60,
                //y: 340,


                //xtype: 'image',
                //height: '60%',
                //width: '90%',

                //src: Ext.Viewport.getOrientation() == 'portrait' ? document.location.protocol + '//' + document.location.host + '/resources/icons/BgLogin.png' : document.location.protocol + '//' + document.location.host + '/resources/icons/BgLogin.png',
            },

        {


            xtype: 'fieldset',
            width: '90%',
            margin: '-50 0 0 0',
            title: '<font size=2px color=white>User Login</font>',
            items: [
                {
                    xtype: 'textfield',
                    //  margin: '-10 0 0 0',
                    placeHolder: 'Username',
                    id: 'loginuserNameTextField',
                    // name: 'userNameTextFieldname',
                    required: true
                },
                {

                    xtype: 'passwordfield',
                    placeHolder: 'Password',
                    id: 'loginpasswordTextField',
                    // name: 'passwordTextFieldname',
                    required: true
                },






            ],


        },

           {
               xtype: 'container',
               //height: '100%',
               width: '90%',
               margin: '10 0 0 0',
               layout: {
                   // flex: 1,
                   type: 'vbox',
                   // pack: 'center',
               },

               items: [

                    {
                        xtype: 'button',
                        align: 'stretch',
                        itemId: 'loginRegButton',
                        ui: 'action',
                        //width: '50%',
                        //height: '10%',
                        padding: '10px',
                        text: 'Register',
                        handler: function () {
                        
                            if (!this.overlay) {
                                this.overlay = Ext.Viewport.add(_regForm
                            );

                            }
                            this.overlay.show();
                        },


                    }
                ,



                        {
                            xtype: 'spacer',
                            padding: '3px',
                        },

                 {

                     xtype: 'button',
                     align: 'stretch',
                     id: 'loginlogInButton',
                     ui: 'action',
                     //width: '50%',
                     //height: '10%',
                     padding: '10px',
                     text: 'Log In',
                     handler: function () {
                         //////////////////////////////////////////////////////////////Ext.Viewport.mask({ xtype: 'loadmask', message: 'Login....' });

                         //////////////////////////////////////////////////////////////var task = Ext.create('Ext.util.DelayedTask', function () {

                         //////////////////////////////////////////////////////////////    Ext.StoreMgr.get('GpsUserStore').load();
                         //////////////////////////////////////////////////////////////    var myStore = Ext.getStore('GpsUserStore');                            
                         //////////////////////////////////////////////////////////////    var co = myStore.getCount();
                         //////////////////////////////////////////////////////////////    var modelRecord = myStore.getAt(0);
                         //////////////////////////////////////////////////////////////    if (co >= 1)
                         //////////////////////////////////////////////////////////////    {
                         //////////////////////////////////////////////////////////////        AAccountNo = modelRecord.get('AccountNo');
                         //////////////////////////////////////////////////////////////        var User = modelRecord.get('UserName');
                         //////////////////////////////////////////////////////////////        Ext.getCmp('MainMenuUserLabel').setHtml('<font size="3" color="white">Welcome!<br>' + User + '</font>');                               
                         //////////////////////////////////////////////////////////////        Ext.getCmp('mainView').setActiveItem(1);
                         //////////////////////////////////////////////////////////////        Ext.Msg.alert("Login Success!");
                         //////////////////////////////////////////////////////////////    } else {
                         //////////////////////////////////////////////////////////////        Ext.Msg.alert("Failed.!");
                         //////////////////////////////////////////////////////////////    }

                         //////////////////////////////////////////////////////////////    Ext.Viewport.setMasked(false);
                  
                         //////////////////////////////////////////////////////////////});
                         //////////////////////////////////////////////////////////////task.delay(1000);
                     
                         Ext.Viewport.mask({ xtype: 'loadmask', message: 'Login....' });
                         var task = Ext.create('Ext.util.DelayedTask', function () {
                         _DataStore_User_Login.getProxy().setExtraParams({
                             US: Ext.getCmp('loginuserNameTextField').getValue(),
                             PW: Ext.getCmp('loginpasswordTextField').getValue(),
                             PLYR: Ext.browser.name,
                             SISOP: detectOs(),
                             //IP: myip,
                             IPADD: 'MostiTrack',
                         });

                           //  _DataStore_GPSUserLogin.getProxy().setUrl(document.location.protocol + '//' + document.location.host + '/GPSUser/GPSuserLoginR');

                         _DataStore_User_Login.load({
                         
                         callback: function (record, operation, success) {
                          

                             if (success) {
                                 var store = _DataStore_User_Login.getAt(0);


                                 if (store != null) {

                                   
                                     Ext.getCmp('MainMenuUserLabel').setHtml('<font size="3" color="white">Welcome!<br>' + store.get('UserName') + '</font>');
                                     Ext.getCmp('mainView').setActiveItem(1);
                                     AAccountNo = GetCurrentUserAccountNo();
                                     _IsSuccessLogin = true;
                                     Ext.Msg.alert("Login Success!");
                                 }
                             }
                             else {

                                 Ext.Msg.alert("Failed.!");
                                 _IsSuccessLogin = false;
                             }


                              
                         }
                     })

                         Ext.Viewport.setMasked(false);                  
                     });
                    task.delay(1000);

                         // loadTrackID();
                       //  var OperatingSystem = detectos();
                         //isreg = 'no';

                         //////////////////////////////////////////////////////////////Ext.getStore('GpsUserStore').getProxy().setExtraParams({
                         //////////////////////////////////////////////////////////////    Us: Ext.getCmp('loginuserNameTextField').getValue(),
                         //////////////////////////////////////////////////////////////    Pw: Ext.getCmp('loginpasswordTextField').getValue(),
                         //////////////////////////////////////////////////////////////    Bro: Ext.browser.name,
                         //////////////////////////////////////////////////////////////    Os: detectOs(),
                         //////////////////////////////////////////////////////////////    //IP: myip,
                         //////////////////////////////////////////////////////////////    IP: 'MostiTrack',
                         //////////////////////////////////////////////////////////////});
                         
                         //////////////////////////////////////////////////////////////Ext.StoreMgr.get('GpsUserStore').load();
                         //////////////////////////////////////////////////////////////Ext.Viewport.mask({ xtype: 'loadmask', message: 'Login....' });
                      
                         //////////////////////////////////////////////////////////////var task = Ext.create('Ext.util.DelayedTask', function () {

                         //////////////////////////////////////////////////////////////    Ext.StoreMgr.get('GpsUserStore').load();
                         //////////////////////////////////////////////////////////////    var myStore = Ext.getStore('GpsUserStore');                            
                         //////////////////////////////////////////////////////////////    var co = myStore.getCount();
                         //////////////////////////////////////////////////////////////    var modelRecord = myStore.getAt(0);
                         //////////////////////////////////////////////////////////////    if (co >= 1)
                         //////////////////////////////////////////////////////////////    {
                         //////////////////////////////////////////////////////////////        AAccountNo = modelRecord.get('AccountNo');
                         //////////////////////////////////////////////////////////////        var User = modelRecord.get('UserName');
                         //////////////////////////////////////////////////////////////        Ext.getCmp('MainMenuUserLabel').setHtml('<font size="3" color="white">Welcome!<br>' + User + '</font>');                               
                         //////////////////////////////////////////////////////////////        Ext.getCmp('mainView').setActiveItem(1);
                         //////////////////////////////////////////////////////////////        Ext.Msg.alert("Login Success!");
                         //////////////////////////////////////////////////////////////    } else {
                         //////////////////////////////////////////////////////////////        Ext.Msg.alert("Failed.!");
                         //////////////////////////////////////////////////////////////    }
                        
                         //////////////////////////////////////////////////////////////    Ext.Viewport.setMasked(false);
                         //////////////////////////////////////////////////////////////   // loadlogin(OperatingSystem, Ext.getCmp('loginuserNameTextField').getValue(), Ext.getCmp('loginpasswordTextField').getValue());
                         //////////////////////////////////////////////////////////////});
                         //////////////////////////////////////////////////////////////task.delay(1000);
                     }





                 },


               ]


           },



{
    xtype: 'container',
    //height: '100%',
    width: '80%',
    // margin: '10 0 0 0',
    layout: {
        // flex: 1,
        type: 'vbox',
        pack: 'center',
        align: 'center',
    },

    items: [
    //    {
    //    xtype: 'label',
    //    padding: '1px',
    //    html: '<center><img src="/resources/icons/angkasalogo.png" height = "25" width="82" style="padding-top: -31px;"/></center>'
    //}
    //    ,
         {
             xtype: 'label',
             padding: '5px',
             html: '<center></center>'
         },
          {

              xtype: 'panel',
              height: 100,
              // width: 220,ori
              width: 280,
              html: ' ',

          },
           {
               xtype: 'label',
               padding: '5px',
               html: '<center>Version 1.0</center>'
           },
    ]


},




                ]



            },

           //{
           //    html: '<div class="transboxtitle"></div>',
           //    top: 0,




           //},

                ]
            },





        ]








    },


    //initialize: function () {

    //    if (!this.overlay) {
    //        this.overlay = Ext.Viewport.add(_Geofence_loginpanel
    //    );


    //    }

    //    this.overlay.show();

    //}


});







function detectOs() {
    var OS;
    if (Ext.os.is('Android')) {

        OS = 'Andriod';


    } else
        if (Ext.os.is('Windows')) {
            OS = 'Windows';
        }
        else
            if (Ext.os.is('iOS')) {
                OS = 'iOS';
            }
            else
                if (Ext.os.is('iPad')) {
                    OS = 'iPad';
                }
                else
                    if (Ext.os.is('iPhone')) {
                        OS = 'iPhone';
                    }
                    else
                        if (Ext.os.is('iPod')) {
                            OS = 'iPod';
                        }
                        else
                            if (Ext.os.is('WebOS')) {
                                OS = 'WebOS';
                            }
                            else
                                if (Ext.os.is('Bada')) {
                                    OS = 'BlackBerry';
                                }
                                else
                                    if (Ext.os.is('MacOS')) {
                                        OS = 'MacOS';
                                    }
                                    else
                                        if (Ext.os.is('RIMTablet')) {
                                            OS = 'RIMTablet';
                                        }
                                        else
                                            if (Ext.os.is('Linux')) {
                                                OS = 'Linux';
                                            } else (OS = 'other')

    return OS;

}