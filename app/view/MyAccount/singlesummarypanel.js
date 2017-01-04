Ext.define('MyGPS.view.MyAccount.singlesummarypanel', {
    extend: 'Ext.Panel',
    requires: "MyGPS.view.MyAccount.singlesummary",
    alias: "widget.todomapscard",
    xtype:"panelsinglesummary",


    config: {
        styleHtmlContent: true,
        layout: 'fit',
        items: [

             {
                 xtype: 'container',
                 docked: 'top',
                 height: '100%',
                 itemId: 'bottom',
                 width: '100%',
                 layout: {
                     type: 'vbox'
                 },
                 items: [

                     {
                         xtype: 'panel',
                         //flex: 1,
                         height:20,
                         itemId: 'left_blue_bottoma',
                         style: 'border-bottom:1px solid;',
                         layout: {
                             type: 'fit'
                         },
                         xtype: 'label',
                         id: 'InfoSingleSummarylabelUserAcc',
                         html: 'Last Location as at:'
                     },




                     {
                     xtype: 'panel',
                         // flex: 2,
                         height:"75%",
                     itemId: 'left_blue_bottom',
                     style: 'border-bottom:1px solid;',
                     layout: {
                         type: 'fit'
                     },
                     xtype: "googlemapscard"      
                 
                 }, {
                     xtype: 'panel',
                     height: "25%",
                     itemId: 'right_yellow_bottom',
                     style: 'border-bottom:1px solid;background-color:#57A0DC;',
                     layout: {
                         type: 'fit'
                     },
                     //<td class="tdgpslabel">Tracked Item</td>
                    
                     id: 'InfoSingleSummaryUserAcc',
                     html: '<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary</b></center></font></td></tr><tr> <td class="tdgpslabel">Last Tracked On</td> <td class="tdgpslabel">22-1-2015 20:21</td></tr><tr> <td class="tdgpslabel">Last Tracked By</td> <td class="tdgpslabel">Mizi</td></tr><tr> <td class="tdgpslabel">LIcence Status</td> <td class="tdgpslabel">Activated</td></tr></table>',
                    // html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
                 }]
             },





        //    {
        //    docked: 'bottom',
        //    xtype: 'toolbar',
        //    ui: "light",
        //    title: 'Maps page',
        //    items: [
        //        {
        //            xtype: "button",
        //            ui: "back",
        //            text: "back",
        //            action: 'ButtonBackToHomeClicked'
        //        }]
        //},
        //    {
        //        xtype: "googlemapscard"      
        //        }
        ]
    }



});