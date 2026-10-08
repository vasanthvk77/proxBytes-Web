import React, { useState } from "react";

import {
  Box,
  Drawer,
  IconButton,
} from "@mui/material";

import {
  Menu,
  KeyboardArrowDown,
  ShoppingBagOutlined,
  ArrowOutward,
} from "@mui/icons-material";

import { motion } from "framer-motion";


const navigation = [
  {
    label: "Home",
    dropdown: true,
    id: "home",
  },
  {
    label: "About",
    id: "about",
  },
  {
    label: "Project",
    id: "works",
  },
  {
    label: "Pricing",
    id: "pricing",
  },
  {
    label: "Services",
    id: "services",
  },
  {
    label: "Pages",
    dropdown: true,
    id: "pages",
  },
];


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);


  /* =========================================================
     NAVIGATION
  ========================================================= */

  const navigateTo = (id) => {
    setMobileOpen(false);

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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

          zIndex: 1000,

          height: {
            xs: "64px",
            sm: "72px",
            md: "88px",
          },

          background: "transparent",

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
          sx={{
            width: {
              xs: "calc(100% - 28px)",
              sm: "calc(100% - 40px)",
              md: "calc(100% - 80px)",
            },

            maxWidth: "1620px",

            height: "100%",

            margin: "0 auto",

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

              letterSpacing: "-0.075em",

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

            {/* =================================================
                SHOPPING BAG
            ================================================== */}

            {/* <Box
              component="button"
              type="button"
              aria-label="Shopping bag"
              sx={{
                position: "relative",

                border: 0,

                outline: 0,

                background:
                  "transparent",

                color: "#ffffff",

                cursor: "pointer",

                padding: 0,

                margin: 0,

                width: {
                  xs: "27px",
                  md: "32px",
                },

                height: {
                  xs: "27px",
                  md: "32px",
                },

                display: "flex",

                alignItems: "center",

                justifyContent:
                  "center",

                transition:
                  "opacity .25s ease",

                "&:hover": {
                  opacity: 0.65,
                },
              }}
            >

              <ShoppingBagOutlined
                sx={{
                  fontSize: {
                    xs: "22px",
                    md: "27px",
                  },
                }}
              />

{/* 
              CART COUNT */}
{/* 
              <Box
                sx={{
                  position: "absolute",

                  top: {
                    xs: "-7px",
                    md: "-6px",
                  },

                  right: {
                    xs: "-7px",
                    md: "-6px",
                  },

                  width: {
                    xs: "17px",
                    md: "21px",
                  },

                  height: {
                    xs: "17px",
                    md: "21px",
                  },

                  borderRadius: "50%",

                  background: "#ffffff",

                  color: "#111111",

                  display: "flex",

                  alignItems: "center",

                  justifyContent:
                    "center",

                  fontFamily:
                    "Manrope, sans-serif",

                  fontSize: {
                    xs: "8px",
                    md: "9px",
                  },

                  fontWeight: 700,

                  lineHeight: 1,
                }}
              >
                0
              </Box> */}

            {/* </Box> */} 

            {/* =================================================
                WORK WITH US
            ================================================== */}

            <Box
              component="button"
              type="button"
              onClick={() =>
                navigateTo("cta")
              }
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                alignItems: "center",

                gap: "18px",

                border: 0,

                borderBottom:
                  "1px solid rgba(255,255,255,.4)",

                background:
                  "transparent",

                color: "#ffffff",

                cursor: "pointer",

                padding:
                  "0 0 9px 0",

                margin: 0,

                fontFamily:
                  "Manrope, sans-serif",

                fontSize: "14px",

                fontWeight: 600,

                whiteSpace:
                  "nowrap",

                transition:
                  "opacity .25s ease, border-color .25s ease",

                "&:hover": {
                  opacity: 0.75,

                  borderColor:
                    "#ffffff",
                },

                "&:hover .header-arrow": {
                  transform:
                    "translate(2px, -2px)",
                },
              }}
            >

              <span>
                Work with us
              </span>

              <Box
                className="header-arrow"
                sx={{
                  width: "31px",

                  height: "31px",

                  display: "flex",

                  alignItems: "center",

                  justifyContent:
                    "center",

                  background:
                    "#ffffff",

                  color: "#111111",

                  transition:
                    "transform .3s ease",
                }}
              >

                <ArrowOutward
                  sx={{
                    fontSize:
                      "18px",
                  }}
                />

              </Box>

            </Box>


            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <IconButton
              aria-label="Open menu"
              onClick={() =>
                setMobileOpen(true)
              }
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

              <Menu
                sx={{
                  fontSize: {
                    xs: "25px",
                    sm: "27px",
                  },
                }}
              />

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

        onClose={() =>
          setMobileOpen(false)
        }

        PaperProps={{
          sx: {
            width: {
              xs: "calc(100% - 28px)",
              sm: "350px",
            },

            maxWidth: "350px",

            background:
              "#050505",

            color: "#ffffff",

            borderRadius:
              "0 0 14px 14px",

            top: {
              xs: "44px",
              sm: "52px",
            },

            height: "auto",

            maxHeight:
              "calc(100vh - 55px)",

            boxShadow:
              "0 25px 80px rgba(0,0,0,.55)",
          },
        }}
      >

        <Box
          sx={{
            px: {
              xs: 2,
              sm: 2.5,
            },

            py: {
              xs: 1,
              sm: 1.5,
            },
          }}
        >

          {/* =============================================
              MOBILE NAVIGATION
          ============================================== */}

          {navigation.map((item) => (

            <motion.button
              key={item.label}

              type="button"

              whileHover={{
                x: 5,
              }}

              onClick={() =>
                navigateTo(item.id)
              }

              style={{
                width: "100%",

                display: "flex",

                alignItems: "center",

                justifyContent:
                  "space-between",

                background:
                  "transparent",

                color: "#ffffff",

                border: 0,

                padding:
                  "12px 0",

                cursor: "pointer",

                fontFamily:
                  "Manrope, sans-serif",

                fontSize: "14px",

                fontWeight: 500,

                lineHeight: 1.3,

                textAlign: "left",
              }}
            >

              <span>
                {item.label}
              </span>

              {item.dropdown && (
                <KeyboardArrowDown
                  sx={{
                    fontSize:
                      "16px",
                  }}
                />
              )}

            </motion.button>

          ))}

        </Box>

      </Drawer>
    </>
  );
}