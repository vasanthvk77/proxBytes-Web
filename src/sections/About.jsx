
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
import SectionTitle from "../components/SectionTitle";

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

function Eyebrow({ children }) {
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
        {children}
      </Typography>
    </Box>
  );
}

const audiences = [
  {
    number: "",
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
    number: "",
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
    image: "/assests/Values-1.png",
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
          xs: "72px",
          sm: "88px",
          md: "112px",
        },
      }}
    >
      {/* Subtle background details */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          zIndex: -100,
          top: { xs: "-120px", md: "-220px" },
          right: { xs: "-180px", md: "-340px" },
          width: { xs: 280, md: 500 },
          height: { xs: 280, md: 500 },
          borderRadius: "50%",
          border: "1px solid rgba(112, 52, 196, .45)",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 35,
            borderRadius: "50%",
            border: "1px solid rgba(149, 86, 212, .4)",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 75,
            borderRadius: "50%",
            border: "1px solid rgba(197, 141, 241, .38)",
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

        <Box sx={{ mb: { xs: 10, md: 14 } }}>
          <SectionTitle
            eyebrow="About ProxBytes"
            prominent
            layout="split"
            titleSx={{
              fontSize: {
                xs: "clamp(42px, 8vw, 58px)",
                md: "clamp(64px, 5.4vw, 80px)",
              },
              lineHeight: 0.99,
            }}
            sx={{
              gridTemplateColumns: {
                xs: "1fr",
                md: "minmax(0, 1.08fr) minmax(340px, .92fr)",
              },
              alignItems: { xs: "start", md: "center" },
              gap: { xs: 4, md: 8 },
            }}
            title={
              <>
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
              </>
            }
            description={
              <>
                ProxBytes exists to help close the gap
                between what students are capable of and
                what the world gets to see.
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    mt: 2,
                    color: "#17131d",
                    fontWeight: 600,
                  }}
                >
                  Because talent should have more than one way to be recognised.
                </Box>
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                    mt: 3,
                    color: "#8b58d9",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                  }}
                >
                 
               
                </Box>
              </>
            }
          />
        </Box>

        {/* SECTION 02 — THE PROBLEM */}

        <Box
          sx={{
            borderTop: "1px solid #ded9e4",
            pt: { xs: 6, md: 9 },
            mb: { xs: 13, md: 20 },
          }}
        >
          <SectionTitle
            eyebrow="The gap we see"
            layout="split"
            sx={{ alignItems: "start" }}
            title={
              <>
                A résumé tells
                <br />
                <Box
                  component="span"
                  sx={{ color: "#a56af5" }}
                >
                  part of the story.
                </Box>
              </>
            }
            description={
              <>
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
              </>
            }
          />

   
          
        </Box>

        {/* SECTION 03 — WHO WE SERVE */}

        <Box sx={{ mb: { xs: 13, md: 20 } }}>
          <Box sx={{ mb: { xs: 6, md: 9 } }}>
            <SectionTitle
              eyebrow="One platform, two perspectives"
              layout="split"
              title={
                <>
                Different needs.
                <br />
                <Box
                  component="span"
                  sx={{ color: "#a56af5" }}
                >
                  Shared purpose.
                </Box>
                </>
              }
              description={
                <>
                Better opportunities for students and
                better visibility for companies begin
                with the same thing: a clearer picture
                of practical capability.
                </>
              }
            />
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

<Box
  sx={{
    mb: { xs: 5, md: 5 },
    borderTop: "1px solid #ded9e4",
    pt: { xs: 6, md: 9 },
  }}
>
  <SectionTitle
    eyebrow="What guides us"
    title={
      <>
        The thinking
        <br />
        <Box component="span" sx={{ color: "#a56af5" }}>
          behind the platform.
        </Box>
      </>
    }
    sx={{ mb: { xs: 6, md: 9 } }}
  />

  {/* Accordion */}
<Box
  sx={{
    borderTop: "1px solid #ded9e4",
    width: "100%",
  }}
>
  {principles.map((item, index) => {
    const isOpen = activePrinciple === index;

    const principlePoints = {
      "Evidence over assumptions": [
        "Practical work matters",
        "Show what you can build",
        "Make capability easier to recognise",
      ],
      "Opportunity with purpose": [
        "Turn ambition into action",
        "Learn through real challenges",
        "Create meaningful outcomes",
      ],
      "A stronger connection": [
        "Connect students with industry",
        "Highlight demonstrated skills",
        "Build pathways to opportunity",
      ],
    };

    return (
      <Box
        key={item.number}
        sx={{
          borderBottom: "1px solid #ded9e4",
        }}
      >
        {/* Accordion Header */}
        <Box
          component="button"
          type="button"
          aria-expanded={isOpen}
          onMouseEnter={() => setActivePrinciple(index)}
          onFocus={() => setActivePrinciple(index)}
          onClick={() =>
            setActivePrinciple(isOpen ? -1 : index)
          }
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: {
              xs: "36px minmax(0, 1fr) 34px",
              sm: "48px minmax(0, 1fr) 36px",
              md: "56px minmax(0, 1fr) 40px",
            },
            alignItems: "center",
            columnGap: { xs: 1.5, md: 2.5 },
            py: { xs: 2.75, sm: 3, md: 3.5 },
            px: 0,
            border: 0,
            bgcolor: "transparent",
            color: "#17131d",
            textAlign: "left",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "background-color 0.2s ease",

            "&:hover .principle-accordion-title": {
              color: item.accent,
            },

            "&:hover .principle-toggle": {
              borderColor: item.accent,
              bgcolor: "#f3ebfc",
            },

            "&:focus-visible": {
              outline: `2px solid ${item.accent}`,
              outlineOffset: 3,
              borderRadius: "4px",
            },
          }}
        >
          {/* Number */}
          <Typography
            component="span"
            sx={{
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: ".08em",
              color: item.accent,
              lineHeight: 1.4,
            }}
          >
            {item.number}
          </Typography>

          {/* Title */}
          <Typography
            component="span"
            className="principle-accordion-title"
            sx={{
              fontSize: {
                xs: 18,
                sm: 22,
                md: 26,
                lg: 28,
              },
              lineHeight: 1.3,
              letterSpacing: "-.035em",
              fontWeight: 500,
              color: "#17131d",
              transition: "color 0.25s ease",
              overflowWrap: "break-word",
            }}
          >
            {item.title}
          </Typography>

          {/* Expand / Collapse Icon */}
          <Box
            component="span"
            className="principle-toggle"
            aria-hidden="true"
            sx={{
              width: { xs: 32, md: 36 },
              height: { xs: 32, md: 36 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifySelf: "end",
              border: "1px solid",
              borderColor: isOpen
                ? `${item.accent}55`
                : "#ded9e4",
              borderRadius: "50%",
              bgcolor: isOpen ? "#f3ebfc" : "transparent",
              color: isOpen ? item.accent : "#17131d",
              flexShrink: 0,
              transition:
                "background-color .25s ease, color .25s ease, border-color .25s ease",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />

              <motion.path
                d="M12 5v14"
                animate={{
                  scaleY: isOpen ? 0 : 1,
                  opacity: isOpen ? 0 : 1,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                style={{
                  transformOrigin: "center",
                }}
              />
            </svg>
          </Box>
        </Box>

        {/* Expandable Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key={`content-${item.number}`}
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                height: {
                  duration: 0.45,
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
                    xs: "minmax(0, 1fr)",
                    md: "minmax(0, 0.92fr) minmax(0, 1.08fr)",
                  },
                  gap: {
                    xs: 3,
                    sm: 3.5,
                    md: 5,
                    lg: 6,
                  },
                  pb: {
                    xs: 3.5,
                    md: 4.5,
                  },
                  alignItems: "center",
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    borderRadius: {
                      xs: "6px",
                      md: "8px",
                    },
                    bgcolor: "#f5f0fa",

                    // Reduced image height on desktop.
                    aspectRatio: {
                      xs: "16 / 10",
                      md: "16 / 10",
                    },

                    maxHeight: {
                      md: 300,
                      lg: 330,
                    },

                    isolation: "isolate",
                  }}
                >
                  <motion.img
                    key={`image-${item.number}`}
                    src={item.image}
                    alt={item.title}
                    initial={{
                      clipPath: "inset(50% 0 50% 0)",
                      scale: 1.035,
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
                        duration: 0.8,
                        ease: [0.76, 0, 0.24, 1],
                      },
                      scale: {
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      opacity: {
                        duration: 0.35,
                      },
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />

                  {/* Image Counter */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: { xs: 12, md: 14 },
                      bottom: { xs: 12, md: 14 },
                      px: 1.5,
                      py: 0.75,
                      borderRadius: "30px",
                      bgcolor: "rgba(255,255,255,.94)",
                      color: "#17131d",
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: ".08em",
                      lineHeight: 1.4,
                      boxShadow: "0 2px 10px rgba(23,19,29,.06)",
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
                    minWidth: 0,
                    py: { md: 0.5 },
                  }}
                >
                  {/* Eyebrow */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.25,
                      mb: { xs: 1.75, md: 2 },
                    }}
                  >
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        bgcolor: `${item.accent}18`,
                        color: item.accent,
                        flexShrink: 0,

                        "& svg": {
                          fontSize: 18,
                        },
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography
                      component="span"
                      sx={{
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: ".12em",
                        color: item.accent,
                        textTransform: "uppercase",
                        lineHeight: 1.5,
                      }}
                    >
                      Our principle
                    </Typography>
                  </Box>

                  {/* Heading */}
                  <Typography
                    component="h3"
                    sx={{
                      m: 0,
                      fontSize: {
                        xs: 23,
                        sm: 26,
                        md: 29,
                        lg: 32,
                      },
                      lineHeight: 1.2,
                      letterSpacing: "-.045em",
                      fontWeight: 500,
                      color: "#17131d",
                      maxWidth: 480,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description Text */}
                  <Typography
                    component="p"
                    sx={{
                      mt: 1.5,
                      mb: 0,
                      maxWidth: 500,
                      fontSize: {
                        xs: 13.5,
                        md: 14,
                      },
                      lineHeight: 1.8,
                      letterSpacing: ".002em",
                      color: "#77717c",
                    }}
                  >
                    {item.description}
                  </Typography>

                  {/* Principle Points */}
                  {principlePoints[item.title] && (
                    <Box
                      component="ul"
                      sx={{
                        mt: 2.5,
                        mb: 0,
                        p: 0,
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.25,
                        listStyle: "none",
                      }}
                    >
                      {principlePoints[item.title].map(
                        (point) => (
                          <Box
                            component="li"
                            key={point}
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 1.25,
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                width: 6,
                                height: 6,
                                mt: "7px",
                                borderRadius: "50%",
                                bgcolor: item.accent,
                                flexShrink: 0,
                              }}
                            />

                            <Typography
                              component="span"
                              sx={{
                                fontSize: 12,
                                lineHeight: 1.7,
                                color: "#514b58",
                              }}
                            >
                              {point}
                            </Typography>
                          </Box>
                        )
                      )}
                    </Box>
                  )}
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
