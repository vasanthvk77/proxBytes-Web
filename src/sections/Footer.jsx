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
      { label: "Home 01", href: "#home-1" },
      { label: "Home 02", href: "#home-2" },
      { label: "About Us", href: "#about" },
      { label: "Project", href: "#project" },
      { label: "Blog", href: "#blog" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Pricing", href: "#pricing" },
      { label: "Services", href: "#services" },
      { label: "Career", href: "#career" },
      { label: "Blog Single", href: "#blog-single" },
      { label: "Project Single", href: "#project-single" },
      { label: "Services Single", href: "#services-single" },
    ],
  },
  {
    title: "Utility Pages",
    links: [
      { label: "Style Guide", href: "#style-guide" },
      { label: "Licenses", href: "#licenses" },
      { label: "Changelog", href: "#changelog" },
      { label: "404", href: "#404" },
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

/* Fit the wordmark to its container without a fixed font size. */
function useFitText(text) {
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

        const naturalWidth = element.scrollWidth;

        if (naturalWidth > 0) {
          setFontSize((availableWidth / naturalWidth) * 100);
        }
      });
    };

    fit();

    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(wrap);

    if (document.fonts?.ready) {
      document.fonts.ready.then(fit);
    }

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, [text]);

  return { wrapRef, textRef, fontSize };
}

const linkSx = {
  color: "rgba(255,255,255,0.8)",
  fontSize: 18,
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
  const { wrapRef, textRef, fontSize } = useFitText(BRAND);

  return (
    <Box
      component="footer"
      ref={footerRef}
      sx={{
        bgcolor: "#050505",
        color: "#fff",
        pt: { xs: 5, md: 8.5 },
        pb: { xs: 3, md: 4 },
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1440,
          px: { xs: 2.5, md: 3 },
        }}
      >
        {/* TOP: CONTACT CARD + NAVIGATION */}
        <Grid
          container
          spacing={{ xs: 5, md: 4 }}
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
                  p: { xs: 3, md: 8 },
                  pt: { xs: 4, md: 6.5 },
                  minHeight: { md: 364 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: 40, md: 56 },
                    fontWeight: 500,
                    lineHeight: 1.1,
                    letterSpacing: "-0.05em",
                  }}
                >
                  Let’s grow together
                </Typography>

                <Typography
                  sx={{
                    mt: 2.5,
                    maxWidth: 540,
                    fontSize: 18,
                    lineHeight: 1.7,
                    letterSpacing: "-0.02em",
                    color: "rgba(10,10,10,0.65)",
                  }}
                >
                  We believe in more than just delivering services – we believe
                  in building long-term partnerships that help students grow
                  through practical experience.
                </Typography>

                <Zoom
                  in={inView}
                  timeout={900}
                  style={{
                    transitionDelay: inView ? "500ms" : "0ms",
                  }}
                >
                  <Button
                    href="#contact"
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
                      mt: { xs: 4, md: 6 },
                      bgcolor: "#fff",
                      color: "#0a0a0a",
                      textTransform: "none",
                      fontSize: 18,
                      fontWeight: 500,
                      letterSpacing: "-0.03em",
                      borderRadius: "6px",
                      px: 4.2,
                      py: 2,
                      gap: 2,
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
                    Let’s Talk
                  </Button>
                </Zoom>
              </Box>
            </Slide>
          </Grid>

          {/* THREE NAVIGATION COLUMNS */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={{ xs: 4, md: 2 }}>
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
                        fontSize: 20,
                        fontWeight: 500,
                        letterSpacing: "-0.03em",
                        mb: 3,
                      }}
                    >
                      {column.title}
                    </Typography>
                  </Fade>

                  <Stack spacing={2.2}>
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
            mt: { xs: 5, md: 5 },
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
                  fontSize: "200px",
                  fontWeight: 600,
                  lineHeight: 1.05,
                  letterSpacing: "-0.06em",
                  whiteSpace: "nowrap",
                  width: "max-content",
                  maxWidth: "100%",
                  pb: "0.08em",
                  userSelect: "none",
                  textAlign: "center",
                }}
              >
                {BRAND}
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
          <Box sx={{ mt: { xs: 4, md: 5 } }}>
            <Divider
              sx={{
                borderColor: "rgba(255,255,255,0.14)",
              }}
            />

            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", md: "center" }}
              spacing={2}
              sx={{ pt: 4 }}
            >
              <Typography
                sx={{
                  fontSize: 32,
                  fontWeight: 600,
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                }}
              >
                {BRAND}
              </Typography>

              <Typography
                sx={{
                  fontSize: 18,
                  letterSpacing: "-0.02em",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                © {new Date().getFullYear()} - All rights reserved, Developed
                by{" "}
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