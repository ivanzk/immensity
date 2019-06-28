export default (url, callbackFn, opt = {}) => {
  opt = {
    removeIframe: true,
    ...opt
  };

  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.style = `
    height: 0px;
    opacity: 0;
  `;
  document.body.append(iframe);

  return new Promise((resolve, reject) => {
    iframe.onload = () => {
      if (iframe.contentDocument) {
        resolve(callbackFn(iframe.contentDocument, { iframe }));
      } else {
        reject('Loading page in iframe failed');
      }
      opt.removeIframe && iframe.remove();
    };
  });
};
