
import React, { useRef,useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, useInView,AnimatePresence } from "framer-motion";
import {
  ArrowOutward,
  GroupsRounded,
  BusinessCenterRounded,
  FactCheckRounded,
  LightbulbRounded,
  NorthEastRounded,

} from "@mui/icons-material";

const ease = [0.16, 1, 0.3, 1];


const revealVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -45 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 45 },
    visible: { opacity: 1, x: 0 },
  },
  blur: {
    hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
  },
  mask: {
    hidden: {
      opacity: 0,
      y: 35,
      clipPath: "inset(0 0 100% 0)",
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0% 0)",
    },
  },
};

function Reveal({
  children,
  delay = 0,
  sx = {},
  variant = "fadeUp",
  duration = 0.8,
}) {
  const ref = useRef(null);

  const visible = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -6% 0px",
  });

  const animation = revealVariants[variant] || revealVariants.fadeUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={animation}
      transition={{
        duration,
        delay,
        ease,
      }}
      style={{
        width: "100%",
        willChange: visible ? "auto" : "transform, opacity",
      }}
    >
      <Box sx={sx}>{children}</Box>
    </motion.div>
  );



  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={
        visible
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 26 }
      }
      transition={{ duration: 0.75, delay, ease }}
      style={{ width: "100%" }}
    >
      <Box sx={sx}>{children}</Box>
    </motion.div>
  );
}

function Eyebrow({ children, number }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.25,
        mb: { xs: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          bgcolor: "#b58aff",
          flexShrink: 0,
        }}
      />

      <Typography
        sx={{
          fontFamily: "Manrope, sans-serif",
          color: "#77717f",
          fontSize: { xs: 11, md: 12 },
          fontWeight: 700,
          letterSpacing: ".12em",
          textTransform: "uppercase",
        }}
      >
        {number && (
          <Box
            component="span"
            sx={{ color: "#9b52f5", mr: 1.5 }}
          >
            {number}
          </Box>
        )}
        {children}
      </Typography>
    </Box>
  );
}

const audiences = [
  {
    number: "01",
    icon: <GroupsRounded />,
    label: "FOR STUDENTS",
    title: "Potential deserves a platform.",
    description:
      "Your college, degree, or background should not be the only things that shape how others see your ability. ProxBytes gives students a place to establish a record of their technical work and progress.",
    accent: "#a56af5",
    points: [
      "A clearer record of your work",
      "Opportunities to demonstrate your abilities",
      "Progress you can look back on",
    ],
  },
  {
    number: "02",
    icon: <BusinessCenterRounded />,
    label: "FOR INDUSTRY",
    title: "Talent deserves better signals.",
    description:
      "Academic credentials tell only part of a candidate's story. ProxBytes creates opportunities for companies to observe how students approach technical work and what their results demonstrate.",
    accent: "#7d83ff",
    points: [
      "More context beyond a résumé",
      "Evidence from practical work",
      "A clearer view of emerging talent",
    ],
  },
];

const principles = [
  {
    number: "01",
    icon: <FactCheckRounded />,
    title: "Evidence over assumptions",
    description:
      "Give actual work a meaningful place in the conversation about capability, rather than relying on credentials alone.",
    accent: "#a56af5",
    image: "/images/evidence-over-assumptions.jpg",
  },
  {
    number: "02",
    icon: <LightbulbRounded />,
    title: "Opportunity with purpose",
    description:
      "Connect technical ambition with opportunities that give students a reason to apply themselves and grow.",
    accent: "#7d83ff",
    image: "/images/evidence-over-assumptions.jpg",
  },
  {
    number: "03",
    icon: <GroupsRounded />,
    title: "A stronger connection",
    description:
      "Bring students and industry closer together through a shared focus on practical ability and meaningful outcomes.",
    accent: "#e58bc8",
    image: "/images/evidence-over-assumptions.jpg",
  },
];

export default function About() {
  const [activePrinciple, setActivePrinciple] = useState(0);
  return (
    <Box
      component="section"
      id="about"
      sx={{
        position: "relative",
        isolation: "isolate",
        overflow: "hidden",
        bgcolor: "#ffffff",
        color: "#111111",
        fontFamily: "Manrope, sans-serif",
        py: {
          xs: "76px",
          sm: "100px",
          md: "130px",
        },
      }}
    >
      {/* Subtle background details */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          zIndex: -1,
          top: "-100px",
          right: "-180px",
          width: { xs: 280, md: 520 },
          height: { xs: 280, md: 520 },
          borderRadius: "50%",
          border: "1px solid #f0e8fb",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 35,
            borderRadius: "50%",
            border: "1px solid #f6f0fc",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 75,
            borderRadius: "50%",
            border: "1px solid #faf6fd",
          },
        }}
      />

      <Box
        aria-hidden
        sx={{
          position: "absolute",
          zIndex: -1,
          top: "42%",
          left: "-260px",
          width: 440,
          height: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(181,138,255,.08), transparent 68%)",
        }}
      />

      <Box
        sx={{
          width: "100%",
          maxWidth: 1500,
          mx: "auto",
          px: {
            xs: "22px",
            sm: "36px",
            md: "64px",
            lg: "88px",
          },
        }}
      >
        {/* SECTION 01 — THE MISSION */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 1.3fr) minmax(240px, .7fr)",
            },
            gap: { xs: 5, md: 8 },
            alignItems: "end",
            mb: { xs: 12, md: 18 },
          }}
        >
          <Box>
            <Reveal>
              <Eyebrow number="01">
                About ProxBytes
              </Eyebrow>
            </Reveal>

            <Reveal delay={0.08} variant="fadeUp" duration={1}>
              <Typography
                component="h1"
                sx={{
                  m: 0,
                  maxWidth: 1000,
                  fontSize: {
                    xs: "clamp(46px, 11vw, 66px)",
                    sm: "76px",
                    md: "clamp(76px, 7.4vw, 112px)",
                  },
                  fontWeight: 500,
                  letterSpacing: "-.075em",
                  lineHeight: ".96",
                }}
              >
                Potential is
                <br />
                everywhere.
                <br />
                <Box
                  component="span"
                  sx={{ color: "#a56af5" }}
                >
                  Opportunity
                  <br />
                  should be too.
                </Box>
              </Typography>
            </Reveal>
          </Box>

          <Reveal delay={0.16} variant="blur" duration={0.9}>
            <Box sx={{ pb: { md: 1.5 }, maxWidth: 420 }}>
              <Typography
                sx={{
                  fontSize: { xs: 16, md: 19 },
                  lineHeight: 1.8,
                  color: "#6f6b74",
                  letterSpacing: "-.025em",
                }}
              >
                ProxBytes exists to help close the gap
                between what students are capable of and
                what the world gets to see.
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  fontSize: { xs: 16, md: 19 },
                  lineHeight: 1.8,
                  color: "#17131d",
                  fontWeight: 600,
                  letterSpacing: "-.025em",
                }}
              >
                Because talent should have more than one
                way to be recognised.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  mt: 3,
                  color: "#8b58d9",
                }}
              >
                <Box
                  sx={{
                    width: 34,
                    height: 1,
                    bgcolor: "#b58aff",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                  }}
                >
                  Our reason for existing
                </Typography>
              </Box>
            </Box>
          </Reveal>
        </Box>

        {/* SECTION 02 — THE PROBLEM */}

        <Box
          sx={{
            borderTop: "1px solid #ded9e4",
            pt: { xs: 6, md: 9 },
            mb: { xs: 13, md: 20 },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "minmax(0, .8fr) minmax(0, 1.2fr)",
              },
              gap: { xs: 5, md: 10 },
              alignItems: "start",
            }}
          >
            <Reveal delay={0.15} variant="blur" duration={0.9}>
              <Eyebrow number="02">
                The gap we see
              </Eyebrow>

              <Typography
                component="h2"
                sx={{
                  m: 0,
                  fontSize: {
                    xs: "clamp(38px, 9vw, 58px)",
                    md: "clamp(60px, 5.6vw, 82px)",
                  },
                  lineHeight: 1,
                  letterSpacing: "-.07em",
                  fontWeight: 500,
                }}
              >
                A résumé tells
                <br />
                <Box
                  component="span"
                  sx={{ color: "#a56af5" }}
                >
                  part of the story.
                </Box>
              </Typography>
            </Reveal>

            <Reveal delay={0.1}>
              <Typography
                sx={{
                  maxWidth: 700,
                  fontSize: { xs: 16, md: 20 },
                  lineHeight: 1.85,
                  color: "#706b75",
                }}
              >
                Students spend years developing knowledge,
                experimenting with ideas, and discovering
                what they can do. Yet communicating that
                ability to someone outside the classroom
                is not always straightforward.
                <br />
                <br />
                Meanwhile, companies need ways to look
                beyond qualifications and understand the
                people behind an application.
                <br />
                <br />
                <Box
                  component="span"
                  sx={{
                    color: "#17131d",
                    fontWeight: 600,
                  }}
                >
                  ProxBytes is built around that gap:
                  making practical ability easier to
                  demonstrate and easier to discover.
                </Box>
              </Typography>
            </Reveal>
          </Box>

          {/* Editorial statement */}
          <Reveal delay={0.12} variant="scale" duration={0.9}>
            <Box
              sx={{
                mt: { xs: 7, md: 10 },
                p: {
                  xs: "28px 22px",
                  sm: "36px",
                  md: "48px 52px",
                },
                bgcolor: "#f7f3fc",
                borderLeft: "3px solid #b58aff",
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr auto",
                },
                alignItems: "end",
                gap: 4,
              }}
            >
              <Typography
                sx={{
                  maxWidth: 850,
                  fontSize: {
                    xs: 25,
                    sm: 32,
                    md: 42,
                  },
                  lineHeight: 1.25,
                  letterSpacing: "-.055em",
                  fontWeight: 500,
                  color: "#201b27",
                }}
              >
                Capability should be something you can
                demonstrate, not just something you claim.
              </Typography>

              <NorthEastRounded
                sx={{
                  fontSize: 32,
                  color: "#9b52f5",
                }}
              />
            </Box>
          </Reveal>
        </Box>

        {/* SECTION 03 — WHO WE SERVE */}

        <Box sx={{ mb: { xs: 13, md: 20 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr .7fr",
              },
              gap: { xs: 4, md: 8 },
              alignItems: "end",
              mb: { xs: 6, md: 9 },
            }}
          >
            <Reveal>
              <Eyebrow number="03">
                One platform, two perspectives
              </Eyebrow>

              <Typography
                component="h2"
                sx={{
                  m: 0,
                  fontSize: {
                    xs: "clamp(40px, 9vw, 60px)",
                    md: "clamp(64px, 6vw, 90px)",
                  },
                  lineHeight: 1,
                  letterSpacing: "-.075em",
                  fontWeight: 500,
                }}
              >
                Different needs.
                <br />
                <Box
                  component="span"
                  sx={{ color: "#a56af5" }}
                >
                  Shared purpose.
                </Box>
              </Typography>
            </Reveal>

            <Reveal delay={0.1}>
              <Typography
                sx={{
                  maxWidth: 450,
                  color: "#706b75",
                  fontSize: { xs: 15, md: 18 },
                  lineHeight: 1.8,
                }}
              >
                Better opportunities for students and
                better visibility for companies begin
                with the same thing: a clearer picture
                of practical capability.
              </Typography>
            </Reveal>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: { xs: 8, md: 4 },
            }}
          >
            {audiences.map((item, index) => (
              <Reveal
                key={item.number}
                delay={index * 0.12}
                variant={index === 0 ? "slideLeft" : "slideRight"}
                duration={0.9}
              >
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderTop: "1px solid #ded9e4",
                    pt: { xs: 4, md: 5 },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 2,
                      mb: 5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        bgcolor: `${item.accent}12`,
                        color: item.accent,
                        "& svg": { fontSize: 25 },
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography
                      sx={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: ".1em",
                        color: item.accent,
                      }}
                    >
                      {item.number}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: ".12em",
                      color: item.accent,
                      mb: 2,
                    }}
                  >
                    {item.label}
                  </Typography>

                  <Typography
                    component="h3"
                    sx={{
                      m: 0,
                      fontSize: {
                        xs: 32,
                        md: 40,
                      },
                      lineHeight: 1.12,
                      letterSpacing: "-.06em",
                      fontWeight: 500,
                      maxWidth: 450,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 2.5,
                      maxWidth: 510,
                      fontSize: 14,
                      lineHeight: 1.85,
                      color: "#77717c",
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Box
                    sx={{
                      mt: 4,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    {item.points.map((point) => (
                      <Box
                        key={point}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1.5,
                        }}
                      >
                        <Box
                          sx={{
                            mt: "7px",
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            bgcolor: item.accent,
                            flexShrink: 0,
                          }}
                        />

                        <Typography
                          sx={{
                            fontSize: 12,
                            lineHeight: 1.7,
                            color: "#514b58",
                          }}
                        >
                          {point}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box>

        {/* SECTION 04 — OUR PRINCIPLES */}

        {/* <Box
          sx={{
            mb: { xs: 13, md: 20 },
            borderTop: "1px solid #ded9e4",
            pt: { xs: 6, md: 9 },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "minmax(0, .85fr) minmax(0, 1.15fr)",
              },
              gap: { xs: 5, md: 10 },
              mb: { xs: 5, md: 8 },
            }}
          >
            <Reveal>
              <Eyebrow number="04">
                What guides us
              </Eyebrow>

              <Typography
                component="h2"
                sx={{
                  m: 0,
                  fontSize: {
                    xs: "clamp(40px, 9vw, 58px)",
                    md: "clamp(62px, 5.7vw, 84px)",
                  },
                  lineHeight: 1,
                  letterSpacing: "-.075em",
                  fontWeight: 500,
                }}
              >
                The thinking
                <br />
                <Box
                  component="span"
                  sx={{ color: "#a56af5" }}
                >
                  behind the platform.
                </Box>
              </Typography>
            </Reveal>

            <Reveal delay={0.1}>
              <Typography
                sx={{
                  alignSelf: "end",
                  maxWidth: 590,
                  color: "#706b75",
                  fontSize: { xs: 15, md: 18 },
                  lineHeight: 1.8,
                }}
              >
                The experience matters, but so does the
                thinking behind it. These principles
                shape the kind of opportunities ProxBytes
                aims to create.
              </Typography>
            </Reveal>
          </Box>

          <Box
            sx={{
              borderTop: "1px solid #e7e2eb",
            }}
          >
            {principles.map((item, index) => (
              <Reveal
                key={item.number}
                delay={index * 0.07}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "42px minmax(0, 1fr)",
                      md: "70px minmax(0, .85fr) minmax(0, 1.15fr)",
                    },
                    gap: { xs: 2, md: 4 },
                    alignItems: "start",
                    py: { xs: 4, md: 5 },
                    borderBottom: "1px solid #e7e2eb",
                    transition: "background .3s",
                    "&:hover .principle-title": {
                      color: item.accent,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      pt: 0.5,
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: ".08em",
                      color: item.accent,
                    }}
                  >
                    {item.number}
                  </Typography>

                  <Typography
                    className="principle-title"
                    component="h3"
                    sx={{
                      m: 0,
                      fontSize: {
                        xs: 22,
                        md: 28,
                      },
                      lineHeight: 1.25,
                      letterSpacing: "-.045em",
                      fontWeight: 500,
                      transition: "color .25s",
                      gridColumn: {
                        xs: "2",
                        md: "2",
                      },
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      gridColumn: {
                        xs: "2",
                        md: "3",
                      },
                      fontSize: 13,
                      lineHeight: 1.85,
                      color: "#77717c",
                      maxWidth: 490,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box> */}


        
{/* SECTION 04 — OUR PRINCIPLES ACCORDION */}

<Box
  sx={{
    mb: { xs: 13, md: 20 },
    borderTop: "1px solid #ded9e4",
    pt: { xs: 6, md: 9 },
  }}
>
  {/* Section heading */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        md: "minmax(0, .85fr) minmax(0, 1.15fr)",
      },
      gap: { xs: 5, md: 10 },
      alignItems: "end",
      mb: { xs: 6, md: 9 },
    }}
  >
    <Reveal variant="fadeUp" duration={0.8}>
      <Eyebrow number="04">What guides us</Eyebrow>

      <Typography
        component="h2"
        sx={{
          m: 0,
          fontSize: {
            xs: "clamp(40px, 9vw, 58px)",
            md: "clamp(62px, 5.7vw, 84px)",
          },
          lineHeight: 1,
          letterSpacing: "-.075em",
          fontWeight: 500,
        }}
      >
        The thinking
        <br />
        <Box component="span" sx={{ color: "#a56af5" }}>
          behind the platform.
        </Box>
      </Typography>
    </Reveal>

    
  </Box>

  {/* Accordion */}
  <Box sx={{ borderTop: "1px solid #ded9e4" }}>
    {principles.map((item, index) => {
      const isOpen = activePrinciple === index;

      return (
        <Box
          key={item.number}
          sx={{
            borderBottom: "1px solid #ded9e4",
          }}
        >
          {/* Accordion header */}
        <Box
  component="button"
  type="button"
  aria-expanded={isOpen}
  onMouseEnter  ={() => setActivePrinciple(index)}
  onFocus={() => setActivePrinciple(index)}
  onClick={() =>
    setActivePrinciple(isOpen ? -1 : index)
  }
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: {
                xs: "42px minmax(0, 1fr) 32px",
                md: "70px minmax(0, 1fr) 42px",
              },
              alignItems: "center",
              gap: { xs: 1.5, md: 4 },
              py: { xs: 4, md: 5 },
              px: 0,
              border: 0,
              bgcolor: "transparent",
              color: "#17131d",
              textAlign: "left",
              cursor: "pointer",
              fontFamily: "inherit",
              "&:hover .principle-accordion-title": {
                color: item.accent,
              },
              "&:focus-visible": {
                outline: `2px solid ${item.accent}`,
                outlineOffset: 4,
              },
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: ".08em",
                color: item.accent,
              }}
            >
              {item.number}
            </Typography>

            <Typography
              component="span"
              className="principle-accordion-title"
              sx={{
                fontSize: {
                  xs: 21,
                  sm: 25,
                  md: 30,
                },
                lineHeight: 1.25,
                letterSpacing: "-.045em",
                fontWeight: 500,
                transition: "color .3s ease",
              }}
            >
              {item.title}
            </Typography>

            {/* Plus / minus control */}
            
<Box
  component="span"
  aria-hidden="true"
  sx={{
    width: 36,
    height: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justifySelf: "end",
    borderRadius: "50%",
    bgcolor: isOpen ? "#f3ebfc" : "transparent",
    color: isOpen ? item.accent : "#17131d",
    transition: "background-color .2s ease, color .2s ease",
  }}
>
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden="true"
  >
    {/* Horizontal line remains visible */}
    <path d="M5 12h14" />

    {/* Vertical line disappears to form a minus */}
    <motion.path
      d="M12 5v14"
      animate={{
        scaleY: isOpen ? 0 : 1,
        opacity: isOpen ? 0 : 1,
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      style={{ transformOrigin: "center" }}
    />
  </svg>
</Box>

          </Box>

          {/* Expandable content */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key={`content-${item.number}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  opacity: {
                    duration: 0.25,
                  },
                }}
                style={{
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      md: "minmax(0, .9fr) minmax(0, 1.1fr)",
                    },
                    gap: { xs: 4, md: 7 },
                    pb: { xs: 5, md: 7 },
                    alignItems: "center",
                  }}
                >
                  {/* Image: closes toward its vertical center */}
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: { xs: "6px", md: "9px" },
                      bgcolor: "#f5f0fa",
                      aspectRatio: { xs: "16 / 10", md: "5 / 4" },
                    }}
                  >
                    <motion.img
                      key={`image-${item.number}`}
                      src={item.image}
                      alt={item.title}
                      initial={{
                        clipPath: "inset(50% 0 50% 0)",
                        scale: 1.04,
                        opacity: 0,
                      }}
                      animate={{
                        clipPath: "inset(0% 0 0% 0)",
                        scale: 1,
                        opacity: 1,
                      }}
                      exit={{
                        clipPath: "inset(50% 0 50% 0)",
                        scale: 1.02,
                        opacity: 0,
                      }}
                      transition={{
                        clipPath: {
                          duration: 1,
                          ease: [0.76, 0, 0.24, 1],
                        },
                        scale: {
                          duration: 2,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: 2,
                        },
                      }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />

                    {/* Image index */}
                    <Box
                      sx={{
                        position: "absolute",
                        left: 16,
                        bottom: 16,
                        px: 1.5,
                        py: 0.75,
                        borderRadius: "30px",
                        bgcolor: "rgba(255,255,255,.92)",
                        color: "#17131d",
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: ".08em",
                      }}
                    >
                      {item.number} / 03
                    </Box>
                  </Box>

                  {/* Description */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.25,
                        mb: 2.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          bgcolor: `${item.accent}18`,
                          color: item.accent,
                          "& svg": { fontSize: 19 },
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Typography
                        sx={{
                          fontSize: 10,
                          fontWeight: 800,
                          letterSpacing: ".12em",
                          color: item.accent,
                          textTransform: "uppercase",
                        }}
                      >
                        Our principle
                      </Typography>
                    </Box>

                    <Typography
                      component="h3"
                      sx={{
                        m: 0,
                        fontSize: {
                          xs: 25,
                          md: 34,
                        },
                        lineHeight: 1.2,
                        letterSpacing: "-.055em",
                        fontWeight: 500,
                        color: "#17131d",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 2,
                        maxWidth: 520,
                        fontSize: { xs: 14, md: 15 },
                        lineHeight: 1.85,
                        color: "#77717c",
                      }}
                    >
                      {item.description}
                    </Typography>

                    <Box
                      sx={{
                        mt: 3,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.75,
                      }}
                    >
                      {item.title === "Evidence over assumptions" &&
                        [
                          "Practical work matters",
                          "Show what you can build",
                          "Make capability easier to recognise",
                        ].map((point) => (
                          <Box
                            key={point}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                bgcolor: item.accent,
                                flexShrink: 0,
                              }}
                            />
                            <Typography
                              sx={{
                                fontSize: 12,
                                lineHeight: 1.6,
                                color: "#514b58",
                              }}
                            >
                              {point}
                            </Typography>
                          </Box>
                        ))}

                      {item.title === "Opportunity with purpose" &&
                        [
                          "Turn ambition into action",
                          "Learn through real challenges",
                          "Create meaningful outcomes",
                        ].map((point) => (
                          <Box
                            key={point}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                bgcolor: item.accent,
                                flexShrink: 0,
                              }}
                            />
                            <Typography
                              sx={{
                                fontSize: 12,
                                lineHeight: 1.6,
                                color: "#514b58",
                              }}
                            >
                              {point}
                            </Typography>
                          </Box>
                        ))}

                      {item.title === "A stronger connection" &&
                        [
                          "Connect students with industry",
                          "Highlight demonstrated skills",
                          "Build pathways to opportunity",
                        ].map((point) => (
                          <Box
                            key={point}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                bgcolor: item.accent,
                                flexShrink: 0,
                              }}
                            />
                            <Typography
                              sx={{
                                fontSize: 12,
                                lineHeight: 1.6,
                                color: "#514b58",
                              }}
                            >
                              {point}
                            </Typography>
                          </Box>
                        ))}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      );
    })}
  </Box>
</Box>


        {/* SECTION 05 — CLOSING STATEMENT */}

        
      </Box>
    </Box>
  );
}
