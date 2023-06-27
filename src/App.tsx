import FlutterView from './views/flutter_view';
import HomeView from './views/home_view';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactView from './views/react_view';
import CareerView from './views/career_view';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomeView/>} />
        <Route path="/flutter/*" element={<FlutterView/>} />
        <Route path="/react/*" element={<ReactView/>} />
        <Route path="/career/*" element={<CareerView/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
