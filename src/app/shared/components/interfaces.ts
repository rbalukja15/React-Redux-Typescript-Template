import React from 'react';
import { Theme } from '@material-ui/core';

export interface INavBarProps {
    classes: {
        root: string;
        drawer: string;
        appBar: string;
        menuButton: string;
        menuItem: string;
        selectedMenuItem: string;
        toolbar: string;
        drawerPaper: string;
        content: string;
        typography: string;
        list: string;
        listItem: string;
        selectedListItem: string;
        listItemText: string;
        sectionDesktop: string;
        grow: string;
        changeThemeButton: string;
    };
    window: Window;
    children: React.ReactChildren;
    theme: Theme;
    location: {
        pathname: string;
    };
}

export type IPublicNavBar = INavBarProps & {
    loggedIn: boolean;
};
