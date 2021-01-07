var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var baskets, basket1, basket2;

var basketImg;

var trackImg , ground;

var backgroundImg;

function preload(){
  basketImg = loadImage("images/basket2.png");
  backgroundImg = loadImage("images/bg.jpg");
}

function setup(){
  canvas = createCanvas(windowWidth - 20, windowHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  
}
