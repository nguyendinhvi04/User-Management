
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { Navigate } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes> 
         <Route path="/" element={<Navigate to="/dashboard" replace />} />
         <Route path='/dashboard' element={<Dashboard/>}></Route>     
      </Routes>
    </Router>
  );
}

export default App;
