export default (actionMap = {}, opt = {}) => event => {
  const defaultOpt = {
    eventPropertyToGetKeyValue: 'key',
    excludeTargets: false,
    isLogging: false,
    preventDefault: true,
    stopPropagation: false,
    stopImmediatePropagation: false,
    targets: []
  };
  opt = { ...defaultOpt, ...opt };

  const { activeElement } = document;
  if (opt.targets.length) {
    const targetFound = opt.targets.some(target => {
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

    if (
      (!targetFound && !opt.excludeTargets) ||
      (targetFound && opt.excludeTargets)
    )
      return;
  }

  const key = getKeyValue(event, opt.eventPropertyToGetKeyValue);

  opt.isLogging &&
    (console.clear(), console.log({ event, key, action: actionMap[key] }));

  takeAction(event, actionMap[key], opt);

  return key;
};

function getKeyValue(event, eventPropertyToGetKeyValue) {
  // Keyboard​Event.key
  // Example: control+shift+alt+a
  if (eventPropertyToGetKeyValue === 'key') {
    return event.key.match(/Control|Shift|Alt|Meta/)
      ? event.key.toLowerCase()
      : `${event.ctrlKey || event.metaKey ? 'control+' : ''}${
          event.shiftKey ? 'shift+' : ''
        }${event.altKey ? 'alt+' : ''}${event.key.toLowerCase()}`;
  }

  // Keyboard​Event.code
  // Example: Control+Shift+Alt+KeyA
  if (eventPropertyToGetKeyValue === 'code') {
    return event.code.match(/Control|Shift|Alt|Meta/)
      ? event.code
      : `${event.ctrlKey || event.metaKey ? 'Control+' : ''}${
          event.shiftKey ? 'Shift+' : ''
        }${event.altKey ? 'Alt+' : ''}${event.code}`;
  }
}

function takeAction(event, action, opt) {
  if (typeof action === 'function') {
    opt.preventDefault && event.preventDefault();
    opt.stopPropagation && event.stopPropagation();
    opt.stopImmediatePropagation && event.stopImmediatePropagation();
    action();
  }
}
