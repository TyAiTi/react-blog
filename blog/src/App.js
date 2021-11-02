import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import useToken from "./API/useToken"
import Form from "./components/form/Form";
import { BrowserRouter as Router, Switch,
  Route} from "react-router-dom";
function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <>
      <Router>
        <Switch>
          <Route
              exact path="/" render={() => {
                return ( <> <Home/> </>)  }}></Route>
          <Route path="/form" > <Form/> </Route>
        </Switch>
      </Router>  
    </>
  );
}


export default App;
