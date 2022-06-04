



class Mushroom extends Grass {
    constructor(x, y){
        super(x, y);
    
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
    this.multiply++;
    var emptyCells = this.chooseCell(1);
    var newCell = random(emptyCells);

    if (newCell && this.multiply >= 16) {
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 5;

        var newMushroom = new Mushroom(newX, newY);
        mushroomArr.push(newMushroom);
        this.multiply = 0;
        for (var i in grassArr) {
            if (newX == grassArr[i].x && newY == grassArr[i].y) {
                grassArr.splice(i, 1);
                break;
            }
        }
    }
}
}




