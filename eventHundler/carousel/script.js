window.onload = init;

let imgArray = ['images1.png', 'images2.png', 'images3.jpg', 'images4.png'];

let imgArrayIndex = 0;
let btn_l = document.getElementById('btn_left');
let btn_r = document.getElementById('btn_right');
let images = document.getElementById('collection__images');

function init(){
   btn_l.onclick = click_left;
   btn_r.onclick = click_right;
}
console.log(imgArray.length);
function click_left(){
   imgArrayIndex = imgArrayIndex - 1;
   if (imgArrayIndex < 0){
      imgArrayIndex = imgArray.length - 1;
   }
   images.src = imgArray[imgArrayIndex];

}
function click_right(){
   imgArrayIndex = imgArrayIndex + 1;
   if (imgArrayIndex > 3){
      imgArrayIndex = 0;
   }
   images.src = imgArray[imgArrayIndex];

}

console.log(init);
