export default (actionMap = {}, opt = {}) => e => {
  const defaultOpt = {
    ignoreMultiClick: false,
    isLogging: false,
    preventDefault: true,
    stopPropagation: false,
    stopImmediatePropagation: false
  };
  opt = { ...defaultOpt, ...opt };

  const { button, buttons, detail, offsetX, offsetY, target, type } = e;

  const specialKey = `${e.ctrlKey || e.metaKey ? 'control+' : ''}${
    e.shiftKey ? 'shift+' : ''
  }${e.altKey ? 'alt+' : ''}`;

  let key = `${specialKey}${type}`;

  // MouseDown and MouseUp
  if (type == 'mousedown' || type === 'mouseup') {
    key = `${specialKey}${type}${button}${
      detail > 1 && !opt.ignoreMultiClick ? '+d' + detail : ''
    }`;
  }

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

  let x = Math.floor((offsetX / target.offsetWidth) * 10);
  x = x < 0 ? 0 : x;
  let y = Math.floor((offsetY / target.offsetHeight) * 10);
  y = y < 0 ? 0 : y;

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

  return `${key}+g${x}x${y}y`;
};

function takeAction(event, action, opt) {
  if (typeof action === 'function') {
    opt.preventDefault && event.preventDefault();
    opt.stopPropagation && event.stopPropagation();
    opt.stopImmediatePropagation && event.stopImmediatePropagation();
    action();
  }
}
