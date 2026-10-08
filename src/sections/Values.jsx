import React from "react";
import { Box, Typography } from "@mui/material";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Values() {
  return (
    <section id="about" className="section-pad values-section">
      <Box className="container">
        <SectionHeading
          eyebrow="Agency"
          title="Our top global enterprise"
        />
        <Box className="logo-strip">
          {["Image", "Brands Logo", "Image", "Brands Logo"].map((x, i) => (
            <Box key={i} className="logo-placeholder"><span>{x}</span></Box>
          ))}
        </Box>

        <Box className="values-copy">
          <Reveal>
            <Typography className="eyebrow">Our Values</Typography>
          </Reveal>
          <Reveal delay={0.08}>
            <Typography className="display-sm">
              We are a creative team that believes that every
              <br className="desktop-only" /> design has a story, our job is to tell that story in the most
              <br className="desktop-only" /> way possible enjoy exclusive benefits premium.
            </Typography>
          </Reveal>
          <Reveal delay={0.15}>
            <Typography className="body-copy values-small">
              We are a creative team that believes that every design has a story, our job is to tell that story in the most way possible enjoy exclusive benefits premium.
            </Typography>
          </Reveal>
        </Box>
      </Box>
    </section>
  );
}