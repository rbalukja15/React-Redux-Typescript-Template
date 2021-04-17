import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { logoutService } from '../../shared/services/auth.service';
import Interceptor from '../../shared/utils/axios.interceptor';
import { IAuthCode } from './login.interfaces';
import { routeConstants } from '../../shared/constants/route.constants';
import { loginEndpoints } from './login.endpoints';
import { headers } from '../../shared/utils/headers';

export const loginService = {
    login,
};

axios.interceptors.response.use(undefined, Interceptor(axios));

async function login(authCode: IAuthCode): Promise<AxiosResponse> {
    const requestOptions: AxiosRequestConfig = {
        url: loginEndpoints.LOGIN.url,
        method: routeConstants.METHODS.POST,
        headers: headers.routeHeaders(),
        data: JSON.stringify(authCode),
    };

    const response: AxiosResponse = await axios(requestOptions);
    if (response.status === routeConstants.HTTP_STATUS_CODE.OK) {
        return response.data.data;
    } else {
        logoutService();
    }
}
