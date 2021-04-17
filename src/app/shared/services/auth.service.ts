import axios from 'axios';
import Interceptor from '../utils/axios.interceptor';

axios.interceptors.response.use(undefined, Interceptor(axios));

export const logoutService = (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
}
