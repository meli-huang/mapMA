import { motion } from "framer-motion";
import '../styles/ArtCard.css';
import artworks from '../data/artworks.json';
import khanlinks from '../data/khanlinks.json';

export default function ArtCard({ art, onClose, onClick }) {

  // Find the art object from artworks
  const artworkImage = artworks.find(a => a.num === art) || {};
  
  // Calculate previous art number with wrapping
  const handlePrevious = () => {
    const prevNum = art === 224 ? 250 : art - 1;
    onClick?.(prevNum);
  };
  
  // Calculate next art number with wrapping
  const handleNext = () => {
    const nextNum = art === 250 ? 224 : art + 1;
    onClick?.(nextNum);
  };
  
  return (
    <motion.div 
      className="art-card-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
        
      {/* Blurred background */}
      <div className="art-card-blur" />
      
      {/* Card container */}
      <motion.div
        className="art-card-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close button */}
        <button 
          className="art-card-close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Image section */}
        <div className="art-card-image">
          <img 
            src={`images/${art}.svg`} 
            alt={artworkImage.title}
          />
        </div>

        {/* Content section */}
        <div className="art-card-content">
          <p className="art-card-number">{art}</p>
          <h1 className="art-card-title">{artworkImage.title}</h1>
          <p className="art-card-info">{artworkImage.artist}</p>
          <p className="art-card-info">{artworkImage.date}</p>
          <p className="art-card-info">{artworkImage.medium}</p>
          <p className="art-card-info">{artworkImage.location}</p>
          <motion.a className="art-card-link" 
            href={`${khanlinks[art].link}`} // gets the specific khan academy link!
            target="_blank"
          >Learn more.</motion.a>
        </div>

        {/* Navigation buttons */}
        <button 
          className="art-card-nav-btn art-card-nav-left"
          onClick={handlePrevious}
        >
          ←
        </button>
        <button 
          className="art-card-nav-btn art-card-nav-right"
          onClick={handleNext}
        >
          →
        </button>
      </motion.div>
    </motion.div>
  );
}