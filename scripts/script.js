const jsonData = "/scripts.js/questoes.json";

// Itere sobre as questões e substitua as sequências '\\n' por quebras de linha reais '\n'.
jsonData.questoes.forEach((questao) => {
  questao.question = questao.question.replace(/\\n/g, '\n');
});

// Agora, jsonData contém as perguntas com quebras de linha.
console.log(jsonData);

