export enum ApiEnums {
    BASE = '/',
    TOKEN_TEST = '/tokenTest',
    TOKEN_REFRESH = '/token-refresh',
    POST_JOIN = '/join',
    POST_LOGIN = '/login',
    SNS_LOGIN = '/snsLogin',
};


export enum HeaderKeys {
    Authorization = "authorization",
    Access = "access",
    Refresh = "refresh",
}

export enum ServerConstants {
    SERVER_URL = "http://localhost:",
    SERVER_PORT = "8080",
    BASE_URL = SERVER_URL + SERVER_PORT,
}

export enum HTTP_METHOD{
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
};

