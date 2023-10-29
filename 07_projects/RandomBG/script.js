//! generate random color;

const randomColor = () => {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
}

// console.log(randomColor());
let interVal;
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");

const startChangeColor = () => {
  interVal = setInterval(changeBGcolor, 1000);
  function changeBGcolor() {
    document.body.style.backgroundColor = randomColor();
  }
  // console.log('Hello World')
  startBtn.style.backgroundColor = "green"
  startBtn.style.color = "white"
  stopBtn.style.backgroundColor = "white"
  stopBtn.style.color = "black";
}

const stopChangeColor = () => {
  clearInterval(interVal);
  interVal = null;

  stopBtn.style.backgroundColor = "red"
  stopBtn.style.backgroundColor = "red"
  startBtn.style.backgroundColor = "white"
  startBtn.style.color = "black"

}


document.getElementById("start").addEventListener('click', startChangeColor)

document.getElementById('stop').addEventListener('click', stopChangeColor)