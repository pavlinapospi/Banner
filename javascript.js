const hamb = document.querySelector(".hamb");
const nav = document.querySelector(".slide");

hamb.addEventListener("click",() => {
    nav.classList.toggle("right");
})

/*wrapper*/

const slides = document.querySelectorAll(".slides");
let currentIndex = 0;
const intervalTime = 2000; 

const switchSlides = () => {
    deleteActiveClass();
    slides[currentIndex].classList.add("active");
    currentIndex = (currentIndex + 1) % slides.length; 
};

const interval = setInterval(switchSlides, intervalTime);

slides.forEach((oneSlides, index) => {
    oneSlides.addEventListener("click", () => {
        deleteActiveClass();
        oneSlides.classList.add("active");
        currentIndex = index;
        clearInterval(interval); 
    });
});

const deleteActiveClass = () => {
    slides.forEach((mySlides) => {
        mySlides.classList.remove("active");
    });
};