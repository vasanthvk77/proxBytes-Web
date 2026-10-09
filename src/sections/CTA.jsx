import React from "react";
import { Box, Typography } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

export default function CTA() {
  return (
    <section id="cta" className="cta-section section-pad">
      <Box className="container cta-inner">
        <Reveal>
          <Typography className="eyebrow">Let’s grow together</Typography>
          <Typography className="display-xl">
            We believe in more than just delivering services – we believe in building long-term partnerships reach us.
          </Typography>
        </Reveal>f
        <motion.button className="cta-circle" whileHover={{ scale: 1.06, rotate: 5 }}>
          <span>Let’s Talk</span><ArrowOutward />
        </motion.button>
      </Box>
    </section>
  );
}