// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

const { app, BrowserWindow } = require('electron')
const path = require('node:path')
const roboto300Path = path.join(__dirname, 'css', 'roboto-300.css');
const roboto400Path = path.join(__dirname, 'css', 'roboto-400.css');
const roboto500Path = path.join(__dirname, 'css', 'roboto-500.css');
const roboto700Path = path.join(__dirname, 'css', 'roboto-700.css');


const createWindow = () => {
    const win = new BrowserWindow({
      width: 600,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, './preload.js')
      }
    })
  
    win.loadFile('./page/index.html')
  }

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })