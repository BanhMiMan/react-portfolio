import Navbar from "./component/NavBar/navbar";
import Intro from './component/Introduction/intro';
import Skills from "./component/Skills/Skills";
import Projects from  './component/Projects/project';
import ContactPage from "./component/ContactPage/contactPage";
import Footer from "./component/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
