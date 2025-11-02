import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-600/30 selection:text-white">
      <Hero />
      <Features />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
