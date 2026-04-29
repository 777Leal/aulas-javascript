// Array literal (forma mais comum)
const tarefas = [
  "Estudar JavaScript",
  "Criar projeto TaskMaster",
  "Preparar apresentação",
  "Revisar código"
];
// console.log("Array de tarefas:", tarefas);

// // Usando o construtor Array
// const categorias = new Array("Trabalho", "Estudo", "Pessoal", "Projetos");
// console.log("Array de categorias:", categorias);

// // Array.of (ES6)
// const prioridades = Array.of("Baixa", "Média", "Alta");
// console.log("Array de prioridades:", prioridades);

// // Array.from (ES6) - cria array a partir de uma string
// const letras = Array.from("TaskMaster");
// console.log("Array de letras:", letras);

// // Acesso por índice
// console.log("Primeira tarefa:", tarefas[0]);
// console.log("Última tarefa:", tarefas[tarefas.length - 1]);



// const removidoInicio = tarefas.shift();  // Remove o primeiro
// console.log("Removido com shift:", removidoInicio);
// console.log("Após shift:", tarefas);



// const removidoIndiceEspecífico = tarefas.splice(1,1);  
// // Remove 1 elemento a partir do índice 1
// console.log("Removido com splice:", removidoIndiceEspecífico);
// console.log("Após splice (remoção):", tarefas);

// // Adicionando elementos com splice
// tarefas.splice(2, 0, "Nova tarefa inserida");
// // A partir do índice 2, remove 0 elementos e insere "Nova tarefa inserida"
// console.log("Após splice (adição):", tarefas);

// // Substituindo elementos com splice
// tarefas.splice(1, 1, "Tarefa substituída");
// // A partir do índice 1, remove 1 elemento e insere "Tarefa substituída" no lugar
// console.log("Após splice (substituição):", tarefas);



// // forEach: Executa uma função para cada elemento
// tarefas.forEach((t, i) => {
//   console.log(`${i + 1}. ${t}`);
// });



// const tarefasEmMaiusculo = tarefas.map(t => t.toUpperCase());
// console.log("Tarefas em maiúsculas:", tarefasEmMaiusculo);



// const tarefasComA = tarefas.filter(t => t.toLowerCase().includes("a"));
// console.log("Tarefas que contêm 'a':", tarefasComA);



// const tarefaEncontrada = tarefas.find(t => t.includes("sprint"));
// console.log("Tarefa encontrada:", tarefaEncontrada);



// const indiceEncontrado = tarefas.findIndex(t => t.includes("sprint"));
// console.log("Índice encontrado:", indiceEncontrado);



// // length = contar caracteres
// const somaComprimentos = tarefas.reduce((total, t) => total + t.length, 0);
// console.log("Soma dos comprimentos:", somaComprimentos);



// FINALIZAÇÃO Array, INTRODUÇÃO Object



// // Criação de objeto usando sintaxe literal
// const tarefa = {
//   id: 1,
//   titulo: "Aprender sobre objetos",
//   descricao: "Estudar propriedades e métodos",
//   concluida: false,
//   prioridade: "alta",
//   dataCriacao: new Date()
// };

// // console.log("Título (ponto):", tarefa.titulo);



// const projetoTaskMaster = {
//   nome: "TaskMaster",
//   version: "1.0",
//   autor: "Curso JavaScript",
//   tarefas: [],
//   adicionarTarefa(titulo, prioridade = "média") {
//     const novaTarefa = {
//       id: this.tarefas.length + 1,
//       titulo,
//       prioridade,
//       concluida: false,
//       criada: new Date()
//     };
//     this.tarefas.push(novaTarefa); // //push = adiciona ao fim | this = engloba tudo dentro 
//     console.log(`Tarefa "${titulo}" adicionada.`);
//     return novaTarefa;
//   },
//   listarTarefas() {
//     console.log(`Projeto ${this.nome} - Lista de Tarefas:`);
//     this.tarefas.forEach(t => console.log(`- ${t.id}: ${t.titulo} (${t.prioridade})`)); // //template string
//   }
// };

// projetoTaskMaster.adicionarTarefa("Estudar Objetos", "alta");
// projetoTaskMaster.adicionarTarefa("Criar interface");
// projetoTaskMaster.listarTarefas();



const prioridades = ["baixa", "média", "alta"];
// Extraindo valores com destructuring
const [baixa, media, alta] = prioridades;
console.log("Baixa:", baixa);
console.log("Média:", media);
console.log("Alta:", alta);

// Uso do rest pattern para capturar o restante dos elementos
const [primeiraCat, ...outrasCats] = ["Trabalho", "Estudo", "Pessoal", "Saúde"];
console.log("Categoria principal:", primeiraCat);
console.log("Outras categorias:", outrasCats);