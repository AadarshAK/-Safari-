var backI, backS;
var x1=0,x2;
var scrollSpeed=2;

function preload(){
   backI=loadImage("img/forest1_edited.jpg");
   backI.resize(windowWidth,windowHeight);
}

function setup(){
   createCanvas(windowWidth,windowHeight);
   x2=width;
   backS=createSprite(0,0,0,0);
   image(backI,0,0)
   backI.resize(windowWidth,0);
   backS.addImage(backI);
  // backS.scale
   backS.velocityX=-5;
   //backS.visible=false;
}

function draw(){
   background("white");
   // for loop
   image(backI,x1,0,width,height);
   image(backI,x2,0,width,height);

   x1=x1-scrollSpeed;
   x2-=scrollSpeed;


   if(x1<-width){
      x1=0;
   }

   if(x2<-width){
      x2=width;
   }

   if(backS.x>0){
       backS.x=backS.width/2
   }

   drawSprites();
}