var Win;
var URL = "globalfileURL"
Win = new Ext.IframeWindow({
                        id: 'MyWinID',
                        modal: true,
                        resizable: true,
                        title: 'Your Title',
                        closable: true,
                        constrain : true,
                        src: URL,
                        listeners :{
                            resize : function(win,width,height){
                                win.setHeight((viewportHeight / 100) * 90)
                                var iframe = document.getElementById('biomarkerSearchWindow');
                                    iframe.scrollIntoViewIfNeeded(true);
                            }
                        }
                    });
    Win.width = (winWidth / 100) * 90,
    Win.height = (winHeight / 100) * 90,
	  Win.show().center();
