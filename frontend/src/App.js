import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {Container} from 'react-bootstrap'
import './App.css'
import {HomeScreen} from './screens/HomeScreen'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header/>
      <HomeScreen />
    </div>
  );
}

export default App;
