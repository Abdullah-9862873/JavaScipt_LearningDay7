// set interval

const body = document.body;

const setIntervalId = setInterval(() => {
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);
    const randomColorGenerator = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = randomColorGenerator;
}, 1000);

const button = document.querySelector("button");
button.addEventListener("click", ()=>{
    clearInterval(setIntervalId);
    button.textContent = body.style.backgroundColor;
})

