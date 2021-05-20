
function fuc() {  
    var e= document.querySelector("#name");
    document.querySelector(".result").innerHTML = ''
    var strUser = e.options[e.selectedIndex].text;
    var request = new XMLHttpRequest();
    request.open('GET',"https://venkatasatyakoppula.github.io/hostjson/Q10json.js");
    request.onload = function(){
    var data = JSON.parse(request.responseText)
    for (let i = 0; i < data.length; i++) {
        var ele = document.createElement("h4");
        if(data[i].type==strUser){
            document.querySelector(".result").innerHTML += "<h4>"+"Product type = "+data[i].type+"<br>"+
            "Product_id= "+data[i].Product_id+"<br>"+"Name = "+data[i].Name+"<br>"+
            "Price= "+data[i].Price+"<br>"+"Stock= "+data[i].Stock+"</h4>";
        }   
    }
};
 request.send();
}
document.getElementById("btn").addEventListener("click",fuc);


