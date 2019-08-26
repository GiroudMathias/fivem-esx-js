export declare class ESXClientScaleform {
    /**
     * This function shows the 'Breaking News' scaleform used multiple times in the campaign.
     * The msg and bottom variables support HTML.
     * @param title
     * @param message
     * @param bottom
     * @param seconds
     */
    ShowBreakingNews(title: string, message: string, bottom: string, seconds: number);

    /**
     * This function displays a freemode message for the player.
     * @param title
     * @param message
     * @param seconds
     */
    ShowFreemodeMessage(title: string, message: string, seconds: number);

    /**
     * This function shows a basic popup warning, like the quit confirmation warning.
     * @param title
     * @param message
     * @param bottom
     * @param seconds
     */
    ShowPopupWarning(title: string, message: string, bottom: string, seconds: number);

    /**
     * This function starts the traffic scaleform movie used in the campaign.
     * @param seconds
     */
    ShowTrafficMovie(seconds: number);

    Utils: ESXClientScaleformUtils;
}

declare class ESXClientScaleformUtils {
    /**
     * This function requests and returns the scaleform movie parsed.
     * Here's a list of available scaleforms.
     * @param movie
     */
    RequestScaleformMovie(movie: string);
}
