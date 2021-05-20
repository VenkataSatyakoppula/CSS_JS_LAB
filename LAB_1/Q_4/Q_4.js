
function reverser() {
    var str  =document.querySelector("#input").value;
    var fil = document.querySelector("#filter").value;
    console.log(str);
    var arr = str.split(' ');
    arr.reverse();
    console.log(arr);
    var text = ""
    if(fil === ""){
        for (let i = 0; i < arr.length; i++) {
            if ((i+1)%2!==0) {
                text += "<u>"+arr[i] +"</u>"+"&nbsp;";
            }else{
                text += arr[i] +"&nbsp;";
            }
        }
        document.querySelector("#output").innerHTML = text;
    }
    else{
        var k=0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].toLowerCase()!==fil.toLowerCase()) {
                if ((k+1)%2!==0) {
                    text += "<u>"+arr[i] +"</u>"+"&nbsp;";
                }else{
                    text += arr[i] +"&nbsp;";
                }
                k++;
            }   
        }
        var off = (arr.length-k);
        document.querySelector("#output").innerHTML = text;
        document.querySelector("#offset").innerHTML = off + "&nbsp;word(s) filtered out";
    }
}
