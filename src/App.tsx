import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contacts";
import LoadingScreen from "./components/LoadingScreen";
import Resume from "./sections/Resume";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="min-h-screen flex-grow">
        <Header />
        <main className="flex-grow">
          <LoadingScreen />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Resume />
        </main>
      </div>
      <Footer />
    </div>
  );
}
export default App;
