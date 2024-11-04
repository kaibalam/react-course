import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FindNumber } from './components/FindNumber'
import { Header } from './components/main-comps/Header';
import { Footer } from './components/main-comps/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <FindNumber />
    <Footer/>
  </React.StrictMode>,
)
