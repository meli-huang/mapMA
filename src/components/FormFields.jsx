import { motion } from 'framer-motion';
import "../styles/FormFields.css";

const motionButtonProps = {
  transition: {
    duration: 0.2,
    repeatType: "reverse",
    ease: "easeInOut"
  },
  whileHover: {
    y: -8,
    x: -8,
    boxShadow: "8px 8px 0px #2E62FF",
  }
};

export default function FormFields({ onClickHome, onClickDate, 
  onClickTitle, onClickArtist, layout }) {
  return (
    <div>
      {
        layout === "home" ? 

        // this is the home page! 
          <div>
            <motion.button 
              className="form-field map-home" 
              onClick={onClickHome}
              {...motionButtonProps}>
              <div className="field-background filled" />
              <label className="field-label light">map</label>
            </motion.button>

            <motion.button 
              className="form-field date-home" 
              onClick={onClickDate}
              {...motionButtonProps}>
              <div className="field-background" />
              <label className="field-label">date</label>
            </motion.button>

            <motion.button 
              className="form-field title-home" 
              onClick={onClickTitle}
              {...motionButtonProps}>
              <div className="field-background" />
              <label className="field-label">title</label>
            </motion.button>

            <motion.button 
              className="form-field artist-home" 
              onClick={onClickArtist}
              {...motionButtonProps}>
              <div className="field-background" />
              <label className="field-label">artist</label>
            </motion.button>
          </div>

          : 

          // this is NOT the home page, different layout
          <div>
            <motion.button 
              className="form-field map-non-home" 
              onClick={onClickHome}
              {...motionButtonProps}>
              <div className="field-background" />
              <label className="field-label">map</label>
            </motion.button>

            <motion.button 
              className="form-field date-non-home" 
              onClick={onClickDate}
              {...motionButtonProps}>
              <div className="field-background" />
              <label className="field-label">date</label>
            </motion.button>

            <motion.button 
              className="form-field title-non-home" 
              onClick={onClickTitle}
              {...motionButtonProps}>
              <div className="field-background" />
              <label className="field-label">title</label>
            </motion.button>

            <motion.button 
              className="form-field artist-non-home" 
              onClick={onClickArtist}
              {...motionButtonProps}>
              <div className="field-background" />
              <label className="field-label">artist</label>
            </motion.button>
          </div>
      }

      {/* Naive, but the highlighted buttons for each layout */}
      { layout === "date" && 
        <motion.button 
          className="form-field date-non-home" 
          onClick={onClickDate}
          {...motionButtonProps}>
          <div className="field-background filled" />
          <label className="field-label light">date</label>
        </motion.button> }

      { layout === "artist" && 
        <motion.button 
          className="form-field artist-non-home" 
          onClick={onClickDate}
          {...motionButtonProps}>
          <div className="field-background filled" />
          <label className="field-label light">artist</label>
        </motion.button> }

      { layout === "title" && 
        <motion.button 
          className="form-field title-non-home" 
          onClick={onClickDate}
          {...motionButtonProps}>
          <div className="field-background filled" />
          <label className="field-label light">title</label>
        </motion.button> }

    </div>
  );
}
