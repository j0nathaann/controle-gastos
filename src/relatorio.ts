import type { Categoria, Despesa } from "./tipos";
import { CATEGORIAS } from "./tipos";
import { despesasDaCategoria } from "./despesas";

export function descricaoCategoria(categoria: Categoria): string {
  switch (categoria) {
    case "alimentacao":
      return "Alimentação";
    case "transporte":
      return "Transporte";
    case "lazer":
      return "Lazer";
    case "moradia":
      return "Moradia";
  }
}

export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
  const matriz: number[][] = [];
  
  // Cria 4 linhas (uma por categoria)
  for (let i = 0; i < CATEGORIAS.length; i++) {
    matriz[i] = [];
    // Cria 12 colunas (uma por mês)
    for (let j = 0; j < 12; j++) {
      matriz[i][j] = 0;
    }
  }
  
  // Preenche a matriz com os totais
  for (let i = 0; i < CATEGORIAS.length; i++) {
    const categoria = CATEGORIAS[i];
    const despesasCategoria = despesasDaCategoria(despesas, categoria);
    
    for (let j = 0; j < despesasCategoria.length; j++) {
      const despesa = despesasCategoria[j];
      const mesIndex = despesa.mes - 1; // mes 1 = índice 0
      matriz[i][mesIndex] += despesa.valor;
    }
  }
  
  return matriz;
}