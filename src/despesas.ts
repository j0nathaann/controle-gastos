import type { Despesa } from "./tipos";

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