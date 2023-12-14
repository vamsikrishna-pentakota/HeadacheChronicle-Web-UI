import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomeFeatures from './components/HomeFeatures'
import HomeHero from './components/HomeHero'
import Login from './Login';


function App() {

  return (

          <div className="App">
      <HomeHero></HomeHero>
      <HomeFeatures></HomeFeatures>
   
    </div>


  )
}

export default App
