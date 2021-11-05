import { Url } from "./url"

export default async function RemoveStatus(ob){
  const url =Url.api2+"removestatus.php"
    return fetch(url, {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        body: JSON.stringify(ob)
      })
        .then(data => data.json())
     
}