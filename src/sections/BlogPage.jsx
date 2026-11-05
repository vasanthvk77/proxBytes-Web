import React, { useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import BlogCard from "../components/BlogCard";
import { newestFirstBlogs } from "../data/blogs";
import Hero from "./Hero";

const PAGE_SIZE = 6;

export default function BlogPage() {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(newestFirstBlogs.length / PAGE_SIZE);
  const visibleBlogs = newestFirstBlogs.slice(
    page * PAGE_SIZE,
    (page + 1) * PAGE_SIZE
  );

  const changePage = (nextPage) => {
    setPage(nextPage);
    document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero
        eyebrow="The ProxBytes Blog"
        bringBadgesCloser
        title={
          <>
            Discover insights.
            <br />
            On our blog.
          </>
        }
        description={
          <>
            Stories, advice, and inspiration for learning by doing, solving real
            problems, and creating opportunities with technology.
          </>
        }
      />

      <Box
        component="section"
        id="blogs"
        sx={{
          bgcolor: "#fff",
          color: "#111",
          px: 0,
          py: { xs: 8, md: 12 },
        }}
      >
        <Box className="content-container">
          <Box
            sx={{
              mb: { xs: 4, md: 6 },
              display: "flex",
              alignItems: { xs: "flex-start", md: "flex-end" },
              justifyContent: "space-between",
              gap: 3,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box>
              <Typography
                component="p"
                sx={{
                  mb: 1.5,
                  color: "#76648e",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                }}
              >
                Ideas and inspiration
              </Typography>
              <Typography
                component="h2"
                sx={{
                  m: 0,
                  fontSize: "clamp(34px, 5vw, 58px)",
                  fontWeight: 500,
                  lineHeight: 1.08,
                  letterSpacing: "-.065em",
                }}
              >
                Explore all stories
              </Typography>
            </Box>
            <Typography sx={{ color: "#686868", fontSize: 14 }}>
              {newestFirstBlogs.length} articles
            </Typography>
          </Box>

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
            {visibleBlogs.map((blog, index) => (
              <BlogCard
                key={blog.title}
                blog={blog}
                index={index}
              />
            ))}
          </Box>

          {pageCount > 1 && (
            <Box
              component="nav"
              aria-label="Blog pagination"
              sx={{
                mt: { xs: 4, md: 5 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Button
                aria-label="Previous page"
                onClick={() => changePage(page - 1)}
                disabled={page === 0}
                sx={{
                  minWidth: 44,
                  width: 44,
                  height: 44,
                  border: "1px solid #dedbe2",
                  borderRadius: "50%",
                  color: "#111",
                }}
              >
                <ArrowBack fontSize="small" />
              </Button>
              <Typography
                aria-live="polite"
                sx={{ minWidth: 74, textAlign: "center", fontSize: 14 }}
              >
                {page + 1} / {pageCount}
              </Typography>
              <Button
                aria-label="Next page"
                onClick={() => changePage(page + 1)}
                disabled={page === pageCount - 1}
                sx={{
                  minWidth: 44,
                  width: 44,
                  height: 44,
                  border: "1px solid #dedbe2",
                  borderRadius: "50%",
                  color: "#111",
                }}
              >
                <ArrowForward fontSize="small" />
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
