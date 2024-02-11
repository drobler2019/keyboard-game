/**
 * 
 * @param {HTMLDivElement} element 
 */

import { renderInputText } from "./presentation/input-text/inputContainerText";
import { renderKeyBoard } from "./presentation/keyboard/keyboard";


export const app = (element) => {
    renderInputText(element);
    renderKeyBoard(element);
};