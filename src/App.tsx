import HomeView from './views/home_view';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CareerView from './views/career_view';
import LangView from './views/lang_view';
import DevelopView from './views/develop_view';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from './redux/theme_slice';
import { setLanguage } from './redux/language_slice';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(localStorage.getItem('themeMode'));
        localStorage.getItem('lang') === 'en' ? dispatch(setLanguage('en')) : dispatch(setLanguage('pt'));
        localStorage.getItem('themeMode') === 'dark' ? dispatch(setTheme('dark')) : dispatch(setTheme('light'));
    }, [dispatch]);

    return (
        <div className="bg-[#0a0a0a]">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/flutter" element={<LangView />} />
                    <Route path="/react" element={<LangView />} />
                    <Route path="/angular" element={<LangView />} />
                    <Route path="/develop" element={<DevelopView />} />
                    <Route path="/career" element={<CareerView />} />
                </Routes>
            </HashRouter>
        </div>
    )
}

export default App
