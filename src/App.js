import HomePage from "./components/Homepage.js";
import Login from './components/Sign-in.js';
import SignUp from "./components/Register.js";
import Explore from "./components/Explore.js";
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path="/expo" element={<Explore/>}/>
        <Route path='/log' element={<Login/>}/>
        <Route path='/reg' element={<SignUp/>}/>
      </Routes>
    </Router>
  )
}
export default App;