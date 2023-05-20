const getMenu = document.getElementById('hamberger');
const getUl = document.getElementById('companyNameUl');
const handleClose = () => {
    getUl.classList.remove('active');
    getIcon.textContent = 'menu';
};
const getIcon = document.getElementById('menu');

const handleClick = () => {
    getUl.classList.toggle('active');
    if (getUl.classList.value === 'active') {
        window.addEventListener('scroll', handleClose)
        getIcon.textContent = 'close';
    } else {
        getIcon.textContent = 'menu';
    };
}
getMenu.addEventListener('click', handleClick);

// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: 'fade',
    direction: 'horizontal',
    loop: true,
    autoplay: { delay: 3500 },
    speed: 1500,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});
  // swiper ここまで