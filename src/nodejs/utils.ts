export const isElectron = () => {
  return window && (window as any).process && (window as any).process.type;
};

type GetReturnPromiseType<T extends (...args: any[]) => any> = T extends (...args: any[]) => Promise<infer R> ?R : never;

export const safeElectronWrapper = <T extends (...args: any[]) => any>(normalFunction: T, fallbackValue: GetReturnPromiseType<T>): T => {
  if (isElectron()) {
    return ((...args) => normalFunction(...args)) as any;
  } else {
    return ((...args) => Promise.resolve(fallbackValue)) as any;
  }
};
