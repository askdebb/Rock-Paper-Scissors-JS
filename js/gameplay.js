import {userInfoChallenge,
        userSideLeft,
        userSideLeftImage,
        rpsContainer,
        cpuSideRender,
        processingBar,
        roundCountMainRound,
        roundCount,
        roundCountMain,
        gameStart,
        gameEnd,
        elementColumnContainer,
        containerUserInfo,
        challengeUser,
        challengeGender,
        challengeLevel,
        containerScore,
        waitingForChallenger,
        gameStartSection,
        containerBrave,
        braveBtn,
        anyChallengerHead,
        yesInfo,
        containerInputInteractions,
        containerElementShow,
        userSideLeftIntermediate,
        userSideLeftImageIntermediate,
        cpuSideRenderIntermediate,
        gameStartIntermediate,
        gameEndIntermediate,
        challengeLevelCPU,
        challengeUsernameCPU,
        challengeGenderCPU,
        gameStartSectionIntermediate,
        userSideLeftAdvanced,
        userSideLeftImageAdvanced,
        cpuSideRenderAdvanced,
        gameStartAdvanced,
        gameEndAdvanced,
        gameStartSectionAdvanced,
        advancedBtn

    } from "./declarations.js";

import { gameIntestineBeginner } from "./beginnerLevel.js";
import { gameIntestineIntermediate } from "./intermediateLevel.js";
import { advanced, beginner, changeBackToNo, intermediate } from "./ready4challenge.js";
import { gameIntestineAdvanced } from "./advancedLevel.js";


export function gameSectionStartBeginner(){

    userInfoChallenge.forEach((itemOFUserInfo) => {
        if(itemOFUserInfo.Level === "Beginner"){
           takeOver("beginner", 4000);  
        }
        else if(itemOFUserInfo.Level === "Intermediate"){
            takeOver("intermediate", 10000);
        }
        else if(itemOFUserInfo.Level === "Advanced"){
            takeOver("advanced", 9000);
        }
    })
  
}

function takeOver(level, duration){
    braveBtn.style.display = "none";

    anyChallengerHead.style.display = "none";
    waitingForChallenger.style.display = "none";
    yesInfo.style.display = "none";
    containerInputInteractions.style.width= '96%';

    const divForGif = document.createElement('div');
    divForGif.innerHTML = "<img src = './images/loading.gif' height='100%'/>";
    containerInputInteractions.appendChild(divForGif);
    
    const beginnerSound = new Audio("./sounds/"+level+".mp3");
    beginnerSound.play();

    
    elementColumnContainer.style.display = "none";
   
    containerUserInfo.style.display = 'flex';
    containerScore.style.display = 'flex';

    containerUserInfo.style.justifyContent = 'space-around';
    containerScore.style.justifyContent = 'space-around';

    containerElementShow.style.display = 'block';
    containerBrave.style.display = 'block';
    containerBrave.style.padding = '0.5rem 0';
   
    containerBrave.appendChild(containerScore);
    containerElementShow.appendChild(containerUserInfo);

    setTimeout(function (){
        divForGif.style.display = "none";
        document.querySelector('body').style.backgroundColor = '#E5E5E5';
        gameStartSectionRender();
    }, duration);

}

export function gameStartSectionRender(){
    userInfoChallenge.forEach((itemOFUserInfo) => {

        switch (itemOFUserInfo.Level) {
            case "Beginner":
                gameIntestineBeginner();
                break;
            case "Intermediate":
                gameIntestineIntermediate(); 
                break;
            case "Advanced":
                const labelInstruction = document.getElementById('user-label-description');
                labelInstruction.innerHTML = "Click to choose element: "
                gameIntestineAdvanced();
                break;
        
            default:
                console.log("You choose sthg different");
                break;
        }
    
       });
  
}


export function gameStartsNow(userSelectValue) {
      
    userSideLeft.style.display = 'none';
    userSideLeftImage.style.display = 'inline';

    const imgUser = document.createElement('img');
    const userValue = "./images/" + userSelectValue + ".png";
    imgUser.src = userValue;
    userSideLeftImage.appendChild(imgUser);

    if(userSelectValue === 'rock'){
        const userRockSound = new Audio("./sounds/rock.mp3");
        userRockSound.play();

    } else if (userSelectValue === 'paper'){
        const userPaperSound = new Audio("./sounds/paper.mp3");
        userPaperSound.play();

    }else {
        const userScissorsSound = new Audio("./sounds/scissors.mp3");
        userScissorsSound.play();

    }

    const cpuElement = rpsContainer[Math.floor(Math.random() * 3)];
    const cpuSelect = "./images/" + cpuElement +".png";
    const cpu = cpuSelect;  
    cpuSideRender.innerHTML = "<img src = './images/thinking.png' width=100% height=100% />";

    setTimeout(function() {
        cpuSideRender.innerHTML = " ";
        const imgCpu = document.createElement('img');
        
        imgCpu.src = cpu;
        cpuSideRender.style.height = '20%';
        cpuSideRender.style.width = '20%';
        cpuSideRender.appendChild(imgCpu);
        processingBar.style.display = 'block';

        if(cpuElement === 'rock'){
            const cpuRockSound = new Audio("./sounds/rock.mp3");
            cpuRockSound.play();
    
        } else if (cpuElement === 'paper'){
            const cpuPaperSound = new Audio("./sounds/paper.mp3");
            cpuPaperSound.play();
    
        }else {
            const cpuScissorsSound = new Audio("./sounds/scissors.mp3");
            cpuScissorsSound.play();
        }

    }, 2000);
    
    
    setTimeout(function() {
        if((userSelectValue === 'rock' &&  cpuElement === 'rock') || (userSelectValue === 'paper' &&  cpuElement === 'paper') || (userSelectValue === 'scissors' &&  cpuElement === 'scissors')){
            processingBar.innerText = "Draw";
            processingBar.style.backgroundColor = "blue";
            const drawSound = new Audio("./sounds/draw.mp3");
            drawSound.play();
            setTimeout(function() {
                reStageGameNextRound();
            },3000);
        }
        else if(userSelectValue === 'rock' &&  cpuElement === 'paper'){
            const cpuWinsSound = new Audio("./sounds/paperfinal.mp3");
            cpuWinsSound.play();
            setTimeout(() => {
                cpuWinsEachRound();
            }, 6000);
        }
        else if(userSelectValue === 'paper' &&  cpuElement === 'scissors'){
            const cpuWinsSound = new Audio("./sounds/scissorsfinal.mp3");
            cpuWinsSound.play();
            setTimeout(() => {
                cpuWinsEachRound();
            }, 5000);
        }
        else if(userSelectValue === 'scissors' &&  cpuElement === 'rock'){
            const cpuWinsSound = new Audio("./sounds/rockfinal.mp3");
            cpuWinsSound.play();
            setTimeout(() => {
                cpuWinsEachRound();
            }, 6000);
            
        }
        else if(userSelectValue === 'paper' &&  cpuElement === 'rock'){
            const userWinsSound = new Audio("./sounds/paperfinal.mp3");
            userWinsSound.play();
            setTimeout(() => {
                userWinsEachRound();
            }, 6000);
        }
        else if(userSelectValue === 'scissors' &&  cpuElement === 'paper'){
            const userWinsSound = new Audio("./sounds/scissorsfinal.mp3");
            userWinsSound.play();
            setTimeout(() => {
                userWinsEachRound();
            }, 5000);
        }
        else if(userSelectValue === 'rock' &&  cpuElement === 'scissors'){
            const userWinsSound = new Audio("./sounds/rockfinal.mp3");
            userWinsSound.play();
            setTimeout(() => {
                userWinsEachRound();
            }, 6000);
            
        }

    }, 5000);
     
    
    
    // console.log("cpu select: " + cpu);
    // console.log("user select: "+userValue);
}


let gameRunner = 2;
function reStageGameNextRound(){
    
    if(gameRunner < 1){
        roundCountMainRound.style.display = 'none';
        roundCountMain.style.display = 'flex';
        roundCountMain.innerText = "Game Over";
        roundCountMain.style.color = "red";
        roundCountMain.style.fontWeight = "600";
        gameStart.style.display = "none";
        
        if(userScore.innerText > cpuScore.innerText){
            userInfoChallenge.forEach((userData) => {
                const userNameData = userData.Username;
                gameEndStat((userNameData + " is the champion!"), 'green');
             })
            const userWinnerSound = new Audio("./sounds/userwinner.mp3");
            userWinnerSound.play();
            document.querySelector('body').style.backgroundColor = "#5dc7e7";

        } else if (userScore.innerText < cpuScore.innerText){
            beginner.forEach((cpuData) => {
                const cpuNameData = cpuData.nameCPU
                gameEndStat(cpuNameData + " is the champion and you LOST!!",  '#946d09');
            })
            const cpuWinnerSound = new Audio("./sounds/ending-laughter_loser-beginner.mp3");
            cpuWinnerSound.play();
            document.querySelector('body').style.backgroundColor = "#800303";

        }
        else {
            gameEndStat("A tie!", "blue");
            const noWinnerSound = new Audio("./sounds/tie.mp3");
            noWinnerSound.play();
        }

    } else {
        userSideLeft.style.display = 'flex';
        userSideLeftImage.innerHTML = " ";
        userSideLeftImage.style.display = 'none';
        gameStartSectionRender();
        cpuSideRender.innerHTML = "<img src = './images/marry-waiting.png' width=100% height=100% />"; 
        processingBar.style.display = 'none';
        processingBar.innerText = 'processing winner...';
        processingBar.style.backgroundColor = 'red';
        roundCount.innerText++;
        gameRunner --;
        // console.log("game runner remains: "+gameRunner);
    } 

    
// console.log("now round: "+roundCount.innerText);
// console.log("game runner now: "+gameRunner);
}

export function userWinsEachRound(){
    userInfoChallenge.forEach((userData) => {
       const userNameData = userData.Username;
       processingBar.innerText = userNameData + " wins!";
    })
    userScore.innerText++;
    processingBar.style.backgroundColor = "green";

        setTimeout(function() {
            reStageGameNextRound();
        },2000);
   
}

export function cpuWinsEachRound(){
    beginner.forEach((cpuItemData) => {
        const cpuName = cpuItemData.nameCPU;
        processingBar.innerText = cpuName + " wins!";
    })
    cpuScore.innerText++;
    processingBar.style.backgroundColor = "#daa520";
  
        setTimeout(function() {
            reStageGameNextRound();
        },2000);
   
    
}

function gameEndStat(outcomeStat, backGroundColor){
    gameEnd.style.display = 'block';
    gameEnd.innerText = outcomeStat;
    gameEnd.style.backgroundColor = backGroundColor;
    gameEnd.style.textAlign = "center";
    gameEnd.style.color = '#fff';
    gameEnd.style.padding = '5px 10px';
    gameEnd.style.borderRadius = '5px';
    
    processingBar.style.display = "none";

    setTimeout(function(){
        const btnRestartYes = document.createElement('button');
        btnRestartYes.innerText = "Yes";
        btnRestartYes.style.backgroundColor = "#fff";
        btnRestartYes.style.color = backGroundColor;
        btnRestartYes.style.padding = "5px 6px";
        btnRestartYes.style.margin = "5px 15px";
        btnRestartYes.onclick = restartGame;
        btnRestartYes.style.cursor = 'pointer';
        btnRestartYes.style.border = 'none';
        btnRestartYes.style.borderRadius = '3px';

        const btnRestartNo = document.createElement('button');
        btnRestartNo.innerText = 'No';
        btnRestartNo.style.backgroundColor = "#fff";
        btnRestartNo.style.color = 'red';
        btnRestartNo.style.padding = "5px 6px";
        btnRestartNo.style.margin = "5px 15px";
        btnRestartNo.onclick = endGame;
        btnRestartNo.style.cursor = 'pointer';
        btnRestartNo.style.border = 'none';
        btnRestartNo.style.borderRadius = '3px';


        btnRestartYes.addEventListener("mouseover", function(){
            this.style.fontWeight = '600';
        });
        btnRestartNo.addEventListener("mouseover", function(){
            this.style.fontWeight = '600';
        });

        gameEnd.innerText = "Restart?";
        gameEnd.appendChild(btnRestartYes);
        gameEnd.appendChild(btnRestartNo);

    },4000);

}

function restartGame(){
    gameRunner = 2;
    userScore.innerText= 0;
    cpuScore.innerText= 0;
    roundCount.innerText = 1;

    roundCountMainRound.style.display = "flex";
    roundCountMain.style.display = "none";
    processingBar.innerText = "processing winner...";
    processingBar.style.backgroundColor = 'red';

    document.querySelector('body').style.backgroundColor = '#E5E5E5';
    gameEnd.style.display = "none";
    userSideLeft.style.display = 'flex';

    userSideLeftImage.innerHTML = " ";
    // userSelectElement.innerText = "Choose ...";
    
    userSideLeftImage.style.display = 'none';
    cpuSideRender.innerHTML = "<img src = './images/marry-waiting.png' width=100% height=100% />"; 
    gameSectionStartBeginner(); 
}

function endGame(){
    document.querySelector('body').style.backgroundColor = '#E5E5E5';

    gameRunner = 2;
    userScore.innerText= 0;
    cpuScore.innerText= 0;
    roundCount.innerText = 1;

    roundCountMainRound.style.display = "flex";
    roundCountMain.style.display = "none";

    userInfoChallenge.length = 0;
    gameEnd.style.display = "none";

    // userSelectElement.innerText = "Choose ...";
    elementColumnContainer.style.display = "flex";
    containerUserInfo.style.display = "none";

    challengeUser.innerText = "";
    challengeGender.innerText = "";
    challengeLevel.innerText = "";

    challengeUsernameCPU.innerText = "";
    challengeGenderCPU.innerText = "";
    challengeLevelCPU.innerText = "";
   
    containerScore.style.display = "none";
    waitingForChallenger.style.display = "block";
    gameStartSection.style.display = "none";

    containerBrave.style.display = "flex";
    braveBtn.style.display = "block";
    anyChallengerHead.style.display = "block";

    braveBtn.style.marginLeft = "20px";
    anyChallengerHead.style.marginLeft = "20px";
    yesInfo.style.display = "none";

    processingBar.style.display = 'none';
    processingBar.innerText = "processing winner...";
    processingBar.style.backgroundColor = 'red';


    // gameEnd.style.display = "none";
    userSideLeft.style.display = 'flex';

    userSideLeftImage.innerHTML = " ";
    
    userSideLeftImage.style.display = 'none';
    // gameSectionStartBeginner(); 
    cpuSideRender.innerHTML = "<img src = './images/marry-waiting.png' width=100% height=100% />"; 
    changeBackToNo();
}


// intermediate level gameplay
export function gameStartsNowIntermediate(userSelectValue) {
    document.querySelector('body').style.backgroundColor = "#661b70";

    userSideLeftIntermediate.style.display = 'none';
    userSideLeftImageIntermediate.style.display = 'inline';

    const imgUser = document.createElement('img');
    const userValue = "./images/" + userSelectValue + ".png";
    imgUser.src = userValue;
    userSideLeftImageIntermediate.appendChild(imgUser);

    if(userSelectValue === 'rock'){
        const userRockSound = new Audio("./sounds/rock.mp3");
        userRockSound.play();

    } else if (userSelectValue === 'paper'){
        const userPaperSound = new Audio("./sounds/paper.mp3");
        userPaperSound.play();

    }else {
        const userScissorsSound = new Audio("./sounds/scissors.mp3");
        userScissorsSound.play();

    }

    const cpuElement = rpsContainer[Math.floor(Math.random() * 3)];
    const cpuSelect = "./images/" + cpuElement +".png";
    const cpu = cpuSelect;  
    cpuSideRenderIntermediate.innerHTML = "<img src = './images/thinking.png' width=100% height=100% />";

    setTimeout(function() {
        cpuSideRenderIntermediate.innerHTML = " ";
        const imgCpu = document.createElement('img');
        
        imgCpu.src = cpu;
        cpuSideRenderIntermediate.style.height = '20%';
        cpuSideRenderIntermediate.style.width = '20%';
        cpuSideRenderIntermediate.appendChild(imgCpu);
        processingBar.style.display = 'block';

        if(cpuElement === 'rock'){
            const cpuRockSound = new Audio("./sounds/rock.mp3");
            cpuRockSound.play();
    
        } else if (cpuElement === 'paper'){
            const cpuPaperSound = new Audio("./sounds/paper.mp3");
            cpuPaperSound.play();
    
        }else {
            const cpuScissorsSound = new Audio("./sounds/scissors.mp3");
            cpuScissorsSound.play();
        }

    }, 2000);
    
    
    setTimeout(function() {
        if((userSelectValue === 'rock' &&  cpuElement === 'rock') || (userSelectValue === 'paper' &&  cpuElement === 'paper') || (userSelectValue === 'scissors' &&  cpuElement === 'scissors')){
            processingBar.innerText = "Draw";
            processingBar.style.backgroundColor = "blue";
            const drawSound = new Audio("./sounds/draw.mp3");
            drawSound.play();
            setTimeout(function() {
                reStageGameNextRoundIntermediate();
            },3000);
        }
        else if(userSelectValue === 'rock' &&  cpuElement === 'paper'){
            const cpuWinsSound = new Audio("./sounds/paperfinal.mp3");
            cpuWinsSound.play();
            setTimeout(() => {
                cpuWinsEachRoundIntermediate();
            }, 6000);
        }
        else if(userSelectValue === 'paper' &&  cpuElement === 'scissors'){
            const cpuWinsSound = new Audio("./sounds/scissorsfinal.mp3");
            cpuWinsSound.play();
            setTimeout(() => {
                cpuWinsEachRoundIntermediate();
            }, 5000);
        }
        else if(userSelectValue === 'scissors' &&  cpuElement === 'rock'){
            const cpuWinsSound = new Audio("./sounds/rockfinal.mp3");
            cpuWinsSound.play();
            setTimeout(() => {
                cpuWinsEachRoundIntermediate();
            }, 6000);
            
        }
        else if(userSelectValue === 'paper' &&  cpuElement === 'rock'){
            const userWinsSound = new Audio("./sounds/paperfinal.mp3");
            userWinsSound.play();
            setTimeout(() => {
                userWinsEachRoundIntermediate();
            }, 6000);
        }
        else if(userSelectValue === 'scissors' &&  cpuElement === 'paper'){
            const userWinsSound = new Audio("./sounds/scissorsfinal.mp3");
            userWinsSound.play();
            setTimeout(() => {
                userWinsEachRoundIntermediate();
            }, 5000);
        }
        else if(userSelectValue === 'rock' &&  cpuElement === 'scissors'){
            const userWinsSound = new Audio("./sounds/rockfinal.mp3");
            userWinsSound.play();
            setTimeout(() => {
                userWinsEachRoundIntermediate();
            }, 6000);
            
        }

    }, 5000);
     
    
    
    // console.log("cpu select: " + cpu);
    // console.log("user select: "+userValue);
}

function reStageGameNextRoundIntermediate(){
    document.querySelector('body').style.backgroundColor = "#661b70";

    if(gameRunner < 1){
        roundCountMainRound.style.display = 'none';
        roundCountMain.style.display = 'flex';
        roundCountMain.innerText = "Game Over";
        roundCountMain.style.color = "red";
        roundCountMain.style.fontWeight = "600";
        gameStartIntermediate.style.display = "none";
        
        if(userScore.innerText > cpuScore.innerText){
            userInfoChallenge.forEach((userData) => {
                const userNameData = userData.Username;
                gameEndStatIntermediate((userNameData + " is the champion!"), 'green');
             })
            const userWinnerSound = new Audio("./sounds/intermediate-winner.mp3");
            userWinnerSound.play();
            document.querySelector('body').style.backgroundColor = "#96E9C6";

        } else if (userScore.innerText < cpuScore.innerText){
            intermediate.forEach((cpuData) => {
                const intermediateUserNameData = cpuData.nameCPU;
                gameEndStatIntermediate(intermediateUserNameData + " is the champion and you LOST!!",  '#9B4444');


            })
            const cpuWinnerSound = new Audio("./sounds/ending-laughter_loser-intermediate.mp3");
            cpuWinnerSound.play();
            document.querySelector('body').style.backgroundColor = "#9B4444";

        }
        else {
            gameEndStatIntermediate("A tie!", "blue");
            const noWinnerSound = new Audio("./sounds/tie.mp3");
            noWinnerSound.play();
        }

    } else {
        userSideLeftIntermediate.style.display = 'flex';
        userSideLeftImageIntermediate.innerHTML = " ";
        userSideLeftImageIntermediate.style.display = 'none';
        gameStartSectionRender();
        cpuSideRenderIntermediate.innerHTML = "<img src = './images/marry-waiting.png' width=100% height=100% />"; 
        processingBar.style.display = 'none';
        processingBar.innerText = 'processing winner...';
        processingBar.style.backgroundColor = 'red';
        roundCount.innerText++;
        gameRunner --;
        // console.log("game runner remains: "+gameRunner);
    } 

    
// console.log("now round: "+roundCount.innerText);
// console.log("game runner now: "+gameRunner);
}

export function userWinsEachRoundIntermediate(){
    userInfoChallenge.forEach((userData) => {
       const userNameData = userData.Username;
       processingBar.innerText = userNameData + " wins!";
    })
    userScore.innerText++;
    processingBar.style.backgroundColor = "green";

        setTimeout(function() {
            reStageGameNextRoundIntermediate();
        },2000);
   
}

export function cpuWinsEachRoundIntermediate(){
    intermediate.forEach((cpuDataInformationIntermediate) => {
        const intermediateCpuData = cpuDataInformationIntermediate.nameCPU;
        processingBar.innerText = intermediateCpuData + " wins!";
    })
    cpuScore.innerText++;
    processingBar.style.backgroundColor = "#070F2B";
  
        setTimeout(function() {
            reStageGameNextRoundIntermediate();
        },2000);
   
    
}


function gameEndStatIntermediate(outcomeStat, backGroundColor){
    gameEndIntermediate.style.display = 'block';
    gameEndIntermediate.innerText = outcomeStat;
    gameEndIntermediate.style.backgroundColor = backGroundColor;
    gameEndIntermediate.style.textAlign = "center";
    gameEndIntermediate.style.color = '#fff';
    gameEndIntermediate.style.padding = "5px 10px";
    gameEndIntermediate.style.borderRadius = "4px";
    processingBar.style.display = "none";

    setTimeout(function(){
        const btnRestartYes = document.createElement('button');
        btnRestartYes.innerText = "Yes";
        btnRestartYes.style.backgroundColor = "#fff";
        btnRestartYes.style.color = backGroundColor;
        btnRestartYes.style.padding = "5px 6px";
        btnRestartYes.style.margin = "5px 15px";
        btnRestartYes.onclick = restartGameIntermediate;
        btnRestartYes.style.cursor = 'pointer';
        btnRestartYes.style.border = 'none';
        btnRestartYes.style.borderRadius = '3px';

        const btnRestartNo = document.createElement('button');
        btnRestartNo.innerText = 'No';
        btnRestartNo.style.backgroundColor = "#fff";
        btnRestartNo.style.color = 'red';
        btnRestartNo.style.padding = "5px 6px";
        btnRestartNo.style.margin = "5px 15px";
        btnRestartNo.onclick = endGameIntermediate;
        btnRestartNo.style.cursor = 'pointer';
        btnRestartNo.style.border = 'none';
        btnRestartNo.style.borderRadius = '3px';


        btnRestartYes.addEventListener("mouseover", function(){
            this.style.fontWeight = '600';
        });
        btnRestartNo.addEventListener("mouseover", function(){
            this.style.fontWeight = '600';
        });

        gameEndIntermediate.innerText = "Restart?";
        gameEndIntermediate.appendChild(btnRestartYes);
        gameEndIntermediate.appendChild(btnRestartNo);

    },4000);

}

function restartGameIntermediate(){
    gameRunner = 2;
    userScore.innerText= 0;
    cpuScore.innerText= 0;
    roundCount.innerText = 1;

    roundCountMainRound.style.display = "flex";
    roundCountMain.style.display = "none";
    processingBar.innerText = "processing winner...";
    processingBar.style.backgroundColor = 'red';

    document.querySelector('body').style.backgroundColor = "#661b70";

    gameEndIntermediate.style.display = "none";
    userSideLeftIntermediate.style.display = 'flex';

    userSideLeftImageIntermediate.innerHTML = " ";
    // userSelectElement.innerText = "Choose ...";
    
    userSideLeftImageIntermediate.style.display = 'none';
    cpuSideRenderIntermediate.innerHTML = "<img src = './images/marry-waiting.png' width=100% height=100% />"; 
    gameSectionStartBeginner(); 
}

function endGameIntermediate(){
    document.querySelector('body').style.backgroundColor = '#E5E5E5';

    gameRunner = 2;
    userScore.innerText= 0;
    cpuScore.innerText= 0;
    roundCount.innerText = 1;

    roundCountMainRound.style.display = "flex";
    roundCountMain.style.display = "none";

    userInfoChallenge.length = 0;
    gameEndIntermediate.style.display = "none";

    // userSelectElement.innerText = "Choose ...";
    elementColumnContainer.style.display = "flex";
    containerUserInfo.style.display = "none";

    challengeUser.innerText = "";
    challengeGender.innerText = "";
    challengeLevel.innerText = "";

    challengeUsernameCPU.innerText = "";
    challengeGenderCPU.innerText = "";
    challengeLevelCPU.innerText = "";
   
    containerBrave.style.margin = '0';
    containerBrave.style.border = "none";
    containerBrave.style.borderRadius = "0";

    document.querySelector('footer').style.marginTop = "0";


    containerScore.style.display = "none";
    waitingForChallenger.style.display = "block";
    gameStartSectionIntermediate.style.display = "none";

    containerBrave.style.display = "flex";
    braveBtn.style.display = "block";
    anyChallengerHead.style.display = "block";

    braveBtn.style.marginLeft = "20px";
    anyChallengerHead.style.marginLeft = "20px";
    yesInfo.style.display = "none";

    processingBar.style.display = 'none';
    processingBar.innerText = "processing winner...";
    processingBar.style.backgroundColor = 'red';


    // gameEnd.style.display = "none";
    userSideLeftIntermediate.style.display = 'flex';

    userSideLeftImageIntermediate.innerHTML = " ";
    
    userSideLeftImageIntermediate.style.display = 'none';
    // gameSectionStartBeginner(); 
    cpuSideRenderIntermediate.innerHTML = "<img src = './images/marry-waiting.png' width=100% height=100% />"; 
    changeBackToNo();
}



// advanced level gameplay

advancedBtn.addEventListener("click", function() {
    let magicNumber = Math.floor(Math.random() * 3);
    // console.log("magic number for user to use is: "+ magicNumber);
    
        let userSelectValue = rpsContainer[magicNumber];
        // console.log("value of magic number is: "+userSelectValue);
        document.querySelector('body').style.backgroundColor = "##643843";
    
        userSideLeftAdvanced.style.display = 'none';
        userSideLeftImageAdvanced.style.display = 'inline';
    
        const imgUser = document.createElement('img');
        const userValue = "./images/" + userSelectValue + ".png";
        imgUser.src = userValue;
        userSideLeftImageAdvanced.appendChild(imgUser);
    
        if(userSelectValue === 'rock'){
            const userRockSound = new Audio("./sounds/rock.mp3");
            userRockSound.play();
    
        } else if (userSelectValue === 'paper'){
            const userPaperSound = new Audio("./sounds/paper.mp3");
            userPaperSound.play();
    
        }else {
            const userScissorsSound = new Audio("./sounds/scissors.mp3");
            userScissorsSound.play();
    
        }
    
        switch (magicNumber) {
            case 0:
                const cpuElement = rpsContainer[1];
                const cpuSelect = "./images/" + cpuElement +".png";
                // const cpu = cpuSelect;  
                // console.log("cpu attack: "+cpuElement)
                cpuSideRenderAdvanced.innerHTML = "<img src = './images/thinking.png' width=100% height=100% />";
    
                setTimeout(function() {
            
                    cpuSideRenderAdvanced.innerHTML = " ";
            
                    const imgCpu = document.createElement('img');
                    
                    imgCpu.src = cpuSelect;
                    cpuSideRenderAdvanced.appendChild(imgCpu);
                    
                    cpuSideRenderAdvanced.style.height = '20%';
                    cpuSideRenderAdvanced.style.width = '20%';
                    
                    processingBar.style.display = 'block';
            
                    processingBar.style.marginTop = "5px";
                    processingBar.style.marginBottom = "10px";
                    processingBar.style.borderRadius = "15px";
            
            
            
                    if(cpuElement === 'rock'){
                        const cpuRockSound = new Audio("./sounds/rock.mp3");
                        cpuRockSound.play();
                
                    } else if (cpuElement === 'paper'){
                        const cpuPaperSound = new Audio("./sounds/paper.mp3");
                        cpuPaperSound.play();
                
                    }else {
                        const cpuScissorsSound = new Audio("./sounds/scissors.mp3");
                        cpuScissorsSound.play();
                    }
            
                }, 4000);  
                
                setTimeout(function() {
                    if((userSelectValue === 'rock' && cpuElement === 'rock') || (userSelectValue === 'paper' && cpuElement === 'paper') || (userSelectValue === 'scissors' &&  cpuElement === 'scissors')){
                        processingBar.innerText = "Draw";
                        processingBar.style.backgroundColor = "blue";
                        const drawSound = new Audio("./sounds/draw.mp3");
                        drawSound.play();
                        setTimeout(function() {
                            reStageGameNextRoundAdvanced();
                        },3000);
                    }
                    else if(userSelectValue === 'rock' &&  cpuElement === 'paper'){
                        const cpuWinsSound = new Audio("./sounds/paperfinal.mp3");
                        cpuWinsSound.play();
                        setTimeout(() => {
                            cpuWinsEachRoundAdvanced();
                        }, 6000);
                    }
                    else if(userSelectValue === 'paper' &&  cpuElement === 'scissors'){
                        const cpuWinsSound = new Audio("./sounds/scissorsfinal.mp3");
                        cpuWinsSound.play();
                        setTimeout(() => {
                            cpuWinsEachRoundAdvanced();
                        }, 5000);
                    }
                    else if(userSelectValue === 'scissors' &&  cpuElement === 'rock'){
                        const cpuWinsSound = new Audio("./sounds/rockfinal.mp3");
                        cpuWinsSound.play();
                        setTimeout(() => {
                            cpuWinsEachRoundAdvanced();
                        }, 6000);
                        
                    }
                    else if(userSelectValue === 'paper' &&  cpuElement === 'rock'){
                        const userWinsSound = new Audio("./sounds/paperfinal.mp3");
                        userWinsSound.play();
                        setTimeout(() => {
                            userWinsEachRoundAdvanced();
                        }, 6000);
                    }
                    else if(userSelectValue === 'scissors' &&  cpuElement === 'paper'){
                        const userWinsSound = new Audio("./sounds/scissorsfinal.mp3");
                        userWinsSound.play();
                        setTimeout(() => {
                            userWinsEachRoundAdvanced();
                        }, 5000);
                    }
                    else if(userSelectValue === 'rock' &&  cpuElement === 'scissors'){
                        const userWinsSound = new Audio("./sounds/rockfinal.mp3");
                        userWinsSound.play();
                        setTimeout(() => {
                            userWinsEachRoundAdvanced();
                        }, 6000);
                        
                    }
            
                }, 5000);
                
                break;
            case 1:
                const cpuElement1 = rpsContainer[2];
                const cpuSelect1 = "./images/" + cpuElement1 +".png";
                // const cpu = cpuSelect;  
                // console.log("cpu attack: "+cpuElement1)
                cpuSideRenderAdvanced.innerHTML = "<img src = './images/thinking.png' width=100% height=100% />";
    
                setTimeout(function() {
            
                    cpuSideRenderAdvanced.innerHTML = " ";
            
                    const imgCpu = document.createElement('img');
                    
                    imgCpu.src = cpuSelect1;
                    cpuSideRenderAdvanced.appendChild(imgCpu);
                    
                    cpuSideRenderAdvanced.style.height = '20%';
                    cpuSideRenderAdvanced.style.width = '20%';
                    
                    processingBar.style.display = 'block';
            
                    processingBar.style.marginTop = "5px";
                    processingBar.style.marginBottom = "10px";
                    processingBar.style.borderRadius = "15px";
            
            
            
                    if(cpuElement1 === 'rock'){
                        const cpuRockSound = new Audio("./sounds/rock.mp3");
                        cpuRockSound.play();
                
                    } else if (cpuElement1 === 'paper'){
                        const cpuPaperSound = new Audio("./sounds/paper.mp3");
                        cpuPaperSound.play();
                
                    }else {
                        const cpuScissorsSound = new Audio("./sounds/scissors.mp3");
                        cpuScissorsSound.play();
                    }
            
                }, 4000);  
                
                setTimeout(function() {
                    if((userSelectValue === 'rock' && cpuElement1 === 'rock') || (userSelectValue === 'paper' && cpuElement1 === 'paper') || (userSelectValue === 'scissors' &&  cpuElement1 === 'scissors')){
                        processingBar.innerText = "Draw";
                        processingBar.style.backgroundColor = "blue";
                        const drawSound = new Audio("./sounds/draw.mp3");
                        drawSound.play();
                        setTimeout(function() {
                            reStageGameNextRoundAdvanced();
                        },3000);
                    }
                    else if(userSelectValue === 'rock' &&  cpuElement1 === 'paper'){
                        const cpuWinsSound = new Audio("./sounds/paperfinal.mp3");
                        cpuWinsSound.play();
                        setTimeout(() => {
                            cpuWinsEachRoundAdvanced();
                        }, 6000);
                    }
                    else if(userSelectValue === 'paper' &&  cpuElement1 === 'scissors'){
                        const cpuWinsSound = new Audio("./sounds/scissorsfinal.mp3");
                        cpuWinsSound.play();
                        setTimeout(() => {
                            cpuWinsEachRoundAdvanced();
                        }, 5000);
                    }
                    else if(userSelectValue === 'scissors' &&  cpuElement1 === 'rock'){
                        const cpuWinsSound = new Audio("./sounds/rockfinal.mp3");
                        cpuWinsSound.play();
                        setTimeout(() => {
                            cpuWinsEachRoundAdvanced();
                        }, 6000);
                        
                    }
                    else if(userSelectValue === 'paper' &&  cpuElement1 === 'rock'){
                        const userWinsSound = new Audio("./sounds/paperfinal.mp3");
                        userWinsSound.play();
                        setTimeout(() => {
                            userWinsEachRoundAdvanced();
                        }, 6000);
                    }
                    else if(userSelectValue === 'scissors' &&  cpuElement1 === 'paper'){
                        const userWinsSound = new Audio("./sounds/scissorsfinal.mp3");
                        userWinsSound.play();
                        setTimeout(() => {
                            userWinsEachRoundAdvanced();
                        }, 5000);
                    }
                    else if(userSelectValue === 'rock' &&  cpuElement1 === 'scissors'){
                        const userWinsSound = new Audio("./sounds/rockfinal.mp3");
                        userWinsSound.play();
                        setTimeout(() => {
                            userWinsEachRoundAdvanced();
                        }, 6000);
                        
                    }
            
                }, 5000);
                
                break;
            case 2:
                const cpuElement2 = rpsContainer[0];
                const cpuSelect2 = "./images/" + cpuElement2 +".png";
                // const cpu = cpuSelect;  
                // console.log("cpu attack: "+cpuElement2)
                cpuSideRenderAdvanced.innerHTML = "<img src = './images/thinking.png' width=100% height=100% />";
    
                setTimeout(function() {
            
                    cpuSideRenderAdvanced.innerHTML = " ";
            
                    const imgCpu = document.createElement('img');
                    
                    imgCpu.src = cpuSelect2;
                    cpuSideRenderAdvanced.appendChild(imgCpu);
                    
                    cpuSideRenderAdvanced.style.height = '20%';
                    cpuSideRenderAdvanced.style.width = '20%';
                    
                    processingBar.style.display = 'block';
            
                    processingBar.style.marginTop = "5px";
                    processingBar.style.marginBottom = "10px";
                    processingBar.style.borderRadius = "15px";
            
            
            
                    if(cpuElement2 === 'rock'){
                        const cpuRockSound = new Audio("./sounds/rock.mp3");
                        cpuRockSound.play();
                
                    } else if (cpuElement2 === 'paper'){
                        const cpuPaperSound = new Audio("./sounds/paper.mp3");
                        cpuPaperSound.play();
                
                    }else {
                        const cpuScissorsSound = new Audio("./sounds/scissors.mp3");
                        cpuScissorsSound.play();
                    }
            
                }, 4000);  
                
                setTimeout(function() {
                    if((userSelectValue === 'rock' && cpuElement2 === 'rock') || (userSelectValue === 'paper' && cpuElement2 === 'paper') || (userSelectValue === 'scissors' &&  cpuElement2 === 'scissors')){
                        processingBar.innerText = "Draw";
                        processingBar.style.backgroundColor = "blue";
                        const drawSound = new Audio("./sounds/draw.mp3");
                        drawSound.play();
                        setTimeout(function() {
                            reStageGameNextRoundAdvanced();
                        },3000);
                    }
                    else if(userSelectValue === 'rock' &&  cpuElement2 === 'paper'){
                        const cpuWinsSound = new Audio("./sounds/paperfinal.mp3");
                        cpuWinsSound.play();
                        setTimeout(() => {
                            cpuWinsEachRoundAdvanced();
                        }, 6000);
                    }
                    else if(userSelectValue === 'paper' &&  cpuElement2 === 'scissors'){
                        const cpuWinsSound = new Audio("./sounds/scissorsfinal.mp3");
                        cpuWinsSound.play();
                        setTimeout(() => {
                            cpuWinsEachRoundAdvanced();
                        }, 5000);
                    }
                    else if(userSelectValue === 'scissors' &&  cpuElement2 === 'rock'){
                        const cpuWinsSound = new Audio("./sounds/rockfinal.mp3");
                        cpuWinsSound.play();
                        setTimeout(() => {
                            cpuWinsEachRoundAdvanced();
                        }, 6000);
                        
                    }
                    else if(userSelectValue === 'paper' &&  cpuElement2 === 'rock'){
                        const userWinsSound = new Audio("./sounds/paperfinal.mp3");
                        userWinsSound.play();
                        setTimeout(() => {
                            userWinsEachRoundAdvanced();
                        }, 6000);
                    }
                    else if(userSelectValue === 'scissors' &&  cpuElement2 === 'paper'){
                        const userWinsSound = new Audio("./sounds/scissorsfinal.mp3");
                        userWinsSound.play();
                        setTimeout(() => {
                            userWinsEachRoundAdvanced();
                        }, 5000);
                    }
                    else if(userSelectValue === 'rock' &&  cpuElement2 === 'scissors'){
                        const userWinsSound = new Audio("./sounds/rockfinal.mp3");
                        userWinsSound.play();
                        setTimeout(() => {
                            userWinsEachRoundAdvanced();
                        }, 6000);
                        
                    }
            
                }, 5000);
                
                break;
        
            default:
                console.log("nothing here")
                break;
        }
  
});


function reStageGameNextRoundAdvanced(){
    document.querySelector('body').style.backgroundColor = "##643843";

    if(gameRunner < 1){
        roundCountMainRound.style.display = 'none';
        roundCountMain.style.display = 'flex';
        roundCountMain.innerText = "Game Over";
        roundCountMain.style.color = "red";
        roundCountMain.style.fontWeight = "600";
        gameStartAdvanced.style.display = "none";
        
        if(userScore.innerText > cpuScore.innerText){
            userInfoChallenge.forEach((userData) => {
                const userNameData = userData.Username;
                gameEndStatAdvanced((userNameData + " is the champion!"), 'green');
             })
            const userWinnerSound = new Audio("./sounds/advanced-win.mp3");
            userWinnerSound.play();
            document.querySelector('body').style.backgroundColor = "#92C7CF";

        } else if (userScore.innerText < cpuScore.innerText){
            advanced.forEach((cpuData) => {
                const advancedUserNameData = cpuData.nameCPU;
                gameEndStatAdvanced(advancedUserNameData + " is the champion and you LOST!!",  '#43766C');
            })
            const cpuWinnerSound = new Audio("./sounds/advanced-lost.mp3");
            cpuWinnerSound.play();
            document.querySelector('body').style.backgroundColor = "#43766C";

        }
        else {
            gameEndStatAdvanced("A tie!", "blue");
            const noWinnerSound = new Audio("./sounds/tie.mp3");
            noWinnerSound.play();
        }

    } else {
        userSideLeftAdvanced.style.display = 'flex';
        userSideLeftImageAdvanced.innerHTML = " ";
        userSideLeftImageAdvanced.style.display = 'none';
        gameStartSectionRender();
        cpuSideRenderAdvanced.innerHTML = "<img src = './images/marry-waiting.png' width=100% height=100% />"; 
        processingBar.style.display = 'none';
        processingBar.innerText = 'processing winner...';
        processingBar.style.backgroundColor = 'red';
        roundCount.innerText++;
        gameRunner --;
        // console.log("game runner remains: "+gameRunner);
    } 
}

export function userWinsEachRoundAdvanced(){
    userInfoChallenge.forEach((userData) => {
       const userNameData = userData.Username;
       processingBar.innerText = userNameData + " wins!";
    })
    userScore.innerText++;
    processingBar.style.backgroundColor = "green";

        setTimeout(function() {
            reStageGameNextRoundAdvanced();
        },2000);
   
}

export function cpuWinsEachRoundAdvanced(){
    advanced.forEach((cpuDataInformationAdvanced) => {
        const advancedCpuData = cpuDataInformationAdvanced.nameCPU;
        processingBar.innerText = advancedCpuData + " wins!";
    })
    cpuScore.innerText++;
    processingBar.style.backgroundColor = "#070F2B";
  
        setTimeout(function() {
            reStageGameNextRoundAdvanced();
        },2000);
   
    
}


function gameEndStatAdvanced(outcomeStat, backGroundColor){
    gameEndAdvanced.style.display = 'block';
    gameEndAdvanced.innerText = outcomeStat;
    gameEndAdvanced.style.backgroundColor = backGroundColor;
    gameEndAdvanced.style.textAlign = "center";
    gameEndAdvanced.style.color = '#fff';
    gameEndAdvanced.style.padding = "5px 10px";
    gameEndAdvanced.style.borderRadius = "4px";
    processingBar.style.display = "none";


    setTimeout(function(){
        const btnRestartYes = document.createElement('button');
        btnRestartYes.innerText = "Yes";
        btnRestartYes.style.backgroundColor = "#fff";
        btnRestartYes.style.color = backGroundColor;
        btnRestartYes.style.padding = "5px 6px";
        btnRestartYes.style.margin = "5px 15px";
        btnRestartYes.onclick = restartGameAdvanced;
        btnRestartYes.style.cursor = 'pointer';
        btnRestartYes.style.border = 'none';
        btnRestartYes.style.borderRadius = '3px';

        const btnRestartNo = document.createElement('button');
        btnRestartNo.innerText = 'No';
        btnRestartNo.style.backgroundColor = "#fff";
        btnRestartNo.style.color = 'red';
        btnRestartNo.style.padding = "5px 6px";
        btnRestartNo.style.margin = "5px 15px";
        btnRestartNo.onclick = endGameAdvanced;
        btnRestartNo.style.cursor = 'pointer';
        btnRestartNo.style.border = 'none';
        btnRestartNo.style.borderRadius = '3px';


        btnRestartYes.addEventListener("mouseover", function(){
            this.style.fontWeight = '600';
        });
        btnRestartNo.addEventListener("mouseover", function(){
            this.style.fontWeight = '600';
        });

        gameEndAdvanced.innerText = "Restart?";
        gameEndAdvanced.appendChild(btnRestartYes);
        gameEndAdvanced.appendChild(btnRestartNo);

    },4000);

}

function restartGameAdvanced(){
    gameRunner = 2;
    userScore.innerText= 0;
    cpuScore.innerText= 0;
    roundCount.innerText = 1;

    roundCountMainRound.style.display = "flex";
    roundCountMain.style.display = "none";
    processingBar.innerText = "processing winner...";
    processingBar.style.backgroundColor = 'red';

    document.querySelector('body').style.backgroundColor = "#643843";

    gameEndAdvanced.style.display = "none";
    userSideLeftAdvanced.style.display = 'flex';

    userSideLeftImageAdvanced.innerHTML = " ";
    // userSelectElement.innerText = "Choose ...";
    
    userSideLeftImageAdvanced.style.display = 'none';
    cpuSideRenderAdvanced.innerHTML = "<img src = './images/marry-waiting.png' width=100% height=100% />"; 
    gameSectionStartBeginner(); 
}

function endGameAdvanced(){
    document.querySelector('body').style.backgroundColor = '#E5E5E5';

    gameRunner = 2;
    userScore.innerText= 0;
    cpuScore.innerText= 0;
    roundCount.innerText = 1;

    roundCountMainRound.style.display = "flex";
    roundCountMain.style.display = "none";

    userInfoChallenge.length = 0;
    gameEndAdvanced.style.display = "none";

    // userSelectElement.innerText = "Choose ...";
    elementColumnContainer.style.display = "flex";
    containerUserInfo.style.display = "none";

    challengeUser.innerText = "";
    challengeGender.innerText = "";
    challengeLevel.innerText = "";

    challengeUsernameCPU.innerText = "";
    challengeGenderCPU.innerText = "";
    challengeLevelCPU.innerText = "";
   
    containerBrave.style.margin = '0';
    containerBrave.style.border = "none";
    containerBrave.style.borderRadius = "0";

    document.querySelector('footer').style.marginTop = "0";

    containerElementShow.style.borderBottomLeftRadius =  '0';
    containerElementShow.style.borderBottomRightRadius =  '0';

    containerInputInteractions.style.borderTopRightRadius = '0';
    containerInputInteractions.style.borderTopLeftRadius = '0';


    processingBar.style.marginTop = "0";
    processingBar.style.marginBottom = "0";
    processingBar.style.borderRadius = "0";

    containerScore.style.display = "none";
    waitingForChallenger.style.display = "block";
    gameStartSectionAdvanced.style.display = "none";

    containerBrave.style.display = "flex";
    braveBtn.style.display = "block";
    anyChallengerHead.style.display = "block";

    braveBtn.style.marginLeft = "20px";
    anyChallengerHead.style.marginLeft = "20px";
    yesInfo.style.display = "none";

    processingBar.style.display = 'none';
    processingBar.innerText = "processing winner...";
    processingBar.style.backgroundColor = 'red';


    // gameEnd.style.display = "none";
    userSideLeftAdvanced.style.display = 'flex';

    userSideLeftImageAdvanced.innerHTML = " ";
    
    userSideLeftImageAdvanced.style.display = 'none';
    // gameSectionStartBeginner(); 
    cpuSideRenderAdvanced.innerHTML = "<img src = './images/marry-waiting.png' width=100% height=100% />"; 
    changeBackToNo();
}