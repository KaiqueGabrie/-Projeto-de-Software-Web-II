

let alunos = [
  { nome: "Ana", nota1: 8, nota2: 7 },
  { nome: "Bruno", nota1: 6, nota2: 5 },
  { nome: "Carlos", nota1: 9, nota2: 8 },
];

let somaMedias = 0;

for (const aluno of alunos) {
  let media = (aluno.nota1 + aluno.nota2) / 2;
  somaMedias += media;

  console.log(`Aluno: ${aluno.nome}, Média: ${media}`);
}

let mediaGeral = somaMedias / alunos.length;
console.log("Média geral da turma:", mediaGeral);
