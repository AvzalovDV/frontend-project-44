import { getRandomNumber } from '../utils.js'
import runGameLogic from '../index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

// Проверка на простое число
const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

const generateRound = () => {
  const number = Math.abs(getRandomNumber(1, 10))
  const answer = isPrime(number) ? 'yes' : 'no'
  return {
    question: String(number),
    correctAnswer: answer
  }
}

const startPtimeGame = () => runGameLogic(generateRound, description)

export default startPtimeGame
