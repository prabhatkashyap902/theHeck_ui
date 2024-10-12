import './App.css';
import ContactComponent from './components/ContactComponent';
import Header from './components/Header';
import HeroComponent from './components/HeroComponent';
import ProjectComponent from './components/ProjectComponent';

function App() {

  return (
    <div className=" bg-black ">
      <Header/>
      <HeroComponent/>
      <ProjectComponent/>
      <ContactComponent/>
    </div>
  );
}

export default App;
