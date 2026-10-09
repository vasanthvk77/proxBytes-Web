import React, { useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, useInView } from "framer-motion";
import {
  ArrowOutward,
  CodeRounded,
  FolderSpecialRounded,
  EmojiEventsRounded,
  WorkspacePremiumRounded,
  VerifiedRounded,
} from "@mui/icons-material";

const ease = [0.16, 1, 0.3, 1];

/* ============================================================
   ANIMATION HELPERS
============================================================ */

function MaskReveal({ children, delay = 0, duration = 0.8, sx = {} }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -8% 0px",
  });

  return (
    <Box ref={ref} sx={{ overflow: "hidden", ...sx }}>
      <motion.div
        initial={{ y: "105%", opacity: 0 }}
        animate={{
          y: isInView ? "0%" : "105%",
          opacity: isInView ? 1 : 0,
        }}
        transition={{ duration, delay, ease }}
      >
        {children}
      </motion.div>
    </Box>
  );
}

function FadeUp({ children, delay = 0, duration = 0.7, sx = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease }}
      style={{ width: "100%" }}
    >
      <Box sx={sx}>{children}</Box>
    </motion.div>
  );
}

/* ============================================================
   DATA CONFIGURATIONS
============================================================ */

const bountyTiers = [
  {
    tier: "Standard Bounty",
    amount: "₹1,000",
    badge: "Entry to Intermediate",
    description:
      "Targeted challenges designed to validate clean architecture, performance optimization, and modular component design.",
    perks: ["Instant Verified Badge", "Direct Byte Points", "Automated Benchmark Review"],
    accent: "#9b52f5",
    highlight: false,
  },
  {
    tier: "Large Bounty",
    amount: "₹10,000",
    badge: "Advanced & Flagship",
    description:
      "Complex production-grade problems presented with authentic system constraints, real test suites, and high industry visibility.",
    perks: ["Industry Recruiter Spotlight", "10x Byte Reward", "Live Production Verification"],
    accent: "#b45309",
    highlight: true,
  },
];

const bytePillars = [
  {
    icon: <CodeRounded sx={{ fontSize: 28 }} />,
    tag: "CAPABILITY",
    title: "Skills",
    subtitle: "What you can do.",
    description: "Concrete languages, frameworks, and low-level algorithmic grasp validated through real code tests.",
    stat: "14+ Skill Tracks",
    accent: "#9b52f5",
  },
  {
    icon: <FolderSpecialRounded sx={{ fontSize: 28 }} />,
    tag: "PORTFOLIO",
    title: "Projects",
    subtitle: "What you have built.",
    description: "Production deployments and end-to-end applications that withstand real stress and user interaction.",
    stat: "Production Artifacts",
    accent: "#4f46e5",
  },
  {
    icon: <EmojiEventsRounded sx={{ fontSize: 28 }} />,
    tag: "MASTERY",
    title: "Challenges",
    subtitle: "What you have solved.",
    description: "Real-world bug sprints, architectural puzzles, and competitive challenges resolved under time constraints.",
    stat: "Live Edge Cases",
    accent: "#db2777",
  },
  {
    icon: <WorkspacePremiumRounded sx={{ fontSize: 28 }} />,
    tag: "VALIDATION",
    title: "Achievements",
    subtitle: "What you have proven.",
    description: "Verifiable badges and cryptographic skill tokens that recruiters and peers can authenticate instantly.",
    stat: "Public Proof-of-Work",
    accent: "#d97706",
  },
];

const lifecycleSteps = [
  { step: "01", label: "Participate", detail: "Pick real engineering tracks" },
  { step: "02", label: "Achieve", detail: "Overcome production constraints" },
  { step: "03", label: "Earn Bytes", detail: "Accumulate verified platform points" },
  { step: "04", label: "Build Proof", detail: "Generate undeniable career signal" },
];

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        width: "100%",
        background: "#ffffff",
        color: "#111111",
        overflow: "hidden",
        position: "relative",
        pt: {
          xs: "30px",
          sm: "40px",
          md: "50px",
          lg: "60px",
        },
        pb: {
          xs: "80px",
          sm: "100px",
          md: "130px",
          lg: "150px",
        },
      }}
    >
      {/* Subtle light background ambient tint */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(155, 82, 245, 0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          right: "2%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217, 119, 6, 0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

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
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* =====================================================
            HEADER / CHAPTER 1: SOLVE. COMPETE. EARN.
        ====================================================== */}
        <FadeUp>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              mb: { xs: "24px", md: "34px" },
            }}
          >
            <Box
              sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#c9a8ff",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Manrope, sans-serif",
                fontSize: { xs: "13px", md: "15px" },
                fontWeight: 600,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "#9b52f5",
              }}
            >
              Bounties & Real Rewards
            </Typography>
          </Box>
        </FadeUp>

        <Box sx={{ maxWidth: "1250px" }}>
          <MaskReveal duration={0.9} delay={0.05}>
            <Typography
              component="h2"
              sx={{
                m: 0,
                fontFamily: "Manrope, sans-serif",
                fontSize: {
                  xs: "40px",
                  sm: "56px",
                  md: "74px",
                  lg: "90px",
                },
                lineHeight: { xs: 1.05, md: 0.98 },
                letterSpacing: "-.06em",
                fontWeight: 600,
                color: "#111111",
              }}
            >
              SOLVE. COMPETE. EARN.
            </Typography>
          </MaskReveal>

          <MaskReveal duration={0.8} delay={0.15}>
            <Typography
              sx={{
                mt: { xs: "18px", md: "24px" },
                maxWidth: "800px",
                fontFamily: "Manrope, sans-serif",
                fontSize: { xs: "18px", sm: "22px", md: "26px" },
                lineHeight: 1.4,
                letterSpacing: "-.03em",
                color: "#666666",
              }}
            >
              Selected ProxBytes challenges come with real rewards and recognition.{" "}
              <Box component="span" sx={{ color: "#111111", fontWeight: 600 }}>
                Your skills can create real value.
              </Box>
            </Typography>
          </MaskReveal>
        </Box>

        {/* =====================================================
            BOUNTY REWARD TIERS (₹1,000 & ₹10,000)
        ====================================================== */}
        <Box
          sx={{
            mt: { xs: "55px", md: "85px" },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: { xs: "28px", md: "36px" },
          }}
        >
          {bountyTiers.map((bounty, i) => (
            <FadeUp key={bounty.tier} delay={i * 0.1}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  borderRadius: "20px",
                  p: { xs: "32px", sm: "42px", md: "48px" },
                  background: bounty.highlight
                    ? "linear-gradient(145deg, #fffcf4 0%, #faf5ea 100%)"
                    : "linear-gradient(145deg, #ffffff 0%, #f9f9fb 100%)",
                  border: bounty.highlight
                    ? "1px solid rgba(217, 119, 6, 0.35)"
                    : "1px solid #e5e5ea",
                  boxShadow: bounty.highlight
                    ? "0 18px 40px -15px rgba(217, 119, 6, 0.12)"
                    : "0 18px 40px -15px rgba(0, 0, 0, 0.05)",
                  overflow: "hidden",
                  transition: "transform .4s cubic-bezier(.16,1,.3,1), border-color .3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: bounty.accent,
                  },
                }}
              >
                {/* Subtle corner radial */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "-50px",
                    right: "-50px",
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${bounty.accent}15 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                  <Typography
                    sx={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: bounty.accent,
                    }}
                  >
                    {bounty.tier}
                  </Typography>

                  <Box
                    sx={{
                      px: 1.8,
                      py: 0.5,
                      borderRadius: "999px",
                      background: bounty.highlight
                        ? "rgba(217, 119, 6, 0.08)"
                        : "rgba(0, 0, 0, 0.04)",
                      border: "1px solid rgba(0, 0, 0, 0.08)",
                      fontSize: "11px",
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 600,
                      color: bounty.highlight ? "#92400e" : "#555555",
                      letterSpacing: ".04em",
                    }}
                  >
                    {bounty.badge}
                  </Box>
                </Box>

                {/* Amount display */}
                <Typography
                  sx={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: { xs: "50px", sm: "62px", md: "74px" },
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "-.05em",
                    color: "#111111",
                    mb: 2,
                  }}
                >
                  {bounty.amount}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: 1.6,
                    color: "#666666",
                    mb: 4,
                  }}
                >
                  {bounty.description}
                </Typography>

                {/* Perks Checklist */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.6, mb: 4 }}>
                  {bounty.perks.map((perk, idx) => (
                    <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <VerifiedRounded sx={{ fontSize: 18, color: bounty.accent }} />
                      <Typography
                        sx={{
                          fontFamily: "Manrope, sans-serif",
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#333333",
                        }}
                      >
                        {perk}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Button
                  variant="outlined"
                  endIcon={<ArrowOutward sx={{ fontSize: 18 }} />}
                  sx={{
                    textTransform: "none",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    borderRadius: "999px",
                    px: 3,
                    py: 1.2,
                    borderColor: bounty.accent,
                    color: bounty.accent,
                    background: "transparent",
                    "&:hover": {
                      borderColor: bounty.accent,
                      background: `${bounty.accent}10`,
                    },
                  }}
                >
                  View Bounties
                </Button>
              </Box>
            </FadeUp>
          ))}
        </Box>

        {/* =====================================================
            CHAPTER 2: EVERY ACTION COUNTS (BYTES ECOSYSTEM)
        ====================================================== */}
        <Box sx={{ mt: { xs: "100px", md: "150px" } }}>
          <FadeUp>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                mb: { xs: "20px", md: "28px" },
              }}
            >
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#c9a8ff",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: { xs: "13px", md: "15px" },
                  fontWeight: 600,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "#9b52f5",
                }}
              >
                The Proof Economy
              </Typography>
            </Box>
          </FadeUp>

          <MaskReveal duration={0.9}>
            <Typography
              component="h2"
              sx={{
                m: 0,
                fontFamily: "Manrope, sans-serif",
                fontSize: {
                  xs: "36px",
                  sm: "52px",
                  md: "68px",
                  lg: "82px",
                },
                lineHeight: { xs: 1.05, md: 1 },
                letterSpacing: "-.06em",
                fontWeight: 600,
                color: "#111111",
              }}
            >
              EVERY ACTION COUNTS.
            </Typography>
          </MaskReveal>

          <MaskReveal duration={0.8} delay={0.1}>
            <Typography
              sx={{
                mt: { xs: "16px", md: "20px" },
                maxWidth: "850px",
                fontFamily: "Manrope, sans-serif",
                fontSize: { xs: "17px", sm: "20px", md: "24px" },
                lineHeight: 1.45,
                letterSpacing: "-.03em",
                color: "#666666",
              }}
            >
              ProxBytes Bytes represent participation, achievements and progress across the platform.
            </Typography>
          </MaskReveal>

          {/* Interactive Flow Loop: Participate → Achieve → Earn Bytes → Build Proof */}
          <FadeUp delay={0.15}>
            <Box
              sx={{
                mt: { xs: "35px", md: "50px" },
                p: { xs: "24px", md: "32px" },
                borderRadius: "16px",
                background: "#fafafc",
                border: "1px solid #e8e8ed",
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                  lg: "repeat(4, 1fr)",
                },
                gap: { xs: "24px", md: "20px" },
              }}
            >
              {lifecycleSteps.map((step) => (
                <Box
                  key={step.step}
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.8,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#9b52f5",
                      letterSpacing: ".06em",
                    }}
                  >
                    STEP {step.step}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "20px",
                      fontWeight: 600,
                      letterSpacing: "-.03em",
                      color: "#111111",
                    }}
                  >
                    {step.label}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "13px",
                      color: "#777777",
                    }}
                  >
                    {step.detail}
                  </Typography>
                </Box>
              ))}
            </Box>
          </FadeUp>

          {/* 4 Pillars: Skills, Projects, Challenges, Achievements */}
          <Box
            sx={{
              mt: { xs: "45px", md: "70px" },
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "repeat(4, 1fr)",
              },
              gap: { xs: "20px", md: "24px" },
            }}
          >
            {bytePillars.map((item, idx) => (
              <FadeUp key={item.title} delay={0.1 + idx * 0.08}>
                <Box
                  sx={{
                    height: "100%",
                    borderRadius: "16px",
                    p: { xs: "28px", md: "32px" },
                    background: "#ffffff",
                    border: "1px solid #e8e8ee",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 10px 30px -15px rgba(0,0,0,0.04)",
                    transition: "transform .4s cubic-bezier(.16,1,.3,1), border-color .3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: item.accent,
                    },
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "12px",
                        background: `${item.accent}12`,
                        color: item.accent,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2.5,
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: "Manrope, sans-serif",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: ".08em",
                        color: item.accent,
                        mb: 1,
                        textTransform: "uppercase",
                      }}
                    >
                      {item.tag}
                    </Typography>

                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "Manrope, sans-serif",
                        fontSize: { xs: "24px", md: "28px" },
                        fontWeight: 600,
                        letterSpacing: "-.04em",
                        color: "#111111",
                        mb: 0.6,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Manrope, sans-serif",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#9b52f5",
                        mb: 1.8,
                      }}
                    >
                      {item.subtitle}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Manrope, sans-serif",
                        fontSize: "13px",
                        lineHeight: 1.55,
                        color: "#666666",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      mt: 3.5,
                      pt: 2.2,
                      borderTop: "1px solid #f0f0f4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Manrope, sans-serif",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#444444",
                      }}
                    >
                      {item.stat}
                    </Typography>
                    <ArrowOutward sx={{ fontSize: 16, color: item.accent }} />
                  </Box>
                </Box>
              </FadeUp>
            ))}
          </Box>

          {/* Subheading Callout */}
          <FadeUp delay={0.2}>
            <Box
              sx={{
                mt: { xs: "35px", md: "55px" },
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: { xs: "22px", sm: "28px", md: "34px" },
                  fontWeight: 500,
                  letterSpacing: "-.04em",
                  color: "#111111",
                }}
              >
                Make your capability visible.
              </Typography>
            </Box>
          </FadeUp>
        </Box>

        {/* =====================================================
            CHAPTER 3: YOUR NEXT LEVEL (FINALE SHOWCASE)
        ====================================================== */}
        <Box sx={{ mt: { xs: "100px", md: "150px" } }}>
          <FadeUp>
            <Box
              sx={{
                position: "relative",
                borderRadius: "24px",
                p: { xs: "36px 24px", sm: "50px 36px", md: "75px 60px" },
                background: "linear-gradient(135deg, #f7f3fd 0%, #f4effa 100%)",
                border: "1px solid rgba(155, 82, 245, 0.2)",
                boxShadow: "0 25px 50px -20px rgba(155, 82, 245, 0.08)",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1.2fr 0.8fr",
                },
                gap: { xs: "36px", md: "55px" },
                alignItems: "center",
              }}
            >
              {/* Geometric circular decoration */}
              <Box
                sx={{
                  position: "absolute",
                  right: "-100px",
                  top: "-100px",
                  width: "400px",
                  height: "400px",
                  borderRadius: "50%",
                  border: "1px solid rgba(155, 82, 245, 0.12)",
                  pointerEvents: "none",
                }}
              />

              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "#9b52f5",
                    mb: 2,
                  }}
                >
                  YOUR NEXT LEVEL
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: { xs: "34px", sm: "46px", md: "58px" },
                    fontWeight: 700,
                    lineHeight: 1.05,
                    letterSpacing: "-.055em",
                    color: "#111111",
                    mb: 3,
                  }}
                >
                  PROXBYTES
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.4, mb: 4 }}>
                  {["Build engagement.", "Take on challenges.", "Discover capability."].map((point, idx) => (
                    <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1.6 }}>
                      <Box
                        sx={{
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                          background: "#9b52f5",
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Manrope, sans-serif",
                          fontSize: { xs: "17px", md: "19px" },
                          fontWeight: 500,
                          color: "#333333",
                        }}
                      >
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Button
                  variant="contained"
                  endIcon={<ArrowOutward />}
                  sx={{
                    textTransform: "none",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    borderRadius: "999px",
                    px: 3.8,
                    py: 1.4,
                    background: "#9b52f5",
                    color: "#ffffff",
                    boxShadow: "0 10px 25px -8px rgba(155, 82, 245, 0.45)",
                    "&:hover": {
                      background: "#873ae8",
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>

              {/* Graphic Metric Stat Panel */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.5,
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    background: "#ffffff",
                    border: "1px solid #e8e4f3",
                    boxShadow: "0 10px 25px -10px rgba(0,0,0,0.04)",
                  }}
                >
                  <Typography sx={{ fontSize: "11px", color: "#888888", fontWeight: 700, letterSpacing: ".08em", mb: 0.5 }}>
                    BOUNTY DISTRIBUTION
                  </Typography>
                  <Typography sx={{ fontSize: "30px", fontWeight: 700, color: "#111111", fontFamily: "Manrope, sans-serif" }}>
                    100% Direct & Verified
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#666666", mt: 0.5 }}>
                    Guaranteed milestone payouts for challenge solvers
                  </Typography>
                </Box>

                <Box
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    background: "#ffffff",
                    border: "1px solid #e8e4f3",
                    boxShadow: "0 10px 25px -10px rgba(0,0,0,0.04)",
                  }}
                >
                  <Typography sx={{ fontSize: "11px", color: "#888888", fontWeight: 700, letterSpacing: ".08em", mb: 0.5 }}>
                    PUBLIC REPUTATION
                  </Typography>
                  <Typography sx={{ fontSize: "30px", fontWeight: 700, color: "#9b52f5", fontFamily: "Manrope, sans-serif" }}>
                    Verifiable Proof
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#666666", mt: 0.5 }}>
                    Git commits, pull requests, and skill tokens attached directly to your profile
                  </Typography>
                </Box>
              </Box>
            </Box>
          </FadeUp>
        </Box>
      </Box>
    </Box>
  );
}