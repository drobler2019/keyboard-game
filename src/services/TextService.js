export class TextService {

    constructor(element) {
        this.count = 0;
        element.innerHTML = 'Manifestó que el propósito debe ser unirse en un solo partido. Propuso que se haga una convocatoria al frente amplio en cada municipio, departamento "con todas las fuerzas democráticas que quieran'
            .split("").map(word => `<span>${word}</span>`).join("");
    }

    textContent(element, { key, code }) {
        //cargar la información de los textos
        if (this.validateText(code)) {
            if (code === 'Backspace') {
                this.backspace(element, element.textContent);
                return;
            }
            let words = element.innerHTML.split("");
            let templateText = this.getTemplateText(words);
            let letras = element.textContent.split("");
            templateText = this.validateChar(letras, templateText, key);
            element.innerHTML = templateText.join("");

        }
    }

    getTemplateText(words) {
        let templateText = '';
        for (let index = 0; index < words.length; index++) {
            let element = words[index];
            templateText += element;
            if (element === '>' && words[index + 1] === '<') {
                templateText += '_';
            }
        }
        return templateText.split("_");
    }

    validateCharacter(letras, templateText, key) {
        while (this.count < letras.length) {
            let x = letras[this.count];
            if (x === key) {
                templateText[this.count] = `<span style="color: green">${x}</span>`;
            } else {
                templateText[this.count] = `<span style="color: red">${x}</span>`;
            }
            this.count++;
            break;
        }
        return templateText;
    }

    backspace(element, words) {
        const w = words.split("");
        if (w.lenght !== 0) {
            w.pop();
            element.textContent = '';
            w.forEach(word => element.textContent += word);
        }
    }

    validateText(code) {
        return (code !== 'CapsLock' && code !== 'ShiftRight' && code !== 'ShiftLeft'
            && code !== 'Enter' && code !== 'BracketLeft');
    }
}