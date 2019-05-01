import handleKeyboardEvent from '../keyboard-event';
import getVideoshot from '../get-videoshot';

export default (videoController, opt) => {
  const { modal } = opt;

  const defaultKeyboardActionMap = {
    ' ': videoController.togglePlay,
    s: videoController.togglePlay,
    arrowright: videoController.seekForward,
    d: videoController.seekForward,
    arrowleft: videoController.seekBackward,
    a: videoController.seekBackward,
    arrowup: videoController.volumeUp,
    arrowdown: videoController.volumeDown,
    e: () => videoController.increasePlaybackRate(0.1),
    w: videoController.normalizePlaybackRate,
    q: () => videoController.decreasePlaybackRate(0.1),
    c: videoController.toggleControls,
    m: videoController.toggleMute,
    v: () => getVideoshot(videoController.video)
  };

  if (modal) {
    defaultKeyboardActionMap['alt+q'] = modal.closeModal;
  }

  const keyboardActionMap =
    opt.keyboardActionMap === true
      ? defaultKeyboardActionMap
      : opt.keyboardActionMap;

  document.addEventListener(
    'keydown',
    handleKeyboardEvent(keyboardActionMap, ['BODY', 'VIDEO'])
  );
};
