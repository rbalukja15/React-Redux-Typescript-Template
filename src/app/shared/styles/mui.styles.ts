import { Theme, ThemeOptions } from '@material-ui/core';
import { styleConstants } from '../constants/style.constants';
import { createMuiTheme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const navBarStyles = (theme: Theme) => ({
    grow: {
        flexGrow: 1,
    },
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: styleConstants.COLORS.BLACK_DEEP,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    menuItem: {
        minHeight: '60px',
        color: styleConstants.COLORS.WHITE,
        fontFamily: styleConstants.ROBOTO_MEDIUM,
        '&:hover': {
            textDecoration: 'none',
            color: styleConstants.COLORS.WHITE,
            backgroundColor: styleConstants.COLORS.RED,
        },
    },
    selectedMenuItem: {
        minHeight: '60px',
        color: styleConstants.COLORS.WHITE,
        background: styleConstants.COLORS.RED,
        fontFamily: styleConstants.ROBOTO_MEDIUM,
        '&:hover': {
            textDecoration: 'none',
            color: styleConstants.COLORS.WHITE,
            backgroundColor: styleConstants.COLORS.RED,
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        background: styleConstants.COLORS.BLACK_LOW,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    typography: {
        fontFamily: styleConstants.ROBOTO_MEDIUM,
    },
    list: {
        width: '100%',
        maxWidth: 360,
        color: styleConstants.COLORS.WHITE,
        fontFamily: styleConstants.ROBOTO_MEDIUM,
    },
    listItem: {
        minHeight: '60px',
        color: styleConstants.COLORS.WHITE,
        fontFamily: styleConstants.ROBOTO_MEDIUM,
        '&:hover': {
            textDecoration: 'none',
            color: styleConstants.COLORS.WHITE,
            backgroundColor: styleConstants.COLORS.RED,
        },
    },
    selectedListItem: {
        minHeight: '60px',
        color: styleConstants.COLORS.WHITE,
        background: styleConstants.COLORS.RED,
        fontFamily: styleConstants.ROBOTO_MEDIUM,
        '&:hover': {
            textDecoration: 'none',
            color: styleConstants.COLORS.WHITE,
            backgroundColor: styleConstants.COLORS.RED,
        },
    },
    listItemText: {
        color: styleConstants.COLORS.WHITE,
        fontFamily: styleConstants.ROBOTO_MEDIUM,
        paddingLeft: theme.spacing(2),
    },
    sectionDesktop: {
        display: 'none',
        color: styleConstants.COLORS.WHITE,
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    changeThemeButton: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0 !important',
        color: styleConstants.COLORS.WHITE,
    },
});

const addOrEditDialog = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
            borderBottom: '1px solid #7b79795e',
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

const dialogContent = (theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
});

const dialogActions = (theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
        minWidth: 'max-content',
    },
});

const light = {
    palette: {
        type: 'light',
    },
};
const dark = {
    palette: {
        type: 'dark',
    },
};
const getMuiTheme = (palette: ThemeOptions) => {
    return Object.assign(createMuiTheme(palette), {
        overrides: {
            MuiTable: {
                root: {
                    fontFamily: styleConstants.ROBOTO_MEDIUM,
                },
            },
            MuiPaper: {
                root: {
                    fontFamily: styleConstants.ROBOTO_MEDIUM,
                },
            },
            MuiTableFooter: {
                root: {
                    fontFamily: styleConstants.ROBOTO_MEDIUM,
                },
            },
            MuiTablePagination: {
                root: {
                    fontFamily: styleConstants.ROBOTO_MEDIUM,
                },
            },
            MuiTableCell: {
                root: {
                    fontFamily: styleConstants.ROBOTO_MEDIUM,
                },
            },
            MuiTypography: {
                root: {
                    fontFamily: styleConstants.ROBOTO_MEDIUM,
                },
                body1: {
                    fontFamily: styleConstants.ROBOTO_MEDIUM,
                },
            },
            MuiStepIcon: {
                root: {
                    '&$completed': {
                        color: styleConstants.COLORS.BLACK_LOW,
                    },
                    '&$active': {
                        color: styleConstants.COLORS.RED,
                    },
                },
            },
            MuiStepButton: {
                root: {
                    '&:focus': {
                        outline: 'none !important',
                    },
                },
            },
            MUIRichTextEditor: {
                root: {},
                container: {
                    display: 'flex',
                    flexDirection: 'column-reverse',
                },
                editor: {
                    padding: '20px',
                    height: '200px',
                    maxHeight: '200px',
                    maxWidth: '45rem',
                    overflow: 'auto',
                    fontFamily: styleConstants.ROBOTO_MEDIUM,
                    textAlign: 'left',
                    border: '1px solid gray',
                },
                toolbar: {
                    border: '1px solid gray',
                    maxWidth: '45rem',
                },
                placeHolder: {
                    paddingLeft: '20px',
                    width: 'inherit',
                    position: 'absolute',
                    top: '20px',
                    borderLeft: '1px solid gray',
                },
                anchorLink: {
                    color: '#333333',
                    textDecoration: 'underline',
                },
            },
            MuiDialog: {
                paperFullWidth: {
                    overflow: 'hidden',
                },
            },
            MuiButtonBase: {
                root: {
                    '&:focus': {
                        outline: '0 !important',
                    },
                    '&:not(:first-child)': {
                        marginLeft: '0px !important',
                    },
                },
            },
            MuiOutlinedInput: {
                root: {
                    '&$focused $notchedOutline': {
                        borderColor: styleConstants.COLORS.RED,
                        borderWidth: 1,
                    },
                },
            },
            MuiFormLabel: {
                root: {
                    '&$focused': {
                        color: styleConstants.COLORS.RED,
                    },
                },
            },
            MuiCardActions: {
                root: {
                    padding: '0px',
                    display: 'flex',
                },
                spacing: {
                    '& button': {
                        marginLeft: `0px`,
                    },
                },
            },
            MuiButton: {
                outlined: {
                    border: 0,
                },
                label: {
                    fontFamily: styleConstants.ROBOTO_MEDIUM,
                },
            },
        },
    });
};

const customStyles = () => ({
    NameCell: {
        fontFamily: styleConstants.ROBOTO_MEDIUM,
    },
});

const backDropStyles = (theme: Theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
});

export const muiStyles = {
    navBarStyles,
    addOrEditDialog,
    dialogContent,
    dialogActions,
    getMuiTheme,
    customStyles,
    lightTheme: light,
    darkTheme: dark,
    backDropStyles,
};
