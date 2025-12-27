/* ---------- NAVIGATION ---------- */
function goToLetter(){ window.location.href="letter.html"; }
function goToFinal(){ window.location.href="final.html"; }
function replaySite(){ window.location.href="index.html"; }

/* ---------- MUSIC ---------- */
const music = document.getElementById("bgMusic");
function toggleMusic(){ music.paused ? music.play() : music.pause(); }

/* ---------- ENVELOPE OPEN ---------- */
function openLetter(){ document.querySelector(".envelope-wrapper").classList.add("open"); }

/* ---------- HEART RAIN ---------- */
function dropFancy(){
  const e = document.createElement("div");
  e.classList.add("faller");
  const icons = ["❤️","💖","✨","💞","🌸"];
  e.innerText = icons[Math.floor(Math.random()*icons.length)];
  e.style.left = Math.random()*100 + "vw";
  e.style.animationDuration = (3+Math.random()*3)+"s";
  document.body.appendChild(e);
  setTimeout(()=>e.remove(),4500);
}
if(document.body.classList.contains("page-one")){ setInterval(dropFancy,220); }

/* ---------- FIREWORKS ---------- */
const canvas = document.getElementById("fireworks");
if(canvas){
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  const particles=[];
  function firework(){
    const x = Math.random()*canvas.width;
    const y = Math.random()*canvas.height/2;
    for(let i=0;i<25;i++){
      particles.push({
        x,y,
        dx:Math.cos(i)*Math.random()*3,
        dy:Math.sin(i)*Math.random()*3,
        life:80
      });
    }
  }
  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach((p,i)=>{
      p.x+=p.dx; p.y+=p.dy; p.life--;
      ctx.fillStyle="rgba(255,180,255,"+p.life/80+")";
      ctx.fillRect(p.x,p.y,3,3);
      if(p.life<=0) particles.splice(i,1);
    });
    requestAnimationFrame(animate);
  }
  setInterval(firework,900);
  animate();
}

/* ---------- 3D FLOATING HEARTS ON FINAL PAGE ---------- */
function floatingHearts(){
  const box = document.querySelector(".heart-3d-container");
  if(!box) return;
  const heart = document.createElement("div");
  heart.innerText="💖";
  heart.style.left = Math.random()*100+"vw";
  heart.style.animationDuration = (4+Math.random()*4)+"s";
  box.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
}
setInterval(floatingHearts,400);
