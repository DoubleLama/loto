const min = 1;
const max = 50;
const numbers = 6;
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");

let emailRegex = /([A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3})$/;
let winTicket = [];

const randomLotoNumber = (min,max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

const makeWinticket = (array) => {
    for(let i=0; i<numbers; i++)
    array.push(randomLotoNumber(min,max))
    console.log(array)
    return array
}

const makeLotoNumbers = () => {
    let lotoNumbers = [];
    event.preventDefault();
    lotoNumbers.push(parseInt(document.getElementById("lotoNumber1").value));
    lotoNumbers.push(parseInt(document.getElementById("lotoNumber2").value));
    lotoNumbers.push(parseInt(document.getElementById("lotoNumber3").value));
    lotoNumbers.push(parseInt(document.getElementById("lotoNumber4").value));
    lotoNumbers.push(parseInt(document.getElementById("lotoNumber5").value));
    lotoNumbers.push(parseInt(document.getElementById("lotoNumber6").value));
    checkLoto(firstname, lastname, email, lotoNumbers);
    return lotoNumbers;
}

const compareNumbers = (n1,n2) => {
    if(JSON.stringify(n1)==JSON.stringify(n2)){
        return true;
    }else{
        return false;
    }
}

const checkLoto = (firstname, lastname, email, lotoNumbers) => {
    
    if (firstname.value == ""){
        firstname.classList.add("bg-warning");
        firstname.value += "Veuillez fournir un Nom";
    }else if (lastname.value == ""){
        lastname.classList.add("bg-warning");
        lastname.value += "Veuillez fournir un Prénom";
    }else if (email.value == ""){
        email.classList.add("bg-warning");
        email.value += "Veuillez fournir un email";
    }else if (!email.value.match(emailRegex)){
        alert("Votre email n'est pas valide");
    }else if (compareNumbers(winTicket, lotoNumbers)==true){
      
        alert("Félicitations vous avez gagné 1 million !!!!!");
    }else{
        alert(`Désolé vous avez perdu, les nombres gagnants sont : ${winTicket}`);
    }
}
makeWinticket(winTicket);
document.getElementById("checkIt").addEventListener("click", makeLotoNumbers);