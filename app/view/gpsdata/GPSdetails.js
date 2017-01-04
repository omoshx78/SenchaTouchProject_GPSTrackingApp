Ext.define("MyGPS.view.gpsdata.GPSdetails", {
    extend: 'Ext.Container',
    xtype: 'GpsDetail',
    //requires: ['Ext.Map', 'Ext.TitleBar'],
    config: {
        layout: {
            type: 'vbox'
        },

        items: [
                          {
                              html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Proton Persona Car</td> </tr>    <tr > <td class="tdspeed">80km/h</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tde">Current Speed</td> <td class="tdk">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-12-2014 2:06AM</td> </tr>  </table>',
                          },


        ]
    }
});