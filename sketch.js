var road;
var roadImage;

var player;
var playerImg;
var playerDead;

var opponent1;
var opponent1Img;
var opponent1Dead;

var opponent2;
var opponent2Img;
var opponent2Dead;

var opponent3;
var opponent3Img;
var opponent3Dead;

var obstacle;
var coneImg;
var sewerImg;
var nailsImg;

var gameState = "play";

var opponentGroup;

var obstacleGroup;

function preload() {
    roadImage = loadImage("road.png");
    opponent1Img = loadAnimation("opponent1.png", "opponent2.png");
    opponent1Dead = loadImage("opponent3.png");
    opponent2Img = loadAnimation("opponent4.png", "opponent5.png");
    opponent2Dead = loadImage("opponent6.png");
    opponent3Img = loadAnimation("opponent7.png", "opponent8.png");
    opponent3Dead = loadImage("opponent9.png");
    playerImg = loadAnimation("mainPlayer1.png", "mainPlayer2.png");
    playerDead = loadImage("mainPlayer3.png");
    coneImg = loadImage("obstacle1.png");
    sewerImg = loadImage("obstacle2.png");
    nailsImg = loadImage("obstacle3.png");
}

function setup() {
    createCanvas(1400, 600);
    road = createSprite(700, 300);
    road.addImage(roadImage);
    player = createSprite(300, 300);
    player.addAnimation("alive", playerImg);
    player.scale = 0.12;
    opponentGroup = new Group();
    obstacleGroup = new Group();
}

function draw() {
    background(200);
    if (frameCount % 10 == 0) {
        console.log("Framecount: " + frameCount);
    }
    if (gameState == "play") {
        road.velocityX = -5
        if (road.x < -1400) {
            road.x = 665;
            console.log("Road X Value: reset to " + road.x)
        }
        if (keyDown("up_Arrow")) {
            player.y = player.y - 2;
        }
        if (keyDown("down_Arrow")) {
            player.y = player.y + 2;
        }
        createOpponents()
        if (obstacleGroup.isTouching(player) || opponentGroup.isTouching(player)) {
            gameState = "end";
            console.log(gameState);
            obstacleGroup.visible = false;
            opponentGroup.visible = false;
            player.addImage(playerDead);
        }
    }
    if (gameState = "end") {
        road.velocityX = 0;
    }

    drawSprites()
}

function createOpponents() {
    if (frameCount % 90 == 0) {
        console.log("FrameCount Ran");
        var randOne = Math.round(random(1, 3));
        switch (randOne) {
            case 1:
                obstacle = createSprite(1600, 100);
                obstacle.velocityX = -5;
                obstacle.scale = 0.2
                obstacle.lifetime = 360;
                obstacle.y = random(50, 550);
                var randTwo = Math.round(random(1, 4));
                if (randTwo == 1) {
                    obstacle.addImage(sewerImg);
                    console.log("Obstacle: 1A")
                    obstacleGroup.add(obstacle);
                }
                if (randTwo == 2) {
                    obstacle.addImage(nailsImg);
                    console.log("Obstacle: 2A")
                    obstacleGroup.add(obstacle);
                }
                if (randTwo == 3) {
                    obstacle.addImage(coneImg);
                    console.log("Obstacle: 3A")
                    obstacleGroup.add(obstacle);
                }
                break;
            case 2:
                var randThree = Math.round(random(1, 3));
                if (randThree == 1) {
                    opponent1 = createSprite(-100, 300);
                    opponent1.y = random(50, 550);
                    opponent1.velocityX = 3;
                    console.log("Opponent: 1");
                    opponent1.addAnimation("alive", opponent1Img);
                    opponent1.scale = 0.1;
                    opponentGroup.add(opponent1);
                }
                if (randThree == 2) {
                    opponent2 = createSprite(-100, 300);
                    opponent2.y = random(50, 550);
                    opponent2.velocityX = 3;
                    console.log("Opponent: 2");
                    opponent2.addAnimation("alive", opponent2Img);
                    opponent2.scale = 0.1;
                    opponentGroup.add(opponent2);
                }
                if (randThree == 3) {
                    opponent3 = createSprite(-100, 300);
                    opponent3.y = random(50, 550);
                    opponent3.velocityX = 3;
                    console.log("Opponent: 3");
                    opponent3.addAnimation("alive", opponent3Img);
                    opponent3.scale = 0.1;
                    opponentGroup.add(opponent2);
                }
                break;
            case 3:
                obstacle = createSprite(1600, 100);
                obstacle.velocityX = -5;
                obstacle.scale = 0.2
                obstacle.lifetime = 360;
                obstacle.y = random(50, 550);
                var randTwo = Math.round(random(1, 3));
                if (randTwo == 1) {
                    obstacle.addImage(sewerImg);
                    console.log("Obstacle: 1B")
                    obstacleGroup.add(obstacle);
                }
                if (randTwo == 2) {
                    obstacle.addImage(nailsImg);
                    console.log("Obstacle: 2B")
                    obstacleGroup.add(obstacle);
                }
                if (randTwo == 3) {
                    obstacle.addImage(coneImg);
                    console.log("Obstacle: 3B")
                    obstacleGroup.add(obstacle);
                }
                break;
            case 4:
                console.log("REQUEST VOIDED");
                break;
        }
    }
}
