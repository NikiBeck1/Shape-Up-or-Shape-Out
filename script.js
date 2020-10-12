const shapeContainer = document.getElementById('shape-container');
const rectangleButton = document.getElementById('rectangle-button');
const shapeNameDisplay = document.getElementById('shape-name-text');
const squareButton = document.getElementById('square-button');
const circleButton = document.getElementById('circle-button');
const triangleButton = document.getElementById('triangle-button');
const shapeInfoContainer = document.getElementById('shape-info');

// RECTANGLE //
class Rectangle {
    constructor(shape, height, width) {
        this.shape = shape;
        this.height = height;
        this.width = width;

        // div element
        this.divRectangle = document.createElement('div');
        this.divRectangle.className = 'newShape';
        this.divRectangle.style.height = '150px';
        this.divRectangle.style.width = '300px';
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
    let newRec = new Rectangle('Rectangle', `${document.getElementById('rectangle-height').value}`, `${document.getElementById('rectangle-width').value}`);
    newRec.display();
    shapeInfoContainer.style.borderColor = 'green';
})



// SQUARE //
class Square {
    constructor(shape, height, width) {
        this.shape = shape;
        this.height = height;
        this.width = width;

        // div element
        this.divSquare = document.createElement('div');
        this.divSquare.className = 'newShape';
        this.divSquare.style.height = '100px';
        this.divSquare.style.width = '100px';
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
    let newSqu = new Square('Square', `${document.getElementById('square-height').value}`, `${document.getElementById('square-width').value}`);
    newSqu.display();
    shapeInfoContainer.style.borderColor = 'red';
})




// CIRCLE //
class Circle {
    constructor(shape, height, width) {
        this.shape = shape;
        this.height = height;
        this.width = width;

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
        if (this.height) {
            document.getElementById('shape-height-text').innerHTML = this.height;
        }
        if (this.width) {
            document.getElementById('shape-width-text').innerHTML = this.width;
        }
    }

}
circleButton.addEventListener("click", () => {
    let newCir = new Circle('Circle', `${document.getElementById('circle-height').value}`, `${document.getElementById('circle-width').value}`);
    newCir.display();
    shapeInfoContainer.style.borderColor = 'purple';
})





// TRIANGLE //
class Triangle {
    constructor(shape, height, width) {
        this.shape = shape;
        this.height = height;
        this.width = width;

        // div element
        this.divTriangle = document.createElement('div');
        this.divTriangle.className = 'newShape';
        this.divTriangle.style.backgroundColor = ' ';
        this.divTriangle.style.position = 'absolute';
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
    let newTri = new Triangle('Triangle', `${document.getElementById('triangle-height').value}`, `${document.getElementById('triangle-width').value}`);
    shapeInfoContainer.style.borderColor = 'gold';
    newTri.display();
})


