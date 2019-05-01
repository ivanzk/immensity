import removeAttributes from './removeAttributes';

export default (htmlClean = true, headClean = true, bodyClean = true) => {
  const { head, body } = document;
  const html = document.documentElement;

  if (htmlClean) removeAttributes(html);

  if (headClean) {
    const title = document.title;
    removeAttributes(head);
    head.innerHTML = '';
    document.title = title;
  }

  if (bodyClean) {
    removeAttributes(body);
    body.innerHTML = '';
  }
};
