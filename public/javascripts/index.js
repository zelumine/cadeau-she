const knope = require('knope');
const complimentBox = document.getElementById('compliment');
const complimentBtn = document.getElementById('btn');
const body = document.querySelector('body');
const hiddenText = document.querySelector('#img-clicked');

const imgSpan = document.createElement('span');
imgSpan.setAttribute('onclick', 'event.stopPropagation()');
imgSpan.classList.add('img-span');

const niceTweetImg = document.createElement('img');

body.appendChild(imgSpan);
let imgSrc = "";

const getCompliment = () => {
  imgSrc = '';

  let complimentText;

  const num = Math.floor(Math.random() * (4 - 1) + 1);
  
  switch(num) {
    case 1:
      complimentText = knope.getCompliment('Shé');
      break;
    case 2:
      complimentText = knope.getCompliment('Shé', 3);
      break;
    case 3:
      complimentText = knope.getOfficialCompliment('Shé', 3, false);
      break;
  }

  complimentBox.innerText = complimentText;
};

const getNiceTweet = () => {
  const index = Math.floor(Math.random() * (39 - 1) + 1);
  console.log("index:", index);
  imgSrc = `images/tweet${index}.png`;
  
  niceTweetImg.setAttribute('src', imgSrc);
  niceTweetImg.classList.add('nice-tweet-img');
  imgSpan.appendChild(niceTweetImg);
  hiddenText.classList.remove('hidden');
}

const removeNiceTweet = () => {
  imgSpan.removeChild(niceTweetImg);
  body.addEventListener('click', getNiceTweet);
  hiddenText.classList.add('hidden');
}

complimentBtn.addEventListener('click', getCompliment);
body.addEventListener('click', getNiceTweet);
niceTweetImg.addEventListener('click', removeNiceTweet);


