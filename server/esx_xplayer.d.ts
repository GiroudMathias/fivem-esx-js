import {
    ESXServerXPlayer,
    ESXServerXPlayerAccount,
    ESXServerXPlayerInventoryItem,
    ESXServerXPlayerJob
} from "../classes/esx_server_xplayer";
import {Coords} from "../classes/coords";
import {ESXWeapon} from "../classes/esx_weapon";

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
     * @param ammo
     */
    addWeapon(weaponName: string, ammo?: number);

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
     * This function set a xPlayer variable.
     * @param key key to set
     * @param value value to set
     */
    set<T>(key: string, value: T);

    /**
     * This function gets a xPlayer variable.
     * @param key key to get
     */
    get<T>(key: string): T;

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
     * This function gets a job.
     */
    getSecondaryJob(): ESXServerXPlayerJob;

    /**
     * This functions gets the last position of stuff.
     */
    getLastPosition(): Coords;

    /**
     * This function gets a loadout.
     */
    getLoadout(): ESXWeapon[];

    /**
     * This function gets missing accounts.
     */
    getMissingAccounts(): ESXServerXPlayerAccount[];

    /**
     * This function gets money.
     */
    getMoney(): number;

    /**
     * This function gets a name.
     */
    getName(): string;

    /**
     * This function gets a permission level.
     */
    getPermissions(): number;

    /**
     * This function gets the EssentialMode player object.
     */
    getPlayer(): ESXPlayer;

    /**
     * This function gets a session variable.
     * @param key
     */
    getSessionVar(key: string): string;

    /**
     * This functions returns if the loadoutNum and a weapon object for the weapon if the player has it.
     * @param weaponName
     */
    getWeapon(weaponName: string): ESXWeapon;

    /**
     * This functions returns if the player has the specified weapon.
     * @param weaponName
     */
    hasWeapon(weaponName: string): boolean;

    /**
     * This functions returns (boolean) if the player has the specified weapon component for a given weapon.The available component list can be found in the weapon config file.
     * @param weaponName
     * @param weaponComponent
     */
    hasWeaponComponent(weaponName: string, weaponComponent: string): boolean;

    /**
     * This function kicks a player with a reason.
     * @param reason
     */
    kick(reason: string);

    /**
     * This function removes account money.
     * @param account
     * @param money
     */
    removeAccountMoney(account: string, money: number);

    /**
     * This function removes bank money.
     * @param money
     */
    removeBank(money: number);

    /**
     * This function removes an inventory item.
     * @param itemName
     * @param count
     */
    removeInventoryItem(itemName: string, count:number);

    /**
     * This function removes money.
     * @param money
     */
    removeMoney(money: number);

    /**
     * This function removes a weapon from the player.
     * @param weaponName
     * @param ammo
     */
    removeWeapon(weaponName: string, ammo?: number);

    /**
     * This function removes a weapon component from a player, if the player has it.The available component list can be found in the weapon config file.
     * @param weaponName
     * @param weaponComponent
     */
    removeWeaponComponent(weaponName: string, weaponComponent: string);

    /**
     * This function sets account money.
     * @param accountName
     * @param money
     */
    setAccountMoney(accountName: string, money: number);

    /**
     * This function sets bank balance.
      * @param money
     */
    setBankBalance(money: number);

    /**
     * This function sets coordinates.
     * @param x
     * @param y
     * @param z
     */
    setCoords(x: number, y: number, z: number);

    /**
     *
     * @param itemName
     * @param count
     */
    setInventoryItem(itemName: string, count: number);

    /**
     * This functions sets a job for a player.
     * @param name
     * @param grade
     */
    setJob(name: string, grade: number);

    /**
     * This functions sets a secondary job for a player.
     * @param name
     * @param grade
     */
    setSecondaryJob(name: string, grade: number);

    /**
     * This function sets money.
     * @param money
     */
    setMoney(money: number);

    /**
     * This function sets the player name.
     * @param name
     */
    setName(name: string);

    /**
     * This function sets a permission level.
     * @param permissionLevel
     */
    setPermissions(permissionLevel: number);

    /**
     * This function sets a session variable.
     * @param key
     * @param value
     */
    setSessionVar(key: string, value: string);

    /**
     * This function sends a help notification to the player. These help notification support displaying button inputs, see this list
     * https://pastebin.com/HPg8pYwi
     * @param msg
     */
    showHelpNotification(msg: string);

    /**
     * This function sends a notification to the player
     * @param msg
     */
    showNotification(msg: string);
}
