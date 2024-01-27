const POSITION_INIT_ELEMENT = 10;
const VALUE_POSITION_BARRA = 2;
const BEFORE_ELEMENT = 1;

let spans;

export const moverBarra = (element, barra, count) => {
    if (!spans) {
        spans = element.children;
    }
    const span = [...spans].filter(span => span.nodeName === 'SPAN')[count];
    
    if (span) {
        const { offsetLeft, offsetTop } = span;
        barra.style.insetInlineStart = `${offsetLeft - VALUE_POSITION_BARRA}px`;
        barra.style.insetBlockStart = `${offsetTop}px`;
        return;
    } 
    const spanBefore = [...spans].filter(s => s.nodeName === 'SPAN')[count - BEFORE_ELEMENT];
    barra.style.insetInlineStart = `${spanBefore.offsetLeft + POSITION_INIT_ELEMENT - VALUE_POSITION_BARRA}px`;
}