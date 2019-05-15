import addStyles from './addStyles';
import craddel from '../craddel';
import handleVideoEvent from './handleVideoEvent';
import throttle from '../throttle';
import { controlCursorVisibility } from '../cursor';
import controlControlBarContainerVisibility from './controlControlBarContainerVisibility';

export default (videoController, opt) => {
  const { video } = videoController;
  const { modal, startInFullScreen, startWithControlBar } = opt;

  addStyles();

  const videoContainer = craddel(
    {
      parent: modal ? modal.modal : document.body,
      child: video,
      type: 'prepend'
    },
    { className: 'videoContainer', id: 'iyVideoControllerRoot' }
  );

  if (video.parentElement.webkitRequestFullscreen) {
    startInFullScreen && video.parentElement.webkitRequestFullscreen();
  }

  const videoOverlay = craddel(
    { parent: videoContainer },
    { id: 'videoOverlay' }
  );

  const controlsContainer = craddel(
    { parent: videoContainer },
    { className: 'controlsContainer' }
  );

  !startWithControlBar && controlsContainer.classList.add('hideControls');

  const seekBarTime = craddel(
    { parent: controlsContainer },
    { id: 'seekBarTime', innerText: '00:00 / 00:00' }
  );

  const seekBar = craddel(
    { parent: controlsContainer },
    { id: 'seekBar', className: 'controlBars' }
  );

  const volumeBar = craddel(
    { parent: controlsContainer },
    { id: 'volumeBar', className: 'controlBars' }
  );

  const volumeBarLevel = craddel(
    { parent: volumeBar },
    { id: 'volumeBarLevel' }
  );

  volumeBar.addEventListener('mousedown', onVolumeBarClick);
  volumeBar.addEventListener('wheel', onVolumeBarWheel);

  volumeBar.addEventListener('mousedown', onBarMouseDown);
  volumeBar.addEventListener('mouseup', onBarMouseMouseUp);
  volumeBar.addEventListener('mouseout', onBarMouseOut);
  volumeBar.addEventListener('mousemove', onVolumeBarMouseMove);

  seekBar.addEventListener('mousedown', onSeekBarClick);
  seekBar.addEventListener('wheel', onSeekBarWheel);

  seekBar.addEventListener('mousedown', onBarMouseDown);
  seekBar.addEventListener('mouseup', onBarMouseMouseUp);
  seekBar.addEventListener('mouseout', onBarMouseOut);
  seekBar.addEventListener('mousemove', onSeekBarMouseMove);

  videoContainer.addEventListener(
    'mousemove',
    throttle(100, onVideoContainerMouseMove)
  );

  function onVolumeBarClick(e) {
    const barValue = e.offsetX / e.target.offsetWidth;
    videoController.muteOff();
    video.volume = barValue;
  }

  function onVolumeBarWheel(e) {
    e.preventDefault();
    videoController.muteOff();
    e.deltaY < 0 ? videoController.volumeUp() : videoController.volumeDown();
  }

  function onSeekBarClick(e) {
    e.stopPropagation();
    const barValue = e.offsetX / this.offsetWidth;
    video.currentTime = video.duration * barValue;
    seekBar.style.setProperty('--seekBarState', `${barValue * 100}%`);
  }

  function onSeekBarWheel(e) {
    e.stopPropagation();
    e.preventDefault();
    e.deltaY < 0
      ? videoController.seekForward()
      : videoController.seekBackward();
  }

  let barMouseDown = false;

  function onBarMouseDown(e) {
    e.preventDefault();
    barMouseDown = true;
  }

  function onBarMouseMouseUp(e) {
    barMouseDown = false;
  }

  function onBarMouseOut(e) {
    barMouseDown = false;
  }

  function onSeekBarMouseMove(e) {
    if (!barMouseDown) return;
    e.preventDefault();
    const barValue = e.offsetX / this.offsetWidth;
    video.currentTime = video.duration * barValue;
    seekBar.style.setProperty('--seekBarState', `${barValue * 100}%`);
  }

  function onVolumeBarMouseMove(e) {
    if (!barMouseDown) return;
    e.preventDefault();
    const barValue = Math.ceil((e.offsetX / e.target.offsetWidth) * 100) / 100;
    videoController.muteOff();
    video.volume = barValue;
  }

  function onVideoContainerMouseMove(e) {
    const { controlBarVisibilityDuration, cursorVisibilityDuration } = opt;
    opt.autoHideCursor &&
      controlCursorVisibility(videoContainer, {
        cursorVisibilityDuration
      });
    opt.autoHideControlBar &&
      controlControlBarContainerVisibility(e, controlsContainer, {
        controlBarVisibilityDuration
      });
  }

  handleVideoEvent(videoController, {
    seekBar,
    volumeBar,
    seekBarTime,
    volumeBarLevel
  });
};
