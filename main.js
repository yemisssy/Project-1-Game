console.log('hello');
const player={
  name:" ",
  score: 0,
  correctAnswers: [],
  wrongAnswers:[]
}
let ansIndex = -1;
const gameTool={
  question: "what landmark is this",
  images:[
    "images/tajMahal.jpg",
    "images/Colosseum.jpeg",
    "images/Parthenon.jpg",
    "images/eiffelTower.jpg"
  ],
  rightOptions:[
    "Taj Mahal",
    "Colosseum",
    "Parthenon",
    "Eiffel Tower"
  ],
  wrongOptions:[
    "Amer Fort",
    "Ganges",
    "Hawa Mahal",
    "Roman Forum",
    "Pantheon",
    "St.Peter's Baslica",
    "Meteora",
    "Acropolis of Anthens",
    "Mycenae",
    "Norte-Dame de Paris",
    "Louvre museum",
    "Arc de Triomphe"
  ]
}
let images=Object.values(gameTool.images);//array 4
let right=Object.values(gameTool.rightOptions);//array 4
let wrong=Object.values(gameTool.wrongOptions);//array 1
let inputBtn =document.getElementsByClassName('option');
let scoreCounter=document.getElementById('scoreCounter');
//Function to run in map
function createObj(ans){
  let thisObj =
  {
    theAns:ans,
    correct: false
  }
  return thisObj
}
createObj();



//function to displayOptions
  debugger;

  function displayAns(image){
  let index = gameTool.images.indexOf(image);

  let theRightAns = {
    theAns: gameTool.rightOptions[index],
    correct: true
  };
  let allChoices = [];
  let wrongChoices=wrong.map(createObj);
  let j=wrongChoices.length;
  let s = 3;
  while(s > 0){
    let rad = Math.floor(Math.random() * j);
    let wrongAPos = wrongChoices[rad];
    wrongChoices[rad]=wrongChoices[j];
    wrongChoices[j]=wrongChoices[rad];
    allChoices.push(wrongAPos);
    j -= 1;// reduce here
    s -= 1;
  }
  // debugger;
  allChoices = allChoices.concat(theRightAns);
  allChoices.sort(()=> 0.5-Math.random());
  let inp=0;
  let i=allChoices.length-1;
  while(inp < inputBtn.length){
    inputBtn[inp].textContent = allChoices[i].theAns;
    if (allChoices[i].correct) {
      inputBtn[inp].dataset.correct = true;
      inputBtn[inp].addEventListener('click', checkAnswer);
    }
    else{
      delete inputBtn[inp].dataset.correct;//Delete is a keyword
    }

    i -=1;
    inp +=1;
  }
}
// debugger;
let buttonOpt =document.getElementById('optionsBoard');

//function checkAnswer
let currentAnswer;
function checkAnswer(playersClick){
  let click =playersClick.target;
  click.style.backgroundColor ='pink';
  let currentScore = player.score;
  let totalScore;
  let playersAns = playersClick.target.getAttribute("data-correct");
  console.log(playersClick.target.getAttribute("data-correct"));
  // while(totalScore < targetScore){
    if(playersAns == "true"){
      currentScore += 1;
      console.log(`i am currentScore ${currentScore}`)
      totalScore = currentScore;
      scoreCounter.textContent =totalScore;
      console.log(`i am currentScore ${scoreCounter.textContent}`)
    }
    else{
      currentScore =totalScore;
    }
  // }
  // totalScore = currentScore;
};


//Global
let currentQuestion;

//function animate deckImg
function animate(theEvent){
  let card=theEvent.target;
  let height= 186;
  let set= setInterval(move, 5);

  function move(){
    if(height===0){
      clearInterval(set);
    }
    else{
      height-=1;
      card.style.height= height + 'px';
      }
    }
    // debugger;
    if(ansIndex === -1){
      ansIndex =  theEvent.target.getAttribute("data-index");
      console.log(theEvent.target.getAttribute("data-index"));
      let questionIndex = parseInt(ansIndex);
      currentQuestion = gameTool.images[questionIndex];
      console.log(currentQuestion);
      displayAns(currentQuestion);
      ansIndex = -1;
    }
}
//Adding addEventListener to image covers...
let coverImages =document.getElementsByClassName('images');
let covers =0;
while(covers < coverImages.length){
  coverImages[covers].addEventListener('click', animate);
  covers +=1;
}

//modal function
let modal =document.getElementById('modal');

function showModal(){
  window.onload=modal.style.display='block';
}
showModal();

let submit=document.getElementById('submit');
submit.addEventListener('click', displayPlayer);

//Diplay player's name on scoreBoard
function displayPlayer(){
  let playersInput =document.getElementById('namePut').value;
  console.log(playersInput);
  let thePlayer=document.getElementById('thePlayer');
  thePlayer.innerHTML=playersInput;
  modal.style.display='none';
};
//Function Add Each image to the images1 divs
function addImage(){
  let images1 =document.getElementsByClassName('images1');
  let i=gameTool.images.length-1; //Note to self this returns the value at the last index, index 11, item 12
  for(let j=images1.length-1; j>=0; j-=1){
    images1[j].src=gameTool.images[i];
    i-=1;
  }
}
addImage();
// displaye question
function ask(){
  let taker=document.getElementById('questionTaker');
  taker.textContent=gameTool.question;
}


// function click categories;

function category(){
  // let list=theCat.target;
  let imgHolder =document.getElementById('imageHolder');
  let actualImages=document.getElementById('actualImages');
  let finger=document.getElementById('finger');
  let par=document.getElementById('par');
  imgHolder.style.visibility='visible';
  actualImages.style.visibility='visible';
  finger.style.visibility='hidden';
  par.style.visibility='hidden';
}

let select =document.querySelector('li');
select.addEventListener('click', category);
