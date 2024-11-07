const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 1000,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),  // If using a preload script

        },

    });

    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL('http://localhost:5500');
    } else {
        mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
    }
}

app.on('ready', createWindow);
