import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Features from "./components/Features"
import HowItworks from "./components/HowItworks"
import Footer from "./components/Footer"


const App = () => {
  
  return (
    <main className="bg-black">
      <Navigation />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItworks />
      <Footer />
    </main>
  )
}

export default App;
