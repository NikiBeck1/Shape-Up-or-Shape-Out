let colors = ['#DDD5D0', '#CFC0BD', '#B8B8AA', '#7F9183', '#586F6B', 'D4E4BC'];

const rectangleButton = document.getElementById('rectangle-button');
const squareButton = document.getElementById('square-button');
const circleButton = document.getElementById('circle-button');
const triangleButton = document.getElementById('triangle-button');
const shapeContainer = document.getElementById('shape-container');

const rectangleHeight = document.getElementById('rectangle-height');
const rectangleWidth = document.getElementById('rectangle-width');
const randomNum = Math.floor((Math.random() * 5));



// Input Buttons

squareButton.addEventListener('click', () => {
    alert('Square button was clicked!');
})

circleButton.addEventListener('click', () => {
    alert('Circle button was clicked!');
})

triangleButton.addEventListener('click', () => {
    alert('Triangle button was clicked!');
})

class Shape {
    constructor() {

        
        // Creating the div elements
        this.div = document.createElement('div');
        this.div.className = 'newShape';
        this.div.style.backgroundColor = colors[randomNum];
        this.div.style.height = rectangleHeight.value;
        this.div.style.width = rectangleWidth.value;
        shapeContainer.appendChild(this.div);
        
    }

}

rectangleButton.addEventListener("click", () => {
    new Shape();
})







    // class Rectangle extends Shape {
        //     constructor(shape, height, width, area) {
        //         super(shape, height, width, area);
        //     }

        //     aboutTruck() {
        //         console.log(`This is a ${this.type}, it is made by ${this.manufacturer} and it has ${this.numberOfWheels} wheels, ${this.numberOfDoors} doors, and a truck bed.`)
        //     }

        // }