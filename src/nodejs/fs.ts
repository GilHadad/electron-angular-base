import * as fsType from 'mz/fs'; /* this is used just for types! */ /* make sure NOT to use 'fsTypeVariable */
const fs: typeof fsType = window.electron.remote.require('mz/fs');

export async function foo() {
  const content = await fs.readFile('./README.md', 'utf-8');
  console.log(content);
  return content;
}
