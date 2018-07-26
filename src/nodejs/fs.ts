import {safeElectronWrapper} from './utils';
import {fs} from './nodejs-modules';


export const foo = safeElectronWrapper(async function() {
  const content = await fs.readFile('./README.md', 'utf-8');
  console.log(content);
  return content;
}, 'This will only show in browser');

