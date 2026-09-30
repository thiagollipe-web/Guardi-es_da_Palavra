# Classificação online — Léxico

A interface da classificação já está integrada ao jogo.

## Ativar

1. Crie um projeto no Supabase.
2. Execute `supabase-ranking.sql` no SQL Editor.
3. Abra `ranking-config.js`.
4. Preencha `url` com a URL do projeto e `anonKey` com a chave publicável/anon.
5. Aguarde o GitHub Pages publicar a nova versão.

## Funcionamento

Ao concluir a aventura final, o jogo calcula a pontuação e cria um registro. Com internet, o registro é enviado imediatamente. Sem internet, fica em uma fila local e tenta sincronizar quando a conexão voltar.

A tela de classificação permite consultar os 50 melhores resultados e filtrar por 6º, 7º, 8º ou 9º ano.

## Privacidade

O ranking usa apelido e dados de desempenho. Para uso com alunos, prefira apelidos ou primeiros nomes e evite nomes completos, e-mails ou outros dados pessoais.

## Limitação

Como o resultado é calculado no navegador, esta classificação é apropriada para uma atividade didática, mas não é um sistema anti-fraude forte.
