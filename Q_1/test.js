n = prompt("Enter no.of users = ");
var a = [];
for (let index = 0; index <n; index++) {
    a[index] = prompt("Enter the hours of customer");
}
text = "";
for (let i = 0; i < a.length; i++) {
    text += "user"+i+" hours = "+a[i]+"<br>" ; 
}
price = ""
for (var i=0;i<n;i++){
    var p=0
    if(a[i]>3 && a[i]<24){
        p = (a[i]-3)*0.5 + 2;
        price += "user"+i+ " price is "+p + "$ <br>";
    }else if(a[i]<=3){
        price += "user"+i+ " price is "+2 + "$ <br>";
    }else if(a[i]==24){
        price += "user"+i + " Price is "+10 + "$ <br>";
    }
}
var q = document.querySelector("#data");
q.innerHTML = text;
document.querySelector("#print").innerHTML = price;