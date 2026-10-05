import type { Despesa } from "./tipos";

export function totalGasto(despesas: Despesa[]): number {
  return despesas.reduce((soma, despesa) => soma + despesa.valor, 0);
}