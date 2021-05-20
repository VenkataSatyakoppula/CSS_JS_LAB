$(document).ready(function () {
    $('.sub').on('click',function(){
        var usr=$('#user').val();
        var values = [],checked=[],labels=[],prices=[20.39,40.20,30.95,70.49];
        $("input[type='number']").each(function(){
            values.push($(this).val());
        });
        $('input[type=checkbox]:checked').each(function(i) {
            checked.push($(this).val());
        });
        $('label').each(function (i) { 
            labels.push($(this).text());
        });
        
        $(".username").html("Username: "+usr);
        var card = $("input[type='radio'][name='card']:checked").val();
        $(".mode").html(card)
        var j=0,total=0;
        $("tr").each(function(i) { 
            if ((i-1)==(checked[j])) {
                var v = checked[j]
                $(this).html("<td>"+labels[parseInt(v)+1]+"</td><td>"+values[v]+"</td><td>"+prices[v]+"</td><td>"+values[v]*prices[v]+"</td>")
                j++;
                total = total + values[v]*prices[v];
            } 
        });
        $(".total").html((total+total*0.135)+" ")
    });

    $('button').on('click',function () {
        location.reload()
    });

});