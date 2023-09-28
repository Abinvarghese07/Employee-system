import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>

    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/adduser' element={<AddUser></AddUser>}></Route>
    </Routes> 
    
    
    </div>
  );
}

export default App;
