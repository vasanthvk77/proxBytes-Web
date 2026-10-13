
// import React, { useState } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowOutward } from "@mui/icons-material";
// import Reveal from "../components/Reveal";
// import SectionTitle from "../components/SectionTitle";
// import valuesImage from "../../assets/Values-2.png";
// import learningImage from "../../assets/Values-1.png";

// const principles = [
//   {
//     number: "1",
//     title: "Evidence over assumptions",
//     description:
//       "Give actual work a meaningful place in the conversation about capability, rather than relying on credentials alone.",
//     accent: "#a56af5",
//     image: valuesImage,
//     tags: ["Practical work", "Demonstrated skills", "Student projects"],
//   },
//   {
//     number: "2",
//     title: "Opportunity with purpose",
//     description:
//       "Connect technical ambition with opportunities that give students a reason to apply themselves and grow.",
//     accent: "#7d83ff",
//     image: learningImage,
//     tags: ["Real challenges", "Skill development", "Career growth"],
//   },
//   {
//     number: "3",
//     title: "A stronger connection",
//     description:
//       "Bring students and industry closer together through a shared focus on practical ability and meaningful outcomes.",
//     accent: "#e58bc8",
//     image: valuesImage,
//     tags: ["Students", "Industry", "Opportunity"],
//   },
// ];

// export default function About() {
//   const [activePrinciple, setActivePrinciple] = useState(0);
//   return (
//     <Box
//       component="section"
//       id="about"
//       sx={{
//         position: "relative",
//         isolation: "isolate",
//         overflow: "hidden",
//         bgcolor: "#ffffff",
//         color: "#111111",
//         fontFamily: "Manrope, sans-serif",
//         py: {
//           xs: "72px",
//           sm: "88px",
//           md: "112px",
//         },
//       }}
//     >
//       {/* Subtle background details */}
//       <Box
//         aria-hidden
//         sx={{
//           position: "absolute",
//           zIndex: -100,
//           top: { xs: "-120px", md: "-220px" },
//           right: { xs: "-180px", md: "-340px" },
//           width: { xs: 280, md: 500 },
//           height: { xs: 280, md: 500 },
//           borderRadius: "50%",
//           border: "1px solid rgba(112, 52, 196, .45)",
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             inset: 35,
//             borderRadius: "50%",
//             border: "1px solid rgba(149, 86, 212, .4)",
//           },
//           "&::after": {
//             content: '""',
//             position: "absolute",
//             inset: 75,
//             borderRadius: "50%",
//             border: "1px solid rgba(197, 141, 241, .38)",
//           },
//         }}
//       />

//       <Box
//         aria-hidden
//         sx={{
//           position: "absolute",
//           zIndex: -1,
//           top: "42%",
//           left: "-260px",
//           width: 440,
//           height: 440,
//           borderRadius: "50%",
//           background:
//             "radial-gradient(circle, rgba(181,138,255,.08), transparent 68%)",
//         }}
//       />

//       <Box
//         className="content-container"
//         sx={{
//         }}
//       >
//         <Box sx={{ mb: { xs: 12, md: 18 } }}>
//           <Reveal>
//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: {
//                 xs: "1fr",
//                 md: "minmax(150px, 0.22fr) minmax(0, 1fr)",
//               },
//               gridTemplateRows: { md: "auto" },
//               columnGap: { xs: 2, md: 5 },
//               rowGap: { xs: 3, md: 0 },
//               alignItems: "start",
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 1.25,
//                 pt: { md: 1.5 },
//                 gridColumn: { md: 1 },
//                 gridRow: { md: 1 },
//               }}
//             >
//               <Box
//                 aria-hidden="true"
//                 sx={{
//                   width: 8,
//                   height: 8,
//                   borderRadius: "50%",
//                   bgcolor: "#b58aff",
//                   flexShrink: 0,
//                 }}
//               />
//               <Typography
//                 component="p"
//                 sx={{
//                   m: 0,
//                   color: "#77717f",
//                   fontSize: { xs: 11, md: 12 },
//                   fontWeight: 700,
//                   letterSpacing: ".12em",
//                   textTransform: "uppercase",
//                 }}
//               >
//                 Our values
//               </Typography>
//             </Box>

//             <Typography
//               component="h1"
//               sx={{
//                 m: 0,
//                 gridColumn: { xs: 1, md: "1 / -1" },
//                 gridRow: { xs: 2, md: 1 },
//                 textIndent: { xs: 0, md: "20%" },
//                 fontSize: {
//                   xs: "12px",
//                   md: "50px",
//                 },
//                 lineHeight: { xs: 1.1, md: 1.15 },
//                 letterSpacing: "-.055em",
//                 fontWeight: 500,
//                 maxWidth: 1200,
//               }}
//             >
//               We believe every student has potential. Our job is to make that
//               potential visible and connect it with opportunity.
//             </Typography>
//           </Box>
//           </Reveal>

//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: {
//                 xs: "1fr",
//                 md: "minmax(0, 0.9fr) minmax(0, 1fr)",
//               },
//               gap: { xs: 6, md: 10, lg: 12 },
//               alignItems: "stretch",
//               mt: { xs: 8, md: 10 },
//             }}
//           >
//             <Reveal delay={0.1}>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//                 py: { md: 0.5 },
//               }}
//             >
//               <Typography
//                 component="h2"
//                 sx={{ m: 0, fontSize: 18, fontWeight: 550, letterSpacing: "-.03em" }}
//               >
//                 Built around practical ability
//               </Typography>
//               <Typography
//                 component="p"
//                 sx={{
//                   mt: 1.5,
//                   mb: 0,
//                   maxWidth: 470,
//                   color: "#77717c",
//                   fontSize: { xs: 14, md: 17 },
//                   lineHeight: 1.75,
//                 }}
//               >
//                 Students build skills by taking on real technical challenges.
//                 ProxBytes gives that work a place to be seen, understood, and
//                 recognised.
//               </Typography>

//               <Typography
//                 component="h2"
//                 sx={{
//                   mt: { xs: 4, md: 5 },
//                   mb: 0,
//                   fontSize: 18,
//                   fontWeight: 600,
//                   letterSpacing: "-.03em",
//                 }}
//               >
//                 Opportunity that moves you forward
//               </Typography>
//               <Typography
//                 component="p"
//                 sx={{
//                   mt: 1.5,
//                   mb: 0,
//                   maxWidth: 470,
//                   color: "#77717c",
//                   fontSize: { xs: 14, md: 17 },
//                   lineHeight: 1.75,
//                 }}
//               >
//                 We help students show what they can do and help industry look
//                 beyond credentials to discover emerging talent.
//               </Typography>

//               <Button
//                 href="#what-guides-us"
//                 endIcon={<ArrowOutward />}
//                 sx={{
//                   mt: { xs: 3.5, md: 4.5 },
//                   px: 0,
//                   py: 0.75,
//                   borderRadius: 0,
//                   borderBottom: "1px solid #ded9e4",
//                   color: "#111111",
//                   fontSize: 16,
//                   fontWeight: 550,
//                   textTransform: "none",
//                   "& .MuiButton-endIcon": { ml: 1.5 },
//                   "&:hover": {
//                     bgcolor: "transparent",
//                     borderBottomColor: "#a56af5",
//                   },
//                 }}
//               >
//                 Explore what guides us
//               </Button>

//               <Box
//                 sx={{
//                   display: "grid",
//                   gridTemplateColumns: "1fr 1fr",
//                   gap: { xs: 3, md: 4 },
//                   width: "100%",
//                   maxWidth: 600,
//                   mt: { xs: 7, md: "auto" },
//                   pt: { md: 12 },
//                 }}
//               >
//                 {[
//                   { title: "08+", detail: "Industry partners" },
//                   { title: "10K", detail: "Students reached" },
//                 ].map((item, index) => (
//                   <Box
//                     key={item.title}
//                     sx={{
//                       pl: index === 1 ? 3 : 0,
//                       borderLeft: index === 1 ? "1px solid #ded9e4" : 0,
//                     }}
//                   >
//                     <Typography
//                       component="p"
//                       sx={{
//                         m: 0,
//                         fontSize: {
//                           xs: "clamp(54px, 15vw, 72px)",
//                           md: "clamp(72px, 6vw, 90px)",
//                         },
//                         lineHeight: 0.95,
//                         letterSpacing: "-.075em",
//                         fontWeight: 500,
//                       }}
//                     >
//                       {item.title}
//                     </Typography>
//                     <Typography
//                       component="p"
//                       sx={{
//                         mt: 1,
//                         mb: 0,
//                         color: "#77717c",
//                         fontSize: { xs: 14, md: 18 },
//                         lineHeight: 1.5,
//                       }}
//                     >
//                       {item.detail}
//                     </Typography>
//                   </Box>
//                 ))}
//               </Box>
//             </Box>
//             </Reveal>

//             <Reveal delay={0.2}>
//             <Box
//               component="img"
//               src={valuesImage}
//               alt="A student working through a technical challenge at a desk"
//               sx={{
//                 display: "block",
//                 width: "100%",
//                 height: { xs: 300, sm: 400, md: "100%" },
//                 minHeight: { md: 480 },
//                 maxHeight: { md: 620 },
//                 objectFit: "cover",
//                 borderRadius: "8px",
//               }}
//             />
//             </Reveal>
//           </Box>
//         </Box>

// <Box
//   id="what-guides-us"
//   sx={{
//     mb: { xs: 5, md: 5 },
//     borderTop: "1px solid #ded9e4",
//     pt: { xs: 6, md: 9 },
//   }}
// >
//   <Reveal>
//   <SectionTitle
//     eyebrow="What guides us"
//     title={
//       <>
//         The thinking
//         <br />
//         <Box component="span" sx={{ color: "#a56af5" }}>
//           behind the platform.
//         </Box>
//       </>
//     }
//     sx={{ mb: { xs: 6, md: 9 } }}
//   />
//   </Reveal>

//   {/* Accordion */}
// <Box
//   sx={{
//     borderTop: "1px solid #ded9e4",
//     width: "100%",
//   }}
// >
//   {principles.map((item, index) => {
//     const isOpen = activePrinciple === index;

//     return (
//       <Reveal key={item.number} delay={index * 0.08}>
//       <Box
//         sx={{
//           borderBottom: "1px solid #ded9e4",
//         }}
//       >
//         {/* Accordion Header */}
//         <motion.div
//           initial={false}
//           animate={{
//             height: isOpen ? 0 : "auto",
//             opacity: isOpen ? 0 : 1,
//           }}
//           transition={{
//             height: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
//             opacity: { duration: 0.25, ease: "easeOut" },
//           }}
//           style={{ overflow: "hidden" }}
//         >
//         <Box
//           sx={{
//             display: "grid",
//             width: "100%",
//             gridTemplateColumns: {
//               xs: "58px minmax(0, 1fr) 34px",
//               sm: "68px minmax(0, 1fr) 36px",
//               md: "88px minmax(0, 1fr) 40px",
//             },
//             alignItems: "center",
//             columnGap: { xs: 1.5, md: 2.5 },
//             py: { xs: 2.75, sm: 3, md: 3.5 },
//           }}
//         >
//           <Box
//             component="span"
//             sx={{
//               justifySelf: "start",
//               px: { xs: 1.25, md: 1.75 },
//               py: 0.75,
//               border: "1px solid #d5e0eb",
//               borderRadius: "999px",
//               bgcolor: "#edf5ff",
//               color: "#34465a",
//               fontSize: { xs: 12, md: 14 },
//               lineHeight: 1.4,
//               fontWeight: 500,
//               letterSpacing: ".02em",
//             }}
//           >
//             {item.number}
//           </Box>

//           <Typography
//             component="h3"
//             className="principle-accordion-title"
//             sx={{
//               m: 0,
//               fontSize: {
//                 xs: 18,
//                 sm: 22,
//                 md: 26,
//                 lg: 28,
//               },
//               lineHeight: 1.3,
//               letterSpacing: "-.035em",
//               fontWeight: 500,
//               color: "#17131d",
//               transition: "color 0.25s ease",
//               overflowWrap: "break-word",
//             }}
//           >
//             {item.title}
//           </Typography>

//           {/* Expand / Collapse Icon */}
//           <Box
//             component="button"
//             type="button"
//             className="principle-toggle"
//             aria-label={`${isOpen ? "Close" : "Open"} ${item.title}`}
//             aria-expanded={isOpen}
//             onMouseEnter={() => setActivePrinciple(index)}
//             onClick={() => setActivePrinciple(isOpen ? -1 : index)}
//             sx={{
//               width: { xs: 32, md: 36 },
//               height: { xs: 32, md: 36 },
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               justifySelf: "end",
//               border: "1px solid",
//               borderColor: isOpen
//                 ? `${item.accent}55`
//                 : "#ded9e4",
//               borderRadius: "50%",
//               bgcolor: isOpen ? "#f3ebfc" : "transparent",
//               color: isOpen ? item.accent : "#17131d",
//               flexShrink: 0,
//               p: 0,
//               cursor: "pointer",
//               "&:hover": {
//                 borderColor: item.accent,
//                 bgcolor: "#f3ebfc",
//                 color: item.accent,
//               },
//               "&:focus-visible": {
//                 outline: `2px solid ${item.accent}`,
//                 outlineOffset: 3,
//               },
//               transition:
//                 "background-color .25s ease, color .25s ease, border-color .25s ease",
//             }}
//           >
//             <svg
//               width="18"
//               height="18"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.8"
//               strokeLinecap="round"
//               aria-hidden="true"
//             >
//               <path d="M5 12h14" />

//               <motion.path
//                 d="M12 5v14"
//                 animate={{
//                   scaleY: isOpen ? 0 : 1,
//                   opacity: isOpen ? 0 : 1,
//                 }}
//                 transition={{
//                   duration: 0.2,
//                   ease: "easeOut",
//                 }}
//                 style={{
//                   transformOrigin: "center",
//                 }}
//               />
//             </svg>
//           </Box>
//         </Box>
//         </motion.div>

//         {/* Expandable Content */}
//         <AnimatePresence initial={false}>
//           {isOpen && (
//             <motion.div
//               key={`content-${item.number}`}
//               initial={{
//                 height: 0,
//                 opacity: 0,
//               }}
//               animate={{
//                 height: "auto",
//                 opacity: 1,
//               }}
//               exit={{
//                 height: 0,
//                 opacity: 0,
//               }}
//               transition={{
//                 height: {
//                   duration: 0.8,
//                   ease: [0.22, 1, 0.36, 1],
//                 },
//                 opacity: {
//                   duration: 0.4,
//                   delay: 0.1,
//                 },
//               }}
//               style={{
//                 overflow: "hidden",
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "grid",
//                   gridTemplateColumns: {
//                     xs: "48px minmax(0, 1fr) 34px",
//                     md: "56px minmax(0, 0.9fr) minmax(0, 1.3fr) minmax(0, 1.5fr) 40px",
//                   },
//                   gap: {
//                     xs: 3,
//                     sm: 3.5,
//                     md: 3,
//                     lg: 6,
//                   },
//                   pt: {
//                     xs: 2,
//                     md: 3,
//                   },
//                   pb: {
//                     xs: 4,
//                     md: 5,
//                   },
//                   alignItems: "center",
//                 }}
//               >
//                 <Box
//                   component="span"
//                   sx={{
//                     justifySelf: "start",
//                     alignSelf: "start",
//                     px: { xs: 1.25, md: 1.75 },
//                     py: 0.75,
//                     border: "1px solid #d5e0eb",
//                     borderRadius: "999px",
//                     bgcolor: "#edf5ff",
//                     color: "#34465a",
//                     fontSize: { xs: 12, md: 14 },
//                     lineHeight: 1.4,
//                     fontWeight: 500,
//                     letterSpacing: ".02em",
//                   }}
//                 >
//                   {item.number}
//                 </Box>

//                 {/* Image */}
//                 <Box
//                   sx={{
//                     position: "relative",
//                     overflow: "hidden",
//                     width: "100%",
//                     gridColumn: { xs: "2 / 4", md: "auto" },
//                     gridRow: { xs: 2, md: "auto" },
//                     borderRadius: {
//                       xs: "6px",
//                       md: "8px",
//                     },
//                     bgcolor: "#f5f0fa",

//                     aspectRatio: {
//                       xs: "16 / 10",
//                       md: "1 / 1",
//                     },

//                     maxHeight: {
//                       md: 250,
//                       lg: 280,
//                     },

//                     isolation: "isolate",
//                   }}
//                 >
//                   <motion.img
//                     key={`image-${item.number}`}
//                     src={item.image}
//                     alt={item.title}
//                     initial={{
//                       clipPath: "inset(50% 0 50% 0)",
//                       scale: 1.035,
//                       opacity: 0,
//                     }}
//                     animate={{
//                       clipPath: "inset(0% 0 0% 0)",
//                       scale: 1,
//                       opacity: 1,
//                     }}
//                     exit={{
//                       clipPath: "inset(50% 0 50% 0)",
//                       scale: 1.02,
//                       opacity: 0,
//                     }}
//                     transition={{
//                       clipPath: {
//                         duration: 0.8,
//                         ease: [0.76, 0, 0.24, 1],
//                       },
//                       scale: {
//                         duration: 1.2,
//                         ease: [0.22, 1, 0.36, 1],
//                       },
//                       opacity: {
//                         duration: 0.35,
//                       },
//                     }}
//                     style={{
//                       position: "absolute",
//                       inset: 0,
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                       objectPosition: "center",
//                       display: "block",
//                     }}
//                   />

//                 </Box>

//                 {/* Description */}
//                 <Box
//                   sx={{
//                     display: "flex",
//                     gridColumn: { xs: "2 / 4", md: "auto" },
//                     gridRow: { xs: 3, md: "auto" },
//                     flexDirection: "column",
//                     alignItems: "flex-start",
//                     minWidth: 0,
//                     py: { md: 0.5 },
//                   }}
//                 >
//                   <Typography
//                     component="h3"
//                     sx={{
//                       m: 0,
//                       mb: 1.5,
//                       fontSize: { xs: 22, md: 26 },
//                       lineHeight: 1.2,
//                       letterSpacing: "-.04em",
//                       fontWeight: 500,
//                       color: "#17131d",
//                     }}
//                   >
//                     {item.title}
//                   </Typography>
//                   <Typography
//                     component="p"
//                     sx={{
//                       mt: 0,
//                       mb: 0,
//                       maxWidth: 500,
//                       fontSize: {
//                         xs: 13.5,
//                         md: 14,
//                       },
//                       lineHeight: 1.8,
//                       letterSpacing: ".002em",
//                       color: "#77717c",
//                     }}
//                   >
//                     {item.description}
//                   </Typography>

//                   <Button
//                     href="#how-it-works"
//                     endIcon={<ArrowOutward />}
//                     sx={{
//                       mt: 2.5,
//                       px: 0,
//                       py: 0.5,
//                       borderRadius: 0,
//                       borderBottom: "1px solid #ded9e4",
//                       color: "#111111",
//                       fontSize: 14,
//                       fontWeight: 600,
//                       textTransform: "none",
//                       "& .MuiButton-endIcon": { ml: 1.5 },
//                       "&:hover": {
//                         bgcolor: "transparent",
//                         borderBottomColor: item.accent,
//                       },
//                     }}
//                   >
//                     Learn more
//                   </Button>
//                 </Box>

//                 <Box
//                   sx={{
//                     display: "flex",
//                     gridColumn: { xs: "2 / 4", md: "auto" },
//                     gridRow: { xs: 4, md: "auto" },
//                     flexWrap: "wrap",
//                     alignContent: "flex-start",
//                     gap: 1.25,
//                   }}
//                 >
//                   {item.tags.map((tag) => (
//                     <Box
//                       component="span"
//                       key={tag}
//                       sx={{
//                         px: { xs: 1.75, md: 2 },
//                         py: { xs: 0.8, md: 1 },
//                         border: "1px solid #dedede",
//                         borderRadius: "999px",
//                         color: "#17131d",
//                         fontSize: { xs: 13, md: 15 },
//                         lineHeight: 1.35,
//                         whiteSpace: "nowrap",
//                       }}
//                     >
//                       {tag}
//                     </Box>
//                   ))}
//                 </Box>

//                 <Box
//                   component="button"
//                   type="button"
//                   className="principle-toggle"
//                   aria-label={`Close ${item.title}`}
//                   aria-expanded="true"
//                   onClick={() => setActivePrinciple(-1)}
//                   sx={{
//                     width: { xs: 32, md: 36 },
//                     height: { xs: 32, md: 36 },
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     justifySelf: { xs: "end", md: "center" },
//                     alignSelf: { xs: "start", md: "center" },
//                     gridColumn: { xs: 3, md: "auto" },
//                     gridRow: { xs: 1, md: "auto" },
//                     border: "1px solid",
//                     borderColor: `${item.accent}55`,
//                     borderRadius: "50%",
//                     bgcolor: "#f3ebfc",
//                     color: item.accent,
//                     flexShrink: 0,
//                     p: 0,
//                     cursor: "pointer",
//                     "&:hover": {
//                       borderColor: item.accent,
//                       bgcolor: "#f3ebfc",
//                     },
//                     "&:focus-visible": {
//                       outline: `2px solid ${item.accent}`,
//                       outlineOffset: 3,
//                     },
//                   }}
//                 >
//                   <svg
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.8"
//                     strokeLinecap="round"
//                     aria-hidden="true"
//                   >
//                     <path d="M5 12h14" />
//                   </svg>
//                 </Box>
//               </Box>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </Box>
//       </Reveal>
//     );
//   })}
// </Box>
// </Box>


//         {/* SECTION 05 — CLOSING STATEMENT */}

        
//       </Box>
//     </Box>
//   );
// }




























import React, { useEffect, useRef, useState } from "react";

import { Box, Typography, Button } from "@mui/material";

import {
  motion,
  AnimatePresence,
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { ArrowOutward } from "@mui/icons-material";

import Reveal from "../components/Reveal";

import SectionTitle from "../components/SectionTitle";

import valuesImage from "../../assets/Values-2.png";

import learningImage from "../../assets/Values-1.png";

const principles = [

  {

    number: "1",

    title: "Evidence over assumptions",

    description:

      "Give actual work a meaningful place in the conversation about capability, rather than relying on credentials alone.",

    accent: "#a56af5",

    image: valuesImage,

    tags: ["Practical work", "Demonstrated skills", "Student projects"],

  },

  {

    number: "2",

    title: "Opportunity with purpose",

    description:

      "Connect technical ambition with opportunities that give students a reason to apply themselves and grow.",

    accent: "#7d83ff",

    image: learningImage,

    tags: ["Real challenges", "Skill development", "Career growth"],

  },

  {

    number: "3",

    title: "A stronger connection",

    description:

      "Bring students and industry closer together through a shared focus on practical ability and meaningful outcomes.",

    accent: "#e58bc8",

    image: valuesImage,

    tags: ["Students", "Industry", "Opportunity"],

  },

];

// Counts up once when the statistic enters the viewport.
function AnimatedCounter({ value, suffix = "", padStart = 0 }) {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.65 });
  const count = useMotionValue(0);
  const displayedCount = useTransform(count, (latest) => {
    const rounded = Math.round(latest);
    const formatted = padStart
      ? String(rounded).padStart(padStart, "0")
      : rounded.toLocaleString("en-US");
    return `${formatted}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) return undefined;
    const controls = animate(count, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [isInView, value, count]);

  return (
    <motion.span ref={counterRef} aria-label={`${value}${suffix}`}>
      {displayedCount}
    </motion.span>
  );
}

export default function About() {

  const [activePrinciple, setActivePrinciple] = useState(0);

  return (

    <Box

      component="section"

      id="about"

      sx={{

        position: "relative",

        isolation: "isolate",

        overflow: "hidden",

        bgcolor: "#ffffff",

        color: "#111111",

        fontFamily: "Manrope, sans-serif",

        py: {

          xs: "72px",

          sm: "88px",

          md: "112px",

        },

      }}

    >

      {/* Subtle background details */}

      <Box

        aria-hidden

        sx={{

          position: "absolute",

          zIndex: -100,

          top: { xs: "-120px", md: "-220px" },

          right: { xs: "-180px", md: "-340px" },

          width: { xs: 280, md: 500 },

          height: { xs: 280, md: 500 },

          borderRadius: "50%",

          border: "1px solid rgba(112, 52, 196, .45)",

          "&::before": {

            content: '""',

            position: "absolute",

            inset: 35,

            borderRadius: "50%",

            border: "1px solid rgba(149, 86, 212, .4)",

          },

          "&::after": {

            content: '""',

            position: "absolute",

            inset: 75,

            borderRadius: "50%",

            border: "1px solid rgba(197, 141, 241, .38)",

          },

        }}

      />

      <Box

        aria-hidden

        sx={{

          position: "absolute",

          zIndex: -1,

          top: "42%",

          left: "-260px",

          width: 440,

          height: 440,

          borderRadius: "50%",

          background:

            "radial-gradient(circle, rgba(181,138,255,.08), transparent 68%)",

        }}

      />

      <Box

        className="content-container"

        sx={{

        }}

      >

        <Box sx={{ mb: { xs: 12, md: 18 } }}>

          <Reveal>

          <Box

            sx={{

              display: "grid",

              gridTemplateColumns: {

                xs: "1fr",

                md: "minmax(150px, 0.22fr) minmax(0, 1fr)",

              },

              gridTemplateRows: { md: "auto" },

              columnGap: { xs: 2, md: 5 },

              rowGap: { xs: 3, md: 0 },

              alignItems: "start",

            }}

          >

            <Box

              sx={{

                display: "flex",

                alignItems: "center",

                gap: 1.25,

                pt: { md: 1.5 },

                gridColumn: { md: 1 },

                gridRow: { md: 1 },

              }}

            >

              <Box

                aria-hidden="true"

                sx={{

                  width: 8,

                  height: 8,

                  borderRadius: "50%",

                  bgcolor: "#b58aff",

                  flexShrink: 0,

                }}

              />

              <Typography

                component="p"

                sx={{

                  m: 0,

                  color: "#77717f",

                  fontSize: { xs: 11, md: 12 },

                  fontWeight: 700,

                  letterSpacing: ".12em",

                  textTransform: "uppercase",

                }}

              >

                Our values

              </Typography>

            </Box>

            <Typography

              component="h1"

              sx={{

                m: 0,

                gridColumn: { xs: 1, md: "1 / -1" },

                gridRow: { xs: 2, md: 1 },

                textIndent: { xs: 0, md: "20%" },

                fontSize: {

                  xs: "25px",

                  md: "50px",

                },

                lineHeight: { xs: 1.1, md: 1.15 },

                letterSpacing: "-.055em",

                fontWeight: 500,

                maxWidth: 1200,

              }}

            >

              We believe every student has potential. Our job is to make that

              potential visible and connect it with opportunity.

            </Typography>

          </Box>

          </Reveal>

          <Box

            sx={{

              display: "grid",

              gridTemplateColumns: {

                xs: "1fr",

                md: "minmax(0, 0.9fr) minmax(0, 1fr)",

              },

              gap: { xs: 6, md: 10, lg: 12 },

              alignItems: "stretch",

              mt: { xs: 4, md: 10 },

            }}

          >

            <Reveal delay={0.1}>

            <Box

              sx={{

                display: "flex",

                flexDirection: "column",

                alignItems: "flex-start",

                py: { md: 0.5 },

              }}

            >

              <Typography

                component="h2"

                sx={{ m: 0, fontSize: 18, fontWeight: 550, letterSpacing: "-.03em" }}

              >

                Built around practical ability

              </Typography>

              <Typography

                component="p"

                sx={{

                  mt: 1.5,

                  mb: 0,

                  maxWidth: 470,

                  color: "#77717c",

                  fontSize: { xs: 14, md: 17 },

                  lineHeight: 1.75,

                }}

              >

                Students build skills by taking on real technical challenges.

                ProxBytes gives that work a place to be seen, understood, and

                recognised.

              </Typography>

              <Typography

                component="h2"

                sx={{

                  mt: { xs: 4, md: 5 },

                  mb: 0,

                  fontSize: 18,

                  fontWeight: 600,

                  letterSpacing: "-.03em",

                }}

              >

                Opportunity that moves you forward

              </Typography>

              <Typography

                component="p"

                sx={{

                  mt: 1.5,

                  mb: 0,

                  maxWidth: 470,

                  color: "#77717c",

                  fontSize: { xs: 14, md: 17 },

                  lineHeight: 1.75,

                }}

              >

                We help students show what they can do and help industry look

                beyond credentials to discover emerging talent.

              </Typography>

              <Button

                href="#what-guides-us"

                endIcon={<ArrowOutward />}

                sx={{

                  mt: { xs: 3.5, md: 4.5 },

                  px: 0,

                  py: 0.75,

                  borderRadius: 0,

                  borderBottom: "1px solid #ded9e4",

                  color: "#111111",

                  fontSize: 16,

                  fontWeight: 550,

                  textTransform: "none",

                  "& .MuiButton-endIcon": { ml: 1.5 },

                  "&:hover": {

                    bgcolor: "transparent",

                    borderBottomColor: "#a56af5",

                  },

                }}

              >

                Explore what guides us

              </Button>

              <Box

                sx={{

                  display: "grid",

                  gridTemplateColumns: "1fr 1fr",

                  gap: { xs: 3, md: 4 },

                  width: "100%",

                  maxWidth: 600,

                  mt: { xs: 7, md: "auto" },

                  pt: { md: 12 },

                }}

              >

                {[
                  { value: 8, suffix: "+", padStart: 2, detail: "Industry partners" },
                  { value: 10, suffix: "K", detail: "Students reached" },
                ].map((item, index) => (

                  <Box
                    component={motion.div}
                    key={item.detail}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.14,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    sx={{

                      pl: index === 1 ? 3 : 0,

                      borderLeft: index === 1 ? "1px solid #ded9e4" : 0,

                    }}

                  >

                    <Typography

                      component="p"

                      sx={{

                        m: 0,

                        fontSize: {

                          xs: "clamp(54px, 15vw, 72px)",

                          md: "clamp(72px, 6vw, 90px)",

                        },

                        lineHeight: 0.95,

                        letterSpacing: "-.075em",

                        fontWeight: 500,

                      }}

                    >

                      <AnimatedCounter
                          value={item.value}
                          suffix={item.suffix}
                          padStart={item.padStart || 0}
                        />

                    </Typography>

                    <Typography

                      component="p"

                      sx={{

                        mt: 1,

                        mb: 0,

                        color: "#77717c",

                        fontSize: { xs: 14, md: 18 },

                        lineHeight: 1.5,

                      }}

                    >

                      {item.detail}

                    </Typography>

                  </Box>

                ))}

              </Box>

            </Box>

            </Reveal>

            <Reveal delay={0.2}>

            <Box

              component="img"

              src={valuesImage}

              alt="A student working through a technical challenge at a desk"

              sx={{

                display: "block",

                width: "100%",

                height: { xs: 300, sm: 400, md: "100%" },

                minHeight: { md: 480 },

                maxHeight: { md: 620 },

                objectFit: "cover",

                borderRadius: "8px",

              }}

            />

            </Reveal>

          </Box>

        </Box>

<Box

  id="what-guides-us"

  sx={{

    mb: { xs: 5, md: 5 },

    borderTop: "1px solid #ded9e4",

    pt: { xs: 6, md: 9 },

  }}

>

  <Reveal>

  <SectionTitle

    eyebrow="What guides us"

    title={

      <>

        The thinking

        <br />

        <Box component="span" sx={{ color: "#a56af5" }}>

          behind the platform.

        </Box>

      </>

    }

    sx={{ mb: { xs: 6, md: 9 } }}

  />

  </Reveal>

  {/* Accordion */}

<Box

  sx={{

    borderTop: "1px solid #ded9e4",

    width: "100%",

  }}

>

  {principles.map((item, index) => {

    const isOpen = activePrinciple === index;

    return (

      <Reveal key={item.number} delay={index * 0.08}>

      <Box

        sx={{

          borderBottom: "1px solid #ded9e4",

        }}

      >

        {/* Accordion Header */}

        <motion.div

          initial={false}

          animate={{

            height: isOpen ? 0 : "auto",

            opacity: isOpen ? 0 : 1,

          }}

          transition={{

            height: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },

            opacity: { duration: 0.25, ease: "easeOut" },

          }}

          style={{ overflow: "hidden" }}

        >

        <Box

          sx={{

            display: "grid",

            width: "100%",

            gridTemplateColumns: {

              xs: "58px minmax(0, 1fr) 34px",

              sm: "68px minmax(0, 1fr) 36px",

              md: "88px minmax(0, 1fr) 40px",

            },

            alignItems: "center",

            columnGap: { xs: 1.5, md: 2.5 },

            py: { xs: 2.75, sm: 3, md: 3.5 },

          }}

        >

          <Box

            component="span"

            sx={{

              justifySelf: "start",

              px: { xs: 1.25, md: 1.75 },

              py: 0.75,

              border: "1px solid #d5e0eb",

              borderRadius: "999px",

              bgcolor: "#edf5ff",

              color: "#34465a",

              fontSize: { xs: 12, md: 14 },

              lineHeight: 1.4,

              fontWeight: 500,

              letterSpacing: ".02em",

            }}

          >

            {item.number}

          </Box>

          <Typography

            component="h3"

            className="principle-accordion-title"

            sx={{

              m: 0,

              fontSize: {

                xs: 18,

                sm: 22,

                md: 26,

                lg: 28,

              },

              lineHeight: 1.3,

              letterSpacing: "-.035em",

              fontWeight: 500,

              color: "#17131d",

              transition: "color 0.25s ease",

              overflowWrap: "break-word",

            }}

          >

            {item.title}

          </Typography>

          {/* Expand / Collapse Icon */}

          <Box

            component="button"

            type="button"

            className="principle-toggle"

            aria-label={`${isOpen ? "Close" : "Open"} ${item.title}`}

            aria-expanded={isOpen}

            onMouseEnter={() => setActivePrinciple(index)}

            onClick={() => setActivePrinciple(isOpen ? -1 : index)}

            sx={{

              width: { xs: 32, md: 36 },

              height: { xs: 32, md: 36 },

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              justifySelf: "end",

              border: "1px solid",

              borderColor: isOpen

                ? `${item.accent}55`

                : "#ded9e4",

              borderRadius: "50%",

              bgcolor: isOpen ? "#f3ebfc" : "transparent",

              color: isOpen ? item.accent : "#17131d",

              flexShrink: 0,

              p: 0,

              cursor: "pointer",

              "&:hover": {

                borderColor: item.accent,

                bgcolor: "#f3ebfc",

                color: item.accent,

              },

              "&:focus-visible": {

                outline: `2px solid ${item.accent}`,

                outlineOffset: 3,

              },

              transition:

                "background-color .25s ease, color .25s ease, border-color .25s ease",

            }}

          >

            <svg

              width="18"

              height="18"

              viewBox="0 0 24 24"

              fill="none"

              stroke="currentColor"

              strokeWidth="1.8"

              strokeLinecap="round"

              aria-hidden="true"

            >

              <path d="M5 12h14" />

              <motion.path

                d="M12 5v14"

                animate={{

                  scaleY: isOpen ? 0 : 1,

                  opacity: isOpen ? 0 : 1,

                }}

                transition={{

                  duration: 0.2,

                  ease: "easeOut",

                }}

                style={{

                  transformOrigin: "center",

                }}

              />

            </svg>

          </Box>

        </Box>

        </motion.div>

        {/* Expandable Content */}

        <AnimatePresence initial={false}>

          {isOpen && (

            <motion.div

              key={`content-${item.number}`}

              initial={{

                height: 0,

                opacity: 0,

              }}

              animate={{

                height: "auto",

                opacity: 1,

              }}

              exit={{

                height: 0,

                opacity: 0,

              }}

              transition={{

                height: {

                  duration: 0.8,

                  ease: [0.22, 1, 0.36, 1],

                },

                opacity: {

                  duration: 0.4,

                  delay: 0.1,

                },

              }}

              style={{

                overflow: "hidden",

              }}

            >

              <Box

                sx={{

                  display: "grid",

                  gridTemplateColumns: {

                    xs: "48px minmax(0, 1fr) 34px",

                    md: "56px minmax(0, 0.9fr) minmax(0, 1.3fr) minmax(0, 1.5fr) 40px",

                  },

                  gap: {

                    xs: 3,

                    sm: 3.5,

                    md: 3,

                    lg: 6,

                  },

                  pt: {

                    xs: 2,

                    md: 3,

                  },

                  pb: {

                    xs: 4,

                    md: 5,

                  },

                  alignItems: "center",

                }}

              >

                <Box

                  component="span"

                  sx={{

                    justifySelf: "start",

                    alignSelf: "start",

                    px: { xs: 1.25, md: 1.75 },

                    py: 0.75,

                    border: "1px solid #d5e0eb",

                    borderRadius: "999px",

                    bgcolor: "#edf5ff",

                    color: "#34465a",

                    fontSize: { xs: 12, md: 14 },

                    lineHeight: 1.4,

                    fontWeight: 500,

                    letterSpacing: ".02em",

                  }}

                >

                  {item.number}

                </Box>

                {/* Image */}

                <Box

                  sx={{

                    position: "relative",

                    overflow: "hidden",

                    width: "100%",

                    gridColumn: { xs: "2 / 4", md: "auto" },

                    gridRow: { xs: 2, md: "auto" },

                    borderRadius: {

                      xs: "6px",

                      md: "8px",

                    },

                    bgcolor: "#f5f0fa",

                    aspectRatio: {

                      xs: "16 / 10",

                      md: "1 / 1",

                    },

                    maxHeight: {

                      md: 250,

                      lg: 280,

                    },

                    isolation: "isolate",

                  }}

                >

                  <motion.img

                    key={`image-${item.number}`}

                    src={item.image}

                    alt={item.title}

                    initial={{

                      clipPath: "inset(50% 0 50% 0)",

                      scale: 1.035,

                      opacity: 0,

                    }}

                    animate={{

                      clipPath: "inset(0% 0 0% 0)",

                      scale: 1,

                      opacity: 1,

                    }}

                    exit={{

                      clipPath: "inset(50% 0 50% 0)",

                      scale: 1.02,

                      opacity: 0,

                    }}

                    transition={{

                      clipPath: {

                        duration: 0.8,

                        ease: [0.76, 0, 0.24, 1],

                      },

                      scale: {

                        duration: 1.2,

                        ease: [0.22, 1, 0.36, 1],

                      },

                      opacity: {

                        duration: 0.35,

                      },

                    }}

                    style={{

                      position: "absolute",

                      inset: 0,

                      width: "100%",

                      height: "100%",

                      objectFit: "cover",

                      objectPosition: "center",

                      display: "block",

                    }}

                  />

                </Box>

                {/* Description */}

                <Box

                  sx={{

                    display: "flex",

                    gridColumn: { xs: "2 / 4", md: "auto" },

                    gridRow: { xs: 3, md: "auto" },

                    flexDirection: "column",

                    alignItems: "flex-start",

                    minWidth: 0,

                    py: { md: 0.5 },

                  }}

                >

                  <Typography

                    component="h3"

                    sx={{

                      m: 0,

                      mb: 1.5,

                      fontSize: { xs: 22, md: 26 },

                      lineHeight: 1.2,

                      letterSpacing: "-.04em",

                      fontWeight: 500,

                      color: "#17131d",

                    }}

                  >

                    {item.title}

                  </Typography>

                  <Typography

                    component="p"

                    sx={{

                      mt: 0,

                      mb: 0,

                      maxWidth: 500,

                      fontSize: {

                        xs: 13.5,

                        md: 14,

                      },

                      lineHeight: 1.8,

                      letterSpacing: ".002em",

                      color: "#77717c",

                    }}

                  >

                    {item.description}

                  </Typography>

                  <Button

                    href="#how-it-works"

                    endIcon={<ArrowOutward />}

                    sx={{

                      mt: 2.5,

                      px: 0,

                      py: 0.5,

                      borderRadius: 0,

                      borderBottom: "1px solid #ded9e4",

                      color: "#111111",

                      fontSize: 14,

                      fontWeight: 600,

                      textTransform: "none",

                      "& .MuiButton-endIcon": { ml: 1.5 },

                      "&:hover": {

                        bgcolor: "transparent",

                        borderBottomColor: item.accent,

                      },

                    }}

                  >

                    Learn more

                  </Button>

                </Box>

                <Box

                  sx={{

                    display: "flex",

                    gridColumn: { xs: "2 / 4", md: "auto" },

                    gridRow: { xs: 4, md: "auto" },

                    flexWrap: "wrap",

                    alignContent: "flex-start",

                    gap: 1.25,

                  }}

                >

                  {item.tags.map((tag, tagIndex) => (

                    <Box

                      component={motion.span}

                      key={tag}

                      initial={{ opacity: 0, scale: 0.88, y: 10 }}

                      whileInView={{ opacity: 1, scale: 1, y: 0 }}

                      viewport={{ once: true, amount: 0.4 }}

                      transition={{

                        duration: 0.55,

                        delay: tagIndex * 0.09,

                        ease: [0.22, 1, 0.36, 1],

                      }}

                      sx={{

                        px: { xs: 1.75, md: 2 },

                        py: { xs: 0.8, md: 1 },

                        border: "1px solid #dedede",

                        borderRadius: "999px",

                        color: "#17131d",

                        fontSize: { xs: 13, md: 15 },

                        lineHeight: 1.35,

                        whiteSpace: "nowrap",

                        transition: "border-color 0.25s ease, background-color 0.25s ease",

                        "&:hover": {

                          borderColor: item.accent,

                          bgcolor: `${item.accent}0D`,

                        },

                      }}

                    >

                      {tag}

                    </Box>

                  ))}

                </Box>

                <Box

                  component="button"

                  type="button"

                  className="principle-toggle"

                  aria-label={`Close ${item.title}`}

                  aria-expanded="true"

                  onClick={() => setActivePrinciple(-1)}

                  sx={{

                    width: { xs: 32, md: 36 },

                    height: { xs: 32, md: 36 },

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",

                    justifySelf: { xs: "end", md: "center" },

                    alignSelf: { xs: "start", md: "center" },

                    gridColumn: { xs: 3, md: "auto" },

                    gridRow: { xs: 1, md: "auto" },

                    border: "1px solid",

                    borderColor: `${item.accent}55`,

                    borderRadius: "50%",

                    bgcolor: "#f3ebfc",

                    color: item.accent,

                    flexShrink: 0,

                    p: 0,

                    cursor: "pointer",

                    "&:hover": {

                      borderColor: item.accent,

                      bgcolor: "#f3ebfc",

                    },

                    "&:focus-visible": {

                      outline: `2px solid ${item.accent}`,

                      outlineOffset: 3,

                    },

                  }}

                >

                  <svg

                    width="18"

                    height="18"

                    viewBox="0 0 24 24"

                    fill="none"

                    stroke="currentColor"

                    strokeWidth="1.8"

                    strokeLinecap="round"

                    aria-hidden="true"

                  >

                    <path d="M5 12h14" />

                  </svg>

                </Box>

              </Box>

            </motion.div>

          )}

        </AnimatePresence>

      </Box>

      </Reveal>

    );

  })}

</Box>

</Box>

        {/* SECTION 05 — CLOSING STATEMENT */}

      </Box>

    </Box>

  );

}
