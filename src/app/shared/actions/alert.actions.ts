import { alertConstants } from '../constants/alert.constants';
import { toast } from 'react-toastify';
import { IAlert } from '../interfaces';
import { styleConstants } from '../constants/style.constants';

const success = (message: string): IAlert => {
    toast.success(message, styleConstants.TOAST_OPTIONS);

    return { type: alertConstants.STATE.SUCCESS, message };
};

const info = (message: string): IAlert => {
    toast.info(message, styleConstants.TOAST_OPTIONS);

    return { type: alertConstants.STATE.SUCCESS, message };
};

const warn = (message: string): IAlert => {
    toast.warn(message, styleConstants.TOAST_OPTIONS);

    return { type: alertConstants.STATE.SUCCESS, message };
};

const error = (message: string): IAlert => {
    toast.error(message, styleConstants.TOAST_OPTIONS);

    return { type: alertConstants.STATE.ERROR, message };
};

const clear = (): IAlert => {
    return { type: alertConstants.STATE.CLEAR };
};
export const alertActions = {
    success,
    error,
    clear,
    warn,
    info,
};
