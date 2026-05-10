# NumericaLab 🔬

Projeto desenvolvido como atividade prática de JavaScript. É um jogo de adivinhação de números com uma interface mais elaborada do que o básico pedido — quis aproveitar pra praticar CSS com tokens de design, tipografia e um pouco de lógica extra.

## Como funciona

O jogo gera um número aleatório entre 1 e 100. Você tem 10 tentativas para adivinhar qual é. A cada chute, o jogo diz se o número secreto é maior ou menor, e uma barra visual vai fechando o intervalo possível em tempo real.

## O que tem de diferente

Implementei **busca binária** como mecânica central do jogo.

A cada chute errado, o intervalo possível é cortado ao meio — se o chute foi alto, o teto cai; se foi baixo, o piso sobe. A barra visual reflete isso em tempo real, e o ponto ideal exibido embaixo é sempre o meio exato do intervalo restante.

A matemática por trás: `log₂(100) ≈ 6.6`, ou seja, arredondando pra cima, qualquer número entre 1 e 100 pode ser encontrado em no máximo **7 tentativas** seguindo essa estratégia — com 10 disponíveis no jogo.

A ideia foi tornar um conceito clássico de algoritmos tangível e jogável, sem que o jogador precise saber o nome do que está fazendo.

## Tecnologias

- HTML5
- CSS3 (com variáveis customizadas, tokens de tamanho em `rem`, reset `62.5%`)
- JavaScript puro (sem frameworks)

## Como rodar

Só abrir o `index.html` no navegador. Sem dependências, sem build.

## Estrutura

```
public/
├── index.html
├── styles/
│   └── styles.css
└── script/
    └── index.js
```
