const modal = document.querySelector(".modal")
const registerBtn = document.querySelector("#header__navbar-item-register");
const loginBtn = document.querySelector("#header__navbar-item-login");
const formLogin = document.querySelector(".auth-form.auth-form-login");
const formRegister = document.querySelector(".auth-form.auth-form-register");
const closeModalLogin = document.querySelector(".auth-form__controls-back-login");
const closeModalRegister = document.querySelector(".auth-form__controls-back-register");

modal.style.display = "none";

const openForm = (name) => {
    switch(name){
        case "register":
            modal.style.display = "flex";
            formLogin.style.display = "none";
            formRegister.style.display = 'block';
            break;
        case "login":
            modal.style.display = "flex";
            formLogin.style.display = "block";
            formRegister.style.display = 'none';
            break;
    }

}

const closeModal= () => {
    modal.style.display = 'none';
}