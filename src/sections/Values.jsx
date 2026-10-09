import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";

import learningImage from "../../assets/Values-1.png";
import buildingImage from "../../assets/Values-2.png";

/* ============================================================
   ANIMATION
============================================================ */

const ease = [0.16, 1, 0.3, 1];

/*
  IMPORTANT FIX:

  The previous implementation relied directly on
  whileInView on the transformed child.

  This version observes the wrapper itself using useInView.
  Therefore the text cannot remain permanently hidden.
*/

function MaskTextReveal({
  children,
  delay = 0,
  duration = 0.8,
  sx = {},
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
    margin: "0px 0px -10% 0px",
  });

  return (
    <Box
      ref={ref}
      sx={{
        overflow: "hidden",
        ...sx,
      }}
    >
      <motion.div
        initial={{
          y: "105%",
          opacity: 0,
        }}
        animate={{
          y: isInView ? "0%" : "105%",
          opacity: isInView ? 1 : 0,
        }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
}


/* ============================================================
   FADE REVEAL
============================================================ */

function FadeScaleReveal({
  children,
  delay = 0,
  duration = 0.7,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
        scale: 0.98,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}


/* ============================================================
   WORD REVEAL
============================================================ */

function StaggerWordReveal({
  text,
  delay = 0,
  highlightWord = "",
}) {
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.045,
            delayChildren: delay,
          },
        },
      }}
      style={{
        display: "inline",
      }}
    >
      {words.map((word, index) => {
        const cleanWord = word
          .toLowerCase()
          .replace(/[^a-z]/g, "");

        const isHighlight =
          cleanWord ===
          highlightWord.toLowerCase();

        return (
          <motion.span
            key={`${word}-${index}`}
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
                filter: "blur(5px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.55,
                  ease,
                },
              },
            }}
            style={{
              display: "inline-block",
              marginRight: "0.23em",
            }}
          >
            {isHighlight ? (
              <Box
                component="span"
                sx={{
                  color: "#111111",
                  fontWeight: 600,
                  position: "relative",

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: "2px",
                    height: "3px",
                    borderRadius: "3px",
                    background: "#c9a8ff",
                  },
                }}
              >
                {word}
              </Box>
            ) : (
              word
            )}
          </motion.span>
        );
      })}
    </motion.div>
  );
}


/* ============================================================
   DATA
============================================================ */

const steps = [
  {
    number: "01",
    tag: "CHALLENGE ARENA",
    title: "Enter the challenge.",
    description:
      "Pick from live industry problem briefs, open-source issue bounties, and timed hackathon tracks. Access production specifications provided directly by real tech companies.",
    metric:
      "Active industry problem tracks & live challenge briefs.",
  },

  {
    number: "02",
    tag: "SPRINT & BUILD",
    title: "Build the solution.",
    description:
      "Code production-grade architectures and ship working software to solve the brief. Run against automated test suites, linting gates, and benchmark runners.",
    metric:
      "Working prototypes, clean repositories & passing test suites.",
  },

  {
    number: "03",
    tag: "LEADERBOARD",
    title: "Compete & rank.",
    description:
      "Go head-to-head with top student developers nationwide. Your solutions are benchmarked on performance, code quality, speed, and real-world edge-case handling.",
    metric:
      "Live contest standings & automated performance scores.",
  },

  {
    number: "04",
    tag: "WIN & PROVE",
    title: "Win cash bounties.",
    description:
      "Top contenders claim direct cash rewards, earn cryptographic skill badges, and get discovered by sponsoring recruiters looking to hire verified winners.",
    metric:
      "Direct bounty rewards & recruiter fast-track discovery.",
  },
];


/* ============================================================
   IMAGE COMPONENT
============================================================ */

function EditorialImage({
  src,
  alt,
  number,
  label,
  height = {
    xs: "300px",
    sm: "400px",
    md: "500px",
  },
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.75,
        ease,
      }}
    >
      <Box
        sx={{
          position: "relative",

          width: "100%",

          height,

          overflow: "hidden",

          background:
            "linear-gradient(135deg,#eeeeee,#e3e3e3)",

          borderRadius: {
            xs: "10px",
            md: "14px",
          },

          "&:hover .editorial-image": {
            transform: "scale(1.035)",
          },

          "&:hover .image-overlay": {
            opacity: 1,
          },
        }}
      >
        {/* Loading background */}

        {!loaded && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,

              background:
                "linear-gradient(90deg,#eeeeee 25%,#e4e4e4 50%,#eeeeee 75%)",

              backgroundSize:
                "200% 100%",

              animation:
                "valuesShimmer 1.5s infinite linear",

              "@keyframes valuesShimmer": {
                "0%": {
                  backgroundPosition:
                    "200% 0",
                },

                "100%": {
                  backgroundPosition:
                    "-200% 0",
                },
              },
            }}
          />
        )}

        {/* Image */}

        <Box
          component="img"
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className="editorial-image"
          sx={{
            width: "100%",
            height: "100%",

            objectFit: "cover",

            objectPosition: "center",

            display: "block",

            opacity: loaded ? 1 : 0,

            filter: loaded
              ? "none"
              : "blur(8px)",

            transform:
              loaded
                ? "scale(1)"
                : "scale(1.04)",

            transition:
              "opacity .7s ease, filter .7s ease, transform .8s cubic-bezier(.76,0,.24,1)",
          }}
        />

        {/* Hover overlay */}

        <Box
          className="image-overlay"
          sx={{
            position: "absolute",
            inset: 0,

            background:
              "linear-gradient(to top,rgba(0,0,0,.45),transparent 45%)",

            opacity: 0,

            transition:
              "opacity .45s ease",

            pointerEvents: "none",
          }}
        />

        {/* Image label */}

        <Box
          sx={{
            position: "absolute",

            left: {
              xs: "16px",
              md: "24px",
            },

            bottom: {
              xs: "16px",
              md: "22px",
            },

            display: "flex",

            alignItems: "center",

            gap: "10px",

            px: {
              xs: "13px",
              md: "16px",
            },

            py: "8px",

            borderRadius: "999px",

            background:
              "rgba(15,15,15,.82)",

            backdropFilter:
              "blur(12px)",

            color: "#ffffff",

            zIndex: 2,
          }}
        >
          <Box
            sx={{
              width: "7px",
              height: "7px",

              borderRadius: "50%",

              background: "#c9a8ff",
            }}
          />

          <Typography
            sx={{
              fontFamily:
                "Manrope, sans-serif",

              fontSize: {
                xs: "10px",
                md: "11px",
              },

              fontWeight: 600,

              letterSpacing: ".08em",
            }}
          >
            {number} — {label}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}


/* ============================================================
   VISUAL PLACEHOLDER
   For Solve / Prove until you add images.
============================================================ */

function VisualPlaceholder({
  number,
  label,
  title,
  accent = "#c9a8ff",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.75,
        ease,
      }}
    >
      <Box
        sx={{
          position: "relative",

          height: {
            xs: "300px",
            md: "430px",
          },

          overflow: "hidden",

          borderRadius: {
            xs: "10px",
            md: "14px",
          },

          background:
            "linear-gradient(145deg,#f4f1f8,#ebe7f0)",

          border:
            "1px solid #e4dfee",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          "&:hover .placeholder-ring": {
            transform: "scale(1.1)",
          },
        }}
      >
        {/* Decorative ring */}

        <Box
          className="placeholder-ring"
          sx={{
            position: "absolute",

            width: {
              xs: "220px",
              md: "320px",
            },

            height: {
              xs: "220px",
              md: "320px",
            },

            borderRadius: "50%",

            border:
              `1px solid ${accent}55`,

            transition:
              "transform .8s cubic-bezier(.76,0,.24,1)",
          }}
        />

        <Box
          sx={{
            position: "absolute",

            width: {
              xs: "140px",
              md: "210px",
            },

            height: {
              xs: "140px",
              md: "210px",
            },

            borderRadius: "50%",

            background:
              `radial-gradient(circle,${accent}30,transparent 70%)`,
          }}
        />

        {/* Center text */}

        <Box
          sx={{
            position: "relative",

            zIndex: 1,

            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily:
                "Manrope, sans-serif",

              fontSize: "11px",

              fontWeight: 600,

              letterSpacing: ".1em",

              color: "#8d8397",
            }}
          >
            {number} — {label}
          </Typography>

          <Typography
            sx={{
              mt: "10px",

              fontFamily:
                "Manrope, sans-serif",

              fontSize: {
                xs: "24px",
                md: "32px",
              },

              fontWeight: 500,

              letterSpacing:
                "-.045em",

              color: "#222222",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              mt: "8px",

              fontFamily:
                "Manrope, sans-serif",

              fontSize: "13px",

              color: "#8b8b8b",
            }}
          >
            Image can be added here
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}


/* ============================================================
   STEP TEXT
============================================================ */

function StepText({ step, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease,
      }}
    >
      <Box
        sx={{
          height: "100%",

          borderTop:
            "1px solid #dddddd",

          pt: {
            xs: "22px",
            md: "28px",
          },
        }}
      >
        {/* Number + Tag */}

        <Box
          sx={{
            display: "flex",

            justifyContent:
              "space-between",

            alignItems: "center",

            mb: {
              xs: "28px",
              md: "42px",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily:
                "Manrope, sans-serif",

              fontSize: "13px",

              fontWeight: 600,

              color: "#999999",

              letterSpacing: ".04em",
            }}
          >
            {step.number}
          </Typography>

          <Typography
            sx={{
              fontFamily:
                "Manrope, sans-serif",

              fontSize: "10px",

              fontWeight: 600,

              letterSpacing: ".08em",

              color: "#9b52f5",

              background:
                "rgba(155,82,245,.08)",

              px: "12px",

              py: "5px",

              borderRadius: "999px",
            }}
          >
            {step.tag}
          </Typography>
        </Box>

        {/* Title */}

        <MaskTextReveal
          delay={0.08}
          duration={0.7}
        >
          <Typography
            component="h3"
            sx={{
              m: 0,

              fontFamily:
                "Manrope, sans-serif",

              fontSize: {
                xs: "29px",
                md: "40px",
              },

              lineHeight: 1.02,

              letterSpacing:
                "-.055em",

              fontWeight: 500,

              color: "#111111",
            }}
          >
            {step.title}
          </Typography>
        </MaskTextReveal>

        {/* Description */}

        <Typography
          sx={{
            mt: "18px",

            maxWidth: "500px",

            fontFamily:
              "Manrope, sans-serif",

            fontSize: {
              xs: "14px",
              md: "16px",
            },

            lineHeight: 1.55,

            letterSpacing:
              "-.02em",

            color: "#707070",
          }}
        >
          {step.description}
        </Typography>

        {/* Metric */}

        <Box
          sx={{
            mt: "20px",

            display: "flex",

            alignItems: "center",

            gap: "8px",
          }}
        >
          <Box
            sx={{
              width: "6px",
              height: "6px",

              borderRadius: "50%",

              background: "#22c55e",
            }}
          />

          <Typography
            sx={{
              fontFamily:
                "Manrope, sans-serif",

              fontSize: "12px",

              color: "#888888",

              fontWeight: 500,
            }}
          >
            {step.metric}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}


/* ============================================================
   MAIN VALUES SECTION
============================================================ */

export default function Values() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        width: "100%",

        background: "#ffffff",

        color: "#111111",

        overflow: "hidden",

        pt: {
          xs: "80px",
          sm: "100px",
          md: "120px",
          lg: "140px",
        },
        pb: {
          xs: "40px",
          sm: "50px",
          md: "60px",
          lg: "70px",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",

          maxWidth: "1500px",

          mx: "auto",

          px: {
            xs: "24px",
            sm: "40px",
            md: "70px",
            lg: "90px",
          },
        }}
      >

        {/* ==================================================
            SECTION LABEL
        ================================================== */}

        <FadeScaleReveal>
          <Box
            sx={{
              display: "flex",

              alignItems: "center",

              gap: "13px",

              mb: {
                xs: "28px",
                md: "42px",
              },
            }}
          >
            <Box
              sx={{
                width: "11px",
                height: "11px",

                borderRadius: "50%",

                background: "#c9a8ff",
              }}
            />

            <Typography
              sx={{
                fontFamily:
                  "Manrope, sans-serif",

                fontSize: {
                  xs: "15px",
                  md: "17px",
                },

                fontWeight: 500,

                letterSpacing:
                  "-.035em",

                color: "#111111",
              }}
            >
              What Can You Do?
            </Typography>
          </Box>
        </FadeScaleReveal>


        {/* ==================================================
            MAIN STATEMENT
        ================================================== */}

        <Box
          sx={{
            maxWidth: "1380px",
          }}
        >
          <MaskTextReveal
            duration={0.9}
            delay={0.05}
          >
            <Typography
              component="h2"
              sx={{
                m: 0,

                fontFamily:
                  "Manrope, sans-serif",

                fontSize: {
                  xs: "40px",
                  sm: "52px",
                  md: "70px",
                  lg: "86px",
                  xl: "96px",
                },

                lineHeight: {
                  xs: 1.05,
                  md: 1,
                },

                letterSpacing:
                  "-.065em",

                fontWeight: 500,

                color: "#111111",
              }}
            >
              Real problems. Real stakes.
            </Typography>
          </MaskTextReveal>


          <Box
            sx={{
              mt: {
                xs: "12px",
                md: "18px",
              },

              maxWidth: "1280px",

              fontFamily:
                "Manrope, sans-serif",

              fontSize: {
                xs: "28px",
                sm: "38px",
                md: "52px",
                lg: "64px",
                xl: "72px",
              },

              lineHeight: {
                xs: 1.08,
                md: 1.02,
              },

              letterSpacing:
                "-.06em",

              color: "#777777",
            }}
          >
            <StaggerWordReveal
              text="ProxBytes turns real engineering challenges into high-stakes student competitions."
              delay={0.2}
              highlightWord="competitions."
            />
          </Box>
        </Box>


        {/* ==================================================
            DIVIDER
        ================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          style={{
            transformOrigin: "left",
          }}
        >
          <Box
            sx={{
              width: "100%",

              height: "1px",

              background: "#e2e2e2",

              mt: {
                xs: "55px",
                md: "80px",
              },
            }}
          />
        </motion.div>


        {/* ==================================================
            PROXBYTES WAY
        ================================================== */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "200px 1fr",
            },

            columnGap: {
              xs: 0,
              md: "70px",
            },

            mt: {
              xs: "40px",
              md: "55px",
            },
          }}
        >
          <MaskTextReveal>
            <Typography
              sx={{
                fontFamily:
                  "Manrope, sans-serif",

                fontSize: {
                  xs: "13px",
                  md: "15px",
                },

                fontWeight: 600,

                letterSpacing:
                  ".08em",

                color: "#9b52f5",

                mb: {
                  xs: "20px",
                  md: 0,
                },
              }}
            >
              HOW THE ARENA WORKS
            </Typography>
          </MaskTextReveal>


          <MaskTextReveal delay={0.1}>
            <Typography
              sx={{
                maxWidth: "850px",

                fontFamily:
                  "Manrope, sans-serif",

                fontSize: {
                  xs: "19px",
                  sm: "23px",
                  md: "27px",
                },

                lineHeight: 1.45,

                letterSpacing:
                  "-.035em",

                color: "#222222",
              }}
            >
              Skip passive tutorials. Take on verified industry problem briefs,
              submit production-grade code, climb the leaderboard, and claim winner bounties.
            </Typography>
          </MaskTextReveal>
        </Box>


        {/* ==================================================
            IMAGE 01 — ENTER THE CHALLENGE
        ================================================== */}

        <Box
          sx={{
            mt: {
              xs: "50px",
              md: "75px",
            },
          }}
        >
          <EditorialImage
            src={learningImage}
            alt="Students solving real-world challenge briefs on ProxBytes"
            number="01"
            label="CHALLENGE BRIEF"
            height={{
              xs: "300px",
              sm: "390px",
              md: "500px",
            }}
          />
        </Box>


        {/* ==================================================
            LEARN TEXT
        ================================================== */}

        <Box
          sx={{
            mt: {
              xs: "45px",
              md: "65px",
            },

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },

            gap: {
              xs: "40px",
              md: "70px",
            },
          }}
        >
          <StepText
            step={steps[0]}
            index={0}
          />

          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          />
        </Box>


        {/* ==================================================
            BUILD + SOLVE
        ================================================== */}

        <Box
          sx={{
            mt: {
              xs: "80px",
              md: "110px",
            },

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "1.2fr .8fr",
            },

            gap: {
              xs: "45px",
              md: "65px",
            },

            alignItems: "start",
          }}
        >

          {/* BUILD IMAGE */}

          <EditorialImage
            src={buildingImage}
            alt="Students building production solutions for contest challenges"
            number="02"
            label="SPRINT"
            height={{
              xs: "300px",
              sm: "380px",
              md: "470px",
            }}
          />


          {/* BUILD TEXT */}

          <StepText
            step={steps[1]}
            index={1}
          />
        </Box>


        {/* ==================================================
            SOLVE / COMPETE
        ================================================== */}

        <Box
          sx={{
            mt: {
              xs: "80px",
              md: "110px",
            },

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: ".8fr 1.2fr",
            },

            gap: {
              xs: "45px",
              md: "65px",
            },

            alignItems: "center",
          }}
        >

          {/* SOLVE TEXT */}

          <StepText
            step={steps[2]}
            index={2}
          />


          {/* SOLVE VISUAL */}

          <VisualPlaceholder
            number="03"
            label="LEADERBOARD"
            title="Real-time ranking."
            accent="#c9a8ff"
          />
        </Box>


        {/* ==================================================
            OUTCOME
        ================================================== */}

        <Box
          sx={{
            mt: {
              xs: "90px",
              md: "130px",
            },

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "200px 1fr",
            },

            columnGap: {
              xs: 0,
              md: "70px",
            },
          }}
        >
          <MaskTextReveal>
            <Typography
              sx={{
                fontFamily:
                  "Manrope, sans-serif",

                fontSize: {
                  xs: "13px",
                  md: "15px",
                },

                fontWeight: 600,

                letterSpacing:
                  ".08em",

                color: "#9b52f5",

                mb: {
                  xs: "20px",
                  md: 0,
                },
              }}
            >
              THE OUTCOME
            </Typography>
          </MaskTextReveal>


          <MaskTextReveal delay={0.1}>
            <Typography
              sx={{
                maxWidth: "1000px",

                fontFamily:
                  "Manrope, sans-serif",

                fontSize: {
                  xs: "34px",
                  sm: "44px",
                  md: "58px",
                  lg: "68px",
                },

                lineHeight: 1.05,

                letterSpacing:
                  "-.06em",

                fontWeight: 500,

                color: "#111111",
              }}
            >
              Don't just complete tutorials.
              <br />

              <Box
                component="span"
                sx={{
                  color: "#9b52f5",
                }}
              >
                Win contests. Prove capability.
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: {
                  xs: "16px",
                  md: "22px",
                },

                maxWidth: "740px",

                fontFamily:
                  "Manrope, sans-serif",

                fontSize: {
                  xs: "16px",
                  sm: "18px",
                  md: "20px",
                },

                lineHeight: 1.55,

                letterSpacing:
                  "-.02em",

                color: "#666666",
              }}
            >
              When you submit high-performing solutions to live sponsor challenges, you don't just gain experience—you
              take home verified cash bounties, climb global ranks, and get scouted directly by top hiring teams.
            </Typography>
          </MaskTextReveal>
        </Box>


        {/* ==================================================
            PROVE
        ================================================== */}

        <Box
          sx={{
            mt: {
              xs: "55px",
              md: "75px",
            },

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },

            gap: {
              xs: "45px",
              md: "65px",
            },

            alignItems: "center",
          }}
        >

          {/* PROVE VISUAL */}

          <VisualPlaceholder
            number="04"
            label="WINNERS"
            title="Claim your bounties."
            accent="#e8c6ff"
          />


          {/* PROVE TEXT */}

          <StepText
            step={steps[3]}
            index={3}
          />
        </Box>


        {/* ==================================================
            FINAL SIMPLE STATEMENT
        ================================================== */}

        <Box
          sx={{
            mt: {
              xs: "50px",
              md: "70px",
            },

            pt: {
              xs: "25px",
              md: "35px",
            },

            borderTop:
              "1px solid #dedede",
          }}
        >
          <MaskTextReveal>
            <Typography
              sx={{
                maxWidth: "1100px",

                fontFamily:
                  "Manrope, sans-serif",

                fontSize: {
                  xs: "30px",
                  sm: "40px",
                  md: "54px",
                  lg: "64px",
                },

                lineHeight: 1.04,

                letterSpacing:
                  "-.055em",

                fontWeight: 500,

                color: "#111111",
              }}
            >
              Choose a challenge.
              {" "}
              Build the solution.
              {" "}
              Top the leaderboard.
              {" "}
              <Box
                component="span"
                sx={{
                  color: "#9b52f5",
                }}
              >
                Claim the bounty.
              </Box>
            </Typography>
          </MaskTextReveal>
        </Box>

      </Box>
    </Box>
  );
}