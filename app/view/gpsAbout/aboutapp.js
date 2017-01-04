


Ext.define('MyGPS.view.about.aboutapp', {

    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'aboutapp',
    //  id: 'multitrackiaccIDUnderAcc',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    config: {
        style: ' background-color:white;',
        layout: 'vbox', //  add a layout
        items:
        [
             {
                 xtype: 'label',
                 // id: 'Queue_GetDetailQueueLabel',
                 html: '<font size="3"><b>About Application</b></font>'
             },

             {


                 flex: 1,



                 xtype: 'list',
                 itemTpl: '{title}',
                 flex: 1,
                 data: [{

                     //   title: 'This Application is free to use at your own risk. We will extend this application to receive Gps Signal from various devices.<br><br>We provide solution to divert GPS signal to this application<br>for the user who already have GPS tracker devices and interested to use this application<br><br>User must register and have an account with us. Registration is free. feel free to contact us at ianMizi@outlook.com if you face problem using this application<br><br> Thank You.<br>.ian-Mizi',
                  //   title: 'This Application is developed to monitor authism kid for their safety by fencing them virtualy over the map.<br> System will notify guardian  via SMS if the kid detected outside virtual boundary defined. <br><br>User must register and have an account with us. Registration is free. Feel free to contact us at webmaster@angkasa.gov.my  if you have any problem when using this application<br><br> Thank You.<br>R&D Unit Agensi Angkasa Malaysia',

                     title: 'This application is initiated by The National Space Agency (ANGKASA) under The Ministry of <br> Science, Technology and Innovation (MOSTI) with the collaboration of PERMATA Kurnia Center<br> with the aim of providing an alternative approach for parents to monitor children with <br>autism movement using satellite technology and virtual boundary application. This technology <br>is intended to reduce the risk of unfortunate events due to the act of hyperactive and wandering of children with autism.<br><br>This project is proudly funded by MOSTI Social Innovation Grant 2015.<br><br>Registration by user is compulsory before the activation of the system. For further information and enquiries, please do contact us at 03-3182 4034 / 4035. Thank you.<br><br><br>Space Application and Technology Development Division<br>National Space Agency (ANGKASA)<br> Ministry of Science, Technology and Innovation (MOSTI)<br>42700 Banting, Selangor',


                     selectable: false

                 },
                 


                 ],


                 listeners: {


                     select: function (list, model) {
                         var value = model.get('title');
                         if (model.get('selectable') === false) {
                             list.deselect(model);
                             return false;
                         }

                         //itemsingletap: function (dataview, index, target, record, e, eOpts) {

                         //    idxcommands = index + 1;
                         //    list.deselect(idxcommands);
                         //    return false;

                         //}
                     }
                 }

             }

        ],


    },




});



