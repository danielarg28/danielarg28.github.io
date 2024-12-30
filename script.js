var currentImageIndex = 1
const totalImages = 16

function changeImageForward() {
  const image = document.getElementById('photo');
  currentImageIndex = currentImageIndex < totalImages ? currentImageIndex + 1 : 1;
  image.src = `gallery/${currentImageIndex}.jpg`;
}

function changeImageBackwards() {
    const image = document.getElementById('photo');
    currentImageIndex = currentImageIndex > 1 ? currentImageIndex - 1 : 16;
    image.src = `gallery/${currentImageIndex}.jpg`;
}

emailjs.init('-XWVqkjq_nCS1CFnA');


// TODO
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('service_6e0yt1h', 'template_f7z5p6s', this)
          .then(() => {
              console.log('SUCCESS!');
              const sentMessage = document.getElementById('sent_message');
              sentMessage.style.display = 'block';
              setTimeout(function() {
                  sentMessage.style.opacity = 1; 
              }, 10);
          }, (error) => {
              console.log('FAILED...', error);
          });
  });
}

