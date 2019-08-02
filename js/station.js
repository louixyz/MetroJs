function Station(id) {
    this.id = id;
    this.name = 'name';
    this.x = 0;
    this.y = 0;
    this.l = 40;
    this.h = 20;
    this.w = 20;
    this.t = 1000;

}

Station.prototype.draw = function (context) {
    context.save();
    context.strokeStyle = '#ff0000';
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.x + this.l, this.y);
    context.lineTo(this.x + this.l, this.y + this.h);
    context.lineTo(this.x, this.y + this.h);
    context.lineTo(this.x, this.y);
    context.closePath();
    context.stroke();
    context.restore();

};

