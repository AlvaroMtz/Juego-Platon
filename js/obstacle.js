function Obstacles (x, y, width, height, color){
    this.x = x,
    this.y = y,
    this.width = width,
    this.height = height,
    this.color = color;
}

Obstacles.prototype.draw = function(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    
}