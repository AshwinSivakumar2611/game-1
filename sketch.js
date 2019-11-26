var database;
var gameState=0;
var playerCount;
var form,player,game;
var welcomeScreen,homeScreen,sampleMap,imageVar;
var allPlayers;
var player1,player2,player3,player4,players;
var xPos = 200;
var yPos = 500;

function preLoad(){

}

function setup(){
    database = firebase.database();
    createCanvas(displayWidth-30,displayHeight-148);
    welcomeScreen = loadImage("./images/WelcomeScreen.png");
    homeScreen = loadImage("./images/HomeScreen.png");
    sampleMap = loadImage("./images/SampleMap.png");

    imageVar=welcomeScreen;

    game = new Game();
    game.getState();
    game.start();
}


function draw(){      
    background(imageVar);
    if (playerCount===4){
        game.updateState(1);
    }
    if (gameState===1){
        game.play();
        //imageVar=sampleMap;
    }
    drawSprites();
}

function keyPressed(){
    if (keyCode === 32 && gameState===0){
        form = new Form();
        form.display();
        imageVar=homeScreen;
    }
}