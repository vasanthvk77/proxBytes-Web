import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import {
  Box,
  Button,
  Divider,
  Fade,
  Grow,
  Link,
  Slide,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";

import NorthEastIcon from "@mui/icons-material/NorthEast";

const BRAND = "ProxBytes";

const PAD_TOP = "clamp(40px, 11vh, 110px)";
const PAD_BOTTOM = "clamp(20px, 4.5vh, 44px)";

const COLUMNS = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      // { label: "How It Works", href: "#how-it-works" },
      // { label: "Challenges", href: "#challenges" },
      // { label: "Bounties", href: "#rewards" },
      { label: "Blogs", href: "#blogs" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "ProxBytes Bytes", href: "#bytes" },
      { label: "FORGE", href: "#forge" },
      { label: "For Colleges", href: "#partners" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "info@proxbytes.com",
        href: "mailto:info@proxbytes.com",
      },
    ],
  },
];

/* Trigger animations when the footer enters the viewport. */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* Automatically fit the large ProxBytes wordmark to the available width. */
function useFitText() {
  const wrapRef = useRef(null);
  const textRef = useRef(null);
  const [fontSize, setFontSize] = useState(100);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const element = textRef.current;

    if (!wrap || !element) return undefined;

    let frameId;

    const fit = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const availableWidth = wrap.clientWidth;

        if (!availableWidth) return;

        element.style.fontSize = "100px";

        const range = document.createRange();
        range.selectNodeContents(element);

        const naturalWidth = range.getBoundingClientRect().width;

        if (naturalWidth > 0) {
          const nextSize = Math.min(
            (availableWidth / naturalWidth) * 100,
            280
          );

          element.style.fontSize = `${nextSize}px`;
          setFontSize(nextSize);
        }
      });
    };

    fit();

    let resizeObserver;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(fit);
      resizeObserver.observe(wrap);
    }

    if (document.fonts?.ready) {
      document.fonts.ready.then(fit);
    }

    window.addEventListener("resize", fit);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, []);

  return { wrapRef, textRef, fontSize };
}

const linkSx = {
  color: "rgba(255,255,255,0.76)",
  fontSize: { xs: 12, sm: 14, md: 16 },
  lineHeight: 1.5,
  letterSpacing: "-0.035em",
  textDecoration: "none",
  width: "fit-content",
  maxWidth: "100%",
  minWidth: 0,
  position: "relative",
  overflowWrap: "anywhere",
  transition: "color .3s ease, transform .3s ease",

  "&:hover": {
    color: "#fff",
  },

  "@media (min-width: 600px)": {
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: -2,
      height: "1px",
      width: "100%",
      bgcolor: "#fff",
      transform: "scaleX(0)",
      transformOrigin: "left",
      transition: "transform .35s ease",
    },

    "&:hover": {
      color: "#fff",
      transform: "translateX(4px)",
    },

    "&:hover::after": {
      transform: "scaleX(1)",
    },
  },
};

export default function Footer({ blogPage = false }) {
  const [footerRef, inView] = useInView();
  const { wrapRef, textRef, fontSize } = useFitText();

  return (
    <Box
      component="footer"
      ref={footerRef}
      sx={{
        bgcolor: "#050505",
        color: "#fff",
        pt: {
          xs: "12px",
          sm: 6,
          md: PAD_TOP,
        },
        pb: {
          xs: "14px",
          sm: 3,
          md: PAD_BOTTOM,
        },
        minHeight: { md: "100vh" },
        overflow: "hidden",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <Box
        className="content-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          minHeight: {
            md: `calc(100vh - ${PAD_TOP} - ${PAD_BOTTOM})`,
          },

          "@media (max-width: 599px)": {
            width: "auto",
            minWidth: 0,
            mx: "13px",
          },
        }}
      >
        {/* TOP SECTION: CONTACT CARD + NAVIGATION */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              md: "45% 43%",
            },
            justifyContent: "space-between",
            columnGap: 0,
            rowGap: {
              xs: "34px",
              sm: "40px",
              md: 0,
            },
            alignItems: "start",
            flexShrink: 0,
            minWidth: 0,
          }}
        >
          {/* CONTACT CARD */}
          <Slide in={inView} direction="right" timeout={800}>
            <Box
              sx={{
                bgcolor: "#dcc3ff",
                color: "#0a0a0a",
                borderRadius: "6px",
                p: {
                  xs: "20px 17px",
                  sm: 3.5,
                  md: "clamp(22px, 5vh, 44px)",
                },
                minHeight: {
                  md: "clamp(230px, 32vh, 290px)",
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: {
                  md: "space-between",
                },
                boxSizing: "border-box",
                width: "100%",
                minWidth: 0,
              }}
            >
              <Box sx={{ width: "100%", minWidth: 0 }}>
                <Typography
                  component="h2"
                  sx={{
                    fontSize: {
                      xs: "30px",
                      sm: 38,
                      md: 38,
                      lg: 46,
                    },
                    fontWeight: 500,
                    lineHeight: 1.12,
                    letterSpacing: "-0.065em",
                  }}
                >
                  Let’s grow together
                </Typography>

                <Typography
                  sx={{
                    mt: 1.5,
                    maxWidth: 480,
                    fontSize: {
                      xs: 14,
                      sm: 16,
                    },
                    lineHeight: 1.65,
                    letterSpacing: "-0.025em",
                    color: "rgba(10,10,10,0.68)",
                  }}
                >
                  We believe in more than just delivering services – we
                  believe in building long-term partnerships that help
                  students grow through practical experience.
                </Typography>
              </Box>

              <Zoom
                in={inView}
                timeout={900}
                style={{
                  transitionDelay: inView ? "300ms" : "0ms",
                }}
              >
                <Button
                  href={blogPage ? "/#partners" : "#partners"}
                  disableElevation
                  endIcon={
                    <NorthEastIcon
                      className="cta-arrow"
                      sx={{
                        fontSize: "19px !important",
                        transition: "transform .3s ease",
                      }}
                    />
                  }
                  sx={{
                    mt: {
                      xs: "18px",
                      md: 1.5,
                    },
                    bgcolor: "#fff",
                    color: "#0a0a0a",
                    textTransform: "none",
                    fontSize: {
                      xs: 14,
                      md: 17,
                    },
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                    borderRadius: "5px",
                    px: {
                      xs: 2.5,
                      md: 3.6,
                    },
                    py: {
                      xs: 1.15,
                      md: 1.5,
                    },
                    gap: 1.3,
                    minHeight: {
                      xs: 44,
                      md: 48,
                    },
                    transition:
                      "background-color .3s ease, color .3s ease, transform .3s ease",

                    "&:hover": {
                      bgcolor: "#0a0a0a",
                      color: "#fff",
                      transform: "translateY(-2px)",
                    },

                    "&:hover .cta-arrow": {
                      transform: "translate(4px, -4px)",
                    },
                  }}
                >
                  Partner with us
                </Button>
              </Zoom>
            </Box>
          </Slide>

          {/* NAVIGATION: THREE COLUMNS ON MOBILE */}
          <Box
            sx={{
              display: {
                xs: "grid",
                md: "flex",
              },
              gridTemplateColumns: {
                xs: "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 0.85fr)",
              },
              justifyContent: "space-between",
              columnGap: {
                xs: "12px",
                sm: "24px",
                md: "0px",
              },
              rowGap: 0,
              pt: {
                md: 0.25,
              },
              width: "100%",
              minWidth: 0,
            }}
          >
            {COLUMNS.map((column, columnIndex) => (
              <Box
                key={column.title}
                sx={{
                  minWidth: 0,
                  overflow: "hidden",
                  flex: {
                    md: "0 1 auto",
                  },
                }}
              >
                <Fade
                  in={inView}
                  timeout={700}
                  style={{
                    transitionDelay: inView
                      ? `${columnIndex * 150}ms`
                      : "0ms",
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: {
                        xs: 12,
                        sm: 15,
                        md: 17,
                      },
                      fontWeight: 500,
                      lineHeight: 1.5,
                      letterSpacing: "-0.04em",
                      mb: {
                        xs: "12px",
                        sm: 2,
                        md: 2.25,
                      },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {column.title}
                  </Typography>
                </Fade>

                <Stack
                  spacing={{
                    xs: "11px",
                    sm: 1.5,
                    md: "clamp(10px, 2.2vh, 19px)",
                  }}
                  sx={{
                    minWidth: 0,
                  }}
                >
                  {column.links.map((link, linkIndex) => (
                    <Grow
                      key={link.label}
                      in={inView}
                      timeout={600}
                      style={{
                        transformOrigin: "left center",
                        transitionDelay: inView
                          ? `${300 + columnIndex * 150 + linkIndex * 80}ms`
                          : "0ms",
                      }}
                    >
                      <Box
                        sx={{
                          minWidth: 0,
                          display: "flex",
                        }}
                      >
                        <Link
                          href={
                            blogPage && link.label === "Blogs"
                              ? "/blog"
                              : blogPage && link.href.startsWith("#")
                                ? `/${link.href}`
                                : link.href
                          }
                          underline="none"
                          sx={linkSx}
                        >
                          {link.label}
                        </Link>
                      </Box>
                    </Grow>
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>
        </Box>

        {/* LARGE PROXBYTES WORDMARK */}
        <Box
          ref={wrapRef}
          sx={{
            flex: {
              md: "1 1 auto",
            },
            my: {
              xs: "27px",
              sm: 5,
              md: 2,
            },
            width: "100%",
            minWidth: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Slide in={inView} direction="up" timeout={1100}>
            <Box
              sx={{
                width: "100%",
                minWidth: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Typography
                ref={textRef}
                component="div"
                aria-label={BRAND}
                sx={{
                  fontSize: `${fontSize}px`,
                  fontWeight: 600,
                  lineHeight: 1.05,
                  letterSpacing: "-0.065em",
                  whiteSpace: "nowrap",
                  width: "max-content",
                  maxWidth: "100%",
                  pb: "0.08em",
                  userSelect: "none",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                {BRAND}
              </Typography>
            </Box>
          </Slide>
        </Box>

        {/* BOTTOM BAR */}
        <Fade
          in={inView}
          timeout={1200}
          style={{
            transitionDelay: inView ? "500ms" : "0ms",
          }}
        >
          <Box sx={{ flexShrink: 0, minWidth: 0 }}>
            <Divider
              sx={{
                borderColor: "rgba(255,255,255,0.14)",
              }}
            />

            <Stack
              direction={{
                xs: "column",
                md: "row",
              }}
              justifyContent="space-between"
              alignItems={{
                xs: "center",
                md: "center",
              }}
              spacing={{
                xs: "14px",
                md: 2,
              }}
              sx={{
                pt: {
                  xs: "16px",
                  sm: 3,
                  md: "clamp(16px, 3.5vh, 32px)",
                },
                textAlign: {
                  xs: "center",
                  md: "left",
                },
                minWidth: 0,
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: 23,
                    md: 28,
                  },
                  fontWeight: 500,
                  letterSpacing: "-0.06em",
                  lineHeight: 1,
                  color: "#fff",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {BRAND}
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: 12,
                    sm: 14,
                    md: 16,
                  },
                  lineHeight: 1.6,
                  letterSpacing: "-0.025em",
                  color: "rgba(255,255,255,0.68)",
                  textAlign: {
                    xs: "center",
                    md: "right",
                  },
                  maxWidth: {
                    xs: 330,
                    md: "none",
                  },
                  width: {
                    xs: "100%",
                    md: "auto",
                  },
                  overflowWrap: "anywhere",
                }}
              >
                © {new Date().getFullYear()} - All rights reserved,
                Developed by{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#fff",
                    fontWeight: 500,
                  }}
                >
                  ProxBytes
                </Box>
              </Typography>
            </Stack>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}