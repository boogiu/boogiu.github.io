import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DiscriptPage from "./components/Pages/DiscriptPage";
import IntroPage from './components/Pages/IntroPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<IntroPage />}></Route>
          <Route path="/DiscriptPage" element={<DiscriptPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
