const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filledButton = document.getElementById('filter')
const winOrLoseWrapper = document.getElementById('winOrLose')
const playAgainButton = document.getElementById('playAgain')
const showWinOrLose = document.getElementById('showWinOrLose')

const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
    earrings: false,
    beard: true
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
    earrings: false,
    beard: true
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: true,
    beard: false
  },
  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
    earrings: false,
    beard: false
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
    earrings: false,
    beard: false
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
    earrings: false,
    beard: true
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: true,
    beard: false
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
    earrings: true,
    beard: false
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
    earrings: false,
    beard: true
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
    earrings: false,
    beard: false
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay

const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess" id="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" id="guessButton" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  return secret
} 

let start = () => {
  charactersInPlay = CHARACTERS
  
  document.getElementById('winOrLose').style.display = "none"
  document.getElementById('board').style.display = "flex"
  document.getElementById('showWinOrLose').style.display = "none"

  setSecret()

  let board = generateBoard(charactersInPlay)
    alert("These are your cards, enjoy the game!")
    return board
}

const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // Variable stores what option group (category) ".parentNode.label"  the question belongs to.
  // Variable that stores the actual value of the question we've selected.
  currentQuestion = {
    attribute: questions.options[questions.selectedIndex].value,
    category
  } 
}

const checkQuestion = () => {
  selectQuestion() //'change' was not triggered on haircolor brown as first option, so this needs to be called here.  
  let attribute = currentQuestion.attribute
  let category = questions.options[questions.selectedIndex].parentNode.label
  let question

  if (category === 'hair color') { 
    question = {
        category: 'hairColor',
        attribute
    } 
    category = 'hairColor'
  } else if (category === 'eye color') { 
    question = {
      category: 'eyeColor',
      attribute 
    }
    category = 'eyeColor'
  } else if (category === 'accessories') {
      if ('glasses' === attribute) {
        question = {
          category: 'glasses',
          attribute: true
        }
      }
      else if ('hat' === attribute) {
        question = {
          category: 'hat',
          attribute: true
        }
      } else if ('earrings' === attribute) {
        question = {
          category: 'earrings',
          attribute: true
      }
    }
  } else if (category === 'other') {
      if ('smoker' === attribute) {
      question = {
        category: 'smoker',
        attribute: true
      } 
    } else if ('beard' === attribute) {
      question = {
        category: 'beard',
        attribute: true
      } 
    }
  }

  const keep = secret[question.category] === question.attribute

  currentQuestion = question

  filterCharacters(keep, question.category, question.attribute)
}

// question.category is now group, and question.attribute is now attribute
const filterCharacters = (keep, group, attribute) => {
  charactersFiltered = charactersInPlay.filter(element => {
    if (element[group] === attribute) {
      return keep
    } else {
      return !keep
    }
  })
  charactersInPlay = charactersFiltered

  if (group === 'smoker') {
      if (keep) {
      alert(
        `Yes, the person is a ${questions.options[questions.selectedIndex].value}! Keep all ${group}`
      )
    } else {
      alert(
        `No, the person is not a ${questions.options[questions.selectedIndex].value}! Remove all ${group}`
      )
    } 
  }
  else if (group === 'hairColor') {
    if (keep) { 
      alert(
        `Yes, the person has ${questions.options[questions.selectedIndex].value} hair! Keep all persons with ${attribute} hair`
      )
    } else {
      alert(
        `No, the person doesn't have ${questions.options[questions.selectedIndex].value} hair! Remove all persons with ${attribute} hair`
      )
    }
  } 
  else if (group === 'eyeColor') {
    if (keep) { 
      alert(
        `Yes, the person has eyecolor ${questions.options[questions.selectedIndex].value}! Keep all persons with eyecolor ${attribute}`
      )
    } else {
      alert(
        `No, the person doesn't have eyecolor ${questions.options[questions.selectedIndex].value}! Remove all persons with eyecolor ${attribute} `
      )
    } 
  } 
  else if (group === 'earrings' || group === 'beard' || group === 'hat' || group === 'glasses') {
    if (keep) { 
      alert(
        `Yes, the person wears ${questions.options[questions.selectedIndex].value}! Keep all persons with ${group}`
        )
    } else {
      alert(
        `No, the person doesn't wear ${questions.options[questions.selectedIndex].value}! Remove all persons with ${group} `
      )
    } 
  } 
  generateBoard(); 
}

const guess = (suspect) => {
  if (confirm('Are you sure you want to guess?')) {
    checkMyGuess(suspect)
  } else {
    alert('The game continues!')
  }
}

const checkMyGuess = (suspect) => {
  if (secret.name === suspect) {
    let showWinner = () => { 
      document.getElementById('winOrLose').style.display = "block"
      document.getElementById('showWinOrLose').style.display = "block"
      winOrLoseText.innerHTML = `Congrats! You won the game!`
    } 
    showWinner()
  } else {
      let showLoser = () => {
        document.getElementById('winOrLose').style.display = "block"
        document.getElementById('showWinOrLose').style.display = "block"
        winOrLoseText.innerHTML = `Sorry, that was a wrong guess! You lost!`
      } 
      showLoser()
    }
    document.getElementById('board').style.display = "none" //hides board
}

start()

//Event listeners
playAgainButton.addEventListener('click', start)
restartButton.addEventListener('click', start)
filledButton.addEventListener('click', checkQuestion)
