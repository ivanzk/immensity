export default (opt = {}, props = {}) => {
  const defaultOpt = {
    child: undefined,
    parent: document.body,
    tag: 'div',
    type: 'append'
  };
  opt = { ...defaultOpt, ...opt };

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
