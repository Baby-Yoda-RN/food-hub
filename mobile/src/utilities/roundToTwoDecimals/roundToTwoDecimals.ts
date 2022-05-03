import { TRountToTwoDecimals } from "./roundToTwoDecimals.type";

export const roundToTwoDecimals: TRountToTwoDecimals = number =>
    parseFloat(number.toFixed(2));