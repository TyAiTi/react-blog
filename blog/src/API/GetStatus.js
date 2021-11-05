import { Url } from "./url"
export default async function GetStatus(){
    const url =Url.api2+"getstatus.php"
    return fetch(url, {
        method: 'GET',
        // headers: {
        //   'Content-Type': 'application/json'
        // }
      })
        .then(data => data.json())
}