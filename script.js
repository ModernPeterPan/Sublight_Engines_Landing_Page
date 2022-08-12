// The Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navOptions = document.querySelector(".nav-options");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navOptions.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navOptions.classList.remove("active");
}))


// The Form Validation
const form = document.getElementById('form');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const language = document.getElementById('langs');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    console.log('Inside checkInputs');
    // get the values from the inputs
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const languageValue = language.value;
    
    if(!fullNameValue) {
        // show error
        // add error class
        setErrorFor(fullName, 'Your Full Name cannot be blank');
    } else {
        // add success class
        setSuccessFor(fullName);
    }

    if(!emailValue) {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if(!phoneValue) {
        setErrorFor(phone, 'You need to put a phone number');
    } else if(!isPhone(phoneValue)){
        setErrorFor(phone, 'You need to put a valid phone number');
    } else {
        setSuccessFor(phone);
    }

    if(languageValue == 'Select') {
        setErrorFor(language, 'Please select a language');
    } else {
        setSuccessFor(language);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone) {
    return /^\+?\d?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phone);
    // return /^(1|)[2-9]\d{2}[2-9]\d{6}$/.test(phone);
}