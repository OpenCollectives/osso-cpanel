import Navbar from './layouts/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/home/index';
import "./assets/global.css";

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/books/create" element={<span>Hello books</span>} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;