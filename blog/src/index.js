// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import allReducer from './redux/reducers'

// import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import HopDong from './pages/hopdong/hopdong'
// // import HopDong from './views/HopDong/HopDong'
// // import TabInfor from './views/TabInfor/TabInfor'
// import GridBasic from './views/TabInfor/GirdBasic'
// import GridBasic2 from './views/TabInfor/GridBasic2';
// // import Bar from './components/barprogress/Bar'
// // import MyComponent from './components/image/image'
// // import Viewer from './components/viewer/viewer'
// import LayOut from './components/dashboard/LayOut'
// import Videos from './components/video/Videos'
// import ChartPie from './components/chart/ChartPie'
// import ChartPieDonut from './components/chart/ChartPieDonut';
// import ChartSquares from './components/chart/ChartSquares';
// import ChartSquares2 from './components/chart/ChartSquares2';
// import ChartArea from './components/chart/ChartArea';
// import DiaLogs from './components/dialogs/dialogs'
// import LayoutChart from './components/chart/LayoutChart'
// let theme = createTheme({
//   palette: {
//     primary: {
//       main: '#0052cc',
//     },
//     secondary: {
//       main: '#54DE7E',
//     },
//   },
// });

// theme.typography.h3 = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2rem',
//   },
// };

// let store = createStore(
//   allReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <ThemeProvider theme={theme}> */}
//         {/* <HopDong/> */}
//         {/* <Bar/> */}
//         {/* <GridBasic/> */}
//         {/* <GridBasic2/> */}
//         {/* <Viewer/> */}
//         {/* <Videos/> */}
//         {/* <DiaLogs/> */}
//         {/* <LayOut/> */}
//         {/* <LayoutChart/> */}
//         {/* <ChartPie/> */}
//         {/* <ChartPieDonut/> */}
//         {/* <ChartSquares/> */}
//         {/* <ChartSquares2/> */}
//         {/* <ChartArea/> */}
//         <App/>
//         {/* <GridBasic2/> */}
//         {/* <MyComponent/> */}
//       {/* </ThemeProvider> */}
//     </Provider>
    
//   </React.StrictMode>,
//   document.getElementById('root')
// );



import React from "react";
import ReactDOM from 'react-dom';
import App2 from './components/FormReact/App2'
import FireBase from "./components/firebase/FireBase";
import App from './components/firebase/App'
// import App from './components/App/App'
// import {createStore} from 'redux'

// import counterReducer from "./components/redux2/reducers/counter";
// import loggedReducer from "./components/redux2/reducers/isLogged";
// import allReducer from "./components/redux2/reducers";
// import { Provider } from "react-redux";

// const store = createStore(
//     allReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )



ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App2/>
      {/* <FireBase/> */}
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);