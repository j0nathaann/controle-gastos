import { adicionarDespesa, totalGasto } from "./despesas";
import { formatarRelatorio } from "./relatorio";
import type { Despesa } from "./tipos";

// Array de exemplo com pelo menos 8 despesas
let despesas: Despesa[] = [];

// Alimentação - Janeiro
despesas = adicionarDespesa(despesas, {
  id: "1",
  descricao: "Almoço no restaurante",
  valor: 45,
  categoria: "alimentacao",
  mes: 1,
});

despesas = adicionarDespesa(despesas, {
  id: "2",
  descricao: "Supermercado",
  valor: 120,
  categoria: "alimentacao",
  mes: 1,
});

// Transporte - Janeiro
despesas = adicionarDespesa(despesas, {
  id: "3",
  descricao: "Uber para o trabalho",
  valor: 35,
  categoria: "transporte",
  mes: 1,
});

// Lazer - Fevereiro
despesas = adicionarDespesa(despesas, {
  id: "4",
  descricao: "Cinema",
  valor: 50,
  categoria: "lazer",
  mes: 2,
});

// Moradia - Fevereiro
despesas = adicionarDespesa(despesas, {
  id: "5",
  descricao: "Aluguel",
  valor: 1200,
  categoria: "moradia",
  mes: 2,
});

// Alimentação - Março
despesas = adicionarDespesa(despesas, {
  id: "6",
  descricao: "Pizzaria",
  valor: 60,
  categoria: "alimentacao",
  mes: 3,
});

// Transporte - Março
despesas = adicionarDespesa(despesas, {
  id: "7",
  descricao: "Passagem de ônibus",
  valor: 25,
  categoria: "transporte",
  mes: 3,
});

// Lazer - Março
despesas = adicionarDespesa(despesas, {
  id: "8",
  descricao: "Jogo de videogame",
  valor: 80,
  categoria: "lazer",
  mes: 3,
});

// Imprime o relatório
console.log(formatarRelatorio(despesas));
console.log("\nTotal geral:", totalGasto(despesas));