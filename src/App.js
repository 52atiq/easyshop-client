import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './components/Main';
import Login from './components/user/Login';
import Register from './components/user/Register';

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/login'  element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
      </Routes>
    </div>
  );
}

export default App;
