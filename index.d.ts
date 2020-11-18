declare type CBAPI = (...args: Array<any>) => void;
declare function pify<T>(api: CBAPI): (...args: Array<any>) => Promise<T>;
export = pify;
