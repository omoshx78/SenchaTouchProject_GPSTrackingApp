Ext.define('MyGPS.view.geoFences.geoFenceDB', {
});







function DeleteGeoFences(AccountNo, TrackID) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/GeoFence/GeofenceDelete',

        params: {

            AccountNo: AccountNo,
            TrackID: TrackID,
           

        },
        success: function (result, request) {
         //   Ext.Msg.alert('Success', 'Record has been Delete');
            if ((messageboxss())) {
                Ext.Viewport.add(messageboxss('Delete Succesfully'));
             //   Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Fence Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
            }
          //  Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
        },
        failure: function (result, request) {
           // Ext.Msg.alert('Error', request);
            if ((messageboxss())) {
                Ext.Viewport.add(messageboxss('Error,'+request));
            }
        }
    });
}















////////////////////////////
function InsertGeoFences(AccountNo, TrackID, TrackItem, Fencelenght, FencePath, ShapeType, FenceAlertemail, FenceAlertemail2, FenceAlertemail3, FenceAlertPhone, FenceAlertPhone2,
    FenceAlertPhone3, FenceAlertPhone4, Createdby, CreatedOS, FenceStatus, SendAlertStatus, SenderEmail, Senderphone, FenceAlertName, FenceAlertName2, FenceAlertName3, FenceAlertName4, SMSAlertMsg, FenceName, FenceAlertResponderRelations, FenceAlertResponderRelations2, FenceAlertResponderRelations3, FenceAlertResponderRelations4) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/GeoFence/GeofenceInsert',
       
        params: {

                        AccountNo: AccountNo,
                        TrackID: TrackID,
                        TrackItem: TrackItem,
                        Fencelenght: Fencelenght,
                        FencePath: FencePath,
                        ShapeType: ShapeType,
                        FenceAlertemail: FenceAlertemail,
                        FenceAlertemail2: FenceAlertemail2,
                        FenceAlertemail3: FenceAlertemail3,
                        FenceAlertPhone: FenceAlertPhone,
                        FenceAlertPhone2: FenceAlertPhone2,
                        FenceAlertPhone3: FenceAlertPhone3,
                        FenceAlertPhone4:FenceAlertPhone4,
                        Createdby: Createdby,
                        CreatedOS: CreatedOS,
                        FenceStatus: FenceStatus,
                        SendAlertStatus: SendAlertStatus,
                        SenderEmail: SenderEmail,
                        Senderphone: Senderphone,
                        FenceAlertName: FenceAlertName,
                        FenceAlertName2: FenceAlertName2,
                        FenceAlertName3: FenceAlertName3,
                        FenceAlertName4: FenceAlertName4,
                        SMSAlertMsg: SMSAlertMsg,
                        FenceName: FenceName,
                        FenceAlertResponderRelations: FenceAlertResponderRelations,
                        FenceAlertResponderRelations2: FenceAlertResponderRelations2,
                        FenceAlertResponderRelations3: FenceAlertResponderRelations3,
                        FenceAlertResponderRelations4: FenceAlertResponderRelations4,
        },
        success: function (result, request) {
        //    Ext.Msg.alert('Success', 'Record has been saved');
                Ext.Msg.show({
                    title: 'GeoFences Area',
                    message: 'Do You Want To save this geofence area?',
                    width: 500,
                    buttons: Ext.MessageBox.YESNO,
                    iconCls: Ext.MessageBox.INFO,
                    fn: function (buttonId) {
                        if (buttonId == "yes") {

                          
                            Ext.Msg.prompt('Confirm', 'Please Enter Your Geofence Area Name',
   function (buttonId, value) {
       Ext.getStore('geoFenceAreaSelectByAccNoByFenceName').getProxy().setExtraParams({
           AccountNo: AAccountNo,
           FenceName: value,
       });
       Ext.StoreMgr.get('geoFenceAreaSelectByAccNoByFenceName').load();
       GeofenceArea_CheckinFenceName(AccountNo, FencePath, value, Fencelenght, ShapeType, TrackID);
       InsertGeoFencesReinsertFenceName(AccountNo, TrackID, TrackItem, Fencelenght, FencePath, ShapeType, FenceAlertemail, FenceAlertemail2, FenceAlertemail3, FenceAlertPhone, FenceAlertPhone2,
    FenceAlertPhone3, FenceAlertPhone4, Createdby, CreatedOS, FenceStatus, SendAlertStatus, SenderEmail, Senderphone, FenceAlertName, FenceAlertName2, FenceAlertName3, FenceAlertName4, SMSAlertMsg, value, FenceAlertResponderRelations, FenceAlertResponderRelations2, FenceAlertResponderRelations3, FenceAlertResponderRelations4);
   },
   null,
   false,
   null,
   {
       placeHolder: 'Example:School,KidPlayground'
   }
 );
                        } else {

                            Ext.Msg.alert('Success', 'Record has been saved');

                        }


                    }
                });

        },
        failure: function (result, request) {
          //  Ext.Msg.alert('Error', request);
            if ((messageboxss())) {
                Ext.Viewport.add(messageboxss('Error,'+request));
            }
        }
    });




}



function InsertGeoFencesReinsertFenceName(AccountNo, TrackID, TrackItem, Fencelenght, FencePath, ShapeType, FenceAlertemail, FenceAlertemail2, FenceAlertemail3, FenceAlertPhone, FenceAlertPhone2,
    FenceAlertPhone3, FenceAlertPhone4, Createdby, CreatedOS, FenceStatus, SendAlertStatus, SenderEmail, Senderphone, FenceAlertName, FenceAlertName2, FenceAlertName3, FenceAlertName4, SMSAlertMsg, FenceName,FenceAlertResponderRelations,FenceAlertResponderRelations2,FenceAlertResponderRelations3,FenceAlertResponderRelations4) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/GeoFence/GeofenceInsert',

        params: {

            AccountNo: AccountNo,
            TrackID: TrackID,
            TrackItem: TrackItem,
            Fencelenght: Fencelenght,
            FencePath: FencePath,
            ShapeType: ShapeType,
            FenceAlertemail: FenceAlertemail,
            FenceAlertemail2: FenceAlertemail2,
            FenceAlertemail3: FenceAlertemail3,
            FenceAlertPhone: FenceAlertPhone,
            FenceAlertPhone2: FenceAlertPhone2,
            FenceAlertPhone3: FenceAlertPhone3,
            FenceAlertPhone4: FenceAlertPhone4,
            Createdby: Createdby,
            CreatedOS: CreatedOS,
            FenceStatus: FenceStatus,
            SendAlertStatus: SendAlertStatus,
            SenderEmail: SenderEmail,
            Senderphone: Senderphone,
            FenceAlertName: FenceAlertName,
            FenceAlertName2: FenceAlertName2,
            FenceAlertName3: FenceAlertName3,
            FenceAlertName4: FenceAlertName4,
            SMSAlertMsg: SMSAlertMsg,
            FenceName: FenceName,
            FenceAlertResponderRelations: FenceAlertResponderRelations,
            FenceAlertResponderRelations2: FenceAlertResponderRelations2,
            FenceAlertResponderRelations3: FenceAlertResponderRelations3,
            FenceAlertResponderRelations4: FenceAlertResponderRelations4
        },
        success: function (result, request) {
            Ext.Msg.alert('Success', 'Record has been Re-saved');
         

        },
        failure: function (result, request) {
            //  Ext.Msg.alert('Error', request);
            if ((messageboxss())) {
                Ext.Viewport.add(messageboxss('Error,' + request));
            }
        }
    });




}


function OutOfFence_Alert(AccountNo, TrackID, Alert) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/GeoFence/GeofenceAlert',

        params: {

            AccountNo: AccountNo,
            TrackID: TrackID,
            Alert: Alert

        },
        success: function (result, request) {
          //  Ext.Msg.alert('Success', 'Record has been Delete');
          //  Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
        },
        failure: function (result, request) {
            Ext.Msg.alert('Error', request);
        }
    });
}

function Geofence_OutOfFence_Respond(AccountNo, TrackID) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/GeoFence/GeofenceRespond',

        params: {

            AccountNo: AccountNo,
            TrackID: TrackID
           

        },
        success: function (result, request) {
            //  Ext.Msg.alert('Success', 'Record has been Delete');
            //  Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
        },
        failure: function (result, request) {
            Ext.Msg.alert('Error', request);
        }
    });
}



function GeofenceArea_CheckinFenceName(AccountNo, FencePath, value, Fencelenght, ShapeType, TrackID) {

    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Please Wait...Checking' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('geoFenceAreaSelectByAccNoByFenceName').getProxy().setExtraParams({
            AccountNo: AAccountNo,
            FenceName: value,
        });
        Ext.StoreMgr.get('geoFenceAreaSelectByAccNoByFenceName').load();
        var myStore = Ext.getStore('geoFenceAreaSelectByAccNoByFenceName');
        var co = myStore.getCount();
      //  alert(co);
        if (co == 0) {
        
            GeoFenceAreaInsert(AccountNo, FencePath, value, Fencelenght, ShapeType, TrackID)
        } else if (co >= 1) {
            GeoFenceAreaInsert(AccountNo, FencePath, value, Fencelenght, ShapeType, TrackID)
            Ext.Msg.alert('Update!');

        }





       
        Ext.Viewport.unmask();

    });
    task.delay(500);


}





function InsertGeoFencesFromSavedArea(AccountNo, TrackID, TrackItem, Fencelenght, FencePath, ShapeType, FenceAlertemail, FenceAlertemail2, FenceAlertemail3, FenceAlertPhone, FenceAlertPhone2,
    FenceAlertPhone3, FenceAlertPhone4, Createdby, CreatedOS, FenceStatus, SendAlertStatus, SenderEmail, Senderphone, FenceAlertName, FenceAlertName2, FenceAlertName3, FenceAlertName4, SMSAlertMsg, FenceName, FenceAlertResponderRelations, FenceAlertResponderRelations2, FenceAlertResponderRelations3, FenceAlertResponderRelations4) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/GeoFence/GeofenceInsert',

        params: {

            AccountNo: AccountNo,
            TrackID: TrackID,
            TrackItem: TrackItem,
            Fencelenght: Fencelenght,
            FencePath: FencePath,
            ShapeType: ShapeType,
            FenceAlertemail: FenceAlertemail,
            FenceAlertemail2: FenceAlertemail2,
            FenceAlertemail3: FenceAlertemail3,
            FenceAlertPhone: FenceAlertPhone,
            FenceAlertPhone2: FenceAlertPhone2,
            FenceAlertPhone3: FenceAlertPhone3,
            FenceAlertPhone4: FenceAlertPhone4,
            Createdby: Createdby,
            CreatedOS: CreatedOS,
            FenceStatus: FenceStatus,
            SendAlertStatus: SendAlertStatus,
            SenderEmail: SenderEmail,
            Senderphone: Senderphone,
            FenceAlertName: FenceAlertName,
            FenceAlertName2: FenceAlertName2,
            FenceAlertName3: FenceAlertName3,
            FenceAlertName4: FenceAlertName4,
            SMSAlertMsg: SMSAlertMsg,
            FenceName: FenceName,
            FenceAlertResponderRelations: FenceAlertResponderRelations,
            FenceAlertResponderRelations2: FenceAlertResponderRelations2,
            FenceAlertResponderRelations3: FenceAlertResponderRelations3,
            FenceAlertResponderRelations4: FenceAlertResponderRelations4,
        },
        success: function (result, request) {
              Ext.Msg.alert('Success', 'Done');
            //if ((messageboxss())) {
            //  Ext.Viewport.add(messageboxss('Save Succesfully'));



            //   }

            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
        },
        failure: function (result, request) {
            //  Ext.Msg.alert('Error', request);
            if ((messageboxss())) {
                Ext.Viewport.add(messageboxss('Error,' + request));
            }
        }
    });




}




function AutoFenceTimerInsertUpdate(ID, TrackItem, TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status, FenceLength) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/AutoFenceTimer/AutoFenceTimerInsertUpdate',

        params: {

            ID: ID,
            TrackID: TrackID,
            TrackItem: TrackItem,
            TrackID: TrackID,
            AccountNo: AccountNo,
            FencePath: FencePath,
            ShapeType: ShapeType,
            FenceAreaName: FenceAreaName,
            TimeFrom: TimeFrom,
            TimeTo: TimeTo,
            DaySetting: DaySetting,
            Status: Status,
            FenceLength: FenceLength
        },
        success: function (result, request) {
           
            Ext.getStore('AutoFenceTimerGetByAcc').getProxy().setExtraParams({
                AccNo: AAccountNo,
            });
            Ext.StoreMgr.get('AutoFenceTimerGetByAcc').load();
            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking TimeFrom TimeTo Duplicate...' });
            var task = Ext.create('Ext.util.DelayedTask', function () {
                Ext.getStore('AutoFenceTimerGetByAcc').getProxy().setExtraParams({
                    AccNo: AAccountNo,
                });
                Ext.StoreMgr.get('AutoFenceTimerGetByAcc').load();
                CheckingAutoTimerDuplicate(ID, 'IDK', TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status, FenceLength)
                Ext.Viewport.unmask();
            });
            task.delay(1500);
        },
        failure: function (result, request) {
           Ext.Msg.alert('Error', request);
            //if ((messageboxss())) {
            //    Ext.Viewport.add(messageboxss('Error,' + request));
            //}
        }
    });




}
function ReAutoFenceTimerInsertUpdate(ID, TrackItem, TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status, FenceLength) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/AutoFenceTimer/AutoFenceTimerInsertUpdate',

        params: {

            ID: ID,
            TrackID: TrackID,
            TrackItem: TrackItem,
            TrackID: TrackID,
            AccountNo: AccountNo,
            FencePath: FencePath,
            ShapeType: ShapeType,
            FenceAreaName: FenceAreaName,
            TimeFrom: TimeFrom,
            TimeTo: TimeTo,
            DaySetting: DaySetting,
            Status: 'InActive-Duplicate',
            FenceLength: FenceLength
        },
        success: function (result, request) {
            Ext.Msg.alert('Save', 'Detected SAME/TWICE Time From And Time to in different fence Area !<br>Time From and Time To only valid in one fence area<br>The Row will be InActive');


        },
        failure: function (result, request) {
            Ext.Msg.alert('Error', request);
            //if ((messageboxss())) {
            //    Ext.Viewport.add(messageboxss('Error,' + request));
            //}
        }
    });




}

function CheckingAutoTimerDuplicate(ID, IDK, TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status, FenceLength) {
    var TimeFrom;
    var TimeTo;
    var Status;
    var AccountNo;
    var checkDuplicate = 'False';
    var IDduplicate;
    var arr = [];
    var arrTimeFrom = [];
    var arrTimeTo = [];
    var ii;
    var lastTimeFrom;
    var lastTimeTo;
    var TimeFromNext;
    var TimeToNext;
    var StatusNext;
    var areaOverlap;
    var TrackIDnext;
    var previousArea;
    var previousTrackID;

    var IDnext;
    var countForCheck = 1;
   
    Ext.getStore('AutoFenceTimerGetByAcc').getProxy().setExtraParams({
        AccNo: AAccountNo,
    });
    Ext.StoreMgr.get('AutoFenceTimerGetByAcc').load();
    var myStore = Ext.getStore('AutoFenceTimerGetByAcc');
    var myStore1 = Ext.getStore('AutoFenceTimerGetByAcc');
    var count = myStore.getCount();
   
    console.log('count is:' + count);
    console.log(ID);
   


    if (count == 1)
    {
        Ext.Msg.alert('Success', 'Record has been saved!');
        var modelRecord = myStore.getAt(0);
        Ext.getCmp('SettingDrawFence_ID').setValue(modelRecord.get('ID'));
        return;
    }else
    if (count > 1) {
        for (ii = 0; ii < count - 1; ii++) {
            console.log('ii:' + ii);
            console.log('countForCheck:' + countForCheck);
            var modelRecord = myStore.getAt(ii);
            var modelRecord1 = myStore1.getAt(countForCheck);
            countForCheck = countForCheck + 1;
            TimeFromNext = parseInt(modelRecord1.get('TimeFrom'));
            TimeToNext = modelRecord1.get('TimeTo');
            StatusNext = modelRecord1.get('Status');
            areaOverlap = modelRecord1.get('FenceAreaName');
            IDnext = modelRecord1.get('ID');
            TrackIDnext = modelRecord1.get('TrackID');
            Ext.getCmp('SettingDrawFence_ID').setValue(modelRecord1.get('ID'));
         
            previousTrackID = modelRecord.get('TrackID');
            AccountNo = modelRecord.get('AccountNo');
            TimeFrom = modelRecord.get('TimeFrom');
            TimeTo = parseInt(modelRecord.get('TimeTo'));
            Status = modelRecord.get('Status');
            IDduplicate = modelRecord.get('ID');
            previousArea = modelRecord.get('FenceAreaName');
            console.log('TimeFromNext:' + TimeFromNext);
            console.log('TimeTo:' + TimeTo);

            if (Status == 'Active' && StatusNext == 'Active') {
                if (TimeFromNext <= TimeTo) {
                    console.log(IDnext);
                    AutoFenceTimerDeleteOverLapArea(IDnext, AccountNo);
                    Ext.Msg.alert('Failed !!', 'System detected overlap Time for Area (' + areaOverlap + ') with your previous area (' + previousArea + '). Please Check your time  and Time to range  ,Data not Saved.!');
                    return;
                }

                if (AccountNo + TimeFrom + TimeTo + previousTrackID == AccountNo + TimeFromNext + TimeToNext + TrackIDnext) {
                    console.log(IDnext);
                    AutoFenceTimerDeleteOverLapArea(IDnext, AccountNo);
                    Ext.Msg.alert('Failed !!', 'System detected overlap and Same Time for Area (' + areaOverlap + ') with your previous area (' + previousArea + '). Please Check your time from and Time to range ,Data not Saved.!');
                    return;
                }
              //  Ext.Msg.alert('Success', 'Record has been saved!');
                // arr.push(AccountNo + TimeFrom + TimeTo + Status);
            }

        }


        ////  1.TimeFrom=8AM - TimeTo=11AM
        ////  2.TimeFrom=9AM - TimeTo=10AM
        ////  3.TimeFrom=10AM - TimeTo=11AM






        //var sorted_arr = arr.sort(); // You can define the comparing function here. 
        //// JS by default uses a crappy string compare.

        //for (var i = 0; i < arr.length - 1; i++) {
        //    if (sorted_arr[i + 1] == sorted_arr[i]) {
        //        checkDuplicate = 'True';
        //        if (checkDuplicate == "True") {
        //            ReAutoFenceTimerInsertUpdate(IDduplicate, 'IDK', TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, 'InActive', FenceLength);
        //            // ReAutoFenceTimerInsertUpdate(IDduplicate, 'IDK', TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, 'InActive', FenceLength);
        //            //alert(checkDuplicate);
        //            //Ext.Msg.alert('Save', 'Detected SAME/TWICE Time From And Time to in different fence Area !<br>Time From and Time To only valid in one fence area<br>The Row will be InActive');
        //        }
        //       // AutoFenceTimerInsertUpdate(ID, 'IDK', TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, 'InActive', FenceLength);
        //    }
        //}
        //}

        //arr.length = 0;

        Ext.Msg.alert('Success', 'Record has been saved!');
    }
}

function AutoFenceTimerDelete(ID,AccountNo) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/AutoFenceTimer/AutoFenceTimerDelete',

        params: {

            ID: ID,
            AccountNo: AccountNo,


        },
        success: function (result, request) {
            Ext.Msg.alert('Success', 'Record has been Delete');
            Ext.getCmp('SettingDrawFence_ID').setValue('0');
            //if ((messageboxss())) {
            //    Ext.Viewport.add(messageboxss('Delete Succesfully'));
            //    //   Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Fence Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
            //}
            ////  Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
        },
        failure: function (result, request) {
             Ext.Msg.alert('Error', request);
            //if ((messageboxss())) {
            //    Ext.Viewport.add(messageboxss('Error,' + request));
            //}
        }
    });
}



function AutoFenceTimerDeleteOverLapArea(ID, AccountNo) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/AutoFenceTimer/AutoFenceTimerDelete',

        params: {

            ID: ID,
            AccountNo: AccountNo,


        },
        success: function (result, request) {
           // Ext.Msg.alert('Success', 'Record has been Delete');
            Ext.getCmp('SettingDrawFence_ID').setValue('0');
            //if ((messageboxss())) {
            //    Ext.Viewport.add(messageboxss('Delete Succesfully'));
            //    //   Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Fence Status</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
            //}
            ////  Ext.getCmp('GeofenceInfopanel').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>');
            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
        },
        failure: function (result, request) {
            Ext.Msg.alert('Error', request);
            //if ((messageboxss())) {
            //    Ext.Viewport.add(messageboxss('Error,' + request));
            //}
        }
    });
}
