
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbolChars ="!@#$%^&*()_+-=[]{}|;:',.<>?/";
    const numberChars = "1234567890";

    let allowChars = "";
    let password = "";

    allowChars += includeLowercase ? lowercaseChars : "";
    allowChars += includeUppercase ? uppercaseChars : "";
    allowChars += includeSymbols ? symbolChars : "";
    allowChars += includeNumbers ? numberChars : "";

    if(length <= 0){
        return null;
    }
    if(allowChars.length === 0){
        return null;
    }
    
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowChars.length);
        password += allowChars[randomIndex];
    }

    return password;
}

// DOM Elements
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const passwordOutput = document.getElementById('passwordOutput');
const lengthInput = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');

// Update length display
lengthInput.addEventListener('input', function() {
    lengthValue.textContent = this.value;
});

// Generate password on button click
generateBtn.addEventListener('click', function() {
    const length = parseInt(lengthInput.value);
    const includeLowercase = lowercaseCheckbox.checked;
    const includeUppercase = uppercaseCheckbox.checked;
    const includeNumbers = numbersCheckbox.checked;
    const includeSymbols = symbolsCheckbox.checked;

    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    
    if(password === null) {
        passwordOutput.value = 'Select at least one option!';
        passwordOutput.style.color = '#e74c3c';
    } else {
        passwordOutput.value = password;
        passwordOutput.style.color = '#333';
    }
});

// Copy password to clipboard
copyBtn.addEventListener('click', function() {
    if(passwordOutput.value && passwordOutput.value !== 'Select at least one option!') {
        navigator.clipboard.writeText(passwordOutput.value);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = 'Copy';
        }, 2000);
    }
});

// Generate password on page load
window.addEventListener('load', function() {
    generateBtn.click();
});