let hands = document.querySelector(".hands");
let lines = document.querySelector(".lines");
let contest = document.querySelector(".contest");
const nextBtn = document.getElementById("next-btn");
const wonGame = document.querySelector(".won-game");
const rulesModal = document.getElementById("rules-container");
const rulesBtn = document.querySelector(".rules-btn");
const closeModalBtn = document.getElementById("close");
const resultBoard = document.getElementById("resultarea");
const playBoard = document.getElementById("gamearea");



const handOptions = {
    "rock": "rock.png",
    "paper": "paper.png",
    "scissors": "scissor.png"
}



let SCORE = parseInt(localStorage.getItem('SCORE'), 10) || 0;
let compSCORE = parseInt(localStorage.getItem('compSCORE'), 10) || 0;


const setScore = (score) => {
    SCORE = score;
    document.querySelector(".your-score span").innerText = score;

    
    localStorage.setItem('SCORE', SCORE);
}


const setcompScore = (compscore) => {
    compSCORE = compscore;
    document.querySelector(".comp-score span").innerText = compscore;

    
    localStorage.setItem('compSCORE', compSCORE);
}


setScore(SCORE);
setcompScore(compSCORE);


const pickUserHand = (hand) => {

    //hide the hand page
    hands.style.display = "none";
    lines.style.display = "none";

    //show the contest page
    contest.style.display = "flex";

    //next button display
    nextBtn.style.display = "none";

    //set the user picked
    document.getElementById("userPickImage").src = handOptions[hand];
    // let up = document.getElementById("userPickImage");
    let up = document.querySelector(".handImageContainer");
    if (hand === "rock") {
        up.style.border = "16px solid #0074B6";
        up.style.borderRadius = "50%";
        up.style.width = "140px";
        up.style.height = "140px";
        up.style.background = "#ffffff";
    }
    else if (hand === "paper") {
        up.style.border = "16px solid #FFA943";
        up.style.borderRadius = "50%";
        up.style.width = "140px";
        up.style.height = "140px";
        up.style.background = "#ffffff";
    }
    else {
        up.style.border = "16px solid #BD00FF";
        up.style.borderRadius = "50%";
        up.style.width = "140px";
        up.style.height = "140px";
        up.style.background = "#ffffff";
    }


    let cpHand = pickComputerHand();
    referee(hand, cpHand);
}

const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"]
    let cpHand = hands[Math.floor(Math.random() * 3)]

    //set the user picked
    document.getElementById("computerPickImage").src = handOptions[cpHand];
    let cp = document.querySelector(".handImageContainer1");
    if (cpHand === "rock") {
        cp.style.border = "16px solid #0074B6";
        cp.style.borderRadius = "50%";
        cp.style.width = "140px";
        cp.style.height = "140px";
        cp.style.background = "#ffffff";
    }
    else if (cpHand === "paper") {
        cp.style.border = "16px solid #FFA943";
        cp.style.borderRadius = "50%";
        cp.style.width = "140px";
        cp.style.height = "140px";
        cp.style.background = "#ffffff";
    }
    else {
        cp.style.border = "16px solid #BD00FF";
        cp.style.borderRadius = "50%";
        cp.style.width = "140px";
        cp.style.height = "140px";
        cp.style.background = "#ffffff";
    }
    return cpHand;

}

const referee = (userHand, cpHand) => {

    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOST")
        setcompScore(compSCORE + 1);
    }
    // else if(userHand == "paper" && cpHand == "rock"){
    //     setDecision("YOU WIN")
    //     setScore(SCORE + 1)
    // }
    if (userHand == "paper" && cpHand == "rock") {
        nextBtn.style.display = "block";
        setDecision("YOU WIN");
        setScore(SCORE + 1);
    }
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("TIE UP");
    }
    if (userHand == "rock" && cpHand == "scissors") {
        nextBtn.style.display = "block";
        setDecision("YOU WIN");
        setScore(SCORE + 1);
    }
    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOST");
        setcompScore(compSCORE + 1);
    }
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("TIE UP");
    }
    if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("TIE UP");
    }
    if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOST");
        setcompScore(compSCORE + 1);
    }
    if (userHand == "scissors" && cpHand == "paper") {
        nextBtn.style.display = "block";
        setDecision("YOU WIN");
        setScore(SCORE + 1);
    }
}

const restartGame = () => {
    
    hands.style.display = "block";
    
    lines.style.display = "block";

    //show the contest page
    
    contest.style.display = "none";


    //next button display none
    
    nextBtn.style.display = "none";

    //won page display none
    
    wonGame.style.display = "none";
}

const setDecision = (decision) => {
    
    document.querySelector(".decision h1").innerText = decision;

}



rulesBtn.addEventListener("click", () => {
    rulesModal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    rulesModal.style.display = "none";
});


nextBtn.addEventListener("click", () => {
    
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    let lines = document.querySelector(".lines");
    lines.style.display = "none";
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
    wonGame.style.display = "flex";
    rulesBtn.style.display = "block";

});


