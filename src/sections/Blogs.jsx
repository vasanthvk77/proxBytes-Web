import React from "react";
import { Box, Typography,Button  } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

const blogs = [
  {
    tag: "Learning",
    date: "ProxBytes",
    title:
      "Why practical problem-solving matters more than just learning to code.",
    color: "#F8F8DE",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    link: "#blogs",
  },
  {
    tag: "Competition",
    date: "ProxBytes",
    title:
      "How coding contests help students prove their technical skills.",
    color: "#E4EFFF",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=85",
    link: "#blogs",
  },
  {
    tag: "Opportunities",
    date: "ProxBytes",
    title:
      "From GitHub projects to cash bounties and career opportunities.",
    color: "#E3F9DA",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    link: "#blogs",
  },
];

const ease = [0.76, 0, 0.24, 1];

export default function Blogs() {
  return (
    <Box
      component="section"
      id="blogs"
      className="section-pad blogs-section"
      sx={{
        bgcolor: "#ffffff",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1400,
          mx: "auto",
          px: { xs: 2.5, sm: 4, md: 6 },
        }}
      >
        {/* SECTION HEADING */}
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 4,
            mb: { xs: 5, md: 9 },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ maxWidth: 780 }}>
            <Reveal>
              <Typography
                component="h2"
                sx={{
                  m: 0,
                  fontSize: {
                    xs: "clamp(42px, 8vw, 58px)",
                    md: "clamp(64px, 6vw, 78px)",
                  },
                  fontWeight: 500,
                  lineHeight: 1,
                  letterSpacing: "-.075em",
                  color: "#080808",
                }}
              >
                Explore ideas.
                <br />
                <Box
                  component="span"
                  sx={{ color: "#a56af5" }}
                >
                  Build what matters.
                </Box>
              </Typography>
            </Reveal>

            <Reveal delay={0.08}>
              <Typography
                sx={{
                  mt: 2.5,
                  maxWidth: 600,
                  color: "#718090",
                  fontSize: { xs: 14, md: 18 },
                  lineHeight: 1.7,
                }}
              >
                Insights on coding, practical learning, contests,
                and turning technical skills into opportunities.
              </Typography>
            </Reveal>
          </Box>

          {/* <Reveal delay={0.12}>
            <Box
              component="a"
              href="#blogs"
              sx={{
                flexShrink: 0,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 3,
                minWidth: { xs: 190, md: 220 },
                px: 3,
                py: 2,
                bgcolor: "#d9c0ff",
                border: "1px solid #cbb0f6",
                borderRadius: "7px",
                color: "#111111",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 500,
                transition: "background .25s ease",
                "&:hover": {
                  bgcolor: "#cbb0f6",
                },
                "&:hover .blogs-arrow": {
                  transform: "translate(3px, -3px)",
                },
              }}
            >
              Read All Blogs
              <ArrowOutward
                className="blogs-arrow"
                sx={{
                  fontSize: 23,
                  transition: "transform .3s ease",
                }}
              />
            </Box>
          </Reveal> */}




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
            background: "#c388f4",
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
              Read All Blogs
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
        Read All Blogs
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
        </Box>

        {/* BLOG CARD GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
            },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {blogs.map((blog, index) => (
            <Reveal key={blog.title} delay={index * 0.1}>
              <Box
                component={motion.article}
                initial="rest"
                animate="rest"
                whileHover="hover"
                sx={{
                  position: "relative",
                  isolation: "isolate",
                  minWidth: 0,
                  height: { xs: 350, sm: 370, md: 355 },
                  overflow: "hidden",
                  borderRadius: "7px",
                  border: "1px solid #e4e2e8",
                  bgcolor: blog.color,
                  cursor: "pointer",

                  "&:focus-within .blog-title": {
                    color: "#ffffff",
                  },
                }}
              >
                {/* LAYER 1: IMAGE UNDERNEATH */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    overflow: "hidden",
                  }}
                >
                  <motion.img
                    src={blog.image}
                    alt=""
                    loading="lazy"
                    variants={{
                      rest: {
                        scale: 1.12,
                      },
                      hover: {
                        scale: 1,
                      },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
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

                  {/* IMAGE DARKENING */}
                  <motion.div
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 0.32 },
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "#000000",
                      pointerEvents: "none",
                    }}
                  />
                </Box>

                {/* LAYER 2: PASTEL SHUTTER */}
                <motion.div
                  variants={{
                    rest: {
                      y: "0%",
                    },
                    hover: {
                      y: "-100%",
                    },
                  }}
                  transition={{
                    duration: 0.65,
                    ease,
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    backgroundColor: blog.color,
                    pointerEvents: "none",
                    willChange: "transform",
                  }}
                />

                {/* LAYER 3: CARD CONTENT */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    p: { xs: 2.5, md: 3 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    color: "#111111",
                    transition: "color .35s ease",

                    ".blog-title, .blog-date, .blog-learn-link": {
                      transition: "color .35s ease",
                    },

                    "&:hover": {
                      color: "#ffffff",
                    },

                    "&:hover .blog-title": {
                      color: "#ffffff",
                    },

                    "&:hover .blog-date": {
                      color: "#ffffff",
                    },

                    "&:hover .blog-learn-link": {
                      color: "#ffffff",
                      borderColor: "rgba(255,255,255,.55)",
                    },

                    "&:hover .blog-arrow-box": {
                      bgcolor: "#ffffff",
                      color: "#111111",
                    },
                  }}
                >
                  {/* CATEGORY AND DATE */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        px: 2,
                        py: 0.75,
                        borderRadius: "30px",
                        bgcolor: "#ffffff",
                        color: "#111111",
                        fontSize: 13,
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {blog.tag}
                    </Typography>

                    <Typography
                      className="blog-date"
                      sx={{
                        fontSize: 13,
                        color: "#718090",
                        fontWeight: 500,
                        textAlign: "right",
                        transition: "color .35s ease",
                      }}
                    >
                      {blog.date}
                    </Typography>
                  </Box>

                  {/* TITLE AND LEARN MORE */}
                  <Box>
                    <Typography
                      className="blog-title"
                      component="h3"
                      sx={{
                        m: 0,
                        maxWidth: 390,
                        fontSize: { xs: 21, md: 22 },
                        fontWeight: 400,
                        lineHeight: 1.5,
                        letterSpacing: "-.035em",
                        color: "#111111",
                        transition: "color .35s ease",
                      }}
                    >
                      {blog.title}
                    </Typography>

                    <Box
                      component="a"
                      href={blog.link}
                      className="blog-learn-link"
                      sx={{
                        mt: 2.5,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1.5,
                        color: "#111111",
                        fontSize: 15,
                        fontWeight: 500,
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(0,0,0,.12)",
                        pb: 1,
                        transition: "color .35s ease, border-color .35s ease",
                      }}
                    >
                      Learn more

                      <Box
                        component="span"
                        className="blog-arrow-box"
                        sx={{
                          width: 27,
                          height: 27,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "#111111",
                          color: "#ffffff",
                          transition: "background .25s ease, color .25s ease",
                        }}
                      >
                        <ArrowOutward sx={{ fontSize: 18 }} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}