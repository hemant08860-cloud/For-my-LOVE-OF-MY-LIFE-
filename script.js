const messages = [

"🌸 Preparing birthday surprises...",

"✨ Gathering warm wishes...",

"🎨 Arranging creativity...",

"📚 Packing board luck...",

"💖 Almost ready...",

"🫡 Mission ready."

];

const loadingText =
document.getElementById("loadingText");

let i = 0;

const interval = setInterval(()=>{

i++;

if(i < messages.length){

loadingText.textContent = messages[i];

}

},1800);

setTimeout(()=>{

clearInterval(interval);

document.getElementById("loader").style.display="none";

const hero=document.getElementById("hero");

hero.style.display="flex";

document.body.style.overflow="auto";

},10000);