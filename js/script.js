// ===== Sparkles =====

const sparkles = document.getElementById("sparkles");

for(let i = 0; i < 40; i++){

    const sparkle = document.createElement("span");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";

    sparkle.style.animationDelay = Math.random() * 5 + "s";
    sparkle.style.animationDuration = (2 + Math.random() * 3) + "s";

    sparkles.appendChild(sparkle);

}
const messages = [

    "🌸 Preparing birthday surprises...",
    "✨ Gathering warm wishes...",
    "🎨 Decorating memories...",
    "📚 Packing board luck...",
    "💖 Almost Ready...",
    "🫡 Mission Ready!"

];

const bar = document.querySelector(".progress-bar");
const text = document.getElementById("loadingMessage");

let width = 0;
let index = 0;

const loading = setInterval(() => {

    width++;

    bar.style.width = width + "%";

    if (width % 20 === 0 && index < messages.length) {

        text.textContent = messages[index];
        index++;

    }

    if (width >= 100) {

        clearInterval(loading);

        setTimeout(() => {

            document.getElementById("loader").style.opacity = "0";

            setTimeout(() => {

                document.getElementById("loader").style.display = "none";

                document.getElementById("hero").style.display = "flex";

                document.body.style.overflow = "auto";

            }, 800);

        }, 500);

    }

}, 40);
