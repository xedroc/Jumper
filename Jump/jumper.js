class Jumper{

	constructor(x, y){
		this.x = x
		this.y = y
		this.velocity = 0
		this.gravity = 0.5
		this.size = 20
		this.isFalling = true
	}

	update(){
		this.velocity += this.gravity
		this.y += this.velocity
		if(this.x > width + this.size){
			this.x = 0
		}else if(this.x < 0){
			this.x = width
		}
		if(this.velocity > 0){
			this.isFalling = true
		}else{
			this.isFalling = false
		}
		if(jumper.y > height){
			gameOver()
		}
		this.move()
	}

	show(){
		noStroke()
		fill(0, 0 ,255)
		rect(this.x, this.y, this.size, -this.size)
	}

	jump(){
		this.velocity -= 10
	}

	move(){
		if(keyIsDown(LEFT_ARROW)){
			this.x += -7
		}else if(keyIsDown(RIGHT_ARROW)){
			this.x += 7
		}
	}
}