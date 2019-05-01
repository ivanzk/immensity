export default (time = []) => {
  if (time.length > 2 && time[0] === 0) {
    time = time.slice(1);
  }

  time = time.map(unit => (unit.toString().length > 1 ? unit : `0${unit}`));

  return time.join(':');
};
