
var pic = document.getElementById("svg_id");

var clears = function(e) {
    while (pic.hasChildNodes()){
	pic.removeChild(pic.firstChild)
    }
}



var cbutton = document.getElementById("clear");
cbutton.addEventListener("click",clears);


var r = 1;
var d = 1;

var circle = function(cx,cy,rad){
    var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circ.setAttribute("cx",cx+"" );
    circ.setAttribute("cy",cy+"");
    circ.setAttribute("r",rad+"");
    circ.setAttribute("fill","black");
    circ.setAttribute("stroke","black");
    pic.appendChild(circ);
}
var expand = function(e){
    clears();
    if(r>=250 || r<=0){
	d=d*-1;
    }
    r=r+d;
    circle(250,250,r);
    
}

var intervalID;
var keepexpand = function(e){
    intervalID = setInterval(expand,10);
}
var expbutton=document.getElementById("expand");
expbutton.addEventListener("click",keepexpand);

var zawarudo = function(e){
    clearInterval(intervalID);
    r=1;
    d=1;
}

var stop = document.getElementById("stop");
stop.addEventListener("click",zawarudo);

var bx = 250;
var by = 250;
var xchange = 1;
var ychange= 1;
var bounce = function(){
    if (bx>= 270 || bx<=1){
	xchange= xchange*=-1;
    }
    if(by>= 499 || by<=1){
	ychange=ychange*-1;
    }
}
var dvd =function(e) {
    clears();
    bx = bx+ xchange;
    by=by+ychange;
    bounce();
    circle(bx,by,25);
}

var play = function(e) {
    intervalID = setInterval(dvd,10);
}
office.addEventListener("click", play);	

