import { keydownEvent } from '../../services/keyBoardEventService';
import './keyboard.css';
import html from './keyboard.html?raw';

let templateKeyBoard = null;
export let keys = [];

export const renderKeyBoard = () => {
    templateKeyBoard = document.createElement('section');
    templateKeyBoard.className = 'keyboard-container';
    templateKeyBoard.innerHTML = html;
    keydownEvent(templateKeyBoard);
    getKeys(templateKeyBoard);
    return templateKeyBoard;
}


function getKeys(templateKeyBoard) {
    const { firstElementChild: { children } } = templateKeyBoard;
    [...children]
        .forEach(element => {
            [...element.children].forEach(key => {
                if (key.nodeName === 'SECTION') {
                    [...key.children].forEach(k => keys.push(k));
                    return;
                }
                keys.push(key);
            })
        });
}