function Sprite (x,y,width, height, name) {
    this.x = x;
    this.y = y;

    this.width = width;
    this.height = height;

    this.left = this.x;
    this.right = this.x + this.width;
    this.top = this.y;
    this.bottom = this.y + this.height;

    this.name = name;
    this.image = new Image();
    this.image.src = name;


    this.pulsedThisTurn = false
    this.pulsing = false;
    this.pulseDist = 5
}
 
Sprite.prototype.update = function() {
    var x = (Math.floor(Math.random() * 7) ) - 3
    var y =  (Math.floor(Math.random() * 7) ) - 3

   
    if(this.x + x < 0){
        x = x * -1
    }
    if(this.y + y < 0){
        y = y * -1
    }

    if(this.x + x > 186){
        x = x * -1
    }
    if(this.y + y > 186){
        y = y * -1
    }

    this.x+=x;
    this.y+=y;

    this.left = this.x;
    this.right = this.x + this.width;
    this.top = this.y;
    this.bottom = this.y + this.height;

    //console.log(x,y)
};
Sprite.prototype.draw = function(ctx){
    ctx.drawImage(this.image, this.x,this.y)
}