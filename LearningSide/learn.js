// while loop - will repeat some code while some condition is true


let username = " ";

while(username.trim() === ""){

    console.log(`You didnt enter your name`);
    username = prompt("Please enter your name: ");
    if(username === null) break;
}
console.log(`Hello ${username}`);