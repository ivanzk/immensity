export default (e, cbFn) => {
  e.preventDefault();

  if (typeof cbFn == 'function') {
    return cbFn();
  }

  return false;
};
