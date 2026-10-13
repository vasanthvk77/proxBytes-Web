import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Growth from "./sections/Growth";
import Works from "./sections/Works";
import PlatformContent from "./sections/PlatformContent";
import Blogs from "./sections/Blogs";
import Footer from "./sections/Footer";
import Testimonials from "./sections/Testimonials";
import BlogPage from "./sections/BlogPage";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const isBlogPage = window.location.pathname.replace(/\/+$/, "") === "/blog";

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box className="site">
      <motion.div
        className="page-loader"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: loaded ? 0 : 1 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      />
      <Header blogPage={isBlogPage} />
      {isBlogPage ? (
        <main>
          <BlogPage />
        </main>
      ) : (
        <main>
          <Hero />
          <About />
          <Growth />
          <Works />
          {/* <PlatformContent /> */}
          <Testimonials />
          <Blogs />
        </main>
      )}
      <Footer blogPage={isBlogPage} />
    </Box>
  );
}