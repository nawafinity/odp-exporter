import { IpcRenderer } from "electron"


declare global {
  interface Window {
    odpexp: {
      icp: IpcRenderer
    }
  }
}