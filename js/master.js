var taget;

document.addEventListener('click', function(e){
  e = e || window.event;
  target = e.target || e.srcElement;

}, false);

function resizeWidth(){
  var x = document.getElementById("width").value;
  target.style.width = x + "px";
}

function resizeHeight(){
  var y = document.getElementById("height").value;
  target.style.height = y + "px";
}
function resizePadding(){
  var z = document.getElementById("margin").value;
  target.style.margin = z + "px";
}
