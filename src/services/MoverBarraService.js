let spans = null;
export const moverBarra = (element, barra, count) => {
    if (!spans) {
        spans = element.children;
    }
    const span = [...spans].filter(span => span.nodeName === 'SPAN')[count];
    if (span) {
        const { offsetLeft, offsetTop } = span;
        barra.style.insetInlineStart = `${offsetLeft}px`;
        barra.style.insetBlockStart = `${offsetTop}px`;
    }
}