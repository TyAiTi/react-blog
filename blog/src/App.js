import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import useToken from "./API/useToken"
function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <>
      <Home />  
    </>
  );
}


export default App;
