import {Coords} from "../classes/coords";
import {ESXClientVehicleProps} from "../classes/esx_client_vehicle_props";

export declare class ESXGame {
    /**
     * This function deletes an object.
     * @param object
     */
    DeleteObject(object: number);

    /**
     * This function deletes the parsed vehicle.
     * @param vehicle
     */
    DeleteVehicle(vehicle: number);

    /**
     * This function gets the closest object.
     * @param filter
     * @param coords
     */
    GetClosestObject(filter: string | string[], coords: Coords): [number, number];

    /**
     * This function gets the closest ped.
     * @param coords
     * @param ignoreList
     */
    GetClosestPed(coords: Coords, ignoreList?: string[]): [number, number];

    /**
     * This function gets the closest player.
     * @param coords
     */
    GetClosestPlayer(coords: Coords): [number, number];

    /**
     * This function gets the closest vehicle.
     * @param coords
     */
    GetClosestVehicle(coords: Coords): [number, number];

    /**
     * This function gets objects.
     */
    GetObjects(): [number];

    /**
     * This function generates a Mugshot of the current player usable in various applications.
     * @param ped
     */
    GetPedMugshot(ped: number): [number, string];

    /**
     * This function gets peds.
     * @param ignoreList
     */
    GetPeds(ignoreList: string[]): number[];

    /**
     * This function gets players.
     */
    GetPlayers(): number[];

    /**
     * This function gets players in a given radius.
     * @param coords
     * @param radius
     */
    GetPlayersInArea(coords: Coords, radius: number): number[];

    /**
     * This function gets the closest vehicle in the players' direction within 5 units, utilizes ray-casts.
     */
    GetVehicleInDirection(): number;

    /**
     * This function gets a vehicles properties.
     * @param vehicle
     */
    GetVehicleProperties(vehicle: number): ESXClientVehicleProps;

    /**
     * This function gets vehicles.
     * @constructor
     */
    GetVehicles(): number[];

    /**
     * This function gets vehicles in a given radius.
     * @param coords
     * @param radius
     */
    GetVehiclesInArea(coords: Coords, radius: number): number[];

    /**
     * Returns (boolean) if the spawn point coords area clear with no other vehicle in the parsed radius.
     * @param coords
     * @param radius
     */
    IsSpawnPointClear(coords: Coords, radius: number): boolean;

    /**
     * This function sets the properties for a vehicle.
     * @param vehicle
     * @param props
     */
    SetVehicleProperties(vehicle: number, props: ESXClientVehicleProps);

    /**
     * This function spawns a local object, only visible to the local player and no one else.
     * @param modelOrHash
     * @param coords
     * @param callback
     */
    SpawnLocalObject(modelOrHash: number | string, coords: Coords, callback?: Function);

    /**
     * This function spawns a local vehicle, only visible to the local player and no one else.
     * @param modelOrHash
     * @param coords
     * @param heading
     * @param callback
     */
    SpawnLocalVehicle(modelOrHash: number | string, coords: Coords, heading: number, callback?: Function);

    /**
     * This function spawns an object.
     * @param modelOrHash
     * @param coords
     * @param callback
     */
    SpawnObject(modelOrHash: number | string, coords: Coords, callback?: Function);

    /**
     * This function spawns a vehicle.
     * @param modelOrHash
     * @param coords
     * @param heading
     * @param callback
     */
    SpawnVehicle(modelOrHash: number | string, coords: Coords, heading: number, callback?: Function);

    /**
     * This function teleports an entity.
     * @param entity
     * @param coords
     * @param callback
     */
    Teleport(entity: number, coords: Coords, callback?: Function);

    Utils: ESXGameUtil;
}

declare class ESXGameUtil {
    /**
     * This function draws 3D text.
     * @param coords
     * @param text
     * @param size
     */
    DrawText3D(coords: Coords, text: string, size: number);
}
