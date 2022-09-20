var num1 = Math.ceil(Math.random()*10);
var num2 = Math.ceil(Math.random()*10);
var question = document.getElementById('question');
const form = document.getElementById("form");
const input = document.getElementById("input");

const scoreEle = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}

scoreEle.innerText = `score: ${score}`

question.innerText = `what is ${num1} multiply by ${num2}?`;

var correctionAns = num1 * num2;
form.addEventListener("submit", () => {
    const userAns = +input.value;
    console.log(userAns, typeof userAns);
    if(userAns === correctionAns){
        score++;
        updateLocalStorage()
    } else {
        score--;
        updateLocalStorage()
    }
});

function updateLocalStorage(){
    localStorage.setItem('score', JSON.stringify(score))
}


// console.log(num1);