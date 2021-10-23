import './App.css';
import MainPage from './mainPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainPage></MainPage>
    </BrowserRouter>
  );
}

export default App;
