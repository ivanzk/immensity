export default (delay, callbackFn) => {
  let lastCall = 0;

  return function(...args) {
    console.log('args: ', args);
    console.log('lastCall: ', lastCall);
    const now = new Date().getTime();

    if (now - lastCall < delay) {
      return;
    }

    lastCall = now;

    return callbackFn(...args);
  };
};
