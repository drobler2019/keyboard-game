export const textContent = (element, { key, code }) => {
    //cargar la información de los textos
    if (validateText(code)) {
        if(code === 'Backspace') {
            backspace(element,element.textContent);
            return;
        }
        element.textContent += key;
    }

}

function backspace(element, words) {
    const w = words.split("");
    if(w.lenght !== 0) {
        w.pop();
        element.textContent = '';
        w.forEach(word => element.textContent += word);
    }
}

function validateText(code) {
    return (code !== 'CapsLock'
        && code !== 'ShiftRight'
        && code !== 'ShiftLeft'
        && code !== 'Enter'
        && code !== 'BracketLeft');
}