document.addEventListener("DOMContentLoaded", function () {
    const finalPreview = document.getElementById('final-preview');
  
    
    document.getElementById('content').addEventListener('input', function() {
      finalPreview.textContent = this.value;
    });
  
    document.getElementById('font').addEventListener('change', updatePreviewStyle);
    document.getElementById('font-style').addEventListener('change', updatePreviewStyle);
    document.getElementById('text-size').addEventListener('change', updatePreviewStyle);
    document.getElementById('text-color').addEventListener('change', updatePreviewStyle);
    document.getElementById('text-align').addEventListener('change', updatePreviewStyle);
    document.getElementById('line-height').addEventListener('change', updatePreviewStyle);
    
    function updatePreviewStyle() {
      finalPreview.style.fontFamily = document.getElementById('font').value;
      finalPreview.style.fontStyle = document.getElementById('font-style').value;
      finalPreview.style.fontSize = document.getElementById('text-size').value;
      finalPreview.style.color = document.getElementById('text-color').value;
      finalPreview.style.textAlign = document.getElementById('text-align').value;
      finalPreview.style.lineHeight = document.getElementById('line-height').value;
    }
  
    
    document.getElementById('start-animation').addEventListener('change', function() {
      finalPreview.classList.add(this.value);
    });
    document.getElementById('end-animation').addEventListener('change', function() {
      finalPreview.classList.add(this.value);
    });
  });
  
document.addEventListener("DOMContentLoaded", function () {
    
    const swiper = new Swiper('.swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
   
    function enableDrag(element) {
      let offsetX = 0, offsetY = 0;
      let isDragging = false;
  
      element.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
        element.style.transition = 'none'; 
      });
  
      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const parent = element.parentElement;
        const parentRect = parent.getBoundingClientRect();
  
        
        const left = Math.min(
          Math.max(0, e.clientX - offsetX - parentRect.left),
          parentRect.width - element.offsetWidth
        );
        const top = Math.min(
          Math.max(0, e.clientY - offsetY - parentRect.top),
          parentRect.height - element.offsetHeight
        );
  
        element.style.left = `${left}px`;
        element.style.top = `${top}px`;
      });
  
      document.addEventListener('mouseup', () => {
        isDragging = false;
        element.style.transition = ''; 
      });
    }
  
   
    enableDrag(document.getElementById('editable-text-slide1'));
    enableDrag(document.getElementById('editable-text-slide2'));
  
    
    const finalPreview = document.getElementById('final-preview');
  
    document.querySelectorAll('.form-inputs input').forEach((input) => {
      input.addEventListener('input', () => {
        finalPreview.textContent = `Name: ${document.getElementById('name').value}\nPlace: ${document.getElementById('place').value}\nGender: ${document.getElementById('gender').value}\nDOB: ${document.getElementById('dob').value}`;
      });
    });
  });
  
  const form = document.getElementById('textInputForm');
  const inputText = document.getElementById('userText');
  const displayText = document.getElementById('editable-text-slide1');

  
  form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    const text = inputText.value; 
    displayText.textContent = ` ${text}`; 
  });



const editableText = document.getElementById('editable-text-slide1');


editableText.addEventListener('input', () => {

  editableText.style.height = 'auto';

 
  editableText.style.height = `${editableText.scrollHeight}px`;
});
