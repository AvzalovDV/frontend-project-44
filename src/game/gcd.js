import { getRandomNumber } from '../utils.js'
import runGameLogic from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'

const getGcd = (a, b) => {
  a = Math.abs(a)
  b = Math.abs(b)
  if (a === 0) return b
  if (b === 0) return a
  while (b) [a, b] = [b, a % b]
  return a
}

const generateRound = () => {
  let a = getRandomNumber(1, 100)
  let b = getRandomNumber(1, 100)

  const question = `${a} ${b}`
  const correctAnswer = String(getGcd(a, b))
  return {
    question, correctAnswer,
  }
}

const startGcdGame = () => runGameLogic(generateRound, description)

export default startGcdGame
