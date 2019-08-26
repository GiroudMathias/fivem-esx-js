export declare class ESXStreaming {
    /**
     * This function requests and returns the animation directory parsed. A very common usage it to play animations using TaskPlayAnim(). You can use Alex Guirre's Animations List found on Github.
     * @param animDict
     * @param callback
     */
    RequestAnimDict(animDict: string, callback?: Function);

    /**
     * This function requests and returns the animation set parsed. Animation sets provide movement styles, commonly used with SetPedMovementClipset().
     * @param animSet
     * @param callback
     */
    RequestAnimSet(animSet: string, callback?: Function);

    /**
     * This function requests and returns the specified model parsed, a very common usage is spawning objects, etc.
     * @param model
     * @param callback
     */
    RequestModel(model: number | string, callback?: Function);

    /**
     *
     * @param assetName
     * @param callback
     */
    RequestNamedPtfxAsset(assetName: string, callback?: Function);

    /**
     * This function requests and returns the texture directory parsed. This is commonly used when loading sprites, then draw them on screen using DrawSprite(), an example would be drawing a speedometer.
     * @param textureDict
     * @param callback
     */
    RequestStreamedTextureDict(textureDict: string, callback?: Function);

    /**
     *
     * @param weaponHash
     * @param callback
     */
    RequestWeaponAsset(weaponHash: number | string, callback?: Function);
}
