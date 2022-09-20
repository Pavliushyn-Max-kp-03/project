console.log("5");
const cards = document.querySelectorAll('.my-promo');
const closePopupBtns = document.querySelectorAll('.popup-closer');
const InfoPopup = document.querySelector(".inf-popup");

cards.forEach((card) => {
    card.addEventListener('click', () => {
        InfoPopup.classList.add('visible');
        document.body.style.overflow = 'hidden';
    });
});

const closePopup = () => {
    InfoPopup.classList.remove('visible');
};

closePopupBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        closePopup();
        document.body.style.overflow = '';
    });
});


InfoPopup.addEventListener('click', (e) => {
    if (e.target.classList.contains('inf-popup')) {
        closePopup();
        document.body.style.overflow = '';
    }
});
