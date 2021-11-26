import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducer from './redux/reducers'
// import ContractInfor from './pages/hopdong/contractInfor'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HopDong from './pages/hopdong/hopdong'
// import Typography from '@mui/material/Typography';
import Flex from './components/flexbox/Flex'
import Grid from './components/grid/Grid'
let theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#54DE7E',
    },
  },
});

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

let store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* <App/> */}
        <HopDong/>
        {/* <Flex/> */}
        {/* <Grid/> */}
      </ThemeProvider>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

