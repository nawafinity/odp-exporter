import {BrowserWindow} from "electron";
import {EventEmitter} from "typeorm/platform/PlatformTools";
import BrowserWindowConstructorOptions = Electron.BrowserWindowConstructorOptions;

abstract class WindowContract {
    protected window: BrowserWindow;
    protected options?: BrowserWindowConstructorOptions;
    protected onEvent: EventEmitter

    protected constructor(options?: BrowserWindowConstructorOptions) {
        this.options = {
            title: 'Anonymous Window'
        }

        this.window = new BrowserWindow(this.options)
    }

    public getWindow() {
        return this.window
    }

}

export default WindowContract;