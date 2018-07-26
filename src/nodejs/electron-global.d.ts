import * as electronT from 'electron';
declare global {
  interface Window {
    electron: typeof electronT;
  }
}