import { IAuthResponse } from './auth/IAuthResponse';
import { IAuthOptions } from './auth/IAuthOptions';
import { AuthResolverFactory } from './auth/AuthResolverFactory';

export function getAuth(
  url: string,
  options?: IAuthOptions,
  force?: boolean
): Promise<IAuthResponse> {
  return AuthResolverFactory.resolve(url, options).getAuth(force);
}

export * from './auth/IAuthOptions';
export * from './auth/IAuthResponse';
export * from './utils/TokenHelper';
export * from './auth/base';
export { setup, IConfiguration } from './config';
