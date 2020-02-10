var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext("2d");
var headup = document.getElementById('head');
var headright = document.getElementById('headright');
var headdown = document.getElementById('headdown');
var bodyhoriz = document.getElementById('bodyhoriz');
var bodyvert = document.getElementById('bodyvert');
var bodynum = 2;
var start = false;
x = 10;
y = 10;
bodyX = x-70;
bodyY = y+5;
dir = 'down';
ctx.beginPath();
ctx.drawImage(headright, x, y);
ctx.drawImage(bodyhoriz, bodyX, bodyY);
function draw(){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.rect(0, 0, 5, canvas.height)
		head = checkdir();
		ctx.drawImage(head, x, y);
		for(i=0; i < bodynum;  i++) {
			num = i+1;
			if (dir == 'right' | dir=='left'){
				ctx.drawImage(bodyhoriz, bodyX, bodyY);
			}
			if (dir=='up' | dir == 'down'){
				ctx.drawImage(bodyvert, bodyX, bodyY);
			}
		ctx.closePath();
		}
}
function checkdir(){
	if (dir == 'left'){
		x -= 1;
		bodyX = x+62;
		bodyY = y+3.5;
		return headleft
	}
	if (dir == 'up'){
		y -= 1;
		bodyX = x+3.75;
		bodyY = y+62;
		return headup
	}
	if (dir == 'right'){
		x += 1;
		bodyX = x-70;
		bodyY = y+5;
		return headright
	}
	if (dir == 'down'){
		y+= 1;
		bodyX = x+5;
		bodyY = y-70;
		return headdown
	}
}
setInterval(draw, 5);
//keyup function
document.addEventListener('keyup', function(event){
		console.log(event.keyCode);
		if(event.keyCode == 37) {
			if (dir != 'left'){
				dir = 'left';
				x -= 20;
				console.log(dir);
			}
		}
		if(event.keyCode == 38) {
			if (dir != 'up'){
			dir = 'up';
			y -= 20;
			console.log(dir);
			}
		}
		if(event.keyCode == 39) {
			if (dir != 'right'){
			dir = 'right';
			x += 20;
			console.log(dir);
			}
		}
		if(event.keyCode == 40) {
			if (dir != 'down'){
			dir = 'down';
			y += 20;
			console.log(dir);
			}
		}
});

// TODO Add body arrays! It sounds complicated but I believe in you future Stephen! Remember to use x+i*2 e.t.c to not overcomplicate things.

// TODO Make turning look smoother, add corners

// TODO Add apples which randomly spawn.

// TODO Give points to player and enlarge snake when they collect apples

// TODO Register domain? REMEMBER TO CREDIT ARTISTS FOR ASSETS!