
var _singelTrackingMap_MilageCountAlertHistoryDetail;
Ext.define('MyGPS.view.custompanel.SingleTrackingMap_MilageCountAlertHistoryDetail', {

});

function SingleTrackingMap_MilageCountAlertHistoryDetail() {



    _singelTrackingMap_MilageCountAlertHistoryDetail =
        Ext.create('Ext.Panel', {
            draggable: false,
            centered: true,
           // scrollable: true,
            zIndex:50,
            //height: 343,
            //width: 450,
            // flex: 1,
            width: '100%',
            height: '100%',
            modal: true,
            hideOnMaskTap: false,
            scrollable: {
                direction: 'vertical',
                directionLock: true
            },
            showAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'ease-out'
            },
            hideAnimation: {
                type: null,
                duration: 250,
                easing: null
            },
            //  config: {
            //  style: "background-color: #57A0DC; color:white;",
            items: [

                 {

                     xtype: 'toolbar',
                     title: 'Milage Alert History',
                     docked: 'top',

                 },
                 {

                     xtype: 'fieldset',
                     title: 'Milage Alert History Details',
                     margin:'0 -8 0 0',
                     defaults: {
                         labelWidth: '40%',

                     },


                     items: [

                         {
                             xtype: 'textfield',
                             id: 'MilageCountAlertHistoryDetail_Milage',
                             label: 'Milage',
                             labelWrap: true,
                             disabled: true,

                         },
                                                                  {
                                                                      xtype: 'textfield',
                                                                      id: 'MilageCountAlertHistoryDetail_AlertDate',
                                                                      label: 'Alert Date',
                                                                      disabled: true,
                                                                      labelWrap: true,
                                                                  },
                                                                 {
                                                                     xtype: 'textfield',
                                                                     id: 'MilageCountAlertHistoryDetail_RespondStatus',
                                                                     label: 'Respond Status',
                                                                     disabled: true,
                                                                     labelWrap: true,
                                                                 },
                                                                 {
                                                                     xtype: 'textfield',
                                                                     id: 'MilageCountAlertHistoryDetail_RespondDate',
                                                                     label: 'Responded Date',
                                                                     disabled: true,
                                                                     labelWrap: true,
                                                                 },
                                                                   {
                                                                       xtype: 'textareafield',
                                                                       id: 'MilageCountAlertHistoryDetail_MilageCountNote',
                                                                       label: 'Notes',
                                                                       placeHolder: 'Notes about milage service oil engine or etc',
                                                                       labelWrap: true,
                                                                       clearIcon: true
                                                                   },
                                                                    


                                                           {
                                                               xtype: 'container',
                                                               id: 'MilageCountAlertHistoryDetail_ReceiptAttached',
                                                               margin: '0 0 0 10',
                                                               layout: {

                                                                   type: 'vbox',
                                                               
                                                               },
                                                               items: [
                                                                    {
                                                                        id: 'MilageCountAlertHistoryDetail_labelAttachment',
                                                                     //   margin: '0 0 0 -5',
                                                                        //width: 160,
                                                                        //height: 55,
                                                                        //ui: 'plain',
                                                                        //  ui: 'action',
                                                                        //   margin: '4 0 0 -2',
                                                                        //  xtype: 'button',
                                                                        //  margin: '-20 0 0 0',
                                                                        html: '<font size="3" color="black"><b><u>Milage Services Receipt</b></font>',


                                                                        //html: '<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Status:Static (11h20m24s)</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img src="/resources/icons/protonWTP2681.jpg" style="width:228px;height:150px;"></td> </tr></table>',
                                                                    },
                                                                {
                                                                   // margin: '0 10 0 0',
                                                                    html: '<input type=file id="fileOpenProfileEdit" onchange="startReadProfileEdit()"/>',
                                                                }
                                                               ]

                                                           },
                                                             {
                                                                 id: 'MilageCountAlertHistoryDetail_labelMilageServicePictureReciept',
                                                                 margin: '0 0 0 10',
                                                                 //width: 160,
                                                                 //height: 55,
                                                                 //ui: 'plain',
                                                                 //  ui: 'action',
                                                                 //   margin: '4 0 0 -2',
                                                                 //  xtype: 'button',
                                                                 //  margin: '-20 0 0 0',
                                                                 html: '<font size="3" color="black"><b><u>Receipt Image</b></font>',


                                                                 //html: '<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Status:Static (11h20m24s)</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img src="/resources/icons/protonWTP2681.jpg" style="width:228px;height:150px;"></td> </tr></table>',
                                                             },

            {

                xtype: 'button',
                //  bodyPadding: 10,
                id:'btnMilageCountAlertHistoryDetail_PictureMilageServicePictureReciept',
                //height: 280,
                //width: 320,
                margin: '0 0 0 0',
                //   left:30,
                ui:'plain',
                height: '70%',
                width: '93%',
                html: '<div style="border: 2px solid black;"><img src="resources/icons/Service-Receipts-Ferrari-6.jpg" style="max-height:100%; max-width:100%;"/></div>',
              //  html: '<div style="border: 2px solid black;"><img src="resources/icons/Service-Receipts-Ferrari-6.jpg" /></div>',
            },
             {
                 xtype: 'textfield',
                 id: 'MilageCountAlertHistoryDetail_LastUpdate',
                 label: 'Last Update',
                 disabled: true,
                 labelWrap: true,
             },
               {
                   xtype: 'textfield',
                   id: 'MilageCountAlertHistoryDetail_LastUpdateBy',
                   label: 'Last Update By',
                   disabled: true,
                   labelWrap: true,
               },
                     ]
                 },

                      {

                          xtype: 'toolbar',
                          docked: 'bottom',

                          items: [
                               {
                                   //docked: 'right',
                                   // width: 50,
                                   ui: 'action',
                                   xtype: 'button',
                                   id: 'MilageCountAlertHistoryDetailCancel',
                                   text: 'Cancel',
                                   handler: function () {

                                       SingelTrackingMap_MilageCountAlertHistoryDetaiHide();
                                   }
                               },
                               {
                                   xtype: 'spacer'
                               },
                               {
                                   ui: 'action',
                                   xtype: 'button',
                                   id: 'MilageCountAlertHistoryDetailsave',
                                   text: 'Save',

                                   handler: function () {


                                   }
                               },




                          ]

                      },



            ],


        });



    return _singelTrackingMap_MilageCountAlertHistoryDetail;





}

function SingelTrackingMap_MilageCountAlertHistoryDetailShow()
{
    Ext.Viewport.remove(_singelTrackingMap_MilageCountAlertHistoryDetail);
    this.overlay = Ext.Viewport.add(SingleTrackingMap_MilageCountAlertHistoryDetail());
    this.overlay.show();
}

function SingelTrackingMap_MilageCountAlertHistoryDetaiHide()
{
    _singelTrackingMap_MilageCountAlertHistoryDetail.hide();
}





function MillageCountAlertHistory_LoadByDeviceIDAccountNo(_DeviceID, _AccountNo) {
    _DataStore_MilageCountAlertHistoryStore_LoadByDeviceIDAccountNo.removeAll();
    _DataStore_MilageCountAlertHistoryStore_LoadByDeviceIDAccountNo.getProxy().setExtraParams({
        DeviceID: _DeviceID,
        AccountNo: _AccountNo
    });
   
    _DataStore_MilageCountAlertHistoryStore_LoadByDeviceIDAccountNo.load({

        callback: function (record, operation, success) {
            if (success) {
                var store = _DataStore_MilageCountAlertHistoryStore_LoadByDeviceIDAccountNo.getAt(0);                
                
            } else {


            }
        }

    });
}





function MillageCountAlertHistory_LoadDetails(MilageCountString, AlertDate, RespondStatus, RespondDate, MilageCountNote, LastUpdate, LastUpdateBy) {
    Ext.getCmp('MilageCountAlertHistoryDetail_Milage').setValue(MilageCountString)
    Ext.getCmp('MilageCountAlertHistoryDetail_AlertDate').setValue(AlertDate)
    Ext.getCmp('MilageCountAlertHistoryDetail_RespondStatus').setValue(RespondStatus)
    Ext.getCmp('MilageCountAlertHistoryDetail_RespondDate').setValue(RespondDate)
    Ext.getCmp('MilageCountAlertHistoryDetail_MilageCountNote').setValue(MilageCountNote)
    Ext.getCmp('MilageCountAlertHistoryDetail_LastUpdate').setValue(LastUpdate)
    Ext.getCmp('MilageCountAlertHistoryDetail_LastUpdateBy').setValue(LastUpdateBy)
    

}