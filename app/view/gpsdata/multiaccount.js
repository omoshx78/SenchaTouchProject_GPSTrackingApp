
Ext.define('MyGPS.view.gpsdata.multiaccount', {
    //extend: 'Ext.dataview.List',
    //   extend:'Ext.List',
    extend: 'Ext.dataview.List',
    xtype: 'listmultiaccount',
    // scrollToTopOnRefresh: true,
    // xtype: 'list',
    // alias:'mainPanel',
    alias: 'widget.TrackieItemes',
    requires: [
         'Ext.Container',
         'Ext.MessageBox',
         'Ext.Panel',
         'Ext.Toolbar',
         'Ext.event.publisher.Dom',
         'Ext.TitleBar',],


    //xtype: 'TrackieItemed',
   

    config: {
        store: 'TrackingItemList',
        id: 'TrackieItemedq',
        mode: 'MULTI',
        itemTpl: '<div class="myContent">' +
           '<div><b>{TrackItem}</b></div>' +
           '<div>{TrackID}</div>' +
           '</div>',


      

    },
    //listeners: {
    //    itemsingletap: function (list, idx, target, record, evt) {
    //        // alert(record.get('TrackID'));
    //       // setTimeout(function () { record.deselect(index); }, 500)
    //        //var node = list.selected.item();
    //        alert(record.select(idx));
    //        //var names = [];
    //        //Ext.Array.each(record, function (item) {
    //        //    names.push(record.get('TrackID'));
    //        //}); // each()
    //        //Ext.Msg.alert('You selected ' + list.selected.items.length + ' item(s)', '<ul>' + names.join('') + '</ul>');
    //    },
    //},

    
 
    
    
    //onItemDisclosure: function (record, btn, index) {
    //    alert(record.get('TrackID'));
    //},

    //onItemTap: function (view, index, target, record, event) {
    //    console.log('Item was tapped on the Data View');
    //    console.log(view, index, target, record, event);
    //    Ext.Msg.alert('', 'The country code selected is: ' + index);
    //   // Ext.Msg.alert('', 'The country code selected is: ' + record.get('TrackID'));
    //},
    listeners: {
        select: function (list, records) {
            var str;
            str = records.get('TrackID') + ",";
            str += str;
            var names = [];
            names.push(records.get('TrackID'));
            //Ext.Array.each(records, function (item) {
            //    names.push(records.get('TrackID'));
            //}); // each()
           // Ext.Msg.alert('You selected ' + list.selected.items.length + ' item(s)', '<ul>' + str + '</ul>');

            var ii;
            for (ii = 0; ii < list.selected.items.length; ii++) {
               // Ext.Msg.alert('You selected ' + list.selected.items.length + ' item(s)', '<ul>' + names[ii] + '</ul>');
                if ((messageboxss())) {
                    Ext.Viewport.add(messageboxss('selected ' + list.selected.items.length + ' item(s)', '<ul>' + names[ii] + '</ul>'));
                }
            }
          //  Ext.Msg.alert('You selected ' + records.length + ' item(s)', '<ul>' + names.join('') + '</ul>');
        } // selectionchange
    } ,
});