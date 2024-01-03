import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Tech from './pages/Tech'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/destination"} element={<Destination />} />
          <Route path={"/crew"} element={<Crew />} />
          <Route path={"/tech"} element={<Tech />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
