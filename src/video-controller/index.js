import addKeyboardEventListener from './addKeyboardEventListener';
import addMouseEventListener from './addMouseEventListener';
import cleanDocument from '../cleaner/cleanDocument';
import createVideoController from './createVideoController';
import createVideoView from './createVideoView';
import createModal from './createModal';
import removeAttributes from '../cleaner/removeAttributes';

export default (video, opt = {}) => {
  const defaultOpt = {
    autoHideControlBar: true,
    autoHideCursor: true,
    clean: false,
    closeModalMouseKey: 'mousedown1',
    controlBarVisibilityDuration: 2000,
    cursorVisibilityDuration: 2000,
    excludeKeyboardEventTargetElements: true,
    keyboardActionMap: true,
    keyboardEventTargetElements: ['INPUT'],
    mergeKeyboardActionMapWithDefault: true,
    mergeMouseActionMapWithDefault: true,
    mouseActionMap: true,
    playbackRateChange: 0.1,
    startInFullScreen: true,
    startWithControlBar: false,
    timeChange: 1,
    videoshotOpt: {},
    view: 'modal',
    volumeChange: 0.01
  };
  opt = { ...defaultOpt, ...opt };

  // needed when opt.view == true, or opt.view == 'modal'
  const originalVideoAttributes = opt.view && removeAttributes(video, ['src']);

  if (opt.view === 'modal') {
    opt.originalVideoAttributes = originalVideoAttributes;
    opt.originalVideoParent = video.parentElement;
    opt.videoIndex = [...video.parentElement.children].findIndex(
      el => el.nodeName === 'VIDEO'
    );
    opt.modal = createModal(video, opt);
    opt.clean = false;
  }

  opt.clean && cleanDocument();

  const videoController = createVideoController(video, opt);
  opt.view && createVideoView(videoController, opt);
  opt.keyboardActionMap && addKeyboardEventListener(videoController, opt);
  opt.mouseActionMap && addMouseEventListener(videoController, opt);

  return videoController;
};
