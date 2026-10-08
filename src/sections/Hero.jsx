import React, { useRef } from "react";

import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import {
  ArrowOutward,
} from "@mui/icons-material";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";


const MotionBox = motion(Box);

const CursorArrow = ({ color = "#ffff00" }) => (
  <Box
    component="svg"
    viewBox="0 0 28 28"
    sx={{
      width: "28px",
      height: "28px",

      display: "block",

      overflow: "visible",
    }}
  >
    <path
      d="M3.2 2.4L23.8 10.3L15.8 13.3L13 23.9L3.2 2.4Z"
      fill={color}
    />

    <path
      d="M15.7 13.3L20.2 18.1"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </Box>
);

export default function Hero() {
  const heroRef = useRef(null);


  /* =========================================================
     SCROLL PROGRESS
     
     The hero controls the scroll animation.

     0 = hero at the beginning
     1 = hero has completely moved through the viewport
  ========================================================= */

  const { scrollYProgress } = useScroll({
    target: heroRef,

    offset: [
      "start start",
      "end start",
    ],
  });


  /* =========================================================
     SCROLL PARALLAX
  ========================================================= */

  // YOU moves upward
  const youScrollY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -130]
  );

  // AGENCY moves upward so it stays clear above the text
  const agencyScrollY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120]
  );


  /* =========================================================
     MOUSE POSITION
  ========================================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);


  /* =========================================================
     SMOOTH MOUSE POSITION
     
     Without spring, the labels would directly follow
     the cursor and look too mechanical.

     The spring gives the premium / fluid feeling.
  ========================================================= */

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 240,
    damping: 18,
    mass: 0.35,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 240,
    damping: 18,
    mass: 0.35,
  });


  /* =========================================================
     YOU - MOUSE PARALLAX

     Cursor left  -> YOU moves left
     Cursor right -> YOU moves right

     Cursor up    -> YOU moves up
     Cursor down  -> YOU moves down
  ========================================================= */

  const youMouseX = useTransform(
    smoothMouseX,
    [-1, 1],
    [-25, 25]
  );

  const youMouseY = useTransform(
    smoothMouseY,
    [-1, 1],
    [-18, 18]
  );


  /* =========================================================
     AGENCY - MOUSE PARALLAX

     Opposite horizontal movement.

     Cursor left  -> AGENCY moves right
     Cursor right -> AGENCY moves left
  ========================================================= */

  const agencyMouseX = useTransform(
    smoothMouseX,
    [-1, 1],
    [25, -25]
  );

  const agencyMouseY = useTransform(
    smoothMouseY,
    [-1, 1],
    [18, -18]
  );


  /* =========================================================
     COMBINE SCROLL + MOUSE

     YOU:

     scroll movement
           +
     mouse movement
           =
     final Y
  ========================================================= */

  const youY = useTransform(
    [youScrollY, youMouseY],
    ([scroll, mouse]) => scroll + mouse
  );


  const youX = useTransform(
    youMouseX,
    (value) => value
  );


  /* =========================================================
     AGENCY FINAL POSITION
  ========================================================= */

  const agencyY = useTransform(
    [agencyScrollY, agencyMouseY],
    ([scroll, mouse]) => scroll + mouse
  );


  const agencyX = useTransform(
    agencyMouseX,
    (value) => value
  );


  /* =========================================================
     MOUSE MOVE HANDLER

     The mouse position is converted from:

     0 → 1

     into:

     -1 → 1

     Example:

     Left edge   = -1
     Center      =  0
     Right edge  = +1
  ========================================================= */

  const handleMouseMove = (event) => {
    const rect = heroRef.current?.getBoundingClientRect();

    if (!rect) {
      return;
    }


    const x =
      (event.clientX - rect.left) /
      rect.width;


    const y =
      (event.clientY - rect.top) /
      rect.height;


    mouseX.set(
      (x - 0.5) * 2
    );


    mouseY.set(
      (y - 0.5) * 2
    );
  };


  /* =========================================================
     RESET MOUSE POSITION

     When the cursor leaves the hero, the badges smoothly
     return to their normal position.
  ========================================================= */

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };


  return (
    <Box
      ref={heroRef}
      id="home"
      component="section"

      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}

      sx={{
        position: "relative",

        minHeight: "100vh",

        width: "100%",

        overflow: "hidden",

        background: "#101010",

        color: "#ffffff",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        pt: {
          xs: "155px",
          md: "155px",
        },

        pb: {
          xs: "70px",
          md: "80px",
        },
      }}
    >


      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <Box
        sx={{
          position: "absolute",

          inset: 0,

          overflow: "hidden",

          pointerEvents: "none",
        }}
      >


        {/* =================================================
            LEFT BLACK DEPTH
        ================================================== */}

        <Box
          sx={{
            position: "absolute",

            top: "-10%",

            left: "-7%",

            width: "42%",

            height: "125%",

            background:
              "linear-gradient(90deg,#050505 0%,#0a0a0a 65%,transparent 100%)",

            transform:
              "skewX(7deg)",

            opacity: 0.95,
          }}
        />


        {/* =================================================
            MAIN CURVED DARK SHAPE
        ================================================== */}

        <Box
          sx={{
            position: "absolute",

            top: "-25%",

            right: "-10%",

            width: "72%",

            height: "145%",

            borderRadius: "48%",

            background:
              "linear-gradient(115deg,#151515,#202020 65%,#171717)",

            transform:
              "rotate(-12deg)",

            boxShadow:
              "-35px 0 80px rgba(0,0,0,.45)",

            opacity: 0.95,
          }}
        />


        {/* =================================================
            CURVED LINE 1
        ================================================== */}

        <Box
          sx={{
            position: "absolute",

            top: "-18%",

            right: "-5%",

            width: "68%",

            height: "135%",

            border:
              "1px solid rgba(0,0,0,.7)",

            borderRadius: "50%",

            transform:
              "rotate(-17deg)",

            opacity: 0.8,
          }}
        />


        {/* =================================================
            CURVED LINE 2
        ================================================== */}

        <Box
          sx={{
            position: "absolute",

            top: "-22%",

            right: "-13%",

            width: "74%",

            height: "145%",

            border:
              "1px solid rgba(0,0,0,.75)",

            borderRadius: "50%",

            transform:
              "rotate(-17deg)",

            opacity: 0.8,
          }}
        />


        {/* =================================================
            CURVED LINE 3
        ================================================== */}

        <Box
          sx={{
            position: "absolute",

            top: "-28%",

            right: "-20%",

            width: "82%",

            height: "160%",

            border:
              "1px solid rgba(0,0,0,.7)",

            borderRadius: "50%",

            transform:
              "rotate(-18deg)",

            opacity: 0.7,
          }}
        />


        {/* =================================================
            SOFT CENTER GLOW
        ================================================== */}

        <Box
          sx={{
            position: "absolute",

            left: "50%",

            top: "52%",

            transform:
              "translate(-50%,-50%)",

            width: "650px",

            height: "400px",

            background:
              "radial-gradient(ellipse,rgba(80,80,80,.14),transparent 70%)",

            filter: "blur(20px)",
          }}
        />

      </Box>


      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <Box
        sx={{
          position: "relative",

          zIndex: 2,

          width: "100%",

          maxWidth: "1450px",

          mx: "auto",

          px: {
            xs: 2.5,
            sm: 4,
            md: 6,
            lg: 8,
          },

          textAlign: "center",
        }}
      >


        {/* =================================================
            TOP LABEL
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
        >

          <Typography
            sx={{
              fontFamily:
                "Manrope, sans-serif",

              fontSize: {
                xs: "15px",
                md: "20px",
              },

              fontWeight: 500,

              letterSpacing:
                "-.045em",

              color: "#ffffff",

              mb: {
                xs: 3,
                md: 4,
              },
            }}
          >
            Go Beyond Learning. Prove It.
          </Typography>

        </motion.div>


        {/* =================================================
            TITLE + FLOATING LABELS
        ================================================== */}

        <Box
          sx={{
            position: "relative",

            maxWidth: "1120px",

            mx: "auto",
          }}
        >


          {/* =================================================
              MAIN TITLE
          ================================================== */}

          <motion.div
            initial={{
              clipPath:
                "inset(0 0 100% 0)",
            }}

            animate={{
              clipPath:
                "inset(0 0 0% 0)",
            }}

            transition={{
              duration: 1.15,

              delay: 0.45,

              ease: [
                0.76,
                0,
                0.24,
                1,
              ],
            }}
          >

            <Typography
              component="h1"

              sx={{
                m: 0,

                fontFamily:
                  "Manrope, sans-serif",

                fontSize: {
                  xs: "40px",
                  sm: "55px",
                  md: "72px",
                  lg: "92px",
                  xl: "102px",
                },

                lineHeight: {
                  xs: 1.05,
                  md: 0.98,
                },

                letterSpacing:
                  "-.055em",

                fontWeight: 500,

                color: "#ffffff",
              }}
            >
              Real-world challenges.
              <br />

              Real skills.
              <br />

              Real rewards.
            </Typography>

          </motion.div>


          {/* =================================================
              YOU BADGE
              
              SCROLL:
              moves UP

              MOUSE:
              follows mouse subtly
          ================================================== */}

          <MotionBox
              initial={{
                opacity: 0,
                scale: 0.7,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              transition={{
                duration: 0.6,
                delay: 1.1,
                type: "spring",
                stiffness: 160,
              }}

              style={{
                x: youX,
                y: youY,
              }}

              sx={{
                position: "absolute",

                left: {
                  xs: "0%",
                  md: "-9%",
                },

                top: "58%",

                display: {
                  xs: "none",
                  md: "block",
                },

                zIndex: 5,

                willChange: "transform",
              }}
            >
              {/* =================================================
                  POINTER ARROW
              ================================================== */}

              <Box
                sx={{
                  position: "absolute",

                  top: "-22px",
                  right: "-27px",

                  width: "28px",
                  height: "28px",

                  transform: "rotate(90deg)",

                  zIndex: 2,

                  pointerEvents: "none",
                }}
              >
                <CursorArrow color="#ffff00" />
              </Box>


              {/* =================================================
                  YOU PILL
              ================================================== */}

              <Box
                sx={{
                  width: {
                    md: "108px",
                    lg: "118px",
                  },

                  height: {
                    md: "58px",
                    lg: "62px",
                  },

                  borderRadius: "999px",

                  background: "#ffff00",

                  color: "#111111",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  fontFamily:
                    "Manrope, sans-serif",

                  fontSize: "20px",

                  fontWeight: 500,

                  lineHeight: 1,

                  userSelect: "none",
                }}
              >
                YOU
              </Box>
            </MotionBox>


          {/* =================================================
              AGENCY BADGE
              
              SCROLL:
              moves DOWN

              MOUSE:
              moves opposite to YOU
          ================================================== */}

          <MotionBox
            initial={{
              opacity: 0,
              scale: 0.7,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 0.6,
              delay: 1.25,
              type: "spring",
              stiffness: 160,
            }}

            style={{
              x: agencyX,
              y: agencyY,
            }}

            sx={{
              position: "absolute",

              right: {
                xs: "0%",
                md: "-4%",
                lg: "-6%",
              },

              top: {
                md: "-14%",
                lg: "-16%",
              },

              display: {
                xs: "none",
                md: "block",
              },

              zIndex: 5,

              willChange: "transform",
            }}
          >
            {/* =================================================
                POINTER ARROW
            ================================================== */}

            <Box
              sx={{
                position: "absolute",

                top: "-22px",
                left: "-25px",

                width: "28px",
                height: "28px",

                transform: "rotate(-8deg)",

                zIndex: 2,

                pointerEvents: "none",
              }}
            >
              <CursorArrow color="#9b52f5" />
            </Box>


            {/* =================================================
                AGENCY PILL
            ================================================== */}

            <Box
              sx={{
                width: {
                  md: "145px",
                  lg: "155px",
                },

                height: {
                  md: "58px",
                  lg: "62px",
                },

                borderRadius: "999px",

                background: "#9b52f5",

                color: "#ffffff",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                fontFamily:
                  "Manrope, sans-serif",

                fontSize: "20px",

                fontWeight: 600,

                lineHeight: 1,

                userSelect: "none",
              }}
            >
              AGENCY
            </Box>
          </MotionBox>

        </Box>


        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,

            y: 20,
          }}

          animate={{
            opacity: 1,

            y: 0,
          }}

          transition={{
            duration: 0.7,

            delay: 0.9,
          }}
        >

          <Typography
            sx={{
              mt: {
                xs: 4,
                md: 5,
              },

              mx: "auto",

              maxWidth: "900px",

              fontFamily:
                "Manrope, sans-serif",

              fontSize: {
                xs: "14px",
                md: "18px",
              },

              lineHeight: 1.5,

              letterSpacing:
                "-.025em",

              color:
                "rgba(255,255,255,.68)",
            }}
          >
            Turn what you learn into something you can{" "}

            <Box
              component="strong"

              sx={{
                color: "#ffffff",

                fontWeight: 700,
              }}
            >
              build, solve, defend and prove.
            </Box>

          </Typography>

        </motion.div>


        {/* =================================================
            CTA BUTTONS
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,

            y: 25,
          }}

          animate={{
            opacity: 1,

            y: 0,
          }}

          transition={{
            duration: 0.7,

            delay: 1.05,
          }}
        >

          <Box
            sx={{
              mt: {
                xs: 4,
                md: 6,
              },

              display: "flex",

              alignItems: "center",

              justifyContent:
                "center",

              gap: {
                xs: 3,
                md: 5,
              },

              flexWrap: "wrap",
            }}
          >


            {/* =================================================
                LET'S TALK
            ================================================== */}

           <Button
        sx={{
          position: "relative",

          minWidth: {
            xs: "150px",
            md: "210px",
          },

          height: {
            xs: "45px",
            md: "60px",
          },

          px: 4,

          borderRadius: "6px",

          background: "#cbb0f5",

          color: "#111111",

          textTransform: "none",

          fontFamily: "Manrope, sans-serif",

          fontSize: {
            xs: "17px",
            md: "20px",
          },

          fontWeight: 500,

          letterSpacing: "-.035em",

          justifyContent: "center",

          overflow: "hidden",

          transition:
            "background-color .35s ease",

          "&:hover": {
            background: "#ffff00",
          },

          /* =====================================================
            CONTENT WRAPPER
          ====================================================== */

          "& .button-content-wrapper": {
            position: "relative",

            display: "block",

            height: "1.4em",

            overflow: "hidden",

            lineHeight: 1.4,
          },

          /* =====================================================
            EACH CONTENT ROW
          ====================================================== */

          "& .button-content": {
            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            gap: "25px",

            whiteSpace: "nowrap",

            transition:
              "transform .45s cubic-bezier(.76,0,.24,1)",
          },

          /* =====================================================
            FIRST / VISIBLE CONTENT
          ====================================================== */

          "& .button-content.current": {
            transform: "translateY(0)",
          },

          /* =====================================================
            SECOND CONTENT
            Starts below the visible area
          ====================================================== */

          "& .button-content.next": {
            position: "absolute",

            left: 0,

            top: 0,

            width: "100%",

            transform: "translateY(110%)",
          },

          /* =====================================================
            HOVER

            Current content goes UP.
            New content comes FROM BELOW.
          ====================================================== */

          "&:hover .button-content.current": {
            transform: "translateY(-110%)",
          },

          "&:hover .button-content.next": {
            transform: "translateY(0)",
          },

          /* =====================================================
            ARROW
          ====================================================== */

          "& .button-arrow": {
            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            flexShrink: 0,

            transition:
              "transform .45s cubic-bezier(.76,0,.24,1)",
          },

          "&:hover .button-content.current .button-arrow": {
            transform:
              "translateY(-2px) rotate(0deg)",
          },

          "&:hover .button-content.next .button-arrow": {
            transform:
              "translateY(0) rotate(0deg)",
          },
        }}
      >
        <Box
          className="button-content-wrapper"
        >

          {/* =================================================
              CURRENT CONTENT
          ================================================== */}

          <Box
            className="button-content current"
          >
            <span>
              Enter ProxBytes
            </span>

            <Box
              component="span"
              className="button-arrow"
            >
              <ArrowOutward
                sx={{
                  fontSize: {
                    xs: "22px",
                    md: "24px",
                  },
                }}
              />
            </Box>
          </Box>


    {/* =================================================
        NEW CONTENT
    ================================================== */}

    <Box
      className="button-content next"
    >
      <span>
        Enter ProxBytes
      </span>

      <Box
        component="span"
        className="button-arrow"
      >
        <ArrowOutward
          sx={{
            fontSize: {
              xs: "22px",
              md: "24px",
            },
          }}
        />
      </Box>
    </Box>

  </Box>
</Button>


            {/* =================================================
                SEE OUR WORKS
            ================================================== */}

            <Button
            onClick={() =>
              document
                .getElementById("works")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            sx={{
              position: "relative",

              color: "#ffffff",

              textTransform: "none",

              fontFamily: "Manrope, sans-serif",

              fontSize: {
                xs: "16px",
                md: "18px",
              },

              fontWeight: 500,

              letterSpacing: "-.025em",

              borderRadius: 0,

              p: "0 0 9px",

              minWidth: "auto",

              background: "transparent",

              border: 0,

              overflow: "hidden",

              /* =====================================================
                NO MUI HOVER BACKGROUND
              ====================================================== */

              "&:hover": {
                background: "transparent",
              },

              /* =====================================================
                ALWAYS-VISIBLE UNDERLINE
              ====================================================== */

              "&::before": {
                content: '""',

                position: "absolute",

                left: 0,

                bottom: 0,

                width: "100%",

                height: "1px",

                background:
                  "rgba(255,255,255,.25)",

                transition:
                  "background-color .35s ease",
              },

              /* =====================================================
                BRIGHT LOADING LINE

                Starts at 0%
                Loads to 100% on hover
              ====================================================== */

              "&::after": {
                content: '""',

                position: "absolute",

                left: 0,

                bottom: 0,

                width: "100%",

                height: "1px",

                background: "#ffffff",

                transformOrigin: "left center",

                transform: "scaleX(0)",

                transition:
                  "transform .55s cubic-bezier(.76,0,.24,1)",
              },

              "&:hover::before": {
                background:
                  "rgba(255,255,255,.12)",
              },

              "&:hover::after": {
                transform: "scaleX(1)",
              },

              /* =====================================================
                TEXT WRAPPER
              ====================================================== */

              "& .partner-text-wrapper": {
                position: "relative",

                display: "block",

                height: "1.4em",

                overflow: "hidden",

                lineHeight: 1.4,
              },

              /* =====================================================
                TEXT ROWS
              ====================================================== */

              "& .partner-text": {
                display: "block",

                whiteSpace: "nowrap",

                transition:
                  "transform .45s cubic-bezier(.76,0,.24,1)",
              },

              /* =====================================================
                CURRENT TEXT
              ====================================================== */

              "& .partner-text.current": {
                transform:
                  "translateY(0)",
              },

              /* =====================================================
                NEW TEXT

                Hidden below initially
              ====================================================== */

              "& .partner-text.next": {
                position: "absolute",

                left: 0,

                top: 0,

                width: "100%",

                transform:
                  "translateY(110%)",
              },

              /* =====================================================
                HOVER TEXT REFRESH
              ====================================================== */

              "&:hover .partner-text.current": {
                transform:
                  "translateY(-110%)",
              },

              "&:hover .partner-text.next": {
                transform:
                  "translateY(0)",
              },
            }}
          >
            <Box
              className="partner-text-wrapper"
            >

              {/* =================================================
                  CURRENT TEXT
              ================================================== */}

              <Box
                component="span"
                className="partner-text current"
              >
                Partner With Us
              </Box>


              {/* =================================================
                  NEW TEXT
              ================================================== */}

              <Box
                component="span"
                className="partner-text next"
              >
                Partner With Us
              </Box>

            </Box>
          </Button>

          </Box>

        </motion.div>

      </Box>

    </Box>
  );
}