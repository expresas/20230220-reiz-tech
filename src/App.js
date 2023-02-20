import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexPage/>}></Route>

        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
