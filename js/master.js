var taget;

document.addEventListener('click', function(e){

  e = e || window.event;
  console.log(e.target.parentElement)
  if(e.target.id === 'tools' || e.target.parentElement.id === 'tools' || e.target.parentElement.parentElement.id === 'tools'){
    return
  }
  target = e.target || e.srcElement;
  var hltd = document.getElementsByClassName('heighlight');
  for(var i=0; i<hltd.length; i++){
    var el = hltd[i];
    if(el.classList.contains('heighlight')){
      el.classList.remove('heighlight')
    }
  }
  target.className = 'heighlight';

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
