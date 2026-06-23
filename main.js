const { app, BrowserWindow } = require("electron");
const path = require("path");

// Salva dados na mesma pasta do .exe (modo portable)
// Assim as builds nunca são perdidas mesmo que o sistema limpe o Temp
if (process.env.PORTABLE_EXECUTABLE_DIR) {
  app.setPath("userData", path.join(process.env.PORTABLE_EXECUTABLE_DIR, "TBH-Tracker-Data"));
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.setMenu(null);
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);