class Platform{

	constructor(){
		this.len = random(min, max)
		this.x = random(0, width - this.len)
		this.y = -20
		this.speed = 3.5
	}

	update(){
		this.y += this.speed
	}

	show(){
		noStroke()
		fill(50)
		rect(this.x, this.y, this.len, 20)
	}

	collision(jumper){
		if(jumper.x + jumper.size / 2 < this.x + this.len && jumper.x + jumper.size / 2 > this.x && jumper.y < this.y + 20 && jumper.y > this.y){
			return true
		}
		return false
	}
}