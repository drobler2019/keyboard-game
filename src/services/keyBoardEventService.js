import { keys } from "../presentation/keyboard/keyboard";
import { moverBarra } from "./MoverBarraService";
import { TextService } from "./TextService";

let keyboard = null;
let textService = null;

export const keydownEvent = (element) => {

    keyboard = element.querySelector('.keyboard');
    const capsLock = document.querySelector('.capsLock');
    const containerText = capsLock.nextElementSibling;

    if (!textService) {
        textService = new TextService(containerText);
    }

    
    const barra = document.querySelector('.barra');


    document.addEventListener('keydown', (event) => {

        const { key, code } = event;

        if (code === 'CapsLock') {
            capsLock.classList.toggle('mostrar');
        }

        const tecla = keys.find(k => k.id === code);
        if (!tecla) return;
        tecla.classList.add('presionar');
        document.addEventListener('keyup', () => tecla.classList.remove('presionar'));
        textService.textContent(containerText.lastElementChild, { key, code });
        if (textService.validateText(code)) {
            moverBarra(containerText.lastElementChild,  barra, textService.countBarra);
        }
    });

};