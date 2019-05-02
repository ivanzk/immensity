export default (url, callbackFn) => {
  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.style = `
    height: 0px;
    opacity: 0;
  `;
  document.body.append(iframe);

  return new Promise(resolve => {
    iframe.onload = () => {
      resolve(callbackFn(iframe.contentDocument));
      iframe.remove();
    };
  });
};
