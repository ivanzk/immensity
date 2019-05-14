let timeoutId;

export default (e, controlsContainer, opt = {}) => {
  if (e.target.id === 'videoOverlay') {
    controlsContainer.classList.remove('hideControls');
    autoHide();
  } else {
    clearTimeout(timeoutId);
    controlsContainer.classList.remove('hideControls');
  }

  function autoHide() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      controlsContainer.classList.add('hideControls');
    }, opt.controlsVisibilityDuration);
  }
};
