export default async function GetStatus(){
    const url ="http://192.168.1.2:4000/v0.1/status"
    return fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(data => data.json())
}