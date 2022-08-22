import {app, BrowserWindow, ipcMain} from 'electron'
import path from "path"
import {EventEmitter} from 'typeorm/platform/PlatformTools';
import WindowContract from "./WindowContract";

// Application name
const APP_NAME = "Open Data Exporter"

class MainWindow extends WindowContract {
}


export default MainWindow