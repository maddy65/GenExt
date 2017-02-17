Ext.create('Ext.grid.Panel', {
            renderTo: Ext.getBody(),
            width: 400,
            height: 500,
            title: 'itemcontextmenu',

            store: {
                fields: ['name', 'email', 'phone'],
                data: [{
                    'name': 'Lisa',
                    "email": "lisa@simpsons.com",
                    "phone": "555-111-1224"
                }, {
                    'name': 'Bart',
                    "email": "bart@simpsons.com",
                    "phone": "555-222-1234"
                }, {
                    'name': 'Homer',
                    "email": "homer@simpsons.com",
                    "phone": "555-222-1244"
                }, {
                    'name': 'Marge',
                    "email": "marge@simpsons.com",
                    "phone": ""
                }]
            },
            columns: [{
                text: 'Name',
                dataIndex: 'name',
                flex: 1
            }]
        });

        var contextMenu = Ext.create('Ext.menu.Menu', {
            width: 200,
            items: [{
                text: 'Alert',
                handler: function() {
                    var record = grid ? grid.getSelection()[0] : null;
                    if (!record) {
                        return;
                    }

                    alert(record.get('name'));
                }
            }]
        });

        grid.on("itemcontextmenu", function(grid, record, item, index, e) {
            e.stopEvent();
            contextMenu.showAt(e.getXY());
        });
    }
});
