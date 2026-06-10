import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Menu from './components/Menu'
import Stores from './components/Stores'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Menu />
        <Stores />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
