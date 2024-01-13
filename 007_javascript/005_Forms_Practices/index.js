const userForm = document.querySelector('#user-form');
    const fullName = userForm.fullname;
    const email = userForm.email;
    const sex = userForm.sex;
    const terms = userForm.terms;
    const error = document.querySelector('#error');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    error.innerHTML = '';

    if(fullName.value === '' || fullName.value === null){
        error.style.display = 'block';
        error.innerHTML += "<li>Please, fill your name</li>";
    }else{
        error.style.display = 'none'
    }
    
    if (email.value === '' || email.value === null) {
        error.style.display = 'block';
        error.innerHTML += "<li>Please, fill your email</li>";
    }else{
        error.style.display = 'none'
    }
    
    if (sex.value === '' || sex.value === null){
        error.style.display = 'block';
        error.innerHTML += "<li>Please, select a genre</li>";
    }else{
        error.style.display = 'none'
    }

    
    if (terms.checked === false) {
        error.style.display = 'block';
        error.innerHTML += "<li>Please, accept terms and conditions</li>";
    }else{
        error.style.display = 'none'
    }
    
    
})