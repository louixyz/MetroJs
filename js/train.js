function Train(x, y) {
    this.ready = false;
    if (x === undefined) {
        this.x = 0;
    } else {
        this.x = x;
    }
    if (y === undefined) {
        this.y = 0
    } else {
        this.y = y;
    }
    this.len = 20;
    this.wid = 10;
    this.vx = 0;
    this.vy = 0;
    this.num = 100;
    this.pullin = 0;
    this.t = 2;

}

Train.prototype.draw = function (context) {
    context.save();
    context.lineWidth = 1;
    context.strokeStyle = '#000000';
    context.fillStyle = '#eeff00';
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.x + this.len, this.y + 0);
    context.lineTo(this.x + this.len, this.y + this.wid);
    context.lineTo(this.x + 0, this.y + this.wid);
    context.closePath();
    context.fill();
    context.stroke();
    context.font = this.font;
    context.strokeText(this.num, this.x, this.y);
    context.restore();
};

Train.prototype.move = function (context, direction) {
    context.save();
    if (this.pullin === 0) {
        if (direction === undefined) {
            this.vx = 1;
            this.vy = 0;
        }
    } else if (this.pullin === 1) {
        this.vx = 0;
        this.vy = 0;
    }

    this.x += this.vx;
    this.y += this.vy;
    context.translate(this.x, this.y);
    context.restore();
};

Train.prototype.park = function (context, stations) {
    context.save();
    for (let i = 0; i < stations.length; i++) {
        if (this.x === stations[i].x && this.y === stations[i].y + stations[i].h) {
            console.log('pullIn');
            this.pullin = 1;
            var that = this;
            window.setTimeout(function () {
                console.log(that);
                that.vx = 1;
                that.pullin = 0;
            }, stations[i].t);
            this.x += 1;

        }

    }

    context.restore();

};
