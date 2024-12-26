export default function decorate(block) {
    block.classList.add('aem-tag-picker-block');
  
    const label = document.createElement('label');
    label.setAttribute('for', 'cq-tags');
    label.textContent = 'Tags';
    block.prepend(label);
  
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'cq-tags');
    input.setAttribute('name', 'cq:tags');
    input.setAttribute('placeholder', 'Enter tags...');
    block.appendChild(input);
  
    input.addEventListener('input', (event) => {
      console.log('Tag input value:', event.target.value);
    });
  
    const metaContent = getMetadata('cq:tags');
    if (metaContent) {
      console.log('Metadata retrieved:', metaContent);
    }
  }
  