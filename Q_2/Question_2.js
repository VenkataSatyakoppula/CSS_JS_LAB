var myVar = setInterval(myTimer, 1000);
        
function myTimer() {
  var d = new Date();
  document.getElementById("inner").innerHTML = d.toLocaleTimeString();
}

var i = 0; var path = new Array(); 

// LIST OF IMAGES 
path[0] = "image_3.jpg"; 
path[1] = "image_2.jpg"; 
path[2] = "image_1.jpg"; 

function swapImage() 
{ 
document.slide.src = path[i]; 
if(i < path.length - 1) i++; 
else i = 0; 
setTimeout("swapImage()",2000); 
} 
window.onload=swapImage; 

function change() {
    var x = document.getElementById("col");
    var y = document.getElementById("fontt");
    document.querySelector("body").style.backgroundColor = x.value;
    document.querySelector("body").style.fontSize = y.value+"px";
}
