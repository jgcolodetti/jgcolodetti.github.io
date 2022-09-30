import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GlobalState from '../components/global/GlobalState';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalState>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
        </Routes>
      </GlobalState>
    </BrowserRouter>
  )
}

export default Router;