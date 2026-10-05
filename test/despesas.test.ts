import { describe, expect, it } from "vitest";
import { totalGasto, maiorDespesa, adicionarDespesa, removerDespesa } from "../src/despesas";
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
    expect(novasDespesas[0].id).toBe("2");
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
    expect(novasDespesas[0].id).toBe("1");
  });
});