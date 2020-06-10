import { Method, AccessToken } from './types';
declare class Client {
    ConsumerKey: string;
    ConsumerSecret: string;
    Token: string;
    TokenSecret: string;
    TokenRequestHeaderParams: any;
    setConsumerKey: (consumerKey: string, consumerSecret: string) => void;
    setAccessToken: (token: string, tokenSecret: string) => void;
    getLoginUrl: (callback?: string) => Promise<string>;
    getAccessToken: (verifier?: string) => Promise<AccessToken>;
    api: <T>(method: Method, endpoint: string, params?: any) => Promise<T>;
    post: (endpoint: string, params?: any) => Promise<any>;
    get: (endpoint: string, params?: any) => Promise<any>;
}
declare const _default: Client;
export default _default;
