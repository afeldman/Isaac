(function(){
    var {app, BrowserWindow} = require('electron');
    var path = require('path');
    var url = require('url');

    var win;

    function createWindow () {
	// Create the browser window.
	var {width, height} = require('electron').screen.getPrimaryDisplay().size;
	
	win = new BrowserWindow({width: width,
				 height: height,
				 resizeable: true,
				 frame: true,
				 transparent: false,
				 show: false,
				 minWidth: 300, 
				 minHeight: 600});

	win.webContents.openDevTools();
	
	win.setMenu(null);
	
	// and load the index.html of the app.
	win.loadURL(url.format({
	    pathname: path.join(__dirname, 'index.html'),
	    protocol: 'file:',
	    slashes: true
	}));
        
	// Emitted when the window is closed.
	win.on('closed', () => {
	    // Dereference the window object, usually you would store windows
	    // in an array if your app supports multi windows, this is the time
	    // when you should delete the corresponding element.
	    win = null;
	});

	win.once('ready-to-show', () => {
	    win.show();
	});
    }

    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.on('ready', createWindow);

    // Quit when all windows are closed.
    app.on('window-all-closed', () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
	    app.quit();
	}
    });

    app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (win === null) {
	    createWindow();
	}
    });
})();