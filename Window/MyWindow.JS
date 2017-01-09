Ext.define("MyApp.view.Field.MyWindow", {
    extend: "Ext.window.Window",
    alias: 'widget.MyWindow',
    requires: [
        'MyApp.view.overrides.UpperCaseTextField'
    ],
    layout: 'fit',
    scrollable: true,
    layout: 'fit',
    modal: true,
    requires: [
        "MyApp.view.datasetLevel.MyWindowController"
    ],
    controller: 'MyWindowcontroller',
    initComponent: function() {
        var me = this;
        combstore = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: [{
                name: 'value',
                mapping: "ITEMID",
                type: 'string'
            }, {
                name: 'name',
                mapping: "TITLE",
                type: 'string'
            }],
            proxy: new Ext.data.HttpProxy({
                type: 'Ajax',
                actionMethods: {
                    read: "POST"
                },
                url: SomeUrl,
                headers: {
                    'Accept': 'application/json; charset=utf-8'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'R.D.Result'
                },
                extraParams: {
                    strIPXML: strIPXML
                }
            })
        });
        me.tbar = [
            {
                xtype: 'uppercasetextfield',
                labelAlign: "left",
                name: "Text",
                maxLength : 2,
                enforceMaxLength : true,
                fieldLabel: "Text"
            }, {
                fieldLabel: Combo,
                xtype: 'combobox',
                queryMode: 'local',
                editable: false,
                window: me,
                name: 'class',
                forceSelection: true,
                allowBlank: false,
                displayField: 'name',
                valueField: 'value',
                disabled: true,
                store: combstore
            }
        ];
        me.items = [{
            xtype: 'container',
            name: 'gridtabs',
            layout:'fit',
            autoScroll:true
        }];
        me.buttons = ['->', {
            text: "Submit",
            name: "submit",
            hidden: me.readOnly,
            disabled: true
        }, {
            text: Close,
            name: "cancel"
        }];
        me.callParent(arguments);
    }
})
