Ext.Iframe = Ext.extend(Ext.Window, {
	onRender: function() {
		this.bodyCfg = {
			tag: 'iframe',
			src: this.src,
			cls: this.bodyCls,
		};
		Ext.IframeWindow.superclass.onRender.apply(this, arguments);
	},
});
