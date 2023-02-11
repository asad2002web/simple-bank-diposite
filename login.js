// step -1: add click even hundler with the submit btn.
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email field.
    // alywes email field .value adedd.
    const emailField = document.getElementById('user-email');
    const emailValue = emailField.value ;
    // step-3: get password 
    const passwordField = document.getElementById('user-password');
    const passwordValue = passwordField.value ;
    // DANGER: do not use all time 
    // User Validation 
    if( emailValue === 'asad@bd.com' && passwordValue === 'secret'){
        window.location.href = "bankpage.html";
    }
    else{
        alert ("Wrong  ! User ");
    }
});

// Welcome Bank

