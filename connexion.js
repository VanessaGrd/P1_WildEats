const close = document.querySelector('.close');
const form = document.querySelector('.form');


close.addEventListener("click", function() {
    form.style.display = "none";
});

const connexionBtn = document.querySelector('.B2');

connexionBtn.addEventListener('click', function() {

    form.style.display = "flex";
});


