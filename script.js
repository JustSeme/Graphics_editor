let pixels = document.querySelectorAll('.pixel');
let color = document.querySelector('.chosen-color');
let eraser = document.querySelector('.eraser');


for(let pixel of pixels) {
  pixel.onclick = function () {
    if (eraser.checked) {
      pixel.style.backgroundColor = 'white'; 
    } else {
      pixel.style.backgroundColor = color.value;
    }
  }
}