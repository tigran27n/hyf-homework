const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];
  
  
  seriesDurations.push(
    {
      title: "Prison Break",
      days: 2,
      hours: 18,
      minutes: 0,
    }
  );
  
  
  function logOutSeriesText() {
    let yearsToMinutes = 80 * 365 * 24 * 60;
    let sum = 0;
  
    for (let index = 0; index < seriesDurations.length; index++) {
      let daysToMinutes = seriesDurations[index].days * 24 * 60;
      let hoursToMinutes = seriesDurations[index].hours * 60;
      let totalMinutes = daysToMinutes + hoursToMinutes + seriesDurations[index].minutes;
      let result = (totalMinutes / yearsToMinutes) * 100;
      sum += result;
  
      console.log(`${seriesDurations[index].title} took ${result.toFixed(3)}% of my life`);
    }
    return `This took ${sum.toFixed(3)}% of my life`;
  }
  
  console.log(logOutSeriesText()); 