import readlineSync from 'readline-sync'

const runGameLogic = (generateRound, description) => {
  console.log('Welcome to the Brain Games!')

  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(description)

  let correctAnswers = 0
  const questionsToWin = 3

  while (correctAnswers < questionsToWin) {
    const { question, correctAnswer } = generateRound()

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase().trim()

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      correctAnswers++
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export default runGameLogic
