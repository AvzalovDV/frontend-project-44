import { getRandomNumber } from '../utils.js'
import runGameLogic from '../index.js'

const description = 'What number is missing in the progression?'

const generateProgression = () => {
  // Длина от 5 до 12 чисел
  const length = getRandomNumber(5, 12)

  // Первый член от -20 до 20
  const firstTerm = getRandomNumber(-20, 20)

  // Разность от -5 до 5, исключая 0
  let difference = getRandomNumber(-5, 5)
  while (difference === 0) {
    difference = getRandomNumber(-5, 5)
  }

  // Генерируем прогрессию
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(firstTerm + i * difference)
  }

  return progression
}

const displayWithHidden = (progression, hiddenIndex) => {
  const display = []
  for (let i = 0; i < progression.length; i++) {
    if (i === hiddenIndex) {
      display.push('..')
    }
    else {
      display.push(progression[i])
    }
  }
  return display.join(', ')
}

const generateRound = () => {
  // Генерируем прогрессию
  const progression = generateProgression()
  const length = progression.length

  // Выбираем случайную позицию для скрытия
  const hiddenIndex = getRandomNumber(0, length - 1)
  const hiddenNumber = progression[hiddenIndex]

  const question = displayWithHidden(progression, hiddenIndex)
  const correctAnswer = String(hiddenNumber)

  return { question, correctAnswer }
}

const startProgrGame = () => runGameLogic(generateRound, description)

export default startProgrGame
