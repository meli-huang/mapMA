import { useState, useEffect } from 'react'
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';

import './App.css';

// import components
import Background from './components/Background';
import LayoutDate from './components/LayoutDate';
import LayoutHome from './components/LayoutHome';
import LayoutArtist from './components/LayoutArtist';
import LayoutTitle from './components/LayoutTitle';
import ArtCard from './components/ArtCard';
import FormFields from './components/FormFields';

const BASE_WIDTH = 1512;
const BASE_HEIGHT = 982;

function App() {

  // state for displaying selected artwork cards
  const [selectedArt, setSelectedArt] = useState(null);

  // state for a resizable and responsive window
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const resize = () => {
      const scaleX = (window.innerWidth / BASE_WIDTH) * 1.2;
      const scaleY = (window.innerHeight / BASE_HEIGHT) * 1.2;
      setScale(Math.min(scaleX, scaleY));
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // state for entering layouts
  const [layoutMode, setLayoutMode] = useState("home");

  // // clear any open ArtCard when returning to the home layout
  // useEffect(() => {
  //   if (layoutMode === "home") {
  //     setSelectedArt(null);
  //   }
  // }, [layoutMode]);

  return (
    <div className="App">

      {/* Background p5 sketch */}
      <Background />

      {/* transforms to be resized properly */}
        <div className="mapma-container"
            style={{ 
            transform: `scale(${scale})`, 
            transformOrigin: 'top left',
            }}>

          <LayoutGroup>
            <AnimatePresence mode="sync">
              {layoutMode === "home" && <LayoutHome 
                setLayoutMode={setLayoutMode}
                setSelectedArt={setSelectedArt}/>}
              {layoutMode === "date" && <LayoutDate 
                setLayoutMode={setLayoutMode}
                setSelectedArt={setSelectedArt} />}
              {layoutMode === "title" && <LayoutTitle 
                setLayoutMode={setLayoutMode}
                setSelectedArt={setSelectedArt} />}
              {layoutMode === "artist" && <LayoutArtist 
                setLayoutMode={setLayoutMode}
                setSelectedArt={setSelectedArt} />}
            </AnimatePresence>
          </LayoutGroup>
        </div>

        {/* Artwork Card Modal, without resizing */}
        {selectedArt && (
          <ArtCard 
            art={selectedArt} 
            onClose={() => setSelectedArt(null)}
            onClick={(artNum) => setSelectedArt(artNum)}
          />
        )}

    </div>
  )
}

export default App
