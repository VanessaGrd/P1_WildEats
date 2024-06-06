const close = document.querySelector(".close");
const connexionForm = document.querySelector(".connexionForm");
const inscriptionForm = document.querySelector(".inscriptionForm");
const close2 = document.querySelector(".close2");
const connexionBtn = document.querySelector(".B2");
const inscriptionBtn = document.querySelector(".B3");

close.addEventListener("click", function () {
  connexionForm.style.display = "none";
  connexionBtn.style.display = "flex";
});

connexionBtn.addEventListener("click", function () {
  connexionForm.style.display = "flex";
  connexionBtn.style.display = "none";
});

close2.addEventListener("click", function () {
  inscriptionForm.style.display = "none";
  inscriptionBtn.style.display = "flex";
});

inscriptionBtn.addEventListener("click", function () {
  inscriptionForm.style.display = "flex";
  inscriptionBtn.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const registerButton = document.getElementById("registerButton");
  const loginButton = document.getElementById("loginButton");

  registerButton.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const address = document.getElementById("address").value;
    const tel = document.getElementById("tel").value;
    const campus = document.getElementById("campus").value;
    const email = document.getElementById("registerMail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    const user = {
      name,
      surname,
      address,
      tel,
      campus,
      email,
      password,
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Inscription réussie !");
  });

  loginButton.addEventListener("click", () => {

    const email = document.getElementById("loginMail").value;
    const password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      console.log("inscription réussie");
      console.log(user);
      window.location.href = "restaurant_list.html";
    } else {
      alert("Email ou mot de passe incorrect.");
    }
  });
});
