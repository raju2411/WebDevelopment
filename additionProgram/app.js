document.querySelector(".btn").addEventListener("click",function(){
    


    // for input element we take .value and not .innerHTML because it holds a value and innerHTML is used to hold the inner html of an element

    var num1 = document.querySelector(".num1").value;

    var num2 = document.querySelector(".num2").value;

    

    if(num1.length<1 || num2.length<1){
        alert("Please enter number field properly");
    }else{
        var sum = parseInt(num1)+parseInt(num2);
        document.querySelector(".answer").innerHTML= "Your total addition for "+num1+"  and "+num2+" is "+sum;
    }



})