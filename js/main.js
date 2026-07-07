const targetDate = new Date("September 14, 2026 00:00:00").getTime();

setInterval(function () {

    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(document.getElementById("days")){
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }

},1000);
// Gallery Lightbox

window.addEventListener("load", function () {

    const galleryImages = document.querySelectorAll("#gallery img");

    galleryImages.forEach(function(image){

        image.addEventListener("click", function(){

            const lightbox = document.createElement("div");
            lightbox.id = "lightbox";

            const img = document.createElement("img");
            img.src = image.src;

            lightbox.appendChild(img);

            document.body.appendChild(lightbox);

            lightbox.onclick = function(){
                lightbox.remove();
            };

        });

    });

});
// Gallery Slider
let currentIndex = 0;

window.addEventListener("load", function () {
    const images = document.querySelectorAll("#gallery img");

    images.forEach((img, index) => {
        img.addEventListener("click", function () {
            currentIndex = index;
            openLightbox();
        });
    });

    function openLightbox() {
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";

        lightbox.innerHTML = `
            <span id="prev">&#10094;</span>
            <img src="${images[currentIndex].src}">
            <span id="next">&#10095;</span>
        `;

        document.body.appendChild(lightbox);

        document.getElementById("prev").onclick = function (e) {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            lightbox.querySelector("img").src = images[currentIndex].src;
        };

        document.getElementById("next").onclick = function (e) {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % images.length;
            lightbox.querySelector("img").src = images[currentIndex].src;
        };

        lightbox.onclick = function () {
            lightbox.remove();
        };
    }
});
// Hero Auto Slider
const heroImage = document.getElementById("heroImage");

if (heroImage) {

    const heroImages = [
        "assets/images/ganesh-hero.jpg",
        "assets/images/Group pic with ganesha.jpg",
        "assets/images/IMG_20250828_145525730_PORTRAIT.jpg",
        "assets/images/IMG_20250828_163850069_HDR.jpg",
        "assets/images/IMG_20250830_001546930_HDR.jpg"
    ];

    let currentHero = 0;

    setInterval(() => {

        heroImage.style.opacity = "0";

        setTimeout(() => {

            currentHero++;

            if (currentHero >= heroImages.length) {
                currentHero = 0;
            }

            heroImage.src = heroImages[currentHero];
            heroImage.style.opacity = "1";

        }, 400);

    }, 5000);

}