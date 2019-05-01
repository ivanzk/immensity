export default (actionMap = {}, targets = []) => e => {
  const { activeElement } = document;

  if (targets.length) {
    const proceed = targets.some(target => {
      if (target instanceof HTMLElement) {
        return target.isEqualNode(activeElement);
      }
      if (target[0] === '.') {
        return [...activeElement.classList].includes(target.slice(1));
      }
      if (target[0] === '#') {
        return activeElement.id === target.slice(1);
      }
      return activeElement.nodeName === target;
    });

    if (!proceed) return;
  }

  const key = e.key.match(/Control|Shift|Alt/)
    ? e.key
    : `${e.ctrlKey ? 'control+' : ''}${e.shiftKey ? 'shift+' : ''}${
        e.altKey ? 'alt+' : ''
      }${e.key.toLowerCase()}`;

  const action = actionMap[key];
  if (typeof action === 'function') {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    action();
  }

  return key;
};
