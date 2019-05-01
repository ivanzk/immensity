export default ({
  video,
  videoIndex,
  originalVideoAttributes,
  originalVideoParent
}) => {
  originalVideoAttributes.forEach(({ name, value }) =>
    video.setAttribute(name, value)
  );

  originalVideoParent.insertBefore(
    video,
    originalVideoParent.children[videoIndex]
  );
};
