// IF STATEMENTS


// let age = 12;
// if(age>=18){

//     console.log("You are old enouigh to enter this site");
// }
// else{
//         console.log("You must be 18+ to visit this site");

// }


// let time = 14;

// if(time<12){
//     console.log("Goodmorning")
// }
// else{
//         console.log("GoodAfternoon")

// }

// let isStudent = false;

// if(isStudent){
//     console.log("You Are A Student")
// }
// else{
//     console.log("You Are Not A Student")
// }

// let age = 23;
// let hasLicense = false;

// if(age>=16){
//     console.log("You are old enough to drive");

//     if(hasLicense){
//         console.log("you have your license");
//     }
//     else{
//         console.log("You dont have your license")
//     }
// }
// else{
//     console.log("you must be 16+ to have license")
// }
const myText = document.getElementById("myText");
const mySumbit = document.getElementById("mySumbit");
let age = 139;

if(age>=100){
    console.log("You are too old to enter this site")
}
else if(age==0){
    console.log("You are young to enter this site")
}

else if(age>=18){
    console.log("You are old enough to enter this site")
}
else if(age<0){
    console.log("Your age can't be 0")
}

else{
    console.log("You must be 18+ to enter this site")
}