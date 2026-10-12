


document.getElementById('meuContato').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede a página de recarregar

  const emailInput = document.getElementById('emailCliente').value;
  const mensagemInput = document.getElementById('mensagemCliente').value;
  const feedback = document.getElementById('resposta');

  // Validar se o e-mail tem um formato correto 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput)) {
    
    feedback.textContent = "❌ Por favor, insira um e-mail válido!";
    feedback.className = "feedback erro";
  } else if (mensagemInput.trim() === "") {
   
    feedback.textContent = "❌ Por favor, escreva uma mensagem!";
    feedback.className = "feedback erro";
  } else {
   
    feedback.textContent = "✨ Mensagem enviada com sucesso!";
    feedback.className = "feedback sucesso";
    
    // Limpa o formulário após o envio
    document.getElementById('meuContato').reset();
  }
});