# Animação ao Rolar a Página

Este projeto é um exemplo simples de animações com JavaScript e CSS que são ativadas conforme o usuário rola a página. Cada "caixa" de conteúdo desliza da direita ou da esquerda para o centro da tela quando entra na área visível.

## 📷 Prévia

Ao rolar a página, caixas azuis com texto "Conteúdo" aparecem suavemente, criando um efeito visual agradável.

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3 (Flexbox, Transições e Responsividade)**
- **JavaScript (DOM e Eventos de Scroll)**

## 🚀 Como usar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. Role a página para ver a animação em ação.
4. Tem o vscode e extensão liveserve para visualização.

## 🔍 Como funciona

- O JavaScript detecta a rolagem da página.
- Quando um elemento com a classe `.caixa` entra na área visível (80% da altura da janela), ele recebe a classe `.mostrar`.
- A classe `.mostrar` aciona a transição CSS, movendo o elemento para sua posição original.

## 📌 Possíveis melhorias

- Adicionar responsividade para telas menores.
- Incluir conteúdos reais dentro das caixas.
- Aplicar bibliotecas como AOS ou ScrollReveal para mais controle e efeitos.

## 🧑‍💻 Autor

Carlos Daniel

---

**Licença:** Este projeto é apenas para mostrar minhas habilidades e evolução como desenvolvedor, fins educacionais e demonstrações visuais. Você pode usá-lo e adaptá-lo livremente.
