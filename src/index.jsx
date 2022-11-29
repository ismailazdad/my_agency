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
import {createGlobalStyle} from 'styled-components'
import {SurveyProvider, ThemeProvider} from "./utils/context"
import Footer from "./components/Footer";
import GlobalStyle from './utils/style/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Router>
        <ThemeProvider>
            <SurveyProvider>
                <GlobalStyle/>
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
                <Footer/>
            </SurveyProvider>
        </ThemeProvider>
    </Router>
    // </React.StrictMode>
);

