import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Playground from './pages/playground';
import './base.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="playground" element={<Playground />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
