import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../components/Reveal";
import VisualCard from "../components/VisualCard";

const services = [
  {
    no: "001",
    title: "SEO Marketing",
    text: "leverages platforms like medias Facebook, Instagram, LinkedIn to engage to attract.",
    variant: "service-a"
  },
  {
    no: "002",
    title: "Social Media",
    text: "leverages platforms like medias Facebook, Instagram, LinkedIn to engage to attract.",
    variant: "service-b"
  },
  {
    no: "003",
    title: "Content Marketing",
    text: "leverages platforms like medias Facebook, Instagram, LinkedIn to engage to attract.",
    variant: "service-c"
  }
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="section-pad services-section">
      <Box className="container">
        <Reveal><Typography className="eyebrow">Services</Typography></Reveal>
        <Box className="services-heading">
          <Reveal><Typography className="display-md">Marketing strategy solutions for you</Typography></Reveal>
          <Reveal delay={0.08}><Typography className="body-copy">Several key factors, including market trends, the agency’s ability to adapt</Typography></Reveal>
        </Box>

        <Box className="services-layout">
          <Box className="service-list">
            {services.map((service, index) => (
              <motion.button
                key={service.no}
                className={`service-row ${active === index ? "active" : ""}`}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                whileHover={{ x: 8 }}
              >
                <span className="service-no">{service.no}</span>
                <span className="service-title">{service.title}</span>
                <ArrowOutward />
              </motion.button>
            ))}
          </Box>

          <Box className="service-detail">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.4 }}
              >
                <VisualCard variant={services[active].variant} label="Services Image" />
                <Typography className="service-description">{services[active].text}</Typography>
                <button className="text-link">Learn more <span>↗</span></button>
              </motion.div>
            </AnimatePresence>
          </Box>
        </Box>

        <Box className="service-tags">
          {["E-Commerce", "Corporate Website", "HR Platform", "HR Platform", "E-Commerce"].map((x, i) => (
            <span key={i}>{x}</span>
          ))}
        </Box>
      </Box>
    </section>
  );
}