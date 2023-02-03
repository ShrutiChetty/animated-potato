var obstacles;
var asteroidimg, asteroidfireimg, asteroid;
var life1, life2, life3, lives, life1img,life2img,life3img,livesimg;
var spaceshipimg,spacebg,spaceship;
var finishbg,inputbg;
var name;
var asteroidsGroup;
var words = ["smart","red","flight","critic","take","run","warm","button","lounge","depart","hay","row","file","tone","plead","slogan","amuse","report","nun","toast","hold","kidnap"];
gamestate = "pre";
function preload(){
    asteroidimg = loadImage("asteroid.png");
    asteroidfireimg = loadImage("asteroidfire.png");
    life1img = loadImage("heart.png");
    life2img = loadImage("heart.png");
    life3img = loadImage("heart.png");
    spacebg = loadImage("spacebg.webp");
    spaceshipimg = loadImage("spaceship.png");
    finishbg = loadImage("finishbg.png");
    inputbg = loadImage("inputimg.jpg");
}
function setup(){
    canvas = createCanvas(windowWidth-10,windowHeight-10);
    
    life1 = createSprite(windowWidth-10,100,100,100);
    life1.addImage("life1",life1img);
    
    life2 = createSprite(windowWidth-20,100,100,100);
    life2.addImage("life2",life2img);

    life3 = createSprite(windowWidth-30,100,100,100);
    life3.addImage("life3",life3img);
    
    asteroid = new Asteroid();


    asteroidsGroup = new Group();
}

function draw(){      
  obstacles();

}

function lives(){

    var lives = 3;

    life1.visible = true;
    life2.visible = true;
    life3.visible = true;


    if(asteroidsGroup.isTouching(spaceship)){
        lives-=1;
    }

    if(lives==2){
        life3.visible = false;
    }

    if(lives==1){
        life2.visible = false;
    }

    if(lives==0){
        life1.visible = false;
        gamestate="finish";
    }
   
}

function obstacles(){


    
        if(frameCount % 120==0){
            
            var randomword = words[random(0,words.length-1)];
            asteroid.lifetime = 400;
            asteroid.positionX = 0;
            asteroid.positionY = 0;
            asteroidsGroup.add(asteroid);
        }
        if(gamestate=="pre"){
            background(inputbg);
            asteroidsGroup.velocityY = 0;
            asteroidsGroup.visible = false;
        }
        else if(gamestate=="game"){
            background(spacebg);
            asteroidsGroup.velocityY = 2;
            asteroidsGroup.visible = true;
            lives();
        }
        else if(gamestate=="finish"){
            background(finishbg);
            asteroid.velocityY = 0;
            asteroidsGroup.visible = false;
            fill("black");
            textSize(40);
            text("Congratulations, you're finished!",windowWidth/2,windowHeight/2);

            
        }


}


