/**
 * 
 * @param {HTMLDivElement} element 
 */

import { renderInputText } from "./presentation/input-text/input-text";
import { renderKeyBoard } from "./presentation/keyboard/keyboard";


export const app = (element) => {
    renderInputText(element);
    element.appendChild(renderKeyBoard());
};