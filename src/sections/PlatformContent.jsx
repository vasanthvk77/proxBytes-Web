import React from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  ArrowOutward,
  AutoStoriesRounded,
  BuildRounded,
  BusinessRounded,
  CodeRounded,
  EmojiEventsRounded,
  FactCheckRounded,
  GavelRounded,
  GroupsRounded,
  HandshakeRounded,
  LightbulbRounded,
  PsychologyRounded,
  RocketLaunchRounded,
  SchoolRounded,
  SendRounded,
  VerifiedRounded,
  WorkspacePremiumRounded,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

const steps = [
  ["01", "Learn", "Build knowledge and understanding.", AutoStoriesRounded],
  ["02", "Apply", "Put your knowledge into practice.", BuildRounded],
  ["03", "Solve", "Take on real-world challenges.", PsychologyRounded],
  ["04", "Prove", "Demonstrate your capability.", VerifiedRounded],
  ["05", "Earn", "Gain recognition, Bytes and Bounties.", EmojiEventsRounded],
];

const proofPoints = [
  ["Skills", "What you can do.", CodeRounded],
  ["Projects", "What you have built.", RocketLaunchRounded],
  ["Challenges", "What you have solved.", FactCheckRounded],
  ["Achievements", "What you have proven.", WorkspacePremiumRounded],
];

const collegeOpportunities = [
  ["Practical technology exposure", LightbulbRounded],
  ["Real-world challenges", PsychologyRounded],
  ["Student engagement", GroupsRounded],
  ["Recognition", EmojiEventsRounded],
  ["Capability development", SchoolRounded],
  ["Industry orientation", BusinessRounded],
];

const challengeSteps = [
  ["01", "Problem", "Understand the use case and what it needs.", FactCheckRounded],
  ["02", "Build", "Turn your approach into a working solution.", BuildRounded],
  ["03", "Submit", "Share the work you have built.", SendRounded],
  ["04", "Defend", "Explain your approach, decisions and thinking.", GavelRounded],
];

const evaluationPoints = [
  ["Your approach", PsychologyRounded],
  ["Your decisions", LightbulbRounded],
  ["Your solution", CodeRounded],
  ["Your thinking", AutoStoriesRounded],
];

function AnimatedIcon({ icon: Icon, delay = 0, color = "#9b52f5", size = 26 }) {
  return (
    <motion.span
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.55, rotate: -18, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        color,
      }}
    >
      <Icon sx={{ fontSize: size }} />
    </motion.span>
  );
}

const containerSx = {
  width: "100%",
  maxWidth: 1440,
  mx: "auto",
  px: { xs: 2.5, sm: 4, md: 7 },
};

export default function PlatformContent() {
  return (
    <>
      <Box
        component="section"
        id="how-it-works"
        sx={{
          bgcolor: "#fff",
          color: "#111",
          py: { xs: 9, md: 15 },
        }}
      >
        <Box sx={containerSx}>
          <SectionTitle
            eyebrow="From learning to proof"
            prominent
            title={
              <>
              Your learning
              <br />
              deserves proof.
              </>
            }
            description={
              <>
              Learning gives you knowledge. ProxBytes helps you turn that
              knowledge into capability: learn something, build something,
              solve something, and prove what you can do.
              </>
            }
            sx={{ maxWidth: 850 }}
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                lg: "repeat(5, minmax(0, 1fr))",
              },
              mt: { xs: 6, md: 9 },
              borderTop: "1px solid #ded9e4",
              borderBottom: "1px solid #ded9e4",
            }}
          >
            {steps.map(([number, title, description, Icon], index) => (
              <Box
                key={number}
                sx={{
                  minHeight: { xs: 145, lg: 205 },
                  p: { xs: "24px 4px", lg: "28px 20px" },
                  borderBottom: {
                    xs: "1px solid #ded9e4",
                    sm: "none",
                  },
                  borderRight: {
                    sm: "1px solid #ded9e4",
                    lg: "none",
                  },
                  "&:last-of-type": {
                    borderRight: 0,
                    borderBottom: 0,
                    pr: { lg: 0 },
                  },
                  "&:first-of-type": { pl: { lg: 0 } },
                }}
              >
                <Typography
                  sx={{
                    color: "#9b52f5",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: ".08em",
                  }}
                >
                  {number}
                </Typography>
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1,
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      m: 0,
                      fontSize: { xs: 25, md: 29 },
                      fontWeight: 500,
                      letterSpacing: "-.055em",
                    }}
                  >
                    {title}
                  </Typography>
                  <AnimatedIcon icon={Icon} delay={index * 0.08} />
                </Box>
                <Typography
                  sx={{
                    mt: 1,
                    maxWidth: 190,
                    color: "#77717c",
                    fontSize: 13,
                    lineHeight: 1.7,
                  }}
                >
                  {description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        id="challenges"
        sx={{
          bgcolor: "#f7f5fa",
          color: "#111",
          py: { xs: 9, md: 15 },
        }}
      >
        <Box sx={containerSx}>
          <SectionTitle
            eyebrow="Build for problems that matter"
            layout="split"
            title={
              <>
                Build. Submit.
                <br />
                Defend. Win.
              </>
            }
            description={
              <>
                Take on industry-specific use cases and turn ideas into working
                solutions. Your solution gets evaluated, your thinking gets
                explored, and your capability gets demonstrated.
              </>
            }
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              gap: 2,
              mt: { xs: 6, md: 9 },
            }}
          >
            {challengeSteps.map(([number, title, copy, Icon], index) => (
              <Box
                key={number}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: 2,
                  alignItems: "start",
                  p: { xs: 3, md: 4 },
                  bgcolor: "#fff",
                  border: "1px solid #ebe7f0",
                }}
              >
                <Typography sx={{ color: "#9b52f5", fontSize: 12 }}>
                  {number}
                </Typography>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 1.5,
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{
                        m: 0,
                        fontSize: 25,
                        fontWeight: 500,
                        letterSpacing: "-.05em",
                      }}
                    >
                      {title}
                    </Typography>
                    <AnimatedIcon icon={Icon} delay={index * 0.08} />
                  </Box>
                  <Typography
                    sx={{ mt: 1, color: "#77717c", fontSize: 14, lineHeight: 1.7 }}
                  >
                    {copy}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

         
           <Box
  sx={{
    mt: 4,
    position: "relative",
    overflow: "hidden",
    p: { xs: 2.5, sm: 3.5, md: 4.5 },
    background:
      "linear-gradient(125deg, #17131d 0%, #111 65%, #19151f 100%)",
    color: "#fff",
    display: "grid",
    gridTemplateColumns: { xs: "1fr", lg: ".8fr 1.2fr" },
    gap: { xs: 3, lg: 5 },
    alignItems: "center",
    border: "1px solid rgba(203,176,245,.16)",
    borderRadius: { xs: 2, md: 2.5 },
    boxShadow: "0 18px 50px rgba(24,12,38,.1)",

    "&::before": {
      content: '""',
      position: "absolute",
      width: 240,
      height: 240,
      top: -170,
      left: "12%",
      borderRadius: "50%",
      background: "rgba(155,82,245,.12)",
      filter: "blur(60px)",
      pointerEvents: "none",
    },
  }}
>
  {/* INTRODUCTION */}
  <Box
    sx={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        mb: 2,
      }}
    >
      <Box
        sx={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          bgcolor: "#cbb0f5",
          boxShadow: "0 0 12px rgba(203,176,245,.55)",
        }}
      />
      <Typography
        component="span"
        sx={{
          color: "#cbb0f5",
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: ".15em",
          textTransform: "uppercase",
        }}
      >
        Beyond the submission
      </Typography>
    </Box>

    <Typography
      component="h3"
      sx={{
        m: 0,
        maxWidth: 380,
        fontSize: { xs: 28, md: 35 },
        fontWeight: 500,
        lineHeight: 1.12,
        letterSpacing: "-.055em",
      }}
    >
      We evaluate the thinking behind the work.
    </Typography>

    <Typography
      sx={{
        mt: 1.5,
        maxWidth: 360,
        color: "rgba(255,255,255,.58)",
        fontSize: 13,
        lineHeight: 1.75,
      }}
    >
      A strong solution is more than its final result. We look at
      how you get there.
    </Typography>

    <Box
      sx={{
        mt: 2.5,
        width: 44,
        height: 2,
        bgcolor: "#cbb0f5",
        borderRadius: 2,
      }}
    />
  </Box>

  {/* EVALUATION POINTS */}
  <Box
    sx={{
      position: "relative",
      display: "grid",
      gridTemplateColumns: {
        xs: "repeat(2, minmax(0, 1fr))",
        sm: "repeat(4, minmax(0, 1fr))",
      },
      gap: { xs: 1, sm: 1.5 },
    }}
  >
    {evaluationPoints.map(([label, Icon], index) => (
      <Box
        key={label}
        sx={{
          position: "relative",
          minWidth: 0,
          p: { xs: 1.5, sm: 1.75, md: 2 },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: { xs: 2.5, sm: 3 },
          bgcolor: "rgba(255,255,255,.035)",
          border: "1px solid rgba(255,255,255,.09)",
          borderRadius: 1.5,
          transition:
            "background-color .25s ease, border-color .25s ease, transform .25s ease",

          "&:hover": {
            bgcolor: "rgba(203,176,245,.075)",
            borderColor: "rgba(203,176,245,.35)",
            transform: "translateY(-3px)",
          },
        }}
      >
        {/* STEP NUMBER + ICON */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              color: "rgba(203,176,245,.7)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".08em",
            }}
          >
            0{index + 1}
          </Typography>

          <Box
            sx={{
              width: 32,
              height: 32,
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
              bgcolor: "rgba(203,176,245,.1)",
              border: "1px solid rgba(203,176,245,.16)",
              borderRadius: 1,
            }}
          >
            <AnimatedIcon
              icon={Icon}
              delay={index * 0.08}
              color="#cbb0f5"
              size={18}
            />
          </Box>
        </Box>

        {/* LABEL */}
        <Typography
          sx={{
            color: "rgba(255,255,255,.9)",
            fontSize: { xs: 12, sm: 13 },
            fontWeight: 600,
            lineHeight: 1.45,
            letterSpacing: "-.015em",
            overflowWrap: "break-word",
          }}
        >
          {label}
        </Typography>

        {/* BOTTOM ACCENT */}
        <Box
          sx={{
            width: 22,
            height: 2,
            mt: -1.25,
            bgcolor: index === 0 ? "#cbb0f5" : "rgba(203,176,245,.25)",
            borderRadius: 2,
            transition: "width .25s ease, background-color .25s ease",
            ".MuiBox-root:hover > &": {
              width: 34,
              bgcolor: "#cbb0f5",
            },
          }}
        />
      </Box>
    ))}
  </Box>
</Box>
          
        </Box>
      </Box>

      <Box
        component="section"
        id="rewards"
        sx={{
          bgcolor: "#fff",
          color: "#111",
          py: { xs: 9, md: 15 },
        }}
      >
        <Box sx={containerSx}>
          <SectionTitle
            eyebrow="Solve. Compete. Earn."
            prominent
            title={
              <>
              Your skills can
              <br />
              create real value.
              </>
            }
            description={
              <>
              Selected ProxBytes challenges come with real rewards and
              recognition.
              </>
            }
            sx={{ maxWidth: 850 }}
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
              mt: { xs: 5, md: 7 },
            }}
          >
            {[
              ["₹1,000", "Standard Bounty"],
              ["₹10,000", "Large Bounty"],
            ].map(([amount, label]) => (
              <Box
                key={label}
                sx={{
                  minHeight: { xs: 210, md: 270 },
                  p: { xs: 3, md: 5 },
                  bgcolor: "#f7f5fa",
                  border: "1px solid #ebe7f0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    m: 0,
                    fontSize: { xs: 60, md: 88 },
                    lineHeight: 1,
                    fontWeight: 500,
                    letterSpacing: "-.08em",
                  }}
                >
                  {amount}
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    m: 0,
                    fontSize: 16,
                    color: "#77717c",
                    fontWeight: 600,
                  }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        id="bytes"
        sx={{
          bgcolor: "#f7f5fa",
          color: "#111",
          py: { xs: 9, md: 15 },
        }}
      >
        <Box sx={containerSx}>
          <SectionTitle
            eyebrow="Every action counts"
            layout="split"
            title={
              <>
                Make your
                <br />
                capability visible.
              </>
            }
            description={
              <>
                ProxBytes Bytes represent participation, achievements and
                progress across the platform.
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    mt: 1.5,
                    color: "#8b58d9",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: ".02em",
                  }}
                >
                Participate → Achieve → Earn Bytes → Build Proof
                </Box>
              </>
            }
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                md: "repeat(4, minmax(0, 1fr))",
              },
              gap: 1.5,
              mt: { xs: 5, md: 8 },
            }}
          >
            {proofPoints.map(([title, description, Icon], index) => (
              <Box
                key={title}
                sx={{
                  p: { xs: 2, md: 3 },
                  minHeight: { xs: 140, md: 180 },
                  bgcolor: "#fff",
                  border: "1px solid #ebe7f0",
                }}
              >
                <Typography
                  sx={{
                    color: "#9b52f5",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  0{index + 1}
                </Typography>
                <Box
                  sx={{
                    mt: { xs: 2.5, md: 4 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1,
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      m: 0,
                      fontSize: { xs: 20, md: 25 },
                      fontWeight: 500,
                      letterSpacing: "-.05em",
                    }}
                  >
                    {title}
                  </Typography>
                  <AnimatedIcon icon={Icon} delay={index * 0.08} />
                </Box>
                <Typography sx={{ color: "#77717c", fontSize: 13 }}>
                  {description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        id="forge"
        sx={{
          bgcolor: "#111",
          color: "#fff",
          py: { xs: 9, md: 15 },
        }}
      >
        <Box sx={containerSx}>
          <SectionTitle
            eyebrow="Your next level"
            dark
            title={
              <>
              One ecosystem.
              <br />
              More room to grow.
              </>
            }
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr auto 1fr" },
              gap: { xs: 3, md: 5 },
              alignItems: "stretch",
              mt: { xs: 5, md: 8 },
            }}
          >
            <Box sx={{ p: { xs: 3, md: 4 }, border: "1px solid #51465f" }}>
              <Typography
                component="h3"
                sx={{ m: 0, fontSize: 31, fontWeight: 600, letterSpacing: ".08em" }}
              >
                PROXBYTES
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  color: "#c8c2cf",
                  fontSize: 15,
                  lineHeight: 1.9,
                  whiteSpace: "pre-line",
                }}
              >
                {"Build engagement.\nTake on challenges.\nDiscover capability."}
              </Typography>
            </Box>
            <Typography
              aria-hidden="true"
              sx={{
                display: "grid",
                placeItems: "center",
                color: "#cbb0f5",
                fontSize: { xs: 28, md: 34 },
              }}
            >
              ↓
            </Typography>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                bgcolor: "#cbb0f5",
                color: "#111",
              }}
            >
              <Typography
                component="h3"
                sx={{ m: 0, fontSize: 31, fontWeight: 600, letterSpacing: ".08em" }}
              >
                FORGE
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  fontSize: 15,
                  lineHeight: 1.9,
                  whiteSpace: "pre-line",
                }}
              >
                {"Go deeper.\nAdvanced challenges.\nHigher-value Bounties.\nDeeper industry exposure."}
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              mt: 4,
              maxWidth: 720,
              color: "#c8c2cf",
              fontSize: { xs: 15, md: 18 },
              lineHeight: 1.8,
            }}
          >
            ProxBytes brings students into the ecosystem. FORGE takes them
            further.
          </Typography>
        </Box>
      </Box>

      <Box
        component="section"
        id="partners"
        sx={{
          bgcolor: "#fff",
          color: "#111",
          py: { xs: 9, md: 15 },
        }}
      >
        <Box sx={containerSx}>
          <SectionTitle
            eyebrow="For colleges and partners"
            prominent
            layout="split"
            title={
              <>
                Build a culture
                <br />
                of capability.
              </>
            }
            description={
              <>
                Create meaningful technology engagement that gives students
                opportunities to explore, apply, build, compete and prove what
                they can do.
              </>
            }
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                sm: "repeat(3, minmax(0, 1fr))",
              },
              gap: 1.5,
              mt: { xs: 5, md: 7 },
            }}
          >
            {collegeOpportunities.map(([item, Icon], index) => (
              <Box
                key={item}
                sx={{
                  minHeight: 90,
                  p: 2.5,
                  bgcolor: "#f7f5fa",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <Typography sx={{ color: "#9b52f5", fontSize: 11 }}>
                  0{index + 1}
                </Typography>
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1,
                  }}
                >
                  <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                    {item}
                  </Typography>
                  <AnimatedIcon
                    icon={Icon}
                    delay={index * 0.07}
                    size={22}
                  />
                </Box>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              mt: { xs: 7, md: 10 },
              p: { xs: 4, md: 7 },
              bgcolor: "#111",
              color: "#fff",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "flex-end" },
              gap: 4,
            }}
          >
            <SectionTitle
              eyebrow="What will you prove?"
              dark
              title={
                <>
                  Learn. Apply. Solve.
                  <br />
                  Prove. Earn.
                </>
              }
              description="Your next challenge could be the start of something bigger."
              sx={{ maxWidth: 680 }}
            />
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              <Button
                href="#how-it-works"
                endIcon={<ArrowOutward />}
                sx={{
                  px: 2.5,
                  py: 1.4,
                  bgcolor: "#cbb0f5",
                  color: "#111",
                  textTransform: "none",
                  fontWeight: 700,
                  "&:hover": { bgcolor: "#b894ed" },
                }}
              >
                Enter ProxBytes
              </Button>
              <Button
                href="#about"
                endIcon={<ArrowOutward />}
                sx={{
                  px: 2.5,
                  py: 1.4,
                  border: "1px solid #777",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 700,
                  "&:hover": { borderColor: "#fff", bgcolor: "#222" },
                }}
              >
                Partner with us
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
