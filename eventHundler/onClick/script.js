window.onload = init; //обработчик onload для выполнения скрипта после загрузки страницы

function init(){
   let image = document.getElementById('changeImage');
   image.onclick = showImage; //обработчик, для выполнения при нажатии на область


}
function showImage(){
   let image = document.getElementById('changeImage'); //получаем элемент (объект) в переменную image
   image.src = "harryPotter.jpg"; //назначаем свойству src объекту (ссылка на объект) в переменной image
}
