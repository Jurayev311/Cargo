import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import News from './components/news/News'
import Partners from './components/partners/Partners'
import Services from './components/services/Services'
import Why from './components/why/Why'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Why />
      <News />
      <Partners />
      <Contact />
      <Footer />
    </>
  )
}

export default App
