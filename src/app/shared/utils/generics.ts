import { omit, pick } from 'lodash';
import { globalConstants } from '../constants/global.constants';

const getFileExtension = (file: string): string => {
    if (validString(file)) return file.split('.').pop().toLowerCase();
};

const validString = (value: unknown): boolean => {
    if (value === undefined || value === null) {
        return false;
    }

    return typeof value === 'string' && value.length >= 0;
};

const isNullOrUndefined = (object: unknown): boolean => {
    return typeof object === 'undefined' || object === null;
};

const removeIdFromObject = <T>(object?: T): T => {
    return omit(object, [globalConstants.KEYS.ID]);
};

const getIdFromObject = <T>(object?: T): T => {
    return pick(object, [globalConstants.KEYS.ID]);
};

const sleep = (delay = 0): Promise<unknown> => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
};

export const genericHelpers = {
    getFileExtension,
    validString,
    isNullOrUndefined,
    removeIdFromObject,
    sleep,
    getIdFromObject,
};
