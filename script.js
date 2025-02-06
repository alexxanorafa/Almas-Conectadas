// ========== CÓDIGO DO MENU ==========
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    // Abrir/Fechar menu
    menuIcon.addEventListener("click", function(e) {
        e.stopPropagation();
        menu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    // Fechar menu ao clicar fora
    document.addEventListener("click", function(e) {
        if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
            menu.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    });

    // Animar itens do menu
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-3px)";
        });
        
        item.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
        });
    });
});

// script.js completo
const questions = [
    // Mitologia Grega
    {
        question: "Na mitologia grega, qual deus cria as conexões entre almas?",
        options: ["Hefesto", "Eros", "Zeus", "Hades"],
        correct: 1,
        explanation: "Eros (Cupido) é responsável pelos laços amorosos entre almas"
    },
    
    // Hinduísmo
    {
        question: "No Hinduísmo, o que determina a conexão entre duas almas?",
        options: ["Karma", "Casta", "Mantras", "Yoga"],
        correct: 0,
        explanation: "O karma de vidas passadas determina encontros de almas gêmeas"
    },

    // Cultura Celta
    {
        question: "Qual cultura acredita em 'almas gêmeas de infância'?",
        options: ["Celta", "Maia", "Siberiana", "Japonesa"],
        correct: 0,
        explanation: "Celtas acreditavam em reconhecimento de almas desde a infância"
    },

    // Cabala
    {
        question: "Na Cabala, quantas almas gêmeas cada pessoa pode ter?",
        options: ["1", "3", "7", "Nenhuma"],
        correct: 3,
        explanation: "A Cabala fala em almas complementares, não gêmeas"
    },

    // Numerologia
    {
        question: "Qual número representa parcerias na Numerologia?",
        options: ["2", "6", "11", "22"],
        correct: 0,
        explanation: "Número 2 simboliza dualidade e parcerias"
    },

    // Mitologia Egípcia
    {
        question: "Quem tece o destino dos relacionamentos no Egito Antigo?",
        options: ["Hathor", "Neith", "Isis", "Maet"],
        correct: 1,
        explanation: "Neith criava os fios do destino amoroso"
    },

    // Xamanismo Andino
    {
        question: "O que é 'Yanantin' no Xamanismo Andino?",
        options: ["Ritual de fogo", "Almas complementares", "Dança sagrada", "Plantas"],
        correct: 1,
        explanation: "Yanantin = dualidade complementar nas relações"
    },

    // Cultura Chinesa
    {
        question: "Qual símbolo chinês representa união de opostos?",
        options: ["Yin Yang", "Dragão", "Fênix", "Lótus"],
        correct: 0,
        explanation: "Yin Yang simboliza harmonia entre opostos"
    },

    // Astrologia
    {
        question: "Qual aspecto astrológico indica karma?",
        options: ["Quadratura", "Quincúncio", "Nodo Lunar", "Trígono"],
        correct: 2,
        explanation: "Nodos Lunares indicam lições kármicas"
    },

    // Budismo
    {
        question: "No Budismo, o que causa atração entre almas?",
        options: ["Desejo", "Compaixão", "Karma", "Todos"],
        correct: 3,
        explanation: "Combinação complexa de fatores kármicos"
    },

    // Anjos
    {
        question: "Qual arcanjo está associado a relações na Cabala?",
        options: ["Miguel", "Gabriel", "Haniel", "Raziel"],
        correct: 2,
        explanation: "Haniel rege relações amorosas"
    },

    // Cultura Maori
    {
        question: "O que significa 'twin flames' em Maori?",
        options: ["Wairua", "Ihi", "Mana", "Tapu"],
        correct: 0,
        explanation: "Wairua = conexão espiritual profunda"
    },

    // Xamanismo Amazônico
    {
        question: "Qual planta amazônica revela conexões espirituais?",
        options: ["Ayahuasca", "Guaraná", "Andiroba", "Jambu"],
        correct: 0,
        explanation: "Ayahuasca revela conexões em rituais"
    },

    // Sufismo
    {
        question: "No Sufismo, como se chama a união divina?",
        options: ["Zikr", "Fana", "Tariqa", "Sama"],
        correct: 1,
        explanation: "Fana = dissolução do ego na união divina"
    },

    // Alquimia
    {
        question: "Qual elemento alquímico representa união?",
        options: ["Enxofre", "Mercúrio", "Sal", "Ouro"],
        correct: 2,
        explanation: "Sal simboliza força unificadora"
    },

    // Mitologia Nórdica
    {
        question: "Quem decide destinos amorosos na mitologia nórdica?",
        options: ["Freya", "Odin", "Thor", "Loki"],
        correct: 0,
        explanation: "Freya influencia conexões afetivas"
    },

    // Runas
    {
        question: "Qual runa viking simboliza união?",
        options: ["Algiz", "Gebo", "Inguz", "Dagaz"],
        correct: 1,
        explanation: "Gebo representa parcerias equilibradas"
    },

    // Mitologia Yorubá
    {
        question: "Qual orixá rege relacionamentos no Candomblé?",
        options: ["Oxum", "Xangô", "Ogum", "Iemanjá"],
        correct: 0,
        explanation: "Oxum rege amor e relacionamentos"
    },

    // Astrologia Maia
    {
        question: "Qual signo maia representa parcerias?",
        options: ["Batz", "Ee", "Aj", "Tziquin"],
        correct: 1,
        explanation: "Ee simboliza união e dualidade"
    },

    // Budismo Tibetano
    {
        question: "O que são 'tulku' no Budismo Tibetano?",
        options: ["Mantras", "Reencarnações", "Instrumentos", "Têxteis"],
        correct: 1,
        explanation: "Tulkus são reencarnações de mestres"
    },

    // Cultura Japonesa
    {
        question: "Qual conceito japonês significa 'destino amoroso'?",
        options: ["En", "Koi", "Ai", "Mono no aware"],
        correct: 0,
        explanation: "En = laços kármicos predestinados"
    },

    // Mitologia Suméria
    {
        question: "Qual deusa suméria representa o amor?",
        options: ["Inanna", "Ninhursag", "Ereshkigal", "Nammu"],
        correct: 0,
        explanation: "Inanna era deusa do amor e fertilidade"
    },

    // Cultura Polinésia
    {
        question: "O que significa 'aumakua' no Havaí?",
        options: ["Ancestral", "Amante", "Inimigo", "Deus"],
        correct: 0,
        explanation: "Aumakua = espírito ancestral protetor"
    },

    // Xamanismo Coreano
    {
        question: "O que é 'soul loss' no Xamanismo Coreano?",
        options: ["Doença", "Possessão", "Perda espiritual", "Iniciação"],
        correct: 2,
        explanation: "Perda de parte da alma por trauma"
    },

    // Misticismo Eslavo
    {
        question: "Qual figura mitológica eslava une casais?",
        options: ["Lada", "Perun", "Veles", "Svarog"],
        correct: 0,
        explanation: "Lada preside matrimônios e harmonia"
    },

    // Filosofia Taoísta
    {
        question: "O que representa 'Hun' no Taoísmo?",
        options: ["Alma", "Corpo", "Mente", "Espírito"],
        correct: 3,
        explanation: "Hun = espírito que sobrevive à morte"
    },

    // 25 restantes (formato condensado)
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
    },
    {
        question: "Na mitologia Basca, quem é Mari?",
        options: ["Deusa da terra", "Espírito do fogo", "Anjo da morte", "Protetora das florestas"],
        correct: 0,
        explanation: "Mari é a deusa-mãe que conecta todas as formas de vida"
    },
    {
        question: "Qual deusa armênia representa amor e fertilidade?",
        options: ["Anahit", "Astghik", "Nane", "Tir"],
        correct: 1,
        explanation: "Astghik é a deusa do amor e das águas sagradas"
    },
    {
        question: "O que descreve o 'Andrógino' no mito de Platão?",
        options: ["Ser dividido em dois", "Anjo caído", "Deus primordial", "Animal sagrado"],
        correct: 0,
        explanation: "Platão descreve humanos como metades buscando completude"
    },
    {
        question: "O que é 'Nommo' para os Dogon?",
        options: ["Rituais de passagem", "Seres aquáticos sagrados", "Danças rituais", "Instrumentos musicais"],
        correct: 1,
        explanation: "Nommo são seres cósmicos que trouxeram sabedoria à humanidade"
    },
    {
        question: "O que é 'Tengri' no Xamanismo Mongol?",
        options: ["Céu sagrado", "Espírito ancestral", "Rito de passagem", "Animal de poder"],
        correct: 0,
        explanation: "Tengri é o céu eterno que unifica todas as almas"
    },
    {
        question: "Qual deus asteca criou os laços matrimoniais?",
        options: ["Xochipilli", "Xochiquetzal", "Tezcatlipoca", "Quetzalcoatl"],
        correct: 1,
        explanation: "Xochiquetzal presidia os relacionamentos e a arte"
    },
    {
        question: "O que é 'Syzygy' no Gnosticismo?",
        options: ["União divina", "Livro sagrado", "Ritual de purificação", "Demônio"],
        correct: 0,
        explanation: "Syzygy representa a união de complementos espirituais"
    },
    {
        question: "O que é 'Pillán' para os Mapuche?",
        options: ["Espírito ancestral", "Vulcão sagrado", "Linhagem familiar", "Animal totêmico"],
        correct: 0,
        explanation: "Pillán são espíritos que conectam gerações"
    },
    {
        question: "Quem é Bathala na mitologia Filipina?",
        options: ["Deus criador", "Espírito da água", "Guardião das almas", "Anjo da morte"],
        correct: 0,
        explanation: "Bathala criou o mundo e as conexões entre seres"
    },
    {
        question: "O que são 'Jiva' no Jainismo?",
        options: ["Almas individuais", "Rituais", "Deuses menores", "Textos sagrados"],
        correct: 0,
        explanation: "Jivas são almas presas no ciclo de renascimentos"
    },
    {
        question: "O que é 'Anhangá' para os Tupi-Guarani?",
        options: ["Protetor das florestas", "Espírito errante", "Deus do sol", "Anjo da morte"],
        correct: 1,
        explanation: "Anhangá guia almas perdidas na natureza"
    },
    {
        question: "O que é 'Noaidi' para os Sami?",
        options: ["Xamã", "Deus do trovão", "Espírito animal", "Canção sagrada"],
        correct: 0,
        explanation: "Noaidi são xamãs que viajam entre mundos"
    },
    {
        question: "Quem era Astarote na mitologia Cananéia?",
        options: ["Deusa da fertilidade", "Demônio da guerra", "Espírito do mar", "Anjo da luz"],
        correct: 0,
        explanation: "Astarote regia laços amorosos e fertilidade"
    },
    {
        question: "Qual loa rege relacionamentos no Vodou?",
        options: ["Erzulie", "Baron Samedi", "Damballa", "Ogoun"],
        correct: 0,
        explanation: "Erzulie Freda é a loa do amor e beleza"
    },
    {
        question: "O que é 'Tjukurpa' para os Aborígenes?",
        options: ["Tempo dos sonhos", "Rito de passagem", "Arte sagrada", "Dança ritual"],
        correct: 0,
        explanation: "Tjukurpa é a realidade ancestral que conecta tudo"
    },
    {
        question: "O que é 'Logos' para os Estóicos?",
        options: ["Razão universal", "Destino individual", "Virtude", "Paixão"],
        correct: 0,
        explanation: "Logos é a força racional que une o cosmos"
    },
    {
        question: "Quem é Pele na mitologia Havaiana?",
        options: ["Deusa do vulcão", "Espírito do oceano", "Guardião das estrelas", "Ancestral sagrado"],
        correct: 0,
        explanation: "Pele representa a força criadora e destrutiva da natureza"
    },
    {
        question: "O que é 'Amazigh' para os Berberes?",
        options: ["Povo livre", "Montanha sagrada", "Rito de fertilidade", "Linguagem dos deuses"],
        correct: 0,
        explanation: "Amazigh simboliza a conexão com a terra ancestral"
    },
    {
        question: "O que é 'Umai' no Xamanismo Siberiano?",
        options: ["Deusa mãe", "Espírito da caça", "Anjo protetor", "Rito de passagem"],
        correct: 0,
        explanation: "Umai protege crianças e conexões familiares"
    },
    {
        question: "Quem eram os Lares na Roma Antiga?",
        options: ["Deuses domésticos", "Sacerdotes", "Anjos da morte", "Guerreiros"],
        correct: 0,
        explanation: "Lares protegiam lares e relações familiares"
    },
    {
        question: "Quem era Baal na mitologia Fenícia?",
        options: ["Deus da fertilidade", "Rei dos mortos", "Espírito do mar", "Guardião solar"],
        correct: 0,
        explanation: "Baal Hadad garantia a união entre terra e céu"
    },
    {
        question: "Qual elemento representa união na Alquimia Chinesa?",
        options: ["Madeira", "Metal", "Água", "Terra"],
        correct: 1,
        explanation: "Metal simboliza força e durabilidade nas relações"
    }
    // Adicione mais 24 seguindo o padrão...
];

// Sistema do Jogo 
let currentQuestion = 0;
let score = 0;
let userName = "";
let targetName = "";
let selectedQuestions = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame() {
    userName = document.getElementById('userName').value.trim();
    targetName = document.getElementById('targetName').value.trim();
    
    if(!userName || !targetName) {
        alert("Insira ambos os nomes!");
        return;
    }

    selectedQuestions = shuffleArray([...questions]).slice(0, 5);
    currentQuestion = 0;
    score = 0;
    document.querySelector('#score span').textContent = score;
    
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const q = selectedQuestions[currentQuestion];
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
    const q = selectedQuestions[currentQuestion];
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
        if(currentQuestion < selectedQuestions.length) {
            loadQuestion();
        } else {
            showFinalResult();
        }
    }, 2000);
}

function updateProgress() {
    const progress = (currentQuestion / selectedQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

function calculateConnection() {
    const calc = (name) => 
        name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 100;
    
    const userCode = calc(userName);
    const targetCode = calc(targetName);
    return Math.abs(userCode - targetCode);
}

function showFinalResult() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    // Cálculo híbrido
    const nameScore = 100 - calculateConnection();
    const quizScore = score;
    const totalScore = Math.round((nameScore * 0.5) + (quizScore * 0.5));

    const resultTypes = [
        {type: "Almas Gêmeas Cármicas", min: 80, desc: "Ligação ancestral com forte propósito evolutivo"},
        {type: "Parceiros Espirituais", min: 60, desc: "Conexão para crescimento e aprendizado mútuo"},
        {type: "Professores Mutuos", min: 40, desc: "Relação de ensino e aprendizagem recíproca"},
        {type: "Desafios Kármicos", min: 0, desc: "Oportunidade para resolução de questões passadas"}
    ];

    const result = resultTypes.find(r => totalScore >= r.min);
    
    // Construção do resultado
    document.getElementById('result-title').textContent = `${userName} & ${targetName}`;
    document.getElementById('result-description').innerHTML = `
        <h2 style="color: #d4b192; margin: 15px 0;">${result.type}</h2>
        <p style="font-size: 1.1em;">${result.desc}</p>
    `;

    document.getElementById('soul-connection').innerHTML = `
        <div style="margin: 20px 0;">
            <div style="display: flex; justify-content: space-between; margin: 10px 0;">
                <span>Conexão pelos Nomes:</span>
                <span>${nameScore}%</span>
            </div>
            <div style="background: #2c3e50; height: 10px; border-radius: 5px;">
                <div style="width: ${nameScore}%; background: #d4b192; height: 100%; border-radius: 5px; transition: width 1s;"></div>
            </div>

            <div style="display: flex; justify-content: space-between; margin: 10px 0;">
                <span>Sintonia Espiritual:</span>
                <span>${quizScore}%</span>
            </div>
            <div style="background: #2c3e50; height: 10px; border-radius: 5px;">
                <div style="width: ${quizScore}%; background: #d4b192; height: 100%; border-radius: 5px; transition: width 1s;"></div>
            </div>
        </div>

        <h3 style="color: #d4b192; margin: 20px 0;">Conexão Total: ${totalScore}%</h3>
        <div style="background: #2c3e50; height: 20px; border-radius: 10px;">
            <div style="width: ${totalScore}%; background: #d4b192; height: 100%; border-radius: 10px; transition: width 1s;"></div>
        </div>

        <p style="font-size: 1.2em; margin-top: 20px; color: #d4b192;">
            ${getConnectionMessage(totalScore)}
        </p>
    `;
}

function getConnectionMessage(strength) {
    const messages = [
        "Uma jornada de crescimento conjunto se inicia",
        "Conexão com lições espirituais importantes",
        "Ligação que transcende circunstâncias",
        "Encontro com propósito divino"
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
