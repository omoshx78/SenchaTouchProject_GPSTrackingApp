var streetviewstatus;

var FenceAlertName1;
var FenceAlertName2;
var FenceAlertName3;
var FenceAlertName4;
var FenceAlertRelationship1;
var FenceAlertRelationship2;
var FenceAlertRelationship3;
var FenceAlertRelationship4;
var FenceAlertPhone1;
var FenceAlertPhone2;
var FenceAlertPhone3;
var FenceAlertPhone4;
var FenceCheckIsActive;

Ext.define('MyGPS.view.functionality.funct', {

});




function InsertGPSuserloginreg(UserName, Password, Version, Status, AccountNo, RegisterBy, UpdateBy, LoginIP, LoginType, Browser, OS,
    EmailReg) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/GPSUser/GPSuserInsert',

        params: {

            UserName: UserName,
            Password: Password,
            Version: Version,
            Status: Status,
            AccountNo: AccountNo,
            RegisterBy: RegisterBy,
            UpdateBy: UpdateBy,
            LoginIP: LoginIP,
            LoginType: LoginType,
            Browser: Browser,
            OS: OS,
            EmailReg: EmailReg


        },
        success: function (result, request) {
    _regForm.hide();
            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Registration Success...' });
            var task = Ext.create('Ext.util.DelayedTask', function () {
               // var txt = Ext.getCmp('containerdental');
               // txt.list.select(10);
                // Ext.Msg.alert('Success', 'Please Login');
            
               if (loginviewTag == 'loginview') {
                    
                    
                    Ext.getCmp('userNameTextField').setValue(Ext.getCmp('loginregGpsusr').getValue());
                    Ext.getCmp('passwordTextField').setValue(Ext.getCmp('loginregGpspwd').getValue());
                } else {
                    Ext.getCmp('loginuserNameTextField').setValue(Ext.getCmp('loginregGpsusr').getValue());
                    Ext.getCmp('loginpasswordTextField').setValue(Ext.getCmp('loginregGpspwd').getValue());
                }
                Ext.Msg.alert('Success', 'Please Login');
                Ext.Viewport.unmask();
            });
            task.delay(1000);

            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
        },
        failure: function (result, request) {
             Ext.Msg.alert('Error', request);
        
        }
    });
}





function InsertGPSuser(UserName, Password, Version, Status, AccountNo, RegisterBy, UpdateBy, LoginIP, LoginType, Browser, OS,
    EmailReg) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/GPSUser/GPSuserInsert',

        params: {

            UserName: UserName,
            Password: Password,
            Version: Version,
            Status: Status,
            AccountNo: AccountNo,
            RegisterBy: RegisterBy,
            UpdateBy: UpdateBy,
            LoginIP: LoginIP,
            LoginType: LoginType,
            Browser: Browser,
            OS: OS,
            EmailReg: EmailReg
           

        },
        success: function (result, request) {
           
            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Registration Success...' });
            var task = Ext.create('Ext.util.DelayedTask', function () {
                var txt = Ext.getCmp('containerdental');
                txt.list.select(10);
                Ext.Msg.alert('Success', 'Please Login');
                //if ((messageboxss())) {
                //    Ext.Viewport.add(messageboxss('Success,Please Login'));
                //}
                Ext.Viewport.unmask();
            });
            task.delay(1000);

            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
        },
        failure: function (result, request) {
            Ext.Msg.alert('Error', request);
            //if ((messageboxss())) {
            //    Ext.Viewport.add(messageboxss('Error,'+request));
            //}
        }
    });
}


function UpdateGPSuser(UserName,Password,AccountNo,UpdateBy,
         LoginIP,Browser,OS,ID) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/GPSUser/GPSuserUpdate',

        params: {

            UserName: UserName,
            Password: Password,
          
            AccountNo: AccountNo,
           
            UpdateBy: UpdateBy,
            LoginIP: LoginIP,
           
            Browser: Browser,
            OS: OS,
            ID:ID
            


        },
        success: function (result, request) {
Ext.Msg.alert('Success', 'Update Succesfully');
            

            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
        },
        failure: function (result, request) {
          Ext.Msg.alert('Error', request);
           
        }
    });
}



function InsertUpdateAccount(AccountNo, AccountName, AAddress, AMobilePhone, AHousePhone, AOfficePhone, AAlertPhone,
                AEmail, AAlertEmail, AVersion, ACreatedBy, status, AItemRegisterCount) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/RegisterAccount/AccountInsertUpdate',

        params: {

            AccountNo: AccountNo,
            AccountName: AccountName,
            AAddress: AAddress,
            AMobilePhone: AMobilePhone,
            AHousePhone: AHousePhone,
            AOfficePhone: AOfficePhone,
            AAlertPhone: AAlertPhone,
            AEmail: AEmail,
            AAlertEmail: AAlertEmail,
            AVersion: AVersion,
            ACreatedBy: ACreatedBy,
            status: status,
            AItemRegisterCount: AItemRegisterCount

        },
        success: function (result, request) {
           Ext.Msg.alert('Success', 'Save Update Successfully..');

           

            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
        },
        failure: function (result, request) {
            Ext.Msg.alert('Error', request);
            //if ((messageboxss())) {
            //    Ext.Viewport.add(messageboxss('Error,'+request));
            //}
        }
    });
}




	function AccountDisable(AccID, AccountNo, AStatus,AModifiedBy) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/RegisterAccount/AccountDisabled',

        params: {

            AccID: AccID,
            AccountNo: AccountNo,
            AStatus: AStatus,
            AModifiedBy: AModifiedBy,
           

        },
        success: function (result, request) {
           // Ext.Msg.alert('Success', ' Delete Successfully');
            if ((messageboxss())) {
                Ext.Viewport.add(messageboxss('Delete Successfully'));
            }

            Ext.getCmp('AccStatus').setValue(Ext.getCmp('AccStatusAdd').getValue());
            //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Registration Success...' });
            //var task = Ext.create('Ext.util.DelayedTask', function () {
            //    var txt = Ext.getCmp('containerdental');
            //    txt.list.select(10);
            //    Ext.Msg.alert('Success', 'Please Login');
            //    Ext.Viewport.unmask();
            //});
            //task.delay(1000);

            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
        },
        failure: function (result, request) {
         //   Ext.Msg.alert('Error', request);
            if ((messageboxss())) {
                Ext.Viewport.add(messageboxss('Error,'+ request));
            }
        }
    });
}

	
	function TrackingItemsInsertUpdate(ID, AccountNo, GPSSimNumber, TrackID, DeviceID, TrackItemType, TrackItem, GPSModel, TrackingMode, Status, Term, CreatedBy, ModifiedBy,Sex,Risk,Age,Picture) {
	   // alert(TrackingMode);
	    Ext.Ajax.request({

	        url: document.location.protocol + '//' + document.location.host + '/TrackingItem/TrackingItemInsertUpdate',

	        params: {

	            ID: ID,
	            AccountNo: AccountNo,
	            GPSSimNumber: GPSSimNumber,
	            TrackID: TrackID,

	            DeviceID: DeviceID,
	            TrackItemType: TrackItemType,
	            TrackItem: TrackItem,
	            GPSModel: GPSModel,

	            TrackingMode: TrackingMode,
	            Status: Status,
	            Term: Term,
	            CreatedBy: CreatedBy,
	            ModifiedBy: ModifiedBy,
	            SearchCol: AccountNo + '|' + DeviceID + '|' + TrackID + '|' + TrackItemType + '|' + TrackItem + '|' + GPSModel + '|' + Ext.getCmp('AccName').getValue() + '|' + Ext.getCmp('AccAddress').getValue() + '|' + Ext.getCmp('AccMobilePhone').getValue() + '|' + Ext.getCmp('AccEmail').getValue()+'|'+Ext.getCmp('AccStatus').getValue(),
	            Sex:Sex,
	            Risk: Risk,
	            Age: Age,
	            Picture: Picture
	        },
	        success: function (result, request) {
	            Ext.Msg.alert('Success', ' Save Update Successfully..');
	            //if ((messageboxss())) {
	            //    Ext.Viewport.add(messageboxss('Save Successfully'));
	            //}
	            
	            //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Reload...' });
	            //var task = Ext.create('Ext.util.DelayedTask', function () {
	            //    loadsingletap(TrackID, AccountNo);
	            //    Ext.Viewport.unmask();
	            //});
	            //task.delay(1000);

	            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
	        },
	        failure: function (result, request) {
	           Ext.Msg.alert('Error', request);
	            //if ((messageboxss())) {
	            //    Ext.Viewport.add(messageboxss('Error,'+request));
	            //}
	        }
	    });
	}



	function TrackerDeviceInsertUpdate(ID, DeviceID, DeviceName, DeviceModel, Manufacturer, Supplier,
        CapabilityDescript, CoordinateType, SimNum, SimOperator, Status, CreatedBy, ModifiedBy, IgnitionRemotely,
        LockedDoorRemotely, ArmedRemotely, HornRemotely, Interval, GPSPacket, TrackerPwd, TrackerUsrNm, GPSserverPort, ServerIP) {
	    // alert(TrackingMode);
	    Ext.Ajax.request({

	        url: document.location.protocol + '//' + document.location.host + '/TrackerDevice/TrackerDeviceInsertUpdate',

	        params: {

	            ID: ID,
	            DeviceID: DeviceID,
	            DeviceName: DeviceName,
	            DeviceModel: DeviceModel,
	            Manufacturer: Manufacturer,
	            Supplier: Supplier,
	            CapabilityDescript: CapabilityDescript,
	            CoordinateType: CoordinateType,
	            SimNum: SimNum,
	            SimOperator: SimOperator,
	            Status: Status,
	            CreatedBy: CreatedBy,
	            ModifiedBy: ModifiedBy,
	            IgnitionRemotely: IgnitionRemotely,
	            LockedDoorRemotely: LockedDoorRemotely,
	            ArmedRemotely: ArmedRemotely,
	            HornRemotely: HornRemotely,
	            Interval: Interval,
	            GPSPacket: GPSPacket,
	            TrackerPwd: TrackerPwd,
	            TrackerUsrNm: TrackerUsrNm,
	            GPSserverPort: GPSserverPort,
	            ServerIP: ServerIP,


	        },
	        success: function (result, request) {
	          //  Ext.Msg.alert('Success', ' Save Update Successfully..');
	            if ((messageboxss())) {
	                Ext.Viewport.add(messageboxss('Save Successfully'));
	            }
	            //Ext.getCmp('AccStatus').setValue(Ext.getCmp('AccStatusAdd').getValue());
	            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Reload...' });
	            var task = Ext.create('Ext.util.DelayedTask', function () {
	                Ext.getStore('TrackerDevicestore').getProxy().setExtraParams({
	                    DeviceID: DeviceID
	                });
	                Ext.StoreMgr.get('TrackerDevicestore').load();
	                loadTrackerDevice();
	                Ext.Viewport.unmask();
	            });
	            task.delay(1000);

	            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
	        },
	        failure: function (result, request) {
	         //   Ext.Msg.alert('Error', request);
	            if ((messageboxss())) {
	                Ext.Viewport.add(messageboxss('Error,'+request));
	            }
	        }
	    });
	}








////////////////










function loadStreetView(pointing) {
    alert(pointing);
    streetviewstatus = 'failed';
  
 
    var service = new google.maps.StreetViewService();
    service.getPanoramaByLocation(pointing, 200, function (result, status) {
        if (status === google.maps.StreetViewStatus.OK) {
            streetviewstatus = 'OK';
            //var panorama = map.getStreetView();
            //panorama.setPosition(result.location.latLng);
            //panorama.setVisible(true);
            return;
        }
        else {
            streetviewstatus='failed'
           // alert("No street view is available within " + 200 + " meters");
            
        }
    });

    return streetviewstatus;
    }
    


function checkingstreetview(pointi)
{
    
    var streetViewService = new google.maps.StreetViewService();
    var STREETVIEW_MAX_DISTANCE = 100;
   // var latLng = new google.maps.LatLng(40.7140, -74.0062);
    streetViewService.getPanoramaByLocation(pointi, STREETVIEW_MAX_DISTANCE, function (streetViewPanoramaData, status) {
        if (status === google.maps.StreetViewStatus.OK) {
            streetviewstatus="OK";
            // ok
        } else {
            streetviewstatus = "failed";
            // no street view available in this range, or some error occurred
        }
    });
    return streetviewstatus;
}








function messageboxss(msgtext)
{
    msgboxed = Ext.create('Ext.form.Panel', {
        centered: true,
        modal: true,
        hideOnMaskTap: true,
        width: 250,
        height: 70
        ,
        //style: "background-color: #57A0DC; color:white;",
        style: "background-color: black;",
        scrollable: false,
       // fullscreen: true,
        //hidden: true,
        
        //showAnimation: {
        //    type: 'popIn',
        //    duration: 250,
        //    easing: 'ease-out'
        //},
        //hideAnimation: {
        //    type: 'popOut',
        //    duration: 250,
        //    easing: 'ease-out'
        //},
        //styleHtmlContent:true,
        items: [
            {
            
                html: '<font size="4" color="white">&nbsp; &nbsp;'+msgtext+'..!!!</font>'
            },
            {
                xtype:'spacer'
            },
                         {
                                                    xtype: 'button',

                                            align: 'stretch',
                                            itemId: 'BtnLoginSuccess',
                                            ui: 'action',
                                            //height: '60',
                                            //width: '40%',
                                            padding: '10px',
                                            text: 'OK',
                                            handler: function () {

                                                msgboxed.hide();

                                            }
                                        }
        ]
    });

    return msgboxed;
}
//form = Ext.create('Ext.form.Panel', {
//    centered: true,
//    modal: true,
//    hideOnMaskTap: true,
//    width: '50%',
//    height: '50%',
//    items: [
//        {
//            xtype: 'textfield',
//            label: 'Foo'
//        }
//    ]
//});



function messageboxslong(msgtext) {
    msgboxlong = Ext.create('Ext.form.Panel', {
        centered: true,
        modal: true,
        hideOnMaskTap: true,
        width: 250,
        height: 100
        ,
        //style: "background-color: #57A0DC; color:white;",
        style: "background-color: black;",
        scrollable: false,
        // fullscreen: true,
        //hidden: true,

        //showAnimation: {
        //    type: 'popIn',
        //    duration: 250,
        //    easing: 'ease-out'
        //},
        //hideAnimation: {
        //    type: 'popOut',
        //    duration: 250,
        //    easing: 'ease-out'
        //},
        //styleHtmlContent:true,
        items: [
            {

                html: '<font size="4" color="white">' + msgtext + '..!!!</font>'
            },
            {
                xtype: 'spacer'
            },
                         {
                             xtype: 'button',

                             align: 'stretch',
                             itemId: 'Btnmsgboxlong',
                             ui: 'action',
                             //height: '60',
                             //width: '40%',
                             padding: '10px',
                             text: 'OK',
                             handler: function () {

                                 msgboxlong.hide();

                             }
                         }
        ]
    });

    return msgboxlong;
}


/////



////////////

function loadGeofencepopUp()
{
    gFenceAlertResponder = modelRecord.get('FenceAlertResponder');
    gFenceAlertResponder2 = modelRecord.get('FenceAlertResponder2');
    gFenceAlertResponder3 = modelRecord.get('FenceAlertResponder3');
    gFenceAlertResponder4 = modelRecord.get('FenceAlertResponder4');
    gFenceAlertResponderRelations = modelRecord.get('FenceAlertResponderRelations');
    gFenceAlertResponderRelations2 = modelRecord.get('FenceAlertResponderRelations2');
    gFenceAlertResponderRelations3 = modelRecord.get('FenceAlertResponderRelations3');
    gFenceAlertResponderRelations4 = modelRecord.get('FenceAlertResponderRelations4');
    gFencelenght = modelRecord.get('Fencelenght');
    gCreateddate = modelRecord.get('Createddate');
    gFenceName = modelRecord.get('FenceName');
    bSex = modelRecord.get('Sex');
    bAge = modelRecord.get('Age');
    bRisk = modelRecord.get('Risk');
    bPicture = modelRecord.get('Picture');
    Ext.getCmp('GeofenceDetailpanel1').setHtml('<table class="tabledetail"><tr> <td class="tde">' + gfenceTrackItem + '</td> <td class="tde">' + bSex + '</td></tr> <tr > <td class="tdk">Name</td> <td class="tdk">Gender</td></tr><tr > <td class="tde">' + bAge + '</td> <td class="tde">' + bRisk + '</td></tr> <tr > <td class="tdk">Age</td> <td class="tdk">Risk</td></tr><tr > <td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>');
    Ext.getCmp('GeofenceDetailpanel3').setHtml('<table class="tabledetail"><tr> <td class="tde">' + gFenceAlertResponder + ' (' + gFenceAlertResponderRelations + ')' + '</td> <td class="tde">' + gFenceAlertResponder2 + ' (' + gFenceAlertResponderRelations2 + ')' + ')</td></tr> <tr > <td class="tdk">Responder 1</td> <td class="tdk">Responder 2</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
    Ext.getCmp('GeofenceDetailpanel4').setHtml('<table class="tabledetail"><tr> <td class="tde">' + gFenceAlertResponder3 + ' (' + gFenceAlertResponderRelations3 + ')' + '</td> <td class="tde">' + gFenceAlertResponder4 + ' (' + gFenceAlertResponderRelations4 + ')' + ')</td></tr> <tr > <td class="tdk">Responder 3</td> <td class="tdk">Responder 4</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
    Ext.getCmp('GeofenceDetailpanel5').setHtml('<table class="tabledetail"><tr> <td class="tde">' + gFencelenght + '</td> <td class="tde">' + gCreateddate + '</td></tr> <tr > <td class="tdk">Fence Length</td> <td class="tdk">Fence Date</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
    if (gFenceName === "" || gFenceName == null) {
        Ext.getCmp('btnFenceArea').setHtml("<u><font size=2>Geofence Area: Area Name Not Set.</font></u>");

    }

    else { Ext.getCmp('btnFenceArea').setHtml("<u><font size=2>Geofence Area:" + gFenceName + "</font></u>"); }
}



function GeocodeLatLng(geoFenceX, geoFenceY) {
  //  var foundaddrs = "GeoCode Failed";

   // alert(geoFenceX);
    var latlng = new google.maps.LatLng(geoFenceY, geoFenceX);
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                //map.setZoom(11);
                //marker = new google.maps.Marker({
                //    position: latlng,
                //    map: map
                //});
               // foundaddrs = results[1].formatted_address;
               // alert(results[1].formatted_address);
               // Ext.getCmp('InfoSingleSummaryUserAcc').setHtml('<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary (ID:' + SingleTrackID + ')</b></center></font></td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackingItems + '</td></tr><tr> <td class="tdgpslabel">Location Y,X</td> <td class="tdgpslabel">' + LatitudedUserAcc + ',' + LongitudedUserAcc + '</td></tr><tr> <td class="tdgpslabel">GeoCode Address</td> <td class="tdgpslabel">' + results[1].formatted_address + '</td></tr></table>');
                //alert(results[1].formatted_address);
                // infowindow.setContent(results[1].formatted_address);
                // infowindow.open(map, marker);
             
                Ext.getCmp('GeofenceDetailpanel2').setHtml('<table class="tabledetail"><tr> <td class="tde">X: ' + geoFenceX + '<br>Y: ' + geoFenceY + '</td> <td class="tde">' + results[1].formatted_address + '</td></tr> <tr > <td class="tdk">Location</td> <td class="tdk">Geocode Adress</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
            } else {
                Ext.getCmp('GeofenceDetailpanel2').setHtml('<table class="tabledetail"><tr> <td class="tde">X: ' + geoFenceX + '<br>Y: ' + geoFenceY + '</td> <td class="tde">' + 'No Addres found' + '</td></tr> <tr > <td class="tdk">Location</td> <td class="tdk">Geocode Adress</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
              //  foundaddrs = 'No Addres found';
              //  return 'No Addres found';
              //  Ext.getCmp('InfoSingleSummaryUserAcc').setHtml('<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary (ID:' + SingleTrackID + ')</b></center></font></td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackingItems + '</td></tr><tr> <td class="tdgpslabel">Location Y,X</td> <td class="tdgpslabel">' + LatitudedUserAcc + ',' + LongitudedUserAcc + '</td></tr><tr> <td class="tdgpslabel">GeoCode Address</td> <td class="tdgpslabel">' + foundaddrs + '</td></tr></table>');
            }
        } else {
          //  return 'Geocoder failed due to: ' + status;
            Ext.getCmp('GeofenceDetailpanel2').setHtml('<table class="tabledetail"><tr> <td class="tde">X: ' + geoFenceX + '<br>Y: ' + geoFenceY + '</td> <td class="tde">' + 'Geocoder failed due to: ' + status + '</td></tr> <tr > <td class="tdk">Location</td> <td class="tdk">Geocode Adress</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
           // Ext.getCmp('InfoSingleSummaryUserAcc').setHtml('<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary (ID:' + SingleTrackID + ')</b></center></font></td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackingItems + '</td></tr><tr> <td class="tdgpslabel">Location Y,X</td> <td class="tdgpslabel">' + LatitudedUserAcc + ',' + LongitudedUserAcc + '</td></tr><tr> <td class="tdgpslabel">GeoCode Address</td> <td class="tdgpslabel">' + foundaddrs + '</td></tr></table>');
        }
    });

   
  ///  return foundaddrs;


}


function loadTrackingItemGeoFenceAlert(DeviceID, AAccountNo, SingleTrackID) {

  
    Ext.StoreMgr.get('TrackingItemDetailstore').load();

    Ext.getStore('TrackingItemDetailstore').getProxy().setExtraParams({
        AccNo: AAccountNo,
        TrackID: SingleTrackID,
        DeviceID: DeviceID
    });
    Ext.StoreMgr.get('TrackingItemDetailstore').load();
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching data,Please Wait..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('TrackingItemDetailstore').getProxy().setExtraParams({
            AccNo: AAccountNo,
            TrackID: SingleTrackID,
            DeviceID: DeviceID
            //DeviceID: SingleDeviceID
        });
        Ext.StoreMgr.get('TrackingItemDetailstore').load();
        var myStore = Ext.getStore('TrackingItemDetailstore');       
        var modelRecord = myStore.getAt(0);
        Ext.getCmp('GeofenceDetailpanel1').setHtml('<table class="tabledetail"><tr> <td class="tde">' + modelRecord.get('TrackItem') + '</td> <td class="tde">' + modelRecord.get('Sex') + '</td></tr> <tr > <td class="tdk">Name</td> <td class="tdk">Gender</td></tr><tr > <td class="tde">' + modelRecord.get('Age') + '</td> <td class="tde">' + modelRecord.get('Risk') + '</td></tr> <tr > <td class="tdk">Age</td> <td class="tdk">Risk</td></tr><tr > <td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>');

        Ext.Viewport.unmask();
    });
    task.delay(1000);



}

var arrayGeofenceResponderAlert = [];
var arrayGeofenceResponderAlertName = [];
var arrayGeofenceResponderAlertPhoneNo = [];
var arrayGeofenceReponderAlertRelationship = [];
function loadGeofenceResponderAlert()
{
    // alert("loadGeofenceResponderAlert");
    
    arrayGeofenceResponderAlert.length = 0;
    arrayGeofenceResponderAlertName.length = 0;
    arrayGeofenceResponderAlertPhoneNo.length = 0;
    arrayGeofenceReponderAlertRelationship.length = 0;
    Ext.getStore('ResponderAlertGetByAcc').getProxy().setExtraParams({
        AccNo: Ext.getCmp('AccNo').getValue(),
    });
    Ext.StoreMgr.get('ResponderAlertGetByAcc').load();

   // Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching data,Please Wait..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('ResponderAlertGetByAcc').getProxy().setExtraParams({
            AccNo: Ext.getCmp('AccNo').getValue(),
        });
        Ext.StoreMgr.get('ResponderAlertGetByAcc').load();

        var myStore = Ext.getStore('ResponderAlertGetByAcc');
        // var co = myStore.getCount() - 1;
        var co = myStore.getCount();
       
        for (var i = 0; i < co; i++) {
            
            var modelRecord = myStore.getAt(i);
            // arrayGeofenceResponderAlert[i] = modelRecord.get('ResponderName') + ' (' + modelRecord.get('ResponderRelationShip') + ')'

            FenceCheckIsActive = modelRecord.get('Status');
            if (FenceCheckIsActive == 'Active')
                {
            arrayGeofenceResponderAlertName[i] = modelRecord.get('ResponderName');
            arrayGeofenceResponderAlertPhoneNo[i] = modelRecord.get('ResponderPhoneNo');
            arrayGeofenceReponderAlertRelationship[i] = modelRecord.get('ResponderRelationShip');
            }else if (FenceCheckIsActive == 'InActive')
            {
                arrayGeofenceResponderAlertName[i] = modelRecord.get('ResponderName');
                arrayGeofenceResponderAlertPhoneNo[i] = 'None';
                arrayGeofenceReponderAlertRelationship[i] = modelRecord.get('ResponderRelationShip');
            }
        }
        FenceAlertName1 = arrayGeofenceResponderAlertName[0];
        FenceAlertName2 = arrayGeofenceResponderAlertName[1];
        FenceAlertName3 = arrayGeofenceResponderAlertName[2];
        FenceAlertName4 = arrayGeofenceResponderAlertName[3];
        FenceAlertPhone1 = arrayGeofenceResponderAlertPhoneNo[0];
        FenceAlertPhone2 = arrayGeofenceResponderAlertPhoneNo[1];
        FenceAlertPhone3 = arrayGeofenceResponderAlertPhoneNo[2];
        FenceAlertPhone4 = arrayGeofenceResponderAlertPhoneNo[3];
        FenceAlertRelationship1 = arrayGeofenceReponderAlertRelationship[0];
        FenceAlertRelationship2 = arrayGeofenceReponderAlertRelationship[1];
        FenceAlertRelationship3 = arrayGeofenceReponderAlertRelationship[2];
        FenceAlertRelationship4 = arrayGeofenceReponderAlertRelationship[3];
     //   alert(FenceAlertRelationship1);
       // Ext.getCmp('GeofenceDetailpanel3').setHtml('<table class="tabledetail"><tr> <td class="tde">' + arrayGeofenceResponderAlert[0] + '</td> <td class="tde">' + arrayGeofenceResponderAlert[1] + ')</td></tr> <tr > <td class="tdk">Responder 1</td> <td class="tdk">Responder 2</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
     //   Ext.getCmp('GeofenceDetailpanel4').setHtml('<table class="tabledetail"><tr> <td class="tde">' + arrayGeofenceResponderAlert[2] + '</td> <td class="tde">' + arrayGeofenceResponderAlert[3] + ')</td></tr> <tr > <td class="tdk">Responder 3</td> <td class="tdk">Responder 4</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');

       
        
        //for (index = 0; index < arrayGeofenceResponderAlert.length; index++) {
        //    text += fruits[index];
        //}
    //    var modelRecord = myStore.getAt(0);
       
        //  alert(Ext.getCmp('AccNo').getValue());
       // Ext.Viewport.unmask();
    });
    task.delay(1000);
  
}

function loadGeofenceLengthCreatedDate()
{
    Ext.getStore('geoFenceStore').getProxy().setExtraParams({
        AccountNo: AAccountNo,
        TrackID: SingleTrackID,
    });
    Ext.StoreMgr.get('geoFenceStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('geoFenceStore').getProxy().setExtraParams({
            AccountNo: AAccountNo,
            TrackID: SingleTrackID,


        });


        Ext.StoreMgr.get('geoFenceStore').load();
        var myStore = Ext.getStore('geoFenceStore');
        var co = myStore.getCount();

        if (co >= 1) {
            var modelRecord = myStore.getAt(0);
            Ext.getCmp('GeofenceDetailpanel5').setHtml('<table class="tabledetail"><tr> <td class="tde">' + modelRecord.get('Fencelenght') + '</td> <td class="tde">' + modelRecord.get('Createddate') + '</td></tr> <tr > <td class="tdk">Fence Length</td> <td class="tdk">Fence Date</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
            if (modelRecord.get('FenceName') === "" || modelRecord.get('FenceName')==null) {
                Ext.getCmp('btnFenceArea').setHtml("<u><font size=2>Geofence Area: NO GEOFENCE</font></u>");

            }

            else { Ext.getCmp('btnFenceArea').setHtml("<u><font size=2>Geofence Area:" + modelRecord.get('FenceName') + "</font></u>"); }
        }
        else if (co == 0) {
            Ext.getCmp('GeofenceDetailpanel5').setHtml('<table class="tabledetail"><tr> <td class="tde">N/A</td> <td class="tde">N/A</td></tr> <tr > <td class="tdk">Fence Length</td> <td class="tdk">Fence Date</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
         //   Ext.getCmp('btnFenceArea').setHtml("<u><font size=2>Geofence Area: NO GEOFENCE</font></u>");
         //   Ext.getCmp('GeofenceInfopanel').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">DISABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">No Geofence</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">Tracking..</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Mode</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>');
          
        }
      
    });
    task.delay(500);
}


function ReaponderAlertInsertUpdate(ID, AccountNo, ResponderName, ResponderRelationShip, ResponderPhoneNo, ResponderEmail,
    Status, GeofenceStatus, User) {
  //  alert(ID);
  //  console.log(document.location.protocol + '//' + document.location.host + '/ResponderAlert/ResponderAlertInsertUpdate?ID=' + ID + '?AccountNo=' + AccountNo + '?ResponderName=' + ResponderName + '?ResponderRelationShip=' + ResponderRelationShip + '?ResponderPhoneNo=' + ResponderPhoneNo + '?ResponderEmail=' + ResponderEmail + '?Status=' + Status + '?GeofenceStatus=' + GeofenceStatus + '?User=' + User);
    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/ResponderAlert/ResponderAlertInsertUpdate',

        params: {

            ID: ID,
            AccountNo: AccountNo,
            ResponderName: ResponderName,
            ResponderRelationShip: ResponderRelationShip,
            ResponderPhoneNo: ResponderPhoneNo,
            ResponderEmail: ResponderEmail,
            Status: Status,
            GeofenceStatus: GeofenceStatus,
            User: User,
           

        },
        success: function (result, request) {
            //  Ext.Msg.alert('Success', ' Save Update Successfully..');
            if ((messageboxss())) {
                Ext.Viewport.add(messageboxss('Save Successfully'));
            }
            //Ext.getCmp('AccStatus').setValue(Ext.getCmp('AccStatusAdd').getValue());
            //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Reload...' });
            //var task = Ext.create('Ext.util.DelayedTask', function () {
            //    Ext.getStore('ResponderAlertGetByAcc').getProxy().setExtraParams({
            //        AccNo: AccountNo
            //    });
            //    Ext.StoreMgr.get('ResponderAlertGetByAcc').load();
            //  //  loadTrackerDevice();
            //    Ext.Viewport.unmask();
            //});
            //task.delay(1000);

            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
        },
        failure: function (result, request) {
            //   Ext.Msg.alert('Error', request);
            if ((messageboxss())) {
                Ext.Viewport.add(messageboxss('Error,' + request));
            }
        }
    });
}



function GeoFenceAreaInsert(AccountNo, FencePath, FenceName, Fencelenght, ShapeType, TrackID) {
    //  alert(ID);
    //  console.log(document.location.protocol + '//' + document.location.host + '/ResponderAlert/ResponderAlertInsertUpdate?ID=' + ID + '?AccountNo=' + AccountNo + '?ResponderName=' + ResponderName + '?ResponderRelationShip=' + ResponderRelationShip + '?ResponderPhoneNo=' + ResponderPhoneNo + '?ResponderEmail=' + ResponderEmail + '?Status=' + Status + '?GeofenceStatus=' + GeofenceStatus + '?User=' + User);
    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/GeoFenceArea/GeoFenceAreaInsert',

        params: {

            AccountNo: AccountNo,
            FencePath: FencePath,
            FenceName: FenceName,
            Fencelenght: Fencelenght,
            ShapeType: ShapeType,
            TrackID: TrackID,


        },
        success: function (result, request) {
            //  Ext.Msg.alert('Success', ' Save Update Successfully..');
            if ((messageboxss())) {
                Ext.Viewport.add(messageboxss('Save Successfully'));
            }
           
        },
        failure: function (result, request) {
            //   Ext.Msg.alert('Error', request);
            if ((messageboxss())) {
                Ext.Viewport.add(messageboxss('Error,' + request));
            }
        }
    });
}



function GeoFenceAreaUpdate(ID,AccountNo, FencePath, FenceName, Fencelenght, ShapeType) {
    //  alert(ID);
    //  console.log(document.location.protocol + '//' + document.location.host + '/ResponderAlert/ResponderAlertInsertUpdate?ID=' + ID + '?AccountNo=' + AccountNo + '?ResponderName=' + ResponderName + '?ResponderRelationShip=' + ResponderRelationShip + '?ResponderPhoneNo=' + ResponderPhoneNo + '?ResponderEmail=' + ResponderEmail + '?Status=' + Status + '?GeofenceStatus=' + GeofenceStatus + '?User=' + User);
    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/GeoFenceArea/GeoFenceAreaUpdate',

        params: {
            ID:ID,
            AccountNo: AccountNo,
            FencePath: FencePath,
            FenceName: FenceName,
            Fencelenght: Fencelenght,
            ShapeType: ShapeType,



        },
        success: function (result, request) {
            //  Ext.Msg.alert('Success', ' Save Update Successfully..');
            if ((messageboxss())) {
                Ext.Viewport.add(messageboxss('Save Successfully'));
            }

        },
        failure: function (result, request) {
            //   Ext.Msg.alert('Error', request);
            if ((messageboxss())) {
                Ext.Viewport.add(messageboxss('Error,' + request));
            }
        }
    });
}

function GeoFenceAreaDisabled(ID, AccountNo) {
    //  alert(ID);
    //  console.log(document.location.protocol + '//' + document.location.host + '/ResponderAlert/ResponderAlertInsertUpdate?ID=' + ID + '?AccountNo=' + AccountNo + '?ResponderName=' + ResponderName + '?ResponderRelationShip=' + ResponderRelationShip + '?ResponderPhoneNo=' + ResponderPhoneNo + '?ResponderEmail=' + ResponderEmail + '?Status=' + Status + '?GeofenceStatus=' + GeofenceStatus + '?User=' + User);
    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/GeoFenceArea/GeoFenceAreaDisabled',

        params: {
            ID: ID,
            AccountNo: AccountNo,
        },
        success: function (result, request) {
           //   Ext.Msg.alert('Success', ' Delete Successfully..');
            //if ((messageboxss())) {
            //    Ext.Viewport.add(messageboxss('Save Successfully'));
            //}
            Ext.getStore('geoFenceAreaSelectByAccNo').getProxy().setExtraParams({
                AccountNo: AAccountNo,
            });
            Ext.StoreMgr.get('geoFenceAreaSelectByAccNo').load();
        },
        failure: function (result, request) {
            //   Ext.Msg.alert('Error', request);
            if ((messageboxss())) {
                Ext.Viewport.add(messageboxss('Error,' + request));
            }
        }
    });
}



function InsertUpdateSetting(AccountNo, TrackID, MarkerPoint, PanMap, AttachedLabel, Interval)
    {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/Setting/SettingInsertUpdate',

        params: {

            AccountNo: AccountNo,
            TrackID: TrackID,
            MarkerPoint: MarkerPoint,
            PanMap: PanMap,
            AttachedLabel: AttachedLabel,
            Interval: Interval
          


        },
        success: function (result, request) {
            Ext.Msg.alert('Saved', 'Save Successfully.!!');
           

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


function ReversegeocodeAddress(Longituded, Latitude) {
    //alert(longi);
  
    var lat = parseFloat(Latitude);
    var lng = parseFloat(Longituded);
    var latlng = new google.maps.LatLng(lat, lng);
    geocoderLiveTracking.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                

              //  Ext.getCmp('btnsingleTrackingOverViewMapGeocodeAddressWeb').setHtml('<div class="transbox"><p><font size="2">' + results[1].formatted_address + '</font></p></div>');
                Ext.getCmp('btnsingleTrackingOverViewMapGeocodeAddress').setHtml('<div class="transbox"><p><font size="2"><u>' + results[1].formatted_address + '</u></font></p></div>');
                Ext.getCmp('btnsingleTrackingStreetViewMapgeocodeAddress').setHtml('<div class="transbox"><p><font size="2">' + results[1].formatted_address + '</font></p></div>');

                //infowindow.setContent(results[1].formatted_address);
               // infowindow.open(map, marker);
            } else {
              //  Ext.getCmp('btnsingleTrackingOverViewMapGeocodeAddressWeb').setHtml('<div class="transbox"><p><font size="2">No results found</font></p></div>');
                Ext.getCmp('btnsingleTrackingOverViewMapGeocodeAddress').setHtml('<div class="transbox2"><p><font size="2"><u>No Address found</u></font></p></div>');
                Ext.getCmp('btnsingleTrackingStreetViewMapgeocodeAddress').setHtml('<div class="transbox"><p><font size="2"><u>No Address found</u></font></p></div>');

               // alert("No results found");
            }
        } else {
           // alert("Geocoder failed due to: " + status);
         //   Ext.getCmp('btnsingleTrackingOverViewMapGeocodeAddressWeb').setHtml('<div class="transbox"><p><font size="2">Geocoder failed due to:' + status + '</font></p></div>');
            Ext.getCmp('btnsingleTrackingOverViewMapGeocodeAddress').setHtml('<div class="transbox2"><p><font size="2"><u>Geocoder failed due to:' + status + '</u></font></p></div>');
            Ext.getCmp('btnsingleTrackingStreetViewMapgeocodeAddress').setHtml('<div class="transbox"><p><font size="2"><u>Geocoder failed due to:' + status + '</u></font></p></div>');

        }
    });


}





function MultiSignalReversegeocodeAddress(Longitude, Latitude) {
    //alert(longi);
    console.log(Longitude + '--xxxxxxx88mmmmmmmmmmmmmmmmmmmd-' + Latitude);
    var geocodeAdd;
    var lat = parseFloat(Latitude);
    var lng = parseFloat(Longitude);
    var latlng = new google.maps.LatLng(lat, lng);
    geocoderMultiLiveTracking.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {


                //  Ext.getCmp('btnsingleTrackingOverViewMapGeocodeAddressWeb').setHtml('<div class="transbox"><p><font size="2">' + results[1].formatted_address + '</font></p></div>');
                // Ext.getCmp('btnsingleTrackingOverViewMapGeocodeAddress').setHtml('<div class="transbox2"><p><font size="2"><u>' + results[1].formatted_address + '</u></font></p></div>');
              //  geocodeAdd = { address: status.Placemark[1].address };
              //  geocodeAdd = { address: results[1].formatted_address };
             //   geocodeAdd = (results[1].formatted_address);
                console.log(results[1].formatted_address);
                initContinued(results[1].formatted_address);
              
                //infowindow.setContent(results[1].formatted_address);
                // infowindow.open(map, marker);
            } else {
                //  Ext.getCmp('btnsingleTrackingOverViewMapGeocodeAddressWeb').setHtml('<div class="transbox"><p><font size="2">No results found</font></p></div>');
               // Ext.getCmp('btnsingleTrackingOverViewMapGeocodeAddress').setHtml('<div class="transbox2"><p><font size="2"><u>No results found</u></font></p></div>');
                geocodeAdd = 'No results found';
                // alert("No results found");
            }
        } else {
            // alert("Geocoder failed due to: " + status);
            //   Ext.getCmp('btnsingleTrackingOverViewMapGeocodeAddressWeb').setHtml('<div class="transbox"><p><font size="2">Geocoder failed due to:' + status + '</font></p></div>');
           // Ext.getCmp('btnsingleTrackingOverViewMapGeocodeAddress').setHtml('<div class="transbox2"><p><font size="2"><u>Geocoder failed due to:' + status + '</u></font></p></div>');
           // geocodeAdd = status;
        }
    });
  //  return geocodeAdd;

}



function initContinued(addr) {
    //  alert(addr);


   // setTimeout(function () {


      //  var content = "<b>Track ID: " + TrackID + '<br>' + "Track Item: " + TrackItem + "<BR>Millage:" + Spare1 + "<BR> Current Speed:" + Speed + "<br>Max Speed:" + Speed + "<br>Date:" + DateDT + "<BR>Geocode Add:" + MultipleGeocodeAdd[1] + "</b>";


 MultipleGeocodeAdd.push(addr);
 console.log('FUNCT Length of array:' + MultipleGeocodeAdd.length);



   // }, 500);
   
}





function MultiSignalReversegeocodeAddressIsLoadNo(Longitude, Latitude, TrackID, TrackItem, Spare1, Speed, DateDT) {
    //alert(longi);
    console.log(Longitude + '--xxxxxxx88mmmmmmmmxxxxxxxxxxxxxxxxxxxxxxxxxxxmmmmmmmmmmmd-' + TrackItem);
    var geocodeAdd;
    var lat = parseFloat(Latitude);
    var lng = parseFloat(Longitude);
    var latlng = new google.maps.LatLng(lat, lng);
    geocoderMultiLiveTracking.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {

                console.log(results[1].formatted_address);
                MultipleGeocodeAdd[0] = results[1].formatted_address;
                MultipleGeocodeAdd[1] = TrackID;
                MultipleGeocodeAdd[2] = TrackItem;
                MultipleGeocodeAdd[3] = Spare1;
                MultipleGeocodeAdd[4] = Speed;
                MultipleGeocodeAdd[5] = DateDT;
              //  initContinued(results[1].formatted_address, TrackID, TrackItem, Spare1, Speed, DateDT);
            } else {
                geocodeAdd = 'No results found';
                // alert("No results found");
            }
        } else {
            // alert("Geocoder failed due to: " + status);
            //   Ext.getCmp('btnsingleTrackingOverViewMapGeocodeAddressWeb').setHtml('<div class="transbox"><p><font size="2">Geocoder failed due to:' + status + '</font></p></div>');
            // Ext.getCmp('btnsingleTrackingOverViewMapGeocodeAddress').setHtml('<div class="transbox2"><p><font size="2"><u>Geocoder failed due to:' + status + '</u></font></p></div>');
            // geocodeAdd = status;
        }
    });
    //  return geocodeAdd;

}




