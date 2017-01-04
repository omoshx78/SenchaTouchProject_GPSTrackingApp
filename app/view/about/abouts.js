var ipimg = document.location.protocol + '//' + document.location.host + '/resources/icons/AngkasaMalaysia.png';
var yusimg = document.location.protocol + '//' + document.location.host + '/resources/icons/yusrina.jpg';
var amirimg = document.location.protocol + '//' + document.location.host + '/resources/icons/amir.jpg';


var idxcommands;
Ext.define('MyGPS.view.about.abouts', {

    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'abouts',
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
                 html: '<font size="3"><b>Contact Us</b></font>'
             },

             {


                 flex: 1,



                 xtype: 'list',
                 itemTpl: '{title}',
                 flex: 1,
                 data: [{

                     title: '<img src=' + ipimg + ' alt="Smiley face" width="312" height="280"><br><b>Space Application and Technology Development Division<b><br>National Space Agency (ANGKASA)<br>Malaysia Space Centre<br>42700 Banting, Selangor.<br>Phone: 03-3182 4034 / 4035<br>Email: webmaster@angkasa.gov.my',
                     selectable: false

                 },
                 //{

                 //    title: '<img src=' + yusimg + ' alt="Smiley face" width="312" height="300"><br><b>Sencha Touch Reference<b><br>Yusrina Bt Yusop',
                 //    selectable: false

                 //},
                 //{

                 //    title: '<img src=' + amirimg + ' alt="Smiley face" width="312" height="300"><br><b>GPS signal Extractor Agent<b><br>Nik Amir Bin Mahyudin',
                 //    selectable: false

                 //},



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





