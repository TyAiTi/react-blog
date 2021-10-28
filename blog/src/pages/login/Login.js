export default function Login({setToken}){
  const handleLogin = () => {
    setToken({token: "Pham Minh Ty"})
  }
  return(
    <>
      <h1>Đây là trang Login</h1>
      <button onClick={()=>{handleLogin()}}>Login</button>
    </>
  )
}