import { motion } from "framer-motion";

export default function ArtImage({ art, style, onClick }) {
  return (
    <motion.img
      src={"/images/" + art.num + ".svg"}
      alt={art.title}
      style={style}

      onClick={onClick}

      transition={{
        duration: 0.2,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      whileHover={{
        y: -8,
        x: -8,
        filter: "saturate(1.2 brightness(1.2)",
        boxShadow: "8px 8px 0px #2E62FF",
      }}
      initial={{
        filter: "opacity(1)",
      }}
    />
  );
}