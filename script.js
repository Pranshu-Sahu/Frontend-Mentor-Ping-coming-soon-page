const msg = document.getElementsByClassName('error')[0];
const input = document.getElementsByTagName('input')[0];

function displayErrorMessage(txt) {
    input.style.borderColor = 'rgb(255, 82, 99)';
    msg.innerHTML = txt;
}

function clearErrorMessage() {
    msg.innerHTML = '';
}

function validateForm() {
    let returnVal = true;
    clearErrorMessage();
    let email = document.forms['myForm']['femail'].value;
    if (email.length == 0) {
        displayErrorMessage("Whoops! It looks like you forgot to add your email");
        returnVal = false;
    } else if (!email.endsWith('@gmail.com')) {
        displayErrorMessage("Please provide a valid email address");
        returnVal = false;
    }
    return returnVal;
}