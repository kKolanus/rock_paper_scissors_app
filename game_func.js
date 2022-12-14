const audio = new Audio('oklaski.mp3');

const btnYes = document.querySelector(".button-yes");
const btnNo = document.querySelector(".button-no");
const btnRock = document.querySelector(".button-rock");
const btnPaper = document.querySelector(".button-paper");
const btnScissors = document.querySelector(".button-scissors");
const btnSureNo = document.querySelector(".button-sure-no");
const btnSureYes = document.querySelector(".button-sure-yes");

btnYes.addEventListener("click", function() {
    containerYes_Out();
    containerChoice_In();
    questionChange();
    computerChoice_Empty();
    anwser_Empty();
});


btnNo.addEventListener("click", function() {
    sureGame();
    questionChangeSure ();
});

btnSureYes.addEventListener("click", function() {
    containerYes_Out();
    containerChoice_In();
    questionChange();
    computerChoice_Empty();
    anwser_Empty();
    containerSureOut ();
});

btnSureNo.addEventListener("click", function() {
    containerYes_Out();
    computerChoice_Empty();
    thanksForPlaying();
    containerSureOut ();
});

    btnRock.addEventListener("click", function(){
                if (mix() === 0){
                    showRock();
                    showDraw();
                    playAgain();
                    audioWin();
                }
                if (mix() === 1){
                    showPaper();
                    showLose();
                    addPoint(".scoreComputer");
                    playAgain();
                    audioWin();
                }
                if (mix() === 2){
                    showScissors();
                    showWin();
                    addPoint(".scorePlayer");
                    playAgain();
                    audioWin();
                }
    });

    btnPaper.addEventListener("click", function(){
                if (mix() === 0){
                    showRock();
                    showWin();
                    addPoint(".scorePlayer");
                    playAgain();
                    audioWin();
                }
                if (mix() === 1){
                    showPaper();
                    showDraw();
                    playAgain();
                    audioWin();
                }
                if (mix() === 2){
                    showScissors();
                    showLose();
                    addPoint(".scoreComputer");
                    playAgain();
                    audioWin();
                }
    });


    btnScissors.addEventListener("click", function(){
                if (mix() === 0){
                    showRock();
                    showLose();
                    addPoint(".scoreComputer");
                    playAgain();
                    audioWin();
                }
                if (mix() === 1){
                    showPaper();
                    showWin();
                    addPoint(".scorePlayer");
                    playAgain();
                    audioWin();
                }
                if (mix() === 2){
                    showScissors();
                    showDraw();
                    playAgain();
                    audioWin();
                }
    });

const addPoint = (player) => {
    let scorePlayer = document.querySelector(player);
    let y = Number(scorePlayer.innerText);
    y++;
    scorePlayer.innerHTML = `${y}`;
};

const audioWin = () => {
    let scoreComputer = document.querySelector(".scoreComputer");
    let x = Number(scoreComputer.innerText);
    let scorePlayer = document.querySelector(".scorePlayer");
    let y = Number(scorePlayer.innerText);
    if (y % 10 == 0 && y>x) {
    audio.play();
    }
};

const mix = () => {
    return Math.floor(Math.random() * 3);
};

const playAgain = () =>{
    const question = document.querySelector(".question");
    question.innerHTML = `<h1>Gramy Jeszcze raz?</h1>`;
    const containerYes = document.querySelector(".grid-container-yes");
    containerYes.style.display = "grid";
    const containerChoice = document.querySelector(".grid-container-choice");
    containerChoice.style.display = "none";
};

const containerSureOut = () => {
    const containerSure = document.querySelector(".grid-container-sure");
    containerSure.style.display = "none";
};

const showRock = () => {
    const containerComputer = document.querySelector(".grid-computer-choice");
    containerComputer.innerHTML = `<button class="button-rock"><img src="game_images/rock.png" alt="rock" width="120px"></button>`;
};

const showPaper = () => {
    const containerComputer = document.querySelector(".grid-computer-choice");
    containerComputer.innerHTML = `<button class="button-paper"><img src="game_images/paper.png" alt="paper" width="120px"></button>`;
};

const showScissors = () => {
    const containerComputer = document.querySelector(".grid-computer-choice");
    containerComputer.innerHTML = `<button class="button-scissors"><img src="game_images/scissors.png" alt="paper" width="120px"></button>`;
};

const showWin = () => {
    const anwser = document.querySelector(".anwser");
    anwser.innerHTML = `<h1>Wybra??e?? no??yce: Wygra??e??! Gratulacja! <br><br> Komputer wybra??:</h1>`;
};

const showLose = () => {
    const anwser = document.querySelector(".anwser");
    anwser.innerHTML = `<h1>Wybra??e?? no??yce: Przegranko :( <br><br> Komputer wybra??:</h1>`;
};

const showDraw = () => {
    const anwser = document.querySelector(".anwser");
    anwser.innerHTML = `<h1>Wybra??e?? no??yce: Lepszy remis itd. <br><br> Komputer wybra??:</h1>`;
};

const containerYes_Out = () => {
    const containerYes = document.querySelector(".grid-container-yes");
    containerYes.style.display = "none";
};

const containerChoice_In = () => {
    const containerChoice = document.querySelector(".grid-container-choice");
    containerChoice.style.display = "grid";
};

const questionChange = () => {
    const question = document.querySelector(".question");
    question.innerHTML = `<h1>Wybieraj - kamie??, papier czy no??yce?</h1>`;
};

const questionChangeSure = () => {
    const question = document.querySelector(".question");
    question.innerHTML = `<h1>Jeste?? pewien? Stracisz ca??y dotychczasowy wynik!</h1>`;
};

const thanksForPlaying = () => {
    const question = document.querySelector(".question");
    question.innerHTML = `<h1>Dzi??ki za gr??, do nast??pnego razu!</h1>`;
};

const computerChoice_Empty = () => {
    const containerComputer = document.querySelector(".grid-computer-choice");
    containerComputer.innerHTML = ``;
};

const anwser_Empty = () => {
    const anwser = document.querySelector(".anwser");
    anwser.innerHTML = ``;
};

const sureGame = () => {
    const containerSure = document.querySelector(".grid-container-sure");
    containerSure.style.display = "grid";
    containerYes_Out();
    computerChoice_Empty();
    anwser_Empty();
};