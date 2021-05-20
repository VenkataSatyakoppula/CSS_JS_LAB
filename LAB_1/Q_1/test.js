n = prompt("Enter no.of users = ");
var a = [];
for (let index = 0; index <n; index++) {
    a[index] = prompt("Enter the hours of customer "+(index+1));
}
text = "";
for (let i = 0; i < a.length; i++) {
    text += "User"+(i+1)+" hours = "+a[i]+"<br>" ; 
}
price = ""
for (var i=0;i<n;i++){
    var p=0
    if(a[i]>3 && a[i]<24){
        p = (a[i]-3)*0.5 + 2;
        price += "User"+(i+1)+ " price is "+p + "$ <br>";
    }else if(a[i]<=3 && a[i]>0){
        price += "User"+(i+1)+ " price is "+2 + "$ <br>";
    }else if(a[i]==24){
        price += "User"+(i+1)+ " Price is "+10 + "$ <br>";
    }else{
        price +="User Can't park more than 24hrs or less than 0 hrs <br>"
    }
}
var q = document.querySelector("#data");
q.innerHTML = text;
document.querySelector("#print").innerHTML = price;