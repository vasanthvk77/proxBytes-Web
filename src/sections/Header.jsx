import React, { useEffect, useRef, useState } from "react";

import {
  Box,
  Drawer,
  IconButton,
  Typography 
} from "@mui/material";

import {
  Menu,
  Close,
  KeyboardArrowDown,
  ShoppingBagOutlined,
  ArrowOutward,
} from "@mui/icons-material";

import { AnimatePresence, motion } from "framer-motion";


const navigation = [
  {
    label: "Home",
    dropdown: false,
    id: "home",
  },
  {
    label: "About",
    id: "about",
  },
  {
    label: "Our Impact",
    id: "community",
  },
  // {
  //   label: "How It Works",
  //   id: "how-it-works",
  // },
  // {
  //   label: "Bounties",
  //   id: "rewards",
  // },
  // {
  //   label: "For Colleges",
  //   dropdown: false,
  //   id: "partners",
  // },
  {
    label: "Blogs",
    dropdown: false,
    id: "blogs",
  },
];


export default function Header({ blogPage = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pastHome, setPastHome] = useState(false);
  const [atPageTop, setAtPageTop] = useState(true);
  const cancelScrollRef = useRef(null);
  const pendingNavigationRef = useRef(null);

  useEffect(() => {
    const updatePageTop = () => setAtPageTop(window.scrollY <= 0);
    updatePageTop();
    window.addEventListener("scroll", updatePageTop, { passive: true });

    const homeSection = document.getElementById("home");
    if (!homeSection) {
      return () => window.removeEventListener("scroll", updatePageTop);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setPastHome(!entry.isIntersecting),
      {
        rootMargin: "-88px 0px 0px 0px",
      }
    );

    observer.observe(homeSection);
    return () => {
      window.removeEventListener("scroll", updatePageTop);
      observer.disconnect();
    };
  }, []);


  /* =========================================================
     NAVIGATION
  ========================================================= */

  const scrollToSection = (id) => {
    let target = 0;

    if (id !== "home") {
      const section = document.getElementById(id);
      if (!section) return;
      target = section.getBoundingClientRect().top + window.scrollY;
    }

    cancelScrollRef.current?.();

    const scrollingElement = document.scrollingElement;
    if (!scrollingElement) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollingElement.scrollTop = target;
      return;
    }

    const start = window.scrollY;
    const distance = target - start;
    const viewportHeight = window.innerHeight || 1;
    const duration = Math.min(
      5000,
      Math.max(1200, (Math.abs(distance) / viewportHeight) * 1200)
    );
    let frame;
    let active = true;
    let startTime;

    const cleanup = () => {
      if (!active) return;
      active = false;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("wheel", interruptScroll);
      window.removeEventListener("touchstart", interruptScroll);
      window.removeEventListener("keydown", interruptScroll);
      cancelScrollRef.current = null;
    };

    const interruptScroll = () => cleanup();

    window.addEventListener("wheel", interruptScroll, { passive: true });
    window.addEventListener("touchstart", interruptScroll, { passive: true });
    window.addEventListener("keydown", interruptScroll);
    cancelScrollRef.current = cleanup;

    const animateScroll = (timestamp) => {
      if (!active) return;

      if (startTime === undefined) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      scrollingElement.scrollTop = start + distance * easedProgress;

      if (progress < 1) {
        frame = window.requestAnimationFrame(animateScroll);
      } else {
        cleanup();
      }
    };

    frame = window.requestAnimationFrame(animateScroll);
  };

  const navigateTo = (id) => {
    if (mobileOpen) {
      pendingNavigationRef.current = id;
      setMobileOpen(false);
      return;
    }

    if (blogPage) {
      if (id === "blogs") {
        scrollToSection(id);
      } else {
        window.location.href = `/#${id}`;
      }
      return;
    }

    if (id === "blogs") {
      window.location.href = "/blog";
      return;
    }

    scrollToSection(id);
  };

  const handleMobileDrawerExited = () => {
    const id = pendingNavigationRef.current;
    if (id === null) return;

    pendingNavigationRef.current = null;
    window.requestAnimationFrame(() => navigateTo(id));
  };


  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <Box
        component="header"
        sx={{
          position: "absolute",

          top: 0,
          left: 0,
          right: 0,

          zIndex: mobileOpen ? 1301 : 1000,

          height: {
            xs: "64px",
            sm: "72px",
            md: "88px",
          },

          background:
            mobileOpen || pastHome
              ? "rgba(79, 46, 156, 0.46)"
              : "transparent",
          backdropFilter:
            mobileOpen || pastHome ? "blur(12px)" : "none",
          WebkitBackdropFilter:
            mobileOpen || pastHome ? "blur(12px)" : "none",
          opacity:
            atPageTop || pastHome || mobileOpen ? 1 : 0,
          pointerEvents:
            atPageTop || pastHome || mobileOpen ? "auto" : "none",
          transform:
            atPageTop || pastHome || mobileOpen
              ? "translateY(0)"
              : "translateY(-8px)",
          transition:
            "opacity 0.3s ease, transform 0.3s ease, background-color 0.3s ease, backdrop-filter 0.3s ease",

          color: "#ffffff",
        }}
      >

        {/* =================================================
            HEADER CONTAINER

            Desktop:
            1fr | centered nav | 1fr

            Mobile:
            auto | spacer | auto
        ================================================== */}

        <Box
          className="content-container"
          sx={{
            height: "100%",

            display: "grid",

            gridTemplateColumns: {
              xs: "auto 1fr auto",
              md: "1fr auto 1fr",
            },

            alignItems: "center",

            columnGap: {
              xs: "10px",
              md: "30px",
            },
          }}
        >

          {/* =================================================
              LOGO
          ================================================== */}

          <Box
            component="button"
            type="button"
            onClick={() => navigateTo("home")}
            sx={{
              gridColumn: 1,

              justifySelf: "start",

              border: 0,

              outline: 0,

              background: "transparent",

              color: "#ffffff",

              cursor: "pointer",

              padding: 0,

              margin: 0,

              fontFamily:
                "Manrope, sans-serif",

              fontSize: {
                xs: "22px",
                sm: "24px",
                md: "29px",
              },

              fontWeight: 500,

              letterSpacing: "0.1em",

              lineHeight: 1,

              whiteSpace: "nowrap",

              transition:
                "opacity .25s ease",

              "&:hover": {
                opacity: 0.7,
              },
            }}
          >
           PROXBYTES
          </Box>


          {/* =================================================
              DESKTOP NAVIGATION

              This remains mathematically centered
              because the parent uses:

              1fr | auto | 1fr
          ================================================== */}

          <Box
            sx={{
              gridColumn: 2,

              display: {
                xs: "none",
                md: "flex",
              },

              alignItems: "center",

              justifyContent: "center",

              justifySelf: "center",

              gap: {
                md: "30px",
                lg: "42px",
              },
            }}
          >

            {navigation.map((item) => (
              <Box
                key={item.label}
                sx={{
                  display: "flex",

                  alignItems: "center",

                  position: "relative",
                }}
              >

                <Box
                  component="button"
                  type="button"
                  onClick={() => {
                    if (!item.dropdown) {
                      navigateTo(item.id);
                    }
                  }}
                  sx={{
                    border: 0,

                    outline: 0,

                    background:
                      "transparent",

                    color:
                      "rgba(255,255,255,.92)",

                    cursor: item.dropdown
                      ? "default"
                      : "pointer",

                    padding: 0,

                    margin: 0,

                    display: "flex",

                    alignItems: "center",

                    gap: "4px",

                    fontFamily:
                      "Manrope, sans-serif",

                    fontSize: {
                      md: "14px",
                      lg: "15px",
                    },

                    fontWeight: 500,

                    letterSpacing:
                      "-0.025em",

                    lineHeight: 1,

                    whiteSpace:
                      "nowrap",

                    transition:
                      "opacity .25s ease",

                    "&:hover": {
                      opacity:
                        item.dropdown
                          ? 1
                          : 0.6,
                    },
                  }}
                >

                  {item.label}

                  {item.dropdown && (
                    <KeyboardArrowDown
                      sx={{
                        fontSize:
                          "17px",

                        marginTop:
                          "1px",
                      }}
                    />
                  )}

                </Box>

              </Box>
            ))}

          </Box>


          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <Box
            sx={{
              gridColumn: 3,

              justifySelf: "end",

              display: "flex",

              alignItems: "center",

              gap: {
                xs: "8px",
                sm: "14px",
                md: "22px",
              },
            }}
          >

            <Box
              component="button"
              type="button"
              className="dark-work-linkk"
              onClick={() => navigateTo("partners")}
              sx={{
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  py: 0.75,
  bgcolor: "transparent",
  border: 0,
  color: "#fff",
  cursor: "pointer",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    height: "1px",
    width: "100%",
  },
  "&::before": { bgcolor: "rgba(255,255,255,.25)" },
  "&::after": {
    bgcolor: "#fff",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform .6s cubic-bezier(.22,1,.36,1)",
  },
  "&:hover::after": { transform: "scaleX(1)" },
  "& > span": {
    display: "inline-flex",
    transition: "transform .45s cubic-bezier(.22,1,.36,1)",
  },
  "&:hover > span": { transform: "translate(5px,-5px)" },
}}
            >
              Work with us
              <Box component="span" >
                <ArrowOutward />
              </Box>
            </Box>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <IconButton
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMobileOpen((open) => !open)}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },

                color: "#ffffff",

                padding: 0,

                marginLeft: "3px",

                "&:hover": {
                  background:
                    "transparent",
                },
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -35, scale: 0.85 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 35, scale: 0.85 }}
                  transition={{ duration: 0.18, ease: "easeInOut" }}
                  style={{ display: "flex" }}
                >
                  {mobileOpen ? (
                    <Close
                      sx={{
                        fontSize: {
                          xs: "25px",
                          sm: "27px",
                        },
                      }}
                    />
                  ) : (
                    <Menu
                      sx={{
                        fontSize: {
                          xs: "25px",
                          sm: "27px",
                        },
                      }}
                    />
                  )}
                </motion.span>
              </AnimatePresence>
            </IconButton>

          </Box>

        </Box>

      </Box>


      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

<Drawer
  anchor="right"
  open={mobileOpen}
  onClose={() => setMobileOpen(false)}
  ModalProps={{
    onTransitionExited: handleMobileDrawerExited,
  }}
  PaperProps={{
    sx: {
      width: {
        xs: "calc(100% - 32px)",
        sm: "350px",
      },
      maxWidth: "350px",
      boxSizing: "border-box",

      background:
        "linear-gradient(155deg, #100d16 0%, #050505 45%, #09070d 100%)",

      color: "#ffffff",

      border: "1px solid rgba(255,255,255,0.08)",
      borderTop: "none",
      borderRadius: "0 0 14px 14px",

      top: {
        xs: "64px",
        sm: "72px",
      },

      height: "auto",
      maxHeight: {
        xs: "calc(100dvh - 76px)",
        sm: "calc(100dvh - 84px)",
      },
      overflowY: "auto",

      boxShadow:
        "0 24px 65px rgba(0,0,0,0.55)",

      // Subtle purple accent without changing the theme
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "3px",
        height: "100%",
        background:
          "linear-gradient(180deg, #542b80 0%, rgba(84,43,128,0.12) 75%, transparent 100%)",
        pointerEvents: "none",
      },

      "&::-webkit-scrollbar": {
        width: "4px",
      },

      "&::-webkit-scrollbar-thumb": {
        background: "rgba(255,255,255,0.18)",
        borderRadius: "10px",
      },
    },
  }}
>
  <Box
    sx={{
      px: {
        xs: 2.5,
        sm: 3,
      },
      pt: {
        xs: 1.25,
        sm: 1.5,
      },
      pb: 2,
      position: "relative",
    }}
  >
    {/* Mobile Navigation */}
    <Box
      component="nav"
      id="mobile-navigation"
      aria-label="Mobile navigation"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
      }}
    >
      {navigation.map((item, index) => (
        <motion.button
          key={item.label}
          type="button"
          whileHover={{
            x: 3,
          }}
          whileTap={{
            scale: 0.985,
          }}
          onClick={() => navigateTo(item.id)}
          style={{
            width: "100%",
            minHeight: "46px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",

            background: "transparent",
            color: "#ffffff",
            border: "1px solid transparent",
            borderRadius: "7px",

            padding: "11px 12px",

            cursor: "pointer",
            fontFamily: "Manrope, sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            lineHeight: 1.5,
            textAlign: "left",

            transition:
              "background 0.2s ease, border-color 0.2s ease",
          }}
          onMouseEnter={(event) => {
            event.currentTarget.style.background =
              "rgba(84,43,128,0.18)";

            event.currentTarget.style.borderColor =
              "rgba(139,92,190,0.18)";
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.background =
              "transparent";

            event.currentTarget.style.borderColor =
              "transparent";
          }}
        >
          <Box
            component="span"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              minWidth: 0,
            }}
          >
            {/* Navigation Number */}
            

            {/* Navigation Label */}
            <Box
              component="span"
              sx={{
                color: "#f5f3f7",
                transition: "color 0.2s ease",
              }}
            >
              {item.label}
            </Box>
          </Box>

          {/* Dropdown Indicator */}
          {item.dropdown ? (
            <KeyboardArrowDown
              sx={{
                fontSize: 18,
                color: "rgba(255,255,255,0.6)",
                flexShrink: 0,
              }}
            />
          ) : (
            <Box
              component="span"
              aria-hidden="true"
              sx={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                bgcolor: "rgba(139,92,190,0.7)",
                opacity: 0,
                flexShrink: 0,
                transition: "opacity 0.2s ease",

                "button:hover &": {
                  opacity: 1,
                },
              }}
            />
          )}
        </motion.button>
      ))}
    </Box>

    {/* Bottom Accent */}
    <Box
      sx={{
        mt: 2,
        pt: 2,
        borderTop: "1px solid rgba(255,255,255,0.09)",
      }}
    >
      <Typography
        component="span"
        sx={{
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: ".04em",
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.45)",
        }}
      >
        Challenges. Real skills. Real rewards.
      </Typography>
    </Box>

  </Box>
</Drawer>
    </>
  );
}