import { Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
   <Route exact path="/">
      <Home />
      </Route>
    </div>
  );
}

export default App;
