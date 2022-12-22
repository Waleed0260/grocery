import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import Cards from './Components/Cards/Cards';
import Aside from './Components/Aside/Aside';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Components/Pages';



function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Main/>
      <Cards/>
      <Aside/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
