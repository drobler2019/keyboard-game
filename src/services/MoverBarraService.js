let spans = null;
//todo corregir movimiento de barra al final del texto.
export const moverBarra = (element, barra, count) => {
    if (!spans) {
        spans = element.children;
    }
    const span = [...spans].filter(span => span.nodeName === 'SPAN')[count];
    if (span) {
        const { offsetLeft, offsetTop } = span;
        barra.style.insetInlineStart = `${offsetLeft - 2}px`;
        barra.style.insetBlockStart = `${offsetTop}px`;
    }
}