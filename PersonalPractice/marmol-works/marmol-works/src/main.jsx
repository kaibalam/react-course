import React from 'react'
import ReactDOM from 'react-dom/client'
import { MarmolWorksApp } from './MarmolWorksApp'
import { BrowserRouter } from 'react-router-dom'

import '../src/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MarmolWorksApp />
    </BrowserRouter>
  </React.StrictMode>,
)
