//Create variables here
var database;
var canvas;
var foodstock = 0;
var lastfed = 0;

function preload()
{
  dog = loadImage("dogimg.png");
  dogi = loadImage("dogimg1.png");
  mil = loadImage("Milk.png")
}

function setup() {
  database = firebase.database();

  canvas = createCanvas(1000, 400);

  dogn = createSprite(900,250,10,10);
  dogn.addImage(dog);
  dogn.scale = 0.2;

  foodv = new FOOD();
  
  var button = createButton("feed");
  button.position(700,60);
  button.mousePressed(feedDog);

  var button2 = createButton("addFood");
  button2.position(750,60);
  button2.mousePressed(addFood);

}

function draw() {  
  background(46, 139, 87);
  drawSprites();
  

   foodObj = 0;
  foodv.display();
}

function feedDog(){
  dogn.addImage(dogi);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    foods:foodObj.getFoodStock(),

  })

}

function addFood(){
  food++
  database.ref('/').update({
    food:food

  })

}

//.ref = refer to a location of the database value;
//.on = it moniters the value of database;
//.set = used to set the values in the database;
//.update = used to update the values in the database;
//.val = to extract the values of the database;