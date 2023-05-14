// 1  Warmup

// 1

setTimeout(function() {
    console.log("Called after 2.5 seconds");
  }, 2500);

// 2
function logStringAfterDelay(delay, stringToLog) {
    setTimeout(() => {
      console.log(stringToLog);
    }, delay * 1000);
  }

 logStringAfterDelay(2.5, 'Called after 2.5 seconds'); 
 logStringAfterDelay(5, 'Called after 5 seconds'); 
 logStringAfterDelay(1, 'Called after 1 second'); 

 //3

 function logStringAfterDelay5(delay, stringToLog) {
    setTimeout(() => {
      console.log(`${stringToLog} ${delay} seconds late huh? `);
    }, delay * 1000);
  }
  
  const button = document.getElementById('myButton');
  button.addEventListener('click', () => {
    logStringAfterDelay5(5, 'I guess i am');
  });
  

  //4

  function logEarth() {
    console.log("Earth");
  }
  
  function logSaturn() {
    console.log("Saturn");
  }
  
  function callPlanetLogFunction(planetLogFunction) {
    planetLogFunction();
  }
  
  callPlanetLogFunction(logEarth);
  callPlanetLogFunction(logSaturn);
  
  //5

  function logLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		console.log("Geolocation is not supported by this browser.");
	}
}

function showPosition(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	console.log("Latitude: " + latitude + " Longitude: " + longitude);
}

// 7 
function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000);
  }
  
function logMessage() {
    console.log("Delayed message!");
  }
  
  runAfterDelay(3, logMessage);
  
  
  function changeBackgroundColor() {
    document.body.style.backgroundColor = "grey";
  }
  
  runAfterDelay(20, changeBackgroundColor);
  

  // 8 

  function logFunnyJoke() {
    console.log("What’s Forrest Gump’s password? 1forrest1");
  }
  
  function logBadJoke() {
    console.log("Three fish are in a tank. One asks the others, How do you drive this thing?");
  }

  function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {
      logFunnyJoke();
    } else {
      logBadJoke(); 
    }
  }
  
  
  jokeCreator(true, logFunnyJoke, logBadJoke); 
  jokeCreator(false, logFunnyJoke, logBadJoke); 
  

// 2 Function as a variable

 // 1

 function greet() {
    console.log("Hello!");
 }

 function introduce() {
    console.log("My name is Tigran.");
 }

 function farewell() {
    console.log("Goodbye!");
 }

 const functions = [greet, introduce, farewell];

 // iterate through the array and call all the functions
 for (let i = 0; i < functions.length; i++) {
    functions[i]();
 }

 // 2?

 //3 

 const myObject = {
    myFunction: function() {
      console.log("Hello, world!");
    }
  };
  
  myObject.myFunction(); 
  
