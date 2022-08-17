import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <Routes>
        <Route path='/' element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
