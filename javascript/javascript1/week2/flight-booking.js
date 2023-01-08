const fullname1 = getFullName("Tigran","Nersesyan",1);
const fullname2 = getFullName("Shakira","Waka Waka",2);

function getFullName(firstname,surname,useFormalName) {
    
    if (useFormalName === 1) {
        return "Lord " + firstname + " " + surname;
    }
    else if (useFormalName === 2) {
        return "Lady " + firstname + " " + surname; 
    }
    else {
        return firstname + " " + surname;
    }
}

console.log(fullname1);
console.log(fullname2);

