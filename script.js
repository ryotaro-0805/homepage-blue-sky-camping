const getBody = document.getElementById('all_div');
const getLoad = document.getElementById('loading');
const loadAnime = () => {
    setTimeout(() => {
        getBody.style.opacity = 1;
        getLoad.style.display = 'none';
    }, 1000);
}
document.addEventListener('DOMContentLoaded', loadAnime);
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

//   よくあるご質問　アコーディオン
const getQuestion = document.querySelectorAll('.question');
const getAnswer = document.querySelectorAll('.answer');
getQuestion.forEach((question) => {
    question.addEventListener('click', (e) => {
        e.target.nextElementSibling.classList.toggle('active');
    });
});

//   よくあるご質問　アコーディオン　ここまで

// intersectionovserverで出現時にアニメーションをつける

const getTarget1 = document.querySelectorAll('.changeWrapper');
const getTarget2 = document.querySelectorAll('.changeMain, .changeChild');

console.log(getTarget2);
const options1 = {
    threshold: .05,
}
const options2 = {
    threshold: .3,
}
const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}
getTarget1.forEach((target) => {
    const observer1 = new IntersectionObserver(callback, options1);
    observer1.observe(target);
});

getTarget2.forEach((target) => {
    const observer2 = new IntersectionObserver(callback, options2);
    observer2.observe(target);
});
// intersectionovserverで出現時にアニメーションをつける　ここまで

