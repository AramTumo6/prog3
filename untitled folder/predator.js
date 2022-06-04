



class Predator extends Grass {
    constructor(x, y){
        super(x, y);
        this.energy = 32;
    }
   getNewCoordinates() {
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
   }
   chooseCell(character) {
       this.getNewCoordinates();
       return super.chooseCell(character);
   }
   mul() {
    var emptyCells = this.chooseCell(0);
    var newCell = random(emptyCells);

    if (newCell) {
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 3;

        var newPredator = new Predator(newX, newY);
        predatorArr.push(newPredator);
        this.energy = 16
    }
}

move() {
    this.energy--
    var emptyCells = this.chooseCell(0);
    var newCell = random(emptyCells);
    if(newCell && this.energy >= 0) {
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
        matrix[this.y][this.x] = 0
        this.x = newX
        this.y = newY
    } else {
        this.die()
    }
}

eat1() {
    var emptyCells = this.chooseCell(4);
    var newCell = random(emptyCells);
    if(newCell) {
        this.energy++
        this.energy++
        this.energy++
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
        matrix[this.y][this.x] = 0
        this.x = newX
        this.y = newY
        for (var i in virusArr) {
            if (newX == virusArr[i].x && newY == virusArr[i].y) {
                virusArr.splice(i, 1);
                break;
            }
        }
        
        if(this.energy >= 40) {
            this.mul()
        }
    }else {
        this.move()
    }

}



eat() {
    var emptyCells = this.chooseCell(2);
    var newCell = random(emptyCells);
    if(newCell) {
        this.energy++
        this.energy++
        this.energy++
        this.energy++
        this.energy++
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
        matrix[this.y][this.x] = 0
        this.x = newX
        this.y = newY
        for (var i in grassEaterArr) {
            if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
        
        if(this.energy >= 33) {
            this.mul()
        }
    }else {
        this.eat1()
    }

}
die() {
    matrix[this.y][this.x] = 0
    for (var i in predatorArr) {
        if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
            predatorArr.splice(i, 1);
            break;
        }
    }
}
}








