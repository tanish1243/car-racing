canvas=document.getElementById("mycanvas");
ctx= canvas.getContext("2d");
car1width=120
car1height=70
car1img="car1.png";
car1x= 10;
car1y=10;
car2width=120
car2height=70
car2img="car2.png";
car2x= 10;
car2y=100;
backgroundimage="racing.jpg"
function add(){
    bgimage= new Image();
    bgimage.onload=uploadbackground;
    bgimage.src= backgroundimage;

    imagecar1= new Image();
    imagecar1.onload=uploadcar1;
    imagecar1.src= car1img;

    imagecar2= new Image();
    imagecar2.onload=uploadcar2;
    imagecar2.src= car2img;
}
function uploadbackground(){
    ctx.drawImage(bgimage,0,0,canvas.width,canvas.height);

}
function uploadcar1(){
    ctx.drawImage(imagecar1,car1x,car1y,car1width,car1height);
}
function uploadcar2(){
    ctx.drawImage(imagecar2,car2x,car2y,car2width,car2height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypressed= e.keyCode;
console.log(keypressed);
if(keypressed=="37"){
    car1left();
    console.log("left key pressed");

}
if(keypressed=="38"){
    car1up();
    console.log("up arrow pressed");
}
if(keypressed=="39"){
    car1right();
    console.log("right arrow key pressed");

}
if(keypressed=="40"){
    car1down();
    console.log("down arrow key pressed");

}
if(keypressed=="65"){
    car2left();
    console.log("A pressed");
}
if(keypressed=="87"){
    car2up();
    console.log("w pressed");
}
if(keypressed=="68"){
    car2right();
    console.log("d pressed");
}
if(keypressed=="83"){
    car2down();
    console.log("S pressed");}
if(car1x>700){
    console.log("car 1 won");
    document.getElementById("gamestatus").innerHTML= "Car 1 won !!!!!!";
    
}
if(car2x>700){
    console.log("car 2 won");
    document.getElementById("gamestatus").innerHTML= "Car 2 won !!!!!!";
    
}


}
function car1up(){
    if(car1y>0){
        car1y=car1y-10;
        console.log("when up is pressed then X is = "+ car1x + "and y = "+ car1y);
        uploadbackground();
        uploadcar1();
        uploadcar2();

    }
}
function car1down(){
    if(car1y<=500){
        car1y=car1y+10;
        console.log("when down is pressed then X is = "+ car1x + "and y = "+ car1y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
        
    }
}
function car1left(){
    if(car1x>0){
        car1x=car1x-10;
        console.log("when left is pressed then X is = "+ car1x + "and y = "+ car1y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
        
    }
}
function car1right(){
    if(car1x<=700){
        car1x=car1x+10;
        console.log("when right is pressed then X is = "+ car1x + "and y = "+ car1y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
        
    }
}



function car2up(){
    if(car2y>0){
        car2y=car2y-10;
        console.log("when w is pressed then X is = "+ car2x + "and y = "+ car2y);
        uploadbackground();
        uploadcar1();
        uploadcar2();

    }
}
function car2down(){
    if(car2y<=500){
        car2y=car2y+10;
        console.log("when s is pressed then X is = "+ car2x + "and y = "+ car2y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
        
    }
}
function car2left(){
    if(car2x>0){
        car2x=car2x-10;
        console.log("when a is pressed then X is = "+ car2x + "and y = "+ car2y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
        
    }
}
function car2right(){
    if(car2x<=700){
        car2x=car2x+10;
        console.log("when d is pressed then X is = "+ car2x + "and y = "+ car2y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
        
    }
}