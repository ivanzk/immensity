export default (data, opt = {}) => {
  const defaultOpt = {
    name: document.title,
    timestamp: ` ${Date.now()}`,
    type: 'application/json'
  };
  opt = { ...defaultOpt, ...opt };

  let { name } = opt;
  name = (name && name + opt.timestamp) || Date.now();

  data = JSON.stringify(data);
  const blob = new Blob([data], { type: opt.type });

  const a = document.createElement('a');
  a.download = name;
  a.href = window.URL.createObjectURL(blob);
  a.click();
};
