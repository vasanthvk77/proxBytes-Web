import React from "react";
import { Box, Typography } from "@mui/material";
import {
  BusinessRounded,
  GroupsRounded,
  HandshakeRounded,
  SchoolRounded,
} from "@mui/icons-material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

const data = [
  {
    name: "Students in ProxBytes",
    value: "800+",
    barWidth: "100%",
    copy: "Students participating in the ProxBytes learning and challenge ecosystem.",
    color: "#DCC5FF",
    icon: GroupsRounded,
  },
  {
    name: "Students in FORGE",
    value: "700+",
    barWidth: "88%",
    copy: "Students taking their skills further through advanced challenges in FORGE.",
    color: "#F8F8DE",
    icon: SchoolRounded,
  },
  {
    name: "Students connected with industry",
    value: "500+",
    barWidth: "72%",
    copy: "Students building connections and exploring opportunities with industry.",
    color: "#DFEDFF",
    icon: HandshakeRounded,
  },
  {
    name: "Industry partners",
    value: "100+",
    barWidth: "58%",
    copy: "Industry partners bringing real-world challenges and perspectives to students.",
    color: "#DDF8D5",
    icon: BusinessRounded,
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
        py: { xs: 8, md: 1 },
        overflow: "hidden",
      }}
    >
      <Box
        className="container"
        id="community"
        sx={{
          maxWidth: "1500px",
          width: "100%",
          mx: "auto",
          px: { xs: 2.5, sm: 4, md: 7 },
        }}
      >
        <SectionTitle
          eyebrow="Our growing community"
          prominent
          title="ProxBytes in Numbers"
          description="A growing community connecting students with practical challenges and industry opportunities."
          align="center"
          sx={{ mb: { xs: 7, md: 10 } }}
        />

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
          {/* LEFT: COMMUNITY METRICS */}
          <Box>
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
                            width: item.barWidth,
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
                    <Box
                      sx={{
                        minWidth: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 0.75, sm: 1.25 },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: 12, sm: 14, md: 17 },
                          fontWeight: 500,
                          letterSpacing: "-.035em",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <motion.span
                        aria-hidden="true"
                        initial={{ opacity: 0, scale: 0.55, rotate: -18, y: 8 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 0.65,
                          delay: 0.2 + index * 0.1,
                          ease,
                        }}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          flexShrink: 0,
                        }}
                      >
                        <item.icon sx={{ fontSize: { xs: 17, sm: 20, md: 23 } }} />
                      </motion.span>
                    </Box>

                    <Typography
                      sx={{
                        fontSize: { xs: 12, sm: 14, md: 17 },
                        fontWeight: 500,
                        flexShrink: 0,
                      }}
                    >
                      {item.value}
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
                        {item.value}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: 14, md: 18 },
                          fontWeight: 500,
                          letterSpacing: "-.035em",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <motion.span
                        aria-hidden="true"
                        initial={{ opacity: 0, scale: 0.55, rotate: -18, y: 8 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 0.65,
                          delay: 0.2 + index * 0.1,
                          ease,
                        }}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          color: "#9b52f5",
                          flexShrink: 0,
                        }}
                      >
                        <item.icon sx={{ fontSize: { xs: 19, md: 23 } }} />
                      </motion.span>
                    </Box>
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