import * as fsType from 'mz/fs'; /* this is used just for types! */ /* make sure NOT to use 'fsTypeVariable */
import {isElectron} from './utils';
export const fs: typeof fsType = isElectron() ? window.electron.remote.require('mz/fs') : {} as any;
