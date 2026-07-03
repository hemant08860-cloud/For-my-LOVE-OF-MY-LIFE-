// ==========================
// PROJECT AYE AYE MADAM
// Countdown System
// ==========================

// Change this date if needed
const unlockDate = new Date("January 16, 2027 00:00:00").getTime();

const daysBox = document.getElementById("days");
const hoursBox = document.getElementById("hours");
const minutesBox = document.getElementById("minutes");
const secondsBox = document.getElementById("seconds");

const timer = setInterval(() => {

    const now = new Date().getTime();

    const distance = unlockDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

daysBox.textContent = days;
hoursBox.textContent = String(hours).padStart(2, "0");
minutesBox.textContent = String(minutes).padStart(2, "0");
secondsBox.textContent = String(seconds).padStart(2, "0");

    // Unlock website
    if(distance <= 0){

        clearInterval(timer);

        document.getElementById("countdown-screen").style.display="none";

        document.getElementById("loader").style.display="flex";

        startLoader();

    }

},1000);

// ==========================
// Loader
// ==========================

function startLoader(){

    const messages=[

        "🌸 Preparing birthday surprises...",
        "✨ Gathering warm wishes...",
        "🎨 Decorating memories...",
        "📚 Packing board luck...",
        "💖 Almost Ready...",
        "🫡 Mission Ready!"

    ];

    const bar=document.querySelector(".progress-bar");
    const text=document.getElementById("loadingMessage");

    let width=0;
    let i=0;

    const loading=setInterval(()=>{

        width++;

        bar.style.width=width+"%";

        if(width%20===0 && i<messages.length){

            text.innerHTML=messages[i];
            i++;

        }

        if(width>=100){

            clearInterval(loading);

            document.getElementById("loader").style.display="none";

            document.getElementById("hero").style.display="flex";

            document.body.style.overflow="auto";

        }

    },40);

}
