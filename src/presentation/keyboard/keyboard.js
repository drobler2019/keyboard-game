import './keyboard.css';
import html from './keyboard.html?raw';
import { TextService } from '../../services/TextService.js';
import { toggleCapsLock } from "../input-text/inputContainerText.js";
import { moverBarra } from "../input-text/inputContainerText.js";

export let keys = [];
let keyboard = null;
let textService = null;

export const renderKeyBoard = (element) => {
    const templateKeyBoard = document.createElement('section');
    templateKeyBoard.className = 'keyboard-container';
    templateKeyBoard.innerHTML = html;
    keyDownEvent(templateKeyBoard);
    pushKeysElement(templateKeyBoard);
    element.appendChild(templateKeyBoard);
}

function pushKeysElement(templateKeyBoard) {
    const sectionElements = templateKeyBoard.querySelectorAll('.keyboard section');
    sectionElements.forEach(({ children }) => [...children].forEach(divElement => keys.push(divElement)));
}

function keyDownEvent(element) {

    keyboard = element.querySelector('.keyboard');
    const containerText = document.querySelector('.container-text');

    if (!textService) {
        textService = new TextService(containerText);
    }

    const { lastElementChild } = containerText;

    document.addEventListener('keydown', ({ key, code }) => {

        toggleCapsLock(code);
        const tecla = keys.find(k => k.id === code);
        if (!tecla) return;
        tecla.classList.add('presionar');
        document.addEventListener('keyup', () => tecla.classList.remove('presionar'));
        textService.textContent(lastElementChild, { key, code });
        if (textService.validateText(code)) {
            moverBarra(lastElementChild, textService.countBarra);
        }

    });
}