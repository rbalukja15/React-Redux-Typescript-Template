import { loginConstants } from './login.constants';
import { loginService } from './login.service';
import { authConstants } from '../../shared/constants/auth.constants';
import { alertActions } from '../../shared/actions/alert.actions';
import { IAuthCode, ILoginResponse, LoginActions } from './login.interfaces';
import { Dispatch } from 'redux';
import { AxiosError } from 'axios';
import { setAuthenticationData } from './utils/action.helpers';

export const loginActions = {
    login,
};

function login(code: IAuthCode) {
    return (dispatch: Dispatch) => {
        dispatch(request());

        return loginService.login(code).then(
            (response: ILoginResponse) => {
                dispatch(success(response));
                setAuthenticationData(response);
            },
            (error: AxiosError) => {
                dispatch(failure(error.response.data.message.toString()));
                dispatch(alertActions.error(error.response.data.message.toString()));
            },
        );
    };

    function request(): LoginActions {
        return { type: loginConstants.LOGIN_REQUEST };
    }
    function success(body): LoginActions {
        return { type: authConstants.LOGIN_SUCCESS, authInfo: body };
    }
    function failure(error): LoginActions {
        return { type: loginConstants.LOGIN_FAILURE, error };
    }
}
