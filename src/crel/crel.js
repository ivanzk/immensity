export default (tag, props = {}) => {
  tag = tag || 'div';

  const el = document.createElement(tag);

  Object.keys(props).forEach(propKey => {
    el[propKey] = props[propKey];
  });

  return el;
};
