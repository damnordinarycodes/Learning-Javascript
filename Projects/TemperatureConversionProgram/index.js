
const textBox = document.getElementById("textbox");
const toCl = document.getElementById("toCl");
const toFn = document.getElementById("toFn");
const result = document.getElementById("result");

let temp;





function convert() {
    if (toFn.checked) {
        result.textContent = "You have selected Fahrenheit";
        temp = Number(textbox.value);
        temp = temp * 9 /  5 + 32;
        result.textContent = temp + "oF";
    }
    else if (toCl.checked) {
        result.textContent = "You have selected Celsius";
        temp = Number(textbox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp + "°C";
    }
    else {
        result.textContent = "Select a unit";
    }

}