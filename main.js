"use strict";

// src: https://stackoverflow.com/a/28485815
function isEmpty(str) {
    return !str.trim().length;
};

// src: https://stackoverflow.com/a/1731200
function hasWhiteSpace(str) {
    return str.indexOf(' ') >= 0;
}

// addEventListener to button: https://www.javascripttutorial.net/dom/events/add-an-event-handler/
const testbtn = document.querySelector( '.save' );
testbtn.addEventListener( 'click', function(event){
    console.log('test button is pressed');
    let first_name = document.querySelector('#first_name');
    let last_name = document.querySelector('#last_name');
    let other_details = document.querySelector('#other_details');
    let focussetter = false;
    let allGood = true;
    // src: https://stackoverflow.com/a/17500754
    if(isEmpty(first_name.value)){
        alert('Please enter First name');
        console.log('first name is empty');
        if(focussetter === false){
            let focusingelement = document.getElementById('first_name');
            focusingelement.focus();
            focusingelement.scrollIntoView();
            focussetter = true;
        }
        allGood = false;
    }
    if(isEmpty(last_name.value)){
        alert('Please enter Last name');
        console.log('last name is empty');
        if(focussetter === false){
            let focusingelement = document.getElementById('last_name');
            focusingelement.focus();
            focusingelement.scrollIntoView();
            focussetter = true;
        }
        allGood = false;
    }
    // src: https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
    let gender = document.querySelectorAll('input[name="Gender"]');
    let selectedGender = -1;
    for(const genderVal of gender){
        if(genderVal.checked){
            selectedGender = genderVal.value;
            break;
        }
    }
    if(selectedGender === -1){
        alert('Please enter Gender');
        if(focussetter === false){
            let focusingelement = document.querySelectorAll('input[name="Gender"]');
            // src: https://stackoverflow.com/a/27787182
            focusingelement[0].focus();
            focusingelement[0].scrollIntoView();
            focussetter = true;
        }
        allGood = false;
    }
    let maritalStatus = document.querySelectorAll('input[name="Marital_status"]');
    let selectedMaritalStatus = -1;
    for(const married of maritalStatus){
        if(married.checked){
            selectedMaritalStatus = married.value;
            break;
        }
    }
    if(selectedMaritalStatus === -1){
        alert('Please enter Marital status');
        if(focussetter === false){
            let focusingelement = document.querySelectorAll('input[name="Marital_status"]');
            // src: https://stackoverflow.com/a/27787182
            focusingelement[0].focus();
            focusingelement[0].scrollIntoView();
            focussetter = true;
        }
        allGood = false;
    }
    if(isEmpty(spouse_name.value)){
        alert('Please enter Spouse\'s name');
        console.log('Spouse\'s name is empty');
        if(focussetter === false){
            let focusingelement = document.getElementById('other_details');
            focusingelement.focus();
            focusingelement.scrollIntoView();
            focussetter = true;
        }
        allGood = false;
    }
    if(isEmpty(other_details.value)){
        alert('Please enter Other details');
        console.log('other details is empty');
        if(focussetter === false){
            let focusingelement = document.getElementById('other_details');
            focusingelement.focus();
            focusingelement.scrollIntoView();
            focussetter = true;
        }
        allGood = false;
    }
    if(!isEmpty(first_name.value) && hasWhiteSpace(first_name.value)){
        alert('Please remove whitespace from First name');
        if(focussetter === false){
            let focusingelement = document.getElementById('first_name');
            focusingelement.focus();
            focusingelement.scrollIntoView();
            focussetter = true;
        }
        allGood = false;
    }
    if(!isEmpty(last_name.value) && hasWhiteSpace(last_name.value)){
        alert('Please remove whitespace from Last name');
        if(focussetter === false){
            let focusingelement = document.getElementById('last_name');
            focusingelement.focus();
            focusingelement.scrollIntoView();
            focussetter = true;
        }
        allGood = false;
    }
    // src: https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp
    let terms_conditions = document.getElementById('terms_conditions');
    if(!terms_conditions.checked){
        alert('Please enter terms & conditions');
        console.log('terms and condition is empty');
        if(focussetter === false){
            let focusingelement = document.getElementById('terms_conditions');
            focusingelement.focus();
            focusingelement.scrollIntoView();
            focussetter = true;
        }
        allGood = false;
    }
    if(allGood === true){
        alert('Thank you!');
    }
});
// src1: https://www.techiedelight.com/bind-change-event-handler-radio-button-javascript/#:~:text=radio.addEventListener(%27change%27
// src2: https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
// const marriedYes = document.getElementById('married');
married.addEventListener('change', () => {
    document.getElementById('spouse_name').disabled = false;
} );
single.addEventListener('change', () => {
    document.getElementById('spouse_name').disabled = true;
} )