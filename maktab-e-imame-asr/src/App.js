import "./App.css";
import Contact from "./Components/Contact_us/Contact";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About_us/About";
function App() {
  return (
    <div className="App">
      <About/>
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
