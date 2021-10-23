import logo from './logo.svg';
import './App.css';
import Example from './mainPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Example></Example>
    </BrowserRouter>
  );
}

export default App;
