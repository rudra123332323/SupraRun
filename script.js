document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("popup").classList.add("show");
    document.querySelector("img").classList.add("blur");
});
const btn=document.getElementById("enterGame");

const audio=new Audio('kbc.mp3');
    audio.loop=true;

const audio1=new Audio('kmr.mp3');
    audio1.loop=true;

btn.addEventListener('click',()=>{
    document.getElementById("popup").classList.remove("show");
    document.querySelector("img").classList.remove("blur");
});

const start=document.getElementById("start");
const pause=document.getElementById("pause");

start.addEventListener('click',()=>{
    audio.play();
    pause.style.visibility="visible";
    audio1.pause();
    audio1.currentTime=0;
})

pause.addEventListener('click',()=>{
    
    pause.style.visibility="hidden";
    audio.pause();
    audio.currentTime=0;
    audio1.play();
    
})