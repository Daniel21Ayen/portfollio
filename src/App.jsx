import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import UnifiedScroll from './components/ui/UnifiedScroll';
import { ScrollNavigationProvider, useScrollNav } from './context/ScrollNavigationContext';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './styles/global.css';

const AnimatedRoutes = () => {
  const location = useLocation();
  const { direction } = useScrollNav();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: direction === 'down' ? 32 : -32,
      filter: 'blur(3px)'
    },
    in: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)'
    },
    out: {
      opacity: 0,
      y: direction === 'down' ? -32 : 32,
      filter: 'blur(3px)'
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: [0.22, 1, 0.36, 1],
    duration: 0.42
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            } 
          />
          <Route 
            path="/about" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <About />
              </motion.div>
            } 
          />
          <Route 
            path="/projects" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Projects />
              </motion.div>
            } 
          />
          <Route 
            path="/skills" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Skills />
              </motion.div>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Contact />
              </motion.div>
            } 
          />
          <Route 
            path="*" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <NotFound />
              </motion.div>
            } 
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollNavigationProvider>
        <div className="App">
          <Header />
          <main className="main-content">
            <AnimatedRoutes />
          </main>
          <Footer />
          <UnifiedScroll />
        </div>
      </ScrollNavigationProvider>
    </Router>
  );
}

export default App;