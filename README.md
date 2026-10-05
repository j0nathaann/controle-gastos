# Controle de Gastos do Mês

Um módulo TypeScript para registrar e analisar despesas mensais por categoria.

## Como instalar

```bash
git clone https://github.com/[seu-usuario]/controle-gastos.git
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
| `totalGasto` | Aceitei a implementação com reduce sem hesitar. Sem alterar o array. Teste bem simples, passou de primeira. |
| `maiorDespesa` | Implementação com reduce condicional funcionou perfeitamente. Dois testes (caso normal + array vazio) cobrem bem o escopo. |
| `adicionarDespesa` | A IA fez validação de valor e mês corretamente, usou spread operator pra não alterar array original. Adicionei um teste extra verificando que o array original continua intacto. |
| `removerDespesa` | Filter é a abordagem certa. Eu tive que arrumar um erro onde a função foi adicionada no arquivo de testes. Depois funcionou sem ajustes. |
| `despesasDaCategoria` | Simples com filter, passou na primeira. Nenhuma dúvida sobre a implementação. |
| `descricaoCategoria` | Switch statement direto. Passou nos 4 casos sem problema. Implementação óbvia e correta. |
| `matrizCategoriaMes` | A IA esqueceu de importar CATEGORIAS. Depois que adicionei, funcionou perfeitamente com loops for aninhados conforme pedido antes. |
| `formatarRelatorio` | Faltaram imports de `totalGasto` e `maiorDespesa`. Depois de adicionar, a formatação com padEnd, toFixed e padStart funcionou lindamente. |