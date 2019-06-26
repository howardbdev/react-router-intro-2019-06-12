export default class {
  static BASE_URL = "http://localhost:3001"

  static postOptions = {
    method: "POST"
  }

  static headers = {
    "Content-Type": "application/json"
  }

  static get(url){
    return fetch(`${this.BASE_URL}${url}`)
      .then(resp => resp.json())
  }

  static post(url, data){
    const { headers } = this
    return fetch(`${this.BASE_URL}${url}`, {
      ...this.postOptions,
      headers,
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
  }

}
