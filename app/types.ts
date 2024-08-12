import exp from "constants";

export interface HeaderProps {
    navMenuItems: NavItem[];
}

export interface MainProps {
    files?: FolderItem[],
    folders?: Folder[]
}

export interface FooterProps {
    controls: Control[];
}

export interface NavItem {
    id: number;
    title: string;
    subMenu?: NavSubItem[];
}

export interface NavSubItem {
    id: number;
    title: string;
    command: string;
}

export interface FolderItem {
    id: number;
    title: string;
    items?: Item[];
}

export interface Item {
    id: number;
    name: string;
    format?: string;
}

export interface Folder {
    id: number;
    title: string;
}

export interface Control {
    id: number;
    title: string;
} 
