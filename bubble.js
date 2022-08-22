
const conteurDisplay=document.querySelector('h3')
let conteur= 0
const bubbleMaker=()=>{
const bubble = document.createElement("span");
bubble.classList.add("bubble");
document.body.appendChild(bubble);
const size = Math.random() * 100 + 100 + "px";
bubble.style.height = size;
bubble.style.width = size;

bubble.style.top=Math.random()*100+50+'%'
bubble.style.left=Math.random()*100+'%'

const pluMinus= Math.random()>0.5 ? 1 : -1;

bubble.style.setProperty('--left',Math.random()*100*pluMinus+'%');
setTimeout(()=>{
     bubble.remove();
 },8000);
 bubble.addEventListener('mousemove',()=>{
    conteur++;
    conteurDisplay.textContent=conteur
    bubble.remove()
 })
}

setInterval(bubbleMaker,10)
