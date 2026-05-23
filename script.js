gsap.registerPlugin(ScrollTrigger);

lucide.createIcons();

//
// LENIS
//

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true
});

function raf(time){
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//
// CURSOR
//

//
// SMOOTH CURSOR
//

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  gsap.to(dot, {
    x: mouseX,
    y: mouseY,
    duration: 0.08,
    ease: "power2.out"
  });
});

function animateCursor() {

  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;

  gsap.set(ring, {
    x: ringX - 20,
    y: ringY - 20
  });

  requestAnimationFrame(animateCursor);
}

animateCursor();

//
// MAGNETIC BUTTONS
//

const magnets = document.querySelectorAll('.magnetic');

magnets.forEach(item=>{

  item.addEventListener('mousemove',(e)=>{

    const rect = item.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(item,{
      x:x * .2,
      y:y * .2,
      duration:.4
    });

  });

  item.addEventListener('mouseleave',()=>{

    gsap.to(item,{
      x:0,
      y:0,
      duration:.5
    });

  });

});

//
// TILT CARDS
//

const cards = document.querySelectorAll('.tilt-card');

cards.forEach(card=>{

  card.addEventListener('mousemove',(e)=>{

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - .5) * 18;
    const rotateX = ((y / rect.height) - .5) * -18;

    gsap.to(card,{
      rotateX,
      rotateY,
      duration:.4
    });

  });

  card.addEventListener('mouseleave',()=>{

    gsap.to(card,{
      rotateX:0,
      rotateY:0,
      duration:.6
    });

  });

});

//
// REVEALS
//

gsap.utils.toArray('.reveal').forEach(el=>{

  gsap.to(el,{
    scrollTrigger:{
      trigger:el,
      start:'top 85%'
    },

    opacity:1,
    y:0,
    duration:1.2,
    ease:'power4.out'
  });

});

//
// HERO TITLE SPLIT
//

const split = new SplitType('.hero-title',{
  types:'chars'
});

gsap.from(split.chars,{
  opacity:0,
  y:120,
  rotateX:-90,
  stagger:.03,
  duration:1.2,
  ease:'power4.out'
});

//
// PARTICLES
//

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

class Particle{

  constructor(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.size = Math.random() * 2;

    this.speedX = (Math.random() - .5) * .4;
    this.speedY = (Math.random() - .5) * .4;
  }

  update(){

    this.x += this.speedX;
    this.y += this.speedY;

    if(this.x < 0 || this.x > canvas.width){
      this.speedX *= -1;
    }

    if(this.y < 0 || this.y > canvas.height){
      this.speedY *= -1;
    }
  }

  draw(){

    ctx.fillStyle = 'rgba(255,255,255,.7)';

    ctx.beginPath();

    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

    ctx.fill();
  }
}

for(let i = 0; i < 100; i++){
  particles.push(new Particle());
}

function animate(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{

    p.update();
    p.draw();

  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize',()=>{

  canvas.width = innerWidth;
  canvas.height = innerHeight;

});
