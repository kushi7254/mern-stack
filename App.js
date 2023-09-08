import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home.js';


function App() {
  return (
    <div className="App">
      <Router>
     
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' />
          <Route path='/savedbooks' />
          <Route path='/login' />
        </Routes>
    
      </Router>
    </div>
  );
}

export default App;
