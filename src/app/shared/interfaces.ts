export interface IAlert {
    type: string;
    message?: string;
}

export interface IPagination {
    paging: boolean;
    page: number;
    size: number;
    orderBy?: string;
    orderDirection?: ISortOrder;
}

export interface IRowsDeleted {
    lookup: { [dataIndex: number]: boolean };
    data: Array<{ index: number; dataIndex: number }>;
}

enum FilterTypes {
    checkbox = 'checkbox',
    dropdown = 'dropdown',
    multiselect = 'multiselect',
    textField = 'textField',
    custom = 'custom',
    chip = 'chip',
    reset = 'reset',
}

export interface IFilters {
    changedColumn: string;
    filterList: string[];
    type: FilterTypes;
    changedColumnIndex: number;
    displayData: any[];
}

export interface ISort {
    changedColumn: string;
    direction: string;
}

export type ISortOrder = 'ASC' | 'DESC';
