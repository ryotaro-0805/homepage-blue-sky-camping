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

