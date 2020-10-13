const shapeContainer = document.getElementById('shape-container');
const rectangleButton = document.getElementById('rectangle-button');
const shapeNameDisplay = document.getElementById('shape-name-text');
const squareButton = document.getElementById('square-button');
const circleButton = document.getElementById('circle-button');
const triangleButton = document.getElementById('triangle-button');
const shapeInfoContainer = document.getElementById('shape-info');
const recHeight = document.getElementById('rectangle-height');
const recWidth = document.getElementById('rectangle-width');
const squWidth = document.getElementById('square-width');



// RECTANGLE //
class Rectangle {
    constructor(shape, height, width) {
        this.shape = shape;
        this.height = height;
        this.width = width;
        
        // div element
        
        let x = Math.floor(Math.random() * 650) + 1;
        let y = Math.floor(Math.random() * 650) + 1;
        this.divRectangle = document.createElement('div');
        this.divRectangle.className = 'newShape';
        this.divRectangle.style.height = `${this.height}px`;
        this.divRectangle.style.width = `${this.width}px`;
        this.divRectangle.style.position = 'absolute';
        this.divRectangle.style.left = `${x}px`;
        this.divRectangle.style.top = `${y}px`;
        shapeContainer.appendChild(this.divRectangle);
        this.divRectangle.style.backgroundColor = 'green';
    }

    display() {
        if (this.shape) {
            document.getElementById('shape-name-text').innerHTML = this.shape;
        }
        if (this.height) {
            document.getElementById('shape-height-text').innerHTML = this.height;
        }
        if (this.width) {
            document.getElementById('shape-width-text').innerHTML = this.width;
        }
    }

}
rectangleButton.addEventListener("click", () => {
    let newRec = new Rectangle('Rectangle', recHeight.value, recWidth.value);
    newRec.display();
    shapeContainer.style.borderColor = 'green';
    shapeInfoContainer.style.borderColor = 'green';
})



// SQUARE //
class Square {
    constructor(shape, width) {
        this.shape = shape;
        this.width = width;

        // div element
        this.divSquare = document.createElement('div');
        this.divSquare.className = 'newShape';
        this.divSquare.style.height = '100px';
        this.divSquare.style.width = '100px';
        this.divSquare.style.position = 'absolute';
        // this.divSquare.style.top = `${Math.floor(Math.random() * 650) + 1} px`;
        // this.divSquare.style.left = `${Math.floor(Math.random() * 650) + 1} px`;
        shapeContainer.appendChild(this.divSquare);
        this.divSquare.style.backgroundColor = 'red';
    }

    display() {
        if (this.shape) {
            document.getElementById('shape-name-text').innerHTML = this.shape;
        }
        if (this.height) {
            document.getElementById('shape-height-text').innerHTML = this.height;
        }
        if (this.width) {
            document.getElementById('shape-width-text').innerHTML = this.width;
        }
    }

}
squareButton.addEventListener("click", () => {
    let newSqu = new Square('Square', squWidth.value);
    newSqu.display();
    shapeContainer.style.borderColor = 'red';
    shapeInfoContainer.style.borderColor = 'red';
})




// CIRCLE //
class Circle {
    constructor(shape, radius) {
        this.shape = shape;
        this.radius = radius;

        // div element
        this.divCircle = document.createElement('div');
        this.divCircle.className = 'newShape';
        this.divCircle.style.height = '100px';
        this.divCircle.style.width = '100px';
        this.divCircle.style.borderRadius = '100px';
        shapeContainer.appendChild(this.divCircle);
        this.divCircle.style.backgroundColor = 'purple';
    }

    display() {
        if (this.shape) {
            document.getElementById('shape-name-text').innerHTML = this.shape;
        }
        if (this.radius) {
            document.getElementById('shape-radius-text').innerHTML = this.radius;
        }
    }

}
circleButton.addEventListener("click", () => {
    let newCir = new Circle('Circle', `${document.getElementById('circle-width').value}`);
    newCir.display();
    shapeContainer.style.borderColor = 'purple';
    shapeInfoContainer.style.borderColor = 'purple';
})





// TRIANGLE //
class Triangle {
    constructor(shape, height) {
        this.shape = shape;
        this.height = height;

        // div element
        this.divTriangle = document.createElement('div');
        this.divTriangle.className = 'newShape';
        this.divTriangle.style.backgroundColor = ' ';
        this.divTriangle.style.height = '100px';
        this.divTriangle.style.width = '100px';
        this.divTriangle.style.borderLeft = '60px solid transparent';
        this.divTriangle.style.borderRight = '60px solid transparent';
        this.divTriangle.style.borderBottom = '100px solid gold';
        this.divTriangle.style.top = `${Math.floor(Math.random() * 650) + 1} px`;
        this.divTriangle.style.right = `${Math.floor(Math.random() * 650) + 1} px`;
        
        shapeContainer.appendChild(this.divTriangle);
    }

    display() {
        if (this.shape) {
            document.getElementById('shape-name-text').innerHTML = this.shape;
        }
        if (this.height) {
            document.getElementById('shape-height-text').innerHTML = this.height;
        }
        if (this.width) {
            document.getElementById('shape-width-text').innerHTML = this.width;
        }
    }

}
triangleButton.addEventListener("click", () => {
    let newTri = new Triangle('Triangle', `${document.getElementById('triangle-width').value}`);
    shapeContainer.style.borderColor = 'gold';
    shapeInfoContainer.style.borderColor = 'gold';
    newTri.display();
})


