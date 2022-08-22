import { app, BrowserWindow, ipcMain } from 'electron'
import path from "path"
import { EventEmitter } from 'typeorm/platform/PlatformTools';

// Application name
const APP_NAME = "Open Data Exporter"

class MainWindow {
    window: BrowserWindow;
    settings: {[key: string]: any};
    onEvent: EventEmitter = new EventEmitter();

    constructor(settings: {[key: string]: any} | null = null) {}
}