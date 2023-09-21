// Definição da classe Aluno
class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto() {
    return this.primeiroNome + " " + this.segundoNome;
  }

  media() {
    return this.primeiraNota * 0.6 + this.segundaNota * 0.4;
  }

  situacao() {
    return this.media() > 6 ? "Aprovado" : "Reprovado";
  }
}

// Criação de um array de objetos Aluno
var alunos = [
  new Aluno("João", "Silva", 7, 8.5),
  new Aluno("Maria", "Souza", 8, 9),
  new Aluno("Pedro", "Oliveira", 6, 7.5),
  new Aluno("Ana", "Santos", 5.5, 6.2),
  new Aluno("Lucas", "Ferreira", 9, 8.8),
];

// Função para exibir os dados dos alunos
function mostrarDadosDosAlunos() {
  for (var i = 0; i < alunos.length; i++) {
    var aluno = alunos[i];
    alert(
      "Aluno: " + aluno.nomeCompleto() +
      "\nMédia: " + aluno.media() +
      "\nSituação: " + aluno.situacao()
    );
  }
}

// Mostrar os dados dos três primeiros alunos em alerts
mostrarDadosDosAlunos();