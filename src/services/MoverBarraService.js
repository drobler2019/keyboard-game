const POSITION_INIT_ELEMENT = 15;
const VALUE_POSITION_BARRA = 2;
const BEFORE_ELEMENT = 1;
const POSITION_TOP_INIT = 4;

export const moverBarra = ({ children }, count) => {

    const barra = document.querySelector('.barra');
    const span = [...children].filter(span => span.nodeName === 'SPAN')[count];

    if (span) {
        const { offsetLeft, offsetTop } = span;
        barra.style.insetInlineStart = `${offsetLeft - VALUE_POSITION_BARRA}px`;
        barra.style.insetBlockStart = `${offsetTop + POSITION_TOP_INIT}px`;
        return;
    }

    const { offsetLeft } = [...children].filter(s => s.nodeName === 'SPAN')[count - BEFORE_ELEMENT];
    barra.style.insetInlineStart = templateStyle(offsetLeft);

}

function templateStyle(offsetLeft) {
    return `${offsetLeft + POSITION_INIT_ELEMENT - VALUE_POSITION_BARRA}px`;
}