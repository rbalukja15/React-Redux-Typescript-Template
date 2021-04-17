import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import store from '../store';
import { tokenConstants } from '../constants/token.constants';
import { headers } from '../utils/headers';
import { routeConstants } from '../constants/route.constants';
import { endpointConstants } from '../constants/endpoint.constants';
import { actionHelpers } from '../utils/action.helpers';

export const tokenService = {
    refreshToken,
};

function refreshToken(refreshToken: string, username: string, email: string, userId: number): Promise<AxiosResponse> {
    const requestOptions: AxiosRequestConfig = {
        url: endpointConstants.REFRESH_TOKEN.url,
        method: routeConstants.METHODS.POST,
        headers: headers.routeHeaders(),
        data: JSON.stringify({
            refreshToken: refreshToken,
            username: email,
            email: email,
            userId: userId,
        }),
    };

    return axios(requestOptions).then((response) => {
        actionHelpers.setTokenData(response);
        store.dispatch({ type: tokenConstants.TOKEN_REFRESHED, tokenInfo: response.data });

        return response;
    });
}
