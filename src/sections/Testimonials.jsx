// import React, { useEffect, useState } from "react";
// import { Box, IconButton, Typography } from "@mui/material";
// import { ArrowBack, ArrowForward, Star } from "@mui/icons-material";
// import { AnimatePresence, motion } from "framer-motion";
// import Reveal from "../components/Reveal";

// const testimonials = [
//   ["Alex Carter", "Founder Ayobisa.com", "Few writers can match Kotler's invigorating and insightful style. Tomorrow land is like an adrenaline rush. What makes us for hire stand out is their exclusive focus on."],
//   ["Michael Thommas", "Founder of BrightWave Marketing", "Working with Kotler brought clarity, transforming complex ideas into compelling narratives. Tomorrowland sparked conversations, standing out with precision, insight, passion, and purpose."],
//   ["Paul Jackson", "User Interface Designer of Janugs", "Kotler masterfully blends creativity and strategy, crafting energetic, insightful storytelling. Their focus on exclusivity and depth helped us lead, not follow, trends with Tomorrowland."],
//   ["Olivia Bennett", "CEO of NovaTech Solutions", "Kotler’s team blends originality and discipline, delivering a voice that inspires and informs. Their purposeful, polished writing helped our brand break through with the Tomorrowland campaign."]
// ];

// export default function Testimonials() {
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setActive((x) => (x + 1) % testimonials.length), 5000);
//     return () => clearInterval(id);
//   }, []);

//   const [name, role, quote] = testimonials[active];

//   return (
//     <section className="section-pad testimonials-section">
//       <Box className="container">
//         <Reveal><Typography className="eyebrow">Clients words</Typography></Reveal>
//         <Reveal delay={0.05}><Typography className="display-md">Statements from clients that reflect their satisfaction with the services incredibly valuable.</Typography></Reveal>

//         <Box className="testimonial-top">
//           <Box>
//             <Typography className="rating">5 <Star fontSize="small" /></Typography>
//             <Typography className="rating-label">star rating on Google</Typography>
//           </Box>
//           <Box className="testimonial-controls">
//             <IconButton onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}><ArrowBack /></IconButton>
//             <IconButton onClick={() => setActive((active + 1) % testimonials.length)}><ArrowForward /></IconButton>
//           </Box>
//         </Box>

//         <AnimatePresence mode="wait">
//           <motion.div key={active} className="testimonial" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -25 }} transition={{ duration: 0.5 }}>
//             <Typography className="testimonial-quote">“{quote}”</Typography>
//             <Box className="testimonial-author">
//               <Box className="avatar-placeholder">{name[0]}</Box>
//               <Box><Typography>{name}</Typography><Typography>{role}</Typography></Box>
//             </Box>
//           </motion.div>
//         </AnimatePresence>
//       </Box>
//     </section>
//   );
// }










import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward, Star } from "@mui/icons-material";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Reveal from "../components/Reveal";

const testimonials = [
  {
    name: "Alex Carter",
    role: "Student Developer",
    initials: "AC",
    quote:
      "ProxBytes gave me a chance to demonstrate my coding skills through practical challenges. It helped me focus on building solutions instead of just collecting certificates.",
    rating: 4.9,
    accent: "#d9c0ff",
  },
  {
    name: "Michael Thomas",
    role: "Contest Participant",
    initials: "MT",
    quote:
      "The contest experience pushed me to think beyond tutorials. Building solutions, submitting my work, and getting evaluated made learning feel much more practical.",
    rating: 5.0,
    accent: "#d9c0ff",
  },
  {
    name: "Paul Jackson",
    role: "Student Developer",
    initials: "PJ",
    quote:
      "I like the opportunity to solve real problems and showcase my work through GitHub. It gives me a practical way to demonstrate what I can actually build.",
    rating: 4.8,
    accent: "#d9c0ff",
  },
  {
    name: "Olivia Bennett",
    role: "Contest Participant",
    initials: "OB",
    quote:
      "ProxBytes connects learning with competition and recognition. It makes working on technical skills more purposeful and gives students something tangible to work toward.",
    rating: 5.0,
    accent: "#d9c0ff",
  },
];

const ease = [0.22, 1, 0.36, 1];

/* Count-up animation */



function RollingNumber({
  value,
  decimals = 0,
  suffix = "",
  prefix = "",
  duration = 3.5,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const formattedValue =
    decimals > 0
      ? Number(value).toFixed(decimals)
      : String(value);

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
                y: isInView
                  ? `${-target}em`
                  : fromTop
                    ? "0em"
                    : "-9em",
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




export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  const current = testimonials[active];

  const previousTestimonial = () => {
    setActive(
      (previous) =>
        (previous - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextTestimonial = () => {
    setActive(
      (previous) => (previous + 1) % testimonials.length
    );
  };

  useEffect(() => {
    if (paused || !isInView) return;

    const timer = setInterval(() => {
      setActive((previous) => (previous + 1) % testimonials.length);
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
        py: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          maxWidth: 1350,
          width: "100%",
          mx: "auto",
          px: { xs: 2.5, sm: 4, md: 6 },
        }}
      >
        {/* SECTION HEADING */}
        <Reveal>
          <Typography
            component="h2"
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "clamp(40px, 8vw, 58px)",
                md: "clamp(64px, 6vw, 78px)",
              },
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: "-.075em",
              color: "#080808",
            }}
          >
            Skills that speak.
            <br />
            <Box
              component="span"
              sx={{ color: "#a56af5" }}
            >
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
              mt: 2.5,
              mb: { xs: 6, md: 10 },
              fontSize: { xs: 14, md: 18 },
              lineHeight: 1.75,
              color: "#718090",
            }}
          >
            A platform where students build practical skills,
            take on challenges, and demonstrate what they can do.
          </Typography>
        </Reveal>

        {/* MAIN GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
            },
            gap: { xs: 2.5, md: 3 },
            alignItems: "stretch",
          }}
        >
          {/* LEFT COLUMN */}
          <Box
            sx={{
              display: "grid",
              gridTemplateRows: {
                xs: "auto auto",
                md: "minmax(255px, 0.95fr) minmax(230px, 1.05fr)",
              },
              gap: { xs: 2.5, md: 2.5 },
              minWidth: 0,
            }}
          >
            {/* MAIN STAT */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 35 }
              }
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease,
              }}
              style={{ height: "100%" }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  minHeight: { xs: 245, md: 255 },
                  bgcolor: "#e4efff",
                  border: "1px solid #d1ddec",
                  borderRadius: "7px",
                  p: { xs: 3.5, md: 5 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    bgcolor: "#ffffff",
                    px: 2.5,
                    py: 0.8,
                    borderRadius: "40px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: 13, fontWeight: 500 }}
                  >
                    Platform
                  </Typography>
                </Box>

                <Typography
                  component="div"
                  sx={{
                    fontSize: {
                      xs: 78,
                      sm: 90,
                      md: 100,
                    },
                    fontWeight: 500,
                    lineHeight: 0.95,
                    letterSpacing: "-.085em",
                  }}
                >
                  <RollingNumber value={79} suffix="%" />
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    fontSize: { xs: 14, md: 17 },
                    lineHeight: 1.6,
                    color: "#222222",
                  }}
                >
                  Illustrative platform growth metric
                </Typography>
              </Box>
            </motion.div>

            {/* TWO SMALL STATS */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: { xs: 1.5, md: 2.5 },
                minWidth: 0,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 35 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease,
                }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: "100%",
                    minHeight: { xs: 205, md: 245 },
                    bgcolor: "#f8f8f8",
                    border: "1px solid #e1e1e1",
                    borderRadius: "7px",
                    p: { xs: 2, sm: 3, md: 3.5 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 12,
                      bgcolor: "#ffffff",
                      px: 1.8,
                      py: 0.7,
                      borderRadius: "40px",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: 11, fontWeight: 500 }}
                    >
                      Challenges
                    </Typography>
                  </Box>

                  <Typography
                    component="div"
                    sx={{
                      fontSize: {
                        xs: 42,
                        sm: 55,
                        md: 66,
                      },
                      fontWeight: 500,
                      lineHeight: 1,
                      letterSpacing: "-.075em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <RollingNumber value={8} suffix="+" />
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.5,
                      fontSize: { xs: 11, sm: 13, md: 15 },
                      color: "#222222",
                      lineHeight: 1.5,
                    }}
                  >
                    Sample challenge count
                  </Typography>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 35 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.45,
                  ease,
                }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: "100%",
                    minHeight: { xs: 205, md: 245 },
                    bgcolor: "#f8f8f8",
                    border: "1px solid #e1e1e1",
                    borderRadius: "7px",
                    p: { xs: 2, sm: 3, md: 3.5 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 12,
                      bgcolor: "#ffffff",
                      px: 1.8,
                      py: 0.7,
                      borderRadius: "40px",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: 11, fontWeight: 500 }}
                    >
                      Rating
                    </Typography>
                  </Box>

                  <Typography
                    component="div"
                    sx={{
                      fontSize: {
                        xs: 39,
                        sm: 52,
                        md: 64,
                      },
                      fontWeight: 500,
                      lineHeight: 1,
                      letterSpacing: "-.075em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <RollingNumber value={5} decimals={2} />
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.5,
                      fontSize: { xs: 11, sm: 13, md: 15 },
                      color: "#222222",
                      lineHeight: 1.5,
                    }}
                  >
                    Sample rating
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Box>

          {/* RIGHT: TESTIMONIAL PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 45 }
            }
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease,
            }}
            style={{ minWidth: 0, display: "flex" }}
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
                minHeight: { xs: 470, md: "100%" },
                bgcolor: "#d9c0ff",
                border: "1px solid #cbb0f6",
                borderRadius: "7px",
                p: { xs: 3, sm: 4, md: 5.5 },
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* PANEL LABEL */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: 18, md: 30 },
                  right: { xs: 18, md: 30 },
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
                  mt: { xs: 4, md: 2 },
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
                  mt: { xs: 4, md: 5 },
                  flex: 1,
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
                          md: 22,
                        },
                        lineHeight: 1.65,
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
                  mt: { xs: 4, md: 5 },
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`author-${active}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 48, md: 62 },
                        height: { xs: 48, md: 62 },
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
                  mt: { xs: 4, md: 6 },
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
                    "&:hover": {
                      bgcolor: "#f6efff",
                      color: "#8e50e8",
                    },
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
                    "&:hover": {
                      bgcolor: "#f6efff",
                      color: "#8e50e8",
                    },
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