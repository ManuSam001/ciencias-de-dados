const getCSS = (variavel) => {
    return getCSSComputedStyle(document.body).getPropertyValue(variavel)
};

const tickConfig = {
    color: getCSS('--primaty-color'),
    size: 15,
    familly: getCSS('--font')
}
export{ getCSS, tickConfig }