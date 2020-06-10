import { Method, ErrorResponse } from './types';
declare const request: <T>(method?: Method, url?: string, params?: any) => Promise<ErrorResponse | T>;
export default request;
