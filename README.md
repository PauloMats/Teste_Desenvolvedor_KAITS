# Formulário de Cadastro de Usuário

Este projeto é um simples formulário de cadastro que solicita ao usuário o nome e a data de nascimento, formata a data para o padrão brasileiro (DD/MM/AAAA) e exibe o tamanho do nome e a idade do usuário em anos e meses.

## Estrutura do Projeto

- `index.html`: Arquivo HTML principal contendo a estrutura do formulário.
- `styles.css`: Arquivo CSS para a estilização da interface.
- `script.js`: Arquivo JavaScript para manipulação dos dados do formulário e cálculo da idade.

## index.html

O arquivo `index.html` contém a estrutura básica do formulário:

- **Header**: Contém o título do formulário.
- **Main**: Inclui o formulário com campos de entrada para nome e data de nascimento, e um botão de envio.
- **Footer**: Exibe uma mensagem de direitos autorais.

### Componentes do Formulário:

- `input[type="text"]`: Campo para o usuário inserir seu nome.
- `input[type="date"]`: Campo para o usuário inserir sua data de nascimento. Este campo é formatado para o padrão brasileiro pelo script JavaScript.
- `button[type="submit"]`: Botão para enviar o formulário.
- `p#resultado`: Parágrafo onde o resultado do tamanho do nome e da idade é exibido após o envio do formulário.

## styles.css

O arquivo `styles.css` define o estilo do formulário para proporcionar uma experiência de usuário agradável e responsiva:

- **Estilo Base**: Define margens e espaçamentos gerais, fontes e alinhamentos.
- **Responsividade**: Utiliza media queries para adaptar o layout em dispositivos móveis, garantindo que o formulário seja acessível e usável em diferentes tamanhos de tela.
- **Estilo do Formulário**: Estiliza o formulário para ser centralizado na página, com bordas arredondadas e espaçamento adequado entre os campos.

### Destaques:

- **Centralização**: A `.form-container` é centralizada na tela usando `flexbox`.
- **Responsividade**: Media queries ajustam o layout para telas menores, garantindo que o formulário seja fácil de usar em dispositivos móveis.

## script.js

O arquivo `script.js` é responsável por:

- **Formatação da Data**: Converte a data de nascimento fornecida pelo usuário para o formato brasileiro (DD/MM/AAAA).
- **Cálculo de Idade**: Calcula a idade do usuário em anos e meses com base na data de nascimento fornecida.
- **Tamanho do Nome**: Calcula o número de caracteres no nome fornecido.
- **Exibição dos Resultados**: Após o envio do formulário, o script exibe o tamanho do nome, a idade em anos e meses, e a data de nascimento formatada na página.

### Fluxo de Trabalho:

1. **Evento `submit`**: O script captura o evento de envio do formulário.
2. **Manipulação dos Dados**: O script coleta os valores de `nome` e `data-nascimento`, calcula a idade e formata a data.
3. **Exibição do Resultado**: O script exibe os resultados no parágrafo `#resultado`.

## Como Usar

1. Clone este repositório.
2. Abra o arquivo `index.html` em um navegador.
3. Insira seu nome e data de nascimento no formulário e clique em "Enviar".
4. Veja os resultados exibidos na página.

## Tecnologias Utilizadas

- **HTML5**: Para a estrutura do documento.
- **CSS3**: Para estilização e design responsivo.
- **JavaScript**: Para manipulação de DOM, cálculo de idade e formatação de dados.

## Melhorias Futuras

- Validação mais avançada dos campos do formulário.
- Integração com um backend para salvar e recuperar dados em um banco de dados.
- Internacionalização para suportar outros formatos de data e idiomas.

---

Feito com HTML, CSS e JavaScript por Paulo Mateus dos Santos Silva.
