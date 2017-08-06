/*************** Targeting the elements already present inside the page ***************/
const form                      = document.querySelector("form");

const firstFieldset             = document.querySelector('fieldset');
const userNameInput             = document.querySelector('input');

const emailAddress              = document.getElementById('mail');
const regexEmail                = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');

const userTitleSelect           = document.querySelector('#title');
const jobRoleInput              = document.querySelector('#other-title');

const shirtFieldset             = document.querySelector('.shirt');
const userDesignSelect          = document.querySelector('#design');
const selectColorsContainer     = document.querySelector('.select-colors');
const userColorSelect           = document.querySelector("#color");
const userColorValues           = userColorSelect.querySelectorAll('option');

const activitiesFieldset        = document.querySelector('.activities');
const registerTitle             = activitiesFieldset.firstElementChild;
const activitiesCheckboxes      = activitiesFieldset.querySelectorAll("input[type=checkbox]");

const paymentFiedlset           = document.querySelector('.paymentContainer');
const paymentSelect             = document.querySelector('#payment');
const creditCardPayment         = document.querySelector('#credit-card');
const paypalPayment             = document.querySelector(".paypal");
const bitcoinPayment            = document.querySelector(".bitcoin");

const cardNumber                = document.querySelector('#cc-num');
const zipNumber                 = document.querySelector('#zip');
const cvvNumber                 = document.querySelector("#cvv");


/*************** Creating Global Variables ***************/
// Use the variable below for the total sum
let totalSum = 0;

/*************** Creating the DOM Elements ***************/
// The group of elements below is targeting the total price for the "register for activites" part.
const totalPrice = document.createElement('h4');
totalPrice.id = 'total-price';
totalPrice.textContent = "The total price of your order is: " + totalSum + "$";
activitiesFieldset.appendChild(totalPrice);


/*************** Removing DOM Elements ***************/
// The job input element is hidden by default
jobRoleInput.style.display          = "none";
// The three payment options are hidden by default
creditCardPayment.style.display     = "block";
paypalPayment.style.display         = "none";
bitcoinPayment.style.display        = "none";


/*************** Creating the functions wished ***************/
// Modify the element when an error occurs
const verifyInput = (targetedInput, text, color, underlining, borderColor) => {
    targetedInput.previousElementSibling.textContent = text;
    targetedInput.previousElementSibling.style.color = color;
    targetedInput.previousElementSibling.style.textDecoration = underlining;
    targetedInput.style.borderColor = borderColor;
} // /f(verifyInput)

// Check the username element by verifying if it's blank or filled in
const checkUsername = (input) => {
    if (input.value.length === 0) {
        verifyInput(input, "Name: (cannot be blanked)", "#3D0B1A", "underline", "red");
        return false;
    } else {
        verifyInput(input, "Name: ", "#000", "none", "#c1deeb");
        return true;
    }
} // /f(checkUsername)

// Check the e-mail by verifying if it's blank or if the e-mail address is correct.
const checkEmail = (input) => {
    if (input.value.length === 0) {
        verifyInput(input, "Email: (cannot be blanked)", "#3D0B1A", "underline", "red");
        return false;
    } else {
        // And do a regex
        let boolean = regexEmail.test(input.value);
        if (boolean) {
            verifyInput(input, "Email: ", "#000", "none", "#c1deeb");
            return true;
        } else {
            verifyInput(input, "Email: (please enter a valid email address)", "#3D0B1A", "underline", "red");
            return false;
        }
    } 
} // /f(checkEmail)

// Show or hide the color of t-shirts according to its design.
const colorValues = (arrayOfShirt, shirtColor1, shirtColor2) => {
    for (let i = 0; i <arrayOfShirt.length; i++) {
        if (arrayOfShirt[i].className == shirtColor1) {
            arrayOfShirt[i].style.display = 'initial';
        } else if (arrayOfShirt[i].className == shirtColor2) {
            arrayOfShirt[i].style.display = 'initial';
        } else {
            arrayOfShirt[i].style.display = 'none';
        }
    }
    // By default, the first option is always selected
    arrayOfShirt[0].selected = true;
} // /f(colorValues)

// Check if the credit card inputs are in the right form.
const checkCard = (optionSelected) => {
    if ((optionSelected === 'credit card') && checkCardNumber(cardNumber) && verifyCreditCard(zipNumber, 5, 'Zip Code')  && verifyCreditCard(cvvNumber, 3, 'CVV')) {
        return true;
    } else {
        return false;
    }
} // /f(checkCard)

// Check if the card number input has no erros
const checkCardNumber = (input) => {
    if (isNaN(parseInt(input.value))) {
        verifyInput(input, "Card Number: (Should be a number)", "#3D0B1A", "underline", "red");
        return false;
    } else {
        if ((input.value.length >= 13) && (input.value.length <= 16)) {
            verifyInput(input, "Card Number: ", "#000", "none", "#c1deeb");
            return true;
        } else {
            verifyInput(input, "Card Number: (not valid number)", "#3D0B1A", "underline", "red");
            return false;
        }
    }
} // /f(checkCardNumber)

// Check if either zip code or cvv are in the right form
const verifyCreditCard = (inputTargerted, requiredLength, inputText) => {
    if (isNaN(parseInt(inputTargerted.value)) || (inputTargerted.value.length != requiredLength)) {
        verifyInput(inputTargerted, inputText + ": (error)", "#3D0B1A", "underline", "red");
        return false;
    } else {
        verifyInput(inputTargerted, inputText +": ", "#000", "none", "#c1deeb");
        return true;
    }
} // /f(verifyCreditCard)

// Take the Job Role Value and display the node if needed
const showOtherJobRole = (jobRoleValue) => {
    if (jobRoleValue.toLowerCase() === "other") {
        jobRoleInput.style.display = "";
    // If the other value has already been selected and the value is not other anymore, hide this input
    } else {
        jobRoleInput.style.display = "none";
    }
} // /f(showOtherJobRole)

// Take the T-Shirt Design Value and append the new node is either "js puns" or "heart js"
const showColorContainer = (shirtDesign) => {
    if (shirtDesign.toLowerCase() === "js puns") {
        shirtFieldset.appendChild(selectColorsContainer);
        colorValues(userColorValues, 'base', 'puns');
        
    } else if (shirtDesign.toLowerCase() === "heart js") {
        shirtFieldset.appendChild(selectColorsContainer);
        colorValues(userColorValues, 'base', 'heart');
    
    } else {
        shirtFieldset.removeChild(selectColorsContainer);
    }
} // f(showColorContainer)

// Check if one of the activity has been selected, disable the related other one
const checkedActivity = (activity1, activity2) => {
    if (activity1.checked) {
        activity2.setAttribute('disabled', true);
    }
} // /f(checkedActivity)

// Check if one of the activity has been unselected, able the related other one
const uncheckedActivity = (activity1, activity2) => {
    if (!activity1.checked) {
        activity2.removeAttribute('disabled');
    }
} // /f(uncheckedActivity)

// Take the event and able or disable for the activities and display total price
const registeringForActivities = (inputChecked) => {
    // The first couple of checkbox inputs
    let jsFrameworks = document.querySelector('input[name=js-frameworks]');
    let express = document.querySelector('input[name=express]');
    // The second couple of checkbox inputs
    let jsLibs = document.querySelector('input[name=js-libs]');
    let node = document.querySelector('input[name=node]');

    if (inputChecked.checked) {
        // When an input element is checked, take the price of the activity then add it to the total amount
        activityPrice = parseInt(inputChecked.className);
        totalSum = totalSum + activityPrice;
        totalPrice.textContent = "The total price of your order is: " + totalSum + "$";
        checkedActivity(jsFrameworks, express);
        checkedActivity(express, jsFrameworks);
        checkedActivity(jsLibs, node);
        checkedActivity(node, jsLibs);
    } else {
        // When an input element is unchecked, take the price of the activity then remove it to the total amount
        activityPrice = parseInt(inputChecked.className);
        totalSum = totalSum - activityPrice;
        totalPrice.textContent = "The total price of your order is: " + totalSum + "$";
        uncheckedActivity(jsFrameworks, express);
        uncheckedActivity(express, jsFrameworks);
        uncheckedActivity(jsLibs, node);
        uncheckedActivity(node, jsLibs);
    }
}; // /f(registeringForactivities)

// Check if there is one checkbox checked
const checkboxValidation = (inputTargerted) => {
    let status;
    let myArray = [];
    for (let i = 0; i < inputTargerted.length; i++) {
        if (!inputTargerted[i].checked) {
            myArray.push(myArray);
        }
    }
    if (myArray.length === inputTargerted.length) {
        registerTitle.textContent = "Register for Activities: (please chooese at least one activity)";
        registerTitle.style.color = "#3D0B1A";
        registerTitle.style.textDecoration = "underline";
        return false;
    }
    registerTitle.textContent = "Register for Activities: ";
    registerTitle.style.color = "#000";
    registerTitle.style.textDecoration = "none";
    return true;
} // /f(checkboxValidation)

// Show the payment Option according to the select menu
const showBlock = (paymentOption1, paymentOption2, paymentOption3) => {
    paymentOption1.style.display = "block";
    paymentOption2.style.display = "none";
    paymentOption3.style.display = "none";
}; // /f(showBlock)

// Take the payment option and show the child needed
const showPaymentOption = (paymentOptionValue) => {
    if (paymentOptionValue === 'credit card') {
        showBlock(creditCardPayment, paypalPayment, bitcoinPayment);
    } else if (paymentOptionValue === 'paypal') {
        showBlock(paypalPayment, creditCardPayment, bitcoinPayment);
    } else if (paymentOptionValue === 'bitcoin') {
        showBlock(bitcoinPayment, paypalPayment, creditCardPayment);
    }
}; // /f(showPaymentOption)


/*************** Adding the event handlers ***************/
// When the page loads, 
    // focus the first element (here the input Name)
    // hide the color container
window.onload = () => {
    userNameInput.focus();
    shirtFieldset.removeChild(selectColorsContainer);
};

// When the email address input is filled in
emailAddress.addEventListener('keyup', (event) => {
    checkEmail(emailAddress)
});

// When the "Other" Job Role is choosen, show input
userTitleSelect.addEventListener('change', () => {
    let userTitleValue = userTitleSelect.value;
    showOtherJobRole(userTitleValue);
});

// When the design select changes, hide or show the matched elements
userDesignSelect.addEventListener('change', () => {
    let userDesignValue = userDesignSelect.value;
    showColorContainer(userDesignValue);
});

// When the user clicks activities for registration
activitiesFieldset.addEventListener('change', (event) => {
    let target = event.target
    registeringForActivities(target);
});

// When a payment is selected
paymentSelect.addEventListener('change', () => {
    let paymentOption = paymentSelect.value;
    showPaymentOption(paymentOption);
});

// When the form is submited
form.addEventListener('submit', (event) => {
    let paymentOption = paymentSelect.value;

    checkUsername(userNameInput);
    checkEmail(emailAddress);
    checkboxValidation(activitiesCheckboxes);
    
    
    if (paymentOption === 'credit card') {
        checkCardNumber(cardNumber);
        verifyCreditCard(zipNumber, 5, 'Zip Code');
        verifyCreditCard(cvvNumber, 3, 'CVV');
    }

    if (!checkUsername(userNameInput) || !checkEmail(emailAddress) || !checkboxValidation(activitiesCheckboxes) || !checkCard(paymentOption)) {
        event.preventDefault();
    }
});