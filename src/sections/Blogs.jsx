import React from "react";
import { Box, Typography,Button  } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import BlogCard from "../components/BlogCard";
import SectionTitle from "../components/SectionTitle";
import { newestFirstBlogs } from "../data/blogs";

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
        className="content-container"
        sx={{
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
            <SectionTitle
              eyebrow="Ideas and inspiration"
              prominent
              title={
                <>
                Explore ideas.
                <br />
                <Box
                  component="span"
                  sx={{ color: "#a56af5" }}
                >
                  Build what matters.
                </Box>
                </>
              }
              description={
                <>
                Insights on coding, practical learning, contests,
                and turning technical skills into opportunities.
                </>
              }
            />
          </Box>

             <Button
        component="a"
        href="/blog"
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
          {newestFirstBlogs.slice(0, 3).map((blog, index) => (
            <BlogCard key={blog.title} blog={blog} index={index} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}