/*//////////////////////////////////////////////////////////////

=============    =============    =============    =============
=============    =============    =============    =============
    =====        =====            =====                =====
    =====        =============    =============        =====
    =====        =============    =============        =====
    =====        =====                    =====        =====
    =====        =============    =============        =====
    =====        =============    =============        =====

//////////////////////////////////////////////////////////////*/

/* Delete this line to activate this test

// THE GOOD TEST!! Everything works correctly :)
// *the obstacles are generated randomly, and the test cases will vary in fuction of this.
    gridInit(10,10); //true: Grid Created!
    roverInit(3,5,myRover); //true: This rover is ready! The coordenates are: [3,5]
    roverInit(6,8,roverClone); //true: This rover is ready! The coordenates are: [6,8]
    setObstacles(10); //true: These are the positions of the obstacles! [9,5]; [9,6]; [5,6]; [7,7]; [3,9]; [0,3]; [1,5]; [6,9]; [2,4]; [4,6]
    move("bbbrfffrffrbb",myRover); //true: The new position is [2,5]
                                         //The rover can't continue this commands because there is an obstacle here: [1,5]
    move("ffrflfffrfffrbbb",roverClone); //true: The new position is [5,8]
                                               //The new position is [4,8]
                                               //The new position is [4,7]
                                               //The new position is [3,7]
                                               //The new position is [2,7]
                                               //The new position is [1,7]
                                               //The new position is [1,6]
                                               //The rover can't continue this commands because there is an obstacle here: [1,5]


// All another posible options //

// Testing grid
    //--Individual Options
    gridInit(5,5); //true: Grid Created!
    gridInit(-3,5); //true: Sorry, you must use positive numbers to create the grid
    gridInit(0,5); //true: Sorry, you must use positive numbers to create the grid
    gridInit("f",5); //true: Sorry, you can't use any string to create the grid. You must use positive numbers

    //--When you have already created a grid
    gridInit(5,5); //true: Grid Created!
    gridInit(8,5); //true: Ooops! The grid is already created

// Testing rover
    //--Creating myRover or roverClone if it is into the grid coordenates
    gridInit(5,5); //true: Grid Created!
    roverInit(3,3,myRover); //true: This rover is ready! The coordenates are: [3,3]
    roverInit(1,2,roverClone); //true: This rover is ready! The coordenates are: [1,2]

    //--Creating myRover or roverClone without a grid created
    roverInit(3,3,myRover); //true: Sorry! You need to create a grid before

    //--Creating myRover or roverClone with negative coordenates
    gridInit(5,5); //true: Grid Created!
    roverInit(-3,3,myRover); //true: Sorry! You can't use negative numbers!

    //--Creating myRover or roverClone if it isn't into the grid coordenates
    gridInit(5,5); //true: Grid Created!
    roverInit(8,5,myRover); //true: Ooops! This rover is out of the grid! Try it with other coordenates X position's between 0 and 4, and Y position's between 0 and 4
    roverInit(8,7,roverClone); //true: Ooops! This rover is out of the grid! Try it with other coordenates X position's between 0 and 4, and Y position's between 0 and 4

    //--Creating myRover or roverClone in the same place where other rover is already exist
    gridInit(5,5); //true: Grid Created!
    roverInit(2,2,myRover); //true: This rover is ready! The coordenates are: [2,2]
    roverInit(2,2,roverClone); //true: Ooops! there is other rover here

    //--Creating myRover or roverClone and this is already created
    gridInit(5,5); //true: Grid Created!
    roverInit(2,2,myRover); //true: This rover is ready! The coordenates are: [2,2]
    roverInit(1,3,myRover); //true: Ooops! This rover is already created!

    //--Creating myRover or roverClone in the same position of an obstacle created before
    gridInit(5,5); //true: Grid Created!
    setObstacles(4); //true: These are the positions of the obstacles! [3,3],[2,1],[0,2],[1,3]
    roverInit(2,1,myRover); //true: Ooops! there is an obstacle here. Try it in other coordenates

// Testing obstacles
    //--Creating obstacles without a grid created
    setObstacles(4); //true: Sorry, you have to create a grid before the obstacles

    //--Creating more obstacles than grid's cells exist
    gridInit(5,5); //true: Grid Created!
    setObstacles(30); //true: Sorry, you can't put more obstacles than grid's cells

    //--Creating obstacles and if one of these is ceated in the same position than a rover or other obstacle created before in the same position.
      //But the loop continue and repeat this i loop to create a new good position
    gridInit(5,5); //true: Grid Created!
    roverInit(2,2,myRover); //true: This rover is ready! The coordenates are: [2,2]
    setObstacles(4); //true: Ooops! there is a rover here: [2,2].We'll trying again
                     //true: Ooops! there is an obstacle here: [3,3].We'll trying again
                     //And finally, the obstacles are created satisfactorily in free coordenates
                     //true: These are the positions of the obstacles! [3,3],[2,1],[0,2],[1,3]

// Testing movements of rovers
    //--Sending instructions to a rover before to create the grid or this rover
    move("ffrffrbblf",myRover); //true: Sorry! You have to create the rover before you command the movements

    //--Sending instructions to a rover and create a collision with another rover
    gridInit(5,5); //true: Grid Created!
    roverInit(2,2,myRover); //true: This rover is ready! The coordenates are: [2,2]
    roverInit(1,2,roverClone); //true: This rover is ready! The coordenates are: [1,2]
    move("b",myRover); //true: The rover can't continue this commands because there is another rover here: [1,2]

    //--Sending instructions to a rover and create a collision with an obstacle
    gridInit(5,5); //true: Grid Created!
    roverInit(2,2,myRover); //true: This rover is ready! The coordenates are: [2,2]
    roverInit(1,2,roverClone); //true: This rover is ready! The coordenates are: [1,2]
    setObstacles(4); //true: These are the positions of the obstacles! [3,2],[2,1],[0,2],[1,3]
    move("f",myRover); //true: The rover can't continue this commands because there is an obstacle here: [3,2]


Delete this line to activate this test */
