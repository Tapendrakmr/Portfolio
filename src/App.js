import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header/Header"
import About from "./About/About"
import Service from "./Services/Service"
import Project from "./Project/Project"
import Contact from "./Contact/Contact"
function App() {
  return (
    <div className="App">
        <Header/>
        <About/>
        <Service/>
        <Project/>
        <Contact/>
    </div>
  );
}

export default App;
