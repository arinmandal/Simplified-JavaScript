const button = document.querySelectorAll(".button")
// console.log(button)
const body = document.querySelector("body")
// console.log(body)

button.forEach((button) => {
  // console.log(button.id)
  button.addEventListener('click', (e) => {
    // console.log(e.target.id)
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
  })
})