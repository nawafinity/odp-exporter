

  
// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { ipcRenderer, contextBridge, IpcRenderer  } from "electron"; // eslint-disable-line @typescript-eslint/no-unused-vars
declare global {
    interface Window {
      odpexp: {
        icp: IpcRenderer
      }
    }
  }
/* eslint-disable @typescript-eslint/no-explicit-any */

contextBridge.exposeInMainWorld('odpexp', {
    icp: ipcRenderer
})
/* eslint-enable */

console.log("PRELOAD");
