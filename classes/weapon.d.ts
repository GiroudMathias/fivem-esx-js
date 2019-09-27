export interface Weapon {
    name: string,
    label: string,
    components: {
        name: string,
        hash: number,
        label: string
    }[]
}
