import { Method } from 'axios';

export const routeConstants = {
    HTTP_STATUS_CODE: {
        OK: 200,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        NOT_FOUND: 404,
    },
    HTTP_MESSAGE: {
        NOT_AUTHORIZED: 'Not authorized',
    },
    METHODS: {
        POST: 'POST' as Method,
        GET: 'GET' as Method,
        PUT: 'PUT' as Method,
        DELETE: 'DELETE' as Method,
    },
    HEADERS: {
        Authorization: 'Authorization',
    },
};
