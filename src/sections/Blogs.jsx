import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import Reveal from "../components/Reveal";

const blogs = [
  ["Growth", "April 6, 2025", "The Importance of visibility for Small Businesses in 2025."],
  ["Branding", "April 6, 2025", "How to Build a Digital Marketing Strategy from Scratch step-by-step."],
  ["Business", "April 6, 2025", "The Power of Social Media Advertising: Right for Business"]
];

export default function Blogs() {
  return (
    <section id="blogs" className="section-pad blogs-section">
      <Box className="container">
        <Box className="blogs-heading">
          <Reveal><Typography className="eyebrow">Read our blogs</Typography></Reveal>
          <Reveal delay={0.06}><Typography className="display-md">Current blogs to showcase expertise, provide value to readers</Typography></Reveal>
          <button className="text-link">Read All Blogs <ArrowOutward /></button>
        </Box>

        <Grid container spacing={3}>
          {blogs.map(([tag, date, title], i) => (
            <Grid key={title} size={{ xs: 12, md: 4 }}>
              <Reveal delay={i * 0.08}>
                <Box className="blog-card">
                  <Box className={`blog-image blog-${i}`} />
                  <Typography className="blog-meta">{tag} <span>{date}</span></Typography>
                  <Typography className="blog-title">{title}</Typography>
                  <button className="text-link">Learn more <ArrowOutward fontSize="small" /></button>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
}