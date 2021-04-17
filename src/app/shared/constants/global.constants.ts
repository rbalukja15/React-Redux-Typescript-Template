import { ISortOrder } from '../interfaces';

export const globalConstants = {
    FETCH_STATE_STORAGE_SUCCESS: 'FETCH_STATE_STORAGE_SUCCESS',
    FETCH_STATE_STORAGE_ERROR: 'FETCH_STATE_STORAGE_ERROR',
    FETCH_STATE_STORAGE_REQUEST: 'FETCH_STATE_STORAGE_REQUEST',
    NAVIGATION_BUTTONS_LABELS: {
        SUBMIT_AND_CONTINUE: 'Submit & Continue',
        SUBMIT_AND_FINISH: 'Submit & Finish',
        BACK: 'Back',
        NEXT: 'Next',
        ADD: 'Add',
        FINISH: 'Finish',
    },
    IMG_TYPES: ['jpeg', 'jpg', 'png', 'svg'],
    MEDIA_TYPES: ['mp4'],
    FILE_TYPES: ['xls', 'xlsx'],
    KEYS: {
        ID: 'id',
        READER_READY_STATE: 2,
        FIRST_FILE_INDEX: 0,
        FIRST_ARRAY_INDEX: 0,
    },
    SORT_ORDER: {
        ASC: 'ASC',
        DESC: 'DESC',
    },
    DEBOUNCE: {
        TABLE_STATE: 300,
    },
    DEFAULT_PAGINATION: {
        page: 0,
        paging: false,
        size: 10,
        orderBy: 'id',
        orderDirection: 'DESC' as ISortOrder,
    },
};
