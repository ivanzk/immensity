let lastKey = '';
let rightButtonMod = false;

export default (actionMap = {}) => e => {
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

  Object.keys(actionMap).forEach(actionMapKey => {
    let grid = actionMapKey.match(/g(\d{4})/);
    if (grid) {
      grid = grid[0];
      if (x >= grid[1] && x <= grid[2] && y >= grid[3] && y <= grid[4]) {
        let keyWithGrid = key + `+${grid}`;
        if (actionMapKey !== keyWithGrid) return;
        const action = actionMap[keyWithGrid];
        if (typeof action === 'function') {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          action(e);
        }
      }
    } else {
      const action = key === actionMapKey ? actionMap[actionMapKey] : null;
      if (typeof action === 'function') {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        action(e);
      }
    }
  });

  lastKey = key;
  return key;
};
