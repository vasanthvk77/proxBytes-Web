import React from "react";
import { motion } from "framer-motion";

export default function VisualCard({ variant = "a", label }) {
  return (
    <motion.div
      className={`visual-card visual-${variant}`}
      whileHover={{ scale: 0.985 }}
      transition={{ duration: 0.45 }}
    >
      <div className="visual-noise" />
      <div className="visual-orb orb-a" />
      <div className="visual-orb orb-b" />
      <div className="visual-grid" />
      {label && <span className="visual-label">{label}</span>}
    </motion.div>
  );
}