import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PATH } from '../constants/Routes'
import Companies from './companies';
import DoIt from './doIt';
import Home from './home'

const App = () => (
    <main>
        <BrowserRouter>
            <Routes>
                <Route path={PATH.HOME} element={<Home />} />
                <Route path={PATH.DOIT} element={<DoIt />} />
                <Route path={PATH.COMPANIES} element={<Companies />} />
            </Routes>
        </BrowserRouter>
    </main>
);


export default App