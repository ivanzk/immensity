import handleKeyboardEvent from '../keyboard-event';
import getVideoshot from '../get-videoshot';

export default (videoController, opt) => {
  const { modal } = opt;

  const defaultKeyboardActionMap = {
    ' ': videoController.togglePlay,
    s: videoController.togglePlay,
    arrowright: () => videoController.seekForward(5),
    d: () => videoController.seekForward(5),
    arrowleft: () => videoController.seekBackward(5),
    a: () => videoController.seekBackward(5),
    arrowup: () => videoController.volumeUp(0.05),
    arrowdown: () => videoController.volumeDown(0.05),
    e: videoController.increasePlaybackRate,
    w: videoController.normalizePlaybackRate,
    q: videoController.decreasePlaybackRate,
    c: videoController.toggleControls,
    m: videoController.toggleMute,
    v: () => getVideoshot(videoController.video)
  };

  if (modal) {
    defaultKeyboardActionMap['alt+q'] = modal.closeModal;
  }

  let keyboardActionMap;
  if (opt.keyboardActionMap === true) {
    keyboardActionMap = defaultKeyboardActionMap;
  } else {
    keyboardActionMap = opt.mergeKeyboardActionMapWithDefault
      ? { ...defaultKeyboardActionMap, ...opt.keyboardActionMap }
      : opt.keyboardActionMap;
  }

  document.addEventListener(
    'keydown',
    handleKeyboardEvent(keyboardActionMap, {
      excludeTargets: opt.excludeKeyboardEventTargetElements,
      targets: opt.keyboardEventTargetElements
    })
  );
};
