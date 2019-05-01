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
    'wheeldown+g0208': () => videoController.decreasePlaybackRate(0.1),
    'wheelup+g0208': () => videoController.increasePlaybackRate(0.1),
    'mousedown0+g0228': () => videoController.normalizePlaybackRate(),
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

  const mouseActionMap =
    opt.mouseActionMap === true ? defaultMouseActionMap : opt.mouseActionMap;

  if (opt.view) {
    const overlay = document.querySelector('#videoOverlay');
    overlay.addEventListener('click', handleMouseEvent(mouseActionMap));
    overlay.addEventListener('mousedown', handleMouseEvent(mouseActionMap));
    overlay.addEventListener('mouseup', handleMouseEvent(mouseActionMap));
    overlay.addEventListener('wheel', handleMouseEvent(mouseActionMap));
    overlay.addEventListener('contextmenu', handleContextMenu);
  } else {
    video.addEventListener('click', handleMouseEvent(mouseActionMap));
    video.addEventListener('mousedown', handleMouseEvent(mouseActionMap));
    video.addEventListener('mouseup', handleMouseEvent(mouseActionMap));
    video.addEventListener('wheel', handleMouseEvent(mouseActionMap));
  }
};

function hasFullScreen() {
  return document.fullscreenElement;
}
