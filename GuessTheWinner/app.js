

document.querySelector(".play").addEventListener('click',function(){
    transitionDiv();
    
    var name1 = document.querySelector(".name1").value;
    var name2 = document.querySelector(".name2").value;
    if(name1.length<1 || name2.length<1){
        alert("Please enter the names");
    }else{
         guessTheName(name1,name2);

    }
})


function guessTheName(name1,name2){
   var number= Math.floor((Math.random() * 2) + 1);

   if(number==1){

    document.querySelector('#result').innerHTML = name1+ " is the winner!!!"
    document.querySelector('#result').style.color ="#D61C4E";

   }else if(number==2){
    document.querySelector('#result').innerHTML = name2+ " is the winner!!!"
    document.querySelector('#result').style.color ="#D61C4E";
   

   }

}


function transitionDiv(){
     document.querySelector('#result').style.transform ="translateX(-28px)";
     setTimeout(function(){
        document.querySelector('#result').style.transition ="transform 2s";
        document.querySelector('#result').style.color ="#D61C4E";
        document.querySelector('#result').style.transform ="translateX(0px)";
    },500)
};

//  document.querySelector('#result').style.color ="red";
// document.querySelector('#result').style.transform =" translateX(0px)";