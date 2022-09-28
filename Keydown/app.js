const key = document.querySelector('.box_key .box_description')
const key_location = document.querySelector('.box_location .box_description')
const key_which = document.querySelector('.box_which .box_description')
const key_code = document.querySelector('.box_code .box_description')
const circle = document.querySelector('.circle')

document.addEventListener('keydown', (e)=> {
  if(e){
    key.innerHTML = e.key;
    key_location.innerHTML = e.location;
    key_which.innerHTML = e.which;
    key_code.innerHTML = e.code;
    circle.innerHTML = e.which
  }
})