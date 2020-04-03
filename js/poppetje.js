window.onload = function(){
    // your code

let lives = 9;

document.getElementById('knop').addEventListener('click',  function () {

    animate();
});



const animate = function () {
    const drawMe = lives -1;
    drawArray[drawMe]();
};


// poppetje tekenen

canvas =  function(){

    poppetje = document.getElementById("poppetje");
    context = poppetje.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#000000";
    context.lineWidth = 2;
};

hoofd = function(){
    poppetje = document.getElementById("poppetje");
    context = poppetje.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI*2, true);
    context.stroke();
};

draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
};



frame1 = function() {
    draw (10, 0, 10, 600);
};

frame2 = function() {
    draw (0, 5, 70, 5);
};

frame3 = function() {
    draw (60, 5, 60, 15);
};

torso = function() {
    draw (60, 36, 60, 70);
};

rechterarm = function() {
    draw (60, 46, 100, 50);
};

linkerarm = function() {
    draw (60, 46, 20, 50);
};

rechterbeen = function() {
    draw (60, 70, 100, 100);
};

linkerbeen = function() {
    draw (60, 70, 20, 100);
};

drawArray = [rechterbeen, linkerbeen, rechterarm, linkerarm,  torso,  hoofd, frame3, frame2, frame1];
canvas();

};