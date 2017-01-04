var filepdf = 'UserManual-MOSTI-TRACK-AUTISM.pdf';
Ext.define('MyGPS.view.custompanel.master_usermanual', {

    extend: 'Ext.Panel',
 //   alias: "widget.loginpage",
    xtype: "usermanual",
   
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img', 'Ext.data.Store'],
    config: {
      //  fullscreen: true,
        scrollable: false,
        //style: "background-color: #57A0DC; color:white;",
        defaults: {
        },
        items: [

            {
                xtype: 'container',
                height:781,
                width: '100%',
                layout: 'fit',
             
                items: [


           
          


            {
                //html: '<table class="tabledetail">  <tr > <td colspan="2" style="background-color: grey;  font-size: 12px; color: #fff; text-align: center; ">GPS Live Data Info<br>(20-11-2014 01:32AM)</td> </tr><tr > <td class="tde">WTP 2681</td> <td class="tde">Proton Persona Car</td></tr> <tr > <td class="tdk">Tracking ID</td> <td class="tdk">Tracking Item</td></tr><tr > <td class="tde">03.9304893048</td> <td class="tde">101.283746484</td></tr> <tr > <td class="tdk">Latituded</td> <td class="tdk">Longituded</td></tr><tr > <td class="tde">89km/h</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">76.9%</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">TK102-B</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">+60193198764</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                //  html: '<iframe id="myIframe2" src="http://drms.dsmaf.mil.my/User_manual_Web_DRMS2.pdf" width="100%" height="700" ></iframe>',
                html: '<iframe id="myIframe2" src="' + document.location.protocol + '//' + document.location.host + '/' + filepdf + '"  width="100%" height="786" ></iframe>',
            },

   

          








         

                ]
            },





        ]








    },

 
});






//var filepdf;
////function _SearchLocation() {
//    filepdf = "location.html";
//    var _SearchLocation = Ext.create('Ext.Panel', {
      
//        height: 250,
//        width: 270,
//        right: 55,
//        top: 55,
//        id: 'SearchLocationID',
//     //   center:true,
//                //modal: true,
//                //hideOnMaskTap: true,
//                showAnimation: {
//                    type: 'slide',
//                    direction: 'down',
//                    duration: 350,
//                    easing: 'ease-out',

//                },
//                hideAnimation: {
//                    type: null,
//                    direction: null,
//                    duration: 650,
//                    easing: null,
//                    out: null

//                },
//                style: "background-color: #57A0DC; color:white;",
//                //style: 'background-color: transparent;',
//        items: [
//            {
//                docked: 'top',
//                xtype: 'toolbar',
//                id: 'userManual_TitleBar',
//                title: 'Enter Address',
//                ui: 'light',

//            },


//              {
//                  xtype: 'button',
//                  height: 40,
//                  width: 258,
//                  top:154,
//                  id: 'btnSearchLocationSearch1',
//                  ui: 'action',
//                  text: 'Search',
//                  handler: function () {

//                      Ext.Viewport.mask({ xtype: 'loadmask', message: 'Locating Address....' });
//                      var task = Ext.create('Ext.util.DelayedTask', function () {
//                          locateAutocomplete();
//                          Ext.Viewport.unmask();
                          
//                      });
//                      task.delay(1500);
                    
//                     _SearchLocation.hide();
//                     // var x = localStorage.getItem("latitudeY");
//                     // alert(longitudeXX);
//                  }

//              },




//            {
//                //html: '<table class="tabledetail">  <tr > <td colspan="2" style="background-color: grey;  font-size: 12px; color: #fff; text-align: center; ">GPS Live Data Info<br>(20-11-2014 01:32AM)</td> </tr><tr > <td class="tde">WTP 2681</td> <td class="tde">Proton Persona Car</td></tr> <tr > <td class="tdk">Tracking ID</td> <td class="tdk">Tracking Item</td></tr><tr > <td class="tde">03.9304893048</td> <td class="tde">101.283746484</td></tr> <tr > <td class="tdk">Latituded</td> <td class="tdk">Longituded</td></tr><tr > <td class="tde">89km/h</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">76.9%</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">TK102-B</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">+60193198764</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
//                //  html: '<iframe id="myIframe2" src="http://drms.dsmaf.mil.my/User_manual_Web_DRMS2.pdf" width="100%" height="700" ></iframe>',
//                html: '<iframe id="myIframe2" src="' + document.location.protocol + '//' + document.location.host + '/' + filepdf + '"  width="100%" height="100%" ></iframe>',
//            },








//        ],



//    });
 //   return floatingPanelPDF
//}

  