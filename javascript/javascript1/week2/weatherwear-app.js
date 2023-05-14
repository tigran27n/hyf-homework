

const clothesToWear = howIsWeather(0); //* Temperature outside *//

function howIsWeather(i) {
    if (i >= 0 && i <=10) {
        return "You probabbly need a warm jacket and maybe some pants";
    }

    else if (i >= 11 && i <=19) {
        return "You can wear a light jacket or a hoodie if you want ";
    }

    else if (i >= 20 && i <= 36) {
        return "Wear a t-shirt and some shorts";
    }

    else if (i >=-16  && i <=-1 ) {
        return "Wear only warm clothes... hats, scarfs and gloves can help even more";
    }

    else {
        return "Ask your Grandma"
    }
}

console.log(clothesToWear);
