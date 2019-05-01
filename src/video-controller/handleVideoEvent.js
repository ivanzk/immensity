import { convertSecondsToTimeUnits, formatTimeForVideo } from '../format-time';

export default (videoController, opt = {}) => {
  const { video, getBufferState } = videoController;
  const { volumeBar, seekBar, seekBarTime, volumeBarLevel } = opt;
  let videoWaitingTimeoutId;

  video.addEventListener('loadstart', onVideoLoadStart);
  video.addEventListener('timeupdate', onVideoTimeUpdate);
  video.addEventListener('volumechange', onVideoVolumeChange);
  video.addEventListener('waiting', onVideoWaiting);
  video.addEventListener('playing', onVideoPlaying);
  video.addEventListener('canplay', onVideoPlaying);

  function onVideoLoadStart(e) {
    const volume = Math.ceil(video.volume * 100);
    volumeBar.style.setProperty('--volumeBarState', `${volume}%`);
    displayVideoVolume(volume, volumeBarLevel);
  }

  function onVideoVolumeChange(e) {
    const volume = Math.ceil(video.volume * 100);
    volumeBar.style.setProperty('--volumeBarState', `${volume}%`);
    displayVideoVolume(volume, volumeBarLevel);

    if (video.muted) {
      volumeBar.style.setProperty('--volumeBarColor', '211, 47, 47');
    }
    if (!video.muted) {
      volumeBar.style.setProperty('--volumeBarColor', '25, 118, 210');
    }
  }

  function onVideoTimeUpdate(e) {
    const volume = Math.ceil(video.volume * 100);
    volumeBar.style.setProperty('--volumeBarState', `${volume}%`);
    displayVideoVolume(volume, volumeBarLevel);

    seekBar.style.setProperty(
      '--seekBarState',
      `${(video.currentTime / video.duration) * 100}%`
    );
    seekBar.style.setProperty(
      '--seekBarBuffered',
      `${(getBufferState().currentBuffer.end / video.duration) * 100}%`
    );
    displayVideoTime(video.currentTime, video.duration, seekBarTime);

    if (video.muted) {
      volumeBar.style.setProperty('--volumeBarColor', '211, 47, 47');
    }
    if (!video.muted) {
      volumeBar.style.setProperty('--volumeBarColor', '25, 118, 210');
    }
  }

  function onVideoWaiting() {
    videoWaitingTimeoutId = setTimeout(() => {
      seekBar.classList.add('waiting');
    }, 500);
  }

  function onVideoPlaying() {
    clearInterval(videoWaitingTimeoutId);
    seekBar.classList.remove('waiting');
  }
};

function displayVideoTime(time, maxTime, node) {
  const currentTime = formatTimeForVideo(convertSecondsToTimeUnits(time));
  const duration = formatTimeForVideo(convertSecondsToTimeUnits(maxTime));
  node.innerText = `${currentTime} / ${duration}`;
}

function displayVideoVolume(volume, node) {
  node.innerText = volume;
}
