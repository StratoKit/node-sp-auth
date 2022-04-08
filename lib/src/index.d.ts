import { IAuthResponse } from './auth/IAuthResponse';
import { IAuthOptions } from './auth/IAuthOptions';
export declare function getAuth(url: string, options?: IAuthOptions, force?: boolean): Promise<IAuthResponse>;
export * from './auth/IAuthOptions';
export * from './auth/IAuthResponse';
export * from './utils/TokenHelper';
export * from './auth/base';
export { setup, IConfiguration } from './config';
