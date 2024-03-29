export const btnAgreeYes = document.getElementById('btn-yes');
export const btnAgreeNo = document.getElementById('btn-no');
export const yesInfo = document.querySelector('.yes-info');

export const userName = document.getElementById('username');
export const userGender = document.getElementById('gender');
export const userLevel = document.getElementById('level');
export const yesBtn = document.getElementById('submit-user-info');
export const noName = document.getElementById('no-name');

export let challengeUser = document.getElementById('challenge-user');
export let challengeGender = document.getElementById('challenge-gender');
export let challengeLevel = document.getElementById('challenge-level');

export const containerBrave = document.querySelector('.container-brave');

export const anyChallengerHead = document.getElementById('h2');
export const braveBtn = document.querySelector('.brave-btn');
export const containerElementShow = document.querySelector('.container-element-show');
export const elementColumnContainer = document.querySelector('.element-column-container');
export const containerScore = document.querySelector('.container-score');

export const waitingForChallenger = document.getElementById('waiting');

export const containerInputInteractions = document.querySelector('.container-input-interactions');
export const containerUserInfo = document.querySelector('.container-user-info');

export const gameStartSection = document.querySelector('.game-start-section');
export const gameStart = document.querySelector('.game-start');

export const btnGo = document.getElementById('btn-go');
export const userSelectElement = document.getElementById('user-select-element');
export const userSide = document.querySelector('.user-side');
export const btnGoBackDiv = document.querySelector('.redo-btn');

export const cpuSideRender = document.querySelector('.cpu-side');
export const userSideLeft = document.querySelector('.user-side-left');
export const userSideLeftImage = document.querySelector('.user-side-left-image');
export const processingBar = document.querySelector('.processing-bar');

export const emElement = document.createElement('em');
export const rpsContainer = ["rock", "paper", "scissors"];

export const cpuChallenger = [
    {
        nameCPU: "Mary Asare",
        genderCPU: "Female",
        levelCPU: "Beginner",
    },
    {
        nameCPU: "Razak Kassim",
        genderCPU: "Male",
        levelCPU: "Intermediate",
    },
    {
        nameCPU: "Chris CodeBOLT",
        genderCPU: "Male",
        levelCPU: "Advanced",
    },
]

//intermediate level
export let challengeUsernameCPU = document.getElementById('challenger-username-cpu');
export let challengeGenderCPU = document.getElementById('challenger-usergender-cpu');
export let challengeLevelCPU = document.getElementById('challenger-userlevel-cpu');


export const gameStartSectionIntermediate = document.querySelector('.game-start-section-intermediate');
export const gameStartIntermediate = document.querySelector('.game-start-intermediate');
export const userSideIntermediate = document.querySelector('.user-side-intermediate');
export const userSideLeftIntermediate = document.querySelector('.user-side-left-intermediate');
export const userSideLeftImageIntermediate = document.querySelector('.user-side-left-image-intermediate');
export const cpuSideRenderIntermediate = document.querySelector('.cpu-side-intermediate');
export const gameEndIntermediate = document.querySelector('.game-end-intermediate');

export const intermediateBtn = document.getElementById('intermediate-btn');


export let userInfoChallenge = [];

export let userScore = document.getElementById('userScore');
export let cpuScore = document.getElementById('cpuScore');
export let roundCount = document.getElementById('round-count');
export let roundCountMainRound = document.querySelector('.round-count');
export let roundCountMain = document.querySelector('.round-count-main');
// export let gameRunner = 2;

export const gameEnd = document.querySelector('.game-end');



//advanced level


export const gameStartSectionAdvanced = document.querySelector('.game-start-section-advanced');
export const gameStartAdvanced = document.querySelector('.game-start-advanced');
export const userSideAdvanced = document.querySelector('.user-side-advanced');
export const userSideLeftAdvanced = document.querySelector('.user-side-left-advanced');
export const userSideLeftImageAdvanced = document.querySelector('.user-side-left-image-advanced');
export const cpuSideRenderAdvanced = document.querySelector('.cpu-side-advanced');
export const gameEndAdvanced = document.querySelector('.game-end-advanced');

export const advancedBtn = document.getElementById('advanced-btn');
