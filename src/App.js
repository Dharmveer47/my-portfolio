import React from 'react';
import '../src/Style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contect from './pages/Contect';
import { Socical } from './pages/Home';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className='appContainer'>
      <BrowserRouter >
      <Socical />
        <Navbar />
        <Home/>
        <About />
        <Projects/>
        <Contect/>
        <Redirect to="/"/>
        {/* <Route exact path='/About' component={About} /> */}
      </BrowserRouter>
    </div>
  )
}
export default App;