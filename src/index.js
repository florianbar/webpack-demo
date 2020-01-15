import _ from 'lodash';
import './style.css';
import MyImage from './2020.jpg';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to out existing div.
  const myImage = new Image();
  myImage.src = MyImage;
  element.appendChild(myImage);

  return element;
}
  
document.body.appendChild(component());