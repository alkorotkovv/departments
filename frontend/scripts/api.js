//Класс АПИ
class Api {
  constructor(options)
  {
    this._baseUrl = options.baseUrl;
    //this._headers = options.headers;
  };

  //Метод реакция на результат запроса
  _checkResult(res) {
    if (res.ok)
        return res.json()
      else
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
  };

  //Метод получения данных 
  getData() {
    return fetch(this._baseUrl + '/data', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
    })
    .then(res => this._checkResult(res))
  }  

}

const api = new Api({
  baseUrl: 'http://127.0.0.1:3001'
});

export default api;
