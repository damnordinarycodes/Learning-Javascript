
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbolChars ="!@#$%^&*()>?:>?}|{><?/.,,;'[]";
    const numberChars = "1234567890"


    let allowChars = "";
    let password = "";

    allowChars += includeLowercase ? lowercaseChars : "";
    allowChars += includeUppercase ? uppercaseChars : "";
    allowChars += includeLowercase ? symbolChars : "";
    allowChars += includeNumbers ? numberChars : "";

if(length <= 0){
    return`(password length must be 12)`;
}
if(allowChars.length === 0 )
    return (`atleast one set of char must be selected`)
for(i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random()* allowChars.length)
    password += allowChars[randomIndex]
}

    return password;
}


const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase , 
                                    includeNumbers , includeSymbols , includeUppercase);

console.log(`Generated Password : ${password}`)