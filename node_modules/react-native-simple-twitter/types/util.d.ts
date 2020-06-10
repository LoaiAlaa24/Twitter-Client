export declare const randomStrings: (n?: number) => string;
export declare const createHeaderString: (params: any) => string;
export declare const encodeParamsToString: (params: any) => string;
export declare const parseFormEncoding: (formEncoded: string) => any;
export declare const createTokenRequestHeaderParams: (consumerKey: string, { callback, token, params }: {
    callback?: string | undefined;
    token?: string | undefined;
    params?: any;
}) => any;
export declare const createSignature: (params: object, method: string, url: string, consumerSecret: string, tokenSecret?: string | undefined) => {
    oauth_signature: string;
};
