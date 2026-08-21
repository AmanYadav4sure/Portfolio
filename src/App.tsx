import { useState, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { ThreeBackground } from './components/ThreeBackground';

import { SkeletonLoader } from './components/SkeletonLoader';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

// ----------------------------------------------------
// (͡° ͜ʖ ͡°) Kya dekh ra he ladle DevAman name he mera
// ----------------------------------------------------

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <div className="transition-layer"></div>
      
      {!loading && (
        <SmoothScroll>
          <ThreeBackground />
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
      )}
    </>
  );
}

export default App;
