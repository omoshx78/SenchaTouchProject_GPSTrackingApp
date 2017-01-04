Ext.define('MyGPS.view.gpsdata.multitrackingaccount', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'multitrackiacc',
    id: 'multitrackiaccID',
  
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
                xtype: 'toolbar',
                docked: 'top',
                title: 'Tracking List Item',
                //  minHeight: '60px',
                items: [
                    {
                        ui: 'action',
                        xtype: 'button',
                        id: 'backButton',
                        text: 'Back',
                        handler: function () {
                            // alert("gxdddssssx");
                            Ext.getCmp('multitrackiaccID').destroy();
                        

                        }

                    },

                
                ],
            },
             {
                 xtype: 'toolbar',
                 docked: 'bottom',

                 //  minHeight: '60px',
                 items: [

                      {
                          xtype: 'spacer',
                          // width: 50

                      },
                     {
                         align: 'center',
                         // width: 50,
                         ui: 'action',
                         xtype: 'button',
                         id: 'runButton',
                         text: '  Start Tracking  ',
                         handler: function () {
                             // alert("cvfs");
                             var ii;
                             var strdeviceid = '';
                             for (ii = 0; ii < trackingid.length; ii++) {
                                 // alert(trackingid[ii]);

                                 // alert("counter Account :"+ii);
                                 strdeviceid += trackingid[ii] + ',';
                                 //Ext.Msg.alert('You selected ' + trackingid.length + ' item(s)', '<ul>' + trackingid[ii] + '</ul>');
                             }
                             // localStorage.setItem('ImeiNo', strdeviceid);
                             originImeiNo = strdeviceid;
                             countmultiple = trackingid.length;
                            
                             startMultiple();
                             // localStorage.setItem('MultiTrackRun', "On");
                            // console.log('Multvvi-XXXXXXXXXXX--|' + strdeviceid + 'Counter :' + trackingid.length);
                            isTrackingRun = "On";
                             // originImeiNo = strdeviceid;

                            if (trackingid.length >= 2) {
                               
                                 originImeiNo = strdeviceid;
                                 Ext.Viewport.mask({ xtype: 'loadmask', message: 'Detecting(' + trackingid.length + ') Signal Location..Please Wait.' });
                                 var task = Ext.create('Ext.util.DelayedTask', function () {

                                    // _value.show();


                                     //if (!this.overlay) {
                                     //    this.overlay = Ext.Viewport.add(_value
                                     //);

                                     //}
                                     //this.overlay.show();


                                     trackingid.length = 0;
                                     localStorage.setItem('MultiTrackRun', 'On');
                                     Ext.getCmp('multitrackiaccID').destroy();
                                     // Ext.Viewport.setActiveItem(Ext.create('MyGPS.view.gpsdata.multitrackingaccount'));
                                   //  Ext.Viewport.setActiveItem(Ext.create('MyGPS.view.Master'));

                                     Ext.Viewport.unmask();
                                 });
                                 task.delay(5000);
                                 return;
                             } else if (trackingid.length <= 1) {
                                 originImeiNo = '';
                                 isTrackingRun = "Off";
                                // Ext.Msg.alert("Invalid Process.!<br>Required to Select More than One Item");
                                 if ((messageboxslong())) {
                                     Ext.Viewport.add(messageboxslong('Required to Select More than One Item'));
                                 }

                                 trackingid.length = 0;
                                 Ext.getCmp('multitrackiaccID').destroy();
                                 Ext.Viewport.setActiveItem(Ext.create('MyGPS.view.gpsdata.multitrackingaccount'));
                                 //  Ext.getStore('TrackingItemList').refresh();
                             }



                         }




                     },
                       {
                           xtype: 'spacer',
                           // width: 50

                       },
                 
                 ],
             },
             {
                 xtype: 'label',
                 //  hidden: true,
                 id: 'Queue_GetDetailQueueLabel',
                 html: 'Registered GPS tracking Accoount<br>Tap and Select Tracking item'
             },

            {
                xtype: 'list',
                //  itemTpl: '{title},{author}',
                flex: 1,    //  add a flex property

                store: 'TrackingItemList',
                id: 'TrackieItemMultiple',
                mode: 'MULTI',
                itemTpl: '<div class="myContent">' +
                   '<div><b>{TrackItem}</b></div>' +
                   '<div>{TrackID}</div>' +
                    '<div style="display: none;">{DeviceID}</div>' +
                   '</div>',

                // xtype: 'list',
                //store:'itemsStore',
                height: '100%',
                listeners: {
                    select: function (list, records) {
                        trackingid.push(records.get('DeviceID'));
                      
                    },
                    deselect: function (list, records) {
                        console.log(records.get('DeviceID'));
                        //  trackingid.remove(records.get('TrackID'));

                        var value_to_remove = records.get('DeviceID');
                        trackingid.splice(trackingid.indexOf(value_to_remove), 1);

                    }
                },
               
            }
        ]
    }
});
var countmultiple;
var trackingid = [];
var Longitude;
var Latitude;
var Speed;
var DateS;
var TrackID;

var IMEI_no;
var Speed;
var GPSSimNumber;

var BatteryReading;
var TrackItem;
var TrackItemType;
var GPSModel;
var AccountNo;
var DateDT;
var originImeiNo;
var isTrackingRunss;

function loadMultiplesignal(ImeiNoS) {
    // loadDatastore();
    Longitude = '';
    Latitude = '';
    Speed = '';
    DateS = '';
    TrackID = '';

    //  alert(ImeiNoS);

    Ext.getStore('multipletrackingsignalpoint').getProxy().setExtraParams({
        ImeiNo: ImeiNoS


    });


    Ext.StoreMgr.get('multipletrackingsignalpoint').load();




    var myStore = Ext.getStore('multipletrackingsignalpoint');


    var co = myStore.getCount() - 1;
    var ii;

    if (co > 1) {
        alert(co);

        for (ii = 0; ii < co; ii++) {
            var modelRecord = myStore.getAt(ii);
            Latitude = modelRecord.get('Latitude');
            Longitude = modelRecord.get('Longitude');
            Speed = modelRecord.get('Speed');
            TrackID = modelRecord.get('TrackID');


            IMEI_no = modelRecord.get('IMEI_no');;

            GPSSimNumber = modelRecord.get('GPSSimNumber');;

            BatteryReading = modelRecord.get('BatteryReading');;
            TrackItem = modelRecord.get('TrackItem');;
            TrackItemType = modelRecord.get('TrackItemType');;
            GPSModel = modelRecord.get('GPSModel');;
            AccountNo = modelRecord.get('AccountNo');;
            DateDT = modelRecord.get('DateDT');;

            alert("infos  :" + TrackID + ' - ' + Latitude + '-' + Longitude + '-' + Speed + '-' + IMEI_no + '-' + GPSSimNumber + '-' + BatteryReading + '-' + TrackItem);
        }


    }






}





function returncount() {

    Ext.StoreMgr.get('multipletrackingsignalpoint').load();

    var myStore = Ext.getStore('multipletrackingsignalpoint');
    var modelRecord = myStore.getAt(0);
    var co = myStore.getCount();
    return co;

}







function loadDatastore(imeiNo) {


    var _DataStore_multipletrackingsignalpoint = Ext.create('Ext.data.Store', {
        model: 'MyGPS.model.multipletrackingsignal',

        proxy: {

            //type: 'ajax',
            //url: document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/Signals/GetSignalsMultiples?AccNo=C02',


            type: 'ajax',
            // url: document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/Signals/GetSignalsMultiples',
            url: document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/Signals/GetSignalsMultiples?ImeiNo=MNP-1933',

            actionMethods: {
                read: 'GET'
            },

            // url: 'http://192.168.0.105:9007/TrackingAppAPI/Signals/GetSignals?DeviceID=MNP-1933',

            // url: ip + 'TrackingAppAPI/Signals/GetSignalsMultiple?AccNo=C02',

            // url: 'http://192.168.0.105:9007/TrackingAppAPI/Signals/GetSignalsMultiple?AccNo=C02',

            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },
            listeners: {
                exception: function (proxy, response, orientation) {
                    console.error('Failure Notificssssssation', response.responseText);
                    Ext.Msg.alert('Loading failed', response.statusText);
                    //if ((messageboxss())) {
                    //    Ext.Viewport.add(messageboxss('Loading failed,' + response.statusText));
                    //}
                }
            }

        },
        autoLoad: true
    });




    _DataStore_multipletrackingsignalpoint.load();

    var bangsa;
    var store2 = _DataStore_multipletrackingsignalpoint.getAt(0);
    console.log('dddddddddddd--' + store2);
    // bangsa = store2.get('Longitude');
    if (store2 != null) {
        console.log(store2);
        bangsa = store2.get('Longitude');
    }
   

    alert(bangsa);

}