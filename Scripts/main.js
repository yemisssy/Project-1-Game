console.log('hello');
const player={
  name:" ",
  score: 0,
  correctAnswers: [],
  wrongAnswers:[]
}
//Tutorial video div
let landingBody=document.getElementById('landingBody')
let tutorial=document.createElement('div');
tutorial.id= 'tutVid';
landingBody.appendChild(tutorial);


//Div holding player's name input
let inputDiv =document.createElement('div');
inputDiv.id='inputDiv';
landingBody.appendChild(inputDiv);

//Pease input your name
let name =document.createElement('p');
name.textContent = "Please enter you name";
inputDiv.appendChild(name);


//Input tag
let input=document.createElement('input');
input.type ='text';
input.id ='name';
input.setAttribute("value", " ");
inputDiv.appendChild(input);

//Submit&Start Button and onclick function.

let start=document.createElement('button');
landingBody.appendChild(start);
start.type='submit';
start.id='startBtn';
start.textContent= "start";
start.formTarget="_blank";
//Create the place for your button to link to or open up in

//Create a form tag with target as your new html;
let form=document.createElement('form');
form.action="otherPages/gamePage.html";
form.id ="firstPageForm";
landingBody.appendChild(form);
form.appendChild(inputDiv);
form.appendChild(start)

start.addEventListener('click', savePlayer);

//Function get and save player's name
function savePlayer(){
  let playersName=document.getElementById('name').value;
  console.log(playersName);
  player.name=playersName;
  console.log(player.name);
  return playersName;
}
savePlayer();

//Game Page functions
