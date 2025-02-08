
import styles from "./app.module.css"
import { Navbar } from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/Hero"
import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience"
import { Contact } from "./components/Contact/Contact"
import { Project } from "./components/Project/Project"
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary"

function App() {
  return <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <ErrorBoundary>
      <Project/>
    </ErrorBoundary>
    <Contact/>

  </div>
}

export default App
