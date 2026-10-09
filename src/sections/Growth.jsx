import React from "react";
import { Box, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "../components/Reveal";

const data = [
  {
    name: "SEO Marketing",
    value: 100,
    copy: "By conducting in-depth keyword research, we ensure website aligns.",
    color: "#DCC5FF",
  },
  {
    name: "Social Media",
    value: 80,
    copy: "We create personalized campaigns that build brand awareness.",
    color: "#F8F8DE",
  },
  {
    name: "Content Marketing",
    value: 90,
    copy: "From blog posts and videos, we develop content that speaks directly.",
    color: "#DFEDFF",
  },
  {
    name: "Email Marketing",
    value: 60,
    copy: "A tool for connecting directly with a powerful audience.",
    color: "#DDF8D5",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function Growth() {
  const barsRef = useRef(null);

  const barsInView = useInView(barsRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <Box
      component="section"
      className="section-pad growth-section"
      sx={{
        bgcolor: "#f9f9f9",
        color: "#080808",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      <Box
        className="container"
        sx={{
          maxWidth: "1500px",
          width: "100%",
          mx: "auto",
          px: { xs: 2.5, sm: 4, md: 7 },
        }}
      >
        {/* SECTION HEADING */}
        <Reveal>
          <Box
            sx={{
              textAlign: "center",
              mb: { xs: 7, md: 10 },
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "clamp(40px, 9vw, 58px)",
                  md: "clamp(64px, 6vw, 82px)",
                },
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: "-.075em",
                color: "#080808",
              }}
            >
              Annual Growth
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "#718090",
                fontSize: { xs: 14, md: 18 },
                lineHeight: 1.7,
              }}
            >
              Several key factors, including market trends, the agency’s
              ability to adapt
            </Typography>
          </Box>
        </Reveal>

        {/* MAIN CONTENT */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 1.25fr) minmax(0, 1fr)",
            },
            columnGap: { xs: 5, md: 12 },
            rowGap: { xs: 7, md: 0 },
            alignItems: "start",
          }}
        >
          {/* LEFT: GROWTH RATE + ANIMATED PILLS */}
          <Box>
            <Reveal>
              <Box
                sx={{
                  mb: { xs: 6, md: 10 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: 66,
                      sm: 76,
                      md: 80,
                    },
                    fontWeight: 500,
                    lineHeight: 0.95,
                    letterSpacing: "-.075em",
                  }}
                >
                  79%
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    fontSize: { xs: 14, md: 18 },
                    color: "#718090",
                  }}
                >
                  Growth Rate in 2025
                </Typography>
              </Box>
            </Reveal>

            <Box
              ref={barsRef}
              sx={{
                width: "100%",
                maxWidth: 670,
                overflow: "hidden",
                pt: 0,
              }}
            >
              {data.map((item, index) => (
                <Box
                  key={item.name}
                  sx={{
                    position: "relative",
                    height: { xs: 70, sm: 78, md: 92 },
                    mt: index === 0 ? 0 : "-1px",
                    zIndex: index + 1,
                  }}
                >
                  <motion.div
                    initial={{
                      x: -100,
                      opacity: 0,
                      width: "0%",
                    }}
                    animate={
                      barsInView
                        ? {
                            x: 0,
                            opacity: 1,
                            width: `${item.value}%`,
                          }
                        : {
                            x: -100,
                            opacity: 0,
                            width: "0%",
                          }
                    }
                    transition={{
                      x: {
                        duration: 0.85,
                        delay: index * 0.13,
                        ease,
                      },
                      opacity: {
                        duration: 0.35,
                        delay: index * 0.13,
                      },
                      width: {
                        duration: 1,
                        delay: index * 0.13,
                        ease,
                      },
                    }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      maxWidth: "100%",
                      borderRadius: "0 100px 100px 0",
                      background: item.color,
                      border: "1px solid rgba(20, 20, 20, 0.06)",
                      boxSizing: "border-box",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 1,
                      px: { xs: 2, sm: 3, md: 4 },
                      pointerEvents: "none",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 12, sm: 14, md: 17 },
                        fontWeight: 500,
                        letterSpacing: "-.035em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.name}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: 12, sm: 14, md: 17 },
                        fontWeight: 500,
                        flexShrink: 0,
                      }}
                    >
                      {item.value}%
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* RIGHT: CORRESPONDING DETAIL ROWS */}
          <Box
            sx={{
              borderTop: "1px solid #dedede",
            }}
          >
            {data.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "minmax(0, 1fr) minmax(0, 1fr)",
                      md: "minmax(0, 1fr) minmax(0, 1fr)",
                    },
                    columnGap: { xs: 2, md: 4 },
                    alignItems: "center",
                    py: { xs: 3, md: 4.5 },
                    borderBottom: "1px solid #dedede",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        px: 1.75,
                        py: 0.5,
                        borderRadius: "30px",
                        bgcolor: "#ffffff",
                        mb: 1.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 14,
                          lineHeight: 1.2,
                          fontWeight: 500,
                        }}
                      >
                        {item.value}%
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        fontSize: { xs: 14, md: 18 },
                        fontWeight: 500,
                        letterSpacing: "-.035em",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: { xs: 12, md: 17 },
                      lineHeight: 1.7,
                      color: "#718090",
                    }}
                  >
                    {item.copy}
                  </Typography>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}