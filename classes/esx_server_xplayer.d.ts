import {Coords} from "./coords";

export class ESXServerXPlayer {
    name: string;
    source: number;
    accounts: ESXServerXPlayerAccount[];
    inventory: ESXServerXPlayerInventoryItem[];
    job: ESXServerXPlayerJob;
    lastPosition: Coords;
}
export interface ESXServerXPlayerAccount {
    name: string,
    label: string,
    money: number
}

export interface ESXServerXPlayerInventoryItem {
    name: string,
    count: number,
    label: string,
    limit: number,
    usable: boolean,
    rare: boolean,
    canRemove: boolean
}

export interface ESXServerXPlayerJob {
    id: number,
    name: string,
    label: string,
    grade: number,
    grade_name: string,
    grade_label: string,
    grade_salary: number,
    skin_male: any,
    skin_female: any
}