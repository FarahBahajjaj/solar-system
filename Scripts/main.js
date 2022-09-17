const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'Images/solar.jpg') {
    myImage.setAttribute('src','Images/solar2.jpeg');
  } else {
    myImage.setAttribute('src','Images/solar.jpg');
  }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    const myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = `solar system, ${myName}`;
  }
  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `solar system, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  }
  function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `solar system, ${myName}`;
    }
  }
  
