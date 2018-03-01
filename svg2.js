
var pic = document.getElementById("svg_id");

var clears = function(e) {
    while (c.hasChildNodes()){
	c.removeChild(c.firstChild)
    }
    r=0;
    d=1;
}



var cbutton = document.getElementByID("clear");
cbutton.addEventListener("click",clears);


var r = 0;
var d = 1;

var circle = function(rad){
    clears();
    var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    circ.setAttribute("cx",pic.width/2 +"");
    circ.setAttribute("cy", pic.width/2 +"");
    circ.setAttribute("r",rad+"");
    circ.setAttribute("fill","black");
    circ.setAttribute("stroke","black");
    pic.appendChild(circ);
}
var expand = function(e){
    clears();
    if(r>=250 || r<0){
	d=d*-1;
    }
    r=r+direction;
    circle(0,0,r);
    
}

var intervalID;
var keepexpand = function(e){
    intervalID = setInterval(expand,50);
}
var expbutton=document.getElementByID("expand");
expbutton.addEventListener("click",keepexpand);

var zawarudo = function(e){
    clearInterval(intervalID);
}

var stop = document.getElementById("stop");
stop.addEventListener("click",zawurdo);

'''var dvd =function(e) {
    var x = 250;
    var y = 250;
    var xchange = 1;
    var ychange= 1;
    var ball = function(){
	clears();
	ctx.beginPath();
	ctx.arc(x,y,25, 0, 2*Math.PI);
	ctx.stroke();
    }
    var bounce = function(){
	if (x>= 270 || x<=1){
	    xchange= xchange*=-1;
	}
	if(y>= 499 || y<=1){
	    ychange=ychange*-1;
	}
    }
    window.cancelAnimationFrame(requestID);
    
    var draw = function(){
	x = x+ xchange;
	y=y+ychange;
	bounce();
	ball();
	requestID = window.requestAnimationFrame(draw);
	console.log(requestID);
    }
    draw();
}

var play = function(e) {
    window.requestAnimationFrame(dvd);
}
office.addEventListener("click", play);	
'''
