import { toggleCapsLock } from "../presentation/input-text/input-text";
import { keys } from "../presentation/keyboard/keyboard";
import { moverBarra } from "./MoverBarraService";
import { TextService } from "./TextService";

let keyboard = null;
let textService = null;

export const keydownEvent = (element) => {

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

};