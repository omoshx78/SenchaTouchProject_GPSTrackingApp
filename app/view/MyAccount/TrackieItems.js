
Ext.define('MyGPS.view.MyAccount.TrackieItems', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'multitrackiUnderAcc',
    id: 'multitrackiaccIDUnderAcc',
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
                 html: 'Registered GPS tracking Items<br>Under this Account'
             },

            {
                xtype: 'list',              
                flex: 1,

                store: 'TrackingItemList',
                id: 'TrackingItemListAll',
             
                mode: 'SINGLE',
                itemTpl: '<div class="myContent">' +
                   '<div><b>{TrackItem}</b></div>' +
                   '<div>{TrackID}</div>' +
                        //'<div>{GPSSimNumber}</div>' +
                    '<div style="display: none;">{DeviceID}</div>' +
                   '</div>',
                height: '100%',


                listeners: {


                    //itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                    //    //SingleTrackID = (record.get('TrackID'));
                    //    //TrackingItems = (record.get('TrackItem'));
                    //    //Ext.getCmp('useraccStartlivetracking').setHidden(false);
                    //    //Ext.getCmp('Backuseracc').setHidden(false);
                    //    //Ext.getCmp('BackuserTracerDev').setHidden(true);
                    //    //Ext.getCmp('ViewlastLocuseracc').setHidden(true);
                        
                    //  //  loaddoubletap();
                      
                    //},

                    //itemsingletap: function (dataview, index, target, record, e, eOpts) {
                    //    //SingleTrackID = (record.get('TrackID'));
                    //    //SingleDeviceID = (record.get('DeviceID'));
                    //    //TrackingItems = (record.get('TrackItem'));
                    //    //Ext.getCmp('useraccStartlivetracking').setHidden(true);
                    //    //Ext.getCmp('ViewlastLocuseracc').setHidden(false);
                    //    //Ext.getCmp('Backuseracc').setHidden(false);
                    // //   loadsingletap(SingleTrackID, AAccountNo);
                       
                    //}
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

function loaddoubletap2()
{
    Ext.getStore('singlesignalstore').getProxy().setExtraParams({
        TrackID: SingleTrackID,
        AccountNo: AAccountNo
    });
    Ext.StoreMgr.get('singlesignalstore').load();
    Ext.getCmp('InfoSingleSummaryUserAcc').setHtml('<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary (ID:' + SingleTrackID + ')</b></center></font></td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">22-1-2015 20:21</td></tr><tr> <td class="tdgpslabel">Last Tracked By</td> <td class="tdgpslabel">Mizi</td></tr><tr> <td class="tdgpslabel">LIcence Status</td> <td class="tdgpslabel">Activated</td></tr></table>');
    Ext.getCmp('useraccStartlivetracking').setHidden(false);
    Ext.getCmp('ViewlastLocuseracc').setHidden(true);
    Ext.getCmp('Backuseracc').setHidden(false);
    Ext.getCmp('basicform').setActiveItem(3);
    loadmarkerUserAcc();


}

function loadsingletap2(ID,acc)
{
   // alert(ID + '' + acc);
    
    //(AccNo, TrackID, DeviceID);

    Ext.getStore('TrackingItemDetailstore').getProxy().setExtraParams({        
        AccNo: acc,
        TrackID: ID,
        DeviceID: SingleDeviceID
    });
    Ext.StoreMgr.get('TrackingItemDetailstore').load();
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching data,Please Wait..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('TrackingItemDetailstore').getProxy().setExtraParams({
            AccNo: acc,
            TrackID: ID,
            DeviceID: SingleDeviceID,
            //DeviceID: SingleDeviceID
        });
        Ext.StoreMgr.get('TrackingItemDetailstore').load();
        var myStore = Ext.getStore('TrackingItemDetailstore');
        // var co = myStore.getCount() - 1;
       // var co = myStore.getCount();
        var modelRecord = myStore.getAt(0);
        //TrackerImeiNoDetails
        Ext.getCmp('GpsDeviceIDDetails').setValue(SingleDeviceID);
        Ext.getCmp('IDDetails').setValue(modelRecord.get('ID'));
        Ext.getCmp('AccountNoDetails').setValue(modelRecord.get('AccountNo'));
        Ext.getCmp('TrackIDDetails').setValue(modelRecord.get('TrackID'));
        Ext.getCmp('TrackItemDetails').setValue(modelRecord.get('TrackItem'));
        Ext.getCmp('TrackItemTypeDetails').setValue(modelRecord.get('TrackItemType'));
        Ext.getCmp('GPSSimNumberDetails').setValue(modelRecord.get('GPSSimNumber'));
        Ext.getCmp('GpsModelDetails').setValue(modelRecord.get('GPSModel'));
        Ext.getCmp('TrackingModeDetails').setValue(modelRecord.get('TrackingMode'));
        Ext.getCmp('CreatedDateDetails').setValue(modelRecord.get('CreatedDate'));
        Ext.getCmp('CreatedByDetails').setValue(modelRecord.get('CreatedBy'));
        Ext.getCmp('ModifiedDateDetails').setValue(modelRecord.get('ModifiedDate'));
        Ext.getCmp('ModifiedbyDetails').setValue(modelRecord.get('ModifiedBy'));
        Ext.getCmp('StatusDetails').setValue(modelRecord.get('Status'));
        Ext.getCmp('ExpiredDateDetails').setValue(modelRecord.get('ExpiredDate'));
        Ext.getCmp('TermDetails').setValue(modelRecord.get('Term'));
        btnstatus = 'none';
        Ext.getCmp('OperationDetails').setValue("none");




        Ext.getCmp('basicform').setActiveItem(4);





       

       // alert(SingleDeviceID + "c" + SingleTrackID);
        //   alert(co);
        //Ext.getCmp('InfoSingleSummaryUserAcc').setHtml('<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary (ID:' + SingleTrackID + ')</b></center></font></td></tr><tr> <td class="tdgpslabel">Last Tracked On</td> <td class="tdgpslabel">22-1-2015 20:21</td></tr><tr> <td class="tdgpslabel">Last Tracked By</td> <td class="tdgpslabel">Mizi</td></tr><tr> <td class="tdgpslabel">LIcence Status</td> <td class="tdgpslabel">Activated</td></tr></table>');
        //Ext.getCmp('useraccStartlivetracking').setHidden(false);
        //Ext.getCmp('Backuseracc').setHidden(false);
        Ext.Viewport.unmask();
    });
    task.delay(1000);



}

function disabledbox2() {
    //Ext.getCmp('GpsDeviceIDDetails').disabled(true);
    //Ext.getCmp('IDDetails').disabled(true);
    //Ext.getCmp('AccountNoDetails').disabled(true);
    //Ext.getCmp('TrackIDDetails').disabled(true);
    //Ext.getCmp('TrackItemDetails').disabled(true);
    //Ext.getCmp('TrackItemTypeDetails').disabled(true);
    //Ext.getCmp('GPSSimNumberDetails').disabled(true);
    //Ext.getCmp('GpsModelDetails').disabled(true);
    //Ext.getCmp('TrackingModeDetails').disabled(true);
    //Ext.getCmp('CreatedDateDetails').disabled(true);
    //Ext.getCmp('CreatedByDetails').disabled(true);
    //Ext.getCmp('ModifiedDateDetails').disabled(true);
    //Ext.getCmp('ModifiedbyDetails').disabled(true);
    //Ext.getCmp('StatusDetails').disabled(true);
    //Ext.getCmp('ExpiredDateDetails').disabled(true);
    //Ext.getCmp('TermDetails').disabled(true);

}