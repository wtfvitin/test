const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão do botão
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão do botão
        item.scrollLeft -= containerWidth;
    });
});
