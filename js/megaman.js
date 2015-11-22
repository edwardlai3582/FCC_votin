function megamanscript(){

var background=document.getElementById("ground");
var city=document.getElementById("city");
// speed in milliseconds
var bscrollSpeed = 5;
var cscrollSpeed = 20;    
// set the default position
var bcurrent = 0;
var ccurrent = 0;    

function bbgscroll() {
   // 1 pixel row at a time
  console.log("b movin");    
   bcurrent -= 1;
   background.style.backgroundPosition=bcurrent + "px 0";    
}    

function cbgscroll() {
   // 1 pixel row at a time
  console.log("c movin");    
   ccurrent -= 1;
   city.style.backgroundPosition=ccurrent + "px 0";    
}      
    
 var bid = setInterval(bbgscroll,bscrollSpeed);   
 var cid = setInterval(cbgscroll,cscrollSpeed);    
    
};

//window.onload = megamanscript;


	
		 