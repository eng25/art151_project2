window.alert("Welcome to Procrastination Quest. Press Ok to begin your quest.");

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let time = 60;
let grade = 0;
let gradeLetter = '';
var curTextNode;

function startGame() {
  time = 60;
  grade = 0;
  showTextNode(1)
}

var interval = setInterval(function(){
  document.getElementById('time').innerHTML=time;
  time--;
  if (time <= 0){
    document.getElementById('time').innerHTML='Done';
    if (curTextNode < 100 && curTextNode > 0){
      showTextNode(100);
    }
  }
}, 1000); 

function setGradeLetter() {
  if (grade < 0)
  {
    gradeLetter = 'F';
  }
  else if (grade === 0)
  {
    gradeLetter = 'D';
  }
  else if (grade === 1)
  {
    gradeLetter = 'C';
  }
  else if (grade < 3)
  {
    gradeLetter = 'B';
  }
  else
  {
    gradeLetter = 'A';
  }
}

function showTextNode(textNodeIndex) {
  curTextNode = textNodeIndex;
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  if (textNodeIndex === 103)
  {
    setGradeLetter();
    textElement.innerText = 'Finally, you finished the paper and submitted it.\nThe grade you got was an: ' + gradeLetter;
  }
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    const button = document.createElement('button')
    button.innerText = option.text
    button.classList.add('btn')
    button.addEventListener('click', () => selectOption(option))
    optionButtonsElement.appendChild(button)
  })
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId === 3) {
    time -= 5;
  }
  if (nextTextNodeId === 0) {
    return startGame()
  }
  if (nextTextNodeId >= 100) {
    time = 0;
  }

  // These textNodes deduct time
  if (nextTextNodeId === 3) {
    time -= 5;
  }
  if (nextTextNodeId === 6) {
    time -= 5;
  }
  if (nextTextNodeId === 7) {
    time -= 10;
  }
  if (option.text === '3, short and sweet, will only take 15 minutes to write') {
    time -= 15;
  }
  if (option.text === '5, will take 30 minutes to write out this monstrosity of information') {
    time -= 30;
  }
  if (option.text === '1-ish, it is basically just a paragraph, but it will only take 5 minutes and at this point something is better than nothing') {
    time -= 5;
  }
  // Adjust grade variable
  const gradeDiff = option.addGrade;
  grade += gradeDiff;

  // redirect
  if (nextTextNodeId === -1) {
    window.location.href = "afterword.html";
  }
  if (nextTextNodeId === -2) {
    window.open("https://www.youtube.com/watch?v=kCOj18j1SyU", '_blank');
  }
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'You wake up to hear the blaring sound of your alarm.\nYou realize you have a paper due in 1 hour.',
    options: 
    [
      {
        text: 'Go back to sleep',
        nextText: 102,
        addGrade: 0
      },
      {
        text: 'Wake up',
        nextText: 2,
        addGrade: 0
      }
    ]
  },
  {
    id: 2,
    text: 'Congratulations. You woke up.',
    options: 
    [
      {
        text: 'Panic about your impending due date',
        nextText: 3,
        addGrade: 0
      },
      {
        text: 'Run over to your computer to try and salvage this mess',
        nextText: 4,
        addGrade: 0
      },
    ]
  },
  {
    id: 3,
    text: 'You wasted 5 minutes panicking, but at least now you are ready to go to work. Maybe.',
    options: 
    [
      {
        text: 'Continue panicking',
        nextText: 3,
        addGrade: 0
      },
      {
        text: 'Run over to your computer to try and salvage this mess',
        nextText: 4,
        addGrade: 0
      },
      {
        text: 'Take a post panic nap',
        nextText: 102,
        addGrade: 0
      }
    ]
  },
  {
    id: 4,
    text: 'You turn on your computer, but as you are about to start working your friend messages you an adorable video about a dog making friends with a horse.',
    options: 
    [
      {
        text: 'Its a dog making friends with a horse, of course you have to watch that video',
        nextText: 101,
        addGrade: 0
      },
      {
        text: 'You are dedicated to turning in this project, you will stay the course and watch the dog video later like a responsible adult',
        nextText: 5,
        addGrade: 0
      },
    ]
  },
  {
    id: 5,
    text: 'You begin working on your paper. First steps are important.',
    options: 
    [
      {
        text: 'Take 5 minutes to quickly skim over the project specifications',
        nextText: 6,
        addGrade: 0
      },
      {
        text: 'Take 10 minutes to carefully read through the specifications of the project',
        nextText: 7,
        addGrade: 0
      },
    ]
  },
  {
    id: 6,
    text: 'Your project specifications state that you must write a 3 page history paper, double spaced in Trebuchet font.',
    options: 
    [
      {
        text: 'That is all the information you need. Get started on writing.',
        nextText: 8,
        addGrade: 0
      },
      {
        text: 'Make sure you did not miss anything, take another 10 minutes to reread the specifications carefully.',
        nextText: 7,
        addGrade: 0
      },
    ]
  },
  {
    id: 7,
    text: 'Your project specifications state that you must write a 3 page history paper, double spaced in 21 pt Trebuchet font, because the Professor has poor eyesight, at the top of the paper you must put your name, the date in day, month, year format and finally the final word of the paper must be the word discombobulated, the Professor really likes this word',
    options: 
    [
      {
        text: 'That is all the information you need. Get started on writing.',
        nextText: 8,
        addGrade: 0
      },
    ]
  },
  {
    id: 8,
    text: 'Time to pick a subject for you paper',
    options: 
    [
      {
        text: 'History',
        nextText: 9,
        addGrade: 1
      },
      {
        text: 'Biology',
        nextText: 9,
        addGrade: -1
      },
      {
        text: 'Trebuchets',
        nextText: 9,
        addGrade: -1
      }
    ]
  },
  {
    id: 9,
    text: 'Write the header for the paper',
    options: 
    [
      {
        text: 'You make sure to include your first name, last name,  and the date in day month year format, and the weather in France, just in case the Professor was curious about it.',
        nextText: 10,
        addGrade: -1
      },
      {
        text: 'You make sure to include your first name and last name, and the date in month day year format.',
        nextText: 10,
        addGrade: 0
      },
      {
        text: 'You make sure to include your first name, last name, and the date in day month year format.',
        nextText: 10,
        addGrade: 1
      }
    ]
  },
  {
    id: 10,
    text: 'Pick the font',
    options: 
    [
      {
        text: 'You pick Times New Roman, because it looks professional.',
        nextText: 11,
        addGrade: 0
      },
      {
        text: 'You pick Trebuchet, mostly because its a fun word to say.',
        nextText: 11,
        addGrade: 1
      },
      {
        text: 'You pick Comic Sans, you really do not give a crap about this paper anymore and you want everyone to know it.',
        nextText: 11,
        addGrade: -2
      },
    ]
  },
  {
    id: 11,
    text: 'How many pages do you write?',
    options: 
    [
      {
        text: '3, short and sweet, will only take 15 minutes to write',
        nextText: 12,
        addGrade: 1
      },
      {
        text: '5, will take 30 minutes to write out this monstrosity of information',
        nextText: 12,
        addGrade: 0
      },
      {
        text: '1-ish, it is basically just a paragraph, but it will only take 5 minutes and at this point something is better than nothing',
        nextText: 12,
        addGrade: -2
      },
    ]
  },
  {
    id: 12,
    text: 'What is the last sentence of your paper?',
    options: 
    [
      {
        text: '“This is why this thesis leaves many an average reader discombobulated.”',
        nextText: 13,
        addGrade: 1
      },
      {
        text: '"This is why we must teach not only our generation, but all the generations after ours about this important subject."',
        nextText: 13,
        addGrade: -1
      },
      {
        text: 'The literal words “Mic Drop” with a little mic emoji.',
        nextText: 13,
        addGrade: -2
      }
    ]
  },
  {
    id: 13,
    text: 'Time to submit your paper',
    options: 
    [
      {
        text: 'Proof Read and Spell Check the paper, then submit it.',
        nextText: 103,
        addGrade: 1
      },
      {
        text: 'Submit the paper, and get this over with.',
        nextText: 103,
        addGrade: 0
      },
    ]
  },
  {
    id: 100,
    text: 'You ran out of time.',
    options: 
    [
      {
        text: 'Restart',
        nextText: 0,
        addGrade: 0
      },
      {
        text: 'Afterword',
        nextText: -1,
        addGrade: 0
      }
    ]
  },
  {
    id: 101,
    text: 'You watched the dog video, but you cannot just stop there, next you watch a dog make friends with a dolphin, then a lion, then a bear, until eventually you have seen a dog become friends with a shockingly large variety of animals.',
    options: 
    [
      {
        text: 'Watch that dog and dolphin video',
        nextText: -2,
        addGrade: 0
      },
      {
        text: 'Restart',
        nextText: 0,
        addGrade: 0
      },
      {
        text: 'Afterword',
        nextText: -1,
        addGrade: 0
      },
    ]
  },
  {
    id: 102,
    text: 'You sleep, failing your assignment, but at least you feel rested.',
    options: 
    [
      {
        text: 'Restart',
        nextText: 0,
        addGrade: 0
      },
      {
        text: 'Afterword',
        nextText: -1,
        addGrade: 0
      }
    ]
  },
  {
    id: 103,
    text: 'Finally, you finished the paper and submitted it.\nThe grade you got was a: ',
    options: 
    [
      {
        text: 'Restart',
        nextText: 0,
        addGrade: 0
      },
      {
        text: 'Afterword',
        nextText: -1,
        addGrade: 0
      }
    ]
  },
]

startGame()
