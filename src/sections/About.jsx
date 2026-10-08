import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Reveal from "../components/Reveal";
import VisualCard from "../components/VisualCard";

export default function About() {
  return (
    <section className="section-pad about-section">
      <Box className="container">
        <Grid container spacing={{ xs: 5, md: 10 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <Typography className="eyebrow">Based in London</Typography>
              <Typography className="about-copy">
                Based in London, our digital agency is dedicated to helping brands thrive in the digital world. We specialize in web design, digital marketing, SEO, content creation.
              </Typography>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={0.08}>
              <Typography className="eyebrow">Our Goal is Clear</Typography>
              <Typography className="about-copy">
                As a one-stop-shop for all things digital marketing, helping businesses navigate the complexities of the online world and build lasting success through strategy.
              </Typography>
              <button className="text-link">Know more about us <span>↗</span></button>
            </Reveal>
          </Grid>
        </Grid>

        <Box className="stats-band">
          <Reveal>
            <Typography className="stat-number">08<span>+</span></Typography>
            <Typography className="stat-label">Global Team Members</Typography>
          </Reveal>
          <Reveal delay={0.08}>
            <Typography className="stat-number">10k</Typography>
            <Typography className="stat-label">Happy global users</Typography>
          </Reveal>
        </Box>

        <Box className="about-visual"><VisualCard variant="about" label="About Image" /></Box>
      </Box>
    </section>
  );
}