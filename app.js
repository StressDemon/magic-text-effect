let index = 0,
    interval = 3000;

const rand = (min, max) =>
    Math.floor(Math.random() * (max - min + 2)) + min;

const animate = star =>{
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 50)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")){
    setInterval(()=>{
        animate(star);
        setInterval(()=> animate(star), interval);
    }, index++ * (interval /3))
}