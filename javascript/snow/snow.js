
   px=100;
   py=100;
   angel=0;
   g=3;

  var  canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var W  =window.innerWidth;
  var H= window.innerHeight;

  console.log("h="+H+" w="+W);

  canvas.width=W;
  canvas.height=H;


function draw(){

  ctx.clearRect(0,0,W,H);
  ctx.fillStyle="rgba(255,255,255,0.8)";
  ctx.beginPath();
  ctx.moveTo(200,200);// flyttar pennan utan att måla
  ctx.arc(px, py, 50, 0, Math.PI*2,true);
  ctx.fill();
  update();

}



function update(){

  //px++;
  //py++;

angel++;
g=g+0.1;

py=py+g;

if (py>=H-100){
  g=g*-1;
}

  px+=Math.cos(angel *Math.PI/180)*2;
  //py+=Math.sin(angel*Math.PI/180)*2;
  //console.log(Math.cos(angel *Math.PI/180)*0.5);

}

setInterval(draw,40);
