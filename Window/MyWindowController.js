Ext.define('MyApp.view.Field.MyWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.MyWindowcontroller',
    init: function() {
        var me = this;
		var saveBtn=me.view.down('button[name=submit]');
		var Textfield = me.view.down('textfield[name=Text]');
        me.control({
            "button[name=submit]": {
                click: me.onSaveBtns
            },
            "button[name=cancel]": {
                click: me.onClose
            },
            'textfield[name=Text]': {
                change: function(thisEl, newVal, oldVal) {
                   // Code for Change as requirment 
                }
            },
            'combobox': {
                change: function(thisEl, newVal, oldVal) {
                    // Code for change in combo as per requirmnet. 
                }
            },
            'grid[primary]': {
                selectionchange: function(cmp,selected) {
					saveBtn.setDisabled(!selected.length||domainfield.getValue().length!=2);
                }
            }
        });
    },
    
    /*
     * The code below will work on click of save.
     */
    onSaveBtns: function(btn) {
        var me = this,
            parentgrid = me.view.parentgrid, // 
            window = btn.up("window");
        var url = SomeUrl
        PC.Ajax.request({
            url: url,
            params: {
                'strIPXML': strIPXml
            },
            me: me,
            parentgrid: parentgrid,
            headers: {
                "Accept": "application/json; charset=utf-8",
                'X-HTTP-Method-Override': "PUT"
            },
            _success: function(response, args) {
                this.parentgrid.getStore().reload();
                window.close();
            }
        });
    },
    onClose: function(btn) {
        var window = btn.up("window");
        window.close();
    }
});