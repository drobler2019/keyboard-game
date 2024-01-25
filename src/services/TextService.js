export class TextService {

    constructor(element) {
        this.count = 0;
        this.countBarra = 0;
        this.space = 0;
        element.lastElementChild.innerHTML = 'En este tutorial vamos a ver.'
            .split("").map(word => `<span>${word}</span>`).join("");
    }

    textContent(element, { key, code }) {

        if (this.validateText(code)) {
            if (code === 'Backspace') {
                this.backspace(element, element.textContent);
                if (this.countBarra > 0) {
                    this.countBarra--;
                    this.count--;
                }
                return;
            }
            let textContentList = element.textContent.split("");
            let words = element.innerHTML.split("");
            let templateText = this.getTemplateText(words);
            templateText = this.validateCharacter(textContentList, templateText, key, code);
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

    validateCharacter(letras, templateText, key, code) {
        while (this.count < letras.length) {
            let char = letras[this.count];
            if (char === key) {
                templateText[this.count] = `<span style="color: green">${char}</span>`;
                this.space = 0;
            } else {
                if (char.trim() === '') {
                    if (this.space < 10) {
                        templateText[this.count] = `<span style="color: red" id="mal">${key}</span>`
                            + templateText[this.count];
                        this.countBarra++;
                        this.space++;
                        this.count++;
                    }

                    return templateText;
                }
                this.space = 0;
                templateText[this.count] = `<span style="color: red">${char}</span>`;
            }
            this.count++;
            if (this.validateText(code)) {
                this.countBarra++;
            }
            break;
        }
        return templateText;
    }

    backspace(element, textContent) {
        const position = this.count === 0 ? this.count : this.count - 1;
        const ultimaLetra = textContent.split("")[position];
        const words = textContent.split(" ");
        let textTemplate = element.innerHTML.split("");
        let template = this.getTemplateText(textTemplate);
        const wordsBadSpace = template.filter(te => te.search('mal') !== -1);
        if (words.length !== 0) {
            if (wordsBadSpace.length !== 0) {
                if (this.countBarra > 0) {
                    if (ultimaLetra.trim() == '') {
                        return;
                    }
                    template.splice(this.countBarra - 1, 1);
                    element.innerHTML = template.join("");
                }
                return;
            }

            template[position] = `<span>${ultimaLetra}</span>`;
            element.innerHTML = template.join("");

        }
    }

    validateText(code) {
        return (code !== 'CapsLock' && code !== 'ShiftRight' && code !== 'ShiftLeft'
            && code !== 'Enter' && code !== 'BracketLeft');
    }
}