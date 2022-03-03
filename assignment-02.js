/*<!--I am using gitpod which is a linux server to develop this app.-->
<!--you can find all my code for this project in this repository https://github.com/katiedoherty/Ghost-SVG-->*/

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

//activates hover animation, animation 6
var animation6 = document.getElementById('animation6');

animation6.onclick = function(){
       document.getElementById('ghost1').classList.add("ghosthover1");
       document.getElementById('ghost1').innerHTML += "<text x='0' y='20' fill='red'  >hover over me</text>"
}

//clears all animation and reverts back to normal svg
var clearall = document.getElementById('clearall');

clearall.onclick = function(){
    document.getElementById('svg').innerHTML="     <rect	 id='background'	 width='100'	 height='120'	 style='fill:black;	 stroke-width:1;	 stroke:black'/>"+
   " <g	class='nonactivesvg' id='ghost1'	 transform='rotate(0),	translate(0,0),	scale	(1.0)'>"+
"<path	 id='body'	 d='M	 10	 120	 A	 2.0	 5.8,	 0	 0	 1, 90	 120'	 style='stroke:white;	 strokewidth:0.5;	fill:white'>"+
              '<animate id="flyingghostbody" attributeName="d" attributeType="XML" from="M	 0	 120	 A	 2.0	 5.8,	 2.0	 5.8	 1, 90	 120" to="M	 10	 120	 A	 2.0	 5.8,	 0	 0	 1, 90	 120" begin="" dur="4s" ></animate>'+
              
              '<animateMotion id ="ghostbodyan3" dur="4s" repeatCount="2"path="M20,70 C20,-50 180,150 180,50 C180-50 20,0 0,20 z" begin=""/> </path>'+
              '<g	id="eyes"	transform="rotate(0,50,40),	translate(0,0)">'+
            '<g	id="eye-l"	transform="rotate(0,50,40),	translate(0,0)">'+
          '<ellipse	 id="eye-l-ball"	 cx="45"	 cy="40"	 rx="4"	 ry="6"	 style="stroke:black;	fill:black;">'+
           
            '<animateMotion id ="ghoan3stblackeye"  dur="4s" repeatCount="2"path="M20,70 C20,-50 180,150 180,50 C180-50 20,0 0,20 z" begin=""/>'+

        '<animate id="blinkclose" attributeName="ry" attributeType="XML" from="6"  to="0" begin ="" dur=".3s"  />'+
         '<animate id="blinkopen" attributeName="ry" attributeType="XML"from="0"  to="6" begin="blinkclose.end"  dur=".3s"  /> </ellipse>'+
      '<rect	transform="rotate(16,46,35)"	x="40"	y="33"	width="11"	height="6"	fill="white"	visibility="hidden"	/>'+
       ' <circle	id="eye-l-pupil"	cx="45"	cy="40"	r="0.5"	style="stroke:white;	fill:white">'+
         ' <animate id="eye1" attributeName="cy" attributeType="XML"from="40"  to="34"begin=""  dur="5s"  />'+
         '<animate id="eye12" attributeName="cy" attributeType="XML" from="34"  to="40" begin="eye1.end"  dur="5s"  />'+


          '<animateMotion id ="ghostwhitewweyean3" dur="4s" repeatCount="2"path="M20,70 C20,-50 180,150 180,50 C180-50 20,0 0,20 z"begin="" /></circle>'+

      '<g id="eye-l-brow">'+
        
      '<path	 d="M	 41	 32	 Q	 45	 27	 49	 32"	 stroke="black"	 stroke-width="0.5"	fill="transparent">'+
      '<animate id="eyebrow1" attributeName="d" attributeType="XML"'+
         ' from="M	 41	 32	 Q	 45	 27	 49	 32"  to="M	 41	 32	 Q	 45	 17	 49	 32"'+
         ' begin="" dur="5s" />'+
      '<animate id="eyebrow12" attributeName="d" attributeType="XML"'+
          'from="M	 41	 32	 Q	 45	 17	 49	 32"  to="M	 41	 32	 Q	 45	 27	 49	 32"'+
         ' begin="eyebrow1.end" dur="5s"  />'+

          '<animateMotion id ="ghosan3teyebrow" dur="4s" repeatCount="2"'+
            'path="M20,70 C20,-50 180,150 180,50 C180-50 20,0 0,20 z" begin="" />'+
      '</path>'+
      '<path	 d="M	 41	 32	 Q	 45	 26	 49	 32"	 stroke="black"	 stroke-width="0.5"	'+
      'fill="transparent">'+
     
      '<animate id="eyebrow13" attributeName="d" attributeType="XML"'+
          'from="M	 41	 32	 Q	 45	 26	 49	 32"  to="M	 41	 32	 Q	 45	 16	 49	 32"'+
          'begin="" dur="5s"  />'+
      '<animate id="eyebrow14" attributeName="d" attributeType="XML"'+
         ' from="M	 41	 32	 Q	 45	 16	 49	 32"  to="M	 41	 32	 Q	 45	 26	 49	 32"'+
         ' begin="eyebrow13.end" dur="5s"  />'+

          '<animateMotion id ="ghosteyebrow2an3" dur="4s" repeatCount="2"'+
            'path="M20,70 C20,-50 180,150 180,50 C180-50 20,0 0,20 z" begin=""/>'+
      '</path>'+
      '</g>'+
            '</g>'+
            '<g	id="eye-r"	transform="rotate(0,50,40),	translate(0,0)">'+
      '<ellipse	 id="eye-r-ball"	 cx="55"	 cy="40"	 rx="4"	 ry="6"	 style="stroke:black;'+	
    'fill:black">'+
    
    '<animateMotion id=righteyean3 dur="4s" repeatCount="2"'+
    'path="M20,70 C20,-50 180,150 180,50 C180-50 20,0 0,20 z" begin=""/>'+

    '<animate id="blinkclose1" attributeName="ry" attributeType="XML"'+
          'from="6"  to="0" '+
           'begin ="" dur=".3s"  />'+
         '<animate id="blinkopen" attributeName="ry" attributeType="XML"'+
          'from="0"  to="6"'+
          'begin="blinkclose1.end"  dur=".3s"  />'+
    '</ellipse>'+
      '<rect	 transform="rotate(-16,56,35)"	 x="49"	 y="32"	 width="11"	 height="6"'+	
    'fill="white"	visibility="hidden"	/>'+
    '<circle	id="eye-r-pupil"	cx="55"	cy="40"	r="0.5"	style="stroke:white;	fill:white">'+
      
      '<animate id="eye2" attributeName="cy" attributeType="XML"'+
          'from="40"  to="34"'+
          'begin="" dur="5s" />'+
        ' <animate id="eye22" attributeName="cy" attributeType="XML"'+
          'from="34"  to="40"'+
          'begin="eye2.end" dur="5s" />'+

          '<animateMotion id ="ghosteyebrow3an3" dur="4s" repeatCount="2"'+
           ' path="M20,70 C20,-50 180,150 180,50 C180-50 20,0 0,20 z" begin="" />'+   
      '</circle>'+

      '</g>'+
            '<g	id="eye-l-brow">'+
    '<path	 d="M	 51	 32	 Q	 55	 27	 59	 32"	 stroke="black"	 stroke-width="0.5"'+	
    'fill="transparent">'+
    
    '<animate id="eyebrow2" attributeName="d" attributeType="XML"'+
          'from="M	 51	 32	 Q	 55	 27	 59	 32"  to="M	 51	 32	 Q	 55	 17	 59	 32"'+
          'begin="" dur="5s" />'+
     ' <animate id="eyebrow22" attributeName="d" attributeType="XML"'+
         ' from="M	 51	 32	 Q	 55	 17	 59	 32"  to="M	 51	 32	 Q	 55	 27	 59	 32"'+
          'begin="eyebrow2.end" dur="5s"/>'+
          
          '<animateMotion dur="4s" id ="ghosteyebrow4an3" repeatCount="2"'+
            'path="M20,70 C20,-50 180,150 180,50 C180-50 20,0 0,20 z"begin="" />'+
      '</path>'+
    '<path	 d="M	 51	 32	 Q	 55	 26	 59	 32"	 stroke="black"	 stroke-width="0.5"	'+
    'fill="transparent">'+
    '<animate id="eyebrow23" attributeName="d" attributeType="XML"'+
          'from="M	 51	 32	 Q	 55	 26	 59	 32"  to="M	 51	 32	 Q	 55	 16	 59	 32"'+
         ' begin="" dur="5s" />'+
      '<animate id="eyebrow24" attributeName="d" attributeType="XML"'+
         ' from="M	 51	 32	 Q	 55	 16	 59	 32"  to="M	 51	 32	 Q	 55	 26	 59	 32"'+
          'begin="eyebrow23.end" dur="5s" />'+
         
          '<animateMotion id ="ghosteyebrow5an3"  dur="4s" repeatCount="2"'+
            'path="M20,70 C20,-50 180,150 180,50 C180-50 20,0 0,20 z" begin="" />'+
      '</path>'+

      
            '</g>'+
        '</g>'+
    '</g>'
}