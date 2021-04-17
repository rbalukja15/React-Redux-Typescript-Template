import { loginConstants } from './login.constants';
import { authConstants } from '../../shared/constants/auth.constants';
import { LoginActions, ILogin } from './login.interfaces';

const initialState: ILogin = { loading: false };

const loginReducer = (state = initialState, action: LoginActions): ILogin => {
    switch (action.type) {
        case loginConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case loginConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export { loginReducer };
