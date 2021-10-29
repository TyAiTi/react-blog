import { Url } from "./url"
export default async function GetStatus(){
    const url =Url.api+"v0.1/status"
    return fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(data => data.json())
}