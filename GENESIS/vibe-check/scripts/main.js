let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG_1257.jpg') {
      myImage.setAttribute ('src','images/IMG_1264.jpg');
    } else {
      myImage.setAttribute ('src','images/IMG_1257.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('pls enter your name bitch');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + "'S GENESIS";
}
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + "'S GENESIS";
}

function setUserName(){
    let myName = prompt('pls enter your name bitch');
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = myName + "'S GENESIS";
    }
}

myButton.onclick = function() {
    setUserName();
  }