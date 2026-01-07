const Decrease = document.getElementById("Decrease");
const Reset = document.getElementById("Reset");
const Increase = document.getElementById("Increase");
const countlabel = document.getElementById("countlabel");

let count = 0;

function updateCount() {
    countlabel.textContent = count;
}

function increaseCount() {
    count++;
    updateCount();
}

function decreaseCount() {
    count--;
    updateCount();
}

function resetCount() {
    count = 0;
    updateCount();
}

Increase.onclick = increaseCount;
Decrease.onclick = decreaseCount;
Reset.onclick = resetCount;
