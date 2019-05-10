let timeoutId;

export default (element, opt = {}) => {
  const defaultOpt = {
    cursor: 'default',
    cursorVisibilityDuration: 2500
  };
  opt = { ...defaultOpt, ...opt };

  clearTimeout(timeoutId);
  element.style.cursor = opt.cursor;

  timeoutId = setTimeout(() => {
    element.style.cursor = 'none';
  }, opt.cursorVisibilityDuration);
};
