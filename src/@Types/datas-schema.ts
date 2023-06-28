import { z } from 'zod';

export const TypeOne = z.enum(['entrada', 'saida']);
export const TypeTwo = z.enum(['venda', 'variavel', 'fixo', 'financeiro', 'investimento']);

const Categorias = z.object({
  entrada: z.array(z.object({
    category: z.string(),
    type: TypeTwo,
  })),
  saida: z.array(z.object({
    category: z.string(),
    type: TypeTwo,
  }))
});

const schema = z.object({
  date: z.string().refine((value) => {
      const currentDate = new Date();
      const [day, month, year] = value.split('-').map(Number);
      const inputDate = new Date(year, month - 1, day);
      return inputDate <= currentDate;
  }, {
    message: 'Precisa ser inserido uma data do lançamento.'
  }).nullable(),
  description: z.string().max(350, 'A descrição deve ter no máximo 350 caracteres.').optional(),
  category: z.string().nullable(),
  value: z.string().refine((value) => {
    const numericValue = parseFloat(value.replace(',', '.'));
    return !isNaN(numericValue) && numericValue >= 0.00;
  }, {
    message: 'O valor inserido deve ser um número válido e não pode estar vazio.'
  }).nullable(),
  realValue: z.string().refine((value) => {
    const numericValue = parseFloat(value.replace(',', '.'));
    return !isNaN(numericValue);
  }, {
    message: 'O valor deve ser um número!'
  }).nullable(),
  typeOne: TypeOne.nullable(),
  typeTwo: TypeTwo,
});


export default schema;

export const categorias = Categorias.parse({
  entrada: [
    { category: 'Dinheiro', type: 'venda' },
    { category: 'Crédito', type: 'venda' },
    { category: 'Débito', type: 'venda' },
    { category: 'Pix', type: 'venda' },
    { category: 'Crediário', type: 'venda' },
    { category: 'Cheque', type: 'venda' },
  ],
  saida: [
    { category: 'Fornecedor CMV', type: 'variavel'},
    { category: 'Mão de Obra', type: 'variavel'},
    { category: 'Comissão', type: 'variavel'},
    { category: 'Tx Máquina de Cartão', type: 'variavel'},
    { category: 'Combustível', type: 'variavel'},
    { category: 'Imposto DAS', type: 'variavel'},
    { category: 'Frete', type: 'variavel'},
    { category: 'Embalagens', type: 'variavel'},
    { category: 'Produto Limpeza', type: 'fixo' },
    { category: 'Aluguel', type: 'fixo' },
    { category: 'Folha', type: 'fixo' },
    { category: 'Energia', type: 'fixo' },
    { category: 'Água', type: 'fixo' },
    { category: 'Internet', type: 'fixo' },
    { category: 'Telefone', type: 'fixo' },
    { category: 'Contador', type: 'fixo' },
    { category: 'Sistema', type: 'fixo' },
    { category: 'Aluguel Máquina Cartão', type: 'fixo' },
    { category: 'Lanches', type: 'fixo' },
    { category: 'Manutenção', type: 'fixo' },
    { category: 'Juros', type: 'financeiro' },
    { category: 'Tarifa de Manutenção de Conta', type: 'financeiro' },
    { category: 'Empréstimos obtidos para capital de giro', type: 'financeiro' },
    { category: 'Marketing', type: 'investimento' },
    { category: 'Aquisição de Equipamentos', type: 'investimento' },
    { category: 'Empréstimos para investimentos', type: 'investimento' },
    { category: 'Parcelas de veículos', type: 'investimento' },
    { category: 'Parcelas de imóveis da empresa', type: 'investimento' },
    { category: 'Parcela Energia Solar', type: 'investimento' },
  ]
})