import removeAttributes from './removeAttributes';

export default (opt = {}) => {
  const defaultOpt = {
    htmlClean: true,
    headClean: true,
    bodyClean: true
  };
  opt = { ...defaultOpt, ...opt };

  const { head, body } = document;
  const html = document.documentElement;

  if (opt.htmlClean) removeAttributes(html);

  if (opt.headClean) {
    const title = document.title;
    removeAttributes(head);
    head.innerHTML = '';
    document.title = title;
  }

  if (opt.bodyClean) {
    removeAttributes(body);
    body.innerHTML = '';
  }
};
