export default (element, attributesToKeep = []) => {
  const removedAttributes = [];

  element &&
    element.getAttributeNames().forEach(attribute => {
      if (!attributesToKeep.includes(attribute)) {
        removedAttributes.push({
          name: attribute,
          value: element.getAttribute(attribute)
        });
        element.removeAttribute(attribute);
      }
    });

  return removedAttributes;
};
