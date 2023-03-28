let aluno = {
    nome: "Leonardo Borges",
    idade: 12,
}

let curso = aluno.curso?.nome;

if(aluno.curso != undefined) {
    curso = aluno.curso.nome;
}else{
    curso = undefined
}