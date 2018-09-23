let plats = []
let jumper
let score = 0
let scoreBis = false
let highscore = 0
let min = 100
let max = 150
let over = false

function setup(){
	createCanvas(600, 700)
	plats.push(new Platform())
	frameRate(120)
	jumper = new Jumper(plats[0].x + (plats[0].len / 2) - 10, plats[0].y)
}

function draw(){
	background(220)
	if(score % 10 == 0 && scoreBis == true){
		min -= 4
		max -= 4
		if(min < 20)
			min = 20
		if(max < min)
			max = min + 10
		scoreBis = false
		console.log("Shrink")
	}
	for(let i = 0; i < plats.length; i++){
		if(plats[i].y > height){
			plats.splice(i, 1)
		}
		plats[i].update()
		plats[i].show()
		if(plats[i].collision(jumper) && jumper.isFalling){
			jumper.velocity = -15
			score++
			scoreBis = true
		}
	}

	spawn()

	jumper.update()
	jumper.show()
}

function spawn(){
	let highest = plats[plats.length - 1].y
	if(highest > random(1, 5) * 150){
		plats.push(new Platform())
	}
}

function gameOver(){
	over = true
	noLoop()
	textSize(45)
	strokeWeight(5)
	stroke(255)
	textStyle(BOLD)
	textAlign(CENTER)
	text("Game Over", width / 2, height / 3)
	strokeWeight(1)
	textStyle(NORMAL)
	textSize(30)
	text("Score: " + score, width / 2, height / 3 + 40)
	if(score > highscore)
		highscore = score
	text("Highscore: " + highscore, width / 2, height / 3 + 80)
	textSize(20)
	text("Press any key to restart", width / 2, height / 3 + 200)
}

function keyPressed(){
	if(over == true){
		console.log("Restart")
		over = false
		restart()
	}
}

function restart(){
	plats.splice(0, plats.length)
	plats.push(new Platform())
	jumper = new Jumper(plats[0].x + (plats[0].len / 2) - 10, plats[0].y)
	score = 0
	scoreBis = false
	min = 100
	max = 150
	loop()
}
