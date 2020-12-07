export const convert = (cotacao, quantidade) => cotacao * quantidade;

export const toMoney = valor => parseFloat(valor).toFixed(2);
