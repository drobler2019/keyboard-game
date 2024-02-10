import { keydownEvent } from '../../services/keyBoardEventService';
import './keyboard.css';
import html from './keyboard.html?raw';

let templateKeyBoard = null;
export let keys = [];

export const renderKeyBoard = (element) => {
    templateKeyBoard = document.createElement('section');
    templateKeyBoard.className = 'keyboard-container';
    templateKeyBoard.innerHTML = html;
    keydownEvent(templateKeyBoard);
    pushKeysElement(templateKeyBoard);
    element.appendChild(templateKeyBoard);
}

function pushKeysElement(templateKeyBoard) {
    const sectionElements = templateKeyBoard.querySelectorAll('.keyboard section');
    sectionElements.forEach(({ children }) => [...children].forEach(divElement => keys.push(divElement)));
}