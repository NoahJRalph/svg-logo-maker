// Required Packages
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const Circle = require(`./lib/circle.js`)
const Square = require(`./lib/square.js`)
const Triangle = require(`./lib/triangle.js`)
// Content
inquirer.prompt([
    {
        type: `list`,
        name: `shape`,
        message: `What shape do you want your logo to take?`,
        choices: [`circle`,`square`,`triangle`],
        default: `circle`,
    },
    {
        type: `input`,
        name: `color`,
        message: `What color do you want your logo background? Insert a common HTML color name or hex value starting with "#".`,
        default: `red`,
    },
    {
        type: `list`,
        name: `textColor`,
        message: `What color do you want your main logo text?`,
        choices: [`white`,`black`],
        default: `white`,
    },
    {
        type: `input`,
        name: `text`,
        message: `What 3 characters do you want for your main logo text?`,
        // TODO: Use validate to check string length
    }
])
.then((promptInput) => {
    if(promptInput.shape == `circle`) {
        const circleSVG = new Circle(promptInput.color.toLowerCase(), promptInput.textColor, promptInput.text.toUpperCase());
        fs.writeFile(`logo.svg`, circleSVG.render(), (error) => error ? console.log(error) : console.log(`Generated logo.svg!`));
    }
    else if (promptInput.shape == `square`) {
        const squareSVG = new Square(promptInput.color.toLowerCase(), promptInput.textColor, promptInput.text.toUpperCase());
        fs.writeFile(`logo.svg`, squareSVG.render(), (error) => error ? console.log(error) : console.log(`Generated logo.svg!`));
    }
    else if (promptInput.shape == `triangle`) {
        const triangleSVG = new Triangle(promptInput.color.toLowerCase(), promptInput.textColor, promptInput.text.toUpperCase());
        fs.writeFile(`logo.svg`, triangleSVG.render(), (error) => error ? console.log(error) : console.log(`Generated logo.svg!`));
    }
});