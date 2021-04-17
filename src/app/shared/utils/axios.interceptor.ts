import { logoutService } from '../services/auth.service';
import { authActions } from '../actions/auth.actions';
import { tokenService } from '../services/token.service';
import { AxiosStatic } from 'axios';
import { routeConstants } from '../constants/route.constants';

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

const Interceptor = (axiosInstance: AxiosStatic) => (error) => {
    const _axios = axiosInstance;
    const originalRequest = error.config;

    if (
        error.response.data.message === routeConstants.HTTP_MESSAGE.NOT_AUTHORIZED &&
        error.response.status === routeConstants.HTTP_STATUS_CODE.UNAUTHORIZED
    ) {
        logoutService();
        return Promise.reject(error);
    }
    if (error.response.status === routeConstants.HTTP_STATUS_CODE.UNAUTHORIZED && !originalRequest._retry) {
        if (isRefreshing) {
            return new Promise(function (resolve, reject) {
                failedQueue.push({ resolve, reject });
            })
                .then((token) => {
                    originalRequest.headers[routeConstants.HEADERS.Authorization] = token;
                    return _axios.request(originalRequest);
                })
                .catch((err) => {
                    return Promise.reject(err);
                });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        const refreshToken = localStorage.getItem('refreshToken') || 'refresh123xyz';
        const user = JSON.parse(localStorage.getItem('user'));

        if (typeof user === 'undefined' || user === null) {
            logoutService();
        }

        return new Promise((resolve, reject) => {
            tokenService
                .refreshToken(refreshToken, user.name, user.email, user.id)
                .then((response) => {
                    _axios.defaults.headers.common[routeConstants.HEADERS.Authorization] =
                        response.data.data.accessToken;
                    originalRequest.headers[routeConstants.HEADERS.Authorization] = response.data.data.accessToken;
                    processQueue(null, response.data.data.accessToken);
                    resolve(_axios(originalRequest));
                })
                .catch((err) => {
                    processQueue(err, null);
                    reject(err);
                    authActions.logout();
                })
                .finally(() => {
                    isRefreshing = false;
                });
        });
    } else if (error.response.status === routeConstants.HTTP_STATUS_CODE.BAD_REQUEST) {
        return Promise.reject(error);
    }

    return Promise.reject(error);
};

export default Interceptor;
