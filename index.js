function verificarSenha(senha) {
    if (senha.length < 8) {
      return "A senha deve ter pelo menos 8 caracteres.";
    }
    if (!/[a-z]/.test(senha)) {
      return "A senha deve conter pelo menos uma letra minúscula.";
    }
    if (!/[A-Z]/.test(senha)) {
      return "A senha deve conter pelo menos uma letra maiúscula.";
    }
    if (!/\d/.test(senha)) {
      return "A senha deve conter pelo menos um número.";
    }
    return "A senha é válida.";
  }
  
  
  let senha = prompt("Digite sua senha: ");
  console.log(verificarSenha(senha));
  