
import { Url } from "./url"
export default async function UpdateStatus(ob){
    const url =Url.api2+"updatestatus.php"
    return fetch(url, {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        body: JSON.stringify(ob)
      })
        .then(data => data.json())
     
}