document.addEventListener('DOMContentLoaded', () => {
  const tagContainers = document.querySelectorAll('.aem-tag-container');
  tagContainers.forEach((container) => {
    const selectedTags = container.getAttribute('data-aue-resource');
    if (selectedTags) {
      const tagDisplay = document.createElement('div');
      tagDisplay.className = 'tag-display';
      const tagsArray = selectedTags.split('/').slice(-1)[0].split('-');
      tagsArray.forEach((tag) => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag.trim();
        tagDisplay.appendChild(tagElement);
      });
      container.appendChild(tagDisplay);
    }
  });
});
