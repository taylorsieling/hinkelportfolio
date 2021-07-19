import './App.css';
import Header from './components/Header'
import NavContainer from './containers/NavContainer'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavContainer/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Education/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
