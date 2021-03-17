const fullName = 'John Smith';
var hasJsKnowladge = false;
let age = new Number(29);
let jsBooksRead = null;
let currentJsBook; // undefined

// A bit more dynamic
// const fullName = prompt('Please enter your name');
// var hasJsKnowladge = prompt('Do you have JS knowladge?');
// let age = prompt('What is your age?');
// let jsBooksRead = prompt('Give a list of books on JS you read');
// let currentJsBook = prompt('What is the current book on JS you are reading');

const textLines = [
  `Hi, my name is ${fullName}.`,
	`My age is ${age}.`,
	`I ${hasJsKnowladge ? 'do' : 'do not'} have JS knowlade.`,
	`I read ${jsBooksRead} on the topic.`,
	`And my next book on the list is ${currentJsBook}.`,
]

textLines.map(textLine => {
  // create a new div element 
  const newParagraph = document.createElement('p'); 
  // add our text
  const newContent = document.createTextNode(textLine); 
  // add the text node to the newly created div
  newParagraph.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  const contentSection = document.getElementById('content');
  contentSection.appendChild(newParagraph)
});