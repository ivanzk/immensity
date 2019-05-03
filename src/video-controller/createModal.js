import craddel from '../craddel';
import restoreVideoToOriginalState from './restoreVideoToOriginalState';

export default (
  video,
  { videoIndex, originalVideoAttributes, originalVideoParent }
) => {
  const modal = craddel({}, { id: 'iyModal' });

  function closeModal() {
    restoreVideoToOriginalState({
      video,
      videoIndex,
      originalVideoAttributes,
      originalVideoParent
    });

    document.querySelector('#iyModal').remove();
    document.querySelector('#iyBodyOverflowHiddenStyle').remove();
    document.querySelector('#iyVideoControllerStyle').remove();
  }

  craddel(
    { tag: 'style', parent: document.head },
    {
      id: 'iyBodyOverflowHiddenStyle',
      innerHTML: /* css */ `
        body { overflow: hidden !important }`
    }
  );

  return {
    modal,
    closeModal
  };
};
