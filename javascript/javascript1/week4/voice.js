let name;
let toDoList = [];
let previousName;   //Stores the previous name for hi again! response

function getReply(query) {
  if (query.toLowerCase() === "what is my name") {
    if (name) {
      return "Your name is " + name;
    } else {
      return "I do not know your name. Please declare it first.";
    }
  } else if (query.toLowerCase().startsWith("my name is ")) { 
    previousName = name;
    name = query.slice(11);
    if (previousName === name) {
      return "Hi again " + name + "!"; 
    } else {
      return "Nice to meet you, " + name + "!";
    }
  } else if (query.toLowerCase().startsWith("add todo ")) {
    toDoList.push(query.slice(9));
    return "Task added to the to-do list.";
  } else if (query.toLowerCase().startsWith("remove todo ")) {
    let removedTask = query.slice(12);
    let index = toDoList.indexOf(removedTask);
    if (index !== -1) {
      toDoList.splice(index, 1);
      return "Task removed from the to-do list.";
    } else {
      return "Task not found in the to-do list.";
    }
  } else if (query.toLowerCase() === "show todo list") {
    if (toDoList.length > 0) {
      return "Your to-do list:\n" + toDoList.join("\n");
    } else {
      return "Your to-do list is empty.";
    }
  } else if (query.toLowerCase() === "set timer for 4 minutes") {
    setTimeout(function() {
        console.log("4 minutes have passed!");
    }, 240000);
    return "Timer set for 4 minutes.";
  } else if (query.toLowerCase() === "what day is today") {
    let today = new Date();
    let day = today.getDate();
    let month = today.toLocaleString('default', { month: 'long' });
    let year = today.getFullYear();
    return `Today is ${day}. of ${month} ${year}`;
  } else if (query.toLowerCase().startsWith("calculate ")) { //maths
    let calculation = query.slice(10);
    try {
        let result = eval(calculation);
        return `The result of ${calculation} is ${result}`;
    } catch (error) {
        return "Invalid calculation";
    }
  } else {
    return "Tigran haven't taught me how to answer this request :( ).";
  }
}


 // console.log(getReply("What is my name")); 
 // console.log(getReply("My name is Benjamin"));
 // console.log(getReply("What is my name")); 
 // console.log(getReply("Add todo fishing"));
 // console.log(getReply("Add todo singing in the shower"));
 // console.log(getReply("Show todo list"));
 // console.log(getReply("Remove todo fishing"));
 // console.log(getReply("Show todo list")); 
 // console.log(getReply("set timer for 4 minutes"));
 // console.log(getReply("What day is today"));
 // console.log(getReply("calculate 2+2"));

 
