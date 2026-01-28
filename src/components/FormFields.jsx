import { motion } from 'framer-motion';

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

export default function FormFields() {
  return (
    <>
      <motion.button className="form-field map-field" {...motionButtonProps}>
        <div className="field-background filled" />
        <label className="field-label light">map</label>
      </motion.button>

      <motion.button className="form-field date-field" {...motionButtonProps}>
        <div className="field-background" />
        <label className="field-label">date</label>
      </motion.button>

      <motion.button className="form-field title-field" {...motionButtonProps}>
        <div className="field-background" />
        <label className="field-label">title</label>
      </motion.button>

      <motion.button className="form-field artist-field" {...motionButtonProps}>
        <div className="field-background" />
        <label className="field-label">artist</label>
      </motion.button>
    </>
  );
}
