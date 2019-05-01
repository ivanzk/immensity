export default (opt = {}, props = {}) => {
  opt.tag = opt.tag || 'div';
  opt.type = opt.type || 'append';
  opt.parent = opt.parent || document.body;
  opt.child = opt.child || undefined;

  const el = document.createElement(opt.tag);

  Object.keys(props).forEach(propKey => {
    el[propKey] = props[propKey];
  });

  if (opt.type === 'prepend') {
    opt.parent.prepend(el);
  } else {
    opt.parent.append(el);
  }

  if (opt.child) {
    el.append(opt.child);
  }

  return el;
};
