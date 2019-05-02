export default (e, callbackFn) => {
  e.preventDefault();

  if (typeof callbackFn == 'function') {
    return callbackFn();
  }

  return false;
};
