export default (delay, callbackFn) => {
  let lastCall = 0;

  return function(...args) {
    const now = new Date().getTime();

    if (now - lastCall < delay) {
      return;
    }

    lastCall = now;

    return callbackFn(...args);
  };
};
