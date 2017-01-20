NewRecords: function(btn){
            var oldGrid = btn.up('grid'),
                newStore,
                newColumns = [], newFields = [], newData = [], //gridWidth = 0,
                viewport = Ext.getBody(),
                viewportWidth = viewport.getWidth(),
                viewportHeight = viewport.getHeight();
               
            var newdeleteColumn = {
                    xtype:'actioncolumn',
                    width:200,
                    items: [{
                        icon: 'someImageURL',
                        tooltip: 'delete',
                        handler: function(grid, rowIndex, colIndex) {
                            grid.getStore().removeAt(rowIndex); // In Case you need to delete. 
                        }
                    }]
                };

            Ext.Array.each(oldGrid.getColumns(), function(column, index, columns){
                newColumns.push({
                    text: column.text,
                    width: column.width,
                    align: column.align,
                    dataIndex: column.dataIndex,
                    sortable: false,
                    hidden: column.hidden,
                });
                newFields.push({
                    name: column.dataIndex,
                    mapping: '@' + column.dataIndex
                });
            });
            newColumns.push(newdeleteColumn);
            Ext.Object.each(oldGrid.modifiedRecords, function(key, value){
                newData.push(value);
            });
           
            newStore = Ext.create('Ext.data.Store', {
                fields: newFields,
                data: newData
            });
           
            var CriteriaWin =  Ext.create('Ext.window.Window', {
                title:  'View Criteria - ' + oldGrid.title,
                draggable: true,
                closeAction: 'destroy',
                resizable: false,
                titleAlign: 'center',
                oldGrid : oldGrid,
                width: (viewportWidth / 100) * 90,
                height: (viewportHeight / 100) * 80,
                //layout: 'fit',
                items: { 
                    xtype: 'grid',
                    border: false,
                    columnLines: true,
                    stripeRows: true,
                    columns: newColumns,
                    store: newStore
                },
            });
            CriteriaWin.show().center();
        },
