const getTitle = document.getElementsByClassName('companyName');

const handleTitle = () => {
    getTitle[0].classList.toggle('change');
}

getTitle[0].addEventListener('click', handleTitle);

const getMenu=document.getElementById('hamberger');
const getUl=document.getElementById('companyNameUl');


const handleClick=()=>{
    getUl.classList.toggle('active');
}
getMenu.addEventListener('click',handleClick);