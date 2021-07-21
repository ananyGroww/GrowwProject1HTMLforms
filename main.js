"use strict";

// src: https://stackoverflow.com/a/28485815
function isEmpty(str) {
    return !str.trim().length;
};

// src: https://stackoverflow.com/a/1731200
function hasWhiteSpace(str) {
    return str.indexOf(' ') >= 0;
}
function setFocusifpossible(formVerification, idtobefocused) {
    if(formVerification.focussetter === false){
        let focusingelement = document.getElementById(`${idtobefocused}`);
        focusingelement.focus();
        focusingelement.scrollIntoView();
        formVerification.focussetter = true;
    }
};
function setFocusifpossibleforRadio(formVerification, idtobefocused) {
    if(formVerification.focussetter === false){
        let focusingelement = document.querySelectorAll(`input[name="${idtobefocused}"]`);
        // src: https://stackoverflow.com/a/27787182
        focusingelement[0].focus();
        focusingelement[0].scrollIntoView();
        formVerification.focussetter = true;
    }
};
function setConsoleandAlertprompts(str) {
    alert(`Please enter ${str}`);
    console.log('first name is empty');
};
function initiateValueCheck() {
    let formVerification = {
        first_name: document.querySelector('#first_name'),
        last_name: document.querySelector('#last_name'),
        other_details: document.querySelector('#other_details'),
        focussetter: false,
        allGood: true,
        gender: document.querySelectorAll('input[name="Gender"]'),
        selectedGender: -1,
        maritalStatus: document.querySelectorAll('input[name="Marital_status"]'),
        selectedMaritalStatus: -1,
        terms_conditions: document.getElementById('terms_conditions'),
    }

    // src: https://stackoverflow.com/a/17500754
    if(isEmpty(formVerification.first_name.value)){
        alert('Please enter First name');
        console.log('first name is empty');
        setFocusifpossible(formVerification, 'first_name');
        formVerification.allGood = false;
    }
    if(isEmpty(formVerification.last_name.value)){
        alert('Please enter Last name');
        console.log('last name is empty');
        setFocusifpossible(formVerification, 'last_name');
        formVerification.allGood = false;
    }
    // src: https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
    
    for(const genderVal of formVerification.gender){
        if(genderVal.checked){
            formVerification.selectedGender = genderVal.value;
            break;
        }
    }
    if(formVerification.selectedGender === -1){
        alert('Please enter Gender');
        setFocusifpossibleforRadio(formVerification, 'Gender');
        formVerification.allGood = false;
    }
    
    for(const married of formVerification.maritalStatus){
        if(married.checked){
            formVerification.selectedMaritalStatus = married.value;
            break;
        }
    }
    if(formVerification.selectedMaritalStatus === -1){
        alert('Please enter Marital status');
        setFocusifpossibleforRadio(formVerification, 'Marital_status');
        formVerification.allGood = false;
    }
    if(isEmpty(spouse_name.value)){
        alert('Please enter Spouse\'s name');
        console.log('Spouse\'s name is empty');
        setFocusifpossible(formVerification, 'spouse_name');
        formVerification.allGood = false;
    }
    if(isEmpty(formVerification.other_details.value)){
        alert('Please enter Other details');
        console.log('other details is empty');
        setFocusifpossible(formVerification, 'other_details');
        formVerification.allGood = false;
    }
    if(!isEmpty(formVerification.first_name.value) && hasWhiteSpace(formVerification.first_name.value)){
        alert('Please remove whitespace from First name');
        setFocusifpossible(formVerification, 'first_name');
        formVerification.allGood = false;
    }
    if(!isEmpty(formVerification.last_name.value) && hasWhiteSpace(formVerification.last_name.value)){
        alert('Please remove whitespace from Last name');
        setFocusifpossible(formVerification, 'last_name');
        formVerification.allGood = false;
    }
    // src: https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp
    
    if(!formVerification.terms_conditions.checked){
        alert('Please enter terms & conditions');
        console.log('terms and condition is empty');
        setFocusifpossible(formVerification, 'terms_conditions');
        formVerification.allGood = false;
    }
    return formVerification.allGood;
};

// addEventListener to button: https://www.javascripttutorial.net/dom/events/add-an-event-handler/
const testbtn = document.querySelector( '.save' );
testbtn.addEventListener( 'click', function(event) {
    console.log('test button is pressed');
    if(initiateValueCheck() === true){
        alert('Thank you!');
    }
} );
// src1: https://www.techiedelight.com/bind-change-event-handler-radio-button-javascript/#:~:text=radio.addEventListener(%27change%27
// src2: https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
// const marriedYes = document.getElementById('married');
married.addEventListener( 'change', () => {
    document.getElementById('spouse_name').disabled = false;
} );
single.addEventListener( 'change', () => {
    document.getElementById('spouse_name').disabled = true;
} );