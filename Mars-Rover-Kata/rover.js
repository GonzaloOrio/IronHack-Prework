
var myRover = {
  position: [],
  direction: 'N',
};

var roverClone = {
  position: [],
  direction: 'S',
};

var grid = {
  dimensions: [],
  obstaclesPosition: [],
};

console.log("-----------------------------------------------------------------------");
console.log("WELLCOME TO MARS!!");
console.log("-----------------------------------------------------------------------");
console.log("These are some instructions to have a good work:" );
console.log("--");
console.log("Create a grid with the function 'gridInit(xSquares,ySquares);'");
console.log(" > You can create the grid with the number of cells you want");
console.log("--");
console.log("Create a rover or rovers with the function 'roverInit(xSquares,ySquares,rover);'");
console.log(" > You can create two rovers with the names 'myRover' and 'roverClone'");
console.log("--");
console.log("If you want, you can create some obstacles with the function 'setObstacles(numObstacles);'");
console.log(" > This obstacles will be generated in random positions");
console.log("--");
console.log("And you can move the rovers with the function 'move(movements,rover);'");
console.log(" > You should indicate the movements for example just like that:'fflblffrff' (in quotes)");
console.log("-----------------------------------------------------------------------");
console.log("ENJOY THE TRAVEL!!");
console.log("-----------------------------------------------------------------------");

function gridInit(xSquares, ySquares){
  if (grid.dimensions > 0){
    console.log("Ooops! The grid is already created");
  }else if (xSquares > 0 && ySquares > 0) {
    for(var i=0; i<xSquares; i++) {
      grid.dimensions[i] = [];
      for(var j=0; j<ySquares; j++) {
        grid.dimensions[i][j] = [i,j];
      }
    }
    console.log("Grid Created!");
  }else if (xSquares <= 0 || ySquares <= 0){
      console.log("Sorry, you must use positive numbers to create the grid");
  }else if (xSquares !== Number || ySquares !== Number){
    console.log("Sorry, you can't use any string to create the grid. You must use positive numbers");
  }else{
    console.info("Error! something was wrong :(");
  }
}

function roverInit(xSquares,ySquares,rover){
  var tempPosition = [xSquares,ySquares];
  var obsExist = checkPosition(grid.obstaclesPosition, tempPosition);
  var myRoverExist = checkRoverPosition(myRover.position, tempPosition);
  var roverCloneExist = checkRoverPosition(roverClone.position, tempPosition);
  var gridDimensionsExist = checkGridDimensions(tempPosition);
  if (grid.dimensions <= 0){
    console.log("Sorry! You need to create a grid before");
  }else if(gridDimensionsExist === true){
    console.info("Ooops! This rover is out of the grid! Try it with other coordenates X position's between 0 and "+(grid.dimensions.length-1)+", and Y position's between 0 and "+(grid.dimensions[0].length-1));
  }else if(gridDimensionsExist  === false){
    console.info("Sorry! You can't use negative numbers!");
  }else if(rover.position.length !== 0){
    console.info("Ooops! This rover is already created!");
  }else if (myRoverExist || roverCloneExist){
    console.info("Ooops! there is another rover here");
  }else if (obsExist === true){
    console.info("Ooops! there is an obstacle here. Try it in other coordenates");
  }else if (obsExist === false){
    console.log("This rover is ready!");
    rover.position = tempPosition;
    console.log("The coordenates are: ["+rover.position+"]");
  }else{
    console.info("Error! something was wrong :(");
  }

}

function setObstacles(numObstacles){
  var obstaclesCreated = "";
  if (grid.dimensions <= 0) {
    console.log("Sorry, you have to create a grid before the obstacles");
  }else if(numObstacles >= grid.dimensions.length*grid.dimensions[0].length) {
    console.log("Sorry, you can't put more obstacles than grid's cells");
  }else{
    for (var i = 0; i < numObstacles; i++) {
      var xCoord = Math.floor(Math.random()*grid.dimensions.length);
      var yCoord = Math.floor(Math.random()*grid.dimensions[0].length);
      var obsCoord = [xCoord,yCoord];
      var obsExist = checkPosition(grid.obstaclesPosition,obsCoord);
      var myRoverExist = checkRoverPosition(myRover.position,obsCoord);
      var roverCloneExist = checkRoverPosition(roverClone.position,obsCoord);
      if(myRoverExist || roverCloneExist){
        console.log("Ooops! there is a rover here: ["+obsCoord+"].We'll trying again");
        i--; //repeat this i loop to try again
      }else if (obsExist === true) {
        console.log("Ooops! there is an obstacle here: ["+obsCoord+"].We'll trying again");
        i--; //repeat this i loop to try again
      }else if (obsExist === false){
        grid.obstaclesPosition.push(obsCoord);
        obstaclesCreated += "["+obsCoord+"]; ";
        console.log("Obstacle created in ["+obsCoord+"]");
      }else{
        console.info("Error! something was wrong :(");
      }
    }
    console.info("These are the positions of the obstacles! "+obstaclesCreated);
  }
}

function checkRoverPosition(array, position) {
  if (array[0] === position[0] && array[1] === position[1]) {
    return true;
  }
  return false;
}

function checkPosition(array, position) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][0] === position[0] && array[i][1] === position[1]) {
      return true;
    }
  }
  return false;
}

function checkGridDimensions(newRover) {
  if (newRover[0] >= grid.dimensions.length || newRover[1] >= grid.dimensions[0].length) {
    return true;
  }else if (newRover[0] < 0 || newRover[1] < 0) {
    return false;
  }
}

function move (movements,rover){
  var collision = false;
  if (rover.position.length !== 0) {
    for (var i = 0; i < movements.length; i++){
      if (!collision) {
        var futurePosition = rover.position.slice(0);
        switch (movements[i]) {
          case 'f':
            goForward(rover,futurePosition);
              if(checkNewPosition (rover,futurePosition,collision)){
                rover.position = checkOutGrid(futurePosition);
                console.info("The new position is ["+rover.position+"]");
              }else{
                collision = true;
              }
            break;
          case 'b':
            goBack(rover,futurePosition);
              if(checkNewPosition (rover,futurePosition,collision)){
                rover.position = checkOutGrid(futurePosition);
                console.info("The new position is ["+rover.position+"]");
              }else{
                collision = true;
              }
            break;
          case 'r':
            turnRight(rover,movements[i]);
            break;
          case 'l':
            turnLeft(rover,movements[i]);
            break;
        }
      }else if(collision){
        break;
      }
    }
    }else{
    console.log("Sorry! You have to create the rover before you command the movements");
  }
}

function goForward(rover,newPosition){
  switch(rover.direction) {
    case 'N':
      newPosition[0]++;
      break;
    case 'E':
      newPosition[1]++;
      break;
    case 'S':
      newPosition[0]--;
      break;
    case 'W':
      newPosition[1]--;
      break;
  }
}

function goBack(rover,newPosition){
  switch(rover.direction) {
    case 'N':
      newPosition[0]--;
      break;
    case 'E':
      newPosition[1]--;
      break;
    case 'S':
      newPosition[0]++;
      break;
    case 'W':
      newPosition[1]++;
      break;
  }
}

function turnRight(rover,turnMovement){
  switch (rover.direction){
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
}

function turnLeft(rover,turnMovement){
  switch (rover.direction){
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }
}

function checkNewPosition (rover,position,collision){
  var obsExist = checkPosition(grid.obstaclesPosition, position);
  var myRoverExist = checkRoverPosition(myRover.position, position);
  var roverCloneExist = checkRoverPosition(roverClone.position, position);
  if(!obsExist && !myRoverExist && !roverCloneExist) {
    return true;
  }else if(myRoverExist || roverCloneExist) {
    console.warn("The rover can't continue this commands because there is another rover here: ["+position+"]");
    return false;
  }else{
    console.warn("The rover can't continue this commands because there is an obstacle here: ["+position+"]");
    return false;
  }
}

function checkOutGrid (futurePosition){
  if (futurePosition[0] === grid.dimensions.length) {
    futurePosition[0] = 0;
  }else if (futurePosition[0] < 0) {
    futurePosition[0] = (grid.dimensions.length-1);
  }else if (futurePosition[1] === grid.dimensions[0].length) {
    futurePosition[1] = 0;
  }else if (futurePosition[1] < 0) {
    futurePosition[1] = (grid.dimensions[0].length-1);
  }
  return futurePosition;
}
