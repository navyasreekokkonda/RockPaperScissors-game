  let userScore=0;
  let compScore=0;
  const choices=document.querySelectorAll(".choice");
  const msg=document.querySelector("#msg");
  const userScorePara=document.querySelector("#user-score");
  const compScorePara=document.querySelector("#comp-score");
  const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];

  };
  const drawGame=()=>{
    msg.innerText="Game Drawn play Again";
    msg.style.backgroundColor="orange";
  };
  const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`YOU WIN!your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`YOU LOST! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red ";
    }
   

  }
  const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice);
    const compChoice=genCompChoice();
    console.log("compChoice=",compChoice);
    if(userChoice==compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice=="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
  }
  choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);

    });
  });