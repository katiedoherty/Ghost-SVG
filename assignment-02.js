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

  var endButton =document.getElementById('endButton');

  endButton.onclick = function(){
      document.getElementById('eye1').endElement();
      document.getElementById('eyebrow1').endElement();
      document.getElementById('eyebrow13').endElement();
      document.getElementById('eye2').endElement();
      document.getElementById('eyebrow23').endElement();
      document.getElementById('eyebrow2').endElement();
     
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

