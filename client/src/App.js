import './App.css';
import { BrowserRouter as Router, 
  Routes, Route} from "react-router-dom";
import HomePage from './Components/HomePage';
import MyComputerService from "./Components/MyComputerService";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/MyComputerService" element={<MyComputerService/>} />
        </Routes>
      </Router>
  );
}

export default App;