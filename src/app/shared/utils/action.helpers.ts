import { AxiosResponse } from 'axios';

const setTokenData = (response: AxiosResponse): void => {
    localStorage.setItem('token', response.data.accessToken);
};

export const actionHelpers = {
    setTokenData,
};
