import React from "react";
import { Box, Typography } from "@mui/material";
import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, right }) {
  return (
    <Box className="section-heading">
      <Reveal>
        <Typography className="eyebrow">{eyebrow}</Typography>
      </Reveal>
      <Box className="section-heading-grid">
        <Reveal delay={0.05}>
          <Typography component="h2" className="display-md">
            {title}
          </Typography>
        </Reveal>
        {description && (
          <Reveal delay={0.12}>
            <Typography className="body-copy">{description}</Typography>
          </Reveal>
        )}
        {right}
      </Box>
    </Box>
  );
}