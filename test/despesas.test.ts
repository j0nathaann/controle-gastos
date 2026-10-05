import { describe, expect, it } from "vitest";
import type { Despesa } from "../src/tipos";

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

import { totalGasto, maiorDespesa } from "../src/despesas";
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