import { motion, LayoutGroup } from 'framer-motion';
import '../App.css';

// import data 
import artworks from '../data/artworks.json';
import style_positions from '../data/style_positions.json';

// import components
import ArtImage from './ArtImage';
import FormFields from './FormFields';

export default function LayoutHome({ setLayoutMode, setSelectedArt }) {

    return (
    <div>
        {/* Header of mapMA */}
        <div>
          <div className="header-background"/>
          <h1 className="header-title">✶ mapMA</h1>
          <p className="header-description">
            Admire, visualize, and study the AP Art History unit on Modern Art.
          </p>
        </div>

        {/* Form Fields */}
        <FormFields 
          onClickHome={() => setLayoutMode("home")}
          onClickDate={() => setLayoutMode("date")}
          onClickTitle={() => setLayoutMode("title")}
          onClickArtist={() => setLayoutMode("artist")}
          layout={"home"}
        />

        {/* Art pieces as ArtworkImage objects */}
        <LayoutGroup>
          {artworks.map((art) => (
            <ArtImage
              art={art}
              style={style_positions[art.num]}
              onClick={() => setSelectedArt(art.num)}
            />
          ))}
        </LayoutGroup>
    </div>
  );
}
