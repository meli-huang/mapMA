import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import './App.css'

// import data 
import artworks from './data/artworks.json';
import style_positions from './data/style_positions.json';

// import components
import ArtImage from './components/ArtImage';
import ArtCard from './components/ArtCard';
import Background from './components/Background';
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
        

        {/* Header of mapMA */}
        <motion.button
          transition={{
            duration: 0.2,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          whileHover={{
            y: -8,
            x: -8,
            boxShadow: "8px 8px 0px #2E62FF",
          }}
        >
          <div className="header-background"/>
          <h1 className="header-title">✶ mapMA</h1>
          <p className="header-description">
            Admire, visualize, and study the AP Art History unit on Modern Art.
          </p>
        </motion.button>


        {/* Form Fields */}
        <FormFields />


        {/* Art pieces as ArtworkImage objects */}
        {artworks.map((art) => (
          <ArtImage
            art={art}
            style={style_positions[art.num]}
            onClick={() => setSelectedArt(art.num)}
          />
        ))}
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
