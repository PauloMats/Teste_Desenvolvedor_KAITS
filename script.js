// Função para calcular o comprimento do nome e a idade do usuário
function calculateNameLengthAndAge(event) {
    // Evitar comportamento de envio de formulário padrão
    event.preventDefault();
  
    // Pegar os elementos do DOM
    const nomeInput = document.getElementById('nome');
    const dataNascimentoInput = document.getElementById('data-nascimento');
    const resultadoParagraph = document.getElementById('resultado');
  
    // Pegar os valores dos campos de entrada
    const nome = nomeInput.value;
    const dataNascimento = new Date(dataNascimentoInput.value);
  
    // Calcular o comprimento do nome
    const nomeLength = nome.length;
  
    // Calcular a idade do usuário
    const today = new Date();
    const ageInMilliseconds = today.getTime() - dataNascimento.getTime();
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    const remainingMonths = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30));
  
    // Exibir o resultado
    resultadoParagraph.innerText = `Nome: ${nome} (com ${nomeLength} caracteres)\nIdade: ${ageInYears} anos e ${remainingMonths} meses`;
  }
  
  // Adicionar um ouvinte de evento para o evento de envio do formulário
  document.querySelector('form').addEventListener('submit', calculateNameLengthAndAge);