import { TCheckIfLastItemOfArray } from "./checkIfLastItemOfArray.type";

export const checkIfLastItemOfArray: TCheckIfLastItemOfArray<any> = (
    array,
    element,
) => {
    const lastIndex = array.length - 1;
    if (lastIndex === element) return true;
    return false;
};