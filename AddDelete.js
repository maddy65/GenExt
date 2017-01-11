onclickBtn: function(button, event, options) {
    var win = button.up('window');
    var formPanel = win.down('form');
    var store = this.List().getStore();
    if (formPanel.getForm().isValid()) {
        Ext.Ajax.request({
            url: 'URL',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            params : Ext.JSON.encode(formPanel.getValues()),
            success: function(conn, response, options, eOpts) {
                var result = Packt.util.Util.decodeJSON(conn.responseText);
                if (result.success) {
                    Packt.util.Alert.msg('Success!', 'Saved.');
                    store.load();
                    win.close();                      
                } else {
                    Packt.util.Util.showErrorMsg(result.msg);
                }
            },
            failure: function(conn, response, options, eOpts) {
                // TODO get the 'msg' from the json and display it
                Packt.util.Util.showErrorMsg(conn.responseText);
            }
        });
    }
},



onDeleteClicked: function (button, e, options) {
    var grid = this.List();
    var record = grid.getSelectionModel().getSelection();
    var store = grid.getStore();
    if (store.getCount() >= 1 && record[0]) {
        var idToDelete = record[0].get('id');
        Ext.Msg.show({
             title:'Delete?',
             msg: 'Are you sure you want to delete ID(' + idToDelete + ')?',
             buttons: Ext.Msg.YESNO,
             icon: Ext.Msg.QUESTION,
             fn: function (buttonId){
                if (buttonId == 'yes'){
                    Ext.Ajax.request({
                        url: 'URL',
                        method: 'GET',
                        success: function(conn, response, options, eOpts) {
                            var result = Packt.util.Util.decodeJSON(conn.responseText);
                            if (result.success) {
                                Packt.util.Alert.msg('Success', 'The stock was deleted.');
                                store.load();
                            } else {
                                Packt.util.Util.showErrorMsg(conn.responseText);
                            }
                        },
                        failure: function(conn, response, options, eOpts) {
                            Packt.util.Util.showErrorMsg(conn.responseText);
                        }
                    });
                }
             }
        });
    } else {
        Ext.Msg.show({
            title:'Test',
            msg: 'Select.',
            buttons: Ext.Msg.OK,
            icon: Ext.Msg.WARNING
        });
    }
}
