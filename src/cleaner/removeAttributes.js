export default (element, toKeep = []) => {
  const removedAttributes = [];

  element &&
    element.getAttributeNames().forEach(attribute => {
      if (!toKeep.includes(attribute)) {
        removedAttributes.push({
          name: attribute,
          value: element.getAttribute(attribute)
        });
        element.removeAttribute(attribute);
      }
    });

  return removedAttributes;
};
