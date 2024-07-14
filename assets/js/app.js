const myinput = document.querySelector("#myInput");
const btn = document.querySelector(".myBtn");
const number = document.querySelector(".number");
const maxscore = document.querySelector(".maxscore");
const highscore = document.querySelector(".highscore");
const trybtn = document.querySelector(".trybtn");
let randomNumb =  Math.floor(Math.random() * 20)
console.log(randomNumb);


let scores = 20

btn.addEventListener("click", function(){
    if( parseInt(myinput.value)  === randomNumb){
        number.innerHTML = `
    <p>It's true, live it.</p>
        `
        highscore.innerHTML = `
    <img class="itachi" src="./assets/img/Itachi-1.jpg" alt="">
        `
    } else if(myinput.value === ""){
        number.innerHTML = `
    <p>Input is empty, like you.</p>
        ` 
    } else if(parseInt(myinput.value) > randomNumb){
        number.innerHTML = `
        <p>Wrong, go down !</p>
            `
            highscore.innerHTML = `
            <img class="itachi2" src="./assets/img/Itahi-2.jpg" alt="">
            `
    } else if(parseInt(myinput.value) < randomNumb){
        number.innerHTML = `
        <p>Wrong, go up !</p>
            `
            highscore.innerHTML = `
            <img class="itachi2" src="./css/img/Itahi-2.jpg" alt="">
            `
    } 
});

trybtn.addEventListener("click", function(){
    location.reload()
});