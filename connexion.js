const close = document.querySelector('.close');
const connexionForm = document.querySelector('.connexionForm');


close.addEventListener("click", function() {
    form.style.display = "none";
    connexionBtn.style.display = "flex"
});

const connexionBtn = document.querySelector('.B2');

connexionBtn.addEventListener('click', function() {

    form.style.display = "flex";
    connexionBtn.style.display = "none"
});




