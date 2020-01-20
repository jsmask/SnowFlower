const electron = require("electron");
const { app, BrowserWindow, screen, ipcMain } = electron

let mainWin;

app.on("ready", () => {
    let size = screen.getPrimaryDisplay().workAreaSize;
    mainWin = new BrowserWindow({
        width: size.width,
        height: size.height,
        frame: false,
        resizable: false,
        transparent:true,
        alwaysOnTop: true,
        x: 0,
        y: 0,
        webPreferences: {
            nodeIntegration: true
        },
        show: false
    });
    mainWin.setIgnoreMouseEvents(true);
    mainWin.loadFile("index.html");
    // mainWin.webContents.openDevTools();
    mainWin.on("ready-to-show", () => {
        mainWin.show();
    })
})

