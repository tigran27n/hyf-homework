// 1. Problem solving cardio

// 1.1 Find the shortest word

const findShortestWord = (words) => {
    let shortest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }
    return shortest;
}

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
console.log(findShortestWord(danishWords)); // Output: "ø"

// 1.2 Find the individual number and the total number of Danish letters in a string.

function countSpecialDanishLetters(str) {
    const danishLetters = {
        æ: 0,
        ø: 0,
        å: 0,
    };
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] in danishLetters) {
            danishLetters[str[i]]++;
            total++;
        }
    }
    danishLetters.total = total;
    return danishLetters;
}

const danishString = "Jeg har en blå bil";
console.log(countSpecialDanishLetters(danishString)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(countSpecialDanishLetters(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}

// 2. Spirit animal name generator 

const spiritAnimals = ["Tiger", "Wolf", "Lion", "Eagle", "Lion", "Shark",];
let name;

function getSpiritAnimals() {
    name = document.getElementById("nameInput").value;
    // random spirit animal from the array
    const randomAnimals = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
    document.getElementById("spiritAnimals").innerHTML = name + " - " + randomAnimals;
  
    document.getElementById("nameInput").setAttribute("disabled", "true");
}

function newSpiritAnimals() {
    // alert if empty
    if (name === "") {
        alert("Please enter your name before getting a new spirit animal.");
        return;
    }
    
    const randomAnimals = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
    // Display the new spirit animal
    document.getElementById("spiritAnimals").innerHTML = name + " - " + randomAnimals;
}

function reset() {
   
    document.getElementById("nameInput").removeAttribute("disabled");
    document.getElementById("nameInput").value = "";
    document.getElementById("spiritAnimals").innerHTML = "";
}
