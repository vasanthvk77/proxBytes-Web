


import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward, Star } from "@mui/icons-material";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Reveal from "../components/Reveal";

const testimonials = [
  {
    name: "Alex Carter",
    role: "Student Developer",
    initials: "AC",
    quote:
      "ProxBytes gave me a chance to demonstrate my coding skills through practical challenges. It helped me focus on building solutions instead of just collecting certificates.",
    rating: 4.9,
  },
  {
    name: "Michael Thomas",
    role: "Contest Participant",
    initials: "MT",
    quote:
      "The contest experience pushed me to think beyond tutorials. Building solutions, submitting my work, and getting evaluated made learning feel much more practical.",
    rating: 5.0,
  },
  {
    name: "Paul Jackson",
    role: "Student Developer",
    initials: "PJ",
    quote:
      "I like the opportunity to solve real problems and showcase my work through GitHub. It gives me a practical way to demonstrate what I can actually build.",
    rating: 4.8,
  },
  {
    name: "Olivia Bennett",
    role: "Contest Participant",
    initials: "OB",
    quote:
      "ProxBytes connects learning with competition and recognition. It makes working on technical skills more purposeful and gives students something tangible to work toward.",
    rating: 5.0,
  },
];

const ease = [0.22, 1, 0.36, 1];

/* Rolling digits animation */
function RollingNumber({
  value,
  decimals = 0,
  suffix = "",
  prefix = "",
  duration = 3.5,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const formattedValue =
    decimals > 0 ? Number(value).toFixed(decimals) : String(value);

  return (
    <Box
      ref={ref}
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "baseline",
        whiteSpace: "nowrap",
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {prefix && <span>{prefix}</span>}

      {formattedValue.split("").map((digit, index) => {
        if (!/\d/.test(digit)) {
          return <span key={`sep-${index}`}>{digit}</span>;
        }

        const target = Number(digit);
        const fromTop = index % 2 === 0;

        return (
          <Box
            key={`digit-${index}`}
            component="span"
            sx={{
              position: "relative",
              display: "inline-block",
              height: "1em",
              minWidth: "0.62em",
              overflow: "hidden",
              lineHeight: 1,
              verticalAlign: "bottom",
              flexShrink: 0,
            }}
          >
            <motion.span
              initial={{ y: fromTop ? "0em" : "-9em" }}
              animate={{
                y: isInView ? `${-target}em` : fromTop ? "0em" : "-9em",
              }}
              transition={{
                duration: isInView ? duration : 0,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                willChange: "transform",
              }}
            >
              {Array.from({ length: 10 }, (_, n) => (
                <span
                  key={n}
                  style={{
                    display: "block",
                    flex: "0 0 1em",
                    height: "1em",
                    lineHeight: 1,
                    textAlign: "center",
                  }}
                >
                  {n}
                </span>
              ))}
            </motion.span>
          </Box>
        );
      })}

      {suffix && (
        <Box component="span" sx={{ flexShrink: 0 }}>
          {suffix}
        </Box>
      )}
    </Box>
  );
}

/* Reusable stat card */
function StatCard({
  label,
  caption,
  children,
  isInView,
  delay,
  variant = "light",
}) {
  const big = variant === "blue";

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
      transition={{ duration: 0.8, delay, ease }}
      style={{ height: "100%", minHeight: 0 }}
    >
      <Box
        sx={{
          position: "relative",
          height: "100%",
          minHeight: { xs: big ? 220 : 200, md: 0 },
          bgcolor: big ? "#e4efff" : "#f8f8f8",
          border: `1px solid ${big ? "#d1ddec" : "#e1e1e1"}`,
          borderRadius: "7px",
          p: big
            ? { xs: 3.5, md: "clamp(20px, 3.5vh, 40px) clamp(24px, 3.5vw, 44px)" }
            : { xs: 2, sm: 3, md: "clamp(16px, 2.6vh, 28px)" },
          display: "flex",
          flexDirection: "column",
          justifyContent: big ? "center" : "flex-end",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: 14, md: "clamp(12px, 2vh, 20px)" },
            right: { xs: 12, md: 16 },
            bgcolor: "#ffffff",
            px: big ? 2.5 : 1.8,
            py: big ? 0.8 : 0.7,
            borderRadius: "40px",
          }}
        >
          <Typography sx={{ fontSize: big ? 13 : 11, fontWeight: 500 }}>
            {label}
          </Typography>
        </Box>

        <Typography
          component="div"
          sx={{
            fontSize: big
              ? { xs: 78, sm: 90, md: "clamp(56px, 13vh, 110px)" }
              : { xs: 42, sm: 55, md: "clamp(40px, 9vh, 72px)" },
            fontWeight: 500,
            lineHeight: big ? 0.95 : 1,
            letterSpacing: "-.08em",
            whiteSpace: "nowrap",
          }}
        >
          {children}
        </Typography>

        <Typography
          sx={{
            mt: big ? 1.5 : 1,
            fontSize: big
              ? { xs: 14, md: "clamp(13px, 2vh, 17px)" }
              : { xs: 11, sm: 13, md: "clamp(12px, 1.8vh, 15px)" },
            lineHeight: 1.5,
            color: "#222222",
          }}
        >
          {caption}
        </Typography>
      </Box>
    </motion.div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const current = testimonials[active];

  const previousTestimonial = () =>
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  const nextTestimonial = () =>
    setActive((p) => (p + 1) % testimonials.length);

  useEffect(() => {
    if (paused || !isInView) return;
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, isInView]);

  return (
    <Box
      component="section"
      ref={sectionRef}
      className="section-pad testimonials-section"
      sx={{
        bgcolor: "#ffffff",
        color: "#080808",
        mt: "-1px",
        borderTop: 0,
        // Exactly one screen on desktop; grows naturally on small screens
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "100vh", md: 600 },
        py: { xs: 8, md: "clamp(24px, 5vh, 56px)" },
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        className="content-container"
        sx={{
          height: { md: "100%" },
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        {/* HEADING */}
        <Box sx={{ flexShrink: 0 }}>
          <Reveal>
            <Typography
              component="h2"
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: "clamp(36px, 8vw, 54px)",
                  md: "clamp(36px, 7.5vh, 74px)",
                },
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: "-.075em",
                color: "#080808",
              }}
            >
              Skills that speak.
              <br />
              <Box component="span" sx={{ color: "#a56af5" }}>
                Opportunities that follow.
              </Box>
            </Typography>
          </Reveal>

          <Reveal delay={0.08}>
            <Typography
              sx={{
                textAlign: "center",
                maxWidth: 720,
                mx: "auto",
                mt: { xs: 2, md: "clamp(8px, 1.6vh, 18px)" },
                mb: { xs: 5, md: "clamp(16px, 4vh, 44px)" },
                fontSize: { xs: 14, md: "clamp(13px, 2vh, 18px)" },
                lineHeight: 1.6,
                color: "#718090",
              }}
            >
              A platform where students build practical skills, take on
              challenges, and demonstrate what they can do.
            </Typography>
          </Reveal>
        </Box>

        {/* MAIN GRID — fills the remaining height */}
        <Box
          sx={{
            flex: { md: "1 1 0" },
            minHeight: 0,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
            },
            gridTemplateRows: { md: "minmax(0, 1fr)" },
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {/* LEFT COLUMN */}
          <Box
            sx={{
              display: "grid",
              gridTemplateRows: { xs: "auto auto", md: "1fr 1fr" },
              gap: 2.5,
              minWidth: 0,
              minHeight: 0,
            }}
          >
            <StatCard
              variant="blue"
              label="Platform"
              caption="Illustrative platform growth metric"
              isInView={isInView}
              delay={0.15}
            >
              <RollingNumber value={79} suffix="%" />
            </StatCard>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: { xs: 1.5, md: 2.5 },
                minWidth: 0,
                minHeight: 0,
              }}
            >
              <StatCard
                label="Challenges"
                caption="Sample challenge count"
                isInView={isInView}
                delay={0.3}
              >
                <RollingNumber value={8} suffix="+" />
              </StatCard>

              <StatCard
                label="Rating"
                caption="Sample rating"
                isInView={isInView}
                delay={0.45}
              >
                <RollingNumber value={5} decimals={2} />
              </StatCard>
            </Box>
          </Box>

          {/* RIGHT: TESTIMONIAL PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 45 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
            style={{ minWidth: 0, minHeight: 0, display: "flex" }}
          >
            <Box
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setPaused(false);
                }
              }}
              sx={{
                position: "relative",
                width: "100%",
                minHeight: { xs: 440, md: 0 },
                height: { md: "100%" },
                bgcolor: "#d9c0ff",
                border: "1px solid #cbb0f6",
                borderRadius: "7px",
                p: {
                  xs: 3,
                  sm: 4,
                  md: "clamp(20px, 4vh, 44px) clamp(24px, 3.5vw, 48px)",
                },
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: 18, md: "clamp(14px, 3vh, 28px)" },
                  right: { xs: 18, md: "clamp(16px, 2.5vw, 28px)" },
                  bgcolor: "#ffffff",
                  px: 2.5,
                  py: 0.9,
                  borderRadius: "40px",
                }}
              >
                <Typography sx={{ fontSize: 13, fontWeight: 500 }}>
                  Testimonial
                </Typography>
              </Box>

              {/* RATING */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.25,
                  mt: { xs: 4, md: 1 },
                }}
              >
                <Star sx={{ fontSize: 25, color: "#17131d" }} />
                <Typography
                  component="div"
                  sx={{
                    fontSize: { xs: 20, md: 23 },
                    fontWeight: 500,
                    letterSpacing: "-.04em",
                  }}
                >
                  <RollingNumber
                    value={current.rating}
                    decimals={1}
                    duration={1.1}
                  />
                </Typography>
              </Box>

              {/* QUOTE */}
              <Box
                sx={{
                  mt: { xs: 4, md: "clamp(14px, 3vh, 36px)" },
                  flex: 1,
                  minHeight: 0,
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`quote-${active}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    <Typography
                      component="blockquote"
                      sx={{
                        m: 0,
                        maxWidth: 540,
                        fontSize: {
                          xs: 19,
                          sm: 21,
                          md: "clamp(16px, 2.6vh, 22px)",
                        },
                        lineHeight: 1.6,
                        letterSpacing: "-.04em",
                        fontWeight: 500,
                        color: "#15121a",
                      }}
                    >
                      “{current.quote}”
                    </Typography>
                  </motion.div>
                </AnimatePresence>
              </Box>

              {/* AUTHOR */}
              <Box
                sx={{
                  mt: { xs: 4, md: "clamp(12px, 2.5vh, 32px)" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`author-${active}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease }}
                    style={{ display: "flex", alignItems: "center", gap: 16 }}
                  >
                    <Box
                      sx={{
                        width: { xs: 48, md: "clamp(44px, 7vh, 62px)" },
                        height: { xs: 48, md: "clamp(44px, 7vh, 62px)" },
                        flexShrink: 0,
                        borderRadius: "50%",
                        bgcolor: "#ffffff",
                        border: "2px solid rgba(255,255,255,.7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 17,
                        fontWeight: 600,
                        color: "#7650aa",
                      }}
                    >
                      {current.initials}
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: 15, md: 18 },
                          fontWeight: 500,
                          lineHeight: 1.4,
                        }}
                      >
                        {current.name}
                      </Typography>
                      <Typography
                        sx={{
                          mt: 0.5,
                          fontSize: { xs: 12, md: 15 },
                          lineHeight: 1.5,
                          color: "#31283c",
                        }}
                      >
                        {current.role}
                      </Typography>
                    </Box>
                  </motion.div>
                </AnimatePresence>
              </Box>

              {/* NAVIGATION */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mt: { xs: 4, md: "clamp(14px, 3vh, 40px)" },
                }}
              >
                <IconButton
                  aria-label="Previous testimonial"
                  onClick={previousTestimonial}
                  sx={{
                    width: 58,
                    height: 42,
                    borderRadius: "30px",
                    bgcolor: "#ffffff",
                    color: "#666666",
                    "&:hover": { bgcolor: "#f6efff", color: "#8e50e8" },
                    transition: "all .25s ease",
                  }}
                >
                  <ArrowBack sx={{ fontSize: 19 }} />
                </IconButton>

                <IconButton
                  aria-label="Next testimonial"
                  onClick={nextTestimonial}
                  sx={{
                    width: 58,
                    height: 42,
                    borderRadius: "30px",
                    bgcolor: "#ffffff",
                    color: "#666666",
                    "&:hover": { bgcolor: "#f6efff", color: "#8e50e8" },
                    transition: "all .25s ease",
                  }}
                >
                  <ArrowForward sx={{ fontSize: 19 }} />
                </IconButton>

                <Box sx={{ flex: 1 }} />

                <Typography
                  sx={{
                    fontSize: 11,
                    color: "#453650",
                    letterSpacing: ".08em",
                    fontWeight: 600,
                  }}
                >
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}