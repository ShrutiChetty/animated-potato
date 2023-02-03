class Asteroid{
    constructor(){
        this.asteroid = createImg("asteroid.png");
        this.asteroid.scale = 0.02
        this.asteroidfire = createImg("asteroidfire.png");
        this.positionX = 0;
        this.positionY = 0;
        this.colors = ["red","orange","yellow","green","blue","purple","pink","white","black","grey","brown"];
        this.words = ["smart","red","flight","critic","take","run","warm","button","lounge","depart","hay","row","file","tone","plead","slogan","amuse","report","nun","toast","hold","kidnap"];
        this.color = "";
        this.word = "";
    }
    
    createAsteroid(){
        this.asteroid.positionX = 0;
        this.asteroid.positionY = math.Floor(math.Random*windowWidth);
        this.asteroidfire.positionX = this.asteroid.positionX;
        this.asteroidfire.positionY = windowHeight+20;
        this.asteroid.velocityX = -2;
        this.asteroid.velocityY = -2;
        this.asteroidfire.velocityX = -2;
        this.asteroidfire.velocityY = -2;
        this.word.fcolor()
        }

}
function fcolor(){
    this.word = this.words[math.Floor((math.Random*22)-1)]
    this.color = this.colors[math.Floor((math.Random*11)-1)];
    this.word.fontcolor(this.color);
}
