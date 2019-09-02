import {
    ESXServerXPlayer,
    ESXServerXPlayerAccount,
    ESXServerXPlayerInventoryItem,
    ESXServerXPlayerJob
} from "../classes/esx_server_xplayer";
import {Coords} from "../classes/coords";

export class ESXPlayer extends ESXServerXPlayer {
    /**
     * This function adds account money.
     * @param account
     * @param money
     */
    addAccountMoney(account: string, money: number);

    /**
     * This function adds bank money.
     * @param money
     */
    addBank(money: number);

    /**
     * This function adds an inventory item.
     * @param item
     * @param count
     */
    addInventoryItem(item: string, count: number);

    /**
     * This function adds money.
     * @param money
     */
    addMoney(money: number);

    /**
     * This function adds a weapon.
     * @param weaponName
     */
    addWeapon(weaponName: string);

    /**
     * This function adds a weapon component to a weapon, if the player has it.
     * The available component list can be found in the weapon config file.
     * @param weaponName
     * @param weaponComponent
     */
    addWeaponComponent(weaponName: string, weaponComponent: string);

    /**
     * This function displays bank money.
     * @param money
     */
    displayBank(money: number);

    /**
     * This function displays money.
     * @param money
     */
    displayMoney(money: number);

    /**
     * This function gets an account.
     * @param name
     */
    getAccount(name: string): ESXServerXPlayerAccount;

    /**
     * This function gets accounts.
     */
    getAccounts(): ESXServerXPlayerAccount[];

    /**
     * This function gets bank balance.
     */
    getBank(): number;

    /**
     * This function gets coordinates.
     */
    getCoords(): Coords;

    /**
     * This function gets a group.
     */
    getGroup(): string;

    /**
     * This function displays gets an identifier.
     */
    getIdentifier(): string;

    /**
     * This functions gets inventory.
     */
    getInventory(): ESXServerXPlayerInventoryItem[];

    /**
     * This function gets an inventory item.
     * @param itemName
     */
    getInventoryItem(itemName: string): ESXServerXPlayerInventoryItem;

    /**
     * This function gets a job.
     */
    getJob(): ESXServerXPlayerJob;

    /**
     * This functions gets the last position of stuff.
     */
    getLastPosition(): Coords;
    // TODO Continue script
}