# Controle de Gastos do Mês

Um módulo TypeScript para registrar e analisar despesas mensais por categoria.

## Como instalar

```bash
git clone https://github.com/j0nathaann/controle-gastos.git
cd controle-gastos
npm install
```

## Como testar

```bash
npm test
```

Executa todos os testes uma vez.

## Como rodar o programa

```bash
npm run dev
```

Executa o programa principal que gera um relatório com dados de exemplo.

---

## Arquivos de Configuração

### package.json
Define as dependências do projeto e os scripts (`npm test`, `npm run dev`).

### tsconfig.json
Configura o compilador TypeScript com `strict: true` para garantir segurança de tipos.

### .gitignore
Lista arquivos e pastas que não devem ser commitados (node_modules/, dist/).

### vitest.config.ts (se houver) ou configuração do Vitest
Define como os testes são executados (modo run, sem watch).

---

## Estrutura do Projeto

- **src/tipos.ts** - Tipos e interfaces (Despesa, Categoria, CATEGORIAS)
- **src/despesas.ts** - Funções de manipulação de despesas
- **src/relatorio.ts** - Funções de formatação do relatório
- **src/index.ts** - Programa principal com dados de exemplo
- **test/despesas.test.ts** - Testes com Vitest

---

## Registro de Uso de IA

| Função | Reflexão |
|--------|----------|
| `totalGasto` | Aceitei a implementação com `reduce` sem hesitar. Elegante, sem alterar o array, e trata corretamente o caso vazio (retorna 0). O teste foi bem simples: array com 3 valores [50, 30, 40] e array vazio. Passou de primeira sem precisar de ajustes. A abordagem de acumular é eficiente e idiomática em JavaScript. |
| `maiorDespesa` | Implementação com `reduce` condicional funcionou perfeitamente na primeira tentativa. Retorna `undefined` para array vazio, exatamente como esperado. Dois testes (caso normal com 3 despesas e array vazio) cobrem bem o escopo. Nenhuma suspeita de que estava só satisfazendo os valores do teste. |
| `adicionarDespesa` | A IA fez a validação de valor e mês corretamente, usando `throw` pra ambos os casos. Usou spread operator `[...despesas, nova]` pra não alterar o array original, que era crítico. Adicionei um teste extra verificando que o array original continua intacto após a chamada, confirmando a imutabilidade. |
| `removerDespesa` | Filter é a abordagem certa para remover sem alterar o original. Tive que arrumar um erro onde a função foi acidentalmente adicionada no arquivo de testes em vez do arquivo de código. Depois que corrigi, funcionou sem ajustes adicionais. |
| `despesasDaCategoria` | Simples com `filter`, passou na primeira. Dois testes: array com 3 despesas (2 da mesma categoria) e array vazio. Nenhuma dúvida sobre a implementação ser correta. |
| `descricaoCategoria` | Switch statement direto com 4 casos. Passou em todos os 4 testes (alimentacao, transporte, lazer, moradia) sem problema. Implementação óbvia e correta, sem edge cases a considerar. |
| `matrizCategoriaMes` | A IA esqueceu de importar `CATEGORIAS` do arquivo de tipos. Depois que adicionei o import, funcionou perfeitamente com loops `for` aninhados conforme pedido (sem `forEach`/`map`/`reduce`/`filter`). Testes confirmaram: matriz 4x12 preenchida corretamente. |
| `formatarRelatorio` | Faltaram imports de `totalGasto` e `maiorDespesa` do módulo de despesas. Depois de adicionar, a formatação com `padEnd`, `toFixed` e `padStart` funcionou lindamente, alinhando as colunas e valores como esperado. Testes passaram sem ajustes na lógica. |
