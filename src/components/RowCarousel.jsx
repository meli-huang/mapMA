import { motion, LayoutGroup } from "framer-motion";
import { useState } from "react";
import artworks from '../data/artworks.json';

import ArtImage from "./ArtImage";

export function RowCarousel({
  startCategory,
  imageIds,
  setSelectedArt
}) {

  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => setIsHovered(true);
  const handleHoverEnd = () => setIsHovered(false);

  return (
    <div className="rowViewport">
      <motion.div
        className="rowTrack"
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        style={{
          alignItems: "left",
          animation: `scroll ${100}s linear infinite`,
          animationPlayState: isHovered ? 'paused' : 'running',
          animationDirection: 'left',
        }}
      >

        {/* images before the category label */}
        <LayoutGroup>
          {imageIds.map((imgNum) => (
            <ArtImage
              art={artworks[imgNum]}
              style={{}}
              onClick={() => setSelectedArt(artworks[imgNum].num)}
            />
          ))}
        </LayoutGroup>

        {/* row's category label! */}
        <motion.img
          src={"categories/" + startCategory + ".svg"}
          alt={startCategory}
        />

        {/* imgNum is based on 0-n, NOT 224-250 */}
        <LayoutGroup>
          {imageIds.map((imgNum) => (
            <ArtImage
              art={artworks[imgNum]}
              style={{}}
              onClick={() => setSelectedArt(artworks[imgNum].num)}
            />
          ))}
        </LayoutGroup>

      </motion.div>
    </div>
  );
}
