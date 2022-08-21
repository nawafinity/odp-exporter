// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { ipcRenderer } from 'electron'; // eslint-disable-line @typescript-eslint/no-unused-vars

/* eslint-disable @typescript-eslint/no-explicit-any */

window.electron = {
    ipc: ipcRenderer
}
/* eslint-enable */

console.log("PRELOAD")