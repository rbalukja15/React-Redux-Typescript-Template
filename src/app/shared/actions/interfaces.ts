import { globalConstants } from '../constants/global.constants';
import { authConstants } from '../constants/auth.constants';

export interface IAlert {
    type: string;
    message?: string;
}

export interface IFetchSuccess {
    type: typeof globalConstants.FETCH_STATE_STORAGE_SUCCESS;
    token: string;
    refreshToken: string;
    user: string;
}

export interface IFetchError {
    type: typeof globalConstants.FETCH_STATE_STORAGE_ERROR;
}

export interface IUserRequest {
    type: string;
    error?: string;
    user?: IUser;
    authInfo?: {
        user: IUser;
    };
}

export interface IUser {
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
}

export interface IUserResponse extends Response {
    result: string;
}

export interface ILoginSuccess {
    type: typeof authConstants.LOGIN_SUCCESS;
    authInfo: {
        token: string;
        refreshToken: string;
        firstTimeUser: string;
    };
}

export interface IFetchStateSuccess {
    type: typeof globalConstants.FETCH_STATE_STORAGE_SUCCESS;
    token: string;
    refreshToken: string;
}

export interface ITokenAction {
    type: string;
    tokenInfo: {
        data: {
            accessToken: string;
            refreshToken: string;
        };
    };
}

export interface IAuthActions {
    type: string;
    authInfo: {
        accessToken: string | null;
        refreshToken: string | null;
        firstTimeUser: boolean;
    };
    token: string;
    refreshToken: string;
}

export interface IAuthState {
    loggedIn?: boolean;
    token?: string;
    refreshToken?: string;
    firstTimeUser?: boolean;
}

export interface IUserState {
    user?: IUser;
    loggedIn: boolean;
}

export type GlobalActions = IFetchSuccess | IFetchError;

export type UserActions = {
    type: string;
    authInfo?: {
        user: IUser;
    };
} & IUserState;
