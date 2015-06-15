var canvasWidth = 800;
var canvasHeight = 600;
$('#gameCanvas').attr('width',canvasWidth);
$('#gameCanvas').attr('height',canvasHeight);

var canvas = $('#gameCanvas')[0].getContext('2d');

var image = new Image();
image.src ="http://3.bp.blogspot.com/-cg1jtrxaZ8Y/Ufl5SmFUVaI/AAAAAAAAAzY/KBxNVcMmOB0/s1600/F5S4.png";

var playerX = (canvasWidth/2) - (image.width / 2);
var playerY = (canvasHeight/2)  - (image.height / 2);

var FPS = 30;
setInterval(function() {
	update();  
	draw();}, 1000/FPS);

function update(){
	
}

function draw(){
	canvas.strokeRect(0,0,canvasWidth, canvasHeight);
	canvas.drawImage(image, playerX, playerY);
}






