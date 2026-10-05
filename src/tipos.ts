// Tipo literal union para garantir que só essas 4 categorias são aceitas
export type Categoria = "alimentacao" | "transporte" | "lazer" | "moradia";

// Interface que modela uma despesa
export interface Despesa {
  // Observação é opcional, nem sempre o usuário precisa adicionar
  observacao?: string;

  // readonly porque o id não pode mudar depois de criado
  readonly id: string;
  
  // Descrição obrigatória aqui
  descricao: string;
  
  // Valor em reais sempre positivo, validado na função
  valor: number;
  
  // Só aceita uma dessas 4 categorias
  categoria: Categoria;
  
  // Mês de 1 a 12 validado na função
  mes: number;
  
}

// Array com as 4 categorias na ordem que vai ser usada na matriz do relatório
export const CATEGORIAS: Categoria[] = [
  "alimentacao",
  "transporte",
  "lazer",
  "moradia"
];