var animatebutton = document.getElementById('animatebutton')
var count =1;


animatebutton.onclick = function ani() {
    document.getElementById('ghostimage').className = 'animate';
  }

var svgcode = document.getElementById('svgbutton');

svgcode.onclick = function showorhidesvgcode(){
    
    if(count%2==0){
        document.getElementById('svgcode').className =  'nonactivesvgcode';
        document.getElementById('svgimage').className = 'visiblesvgimage'
        count=count+1;
    }
    else if(document.getElementsByClassName('nonactivesvgcode')){
        document.getElementById('svgcode').className =  'activesvgcode';
        document.getElementById('svgimage').className = 'nosvgimage'
        count=count+1;
    }
        
    
}

//function for the first animation which begins raising the eyes and the eyebrows
var animation1 = document.getElementById('animation1');
animation1.onclick=function() {
    document.getElementById('eye1').beginElement();
    document.getElementById('eyebrow1').beginElement();
    document.getElementById('eyebrow13').beginElement();
    document.getElementById('eye2').beginElement();
    document.getElementById('eyebrow23').beginElement();
    document.getElementById('eyebrow2').beginElement();
    

  }

  

  //animation2 ghost dissapears and pops up on screen
  var animation2 = document.getElementById('animation2');
  animation2.onclick = function(){
      document.getElementById('flyingghostbody').beginElement();
      document.getElementById('flyingghost1').beginElement();
      document.getElementById('flyingghost2').beginElement();
      document.getElementById('flyingghost3').beginElement();
     // document.getElementById('flyingghost4').beginElement();
  }

  //animation 3 the ghost is hovering around the screen
  var animation3 = document.getElementById('animation3');
  animation3.onclick=function(){
    document.getElementById('ghostbodyan3').beginElement();
    document.getElementById('ghoan3stblackeye').beginElement();
    document.getElementById('ghostwhitewweyean3').beginElement();
    document.getElementById('ghosan3teyebrow').beginElement();
    document.getElementById('ghosteyebrow2an3').beginElement();
    document.getElementById('ghosteyebrow3an3').beginElement();
    document.getElementById('ghosteyebrow4an3').beginElement();
    document.getElementById('ghosteyebrow5an3').beginElement();
    document.getElementById('righteyean3').beginElement();
  }

  //animation 4 blinking ghost
  var animation4 = document.getElementById('animation4');
animation4.onclick = function(){
    document.getElementById('blinkclose').beginElement();
    document.getElementById('blinkclose1').beginElement();
}

//animation5 and animation6 zoom in and zoom out 
var animation5 = document.getElementById('animation5');

animation5.onclick = function(){
    //reference, circle svg https://www.w3schools.com/graphics/svg_circle.asp
    //reference, svg text https://www.w3schools.com/graphics/svg_text.asp
    document.getElementById('ghost1').innerHTML+=   "<circle  cx='50' cy='60' r='3' stroke='black' stroke-width='3' fill='black' />"+"<text x='45' y='35' fill='red' transform='rotate(20 90,40)' >BOO!</text>";
    
}

var animation6 = document.getElementById('animation6');

animation6.onclick = function(){
    document.getElementById('ghost1').className="ghosthover1";
}
