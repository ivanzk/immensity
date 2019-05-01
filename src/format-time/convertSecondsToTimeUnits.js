export default sec => {
  const timeUnits = {
    hr: 3600,
    min: 60,
    sec: 1
  };
  let time = [];

  for (let unit in timeUnits) {
    if (sec >= timeUnits[unit]) {
      const currentUnit = parseInt(sec / timeUnits[unit]);
      sec = sec - currentUnit * timeUnits[unit];
      time.push(currentUnit);
    } else {
      time.push(0);
    }
  }

  return time;
};
