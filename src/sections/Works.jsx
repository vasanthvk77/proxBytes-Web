


import React, { useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Reveal from "../components/Reveal";
import firstWorkImage from "../../assets/Values-1.png";
import secondWorkImage from "../../assets/Values-2.png";

const works = [
  {
    title: "Social Media Planning",
    description:
      "Benefits by create personalized campaigns that build brand awareness and media.",
    image: firstWorkImage,
  },
  {
    title: "SEO for Grisy",
    description:
      "In-depth keyword research, we ensure website aligns for conversion.",
    image: secondWorkImage,
  },
  {
    title: "Content for Visou.",
    description:
      "Content started from blog posts video, we develop content that speaks directly to users.",
    image: firstWorkImage,
  },
];

const COUNT = works.length;

function WorkItem({ item, index, active, progress }) {
  // This item's slice of the pinned scroll: [index/COUNT, (index+1)/COUNT]
  const raw = useTransform(
    progress,
    [index / COUNT, (index + 1) / COUNT],
    [index === 0 ? 0.15 : 0, 1]
  );
  // Spring makes the line glide smoothly on every wheel tick / touch move
  const fill = useSpring(raw, { stiffness: 120, damping: 26, mass: 0.35 });

  return (
    <Box
      sx={{
        position: "relative",
        pl: { xs: 2.5, md: 3.25 },
        py: { xs: 1, md: 1.5 },
      }}
    >
      {/* grey track */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          left: -1,
          top: 0,
          bottom: 0,
          width: "1px",
          bgcolor: "#dedede",
        }}  
      />
      {/* dark line that fills with scroll */}
      <motion.span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: -1,
          top: 0,
          bottom: 0,
          width: 0.5,
          backgroundColor: "#171717",
          transformOrigin: "top",
          scaleY: fill,
        }}
      />

      <Typography
        component="h3"
        sx={{
          m: 0,
          fontSize: { xs: 18, md: 20 },
          lineHeight: 1.35,
          fontWeight: 600,
          letterSpacing: "-.04em",
          color: "#111111",
        }}
      >
        {item.title}
      </Typography>

      <Typography
        component="p"
        sx={{
          mt: 1.75,
          mb: 0,
          maxWidth: 390,
          color: "#718090",
          fontSize: { xs: 14, md: 15 },
          lineHeight: 1.65,
          // on mobile only the active card is expanded so everything fits in 100vh
          display: { xs: active ? "block" : "none", md: "block" },
        }}
      >
        {item.description}
      </Typography>

      <Button
        href="#about"
        endIcon={<ArrowOutward />}
        sx={{
          mt: 2.25,
          px: 0,
          py: 0.5,
          borderRadius: 0,
          borderBottom: "1px solid #dedede",
          color: "#111111",
          fontSize: 14,
          fontWeight: 600,
          textTransform: "none",
          display: { xs: active ? "inline-flex" : "none", md: "inline-flex" },
          "& .MuiButton-endIcon": {
            ml: 1.25,
            p: 0.25,
            bgcolor: "#111111",
            color: "#ffffff",
          },
          "&:hover": {
            bgcolor: "transparent",
            borderBottomColor: "#111111",
          },
        }}
      >
        Learn more
      </Button>
    </Box>
  );
}

export default function Works() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 0 → 1 while the pinned section is on screen
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(COUNT - 1, Math.max(0, Math.floor(v * COUNT)));
    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  return (
    // Tall wrapper = scroll distance. Page only continues after card 3 completes.
    <Box
      component="section"
      id="works"
      ref={trackRef}
      sx={{
        position: "relative",
        mt: { xs: "6vh", md: "10vh" },
        height: `${COUNT * 100}vh`,
        bgcolor: "#ffffff",
        color: "#111111",
        "&::before": {
          content: '""',
          position: "absolute",
          top: { xs: "-6vh", md: "-10vh" },
          left: 0,
          right: 0,
          height: { xs: "6vh", md: "10vh" },
          bgcolor: "#ffffff",
        },
      }}
    >
      {/* Pinned viewport */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Box
          className="content-container"
          sx={{
            height: { md: "100%" },
            position: { md: "relative" },
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              mb: { xs: 3, md: 6 },
              position: { md: "absolute" },
              top: { md: 0 },
              left: { md: 0 },
              right: { md: 0 },
            }}
          >
            <Reveal>
            <Typography
              component="h2"
              sx={{
                m: 0,
                fontSize: { xs: 36, sm: 48, md: 60 },
                lineHeight: 1.05,
                letterSpacing: "-.065em",
                fontWeight: 600,
              }}
            >
              Our Works
            </Typography>
            </Reveal>
            <Reveal delay={0.12}>
            <Typography
              component="p"
              sx={{
                mt: 2,
                mb: 0,
                color: "#718090",
                fontSize: { xs: 14, md: 15 },
                lineHeight: 1.6,
              }}
            >
              Many works on competitive markets or specialized areas like SEO
            </Typography>
            </Reveal>
          </Box>

          <Reveal delay={0.2}>
          <Box
            sx={{
              display: "grid",
              position: { md: "absolute" },
              top: { md: "50%" },
              left: { md: 0 },
              right: { md: 0 },
              transform: { md: "translateY(-50%)" },
              gridTemplateColumns: {
                xs: "1fr",  
                md: "minmax(0, 1fr) minmax(0, 1.15fr)",
              },
              gap: { xs: 3, md: 10, lg: 14 },
              alignItems: "center",
            }}
          >
            {/* Image (first on mobile, right on desktop) */}
            <Box
              sx={{
                order: { xs: 0, md: 1 },
                position: "relative",
                alignSelf: "center",
                width: "100%",
                height: {
                  xs: "28vh",
                  md: "min(60vh, 560px)",
                },
                overflow: "hidden",
                borderRadius: "6px",
                bgcolor: "#f3f3f3",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={works[activeIndex].image}
                  alt={works[activeIndex].title}
                  initial={{ opacity: 0, scale: 1.035, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.985, y: -8 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </AnimatePresence>
            </Box>

            {/* Cards */}
            <Box
              sx={{
                order: { xs: 1, md: 0 },
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.5, md: 5 },
              }}
            >
              {works.map((item, index) => (
                <WorkItem
                  key={item.title}
                  item={item}
                  index={index}
                  active={activeIndex === index}
                  progress={scrollYProgress}
                />
              ))}
            </Box>
          </Box>
          </Reveal>
        </Box>
      </Box>
    </Box>
  );
}