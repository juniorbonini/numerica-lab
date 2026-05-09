# NumericaLab 🔬

Projeto desenvolvido como atividade prática de JavaScript. É um jogo de adivinhação de números com uma interface mais elaborada do que o básico pedido — quis aproveitar pra praticar CSS com tokens de design, tipografia e um pouco de lógica extra.

## Como funciona

O jogo gera um número aleatório entre 1 e 100. Você tem 10 tentativas para adivinhar qual é. A cada chute, o jogo diz se o número secreto é maior ou menor, e uma barra visual vai fechando o intervalo possível em tempo real.

## O que tem de diferente

Adicionei uma **barra de intervalo de busca** que mostra graficamente onde o número secreto pode estar e sugere o chute ideal a cada rodada. Isso incentiva o jogador a usar busca binária — sempre chutar o meio do intervalo — o que garante acertar qualquer número entre 1 e 100 em no máximo **7 tentativas**. É uma aplicação direta de algoritmo de busca sem o jogador perceber.

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
