let timeoutId;

export default (e, controlBarContainer, opt = {}) => {
  if (e.target.id === 'videoOverlay') {
    controlBarContainer.classList.remove('hideControls');
    autoHide();
  } else {
    clearTimeout(timeoutId);
    controlBarContainer.classList.remove('hideControls');
  }

  function autoHide() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      controlBarContainer.classList.add('hideControls');
    }, opt.controlBarVisibilityDuration);
  }
};
