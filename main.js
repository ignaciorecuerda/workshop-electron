const {app, BrowserWindow} = require('electron')

let mainWindow

function createWindow () {
	mainWindow = new BrowserWindow({width: 800, height: 800})
  
	mainWindow.loadFile('index.html')
  
	// Open the DevTools.
	mainWindow.webContents.openDevTools()
  
	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
	  // Dereference the window object, usually you would store windows
	  // in an array if your app supports multi windows, this is the time
	  // when you should delete the corresponding element.
	  mainWindow = null
	})
  }
app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

require('./tray-process')

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
