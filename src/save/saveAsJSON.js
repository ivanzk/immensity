export default (data, opt = {}) => {
  const defaultOpt = {
    name: document.title,
    space: 0,
    timestamp: ` ${Date.now()}`
  };
  opt = { ...defaultOpt, ...opt };

  let { name } = opt;
  name = (name && name + opt.timestamp) || Date.now();

  data = JSON.stringify(data, null, opt.space);
  const blob = new Blob([data], { type: 'application/json' });

  const a = document.createElement('a');
  a.download = name;
  a.href = window.URL.createObjectURL(blob);
  a.click();
};
