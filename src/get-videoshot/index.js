import crel from '../crel';

export default (video, opt = {}) => {
  const defaultOpt = {
    download: true,
    ext: '.jpg',
    name: document.title,
    quality: 0.95,
    timestamp: ` ${Date.now()}`,
    type: 'image/jpeg'
  };
  opt = { ...defaultOpt, ...opt };

  let { name, timestamp, type, ext, quality, download } = opt;
  name = ((name && name + timestamp) || Date.now()) + ext;

  const canvas = crel('canvas', {
    width: video.videoWidth,
    height: video.videoHeight
  });
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

  canvas.toBlob(
    blob => {
      if (download) {
        crel('a', {
          href: URL.createObjectURL(blob),
          download: name
        }).click();
      }
      return blob;
    },
    type,
    quality
  );
};
