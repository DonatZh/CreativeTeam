const quizData = [
    {
        question: "Personi i cili punon për dikë tjeter:",
        a: "Aftesi",
        b: "I punësuar",
        c: "Ndërmarres",
        d: "Ndërmarrje",
        correct: "b",
    },
    {
        question: "Departamenti për mbikqyrjen e punesimit:",
        a: "Ndërmarresit",
        b: "Zyra e shefit",
        c: "Departamenti i menaxhimit",
        d: "Departamenti i burimeve njerezore",
        correct: "d",
    },
    {
        question: "Njerezit që zoterojne,operojne dhe rrezikojne një sipermarrje biznesi:",
        a: "Ndërmarresi",
        b: "Ndërmarresit",
        c: "Rrezikues",
        d: "Operuesit",
        correct: "b",
    },
    {
        question: "Cilat jane avantazhet e ndërmarresise ?",
        a: "Je shef i vetvetes",
        b: "Bën vendimet vetem",
        c: "Zgjedh se ku te punosh",
        d: "Ore te gjata pune",
        correct: "b",
        correct: "c",
    },
    {
        question: "Cilat janë disavantazhet e ndermarrësise ?",
        a: "Ke impakt ne shoqeri",
        b: "Zgjedh se me ke te punosh",
        c: "Financimi i veshtir",
        d: "Nuk ke orar të caktuar",
        correct: "d",
        correct: "c",
    },
    {
        question: "Qfare lloj biznesi sipermarres prodhon produktin qe e shesin ?",
        a: "Shitje me shumice",
        b: "Shitje me pakice",
        c: "Industri prodhimi",
        d: "Industri perpunuese",
        correct: "c",
    },
      {
        question: "Cili lloj biznesi sipermarres u shet produkte drejtperdrejt njerëzve që i perdorin ato ?",
        a: "Sherbime",
        b: "Shitje me shumice",
        c: "Biznes",
        d: "Shitje me pakice",
        correct: "d",
    },
      {
        question: "Qka është kostoja fikse ?",
        a: "Kostoja e produktit",
        b: "Kostoja që mbetet e njejte",
        c: "Matje e disavantazhit prodhimit",
        d: "Matje e avantazhit prodhimit",
        correct: "b",
    },
        {
        question: "Pse një start-up mund të deshtoje ?",
        a: "Pjesmarrja ne marketin e gabuar",
        b: "Dashuria ndaj klientit",
        c: "Eksperienca jo e duhur",
        d: "Nuk ka financime",
        correct: "a",
        correct:"d",
    },
        {
        question: "Qfare e bën nje start-up te suksesshem?",
        a: "Planifimi i duhur",
        b: "Ideja vetem e imja",
        c: "Kerkimi jo i duhur",
        d: "Puna ekipore",
        correct: "a",
        correct:"d",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Ju u pergjigjet ${score} prej ${quizData.length} pytje te sakta</h2>

           <button onclick="location.reload()">Fillo Perseri</button>
           `
       }
    }
})