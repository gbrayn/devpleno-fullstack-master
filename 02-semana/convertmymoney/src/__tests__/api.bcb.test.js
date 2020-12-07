jest.mock("axios");
import axios from "axios";
import api from "../apis/bcb";

test("getCotacaoAPI", () => {
  const res = {
    data: {
      value: [{ cotacaoVenda: 4.1829 }]
    }
  };

  axios.get.mockResolvedValue(res);

  api.getCotacaoAPI("url").then(resp => {
    expect(resp).toEqual(res);
    expect(axios.get.mock.calls[0][0]).toBe("url");
  });
});

test("extractCotacao", () => {
  const cotacao = api.extractCotacao({
    data: {
      value: [{ cotacaoVenda: 4.1829 }]
    }
  });

  expect(cotacao).toBe(4.1829);
});

describe("getToday", () => {
  const RealDate = Date;

  function mockDate(date) {
    global.Date = class extends RealDate {
      constructor() {
        return new RealDate(date);
      }
    };
  }

  afterEach(() => {
    global.Date = RealDate;
  });

  test("getToday", () => {
    mockDate("2019-01-02T12:00:00z");
    const today = api.getToday();
    expect(today).toBe("1-1-2019");
  });
});

test("getUrl", () => {
  const url = api.getUrl("MINHA-DATA");
  expect(url).toBe(
    "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27MINHA-DATA%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao"
  );
});

test("getCotacao", () => {
  const res = {
    data: {
      value: [{ cotacaoVenda: 4.1829 }]
    }
  };

  const getToday = jest.fn();
  getToday.mockReturnValue("01-01-2019");
  const getUrl = jest.fn();
  getUrl.mockReturnValue("url");
  const getCotacaoAPI = jest.fn();
  getCotacaoAPI.mockResolvedValue(res);
  const extractCotacao = jest.fn();
  extractCotacao.mockReturnValue(4.1829);

  api.pure
    .getCotacao({ getToday, getUrl, getCotacaoAPI, extractCotacao })()
    .then(res => {
      expect(res).toBe(4.1829);
    });
});

test("getCotacao", () => {
  const getToday = jest.fn();
  getToday.mockReturnValue("01-01-2019");

  const getUrl = jest.fn();
  getUrl.mockReturnValue("url");

  const getCotacaoAPI = jest.fn();
  getCotacaoAPI.mockReturnValue(Promise.reject(""));

  const extractCotacao = jest.fn();
  extractCotacao.mockReturnValue(4.1829);

  api.pure
    .getCotacao({ getToday, getUrl, getCotacaoAPI, extractCotacao })()
    .then(res => {
      expect(res).toBe("");
    });
});
