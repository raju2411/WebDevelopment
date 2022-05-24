document.querySelector(".btn").addEventListener("click",function(){

    var input1 = document.querySelector(".input1").value;

    var input2 = document.querySelector(".input2").value;

    

    if(input1.length<1 || input2.length<1){
        alert("Please enter number feild properly");
    }else{
        var sum = parseInt(input1)+parseInt(input2);
        document.querySelector(".answer").innerHTML= "Your total addition for "+input1+" and "+input2+" is "+sum;


    }

    
})
