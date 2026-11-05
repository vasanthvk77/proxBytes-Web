// import React from "react";
// import { ArrowOutward } from "@mui/icons-material";
// import { Box, Typography } from "@mui/material";
// import { motion } from "framer-motion";
// import Reveal from "./Reveal";

// const ease = [0.76, 0, 0.24, 1];

// export default function BlogCard({ blog, index = 0, href = "/blog" }) {
//   return (
//     <Reveal delay={index * 0.1}>
//       <Box
//         component={motion.article}
//         initial="rest"
//         animate="rest"
//         whileHover="hover"
//         sx={{
//           position: "relative",
//           isolation: "isolate",
//           minWidth: 0,
//           height: { xs: 350, sm: 370, md: 300 },
//           overflow: "hidden",
//           borderRadius: "7px",
//           border: "1px solid #e4e2e8",
//           bgcolor: blog.color,
//           cursor: "pointer",
//           "&:focus-within .blog-title": {
//             color: "#ffffff",
//           },
//         }}
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             inset: 0,
//             zIndex: 0,
//             overflow: "hidden",
//           }}
//         >
//           <motion.img
//             src={blog.image}
//             alt=""
//             loading="lazy"
//             variants={{
//               rest: { scale: 1.12 },
//               hover: { scale: 1 },
//             }}
//             transition={{
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             style={{
//               position: "absolute",
//               inset: 0,
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               display: "block",
//             }}
//           />
//           <motion.div
//             variants={{
//               rest: { opacity: 0 },
//               hover: { opacity: 0.32 },
//             }}
//             transition={{ duration: 0.45, ease: "easeOut" }}
//             style={{
//               position: "absolute",
//               inset: 0,
//               background: "#000000",
//               pointerEvents: "none",
//             }}
//           />
//         </Box>

//         <motion.div
//           variants={{
//             rest: { y: "0%" },
//             hover: { y: "-100%" },
//           }}
//           transition={{ duration: 0.65, ease }}
//           style={{
//             position: "absolute",
//             inset: 0,
//             zIndex: 1,
//             backgroundColor: blog.color,
//             pointerEvents: "none",
//             willChange: "transform",
//           }}
//         />

//         <Box
//           sx={{
//             position: "relative",
//             zIndex: 2,
//             height: "100%",
//             p: { xs: 2.5, md: 3 },
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             color: "#111111",
//             transition: "color .35s ease",
//             ".blog-title, .blog-date, .blog-learn-link": {
//               transition: "color .35s ease",
//             },
//             "&:hover": { color: "#ffffff" },
//             "&:hover .blog-title, &:hover .blog-date, &:hover .blog-learn-link":
//               {
//                 color: "#ffffff",
//               },
//             "&:hover .blog-learn-link": {
//               borderColor: "rgba(255,255,255,.55)",
//             },
//             "&:hover .blog-arrow-box": {
//               bgcolor: "#ffffff",
//               color: "#111111",
//             },
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <Typography
//               component="span"
//               sx={{
//                 px: 2,
//                 py: 0.75,
//                 borderRadius: "30px",
//                 bgcolor: "#ffffff",
//                 color: "#111111",
//                 fontSize: 13,
//                 fontWeight: 500,
//                 whiteSpace: "nowrap",
//               }}
//             >
//               {blog.tag}
//             </Typography>
//             <Typography
//               component="time"
//               className="blog-date"
//               sx={{
//                 fontSize: 13,
//                 color: "#718090",
//                 fontWeight: 500,
//                 textAlign: "right",
//                 transition: "color .35s ease",
//               }}
//             >
//               {blog.date}
//             </Typography>
//           </Box>

//           <Box>
//             <Typography
//               className="blog-title"
//               component="h3"
//               sx={{
//                 m: 0,
//                 maxWidth: 390,
//                 fontSize: { xs: 21, md: 22 },
//                 fontWeight: 400,
//                 lineHeight: 1.5,
//                 letterSpacing: "-.035em",
//                 color: "#111111",
//                 transition: "color .35s ease",
//               }}
//             >
//               {blog.title}
//             </Typography>
//             <Box
//               component="a"
//               href={href}
//               className="blog-learn-link"
//               sx={{
//                 mt: 2.5,
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: 1.5,
//                 color: "#111111",
//                 fontSize: 15,
//                 fontWeight: 500,
//                 textDecoration: "none",
//                 borderBottom: "1px solid rgba(0,0,0,.12)",
//                 pb: 1,
//                 transition: "color .35s ease, border-color .35s ease",
//               }}
//             >
//               Learn more
//               <Box
//                 component="span"
//                 className="blog-arrow-box"
//                 sx={{
//                   width: 27,
//                   height: 27,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   bgcolor: "#111111",
//                   color: "#ffffff",
//                   transition: "background .25s ease, color .25s ease",
//                 }}
//               >
//                 <ArrowOutward sx={{ fontSize: 18 }} />
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Reveal>
//   );
// }











import React from "react";
import { ArrowOutward } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const ease = [0.76, 0, 0.24, 1];

export default function BlogCard({
  blog,
  index = 0,
  href = "/blog",
}) {
  const link = blog.link || href;
  const isExternalLink = /^https?:\/\//i.test(link);

  return (
    <Reveal delay={index * 0.1}>
      <Box
        component={motion.article}
        initial="rest"
        animate="rest"
        whileHover="hover"
        sx={{
          position: "relative",
          isolation: "isolate",
          minWidth: 0,
          height: { xs: 350, sm: 370, md: 300 },
          overflow: "hidden",
          borderRadius: "7px",
          border: "1px solid #e4e2e8",
          bgcolor: blog.color,
          cursor: "pointer",
        }}
      >
        {/* Background image */}
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
              rest: { scale: 1.12 },
              hover: { scale: 1 },
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

          {/* Dark overlay on hover */}
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
              backgroundColor: "#000000",
              pointerEvents: "none",
            }}
          />
        </Box>

        {/* Animated color panel */}
        <motion.div
          variants={{
            rest: { y: "0%" },
            hover: { y: "-100%" },
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

        {/* Card content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            boxSizing: "border-box",
            p: { xs: 2.5, md: 3 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "#111111",
          }}
        >
          {/* Category and date */}
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
              component="time"
              className="blog-date"
              sx={{
                fontSize: 13,
                color: "#718090",
                fontWeight: 500,
                textAlign: "right",
                transition: "color 0.35s ease",
              }}
            >
              {blog.date}
            </Typography>
          </Box>

          {/* Title and Learn More */}
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
                transition: "color 0.35s ease",
              }}
            >
              {blog.title}
            </Typography>

            <Box
              component="a"
              href={link}
              target={isExternalLink ? "_blank" : undefined}
              rel={isExternalLink ? "noopener noreferrer" : undefined}
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
                transition:
                  "color 0.35s ease, border-color 0.35s ease",
              }}
            >
              <Box
                component="span"
                className="blog-learn-text"
                sx={{
                  color: "inherit",
                  transition: "color 0.35s ease",
                }}
              >
                Learn more
              </Box>

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
                  transition:
                    "background-color 0.35s ease, color 0.35s ease",
                }}
              >
                <ArrowOutward sx={{ fontSize: 18 }} />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Hover colors are controlled by the outer card */}
        <Box
          component="style"
          sx={{ display: "none" }}
        >{`
          article:hover .blog-title,
          article:hover .blog-date,
          article:hover .blog-learn-link,
          article:hover .blog-learn-text {
            color: #ffffff !important;
          }

          article:hover .blog-learn-link {
            border-bottom-color: rgba(255,255,255,0.55) !important;
          }

          article:hover .blog-arrow-box {
            background-color: #ffffff !important;
            color: #111111 !important;
          }
        `}</Box>
      </Box>
    </Reveal>
  );
}





