import HomeView from './views/home_view';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CareerView from './views/career_view';
import LangView from './views/lang_view';

function App() {

    return (
        <div className="bg-[#0a0a0a]">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/flutter" element={<LangView />} />
                    <Route path="/react" element={<LangView />} />
                    <Route path="/angular" element={<LangView />} />
                    {/* <Route path="/c#" element={<LangView />} /> */}
                    <Route path="/career" element={<CareerView />} />
                </Routes>
            </HashRouter>
        </div>
    )
}

export default App
