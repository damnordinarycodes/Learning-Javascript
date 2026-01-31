const mycheckbox = document.getElementById("mycheckbox")
const visabtn = document.getElementById("visabtn")
const mastercardbtn = document.getElementById("mastercardbtn")
const paypalbtn = document.getElementById("paypalbtn")
const mysumbit = document.getElementById("mysumbit")
const subresult = document.getElementById("subresult")
const paymentresult = document.getElementById("paymentresult")


mysumbit.onclick = function(){
    if(mycheckbox.checked){
        subresult.textContent = 'you are subscribed'
    }
    else{
                subresult.textContent = 'you are no subscribed'

    }

    if(vidabtn.checked){
        paymentresult.textcontent = 'You are paying with visa';
    }
    else if(){
        
    }
}