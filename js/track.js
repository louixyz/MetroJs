function Track(x, y) {
    if (x === undefined) {
        this.x = 0;
    } else {
        this.x = x;
    }
    if (y === undefined) {
        this.y = 100;
    } else {
        this.y = y;
    }

    this.w = 10;

}

Track.prototype.draw = function (context, canvas) {
    context.save();
    context.strokeStyle = '#0000ff';
    context.moveTo(this.x, this.y);
    context.lineTo(this.x + canvas.width, this.y);
    context.moveTo(this.x, this.y + this.w);
    context.lineTo(this.x + canvas.width, this.y + this.w);
    context.stroke();

    context.restore();

};