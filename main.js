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

// let cover =document.getElementsByClassName('images');
// let coverImg =document.getElementsByClassName('images1');
let inputBtn =document.getElementsByClassName('option');

//function to displayOptions.
function displayAns(){
  let theRightAns;
  let save =[];
  let allChoices = [];
  for(let i =0; i <right.length; i +=1){
    theRightAns =
    {
      theAns: right[i],
      correct: true
   }
  }
     // debugger;
    let wrongChoices=wrong.map(createObj);
    let j=wrongChoices.length;
    let s = 3;
    while(s > 0){
      let rad = Math.floor(Math.random() * j);
      let wrongAPos = wrongChoices[rad];
      wrongChoices[rad]=wrongChoices[j];
      wrongChoices[j]=wrongChoices[rad];
      save.push(wrongAPos);
      j -= 1;// reduce here
      s -= 1;
    }
    allChoices = allChoices.concat(theRightAns);
    allChoices = allChoices.concat(save);
    let inp=0;
    let i=allChoices.length-1;
    while(inp < inputBtn.length){
      inputBtn[inp].textContent = allChoices[i].theAns;
      i -=1;
      inp +=1;
    }
  }


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
    // if(ansIndex === -1){
    //   ansIndex =  theEvent.target.getAttribute("value");
      displayAns();
    //   ansIndex = -1;
    // }
}
let imageHolder =document.getElementById('imageHolder');
imageHolder.addEventListener('click', animate);

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
  for(let j=0; j<images1.length; j+=1){
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
  // imgHolder.style.visibility='visible';
  // actualImages.style.visibility='visible';
  finger.style.visibility='hidden';
  par.style.visibility='hidden';
}

let select =document.querySelector('li');
select.addEventListener('click', category);




// function wrongAns(){
//   ask();
//   let wrong = Object.values(gameTool.wrongOptions);//Returns an array of wrong Questions
//   console.log();
//   let target = document.getElementsByClassName('option');
//   let save = [];
//   let i = wrong.length-1;
//   // debugger;
//   while(i >= 0){
//     let rad = Math.floor(Math.random() * i);
//     let wrongAPos = wrong[rad];
//     i -= 1;// reduce here
//     save.push(wrongAPos);
//     //swap the current answer with the last answer so it does not repeat it as an option;
//     let temp= wrongAPos;
//     wrong[rad]=wrong[i];
//     wrong[i]=temp;
//     console.log(save)
//     // if(save.length === 3){
//     //   for(let s =0; s <save.length; s+=1){
//     //     let thisSave =save[s];
//     //     let j = target.length;
//     //     while(j > 1) {
//     //       let theTarget = target[Math.floor(Math.random() * j)];
//     //       console.log(`i am the current target input ${theTarget}`);
//     //       theTarget.value = save[s];
//     //       console.log(`im wrongpos ${wrongAPos}`);
//     //       j -= 1;
//     //     }
//     //   }
//     // }
//   }
// }
// wrongAns();
