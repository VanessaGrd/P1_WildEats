const close = document.querySelector('.close');
const connexionForm = document.querySelector('.connexionForm');
const inscriptionForm = document.querySelector('.inscriptionForm');
const close2 = document.querySelector('.close2');
const connexionBtn = document.querySelector('.B2');
const inscriptionBtn = document.querySelector('.B3');

close.addEventListener("click", function() {
    connexionForm.style.display = "none";
    connexionBtn.style.display = "flex"
});



connexionBtn.addEventListener('click', function() {

    connexionForm.style.display = "flex";
    connexionBtn.style.display = "none"
});

close2.addEventListener("click", function() {
    inscriptionForm.style.display = "none";
    inscriptionBtn.style.display = "flex"
});

inscriptionBtn.addEventListener('click', function() {

    inscriptionForm.style.display = "flex";
    inscriptionBtn.style.display = "none"
});


