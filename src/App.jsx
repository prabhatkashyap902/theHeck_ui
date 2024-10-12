import './App.css';
import Header from './components/Header';
import HeroComponent from './components/HeroComponent';
import ProjectComponent from './components/ProjectComponent';

function App() {

  return (
    <div className=" bg-black ">
      <Header/>
      <HeroComponent/>
      <ProjectComponent/>
    </div>
  );
}

export default App;
