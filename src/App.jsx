import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import CaseStudies from "./pages/CaseStudies";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route  path='/' element={<Home />}/>
          <Route path='/case-studies' element={<CaseStudies />}/>
          <Route path='/about-me' element={<AboutMe />}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
