export enum ENDPOINTS {
    BASE = '/',
    TOKEN_TEST = '/tokenTest',
    TOKEN_REFRESH = '/token-refresh',
    POST_JOIN = '/join',
    POST_LOGIN = '/login',
};

export const getEndpointByValue = (value: string): ENDPOINTS | undefined => {
    const foundKey = Object.keys(ENDPOINTS).find(key => ENDPOINTS[key as keyof typeof ENDPOINTS] === value);
    return foundKey ? ENDPOINTS[foundKey as keyof typeof ENDPOINTS] : undefined;
}