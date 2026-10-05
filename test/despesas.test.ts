import { describe, expect, it } from "vitest";
import { totalGasto, maiorDespesa, adicionarDespesa, removerDespesa, despesasDaCategoria } from "../src/despesas";
import type { Despesa } from "../src/tipos";
import { descricaoCategoria, matrizCategoriaMes, formatarRelatorio } from "../src/relatorio";

describe("totalGasto", () => {
  it("retorna a soma de todas as despesas", () => {
    const despesas: Despesa[] = [
      {
        id: "1",
        descricao: "Almoço",
        valor: 50,
        categoria: "alimentacao",
        mes: 1,
      },
      {
        id: "2",
        descricao: "Uber",
        valor: 30,
        categoria: "transporte",
        mes: 1,
      },
      {
        id: "3",
        descricao: "Cinema",
        valor: 40,
        categoria: "lazer",
        mes: 1,
      },
    ];

    expect(totalGasto(despesas)).toBe(120);
  });

  it("retorna 0 para array vazio", () => {
    expect(totalGasto([])).toBe(0);
  });
});

describe("maiorDespesa", () => {
  it("retorna a despesa de maior valor", () => {
    const despesas: Despesa[] = [
      {
        id: "1",
        descricao: "Almoço",
        valor: 50,
        categoria: "alimentacao",
        mes: 1,
      },
      {
        id: "2",
        descricao: "Uber",
        valor: 150,
        categoria: "transporte",
        mes: 1,
      },
      {
        id: "3",
        descricao: "Cinema",
        valor: 40,
        categoria: "lazer",
        mes: 1,
      },
    ];

    const maior = maiorDespesa(despesas);
    expect(maior?.id).toBe("2");
    expect(maior?.valor).toBe(150);
  });

  it("retorna undefined para array vazio", () => {
    expect(maiorDespesa([])).toBeUndefined();
  });
}); 
describe("adicionarDespesa", () => {
it("retorna um novo array com a despesa adicionada", () => {
  const despesas: Despesa[] = [
    {
      id: "1",
      descricao: "Almoço",
      valor: 50,
      categoria: "alimentacao",
      mes: 1,
    },
  ];

  const novasDespesas = adicionarDespesa(despesas, {
    id: "2",
    descricao: "Uber",
    valor: 30,
    categoria: "transporte",
    mes: 1,
  });

  const ultimaDespesa = novasDespesas[novasDespesas.length - 1];
  
  expect(novasDespesas.length).toBe(2);
  expect(ultimaDespesa).toBeDefined();
  expect(ultimaDespesa!.id).toBe("2");
  });

  it("não altera o array original", () => {
    const despesas: Despesa[] = [
      {
        id: "1",
        descricao: "Almoço",
        valor: 50,
        categoria: "alimentacao",
        mes: 1,
      },
    ];

    const original = despesas.length;
    adicionarDespesa(despesas, {
      id: "2",
      descricao: "Uber",
      valor: 30,
      categoria: "transporte",
      mes: 1,
    });

    expect(despesas.length).toBe(original);
  });

  it("lança erro se valor <= 0", () => {
    const despesas: Despesa[] = [];

    expect(() =>
      adicionarDespesa(despesas, {
        id: "1",
        descricao: "Inválido",
        valor: 0,
        categoria: "alimentacao",
        mes: 1,
      })
    ).toThrow();
  });

  it("lança erro se mês fora do intervalo 1-12", () => {
    const despesas: Despesa[] = [];

    expect(() =>
      adicionarDespesa(despesas, {
        id: "1",
        descricao: "Inválido",
        valor: 50,
        categoria: "alimentacao",
        mes: 13,
      })
    ).toThrow();
  });
});
describe("removerDespesa", () => {
  it("retorna um novo array sem a despesa com o ID informado", () => {
    const despesas: Despesa[] = [
      {
        id: "1",
        descricao: "Almoço",
        valor: 50,
        categoria: "alimentacao",
        mes: 1,
      },
      {
        id: "2",
        descricao: "Uber",
        valor: 30,
        categoria: "transporte",
        mes: 1,
      },
    ];

    const novasDespesas = removerDespesa(despesas, "1");

    expect(novasDespesas.length).toBe(1);
    expect(novasDespesas[0]!.id).toBe("2");
  });

  it("não altera o array original", () => {
    const despesas: Despesa[] = [
      {
        id: "1",
        descricao: "Almoço",
        valor: 50,
        categoria: "alimentacao",
        mes: 1,
      },
      {
        id: "2",
        descricao: "Uber",
        valor: 30,
        categoria: "transporte",
        mes: 1,
      },
    ];

    const original = despesas.length;
    removerDespesa(despesas, "1");

    expect(despesas.length).toBe(original);
  });

  it("retorna uma cópia igual se o ID não existir", () => {
    const despesas: Despesa[] = [
      {
        id: "1",
        descricao: "Almoço",
        valor: 50,
        categoria: "alimentacao",
        mes: 1,
      },
    ];

    const novasDespesas = removerDespesa(despesas, "999");

    expect(novasDespesas.length).toBe(1);
    expect(novasDespesas[0]!.id).toBe("1");
  });
});
describe("despesasDaCategoria", () => {
  it("retorna só as despesas da categoria informada", () => {
    const despesas: Despesa[] = [
      {
        id: "1",
        descricao: "Almoço",
        valor: 50,
        categoria: "alimentacao",
        mes: 1,
      },
      {
        id: "2",
        descricao: "Uber",
        valor: 30,
        categoria: "transporte",
        mes: 1,
      },
      {
        id: "3",
        descricao: "Pizza",
        valor: 40,
        categoria: "alimentacao",
        mes: 1,
      },
    ];

    const alimentacao = despesasDaCategoria(despesas, "alimentacao");

    expect(alimentacao.length).toBe(2);
    expect(alimentacao[0]!.id).toBe("1");
    expect(alimentacao[1]!.id).toBe("3");
  });

  it("retorna array vazio se nenhuma despesa da categoria existir", () => {
    const despesas: Despesa[] = [
      {
        id: "1",
        descricao: "Almoço",
        valor: 50,
        categoria: "alimentacao",
        mes: 1,
      },
    ];

    const transporte = despesasDaCategoria(despesas, "transporte");

    expect(transporte.length).toBe(0);
  });
});
describe("descricaoCategoria", () => {
  it("retorna 'Alimentação' para 'alimentacao'", () => {
    expect(descricaoCategoria("alimentacao")).toBe("Alimentação");
  });

  it("retorna 'Transporte' para 'transporte'", () => {
    expect(descricaoCategoria("transporte")).toBe("Transporte");
  });

  it("retorna 'Lazer' para 'lazer'", () => {
    expect(descricaoCategoria("lazer")).toBe("Lazer");
  });

  it("retorna 'Moradia' para 'moradia'", () => {
    expect(descricaoCategoria("moradia")).toBe("Moradia");
  });
});
describe("matrizCategoriaMes", () => {
  it("retorna matriz com totais por categoria e mês", () => {
    const despesas: Despesa[] = [
      {
        id: "1",
        descricao: "Almoço",
        valor: 50,
        categoria: "alimentacao",
        mes: 1,
      },
      {
        id: "2",
        descricao: "Pizza",
        valor: 30,
        categoria: "alimentacao",
        mes: 1,
      },
      {
        id: "3",
        descricao: "Uber",
        valor: 100,
        categoria: "transporte",
        mes: 2,
      },
    ];

    const matriz = matrizCategoriaMes(despesas);

    // Linha 0 = alimentacao, coluna 0 = mês 1
    expect(matriz[0]![0]!).toBe(80);
    // Linha 1 = transporte, coluna 1 = mês 2
    expect(matriz[1]![1]!).toBe(100);
    // Linha 2 = lazer (sem despesas)
    expect(matriz[2]![0]!).toBe(0);
  });

  it("retorna matriz com 4 linhas (categorias) e 12 colunas (meses)", () => {
    const despesas: Despesa[] = [];
    const matriz = matrizCategoriaMes(despesas);

    expect(matriz.length).toBe(4);
    expect(matriz[0]!.length).toBe(12);
  });
});
describe("formatarRelatorio", () => {
  it("retorna string com título, categorias e total geral", () => {
    const despesas: Despesa[] = [
      {
        id: "1",
        descricao: "Almoço",
        valor: 50,
        categoria: "alimentacao",
        mes: 1,
      },
      {
        id: "2",
        descricao: "Uber",
        valor: 30,
        categoria: "transporte",
        mes: 1,
      },
    ];

    const relatorio = formatarRelatorio(despesas);

    expect(relatorio).toContain("RELATÓRIO DE DESPESAS");
    expect(relatorio).toContain("Alimentação");
    expect(relatorio).toContain("Transporte");
    expect(relatorio).toContain("80");
  });

  it("retorna relatório vazio sem despesas", () => {
    const relatorio = formatarRelatorio([]);

    expect(relatorio).toContain("RELATÓRIO DE DESPESAS");
  });
});