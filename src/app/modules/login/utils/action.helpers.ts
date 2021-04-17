import { ILoginResponse } from '../login.interfaces';

export const setAuthenticationData = (response: ILoginResponse): void => {
    localStorage.setItem('token', response.accessToken);
    localStorage.setItem('refreshToken', response.refreshToken);
    localStorage.setItem('user', JSON.stringify(response.user));
};
