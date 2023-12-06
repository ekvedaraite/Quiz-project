const questions = [{
    text: "Kam naudingos morkos?",
    choices: ["Niekam", "Hitleriui", "Kepenims", "Odai"],
    answer: "Odai"
 },
 {
    text: "Kam naudingi obuoliai?",
    choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
    answer: "Virškinimui"
 },
 {
    text: "Kokias ligas padeda gydyti agrastai?",
    choices: ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
    answer: "Cukrini diabetą"
 },
 {
    text: "Kokio vitamino gausu apelsinuose?",
    choices: ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
    answer: "Vitamino C"
 },
 {
    text: "Kokiais dalykais yra turtingi arbūzai?",
    choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
    answer: "Visi teisingi"
 }
]


function showQuiz() {
    document.getElementById('startBtn').style.display = 'none'
    document.getElementById('quizContainer').style.display = 'block'
}

class Quiz {
    constructor(questions) {
      this.questions = questions
      this.currentQuestionIndex = 0
      this.score = 0
    }
  
    displayQuestion() {
        const currentQuestion = this.questions[this.currentQuestionIndex]
        document.getElementById("question").textContent = currentQuestion.text
        document.getElementById("questionNumber").textContent = this.currentQuestionIndex + 1
      
        const choiceButtons = document.querySelectorAll('.choiceBtn')
        for (let i = 0; i < choiceButtons.length; i++) {
          choiceButtons[i].textContent = currentQuestion.choices[i]
        }
      }

    checkAnswer(userAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex]
      if (userAnswer === currentQuestion.answer) {
        this.score++
      }
  
      this.currentQuestionIndex++
      if (this.currentQuestionIndex < this.questions.length) {
        this.displayQuestion()
      } else {
        this.endQuiz()
      }
    }
  
    endQuiz() {
      const quizContainer = document.getElementById('quizContainer')
      quizContainer.innerHTML = `<h1>Results: ${this.score}</h1>`
    }
  }
  

  const quiz = new Quiz(questions)
  

  const choiceButtons = document.querySelectorAll('.choiceBtn')
  choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const userAnswer = button.textContent
      quiz.checkAnswer(userAnswer)
    })
  })
  

  quiz.displayQuestion()
  