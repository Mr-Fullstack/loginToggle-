
var switcher =  document.getElementById("toogle");
var toogle = document.querySelector(".flip-card-inner");
var tooltip = document.getElementById("tooltip");
var tooglado = false;
var btnRecovery = document.getElementById("jw_btn_recovery");
var Recovery= document.getElementById("jw_recovery");
var body = document.body
var aberto = false;
if (tooglado) 
{
  tooltip.innerHTML = "logar";
}
else
{
  tooltip.innerHTML = "Cadastrar"; 
}

function toogleed(tooglado){
  if (tooglado) 
  {
    tooltip.innerHTML = "logar";
  }
  else
  {
    tooltip.innerHTML = "Cadastrar"; 
  }
}

  toogle.classList.toggle("hidden");

switcher.onclick = function(){

  toogle.classList.toggle("hidden");

  this.style.display = "none";
  if (tooglado)
  { 
      Recovery.style.display="flex";
      toogle.style.transform= "none";
      tooglado=false;
      this.style.display = "inline-block";    
  } 
  else
  {
      
      Recovery.style.display="none";
      toogle.style.transform= "rotateY(180deg)";
      tooglado=true;
      this.style.display = "inline-block";  
        
  }
  
  toogleed(tooglado);
 
};



 btnRecovery.onclick = function(){

  if(!aberto){
    aberto = true;
    Recovery.style.breakBefore='.4s ease-in-out'; 
    count=99.9;
    while(count>=70){
      Recovery.style.transition='.4s ease-in-out'; 
      Recovery.style.transform='translateY('+count+'%)';
      Recovery.style.mozTransform= 'translateY('+count+'%)';

      count--; 
      console.log(count);
    }
  }else{
    aberto = false;
    count=99.9;
    while(count<=99.9){
      Recovery.style.transition='.4s ease-in-out'; 
      Recovery.style.transform+='translateY('+count+'%)';
      Recovery.style.mozTransform= 'translateY('+count+'%)';
      count++;
    }
  }
 }

    btnRecovery.onmouseover = function(){
    if(!aberto){
     Recovery.style.transition='.1s'; 
     Recovery.style.transform='translateY(97.5%)'; 
    }
  }

  btnRecovery.onmouseout = function(){
    if(!aberto){
    Recovery.style.transition='.1s'; 
    Recovery.style.transform='translateY(99.9%)'; 
    }
  }

  var width = window.innerWidth;

  if ( width <=720){
    
    Recovery.style.transition='.1s'; 
    Recovery.style.transform='translateY(97.5%)'; 

  }


  

  