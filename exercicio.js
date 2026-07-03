const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout,
});

// Função auxiliar para facilitar o input
function perguntar(texto) {
  return new Promise((resolve) => rl.question(texto, resolve));
}

async function main() {
  // BOAS VINDAS
  const nome = await perguntar("\nDigite o seu nome: ");

  console.log(
    `\nOlá, ${nome}... tudo bem? Se alguem te falar que para aprender programação não é necessário saber matemática, não acredite. Estão te enganando.`
  );
  console.log("\nVamos lá!");

  // TABUADA
  console.log("\n" + "=".repeat(50));
  console.log("PRIMEIRO PROGRAMA - TABUADA\n");

  const num = parseInt(await perguntar("Digite um número: "));

  for (let i = 1; i <= 10; i++) {
    console.log(`${i} X ${num} = ${i * num}`);
  }

  // EXIBIR NÚMEROS PARES
  console.log("\n" + "=".repeat(50));
  console.log("SEGUNDO PROGRAMA - EXIBIR NÚMEROS PARES\n");

  const pri = parseInt(await perguntar("Digite o primeiro número: "));
  const seg = parseInt(await perguntar("Digite o segundo número: "));
  const ter = parseInt(await perguntar("Digite o terceiro número: "));
  const qua = parseInt(await perguntar("Digite o quarto número: "));
  const qui = parseInt(await perguntar("Digite o quinto número: "));

  const lista = [pri, seg, ter, qua, qui];
  const pares = lista.filter((i) => i % 2 === 0);

  console.log(`\nDa lista [${lista}] apenas os números pares são: [${pares}]`);

  // SOMA DE NUMEROS INTEIROS
  console.log("\n" + "=".repeat(50));
  console.log("TERCEIRO PROGRAMA - SOMA DE NUMEROS INTEIROS\n");

  const numero = parseInt(await perguntar("Digite um número maior que 10: "));

  const total = String(numero)
    .split("")
    .reduce((soma, d) => soma + parseInt(d), 0);

  console.log(`\nA soma dos números inteiros de ${numero} é = ${total}`);

  // CALCULO FATORIAL
  console.log("\n" + "=".repeat(50));
  console.log("QUARTO PROGRAMA - CALCULO FATORIAL\n");

const fat = BigInt(parseInt(await perguntar("Digite um número: ")));

let fatorial = 1n;
for (let i = 1n; i <= fat; i++) {
  fatorial *= i;
}

console.log(`\nO fatorial de ${fat} é: ${fatorial}.`);

  // NÚMEROS PRIMOS
  console.log("\n" + "=".repeat(50));
  console.log("DESAFIO EXTRA - NÚMEROS PRIMOS\n");

  let primo = parseInt(await perguntar("Digite um número: "));

  while (primo <= 1) {
    console.log("\nO Número precisa ser maior que 1! Tente novamente.\n");
    primo = parseInt(await perguntar("Digite um número: "));
  }

  let ehPrimo = true;
  for (let i = 2; i < primo; i++) {
    if (primo % i === 0) {
      console.log(`\nO ${primo} não é um número primo! Ele é divisível por ${i}`);
      ehPrimo = false;
      break;
    }
  }

  if (ehPrimo) {
    console.log(`\nO ${primo} é um número primo!`);
  }

  // AGRADECIMENTO
  console.log("\nMuito obrigado!!! Até a proxima.");
  console.log("\n" + "=".repeat(50));

  rl.close();
}

main();