import viteLogo from "/vite.svg"
import Timeline from "./components/Timeline"
import Customers from "./components/Customers"
import Hero from "./components/Hero"
import About from "./components/About"
import Features from "./components/Features"
import Pricing from "./components/Pricing"

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Timeline />
      <Hero />
      <Customers />
      <Features />
      <About />
      <Pricing />
    </div>
  )
}

export default App

