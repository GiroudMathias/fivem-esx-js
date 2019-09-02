import {ESXWeapon, ESXWeaponComponent} from "../classes/esx_weapon";
import {ESXCommonMath} from "./esx_common_math";

export class ESXCommon {
    /**
     * This function gets a random string, with the defined length.
     * @param length
     */
    GetRandomString(length: number): string;

    /**
     * This function returns the weapon component object for a weapon. Includes the component label, name and hash key. See the weapon config file for the available components.
     * @param weaponName
     * @param weaponComponent
     */
    GetWeaponComponent(weaponName: string, weaponComponent: string): ESXWeaponComponent;

    /**
     * This function gets the weapon label for a given weapon.
     * @param weaponName
     */
    GetWeaponLabel(weaponName: string): string;

    /**
     * This function gets the complete weapon list and label.
     */
    GetWeaponList(): ESXWeapon[];

    /**
     * This function sets a timeout requiring two arguments, msec (milliseconds), and cb (callback).
     * @param milliseconds
     * @param callback
     */
    SetTimeout(milliseconds: number, callback: Function);

    /**
     * This function clears a timeout from the ESX.SetTimeout function.
     * @param id
     */
    ClearTimeout(id: number);

    Math: ESXCommonMath;
}