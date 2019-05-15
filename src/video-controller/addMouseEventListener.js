import getVideoshot from '../get-videoshot';
import handleContextMenu from '../context-menu';
import handleMouseEvent from '../mouse-event';

export default (videoController, opt) => {
  const { video } = videoController;
  const { modal, closeModalMouseKey } = opt;

  const defaultMouseActionMap = {
    // Full
    click: () => {},
    mousedown1: () => getVideoshot(video, opt.videoshotOpt),
    mouseup2: videoController.toggleControls,

    // Left
    'wheeldown+g0208': videoController.decreasePlaybackRate,
    'wheelup+g0208': videoController.increasePlaybackRate,
    'mousedown0+g0228': videoController.normalizePlaybackRate,
    'mousedown0+g0201': () => getVideoshot(video, opt.videoshotOpt),

    // Center
    'click+g3600': () =>
      hasFullScreen()
        ? document.webkitExitFullscreen()
        : video.parentElement.webkitRequestFullscreen(),

    'mousedown0+g3618': videoController.togglePlay,
    'mousedown0+d2+g3618': videoController.togglePlay,

    'wheeldown+g3604': () =>
      videoController.seekBackward(2.5, {
        currentBuffer: videoController.getBufferState().currentBuffer
      }),
    'wheelup+g3604': () =>
      videoController.seekForward(2.5, {
        currentBuffer: videoController.getBufferState().currentBuffer
      }),

    'wheeldown+g3658': () => videoController.seekBackward(2.5),
    'wheelup+g3658': () => videoController.seekForward(2.5),

    // Right
    'wheeldown+g7904': () => videoController.volumeDown(0.05),
    'wheelup+g7904': () => videoController.volumeUp(0.05),
    'wheeldown+g7958': () => videoController.volumeDown(0.01),
    'wheelup+g7958': () => videoController.volumeUp(0.01),
    'mousedown0+g7928': videoController.toggleMute
  };

  if (modal) {
    defaultMouseActionMap['click+g7901'] = modal.closeModal;
    defaultMouseActionMap[closeModalMouseKey] = modal.closeModal;
  }

  let mouseActionMap;
  if (opt.mouseActionMap === true) {
    mouseActionMap = defaultMouseActionMap;
  } else {
    mouseActionMap = opt.mergeMouseActionMapWithDefault
      ? { ...defaultMouseActionMap, ...opt.mouseActionMap }
      : opt.mouseActionMap;
  }

  if (opt.view) {
    const overlay = document.querySelector('#iyVideoOverlay');
    overlay.addEventListener(
      'click',
      handleMouseEvent({ click: () => overlay.focus() })
    );
    overlay.addEventListener('mousedown', handleMouseEvent(mouseActionMap));
    overlay.addEventListener('mouseup', handleMouseEvent(mouseActionMap));
    overlay.addEventListener('wheel', handleMouseEvent(mouseActionMap));
    overlay.addEventListener('contextmenu', handleContextMenu);
  } else {
    const opt = {
      stopPropagation: true,
      stopImmediatePropagation: true
    };
    video.addEventListener('click', handleMouseEvent(mouseActionMap, opt));
    video.addEventListener('mousedown', handleMouseEvent(mouseActionMap, opt));
    video.addEventListener('mouseup', handleMouseEvent(mouseActionMap, opt));
    video.addEventListener('wheel', handleMouseEvent(mouseActionMap, opt));
  }
};

function hasFullScreen() {
  return document.fullscreenElement;
}
