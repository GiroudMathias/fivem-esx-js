export declare interface ESXClientPlayerData {
    identifier: string,
    inventory: ESXClientPlayerInventoryItem[],
    loadout: any[],
    money: number,
    lastPosition: {
        x: number,
        y: number,
        z: number
    },
    job: ESXClientPlayerJob,
    secondaryJob: ESXClientPlayerJob,
    accounts: ESXClientPlayerAccount[]
}

export declare interface ESXClientPlayerInventoryItem {
    count: number,
    rare: boolean,
    limit: number,
    label: string,
    name: string,
    usable: boolean,
    canRemove: boolean
}

export declare interface ESXClientPlayerJob {
    name: string,
    grade: number,
    grade_name: string,
    grade_salary: number,
    label: string,
    skin_female: any[],
    skin_male: any[]
}

export declare interface ESXClientPlayerAccount {
    money: number,
    name: string,
    label: string
}
