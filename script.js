const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A inteligência artificial pode substituir os seres humanos no mercado de trabalho?",
        alternativas: [
            {
                texto: "Sim, em algumas áreas.",
                afirmacao: "Você reconhece que a IA pode substituir algumas funções e acredita que o mercado de trabalho precisará se adaptar."
            },
            {
                texto:  "Não completamente.",
                afirmacao: "Você acredita que habilidades humanas, como criatividade, empatia e pensamento crítico, continuarão sendo importantes."
            }    
           
        ]
    },
    {
       
            enunciado: "Os trabalhadores devem se adaptar ao avanço da IA?",
            alternativas: [
                {
                    texto: "Sim, devem se qualificar.",
                    afirmacao: "Você acredita que aprender novas habilidades é essencial para acompanhar as mudanças do mercado."
                },
                {
                    texto: "As empresas também devem ajudar.",
                    afirmacao: "Você acredita que a adaptação deve ser uma responsabilidade compartilhada entre trabalhadores e empresas.".
                }    
               
            ]
        },
        {
            enunciado: "A IA vai criar mais empregos do que eliminar?",

            alternativas: [
                {
                    texto: "Sim, pode criar novas oportunidades.",
                    afirmacao: "Você acredita que novas tecnologias podem criar profissões e oportunidades que ainda não existem."
                },
                {
                    texto:  "Não necessariamente.",
               
                    afirmacao: "Você acredita que a criação de novos empregos pode não acompanhar a velocidade das substituições causadas pela IA."
                }    
               
            ]
        },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();