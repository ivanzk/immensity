let lastKey = '';
let rightButtonMod = false;

export default (actionMap = {}, opt = {}) => e => {
  const defaultOpt = {
    isLogging: true,
    preventDefault: true,
    stopPropagation: true,
    stopImmediatePropagation: true
  };
  opt = { ...defaultOpt, ...opt };

  const { button, buttons, detail, offsetX, offsetY, target, type } = e;

  const specialKey = `${e.metaKey || e.ctrlKey ? 'control+' : ''}${
    e.shiftKey ? 'shift+' : ''
  }${e.altKey ? 'alt+' : ''}`;

  if (type === 'mouseup' && button === 2) rightButtonMod = false;

  // MouseDown and MouseUp
  let key = `${specialKey}${type}${button}${detail > 1 ? '+d' + detail : ''}${
    rightButtonMod ? '+rbm' : ''
  }`;

  // Click
  if (type == 'click') {
    key = `${specialKey}${type}`;
  }

  // DoubleClick
  if (type == 'dblclick') {
    key = `${specialKey}${type}`;
  }

  // Wheel
  const wheelY = e.deltaY;
  if (wheelY) {
    key = `${specialKey}${type}${wheelY > 0 ? 'down' : 'up'}${
      buttons ? buttons : ''
    }`;
  }

  if (type === 'mousedown' && button === 2) rightButtonMod = true;

  // Cancel MouseUp after MouseDown+Wheel
  if (lastKey.includes('wheel') && key.includes('mouseup')) {
    lastKey = '';
    return;
  }

  const x = Math.floor((offsetX / target.offsetWidth) * 10);
  const y = Math.floor((offsetY / target.offsetHeight) * 10);

  opt.isLogging && console.log({ event: e, key: `${key}+g${x}x${y}y` });

  Object.keys(actionMap).forEach(actionMapKey => {
    let grid = actionMapKey.match(/g(\d{4})/);
    if (grid) {
      grid = grid[0];
      if (x >= grid[1] && x <= grid[2] && y >= grid[3] && y <= grid[4]) {
        let keyWithGrid = key + `+${grid}`;
        if (actionMapKey !== keyWithGrid) return;

        takeAction(e, actionMap[keyWithGrid], opt);
      }
    } else {
      takeAction(e, key === actionMapKey ? actionMap[actionMapKey] : null, opt);
    }
  });

  lastKey = key;
  return `${key}+g${x}x${y}y`;
};

function takeAction(event, action, opt) {
  if (typeof action === 'function') {
    opt.preventDefault && event.preventDefault();
    opt.stopPropagation && event.stopPropagation();
    opt.stopImmediatePropagation && event.stopImmediatePropagation();
    action(event);
  }
}
