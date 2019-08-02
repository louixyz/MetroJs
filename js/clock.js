function Clock() {
    this.l = 50;
    this.h = 50;
    this.font = "30px Calibri";
    this.fillStyle = "#bb847d";
    this.textAlign = "center";
    this.textBaseline = "middle";
    this.strokeStyle = "#000000";
    this.lineWidth = 11;
}

Clock.prototype.draw = function (context, canvas, m, s) {
    context.save();
    context.font = this.font;
    context.fillStyle = this.fillStyle;
    context.textAlign = this.textAlign;
    context.textBaseline = this.textBaseline;
    context.strokeStyle = this.strokeStyle;
    context.lineWidth = this.lineWidth;
    // context.fillRect(0, canvas.height - this.h, this.l, this.h);
    // context.stroke();
    context.fillText(m + "m", this.l, canvas.height - 30);
    context.fillText(s + "s", this.l * 2, canvas.height - 30);
    context.restore();

};