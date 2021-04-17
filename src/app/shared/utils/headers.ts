import { genericHelpers } from './generics';

const authHeader = () => {
    const token = localStorage.getItem('token');

    if (!genericHelpers.isNullOrUndefined(token)) {
        return {
            Authorization: token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
    } else {
        return {};
    }
};

const formDataHeaders = () => ({
    ...authHeader(),
    'Content-Type': 'multipart/form-data;',
});

export const headers = {
    authHeader,
    formDataHeaders,
};
