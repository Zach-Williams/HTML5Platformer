var Player = function () 
{
    this.image = document.createElement("img");
    //this.x = canvas.width / 2;
    //this.y = canvas.height / 2;
    this.position = new Vector2();
    this.position.set(canvas.width / 2,canvas.height / 2);
    this.velocity = new Vector2();
    this.velocity.set(0,0);
    this.offset = new Vector2();
    this.offset.set(-55,-87);

    this.falling = true;
    this.jumping = false;

    this.width = 159;
    this.height = 163;
    this.image.src = "hero.png";
}

Player.prototype.update = function (deltaTime) 
{
    this.position.y = Math.floor(this.position.y + (deltaTime * this.velocity.y));
    this.position.x = Math.floor(this.position.y + (deltaTime * this.velocity.x));

    var tx = pixelToTile(this.position.x);
    var ty = pixelToTile(this.position.y);
    var nx = (this.position.x % TILE);
    var ny = (this.position.y % TILE);

    var cell = cellAtTileCoord(LAYER_PLATFORMS,tx,ty);
    var cellright = cellAtTileCoord(LAYER_PLATFORMS,tx + 1,ty);
    var celldown = cellAtTileCoord(LAYER_PLATFORMS,tx,ty + 1);
    var celldiag = cellAtTileCoord(LAYER_PLATFORMS,tx + 1,ty + 1);

    //old spinner updated (dont really need anymore)
    /*if (typeof (this.rotation) == "undefined")
        this.rotation = 0; // hang on, where did this variable come from!
    if(keyboard.isKeyDown(keyboard.KEY_SPACE))
    {
        this.rotation -= deltaTime;
    }
    else
    {
        this.rotation += deltaTime;        
    }*/
}

Player.prototype.draw = function () 
{
    context.save();
        context.translate(this.position.x, this.position.y);
        context.rotate(this.rotation);
        context.drawImage(this.image, -this.width / 2, -this.height / 2);
    context.restore();
}