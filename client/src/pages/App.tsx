import axios from 'axios';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PATH } from '../constants/Routes'
import Layout from '../layouts/Layout';
import Companies from './companies';
import DoIt from './doIt';
import Home from './home'

const App = () => (
    <main className="bg-black">
        <Routes>
            <Route path={PATH.HOME} element={<Home />} />
            <Route path={PATH.DOIT} element={<DoIt />} />
            <Route path={PATH.COMPANIES} element={<Layout />}>
                <Route path=':name' element={<Companies />} />
            </Route>
        </Routes>
    </main>
);


export default App