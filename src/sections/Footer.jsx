import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import {
  Box,
  Button,
  Container,
  Divider,
  Fade,
  Grid,
  Grow,
  Link,
  Slide,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";

import NorthEastIcon from "@mui/icons-material/NorthEast";

const BRAND = "ProxBytes";

const COLUMNS = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Challenges", href: "#challenges" },
      { label: "Bounties", href: "#rewards" },
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
];

/* Detect when the footer enters the viewport. */
function useInView(threshold = 0.15) {
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

/*
 * Automatically fit the wordmark to its available width.
 * Desktop measures ProxBytes.
 * Mobile measures the wider individual word, Bytes.
 */
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

        const isMobile = window.matchMedia("(max-width: 599px)").matches;

        const desktopText = element.querySelector(
          ".footer-wordmark-desktop"
        );

        const mobileWords = Array.from(
          element.querySelectorAll(".footer-wordmark-mobile")
        );

        element.style.fontSize = "100px";

        let naturalWidth = 0;

        if (isMobile && mobileWords.length) {
          naturalWidth = Math.max(
            ...mobileWords.map((word) => word.scrollWidth)
          );
        } else if (desktopText) {
          naturalWidth = desktopText.scrollWidth;
        }

        if (naturalWidth > 0) {
          setFontSize(
            Math.min((availableWidth / naturalWidth) * 100, 200)
          );
        }
      });
    };

    fit();

    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(wrap);

    if (document.fonts?.ready) {
      document.fonts.ready.then(fit);
    }

    window.addEventListener("resize", fit);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, []);

  return { wrapRef, textRef, fontSize };
}

const linkSx = {
  color: "rgba(255,255,255,0.8)",
  fontSize: { xs: 16, md: 18 },
  letterSpacing: "-0.02em",
  textDecoration: "none",
  width: "fit-content",
  position: "relative",
  transition: "color .3s ease, transform .3s ease",

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
};

export default function Footer() {
  const [footerRef, inView] = useInView();
  const { wrapRef, textRef, fontSize } = useFitText();

  return (
    <Box
      component="footer"
      ref={footerRef}
      sx={{
        bgcolor: "#050505",
        color: "#fff",
        pt: { xs: 2.5, sm: 5, md: 8.5 },
        pb: { xs: 2, sm: 3, md: 4 },
        overflow: "hidden",
        minHeight: { xs: "100vh", sm: "auto" },
        boxSizing: "border-box",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1440,
          px: { xs: 2, sm: 2.5, md: 3 },
        }}
      >
        {/* TOP: CONTACT CARD + NAVIGATION */}
        <Grid
          container
          spacing={{ xs: 3, sm: 5, md: 4 }}
          justifyContent="space-between"
          alignItems="start"
        >
          {/* CONTACT CARD */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Slide in={inView} direction="right" timeout={800}>
              <Box
                sx={{
                  bgcolor: "#dcc3ff",
                  color: "#0a0a0a",
                  borderRadius: "8px",

                  /* Reduced mobile padding and card height */
                  p: { xs: 2.5, sm: 3, md: 8 },
                  pt: { xs: 2.5, sm: 4, md: 6.5 },
                  pb: { xs: 2.5, sm: 3, md: 8 },

                  minHeight: { md: 364 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: 32, sm: 40, md: 56 },
                    fontWeight: 500,
                    lineHeight: 1.1,
                    letterSpacing: "-0.05em",
                  }}
                >
                  Let’s grow together
                </Typography>

                <Typography
                  sx={{
                    mt: { xs: 1.5, sm: 2.5 },
                    maxWidth: 540,
                    fontSize: { xs: 15, sm: 18 },
                    lineHeight: 1.6,
                    letterSpacing: "-0.02em",
                    color: "rgba(10,10,10,0.65)",
                  }}
                >
                  We believe in more than just delivering services – we
                  believe in building long-term partnerships that help
                  students grow through practical experience.
                </Typography>

                <Zoom
                  in={inView}
                  timeout={900}
                  style={{
                    transitionDelay: inView ? "500ms" : "0ms",
                  }}
                >
                  <Button
                    href="#partners"
                    disableElevation
                    endIcon={
                      <NorthEastIcon
                        className="cta-arrow"
                        sx={{
                          fontSize: "20px !important",
                          transition: "transform .3s ease",
                        }}
                      />
                    }
                    sx={{
                      mt: { xs: 2.5, sm: 4, md: 6 },
                      bgcolor: "#fff",
                      color: "#0a0a0a",
                      textTransform: "none",
                      fontSize: { xs: 15, sm: 18 },
                      fontWeight: 500,
                      letterSpacing: "-0.03em",
                      borderRadius: "6px",
                      px: { xs: 2.5, sm: 4.2 },
                      py: { xs: 1.3, sm: 2 },
                      gap: 1,
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
          </Grid>

          {/* NAVIGATION COLUMNS */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={{ xs: 3, sm: 4, md: 2 }}>
              {COLUMNS.map((column, columnIndex) => (
                <Grid
                  size={{ xs: 6, sm: 4 }}
                  key={column.title}
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
                        fontSize: { xs: 17, sm: 20 },
                        fontWeight: 500,
                        letterSpacing: "-0.03em",
                        mb: { xs: 2, sm: 3 },
                      }}
                    >
                      {column.title}
                    </Typography>
                  </Fade>

                  <Stack spacing={{ xs: 1.5, sm: 2.2 }}>
                    {column.links.map((link, linkIndex) => (
                      <Grow
                        key={link.label}
                        in={inView}
                        timeout={600}
                        style={{
                          transformOrigin: "left center",
                          transitionDelay: inView
                            ? `${
                                300 +
                                columnIndex * 150 +
                                linkIndex * 80
                              }ms`
                            : "0ms",
                        }}
                      >
                        <Box>
                          <Link
                            href={link.href}
                            underline="none"
                            sx={linkSx}
                          >
                            {link.label}
                          </Link>
                        </Box>
                      </Grow>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* GIANT CENTERED PROXBYTES WORDMARK */}
        <Box
          ref={wrapRef}
          sx={{
            mt: { xs: 3, sm: 5, md: 5 },
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <Slide
            in={inView}
            direction="up"
            timeout={1100}
            mountOnEnter
          >
            <Box
              sx={{
                width: "100%",
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
                  letterSpacing: "-0.06em",
                  whiteSpace: "nowrap",
                  width: "max-content",
                  maxWidth: "100%",
                  pb: "0.08em",
                  userSelect: "none",
                  textAlign: "center",

                  "& .footer-wordmark-desktop": {
                    display: { xs: "none", sm: "inline" },
                  },

                  "& .footer-wordmark-mobile": {
                    display: { xs: "block", sm: "none" },
                    fontSize: "1em",
                    lineHeight: 0.9,
                    whiteSpace: "nowrap",
                  },
                }}
              >
                <Box
                  component="span"
                  className="footer-wordmark-desktop"
                >
                  {BRAND}
                </Box>

                <Box
                  component="span"
                  className="footer-wordmark-mobile"
                >
                  Prox
                </Box>

                <Box
                  component="span"
                  className="footer-wordmark-mobile"
                >
                  Bytes
                </Box>
              </Typography>
            </Box>
          </Slide>
        </Box>

        {/* BOTTOM COPYRIGHT BAR */}
        <Fade
          in={inView}
          timeout={1200}
          style={{
            transitionDelay: inView ? "800ms" : "0ms",
          }}
        >
          <Box sx={{ mt: { xs: 2.5, sm: 4, md: 5 } }}>
            <Divider
              sx={{
                borderColor: "rgba(255,255,255,0.14)",
              }}
            />

            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", md: "center" }}
              spacing={{ xs: 1.5, md: 2 }}
              sx={{ pt: { xs: 2.5, sm: 4 } }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 24, sm: 32 },
                  fontWeight: 600,
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                }}
              >
                {BRAND}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 13, sm: 18 },
                  lineHeight: 1.6,
                  letterSpacing: "-0.02em",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                © {new Date().getFullYear()} - All rights reserved,
                Developed by{" "}
                <Box
                  component="span"
                  sx={{ color: "#fff" }}
                >
                  {BRAND}
                </Box>
              </Typography>
            </Stack>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}