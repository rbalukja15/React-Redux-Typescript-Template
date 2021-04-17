import { authConstants } from '../constants/auth.constants';
import { logoutService } from '../services/auth.service';


const logout = () => {
    logoutService();
    return { type: authConstants.LOGOUT };
}

const invalidateToken = () => {
    return { type: authConstants.token.INVALID_TOKEN };
}

export const authActions = {
    logout,
    invalidateToken,
};
