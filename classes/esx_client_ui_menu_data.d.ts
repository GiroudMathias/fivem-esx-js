export declare interface ESXClientUIMenuData {
    title: string,
    align: string,
    elements?: {
        label: string,
        identifier: string,
        submit(any?): void
    }[],
}
