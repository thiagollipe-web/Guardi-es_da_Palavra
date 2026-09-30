<p align="center"><img src="logo.png" alt="Léxico — Guardiões da Palavra" width="340"></p>

# Léxico — Guardiões da Palavra

RPG 2D de Língua Portuguesa para o 6º ao 9º ano, com exploração por tiles,
128 questões comentadas, um mapa de **112 × 88 tiles**, **12 missões em quatro
capítulos**, quatro provas, quatro guardiões e uma batalha final.

## Jogar

Abra `index.html` no navegador. O jogo funciona offline, sem instalação ou
bibliotecas externas. O HTML contém o CSS, os scripts clássicos, os sprites
procedurais e todo o banco de questões.

Na abertura, escreva o nome do personagem, escolha menino ou menina e selecione
o ano escolar. Use **Continuar** para retomar o progresso salvo neste navegador.

## Controles

| Ação | Computador | Celular |
|---|---|---|
| Mover e selecionar | WASD ou setas | D-Pad |
| Confirmar / conversar | Enter, Espaço ou Z | A |
| Voltar / abrir caderno | X, B ou Esc | B |
| Inventário | I ou Bolsa | Bolsa |
| Missões | J ou Bolsa → Ver missões | Bolsa → Ver missões |
| Tela cheia | F ou botão | Botão de tela cheia |
| Opções | O ou botão | Opções |
| Ajuda | H | Opções → Como jogar |
| Som | M | Opções → Ativar efeitos sonoros |

No celular em pé, o Canvas é quadrado e as alternativas aparecem em uma coluna.
Deitado ou no computador, a apresentação é 4:3. Em **Opções**, ajuste os controles,
a interface e a preferência de paisagem em tela cheia. O cenário ocupa a largura
útil do celular; o D-Pad tem áreas de toque maiores e os controles ficam junto à tela.

## Bolsa e progresso

A bolsa mostra dicionários, estudos, selos, páginas aguardando entrega, missões
e o caderno de exploração. O caderno tem quatro páginas: mapa, guia, descobertas
e missões.
No menu de batalha, um dicionário elimina duas alternativas incorretas da próxima
questão; um estudo recupera 35 HP e recebe o contra-ataque do monstro.

O salvamento automático registra o nome, o personagem, a posição, os itens,
os selos, as etapas das missões, as descobertas e o histórico das perguntas.
Os salvamentos anteriores migram para o mapa novo e preservam os selos
conquistados; cada selo antigo vale as três missões do respectivo capítulo. O status aparece abaixo
da barra superior. **Salvar agora** também fica disponível na bolsa ao explorar.
O progresso usa o armazenamento local do navegador; não requer conta ou servidor.

## Campanha e dificuldade

Comece com **Nilo das Formas**, a noroeste da vila. Em cada capítulo:

1. Converse com o mentor, encontre as páginas no baú e **entregue-as de volta**.
2. Supere o monstro da clareira da prova.
3. Vença o guardião e receba o selo que libera o próximo capítulo.

O losango dourado no mapa indica o objetivo atual. As trilhas conectam a vila,
as clareiras, os baús e os santuários. A exploração é livre; as missões seguem a
ordem Morfologia → Sintaxe → Ortografia → Literatura Brasileira.

| Capítulo | HP da prova | HP do guardião | Dano por erro no guardião |
|---|---:|---:|---:|
| Bosque das Formas | 60 | 90 | 22 |
| Ruínas da Frase | 90 | 120 | 24 |
| Vale da Escrita | 120 | 150 | 26 |
| Jardim das Histórias | 150 | 180 | 28 |

Cada acerto causa 30 HP de dano crítico. Os encontros comuns também ganham HP
e dano conforme os selos conquistados. Após as 12 missões, o Ruído tem 210 HP e
causa 30 HP por erro, alternando os quatro eixos. A dificuldade do combate
cresce sem trocar o ano escolar escolhido para as questões.

A entrega de páginas recupera 12 HP e dá um dicionário. A prova recupera 25 HP
e dá um dicionário; o guardião recupera 30 HP e dá dois. Prêmios são recebidos
uma única vez. Nara, na vila, recupera todo o HP gratuitamente.

## Arquivos

- `index.html`: jogo completo, em um único arquivo.
- `logo.png`: marca com fundo transparente para a apresentação do projeto.
- `README.md`: esta documentação.
- `.nojekyll`: arquivo de apoio à publicação estática.

A arte do jogo é desenhada por Canvas 2D. A imagem da marca é usada nesta apresentação.
Para publicar, coloque os arquivos na raiz do repositório e sirva `index.html`.

## Proposta pedagógica

Questões organizadas por ano e por Morfologia, Sintaxe, Ortografia e Literatura
Brasileira. Cada resposta recebe um comentário explicativo. O caderno mostra os
resultados por eixo. As referências da BNCC e orientações de uso em duplas ficam
em **Como jogar**. Os desafios não têm limite de tempo.
