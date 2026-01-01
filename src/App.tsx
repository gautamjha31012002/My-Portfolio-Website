import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Projects />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
