const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
  const newTutorial = tutorials.map((tut) => makeCap(tut))
  return newTutorial;
}

function makeCap(text){
  let newText = "";
  const words = text.split(" ");
  for (const word of words) {
    const capital = word.charAt(0).toUpperCase() + word.slice(1);
    newText = newText + capital + " ";
  }
  const finalString = newText.slice(0,-1)
  return finalString;
}

console.log(titleCased(tutorials));

console.log(makeCap("hi mom there"));