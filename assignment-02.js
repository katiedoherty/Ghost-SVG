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


