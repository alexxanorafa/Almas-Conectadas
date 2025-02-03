// script.js
const questions = [
    {
        question: "Na mitologia grega, qual deus cria as conexões entre almas?",
        options: ["Hefesto", "Eros", "Zeus", "Hades"],
        correct: 1,
        explanation: "Segundo a tradição helênica, Eros (Cupido) é responsável por criar os laços amorosos entre as almas"
    },
    {
        question: "No Hinduísmo, o que determina a conexão entre duas almas?",
        options: ["Karma", "Casta", "Mantras", "Yoga"],
        correct: 0,
        explanation: "O karma acumulado de vidas passadas é que determina os encontros de almas gêmeas"
    },
    {
        question: "Qual cultura acredita em 'almas gêmeas de infância'?",
        options: ["Celta", "Maia", "Xamânica Siberiana", "Japonesa"],
        correct: 0,
        explanation: "Os celtas acreditavam que algumas almas se reconhecem desde a infância"
    },
    {
        question: "Na Cabala, quantas almas gêmeas cada pessoa pode ter?",
        options: ["1", "3", "7", "Nenhuma"],
        correct: 3,
        explanation: "A Cabala ensina que não há almas gêmeas, mas sim complementares"
    },
    {
        question: "Qual número na Numerologia representa parcerias?",
        options: ["2", "6", "11", "22"],
        correct: 0,
        explanation: "O número 2 é associado à dualidade e parcerias na Numerologia"
    }
];

let currentQuestion = 0;
let score = 0;
let userName = "";
let targetName = "";

function startGame() {
    userName = document.getElementById('userName').value;
    targetName = document.getElementById('targetName').value;
    
    if(!userName || !targetName) {
        alert("Insira ambos os nomes!");
        return;
    }

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question-text').textContent = q.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = "";
    
    q.options.forEach((option, index) => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(btn);
    });

    updateProgress();
}

function checkAnswer(selectedIndex) {
    const q = questions[currentQuestion];
    const explanation = document.createElement('p');
    explanation.textContent = q.explanation;
    explanation.style.color = '#d4b192';
    explanation.style.marginTop = '15px';

    if(selectedIndex === q.correct) {
        score += 20;
        document.querySelector('#score span').textContent = score;
    }

    document.getElementById('options-container').appendChild(explanation);
    
    setTimeout(() => {
        currentQuestion++;
        if(currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showFinalResult();
        }
    }, 2000);
}

function updateProgress() {
    const progress = (currentQuestion / questions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

function calculateConnection() {
    // Cálculo místico baseado nos nomes
    const calc = (name) => 
        name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 100;
    
    const userCode = calc(userName);
    const targetCode = calc(targetName);
    return Math.abs(userCode - targetCode);
}

function showFinalResult() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    const connectionStrength = 100 - calculateConnection();
    const resultTypes = [
        {type: "Almas Gêmeas Cármicas", min: 80},
        {type: "Parceiros Espirituais", min: 60},
        {type: "Professores Mutuos", min: 40},
        {type: "Desafios Kármicos", min: 0}
    ];

    const result = resultTypes.find(r => connectionStrength >= r.min);
    
    document.getElementById('result-title').textContent = `${userName} & ${targetName}`;
    document.getElementById('result-description').textContent = result.type;
    document.getElementById('soul-connection').innerHTML = `
        <h3>Nível de Conexão</h3>
        <div style="background: #2c3e50; height: 20px; border-radius: 10px; margin: 15px 0;">
            <div style="width: ${connectionStrength}%; background: #d4b192; height: 100%; border-radius: 10px; transition: width 1s"></div>
        </div>
        <p>${getConnectionMessage(connectionStrength)}</p>
    `;
}

function getConnectionMessage(strength) {
    const messages = [
        "Uma jornada de aprendizado mútuo",
        "Conexão com propósito espiritual",
        "Ligação que transcende o tempo",
        "Encontro marcado pelo destino"
    ];
    return messages[Math.floor(strength/25)];
}

function resetGame() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('start-screen').classList.remove('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('userName').value = "";
    document.getElementById('targetName').value = "";
}