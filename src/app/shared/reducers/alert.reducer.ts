import { IAlert } from '../interfaces';
import { alertConstants } from '../constants/alert.constants';

const initialState = {
    type: '',
    message: '',
};

const alertReducer = (state = initialState, action: IAlert): IAlert => {
    switch (action.type) {
        case alertConstants.STATE.SUCCESS:
            return {
                type: alertConstants.ACTION_TYPES.ALERT_SUCCESS,
                message: action.message,
            };
        case alertConstants.STATE.ERROR:
            return {
                type: alertConstants.ACTION_TYPES.ALERT_DANGER,
                message: action.message,
            };
        case alertConstants.STATE.CLEAR:
            return {
                type: alertConstants.ACTION_TYPES.ALERT_CLEAR,
            };
        default:
            return state;
    }
};

export { alertReducer };
