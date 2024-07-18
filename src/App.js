import './App.css';
import Info from "./components/Info";
import About from "./components/About";
import MainSkills from "./components/MainSkills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="app-content">
        <Info />
        <About />
        <MainSkills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
