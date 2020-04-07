const min = 1;
const max = 50;
const numbers = 6;
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const cheat = document.querySelector("#cheat");
const emailRegex = /([A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3})$/;
const winTicket = [];

const randomLotoNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const makeWinTicket = (winTicket) => {
    for (let i = 0; i < numbers; i++) winTicket.push(randomLotoNumber(min, max));
    return winTicket;
};

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
};

const compareNumbers = (n1, n2) => {
    if (JSON.stringify(n1) == JSON.stringify(n2)) {
        return true;
    } else {
        return false;
    }
};

const clearInput = () => {
    if (firstname.value == "Veuillez fournir un Nom") {
        firstname.classList.remove("bg-warning");
        firstname.value = "";
    } else if (lastname.value == "Veuillez fournir un Prénom") {
        lastname.classList.remove("bg-warning");
        lastname.value = "";
    } else if (email.value == "Veuillez fournir un email") {
        email.classList.remove("bg-warning");
        email.value = "";
    }
};

const checkLoto = (firstname, lastname, email, lotoNumbers) => {
    if (firstname.value == "") {
        firstname.classList.add("bg-warning");
        firstname.value += "Veuillez fournir un Nom";
    } else if (lastname.value == "") {
        lastname.classList.add("bg-warning");
        lastname.value += "Veuillez fournir un Prénom";
    } else if (email.value == "") {
        email.classList.add("bg-warning");
        email.value += "Veuillez fournir un email";
    } else if (!email.value.match(emailRegex)) {
        alert("Votre email n'est pas valide");
    } else if (compareNumbers(winTicket, lotoNumbers) == true) {
        alert("Félicitations vous avez gagné 1 million !!!!!");
    } else {
        alert(`Désolé vous avez perdu, les numéros gagnants sont : ${winTicket}`);
    }
};

const revealResult = () => {
    event.preventDefault();
    document.getElementById("cheat").innerHTML = `Ah ouais OK on en est là quoi.... Tiens les voilà ${winTicket}`;
};


makeWinTicket(winTicket);
document.getElementById("checkIt").addEventListener("click", makeLotoNumbers);
firstname.addEventListener("click", clearInput);
lastname.addEventListener("click", clearInput);
email.addEventListener("click", clearInput);
cheat.addEventListener("click", revealResult);