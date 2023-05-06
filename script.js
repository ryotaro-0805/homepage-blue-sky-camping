const getTitle = document.getElementsByClassName('companyName');

const handleTitle = () => {
    getTitle[0].classList.toggle('change');
}

getTitle[0].addEventListener('click', handleTitle);