import type { Despesa, Categoria } from "./tipos";

export function totalGasto(despesas: Despesa[]): number {
  return despesas.reduce((soma, despesa) => soma + despesa.valor, 0);
}

export function maiorDespesa(despesas: Despesa[]): Despesa | undefined {
  if (despesas.length === 0) {
    return undefined;
  }
  return despesas.reduce((maior, despesa) => 
    despesa.valor > maior.valor ? despesa : maior
  );
}
export function adicionarDespesa(despesas: Despesa[], nova: Despesa): Despesa[] {
  if (nova.valor <= 0) {
    throw new Error("Valor deve ser maior que 0");
  }
  
  if (nova.mes < 1 || nova.mes > 12) {
    throw new Error("Mês deve estar entre 1 e 12");
  }
  
  return [...despesas, nova];
}
export function removerDespesa(despesas: Despesa[], id: string): Despesa[] {
  return despesas.filter(despesa => despesa.id !== id);
}
export function despesasDaCategoria(despesas: Despesa[], categoria: Categoria): Despesa[] {
  return despesas.filter(despesa => despesa.categoria === categoria);
}