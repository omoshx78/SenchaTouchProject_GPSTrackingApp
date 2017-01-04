Ext.define('MyGPS.view.Setting.SettingTrackingItemList', {
    //extend: 'Ext.Panel', //Ext.navigation.View
    //xtype: 'TrackingItemListXtype',
    //id: 'TrackingItemListID',
    //requires: [
    //    'Ext.dataview.List',
    //    'Ext.data.Store'
    //],
    //config: {
    //    style: ' background-color:white;',
    //    layout: 'vbox', //  add a layout
    //    items:
    //    [
    //         {
    //             xtype: 'label',
    //             // id: 'Queue_GetDetailQueueLabel',
    //             html: 'Registered GPS tracking kids<br>Under this Account'
    //         },

    //        {
    //            xtype: 'list',
    //            flex: 1,
    //               store: _DataStore_TrackingItemListStore_AccountNo,
    //          //  store: 'TrackingItemList',
    //            id: 'TrackingItemListMainSetting',
    //            mode: 'SINGLE',
    //            itemTpl: '<div class="myContent">' +
    //             '<div><b>{TrackItem}</b></div>' +
    //             '<div>{TrackID}</div>' +
    //                  //'<div>{GPSSimNumber}</div>' +
    //              '<div style="display: none;">{DeviceID}</div>' +
    //             '</div>',
    //            height: '100%',
    //            listeners: {

    //                itemsingletap: function (list, idx, target, records, evt) {
                    
    //                },
    //                deselect: function (list, records) {
    //                    //var value_to_remove = records.get('DeviceID');
    //                    //listSingleTrackingitemtrackingid.splice(listSingleTrackingitemtrackingid.indexOf(value_to_remove), 1);


    //                }
    //            },

    //        }
    //    ]
    //}

});



var _setting_TrackingItemList;

function Setting_TrackingItemList() {

    _setting_TrackingItemList =
        Ext.create('Ext.Panel', {

            id: 'TrackingItemListID',
            //requires: [
            //    'Ext.dataview.List',
            //    'Ext.data.Store'
            //],
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
            scrollable: false,
            layout: 'fit',


            //scrollable: {
            //    direction: 'vertical',
            //    directionLock: true
            //},
            showAnimation: {
                type: 'slide',
                direction: 'left',
                duration: 450,
                easing: 'ease-out'
            },
            hideAnimation: {
                type: null,
                direction: null,
                duration: null,
                ////easing: 'ease-out'
                //  easing: 'ease-in'
            },

            items: [
                 

                   {

                       xtype: 'toolbar',
                       title: 'Tracking Items List',
                       docked: 'top',
                       id: 'toolbarSettingTrackingItemListTop',
                       //  hidden:true,
                       items:
                              [


                                  {
                                      xtype: 'button',

                                      id: 'btnSettingTrackingItemListTopHome',
                                      //  text: 'Show',
                                      iconCls: 'home',
                                      // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                                      ui: 'plain',
                                      handler: function () {
                                          Setting_TrackingItemListHide();
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
                                      id: 'btnSettingTrackingItemListTopAccInfo',
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
                           id: 'toolbarSettingTrackingItemListBottom',
                           //  hidden:true,
                           items:
                                  [
             {
                 //docked: 'right',
                 // width: 50,
                 ui: 'plain',
                 xtype: 'button',
                 id: 'btnSettingTrackingItemListCount',

                 handler: function () {

                 }
             },

                               {
                                   xtype: 'spacer',
                               },

                                   {
                                       xtype: 'button',

                                       id: 'btnSettingTrackingItemListBack',
                                       text: 'Back',
                                       //  iconCls: 'home',
                                       // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                                       ui: 'action',
                                       handler: function () {
                                           Setting_TrackingItemListHide();
                                       }



                                   },

                                  ]


                       },

                {
                    xtype: 'container',
                    layout: {

                        type: 'vbox',
                        //  style: "background-color: #57A0DC; color:white;",

                    },
                    items: [

                           {
                               xtype: 'label',
                               // id: 'Queue_GetDetailQueueLabel',
                               html: 'Registered GPS tracking kids<br>Under this Account'
                           },

            {
                xtype: 'list',
                // flex: 1,
                store: _DataStore_TrackingItemListStore_AccountNo,
                //  store: 'TrackingItemList',
                id: 'TrackingItemListMainSetting',
                mode: 'SINGLE',
                itemTpl: '<div class="myContent">' +
                 '<div><b>{TrackItem}</b></div>' +
                 '<div>{TrackID}</div>' +
                      //'<div>{GPSSimNumber}</div>' +
                  '<div style="display: none;">{DeviceID}</div>' +
                   '<div style="display: none;">{AccountNo}</div>' +
                 '</div>',
                height: '100%',
                emptyText: '<div class="myContent">No Alert History List</div>',
                onItemDisclosure: function (record, btn, index) {
                  

                        Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading data..Please Wait.' });
                        var task = Ext.create('Ext.util.DelayedTask', function () {
                          
                            MilageCountInfoLoadByAccountNoDeviceID((record.get('AccountNo')), (record.get('DeviceID')));
                            Ext.Viewport.unmask();
                            SettingResponderAlert_LoadByAccountNoModule(record.get('AccountNo'), _mainSettingModule);
                            MilageCountSettingShow();
                        });
                        task.delay(500);



                },
                listeners: {

                    itemdoubletap: function (list, idx, target, records, evt) {
                        Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading data..Please Wait.' });
                        var task = Ext.create('Ext.util.DelayedTask', function () {

                            MilageCountInfoLoadByAccountNoDeviceID((records.get('AccountNo')), (records.get('DeviceID')));
                            Ext.Viewport.unmask();
                            SettingResponderAlert_LoadByAccountNoModule(records.get('AccountNo'), _mainSettingModule);
                            MilageCountSettingShow();
                        });
                        task.delay(500);
                    },
                    deselect: function (list, records) {
                        //var value_to_remove = records.get('DeviceID');
                        //listSingleTrackingitemtrackingid.splice(listSingleTrackingitemtrackingid.indexOf(value_to_remove), 1);


                    }
                },

            }

                    ]
                },
              
              


            ]

        });

    return _setting_TrackingItemList;

}



function Setting_TrackingItemListShow()
{
    
    Ext.Viewport.remove(_setting_TrackingItemList);
    this.overlay = Ext.Viewport.add(Setting_TrackingItemList());
    this.overlay.show();
}

function Setting_TrackingItemListHide() {
    _setting_TrackingItemList.hide();
}


var count_Setting_TrackingItemList_LoadByAccountNo;
function Setting_TrackingItemList_LoadByAccountNo() {
    count_Setting_TrackingItemList_LoadByAccountNo = 0;
    _DataStore_TrackingItemListStore_AccountNo.removeAll();
    _DataStore_TrackingItemListStore_AccountNo.getProxy().setExtraParams({
       
        AccNo: AAccountNo
    });

    _DataStore_TrackingItemListStore_AccountNo.load({

        callback: function (record, operation, success) {
            if (success) {
              //  var store = _DataStore_TrackingItemListStore_AccountNo.getAt(0);
                //count = _DataStore_TrackingItemListStore_AccountNo.getCount();
                count_Setting_TrackingItemList_LoadByAccountNo=_DataStore_TrackingItemListStore_AccountNo.getCount();
               
            } else {
                //alert('error' + success);
                //count = 0;

            }
        }

    });
    //return count;
}

function Setting_TrackingItemList_GetAccountNo()
{
    var _value = '';
    //_DataStore_Maintain_GetByMPI.load();
    var store = _DataStore_TrackingItemListStore_AccountNo.getAt(0);
    if (store != null) {
        _value = store.get('AccountNo');
    }
    return _value;

}

function Setting_TrackingItemList_GetDeviceID() {
    var _value = '';
    //_DataStore_Maintain_GetByMPI.load();
    var store = _DataStore_TrackingItemListStore_AccountNo.getAt(0);
    if (store != null) {
        _value = store.get('DeviceID');
    }
    return _value;

}