// ========== CÓDIGO DO MENU ==========
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    menuIcon.addEventListener("click", function(e) {
        e.stopPropagation();
        menu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    document.addEventListener("click", function(e) {
        if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
            menu.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    });

    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-3px)";
        });
        
        item.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
        });
    });
});

// ========== TODAS AS QUESTÕES ==========
const questions = [
    {
        question: "Na mitologia grega, qual deus cria as conexões entre almas?",
        options: ["Hefesto", "Eros", "Zeus", "Hades"],
        correct: 1,
        explanation: "Eros (Cupido) é responsável pelos laços amorosos entre almas"
    },
    {
        question: "No Hinduísmo, o que determina a conexão entre duas almas?",
        options: ["Karma", "Casta", "Mantras", "Yoga"],
        correct: 0,
        explanation: "O karma de vidas passadas determina encontros de almas gêmeas"
    },
    {
        question: "Qual cultura acredita em 'almas gêmeas de infância'?",
        options: ["Celta", "Maia", "Siberiana", "Japonesa"],
        correct: 0,
        explanation: "Celtas acreditavam em reconhecimento de almas desde a infância"
    },
    {
        question: "Na Cabala, quantas almas gêmeas cada pessoa pode ter?",
        options: ["1", "3", "7", "Nenhuma"],
        correct: 3,
        explanation: "A Cabala fala em almas complementares, não gêmeas"
    },
    {
        question: "Qual número representa parcerias na Numerologia?",
        options: ["2", "6", "11", "22"],
        correct: 0,
        explanation: "Número 2 simboliza dualidade e parcerias"
    },
    {
        question: "Quem tece o destino dos relacionamentos no Egito Antigo?",
        options: ["Hathor", "Neith", "Isis", "Maet"],
        correct: 1,
        explanation: "Neith criava os fios do destino amoroso"
    },
    {
        question: "O que é 'Yanantin' no Xamanismo Andino?",
        options: ["Ritual de fogo", "Almas complementares", "Dança sagrada", "Plantas"],
        correct: 1,
        explanation: "Yanantin = dualidade complementar nas relações"
    },
    {
        question: "Qual símbolo chinês representa união de opostos?",
        options: ["Yin Yang", "Dragão", "Fênix", "Lótus"],
        correct: 0,
        explanation: "Yin Yang simboliza harmonia entre opostos"
    },
    {
        question: "Qual aspecto astrológico indica karma?",
        options: ["Quadratura", "Quincúncio", "Nodo Lunar", "Trígono"],
        correct: 2,
        explanation: "Nodos Lunares indicam lições kármicas"
    },
    {
        question: "No Budismo, o que causa atração entre almas?",
        options: ["Desejo", "Compaixão", "Karma", "Todos"],
        correct: 3,
        explanation: "Combinação complexa de fatores kármicos"
    },
    {
        question: "Qual arcanjo está associado a relações na Cabala?",
        options: ["Miguel", "Gabriel", "Haniel", "Raziel"],
        correct: 2,
        explanation: "Haniel rege relações amorosas"
    },
    {
        question: "O que significa 'twin flames' em Maori?",
        options: ["Wairua", "Ihi", "Mana", "Tapu"],
        correct: 0,
        explanation: "Wairua = conexão espiritual profunda"
    },
    {
        question: "Qual planta amazônica revela conexões espirituais?",
        options: ["Ayahuasca", "Guaraná", "Andiroba", "Jambu"],
        correct: 0,
        explanation: "Ayahuasca revela conexões em rituais"
    },
    {
        question: "No Sufismo, como se chama a união divina?",
        options: ["Zikr", "Fana", "Tariqa", "Sama"],
        correct: 1,
        explanation: "Fana = dissolução do ego na união divina"
    },
    {
        question: "Qual elemento alquímico representa união?",
        options: ["Enxofre", "Mercúrio", "Sal", "Ouro"],
        correct: 2,
        explanation: "Sal simboliza força unificadora"
    },
    {
        question: "Quem decide destinos amorosos na mitologia nórdica?",
        options: ["Freya", "Odin", "Thor", "Loki"],
        correct: 0,
        explanation: "Freya influencia conexões afetivas"
    },
    {
        question: "Qual runa viking simboliza união?",
        options: ["Algiz", "Gebo", "Inguz", "Dagaz"],
        correct: 1,
        explanation: "Gebo representa parcerias equilibradas"
    },
    {
        question: "Qual orixá rege relacionamentos no Candomblé?",
        options: ["Oxum", "Xangô", "Ogum", "Iemanjá"],
        correct: 0,
        explanation: "Oxum rege amor e relacionamentos"
    },
    {
        question: "Qual signo maia representa parcerias?",
        options: ["Batz", "Ee", "Aj", "Tziquin"],
        correct: 1,
        explanation: "Ee simboliza união e dualidade"
    },
    {
        question: "O que são 'tulku' no Budismo Tibetano?",
        options: ["Mantras", "Reencarnações", "Instrumentos", "Têxteis"],
        correct: 1,
        explanation: "Tulkus são reencarnações de mestres"
    },
    {
        question: "Qual conceito japonês significa 'destino amoroso'?",
        options: ["En", "Koi", "Ai", "Mono no aware"],
        correct: 0,
        explanation: "En = laços kármicos predestinados"
    },
    {
        question: "Qual deusa suméria representa o amor?",
        options: ["Inanna", "Ninhursag", "Ereshkigal", "Nammu"],
        correct: 0,
        explanation: "Inanna era deusa do amor e fertilidade"
    },
    {
        question: "O que significa 'aumakua' no Havaí?",
        options: ["Ancestral", "Amante", "Inimigo", "Deus"],
        correct: 0,
        explanation: "Aumakua = espírito ancestral protetor"
    },
    {
        question: "O que é 'soul loss' no Xamanismo Coreano?",
        options: ["Doença", "Possessão", "Perda espiritual", "Iniciação"],
        correct: 2,
        explanation: "Perda de parte da alma por trauma"
    },
    {
        question: "Qual figura mitológica eslava une casais?",
        options: ["Lada", "Perun", "Veles", "Svarog"],
        correct: 0,
        explanation: "Lada preside matrimônios e harmonia"
    },
    {
        question: "O que representa 'Hun' no Taoísmo?",
        options: ["Alma", "Corpo", "Mente", "Espírito"],
        correct: 3,
        explanation: "Hun = espírito que sobrevive à morte"
    },
    {
        question: "Na Alquimia, o que a 'Conjunção' representa?",
        options: ["Separação", "União", "Purificação", "Decomposição"],
        correct: 1,
        explanation: "Fase de união dos opostos"
    },
    {
        question: "Na mitologia Zoroastriana, o que são 'Fravashi'?",
        options: ["Anjos da morte", "Espíritos ancestrais", "Demônios", "Anjos guardiões"],
        correct: 1,
        explanation: "Fravashi são espíritos ancestrais que guiam os vivos"
    },
    {
        question: "O que significa 'Silap Inua' para os Inuit?",
        options: ["Espírito do vento", "Força vital universal", "Deus do mar", "Anjo da neve"],
        correct: 1,
        explanation: "Silap Inua é a força vital que conecta todos os seres"
    },
    {
        question: "Qual deusa báltica preside os nascimentos e destinos?",
        options: ["Laima", "Gabija", "Ragana", "Medeina"],
        correct: 0,
        explanation: "Laima controla o destino e os ciclos da vida"
    }
];

// ========== VARIÁVEIS GLOBAIS ==========
let currentQuestion = 0;
let quizScore = 0;
let userName = "";
let targetName = "";
let selectedQuestions = [];
let currentMode = "";

// ========== FUNÇÕES AUXILIARES ==========
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ========== FUNÇÕES PRINCIPAIS ==========
function startConnectionTest() {
    userName = document.getElementById('userName').value.trim();
    targetName = document.getElementById('targetName').value.trim();
    
    if(!userName || !targetName) {
        alert("Insira ambos os nomes!");
        return;
    }

    currentMode = "connection";
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    showConnectionResult();
}

function startQuizOnly() {
    // Nomes são opcionais para o quiz
    userName = document.getElementById('userName').value.trim() || "Participante";
    targetName = document.getElementById('targetName').value.trim() || "Alma Conexa";
    
    currentMode = "quiz-only";
    
    if (!questions || questions.length === 0) {
        alert("Erro: Banco de questões não carregado!");
        return;
    }
    
    selectedQuestions = shuffleArray([...questions]).slice(0, 5);
    currentQuestion = 0;
    quizScore = 0;
    
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    document.querySelector('#score span').textContent = "0";
    document.getElementById('progress-fill').style.width = "0%";
    
    loadQuestion();
}

function loadQuestion() {
    const q = selectedQuestions[currentQuestion];
    document.getElementById('question-text').textContent = `Pergunta ${currentQuestion + 1}: ${q.question}`;
    
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
    const q = selectedQuestions[currentQuestion];
    const optionsContainer = document.getElementById('options-container');
    
    const explanation = document.createElement('p');
    explanation.textContent = q.explanation;
    explanation.style.color = '#d4b192';
    explanation.style.marginTop = '15px';
    explanation.style.fontStyle = 'italic';
    optionsContainer.appendChild(explanation);
    
    if(selectedIndex === q.correct) {
        quizScore += 20;
        document.querySelector('#score span').textContent = quizScore;
    }
    
    setTimeout(() => {
        currentQuestion++;
        if(currentQuestion < selectedQuestions.length) {
            loadQuestion();
        } else {
            if (currentMode === "quiz-only") {
                showQuizOnlyResult();
            }
        }
    }, 2000);
}

function updateProgress() {
    const progress = (currentQuestion / selectedQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

// ========== CÁLCULO DE CONEXÃO ==========
function calculateConnectionScore() {
    const calculateNameValue = (name) => {
        return name.toLowerCase().split('').reduce((acc, char, index) => {
            return acc + (char.charCodeAt(0) - 96) * (index + 1);
        }, 0);
    };
    
    const userValue = calculateNameValue(userName);
    const targetValue = calculateNameValue(targetName);
    
    const similarity = 100 - Math.abs(userValue - targetValue) % 101;
    return Math.min(100, Math.max(0, similarity));
}

// ========== RESULTADOS ==========
function showConnectionResult() {
    const connectionScore = calculateConnectionScore();
    
    const resultTypes = [
        {type: "Almas Gêmeas Cármicas", min: 80, desc: "Ligação ancestral com forte propósito evolutivo"},
        {type: "Parceiros Espirituais", min: 60, desc: "Conexão para crescimento e aprendizado mútuo"},
        {type: "Professores Mutuos", min: 40, desc: "Relação de ensino e aprendizagem recíproca"},
        {type: "Desafios Kármicos", min: 0, desc: "Oportunidade para resolução de questões passadas"}
    ];

    const result = resultTypes.find(r => connectionScore >= r.min);
    
    document.getElementById('result-title').textContent = `${userName} & ${targetName}`;
    document.getElementById('result-description').innerHTML = `
        <h2 style="color: #d4b192; margin: 15px 0;">${result.type}</h2>
        <p style="font-size: 1.1em;">${result.desc}</p>
    `;

    document.getElementById('soul-connection').innerHTML = `
        <div style="margin: 20px 0;">
            <div style="display: flex; justify-content: space-between; margin: 10px 0;">
                <span>Conexão Espiritual:</span>
                <span>${connectionScore}%</span>
            </div>
            <div style="background: #2c3e50; height: 15px; border-radius: 10px;">
                <div style="width: ${connectionScore}%; background: #d4b192; height: 100%; border-radius: 10px; transition: width 1s;"></div>
            </div>
        </div>

        <p style="font-size: 1.2em; margin-top: 20px; color: #d4b192;">
            ${getConnectionMessage(connectionScore)}
        </p>
        
        <div style="margin-top: 30px; padding: 15px; background: rgba(212, 177, 146, 0.1); border-radius: 8px;">
            <p style="color: #d4b192; margin-bottom: 10px;">
                <strong>Quer testar seu conhecimento?</strong>
            </p>
            <button onclick="startQuizFromResult()" style="background-color: #2c3e50; color: #d4b192; border: 2px solid #d4b192; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: bold;">
                Fazer Quiz das Almas
            </button>
        </div>
    `;
}

function showQuizOnlyResult() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    const resultTypes = [
        {type: "Mestre Espiritual", min: 80, desc: "Conhecimento profundo sobre conexões espirituais"},
        {type: "Aprendiz Avançado", min: 60, desc: "Bom conhecimento sobre mitologia das almas"},
        {type: "Explorador Curioso", min: 40, desc: "Conhecimento básico sobre almas gêmeas"},
        {type: "Iniciante na Jornada", min: 0, desc: "Começo do aprendizado espiritual"}
    ];

    const result = resultTypes.find(r => quizScore >= r.min);
    
    document.getElementById('result-title').textContent = "Seu Resultado no Quiz";
    document.getElementById('result-description').innerHTML = `
        <h2 style="color: #d4b192; margin: 15px 0;">${result.type}</h2>
        <p style="font-size: 1.1em;">${result.desc}</p>
    `;

    document.getElementById('soul-connection').innerHTML = `
        <div style="margin: 20px 0;">
            <div style="display: flex; justify-content: space-between; margin: 10px 0;">
                <span>Pontuação no Quiz:</span>
                <span>${quizScore}%</span>
            </div>
            <div style="background: #2c3e50; height: 20px; border-radius: 10px;">
                <div style="width: ${quizScore}%; background: #d4b192; height: 100%; border-radius: 10px; transition: width 1s;"></div>
            </div>
        </div>

        <div style="margin-top: 20px; padding: 15px; background: rgba(212, 177, 146, 0.1); border-radius: 8px;">
            <p style="color: #d4b192; margin-bottom: 10px;">
                <strong>Quer calcular a conexão pelos nomes?</strong>
            </p>
            <button onclick="startConnectionFromQuiz()" style="background-color: #d4b192; color: #2c3e50; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: bold;">
                Calcular Conexão pelos Nomes
            </button>
        </div>
    `;
}

function startQuizFromResult() {
    // Mantém os nomes que já estão preenchidos
    if (!userName || userName === "Participante" || !targetName || targetName === "Alma Conexa") {
        // Se não tiver nomes, volta para início
        document.getElementById('result-screen').classList.add('hidden');
        document.getElementById('start-screen').classList.remove('hidden');
    } else {
        startQuizOnly();
    }
}

function startConnectionFromQuiz() {
    // Vai para o teste de conexão
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
}

function getConnectionMessage(strength) {
    const messages = [
        "Uma jornada de crescimento conjunto se inicia",
        "Conexão com lições espirituais importantes",
        "Ligação que transcende circunstâncias",
        "Encontro com propósito divino"
    ];
    return messages[Math.floor(strength/25)] || messages[0];
}

function resetGame() {
    currentQuestion = 0;
    quizScore = 0;
    document.getElementById('start-screen').classList.remove('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.add('hidden');
    // Mantém os nomes preenchidos para conveniência do usuário
}

// ========== COMPATIBILIDADE ==========
function startGame() {
    // Para compatibilidade com o botão antigo
    startConnectionTest();
}
