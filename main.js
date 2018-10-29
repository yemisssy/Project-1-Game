console.log('hello');
const player1={
  name:null,
  score:0,
  correctAnswers: [],
  wrongAnswers:[]
}
const player2={
  name:null,
  score:0,
  correctAnswers: [],
  wrongAnswers:[]
}
console.log(player1);
let ansIndex = -1;
const gameTool={
  question: "Question: what landmark is this ?",
  images:[
    "images/tajMahal.jpg",
    "images/Colosseum.jpeg",
    "images/Parthenon.jpg",
    "images/eiffelTower.jpg",
    "images/dubaiBuilding.jpg",
    "images/pyramidGiza.jpg",
    "images/sagradafamilia.jpg",
    "images/SheikhZayedMosque.jpg"
  ],
  rightOptions:[
    "Taj Mahal",
    "Colosseum",
    "Parthenon",
    "Eiffel Tower",
    "Burj Al Arab Jumeirah",
    "Pyramid at Giza",
    "Sagrada Familia spain ",
    "Sheikh Zayed Mosque "
  ],
  wrongOptions:[
    "Stonehenge",
    "Milan Cathedral",
    "Great Sphinx Of Giza",
    "Arc de Triomphe",
    "Trevi Fountain",
    "Machu Picchu",
    "Angkor Wat",
    "Amer Fort",
    "Ganges",
    "Leaning Tower Of Pisa",
    "Hawa Mahal",
    "Roman Forum",
    "Pantheon",
    "St.Peter's Baslica",
    "Meteora",
    "Great Wall of China",
    "Acropolis of Anthens",
    "Mycenae",
    "Norte-Dame de Paris",
    "Louvre museum",
    "Arc de Triomphe",
    "Burj Khalifa",
    "Hagia Sophia",
    "Alhambra"
  ]
}
let images=Object.values(gameTool.images);//array 4
let right=Object.values(gameTool.rightOptions);//array 4
let wrong=Object.values(gameTool.wrongOptions);//array 1
let inputBtn =document.getElementsByClassName('option');
let scoreCounter=document.getElementById('scoreCounter');


// createObj();
function createObj(ans){
  let thisObj =
  {
    theAns:ans,
    correct: false
  }
  return thisObj
}

//function to displayOptions
  // debugger;
  function displayAns(image){
  let index = gameTool.images.indexOf(image);

  let allChoices = [];
  let theRightAns = {
    theAns: gameTool.rightOptions[index],
    correct: true
  };
  let wrongChoices=wrong.map(createObj);
  let j=wrongChoices.length-1;
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
  debugger;
  allChoices = allChoices.concat(theRightAns);
  allChoices.sort(()=> 0.5-Math.random());
  let inp=inputBtn.length-1;
  let i=allChoices.length-1;
  while(inp >=0){
    inputBtn[inp].textContent = allChoices[i].theAns;
    if (allChoices[i].correct) {
      inputBtn[inp].dataset.correct = true;
    }
    else{
      delete inputBtn[inp].dataset.correct;//Delete is a keyword
    }
    i -=1;
    inp -=1;
   }
   return allChoices;
}
//function checkAnswer
let currentAnswer;
function checkAnswer(playersClick){
  let modal22 =document.getElementById('modal2');
  let click =playersClick.target;
  click.style.backgroundColor = '#99DCFF';
  let playersAns = click.getAttribute("data-correct");
  let play1= player1.name;
  let play2 =player2.name;
  let ourQuestions = addImage();
  console.log(ourQuestions);
  let currentScore=0;
  let targetScore=8;
  debugger;
    if(playersAns == "true"){
      player1.score += 1;
      window.alert("You are correct!, pick another card.")
      modal22.innerHTML =`${player2.name} your turn`;
      modal22.style.visibility='visible';
      scoreCounter.textContent =player1.score;
      click.style.backgroundColor = '#8DCDF3';
      console.log(scoreCounter.textContent);
    }

    else{
      window.alert("soryy you are incorrect, pick another card.")
    }
};

//Function Add Each image to the images1 divs
let images1 =document.getElementsByClassName('images1');
function addImage(){
  let i=gameTool.images.length-1; //Note to self this returns the value at the last index, index 11, item 12
  for(let j=images1.length-1; j>=0; j-=1){
    images1[j].src=gameTool.images[i];
    i-=1;
  }
  return gameTool.images.length;
}

// displaye question
function ask(){
  let taker=document.getElementById('questionTaker');
  taker.textContent=gameTool.question;
}

//Global
let currentQuestion;

//function animate deckImg
function animate(theEvent){
  let card=theEvent.target;
  let height= 202;
  let set= setInterval(move, 5);

  function move(){
    let thisQuest;
    if(height===0){
      clearInterval(set);
    }
    else{
      height-=1;
      card.style.height= height + 'px';

      }
    }
    debugger;
    if(ansIndex === -1){
      ansIndex =  theEvent.target.getAttribute("data-index");
      let questionIndex = parseInt(ansIndex);
      currentQuestion = gameTool.images[questionIndex];
      let coverImage =document.getElementsByClassName('images');
      let cover =0;
      while(cover < coverImage.length){
        coverImage[cover].addEventListener('click', displayAns(currentQuestion));
        cover +=1;
      }
      ansIndex =-1;
    }
    ask();
    for(let i=0; i<inputBtn.length; i +=1){
      inputBtn[i].addEventListener('click', checkAnswer);
    }
    inputBtn.length.textContent = " ";
    closeModal2();
}

//modal function
function showModal(){
  let modal =document.getElementById('modal');
  window.onload=modal.style.display='block';
}

//Diplay player's name on scoreBoard
function displayPlayer(){
  let player1Input =document.getElementById('namePut').value;
  let player2Input =document.getElementById('namePut2').value;
  player1.name =player1Input;
  player2.name =player2Input;
  let thePlayer=document.getElementById('thePlayer');
  let thePlayer2=document.getElementById('thePlayer2');
  thePlayer.innerHTML=player1Input;
  thePlayer2.innerHTML=player2Input;
  thePlayer.style.color ='#2B5C80';
  thePlayer2.style.color ='#2B5C80';
  modal.style.display='none';
};

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
  showModal2();

}
function showModal2(){
  let modal2= document.getElementById('modal2');
  modal2.innerHTML = `${player1.name} please pick a card`;
  modal2.style.visibility ='visible';
}

function closeModal2(){
  let modal21= document.getElementById('modal2');
  modal21.style.visibility ='hidden';

}
function playgame(){
  showModal();
  let submit=document.getElementById('submit');
  submit.addEventListener('click', displayPlayer);
  let select =document.querySelector('li');
  select.addEventListener('click', category);
  addImage();
  let modal2= document.getElementById('modal2');
  let coverImages =document.getElementsByClassName('images');
  let covers =0;
  while(covers < coverImages.length){
    coverImages[covers].addEventListener('click', animate);
    covers +=1;
  }
}
playgame();
