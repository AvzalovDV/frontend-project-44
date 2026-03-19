import { getRandomNumber } from '../utils.js'
import runGameLogic from '../index.js'

const description = 'What is the result of the expression?'

const operators = ['+', '-', '*', '/']

const getRandomOperator = () =>
  operators[Math.floor(Math.random() * operators.length)]

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    case '/': return a / b
    default: return null
  }
}

const generateRound = () => {
  let num1 = getRandomNumber(1, 100)
  let num2 = getRandomNumber(1, 100)
  const operator = getRandomOperator()

  // Для деления делаем числа целыми
  if (operator === '/') {
    // Генерируем числа так, чтобы результат деления был целым
    const result = Math.floor(Math.random() * 10) + 1
    num1 = num2 * result
  }

  const answer = calculate(num1, num2, operator)

  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: String(answer),
  }
}

const startCalcGame = () => runGameLogic(generateRound, description)

export default startCalcGame
