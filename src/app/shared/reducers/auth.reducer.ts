import { authConstants } from '../constants/auth.constants';
import { userConstants } from '../constants/user.constants';
import { globalConstants } from '../constants/global.constants';
import { IAuthActions, IAuthState } from '../actions/interfaces';

const initialState: IAuthState = {
    loggedIn: false,
    token: null,
    refreshToken: null,
    firstTimeUser: false,
};

export function authenticationReducer(state = initialState, action: IAuthActions): IAuthState {
    switch (action.type) {
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.authInfo.accessToken,
                refreshToken: action.authInfo.refreshToken,
                firstTimeUser: action.authInfo.firstTimeUser,
                loggedIn: true,
            };

        case globalConstants.FETCH_STATE_STORAGE_SUCCESS:
            return {
                ...state,
                token: action.token,
                refreshToken: action.refreshToken,
                loggedIn: true,
            };

        case userConstants.PROFILE_SUCCESS:
            return {
                ...state,
                loggedIn: true,
            };

        case authConstants.LOGOUT:
            return {
                ...state,
                loggedIn: false,
                token: null,
                refreshToken: null,
            };
        default:
            return state;
    }
}
