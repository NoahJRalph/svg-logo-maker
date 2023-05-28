class Triangle{
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }
    render() {
return `<svg version="1.1" width="320" height="320" xmlns="http://www.w3.org/2000/svg">
<polygon points="160, 40 260, 200 60, 200" fill="${this.color}"/>
<text x="163" y="160" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}
module.exports = Triangle;