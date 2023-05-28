class Square{
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }
    render() {
return `<svg version="1.1" width="320" height="320" xmlns="http://www.w3.org/2000/svg">
<rect x="80" y="60" width="160" height="160" fill="${this.color}"/>
<text x="160" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}
module.exports = Square;