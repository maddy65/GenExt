

Ext.create('Ext.grid.Panel', {
    title: 'Test 1',
    store: Ext.data.StoreManager.lookup('Store'),
    columns: Columns
    height: 200,
    width: 400,
    renderTo: Ext.getBody()
});
