import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/index';
import Survey from "./pages/Survey";
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Error from './components/Error'
import Header from './components/Header'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
      margin: 0;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}>
                </Route>
                <Route path="/survey/:questionNumber" element={<Survey/>}>
                </Route>
                <Route path="/results" element={<Results/>}>
                </Route>
                <Route path="/freelances" element={<Freelances/>}>
                </Route>
                <Route path="*" element={<Error/>}>
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);

