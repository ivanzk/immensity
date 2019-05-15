export default (video, opt = {}) => {
  const { timeChange: defaultTimeChange } = opt;

  try {
    console.log(`%c${video.src}`, 'color: #4caf50');
  } catch (err) {
    console.error('err: ', err);
  }

  const getBufferState = () => {
    const {
      buffered,
      currentTime,
      buffered: { length }
    } = video;
    const buffers = [];

    for (let i = 0; i < length; i++) {
      buffers.push({ start: buffered.start(i), end: buffered.end(i) });
    }

    const currentBuffer = buffers.filter(
      buffer => buffer.start <= currentTime && buffer.end >= currentTime
    )[0];

    return { currentBuffer, buffers };
  };

  const muteOff = () => (video.muted = false);

  const muteOn = () => (video.muted = true);

  const increasePlaybackRate = (
    playbackRateChange = opt.playbackRateChange
  ) => {
    const playbackRate = video.playbackRate + playbackRateChange;
    video.playbackRate = playbackRate <= 5 ? playbackRate : 5;
  };

  const normalizePlaybackRate = () => (video.playbackRate = 1);

  const decreasePlaybackRate = (
    playbackRateChange = opt.playbackRateChange
  ) => {
    const playbackRate = video.playbackRate - playbackRateChange;
    video.playbackRate = playbackRate >= 0.1 ? playbackRate : 0.1;
  };

  const seekBackward = (timeChange = defaultTimeChange, opt = {}) => {
    const defaultOpt = {
      currentBuffer: false,
      customBufferTime: 1
    };
    opt = { ...defaultOpt, ...opt };

    let { currentTime } = video;
    currentTime -= timeChange;

    if (opt.currentBuffer) {
      currentTime - opt.customBufferTime > opt.currentBuffer.start &&
        (video.currentTime = currentTime);
      return;
    }

    video.currentTime = currentTime > 0 ? currentTime : 0;
  };

  const seekForward = (timeChange = defaultTimeChange, opt = {}) => {
    const defaultOpt = {
      currentBuffer: false,
      customBufferTime: 2
    };
    opt = { ...defaultOpt, ...opt };

    let { currentTime, duration } = video;
    currentTime += timeChange;

    if (opt.currentBuffer) {
      currentTime + opt.customBufferTime < opt.currentBuffer.end &&
        (video.currentTime = currentTime);
      return;
    }

    video.currentTime = currentTime < duration ? currentTime : duration;
  };

  const toggleControls = () => {
    if (opt.view) {
      const controls = document.querySelector('.controlsContainer');

      if (controls.classList.contains('showControls')) {
        controls.classList.remove('showControls');
        controls.classList.add('hideControls');
      } else {
        controls.classList.add('showControls');
        controls.classList.remove('hideControls');
      }
    } else {
      video.hasAttribute('controls')
        ? video.removeAttribute('controls')
        : video.setAttribute('controls', true);
    }
  };

  const toggleMute = () => (video.muted = !video.muted);

  const togglePlay = () => (video.paused ? video.play() : video.pause());

  const volumeDown = (volumeChange = opt.volumeChange) => {
    let { volume } = video;
    volume -= volumeChange;
    video.volume = volume > 0 ? volume : 0;
    video.muted = false;
  };

  const volumeUp = (volumeChange = opt.volumeChange) => {
    let { volume } = video;
    volume += volumeChange;
    video.volume = volume < 1 ? volume : 1;
    video.muted = false;
  };

  return {
    getBufferState,
    muteOff,
    muteOn,
    increasePlaybackRate,
    normalizePlaybackRate,
    decreasePlaybackRate,
    seekBackward,
    seekForward,
    toggleControls,
    toggleMute,
    togglePlay,
    video,
    volumeDown,
    volumeUp
  };
};
