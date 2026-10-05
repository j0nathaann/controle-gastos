import type { Categoria, Despesa } from "./tipos";
import { CATEGORIAS } from "./tipos";
import { despesasDaCategoria, totalGasto, maiorDespesa } from "./despesas";

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
      matriz[i]![j] = 0;
    }
  }
  
  // Preenche a matriz com os totais
  for (let i = 0; i < CATEGORIAS.length; i++) {
    const categoria = CATEGORIAS[i];
    const despesasCategoria = despesasDaCategoria(despesas, categoria!);
    
    for (let j = 0; j < despesasCategoria.length; j++) {
      const despesa = despesasCategoria[j];
      const mesIndex = despesa!.mes - 1;
      matriz[i]![mesIndex]! += despesa!.valor;
    }
  }
  
  return matriz;
}
export function formatarRelatorio(despesas: Despesa[]): string {
  const matriz = matrizCategoriaMes(despesas);
  const total = totalGasto(despesas);
  const maior = maiorDespesa(despesas);
  
  let relatorio = "RELATÓRIO DE DESPESAS\n";
  relatorio += "=".repeat(50) + "\n\n";
  
  // Linha por categoria com total anual
  for (let i = 0; i < CATEGORIAS.length; i++) {
    const categoria = descricaoCategoria(CATEGORIAS[i]!);
    let totalCategoria = 0;
    
    for (let j = 0; j < 12; j++) {
      totalCategoria += matriz[i]![j]!;
    }
    
    const totalFormatado = totalCategoria.toFixed(2);
    relatorio += `${categoria.padEnd(15)}: R$ ${totalFormatado.padStart(10)}\n`;
  }
  
  relatorio += "\n" + "=".repeat(50) + "\n";
  relatorio += `Total Geral: R$ ${total.toFixed(2)}\n`;
  
  if (maior) {
    relatorio += `Maior Despesa: ${maior.descricao} (R$ ${maior.valor.toFixed(2)})\n`;
  }
  
  return relatorio;
}