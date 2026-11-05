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
import TermsAndConditions from "./sections/TermsAndCondiotions";
import PrivacyPolicy from "./sections/PrivacyPolicy";

function getNormalizedPath() {
  return window.location.pathname.replace(/\/+$/, "").toLowerCase();
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [currentPath, setCurrentPath] = useState(getNormalizedPath());

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 350);
    const handlePopState = () => setCurrentPath(getNormalizedPath());
    window.addEventListener("popstate", handlePopState);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const isBlogPage = currentPath === "/blog";
  const isTermsPage = currentPath === "/terms" || currentPath === "/terms-and-conditions";
  const isPrivacyPage = currentPath === "/privacy" || currentPath === "/privacy-policy";
  const isSubPage = isBlogPage || isTermsPage || isPrivacyPage;

  return (
    <Box className="site">
      <motion.div
        className="page-loader"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: loaded ? 0 : 1 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      />
      <Header blogPage={isSubPage} />
      {isTermsPage ? (
        <main>
          <TermsAndConditions />
        </main>
      ) : isPrivacyPage ? (
        <main>
          <PrivacyPolicy />
        </main>
      ) : isBlogPage ? (
        <main>
          <BlogPage />
        </main>
      ) : (
        <main>
          <Hero />
          <About />
          <Growth />
          <Works />
          <PlatformContent />
          <Testimonials />
          <Blogs />
        </main>
      )}
      <Footer blogPage={isSubPage} />
    </Box>
  );
}
