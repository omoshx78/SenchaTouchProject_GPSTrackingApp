
Ext.define('MyGPS.view.MyAccount.ResponderAlertList', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'ResponderAlertList',
    id: 'ResponderAlertListID',
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
                 html: 'Responder For Virtual Boundary Alert<br>Under this Account'
             },

            {
                xtype: 'list',              
                flex: 1,
                store: 'ResponderAlertGetByAcc',
                id: 'IDResponderAlertGetByAcc',
                mode: 'SINGLE',
                itemTpl: '<div class="myContent">' +
                   '<div><b>{ResponderName}</b></div>' +
                   '<div>{ResponderRelationShip}</div>' +
                      //  '<div>{GPSSimNumber}</div>' +
                    '<div style="display: none;">{ID}</div>' +
                   '</div>',
                height: '100%',


                listeners: {


                    itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                        //SingleTrackID = (record.get('TrackID'));
                        //TrackingItems = (record.get('TrackItem'));
                        //Ext.getCmp('useraccStartlivetracking').setHidden(false);
                        //Ext.getCmp('Backuseracc').setHidden(false);
                        //Ext.getCmp('BackuserTracerDev').setHidden(true);
                        //Ext.getCmp('ViewlastLocuseracc').setHidden(true);
                        
                       // loaddoubletap();
                      
                    },

                    itemsingletap: function (dataview, index, target, record, e, eOpts) {
                        //SingleTrackID = (record.get('TrackID'));
                        //SingleDeviceID = (record.get('DeviceID'));
                        //TrackingItems = (record.get('TrackItem'));
                        Ext.getCmp('useraccStartlivetracking').setHidden(true);
                        Ext.getCmp('ViewlastLocuseracc').setHidden(true);
                        Ext.getCmp('Backuseracc').setHidden(true);
                        Ext.getCmp('btnBackResponderAlert').setHidden(false);
                        //alert((record.get('ID')));
                      loadsingletapResponderAlert((record.get('ID')));
                       
                    }
                }



                //listeners: {
                     
                //    select: function (list, records) {
                //        // trackingid.push(records.get('DeviceID'));
                //        SingleTrackID = (records.get('TrackID'));
                //        Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                //            TrackID: SingleTrackID,
                //            AccountNo: AAccountNo
                //        });
                //        Ext.StoreMgr.get('singlesignalstore').load();
                //        Ext.getCmp('InfoSingleSummaryUserAcc').setHtml('<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary (ID:' + SingleTrackID + ')</b></center></font></td></tr><tr> <td class="tdgpslabel">Last Tracked On</td> <td class="tdgpslabel">22-1-2015 20:21</td></tr><tr> <td class="tdgpslabel">Last Tracked By</td> <td class="tdgpslabel">Mizi</td></tr><tr> <td class="tdgpslabel">LIcence Status</td> <td class="tdgpslabel">Activated</td></tr></table>');
                //        Ext.getCmp('useraccStartlivetracking').setHidden(false);
                //        Ext.getCmp('Backuseracc').setHidden(false);
                //        Ext.getCmp('basicform').setActiveItem(3);
                //        loadmarkerUserAcc();

                       
                //     },
                //    deselect: function (list, records) {
                //       // console.log(records.get('DeviceID'));
                //        var value_to_remove = records.get('DeviceID');
                //        trackingid.splice(trackingid.indexOf(value_to_remove), 1);


                //    }
                //},


  
             
            }
            

        ],
        
       
    },
 
});

var SingleTrackID;
var LongitudedUserAcc;
var LatitudedUserAcc;
var DTUserAcc;
var SingleDeviceID;
var TrackingItems;



function loadsingletapResponderAlert(ID)
{
    //Ext.getCmp('ViewlastLocuseracc').setHidden(true);
    //Ext.getCmp('useraccStartlivetracking').setHidden(true);
    //Ext.getCmp('Backuseracc').setHidden(true);
    Ext.getStore('ResponderAlertGetByID').getProxy().setExtraParams({
        ID: ID
    });
    Ext.StoreMgr.get('ResponderAlertGetByID').load();
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching data,Please Wait..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('ResponderAlertGetByID').getProxy().setExtraParams({
            ID: ID
        });
        Ext.StoreMgr.get('ResponderAlertGetByID').load();
        var myStore = Ext.getStore('ResponderAlertGetByID');
        // var co = myStore.getCount() - 1;
       // var co = myStore.getCount();
        var modelRecord = myStore.getAt(0);
        //TrackerImeiNoDetails
      
        Ext.getCmp('ResponderAlertID').setValue(modelRecord.get('ID'));
        Ext.getCmp('ResponderAlertAccNo').setValue(modelRecord.get('AccountNo'));
        Ext.getCmp('ResponderAlertName').setValue(modelRecord.get('ResponderName'));
        Ext.getCmp('ResponderAlertRelationShip').setValue(modelRecord.get('ResponderRelationShip'));
        Ext.getCmp('ResponderAlertPhoneNo').setValue(modelRecord.get('ResponderPhoneNo'));
        Ext.getCmp('ResponderAlertEmail').setValue(modelRecord.get('ResponderEmail'));
        Ext.getCmp('ResponderAlertStatus').setValue(modelRecord.get('Status'));
       
        Ext.getCmp('ResponderAlertStatusEdit').setHidden(true);
        Ext.getCmp('ResponderAlertStatus').setHidden(false);

        Ext.getCmp('basicform').setActiveItem(8);
       





       

       // alert(SingleDeviceID + "c" + SingleTrackID);
        //   alert(co);
        //Ext.getCmp('InfoSingleSummaryUserAcc').setHtml('<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary (ID:' + SingleTrackID + ')</b></center></font></td></tr><tr> <td class="tdgpslabel">Last Tracked On</td> <td class="tdgpslabel">22-1-2015 20:21</td></tr><tr> <td class="tdgpslabel">Last Tracked By</td> <td class="tdgpslabel">Mizi</td></tr><tr> <td class="tdgpslabel">LIcence Status</td> <td class="tdgpslabel">Activated</td></tr></table>');
        //Ext.getCmp('useraccStartlivetracking').setHidden(false);
        //Ext.getCmp('Backuseracc').setHidden(false);
        Ext.Viewport.unmask();
    });
    task.delay(1000);



}

