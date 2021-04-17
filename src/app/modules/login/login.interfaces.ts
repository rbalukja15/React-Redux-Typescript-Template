import { loginConstants } from './login.constants';
import { authConstants } from '../../shared/constants/auth.constants';
import { AxiosResponse } from 'axios';

export type IValidationSchema = {
    email: string;
    password: string;
};

export interface ILoginResponse extends AxiosResponse {
    accessToken: string;
    refreshToken: string;
    user: string;
}

export interface IFormValues {
    email: string;
    password: string;
}

export interface ILoginProps {
    login: (values: IFormValues) => Promise<void>;
}

export interface IAuthCode {
    email: string;
    password: string;
}

export interface IRequest {
    type: typeof loginConstants.LOGIN_REQUEST;
}

export interface IAuthBody {
    authInfo: {
        accessToken: string;
        refreshToken: string;
        user: {
            birthday: Date;
            city: string;
            contentNotifications: number;
            countryId: number;
            email: string;
            facebookId: bigint;
            grillNotifications: number;
            id: number;
            language: string;
            measurementSystem: string;
            name: string;
            phoneNumber: string;
            postalCode: string;
            profilePicture: string;
            role: string;
            streetName: string;
            surname: string;
            tsCreated: Date;
            tsLastModified: Date;
        };
    };
}

export interface ISuccess extends IAuthBody {
    type: typeof authConstants.LOGIN_SUCCESS;
}

export interface IFailure {
    type: typeof loginConstants.LOGIN_FAILURE;
    error: any;
}

export interface ILogin {
    loading: boolean;
}

export type LoginActions = IRequest | ISuccess | IFailure;
