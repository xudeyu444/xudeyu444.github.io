let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Hammer.png") {
    myImage.setAttribute("src", "images/Flag_of_Germany_(1935–1945).svg.png");
  } else {
    myImage.setAttribute("src", "images/Hammer.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "亲爱的同志" + myName + "欢迎";
    }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "亲爱的同志" + storedName + "欢迎";
  }
  myButton.onclick = function () {
    setUserName();
  };
