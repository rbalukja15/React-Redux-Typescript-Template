export const alertConstants = {
    STATE: {
        SUCCESS: 'ALERT_SUCCESS',
        ERROR: 'ALERT_ERROR',
        CLEAR: 'ALERT_CLEAR',
    },

    MESSAGE: {
        NO_MATCH_FOUND: 'No match found, please wait a couple of minutes, if no match again, try refreshing.',
        NO_PREFERENCES: 'Please set your preferences before attempting to match with a user.',
        PREFERENCES_SAVED: 'Preferences saved successfully!',
        REPORT_SUCCESS: 'Thank you, we will review your report and act accordingly',
    },
    ACTION_TYPES: {
        ALERT_SUCCESS: 'alert-success',
        ALERT_DANGER: 'alert-danger',
        ALERT_CLEAR: 'alert-clear',
    },
};
