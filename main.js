console.log('hello');
const player={
  name:" ",
  score: 0,
  correctAnswers: [],
  wrongAnswers:[]
}
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
  wrongOption:[
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
  let i=gameTool.images.length-1;
  for(let j=0; j<images1.length; j+=1){
    images1[j].src=gameTool.images[i];
    i-=1;
  }
}
addImage();

//function animate deckImg

function animate(theEvent){
  let card=theEvent.target;
  let height= 186;
  let set= setInterval(move, 5)
  function move(){
    if(height===0){
      clearInterval(set);
    }
    else{
      height-=1;
      card.style.height= height + 'px';
      }
    }
}
let imageHolder =document.getElementById('imageHolder');
imageHolder.addEventListener('click', animate);

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
