function validate(params) {
    var name = document.querySelector("#Name");
    var addr = document.querySelector("#Addr");
    var email = document.querySelector("#Email");
    var radios = document.getElementsByName("0");
    var n = document.getElementById("fruits").options.length;
    var formValid = false;
    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }
    if (!formValid){ 
    alert("Must check some radio option!");
    return formValid;
    }
    if (name.value =="" || email.value =="" || addr.value==""){
        alert("no blank values are allowed");
        return false;
    }else{
        true;
    }
    var c=0;
    for (var i = 0;i < n; i++){
        if (document.getElementById("fruits").options[i].selected === false){
            c = c+1
        }
    }
    console.log(c);
    if(c===n){
        alert("Select anyone of the fruits")
        return false;
    }
}