function getEventWeekday(days) {

    const weekDays= [ "Sunday", "Monday", "Tuesday" , "Wednesday " , "Thursday" , "Friday" , "Saturday"];
  
      let day = new Date(); 
  
      let today= weekDays[day.getDay()]
      let eventDay= day.getDay() + (days);
       let event="";
  
    if( eventDay < 7 ){ event = weekDays[eventDay] ; 
    }

    else { event= weekDays[ (eventDay % 7)] } 
    return event;
  }
  
   console.log( getEventWeekday(8)); //* Friday *//
   