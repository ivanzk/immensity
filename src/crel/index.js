export default (tag = 'div', props = {}) => {
  const el = document.createElement(tag);

  Object.keys(props).forEach(propKey => {
    el[propKey] = props[propKey];
  });

  return el;
};
