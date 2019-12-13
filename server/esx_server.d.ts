import {ESXCommon} from "../common/esx_common";
import {ESXPlayer} from "./esx_xplayer";

export as namespace ESXServer;

export class ESXServer extends ESXCommon {
    /**
     * This function creates a pickup.
     * @param type
     * @param name
     * @param count
     * @param label
     * @param player
     */
    CreatePickup(type: string, name: string, count: number, label: string, player: number);

    /**
     * This function returns the item label.
     * @param itemName
     */
    GetItemLabel(itemName: string): string;

    /**
     * This function gets a player from the ID.
     * @param source
     */
    GetPlayerFromId(source: number): ESXPlayer;

    /**
     * This function gets a player from the identifier.
     * @param identifier
     */
    GetPlayerFromIdentifier(identifier: string): ESXPlayer;

    /**
     * This function returns an array of all online players ID's.
     * You can use this to access each players data.
     */
    GetPlayers(): number[];

    /**
     * This function registers a server callback.
     * @param name
     * @param callback
     */
    RegisterServerCallback(name: string, callback?: Function);

    /**
     * This function registers a usable item.
     * @param itemName
     * @param callback
     */
    RegisterUsableItem(itemName: string, callback?: Function);

    /**
     * This function saves a player.
     * @param xPlayer
     * @param callback
     */
    SavePlayer(xPlayer: ESXPlayer, callback?: Function);

    /**
     * This function saves players.
     * @param callback
     */
    SavePlayers(callback?: Function);

    /**
     * This function shows a debug line if Config.EnableDebug is true.
     * @param message
     */
    Trace(message: string);

    /**
     * This function uses an item.
     * @param itemName
     * @param source
     */
    UseItem(itemName: string, source:number);
}
