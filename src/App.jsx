import './App.css';
import Header from './components/header';
import HeroComponent from './components/HeroComponent';



// function ScrollableContent() {
//   return (
//     <div className="scroll-container">
//       <h2 className="text-4xl text-white font-bold mb-8">Our Work</h2>
//       <p className="text-gray-400 mb-4">
//         We offer top-notch services in branding, marketing animations, website design, and graphic design.
//       </p>
//       <div className="image-gallery mb-8">
//         {/* Add images or content */}
//       </div>
//       <h2 className="text-4xl text-white font-bold mb-8">Our Clients</h2>
//       <p className="text-gray-400">
//         Over the years, we've partnered with numerous reputable brands across different industries.
//       </p>
//     </div>
//   );
// }

// Main App Component
function App() {
  return (
    <div className="h-screen bg-black ">
      <Header/>
      <HeroComponent/>
      
    </div>
  );
}

export default App;
