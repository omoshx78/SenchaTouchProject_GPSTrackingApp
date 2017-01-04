
var MainSettinglistrecord;
var _mainSettingModule;
Ext.define('MyGPS.view.Setting.MainSetting', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'listMainSetting',
    id: 'listMainSettingID',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    config: {
       // style: ' background-color:white;',
        layout: 'vbox', //  add a layout
        items:
        [

            {
                xtype: 'toolbar',
                title: 'Setting',
                id: 'toolbarMainSettingID',
                ui: 'light',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',

                        id: 'btnMainSettingTopHome',
                        //  text: 'Show',
                        iconCls: 'home',
                        // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                        ui: 'plain',
                        handler: function () {

                            Ext.getCmp('mainView').setActiveItem(1);
                            //Ext.Viewport.remove(_value);
                            //_value.hide();

                        }




                    },
                           {
                               xtype: 'spacer'
                           },
                           {
                               xtype: 'button',
                               //right: -7,
                               //top: 1,
                               id: 'btnMainSettingTopAccInfo',
                               html: '<div ><img src="resources/icons/MainMenuPictureProfile.png" width="45" height="45" alt="Company Name"></div>',
                               //  html: '<div ><img src="resources/icons/hideGeofence.png" width="30" height="20" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {



                               }
                           },
                ]
            },

            {



                xtype: 'list',
                itemTpl: '{title}',
                flex: 1,
                data: [{

                    title: '<img src="resources/icons/MainSetting_MapSetting.png" width="130" height="50" alt="Company Name" >',
                    //  selectable: false

                },
                {

                    title: '<img src="resources/icons/MainSetting_MilageCount.png" width="130" height="50" alt="Company Name" >',
                    //  selectable: false

                },
                {

                    title: '<img src="resources/icons/MainSetting_RentalDetails.png" width="130" height="50" alt="Company Name" >',
                    //  selectable: false

                },
                {

                    title: '<img src="resources/icons/MainSetting_iAlertSetting.png" width="130" height="50" alt="Company Name" >',
                    //  selectable: false

                },
              


                ],

                onItemDisclosure: function (record, btn, index) {
                    MainSettinglistrecord = record;
                    if (index == 1) {
                        Setting_TrackingItemList_LoadByAccountNo();
                        _mainSettingModule = 'MilageCount';
                        Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching data..Please Wait.' });
                        var task = Ext.create('Ext.util.DelayedTask', function () {
                            if (count_Setting_TrackingItemList_LoadByAccountNo > 1)
                            {
                               
                                Setting_TrackingItemListShow();
                                Ext.getCmp('btnSettingTrackingItemListCount').setText("Found:" + count_Setting_TrackingItemList_LoadByAccountNo + '  items.');
                            } else
                            {
                               
                                MilageCountInfoLoadByAccountNoDeviceID(Setting_TrackingItemList_GetAccountNo(), Setting_TrackingItemList_GetDeviceID());
                                SettingResponderAlert_LoadByAccountNoModule(Setting_TrackingItemList_GetAccountNo(), _mainSettingModule);
                                MilageCountSettingShow();
                            }
                          
                            DeselectMainSettingList();
                            Ext.Viewport.unmask();
                        });
                        task.delay(800);
                       
                     
                       // Setting_TrackingItemListShow();
                        //var countListItem = Setting_TrackingItemList_LoadByAccNo();
                        //alert(countListItem);
                        //Ext.getCmp('mainView').setActiveItem(11);
                       // MilageCountSettingShow();
                    }
                   // alert(index);

                },
                listeners: {

                    select: function (list, record) {
                        MainSettinglistrecord = record;

                    },
                    itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                      
                        if(index==1)
                        {
                            _mainSettingModule = 'MilageCount';
                         Setting_TrackingItemList_LoadByAccountNo();
                         Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching data..Please Wait.' });
                         var task = Ext.create('Ext.util.DelayedTask', function () {
                             if (count_Setting_TrackingItemList_LoadByAccountNo > 1) {
                                 
                                
                                 Setting_TrackingItemListShow();
                                 Ext.getCmp('btnSettingTrackingItemListCount').setText("Found:" + count_Setting_TrackingItemList_LoadByAccountNo + '  items.');
                             } else {
                               
                                 MilageCountInfoLoadByAccountNoDeviceID(Setting_TrackingItemList_GetAccountNo(), Setting_TrackingItemList_GetDeviceID());
                                 SettingResponderAlert_LoadByAccountNoModule(Setting_TrackingItemList_GetAccountNo(), _mainSettingModule);
                                 MilageCountSettingShow();
                                
                             }

                             DeselectMainSettingList();
                             Ext.Viewport.unmask();
                         });
                         task.delay(800);
                      
                           // Setting_TrackingItemListShow();
                            //var countListItem = Setting_TrackingItemList_LoadByAccNo();
                            //alert(countListItem);
                            //Ext.getCmp('mainView').setActiveItem(11);
                           // MilageCountSettingShow();
                        }
                        //idxcommands = index + 1;
                        //list.deselect(idxcommands);
                        //return false;

                    },
                    itemtap: function (record, index, item, e) {

                        //  listIndex.push(index);
                        MainSettinglistrecord = record;

                    }
                    //itemsingletap: function (dataview, index, target, record, e, eOpts) {

                    //    //idxcommands = index + 1;
                    //    //list.deselect(idxcommands);
                    //    //return false;

                    //}
                    //select: function (list, model) {
                    //    var value = model.get('title');
                    //    if (model.get('selectable') === false) {
                    //        list.deselect(model);
                    //        return false;
                    //    }


                    //}
                }

            },
            {
                xtype: 'toolbar',
                id: 'toolbarMainSettingIDbottom',
                width: '100%',
                height: 35,
                //   style: _ToolbarMenu_ToolbarDarkColor(),
                layout: {
                    pack: 'right'
                },
                //  ui: 'dark',
                styleHtmlContent: true,
                docked: 'bottom',
                items: [
                    {

                        id: 'btnMainSettingMapBack',
                        width: 65,
                        height: 35,
                        margin:'-12 0 0 0',
                       text:'<font size="2" color="white">Back</font>',
                        ui: 'action',
                      
                       
                        xtype: 'button',
                   

                        handler: function () {

                            Ext.getCmp('mainView').setActiveItem(1);
                           

                        }
                    },
                 



                ]
            },

        ]
    }




});

function DeselectMainSettingList() {
    for (var i = 0; i < 20; i++) {
        MainSettinglistrecord.deselect(i);

    }
        
  
}


function MainSetting_getModule(index)
{
    var Module = '';

    if (index == 1)
    {
        Module = 'MilageCount';
    }



    return Module;
}


//function MainSettingView1()
//{
//    var _value = Ext.create('Ext.Panel', {
//  //  extend: 'Ext.Panel', //Ext.navigation.View
//    //xtype: 'abouts',
//        //  id: 'multitrackiaccIDUnderAcc',
//        id: 'MainSettingViewIaD',
//    requires: [
//        'Ext.dataview.List',
//        'Ext.data.Store'
//    ],
//    zIndex: 10,
//    styleHtmlContent: true,
//    config: {
//        //style: ' background-color:white;',
//        layout: 'vbox', //  add a layout
//        items:
//        [
//             {
//                 xtype: 'label',
//                  id: 'Queue_GetDetailQueueLabel',
//                 html: '<font size="3"><b>Contact Us</b></font>'
//             },

//             //{



//             //    xtype: 'list',
//             //    itemTpl: '{title}',
//             //    flex: 1,
//             //    data: [{

//             //        title: '<img src=' + ipimg + ' alt="Smiley face" width="312" height="280"><br><b>Space Application and Technology Development Division<b><br>National Space Agency (ANGKASA)<br>Malaysia Space Centre<br>42700 Banting, Selangor.<br>Phone: 03-3182 4034 / 4035<br>Email: webmaster@angkasa.gov.my',
//             //        selectable: false

//             //    },
//             //    //{

//             //    //    title: '<img src=' + yusimg + ' alt="Smiley face" width="312" height="300"><br><b>Sencha Touch Reference<b><br>Yusrina Bt Yusop',
//             //    //    selectable: false

//             //    //},
//             //    //{

//             //    //    title: '<img src=' + amirimg + ' alt="Smiley face" width="312" height="300"><br><b>GPS signal Extractor Agent<b><br>Nik Amir Bin Mahyudin',
//             //    //    selectable: false

//             //    //},



//             //    ],

//             //    onItemDisclosure: function (record, btn, index) {

                


//             //    },
//             //    listeners: {

//             //        itemsingletap: function (dataview, index, target, record, e, eOpts) {

//             //            //idxcommands = index + 1;
//             //            //list.deselect(idxcommands);
//             //            //return false;

//             //        }
//             //        //select: function (list, model) {
//             //        //    var value = model.get('title');
//             //        //    if (model.get('selectable') === false) {
//             //        //        list.deselect(model);
//             //        //        return false;
//             //        //    }

                        
//             //        //}
//             //    }

//             //}

//        ],


//    },

//    });
//    return _value;
//}





//function MainSettingView() {
//    var _value = Ext.create('Ext.Container', {
//        requires: [
//            'Ext.tab'
//        ],
//        id: 'MainSettingViewID',
//        zIndex:10,
//        layout: {
//            type: 'card',
//            animation: {
//                type: 'slide',
//                direction: 'right',
//                duration: 250
//            },

//        },
       
//        items: [
          



//                 {



//                 xtype: 'list',
//                 itemTpl: '{title}',
//                 flex: 1,
//                 data: [{

//                     title: '<img src="resources/icons/MainSetting_MapSetting.png" width="130" height="50" alt="Company Name" >',
//                   //  selectable: false

//                 },
//                 {

//                     title: '<img src="resources/icons/MainSetting_MilageCount.png" width="130" height="50" alt="Company Name" >',
//                     //  selectable: false

//                 },
//                 {

//                     title: '<img src="resources/icons/MainSetting_RentalDetails.png" width="130" height="50" alt="Company Name" >',
//                     //  selectable: false

//                 },
//                 {

//                     title: '<img src="resources/icons/MainSetting_iAlertSetting.png" width="130" height="50" alt="Company Name" >',
//                     //  selectable: false

//                 },
//                 //{

//                 //    title: '<img src=' + yusimg + ' alt="Smiley face" width="312" height="300"><br><b>Sencha Touch Reference<b><br>Yusrina Bt Yusop',
//                 //    selectable: false

//                 //},
//                 //{

//                 //    title: '<img src=' + amirimg + ' alt="Smiley face" width="312" height="300"><br><b>GPS signal Extractor Agent<b><br>Nik Amir Bin Mahyudin',
//                 //    selectable: false

//                 //},



//                 ],

//                 onItemDisclosure: function (record, btn, index) {


//                     alert(index);

//                 },
//                 listeners: {

//                     itemsingletap: function (dataview, index, target, record, e, eOpts) {

//                         //idxcommands = index + 1;
//                         //list.deselect(idxcommands);
//                         //return false;

//                     }
//                     //select: function (list, model) {
//                     //    var value = model.get('title');
//                     //    if (model.get('selectable') === false) {
//                     //        list.deselect(model);
//                     //        return false;
//                     //    }


//                     //}
//                 }

//             },

//            {
//                xtype: 'toolbar',
//                title: 'Setting',
//                id: 'toolbarMainSettingID',
//                ui: 'light',
//                docked: 'top',
//                items: [
//                    {
//                        xtype: 'button',

//                        id: 'btnMainSettingTopHome',
//                        //  text: 'Show',
//                        iconCls: 'home',
//                        // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
//                        ui: 'plain',
//                        handler: function () {
                           

//                            Ext.Viewport.remove(_value);
//                            _value.hide();

//                        }




//                    },
//                           {
//                               xtype: 'spacer'
//                           },
//                           {
//                               xtype: 'button',
//                               //right: -7,
//                               //top: 1,
//                               id: 'btnMainSettingTopAccInfo',
//                               html: '<div ><img src="resources/icons/MainMenuPictureProfile.png" width="45" height="45" alt="Company Name"></div>',
//                               //  html: '<div ><img src="resources/icons/hideGeofence.png" width="30" height="20" alt="Company Name"></div>',
//                               ui: 'plain',
//                               handler: function () {



//                               }
//                           },
//                ]
//            },
//            //24052016 lala change speciallist to specialist
//            {
//                xtype: 'toolbar',
//                id: 'toolbarMainSettingIDbottom',
//                width: '100%',
//                height: 45,
//             //   style: _ToolbarMenu_ToolbarDarkColor(),
//                layout: {
//                    pack: 'center'
//                },
//              //  ui: 'dark',
//                styleHtmlContent: true,
//                docked: 'bottom',
//                items: [
//                    {
                       
//                        id: 'btnMainSettingMap',
//                        //width: 45,
//                        height: 45,
//                      hidden:true,
//                        ui: 'plain',
//                         margin: '-15 0 0 0',
//                         html: '<img src="resources/icons/PointInfo_MillageCount.png" width="60" height="40" alt="Company Name" >',
//                        xtype: 'button',
//                        id: 'btnMainSettingMillageCount',
                     
//                        handler: function () {
                       
//                            Ext.getCmp('MainSettingViewID').setActiveItem(0);
//                            Ext.getCmp('ExaminationTreatmentSpecialistID').setTitle('Specialist-(Pedodontic)');
                         
//                        }
//                    },
//                    {
//                        xtype: 'button',
//                        margin: '-15 0 0 0',
//                        hidden: true,
//                        height: 45,
//                        html: '<img src="resources/icons/PointInfo_MapSetting.png" width="60" height="40" alt="Company Name" >',
//                        ui: 'plain',
//                        id: 'btnMainSettingMapSetting',
//                        handler: function () {
                     
//                            Ext.getCmp('MainSettingViewID').setActiveItem(1);
//                            Ext.getCmp('ExaminationTreatmentSpecialistID').setTitle('Specialist-(Periodontic)');
                          

//                        }
//                    },
//                    {
//                        xtype: 'button',
//                     //   text: 'Rental Detail',
//                        margin: '-15 0 0 0',
//                        ui: 'plain',
//                        hidden: true,
//                        height: 45,
//                        html: '<img src="resources/icons/PointInfo_RentalDetails.png" width="60" height="40" alt="Company Name" >',
//                        id: 'btnMainSettingRentalDetail',
//                        handler: function () {

//                            Ext.getCmp('MainSettingViewID').setActiveItem(1);
//                            Ext.getCmp('ExaminationTreatmentSpecialistID').setTitle('Specialist-(Periodontic)');

//                        }
//                    },
//                    {
//                        xtype: 'button',
//                        margin: '-15 0 0 0',
//                        height: 45,
//                        hidden: true,
//                        html: '<img src="resources/icons/PointInfo_MillageCount.png" width="60" height="40" alt="Company Name" >',
//                        ui: 'plain',
//                        id: 'btnMainSettingMaintenanceInfo',
//                        handler: function () {

//                            Ext.getCmp('MainSettingViewID').setActiveItem(1);
//                            Ext.getCmp('ExaminationTreatmentSpecialistID').setTitle('Specialist-(Periodontic)');

//                        }
//                    },
                   
                   


//                ]
//            },


//            // {
//            //     xtype: 'PedodonticDetailsView'

//            // },
//            //{
//            //    xtype: 'PeriodonticDetailsView'

//            //},
//            //{
//            //    xtype: 'EndodonticDetailsView'

//            //},

//            //{
//            //    xtype: 'OralPathologyDetailsView'

//            //},
//            //{
//            //    xtype: 'ProsthodonticView'
//            //},
//            //{
//            //    xtype: 'OMSView'

//            //},
//            // {
//            //     xtype: 'OrthodonticDetailsView'

//            // },
//            // 02052016 lala add specialist return view
//            // {
//            //     xtype: 'SpecialistReturnMainView'

//            // },

//        ]
//    });


//    return _value;
//}