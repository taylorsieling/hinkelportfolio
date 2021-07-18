import './App.css';
import Header from './components/Header'
import NavContainer from './containers/NavContainer'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Experience from './components/Experience'

function App() {
  return (
    <div className="App">
      <NavContainer/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Experience/>
    </div>
  );
}

export default App;
