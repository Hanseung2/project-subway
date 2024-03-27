import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/section/Main';


const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Developer = lazy(() => import('./pages/Developer'));
const Tsteam = lazy(() => import('./pages/Tsteam'));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Main />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/today" element={<Today />} />
                    <Route path="/developer" element={<Developer />} />
                    <Route path='/tsteam' element={<Tsteam />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;