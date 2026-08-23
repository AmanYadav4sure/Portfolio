import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import { Navbar } from './components/Navbar';

import { SkeletonLoader } from './components/SkeletonLoader';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

// ----------------------------------------------------
// (͡° ͜ʖ ͡°) Kya dekh ra he ladle DevAman name he mera
// ----------------------------------------------------

function App() {
  const location = useLocation();

  return (
    <>
      <div className="transition-layer"></div>
      
      <SmoothScroll>
          <Navbar />
          
          <main className="page-content" key={location.pathname}>
            <Suspense fallback={<SkeletonLoader />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
        </SmoothScroll>
    </>
  );
}

export default App;
