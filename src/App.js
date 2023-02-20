import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';

function App() {
  return (
    <div className="App">
      <h1>Labas, aš Dainius</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexPage/>}></Route>

        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
