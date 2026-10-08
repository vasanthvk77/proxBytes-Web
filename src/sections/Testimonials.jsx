import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward, Star } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../components/Reveal";

const testimonials = [
  ["Alex Carter", "Founder Ayobisa.com", "Few writers can match Kotler's invigorating and insightful style. Tomorrow land is like an adrenaline rush. What makes us for hire stand out is their exclusive focus on."],
  ["Michael Thommas", "Founder of BrightWave Marketing", "Working with Kotler brought clarity, transforming complex ideas into compelling narratives. Tomorrowland sparked conversations, standing out with precision, insight, passion, and purpose."],
  ["Paul Jackson", "User Interface Designer of Janugs", "Kotler masterfully blends creativity and strategy, crafting energetic, insightful storytelling. Their focus on exclusivity and depth helped us lead, not follow, trends with Tomorrowland."],
  ["Olivia Bennett", "CEO of NovaTech Solutions", "Kotler’s team blends originality and discipline, delivering a voice that inspires and informs. Their purposeful, polished writing helped our brand break through with the Tomorrowland campaign."]
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((x) => (x + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const [name, role, quote] = testimonials[active];

  return (
    <section className="section-pad testimonials-section">
      <Box className="container">
        <Reveal><Typography className="eyebrow">Clients words</Typography></Reveal>
        <Reveal delay={0.05}><Typography className="display-md">Statements from clients that reflect their satisfaction with the services incredibly valuable.</Typography></Reveal>

        <Box className="testimonial-top">
          <Box>
            <Typography className="rating">5 <Star fontSize="small" /></Typography>
            <Typography className="rating-label">star rating on Google</Typography>
          </Box>
          <Box className="testimonial-controls">
            <IconButton onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}><ArrowBack /></IconButton>
            <IconButton onClick={() => setActive((active + 1) % testimonials.length)}><ArrowForward /></IconButton>
          </Box>
        </Box>

        <AnimatePresence mode="wait">
          <motion.div key={active} className="testimonial" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -25 }} transition={{ duration: 0.5 }}>
            <Typography className="testimonial-quote">“{quote}”</Typography>
            <Box className="testimonial-author">
              <Box className="avatar-placeholder">{name[0]}</Box>
              <Box><Typography>{name}</Typography><Typography>{role}</Typography></Box>
            </Box>
          </motion.div>
        </AnimatePresence>
      </Box>
    </section>
  );
}