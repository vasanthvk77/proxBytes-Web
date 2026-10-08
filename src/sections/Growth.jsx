import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

const data = [
  ["SEO Marketing", 100, "By conducting in-depth keyword research, we ensure website aligns."],
  ["Social Media", 80, "We create personalized campaigns that build brand awareness."],
  ["Content Marketing", 90, "From blog posts video, we develop content that speaks directly"],
  ["Email Marketing", 60, "Tool for connecting directly with powerful audience, delivering."]
];

export default function Growth() {
  return (
    <section className="section-pad growth-section">
      <Box className="container">
        <Reveal><Typography className="eyebrow">Annual Growth</Typography></Reveal>
        <Box className="growth-top">
          <Reveal><Typography className="display-md">Several key factors, including market trends, the agency’s ability to adapt</Typography></Reveal>
          <Reveal delay={0.08}><Typography className="growth-rate">79%<small>Growth Rate in 2025</small></Typography></Reveal>
        </Box>

        <Box className="growth-bars">
          {data.map(([name, value, copy], i) => (
            <Reveal key={name} delay={i * 0.05}>
              <Box className="growth-item">
                <Box className="growth-line-top">
                  <Typography>{name}</Typography><Typography>{value}%</Typography>
                </Box>
                <Box className="bar-track">
                  <motion.div
                    className="bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: i * 0.08 }}
                  />
                </Box>
                <Typography className="growth-copy">{copy}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </section>
  );
}