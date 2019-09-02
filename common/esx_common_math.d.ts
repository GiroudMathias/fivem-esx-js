export class ESXCommonMath {
    /**
     * This function groups numbers, making them easier to understand by humans. Used in most nofications when money is showed, for example when buying a new car at the vehicle shop.
     * @param number
     */
    GroupDigits(number: number): string;

    /**
     * This function rounds off a number, and optionally you can parse how many decimals you want (defaults to 0)
     * @param value
     * @param numDecimalPlaces
     */
    Round(value: number, numDecimalPlaces?: number): number;

    /**
     * This function trims an text, removing all trailing whitespaces. Often used when sanitizing the GetVehicleNumberPlateText() native.
     * @param value
     */
    Trim(value: string): string;
}