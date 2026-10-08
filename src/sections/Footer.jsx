import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer className="footer">
      <Box className="container">
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography className="footer-brand">Drop<span>.</span></Typography>
            <Typography className="footer-copy">Digital Marketing Solutions</Typography>
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography className="footer-heading">Explore</Typography>
            <Stack spacing={1.2}>{["About", "Services", "Works", "Blogs"].map(x => <a href={`#${x.toLowerCase()}`} key={x}>{x}</a>)}</Stack>
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography className="footer-heading">Social</Typography>
            <Stack spacing={1.2}>{["Instagram", "LinkedIn", "Facebook"].map(x => <a href="#" key={x}>{x}</a>)}</Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography className="footer-heading">Work with us</Typography>
            <a href="#cta">Let’s Talk ↗</a>
          </Grid>
        </Grid>
        <Box className="footer-bottom">
          <Typography>© 2025 Drop Studio. All rights reserved.</Typography>
          <Typography>Made with intention.</Typography>
        </Box>
      </Box>
    </footer>
  );
}