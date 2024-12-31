emailjs.init('XWVqkjq_nCS1CFnA');
var currentImageIndex = 1
const totalImages = 16

function addButtonAnimation() {
  const instagramButton = document.getElementById('instagram');
  const behanceButton = document.getElementById('behance');
  const roverButton = document.getElementById('rover');
  instagramButton.classList.add('media_icon1');
  behanceButton.classList.add('media_icon2');
  roverButton.classList.add('media_icon3');
}

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

function buttonAnimation(succesful) {
  const sentMessageButton = document.getElementById('submit_button');
  succesful ? sentMessageButton.classList.add('submit_button_sent') : sentMessageButton.classList.add('submit_button_not_sent')
}

function showMessage(messageText) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = messageText; 
  messageElement.style.display = 'block';  
  messageElement.classList.add('message'); 

  setTimeout(() => {
    messageElement.style.display = 'none';
  }, 4000); 
}

window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_6e0yt1h', 'template_f7z5p6s', this)
      .then(() => {
        this.reset();
        const inputs = this.querySelectorAll('input, textarea');
        inputs.forEach(input => input.setAttribute('disabled', 'true'));
        buttonAnimation(true);
        showMessage('¡Mensaje enviado!');
      }, (error) => {
        buttonAnimation(false);
        showMessage('El mensaje no ha podido ser enviado');
      });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const instagramImage = document.getElementById('instagram');
  const behanceImage = document.getElementById('behance');
  const roverImage = document.getElementById('rover');
  setTimeout(() => {
      instagramImage.classList.add('media_icon_animation');
      behanceImage.classList.add('media_icon_animation');
      roverImage.classList.add('media_icon_animation');
      instagramImage.classList.remove('media_icon1');
      behanceImage.classList.remove('media_icon2');
      roverImage.classList.remove('media_icon3');
    }, 2000);
  });
