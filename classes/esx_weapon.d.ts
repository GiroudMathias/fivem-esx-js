export interface ESXWeapon {
    name: string,
    label: string,
    components: ESXWeaponComponent[]
}
export interface ESXWeaponComponent {
    name: string,
    hash: number,
    label: string
}