import { keys } from "../presentation/keyboard/keyboard";
import { textContent } from "./TextService";

let keyboard = null;

export const keydownEvent = (element) => {

    keyboard = element.querySelector('.keyboard');
    const capsLock = document.querySelector('.capsLock');
    const containerText = capsLock.nextElementSibling;

    document.addEventListener('keydown', (event) => {
        
        const { key, code } = event;

        if (code === 'CapsLock') {
            capsLock.classList.toggle('mostrar');
        }

        const tecla = keys.find(k => k.id === code);
        if (!tecla) return;
        tecla.classList.add('presionar');
        document.addEventListener('keyup', () => tecla.classList.remove('presionar'));
        textContent(containerText,{ key, code });

    });

};