document.getElementById('icecream-form').onsubmit = ()  => {

    clearErrors();

    let isValid = true;

    let name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById("err-name").style.display = "block";
        isValid = false;
    }

    let email = document.getElementById('email').value.trim();
    if(!email || email.indexOf("@")===-1) {
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    }

    let flavor = document.getElementById('flavor').value;
    if(!flavor) {
        document.getElementById("err-flavor").style.display = "block";
        isValid = false;
    }

    let coneButtons = document.getElementsByName("method");
    let count = 0;
    for(let i =0; i < coneButtons.length; i++) {
        if(coneButtons[i].checked) {
            count++;
        }
    }
    if(count === 0) {
        document.getElementById("err-cone").style.display = "block";
        isValid = false;
    }

    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for(let i=0; i < errors.length; i++) {
        errors[i].style.display= "none";
    }
}