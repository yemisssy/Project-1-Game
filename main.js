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
    "images/landmark.jpg",
    "images/landmark1.jpg",
    "images/landmark2.jpg",
    "images/landmark3.jpg"
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
//Add Each image to the images1 divs

function addImage(){
  let images1 =document.getElementsByClassName('images1');
  let i=gameTool.images.length-1;
  for(let j=0; j<images1.length; j+=1){
    console.log(`i am image pos ${images1[j]}`);
    images1[j].src=gameTool.images[i];
    i-=1;
    console.log(`i am  src i ${i}`);
  }
}
addImage();
