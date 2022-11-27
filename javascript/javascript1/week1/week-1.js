//* Age-ify (A future age calculator) *//

const yearOfBirth = 2005;
const yearFuture = 2076;

const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

//* Goodboy-Oldboy (A dog age calculator) *//

const dogYearOfBirth = 2022;
const dogYearFuture = 2034;

const dogAge = dogYearFuture - dogYearOfBirth;
shouldShowResultInDogYears = false;

//* Acording to Google every human year equals approximately four or five years for a dog :) *//

if (shouldShowResultInDogYears) {
    console.log(`Your dog will be ${dogAge * 5} dog years old in ${dogYearFuture}.`);
}

else {
    console.log (`Your dog will be ${dogAge} human years old in ${dogYearFuture}.`);
}


//* A house price estimator *//

const highPeter = 10;
const widePeter = 8;
const deepPeter = 10;
const volumeInMetersPeter = highPeter * widePeter * deepPeter;
const gardenSizeInM2Peter = 100;

housePricePeter = volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;
console.log(`Peters house costs ${housePricePeter}.`);
if (housePricePeter < 2500000) {
    console.log('Peter pay too much');
}
else {
    console.log('Peter is smart');
}

const houseOfJulia = {
    high: 8,
    wide: 5,
    deep: 11,
    gardenSizeInM2: 70,
    price: 1000000  
};

const volumeInMeters =  houseOfJulia.high * houseOfJulia.wide * houseOfJulia.deep;
housePriceJulia = volumeInMeters * 2.5 * 1000 + houseOfJulia.gardenSizeInM2 * 300;
console.log(`Julias house costs ${housePriceJulia}.`);
if (housePriceJulia < houseOfJulia.price) {
    console.log('Julia pay too much');
}
else {
    console.log('Julia is smart');
}

//* Ez Namey (Startup name generator) *//


const randomNumber = Math.floor(Math.random() * 10);
const firstWords = ['Blue', 'Red', 'Good', 'Bright', 'Armenian', 'Tall', 'Short', 'Big', 'Small', 'Medium'];
const secondWords = ['Book', 'Team', 'Helper', 'Calculator', 'Developers', 'Taxi', 'Pizza', 'Delivery', 'Buissnes', 'Dolma'];
const startupName = firstWords[randomNumber] + ' ' + secondWords[randomNumber];
console.log(`The startup:"${startupName}" contains ${startupName.length - '1' } characters`);

//* I did {startupName.length - '1' } so it don't count the space between words as a charecter *//

