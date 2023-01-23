
   px=0;
   py=0;

   var antal=700;
   var particles=[];
   var  canvas = document.getElementById("canvas");
   var ctx = canvas.getContext("2d");

   var W  =window.innerWidth;
   var H= window.innerHeight;
   for(var i=0;i<antal;i++){

     particles.push({

       x: Math.random()*W,
       y: Math.random()*H,
       r: Math.random()*3+1,
       d: Math.random()*antal

     })
   }

   angel=0;
   g=3;



  console.log("h="+H+" w="+W);

  canvas.width=W;
  canvas.height=H;


function draw(){

  ctx.clearRect(0,0,W,H);
  ctx.fillStyle="rgba(255,255,255,0.8)";
  ctx.beginPath();
      for(var i=0;i<antal;i++){


        var p=particles[i];
      console.log("test");
        ctx.moveTo(p.x  ,  p.y);// flyttar pennan utan att måla
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2,true);

      }
  ctx.fill();
  update();

}



function update(){

  for(var i=0;i<antal;i++){

    var p = particles[i];
    if(i%3==0){

      p.y=p.y +Math.sin(angel*Math.PI/180)+g;

    }else{
        p.y=p.y+(p.d/200);
    }


    p.x=p.x+ Math.cos(angel*Math.PI/180);


    if(p.y>H){

      p.y=0
    }
    if(p.x>W){

      p.x=0;
    }
  }

angel++;
//g=g+0.1;

py=py+g;

// if (py>=H-100){
//   g=g*-1;
// }

  //px+=Math.cos(angel *Math.PI/180)*2;
  //py+=Math.sin(angel*Math.PI/180)*2;
  //console.log(Math.cos(angel *Math.PI/180)*0.5);

}

setInterval(draw,40);
