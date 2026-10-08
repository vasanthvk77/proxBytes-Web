import React from "react";
import { Box, Typography } from "@mui/material";
import Reveal from "../components/Reveal";
import learningImage from "../../assets/Values-1.png";  
import buildingImage from "../../assets/Values-2.png";

const steps = [
  {
    number: "01",
    title: "Learn something.",
    description:
      "Build the knowledge that gives you the foundation to go further.",
  },
  {
    number: "02",
    title: "Build something.",
    description:
      "Turn what you learn into something real, useful and tangible.",
  },
  {
    number: "03",
    title: "Solve something.",
    description:
      "Take on challenges that require you to think, adapt and create.",
  },
  {
    number: "04",
    title: "Prove what you can do.",
    description:
      "Show your ability through work that speaks for itself.",
  },
];

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

        py: {
          xs: "90px",
          sm: "110px",
          md: "150px",
          lg: "180px",
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
        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <Reveal>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "14px",

              mb: {
                xs: "35px",
                md: "55px",
              },
            }}
          >
            <Box
              sx={{
                width: "11px",
                height: "11px",
                borderRadius: "50%",
                background: "#c9a8ff",
                flexShrink: 0,
              }}
            />

            <Typography
              sx={{
                fontFamily: "Manrope, sans-serif",

                fontSize: {
                  xs: "15px",
                  md: "17px",
                },

                fontWeight: 500,

                letterSpacing: "-.035em",

                color: "#111111",
              }}
            >
              What Can You Do?
            </Typography>
          </Box>
        </Reveal>


        {/* =====================================================
            MAIN STATEMENT
        ====================================================== */}

        <Reveal delay={0.08}>
          <Box
            sx={{
              maxWidth: "1370px",
            }}
          >
            <Typography
              component="h2"
              sx={{
                m: 0,

                fontFamily: "Manrope, sans-serif",

                fontSize: {
                  xs: "38px",
                  sm: "48px",
                  md: "64px",
                  lg: "78px",
                  xl: "88px",
                },

                lineHeight: {
                  xs: 1.08,
                  md: 1.02,
                },

                letterSpacing: "-.06em",

                fontWeight: 500,

                color: "#111111",
              }}
            >
              Learning gives you knowledge.
            </Typography>

            <Typography
              component="p"
              sx={{
                m: 0,

                mt: {
                  xs: "8px",
                  md: "14px",
                },

                maxWidth: "1250px",

                fontFamily: "Manrope, sans-serif",

                fontSize: {
                  xs: "27px",
                  sm: "36px",
                  md: "48px",
                  lg: "60px",
                  xl: "68px",
                },

                lineHeight: {
                  xs: 1.08,
                  md: 1.02,
                },

                letterSpacing: "-.055em",

                fontWeight: 400,

                color: "#777777",
              }}
            >
              ProxBytes helps you turn that knowledge into{" "}

              <Box
                component="span"
                sx={{
                  color: "#111111",
                  fontWeight: 600,
                }}
              >
                capability.
              </Box>
            </Typography>
          </Box>
        </Reveal>


        {/* =====================================================
            MAIN DIVIDER
        ====================================================== */}

        <Box
          sx={{
            width: "100%",
            height: "1px",

            background: "#e5e5e5",

            mt: {
              xs: "70px",
              md: "110px",
            },
          }}
        />


        {/* =====================================================
            PROXBYTES WAY INTRO
        ====================================================== */}

        <Reveal delay={0.12}>
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "180px 1fr",
              },

              columnGap: {
                xs: 0,
                md: "80px",
              },

              mt: {
                xs: "45px",
                md: "65px",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Manrope, sans-serif",

                fontSize: {
                  xs: "14px",
                  md: "16px",
                },

                fontWeight: 500,

                color: "#777777",

                mb: {
                  xs: "25px",
                  md: 0,
                },
              }}
            >
              THE PROXBYTES WAY
            </Typography>

            <Typography
              sx={{
                maxWidth: "780px",

                fontFamily: "Manrope, sans-serif",

                fontSize: {
                  xs: "20px",
                  md: "27px",
                },

                lineHeight: 1.35,

                letterSpacing: "-.04em",

                fontWeight: 400,

                color: "#222222",
              }}
            >
              Knowledge becomes valuable when you can use it,
              apply it and prove it in the real world.
            </Typography>
          </Box>
        </Reveal>


        {/* =====================================================
            IMAGE 01
            LARGE EDITORIAL IMAGE

            Add image later by replacing the placeholder
            content with an <img />.
        ====================================================== */}

        <Reveal delay={0.16}>
          <Box
            sx={{
              mt: {
                xs: "65px",
                md: "100px",
              },

              width: "100%",

              height: {
                xs: "300px",
                sm: "400px",
                md: "520px",
              },

              position: "relative",

              overflow: "hidden",

              background:
                "linear-gradient(120deg, #eeeeee 0%, #e4e4e4 45%, #f5f5f5 100%)",

              "&:hover .values-image-placeholder": {
                transform: "scale(1.03)",
              },
            }}
          >
            <Box
  component="img"
  src={learningImage}
  alt="Student learning and building knowledge"
  className="values-image-placeholder"
  sx={{
    width: "100%",
    height: "100%",

    display: "block",

    objectFit: "cover",

    objectPosition: "center",

    transition:
      "transform .8s cubic-bezier(.76,0,.24,1)",
  }}
/>

            {/* Image number */}

            <Typography
              sx={{
                position: "absolute",

                left: {
                  xs: "18px",
                  md: "28px",
                },

                bottom: {
                  xs: "15px",
                  md: "22px",
                },

                fontFamily:
                  "Manrope, sans-serif",

                fontSize: "12px",

                color: "#777777",
              }}
            >
              01 — LEARNING
            </Typography>
          </Box>
        </Reveal>


        {/* =====================================================
            FOUR STEP JOURNEY
        ====================================================== */}

        <Box
          sx={{
            mt: {
              xs: "70px",
              md: "110px",
            },

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },

            columnGap: {
              xs: 0,
              md: "70px",
            },

            rowGap: {
              xs: "45px",
              md: "65px",
            },
          }}
        >
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={0.15 + index * 0.08}
            >
              <Box
                sx={{
                  position: "relative",

                  borderTop:
                    "1px solid #dcdcdc",

                  pt: {
                    xs: "22px",
                    md: "28px",
                  },

                  minHeight: {
                    xs: "170px",
                    md: "200px",
                  },

                  transition:
                    "transform .45s cubic-bezier(.76,0,.24,1)",

                  "&:hover": {
                    transform:
                      "translateY(-6px)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily:
                      "Manrope, sans-serif",

                    fontSize: "13px",

                    fontWeight: 500,

                    color: "#999999",

                    letterSpacing: ".02em",

                    mb: {
                      xs: "30px",
                      md: "40px",
                    },
                  }}
                >
                  {step.number}
                </Typography>

                <Typography
                  component="h3"
                  sx={{
                    m: 0,

                    fontFamily:
                      "Manrope, sans-serif",

                    fontSize: {
                      xs: "27px",
                      md: "38px",
                    },

                    lineHeight: 1.05,

                    letterSpacing: "-.05em",

                    fontWeight: 500,

                    color: "#111111",
                  }}
                >
                  {step.title}
                </Typography>

                <Typography
                  sx={{
                    mt: "18px",

                    maxWidth: "430px",

                    fontFamily:
                      "Manrope, sans-serif",

                    fontSize: {
                      xs: "14px",
                      md: "16px",
                    },

                    lineHeight: 1.55,

                    letterSpacing: "-.02em",

                    color: "#777777",
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Reveal>
          ))}
        </Box>


        {/* =====================================================
            IMAGE 02 + BUILD/SOLVE VISUAL BREAK
        ====================================================== */}

        <Reveal delay={0.22}>
          <Box
            sx={{
              mt: {
                xs: "80px",
                md: "120px",
              },

              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "1.35fr .65fr",
              },

              gap: {
                xs: "25px",
                md: "45px",
              },

              alignItems: "stretch",
            }}
          >
            {/* Large image */}

            <Box
              sx={{
                position: "relative",

                height: {
                  xs: "300px",
                  md: "430px",
                },

                overflow: "hidden",

                background:
                  "linear-gradient(145deg, #eeeeee, #dddddd)",

                "&:hover .image-inner": {
                  transform: "scale(1.04)",
                },
              }}
            >
              <Box
  component="img"
  src={buildingImage}
  alt="Student building and solving problems"
  className="values-image-placeholder"
  sx={{
    width: "100%",
    height: "100%",

    display: "block",

    objectFit: "cover",

    objectPosition: "center",

    transition:
      "transform .8s cubic-bezier(.76,0,.24,1)",
  }}
/>

              <Typography
                sx={{
                  position: "absolute",

                  left: "22px",
                  bottom: "18px",

                  fontFamily:
                    "Manrope, sans-serif",

                  fontSize: "12px",

                  color: "#777777",
                }}
              >
                02 — BUILD
              </Typography>
            </Box>


            {/* Smaller image */}

            <Box
              sx={{
                position: "relative",

                height: {
                  xs: "300px",
                  md: "430px",
                },

                overflow: "hidden",

                background:
                  "linear-gradient(145deg, #e7e0ef, #d9d1e5)",

                "&:hover .image-inner": {
                  transform: "scale(1.04)",
                },
              }}
            >
              <Box
                className="image-inner"
                sx={{
                  width: "100%",
                  height: "100%",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  transition:
                    "transform .8s cubic-bezier(.76,0,.24,1)",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    color: "#8c8395",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily:
                        "Manrope, sans-serif",

                      fontSize: "14px",

                      textTransform:
                        "uppercase",

                      letterSpacing:
                        ".08em",
                    }}
                  >
                    Image Space 03
                  </Typography>

                  <Typography
                    sx={{
                      mt: "8px",

                      fontFamily:
                        "Manrope, sans-serif",

                      fontSize: "13px",

                      color: "#99909f",
                    }}
                  >
                    Solving / Challenge
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{
                  position: "absolute",

                  left: "22px",
                  bottom: "18px",

                  fontFamily:
                    "Manrope, sans-serif",

                  fontSize: "12px",

                  color: "#777777",
                }}
              >
                03 — SOLVE
              </Typography>
            </Box>
          </Box>
        </Reveal>


        {/* =====================================================
            PROOF STATEMENT
        ====================================================== */}

        <Reveal delay={0.28}>
          <Box
            sx={{
              mt: {
                xs: "80px",
                md: "120px",
              },

              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "180px 1fr",
              },

              columnGap: {
                xs: 0,
                md: "80px",
              },

              alignItems: "start",
            }}
          >
            <Typography
              sx={{
                fontFamily:
                  "Manrope, sans-serif",

                fontSize: {
                  xs: "14px",
                  md: "16px",
                },

                color: "#777777",

                mb: {
                  xs: "25px",
                  md: 0,
                },
              }}
            >
              THE OUTCOME
            </Typography>

            <Typography
              sx={{
                maxWidth: "900px",

                fontFamily:
                  "Manrope, sans-serif",

                fontSize: {
                  xs: "28px",
                  sm: "38px",
                  md: "52px",
                  lg: "62px",
                },

                lineHeight: 1.05,

                letterSpacing:
                  "-.055em",

                fontWeight: 500,

                color: "#111111",
              }}
            >
              Don't just know it.
              <br />

              <Box
                component="span"
                sx={{
                  color: "#777777",
                }}
              >
                Show what you can do.
              </Box>
            </Typography>
          </Box>
        </Reveal>


        {/* =====================================================
            IMAGE 04 — PROOF / PROJECT
        ====================================================== */}

        <Reveal delay={0.32}>
          <Box
            sx={{
              mt: {
                xs: "65px",
                md: "95px",
              },

              width: "100%",

              height: {
                xs: "260px",
                sm: "350px",
                md: "460px",
              },

              position: "relative",

              overflow: "hidden",

              background:
                "linear-gradient(120deg, #e8e8e8, #dcdcdc)",

              "&:hover .proof-image": {
                transform: "scale(1.035)",
              },
            }}
          >
            <Box
              className="proof-image"
              sx={{
                width: "100%",
                height: "100%",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                transition:
                  "transform .9s cubic-bezier(.76,0,.24,1)",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  color: "#999999",
                }}
              >
                <Typography
                  sx={{
                    fontFamily:
                      "Manrope, sans-serif",

                    fontSize: {
                      xs: "13px",
                      md: "15px",
                    },

                    fontWeight: 500,

                    letterSpacing:
                      ".08em",

                    textTransform:
                      "uppercase",
                  }}
                >
                  Image Space 04
                </Typography>

                <Typography
                  sx={{
                    mt: "8px",

                    fontFamily:
                      "Manrope, sans-serif",

                    fontSize: "13px",

                    color: "#aaaaaa",
                  }}
                >
                  Project / Submission / Proof
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                position: "absolute",

                left: {
                  xs: "18px",
                  md: "28px",
                },

                bottom: {
                  xs: "15px",
                  md: "22px",
                },

                fontFamily:
                  "Manrope, sans-serif",

                fontSize: "12px",

                color: "#777777",
              }}
            >
              04 — PROVE
            </Typography>
          </Box>
        </Reveal>


        {/* =====================================================
            FINAL CAPABILITY STATEMENT
        ====================================================== */}

        <Reveal delay={0.35}>
          <Box
            sx={{
              position: "relative",

              mt: {
                xs: "100px",
                md: "150px",
              },

              py: {
                xs: "65px",
                md: "90px",
              },

              px: {
                xs: "25px",
                md: "60px",
              },

              background: "#111111",

              overflow: "hidden",
            }}
          >
            {/* Decorative circles */}

            <Box
              sx={{
                position: "absolute",

                width: {
                  xs: "180px",
                  md: "320px",
                },

                height: {
                  xs: "180px",
                  md: "320px",
                },

                borderRadius: "50%",

                border:
                  "1px solid rgba(255,255,255,.12)",

                right: {
                  xs: "-80px",
                  md: "-100px",
                },

                top: {
                  xs: "-80px",
                  md: "-140px",
                },
              }}
            />

            <Box
              sx={{
                position: "absolute",

                width: {
                  xs: "130px",
                  md: "220px",
                },

                height: {
                  xs: "130px",
                  md: "220px",
                },

                borderRadius: "50%",

                border:
                  "1px solid rgba(255,255,255,.08)",

                right: {
                  xs: "-40px",
                  md: "-50px",
                },

                top: {
                  xs: "-55px",
                  md: "-90px",
                },
              }}
            />

            <Typography
              sx={{
                position: "relative",

                zIndex: 1,

                maxWidth: "1000px",

                fontFamily:
                  "Manrope, sans-serif",

                fontSize: {
                  xs: "32px",
                  sm: "42px",
                  md: "58px",
                  lg: "70px",
                },

                lineHeight: 1.02,

                letterSpacing:
                  "-.055em",

                fontWeight: 500,

                color: "#ffffff",
              }}
            >
              Learn it.
              <br />

              Build it.
              <br />

              Solve it.
              <br />

              <Box
                component="span"
                sx={{
                  color: "#c9a8ff",
                }}
              >
                Prove it.
              </Box>
            </Typography>

            <Typography
              sx={{
                position: "relative",

                zIndex: 1,

                mt: {
                  xs: "35px",
                  md: "45px",
                },

                maxWidth: "560px",

                fontFamily:
                  "Manrope, sans-serif",

                fontSize: {
                  xs: "14px",
                  md: "17px",
                },

                lineHeight: 1.55,

                letterSpacing:
                  "-.02em",

                color:
                  "rgba(255,255,255,.58)",
              }}
            >
              ProxBytes turns what you know into something
              you can demonstrate.
            </Typography>
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}