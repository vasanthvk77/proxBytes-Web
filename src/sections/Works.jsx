import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import VisualCard from "../components/VisualCard";

const works = [
  ["Social Media Planning", "Benefits by create personalized campaigns that build brand awareness and media.", "work-a"],
  ["SEO for Grisy", "In-depth keyword research, we ensure website aligns for comversion.", "work-b"],
  ["Content for Visou.", "Content started from blog posts video, we develop content that speaks directly to users.", "work-c"]
];

export default function Works() {
  return (
    <section id="works" className="section-pad works-section">
      <Box className="container">
        <Reveal><Typography className="eyebrow">Our Works</Typography></Reveal>
        <Reveal delay={0.06}><Typography className="display-md works-title">Many works on competitive markets or specialized areas like SEO</Typography></Reveal>

        <Grid container spacing={3} className="works-grid">
          {works.map(([title, copy, variant], i) => (
            <Grid key={title} size={{ xs: 12, md: 4 }}>
              <Reveal delay={i * 0.08}>
                <motion.div className="work-card" whileHover={{ y: -8 }}>
                  <VisualCard variant={variant} />
                  <Box className="work-copy">
                    <Typography className="work-title">{title}</Typography>
                    <Typography className="work-description">{copy}</Typography>
                    <button className="text-link">Learn more <ArrowOutward fontSize="small" /></button>
                  </Box>
                </motion.div>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
}