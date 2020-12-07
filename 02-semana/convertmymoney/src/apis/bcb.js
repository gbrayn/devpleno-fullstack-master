import axios from "axios";

const getUrl = data =>
  `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;

const getCotacaoAPI = url => axios.get(url);

const extractCotacao = res => res.data.value[0].cotacaoVenda;

const getToday = () => {
  const today = new Date();
  return `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;
};

const getCotacao = ({
  getToday,
  getUrl,
  getCotacaoAPI,
  extractCotacao
}) => async () => {
  try {
    const today = getToday();
    const url = getUrl(today);
    const response = await getCotacaoAPI(url);
    const cotacao = extractCotacao(response);

    return cotacao;
  } catch (err) {
    return err;
  }
};

export default {
  getToday,
  getUrl,
  getCotacaoAPI,
  extractCotacao,
  getCotacao: getCotacao({ getToday, getUrl, getCotacaoAPI, extractCotacao }),
  pure: {
    getCotacao
  }
};
