import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import { BrowserRouter as Router, Switch,
  Route} from "react-router-dom";
import { GlobalStyle} from './components/css/cssform'

//import redux useSelector read data
import {useSelector} from 'react-redux'


function App() {
  
  const isLogged = useSelector(state=> state.isLogged)
  if(!isLogged) {
    return <Login />
  }
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Switch>
          <Route
              exact path="/" render={() => {
                return ( <> <Home/> </>)  }}></Route>
          {/* <Route path="/home" > <Home/> </Route> */}
        </Switch>
      </Router>  
    </>
  );
}


export default App;
