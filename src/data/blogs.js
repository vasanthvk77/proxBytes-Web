import hrmPart1 from "../../assets/hrm_part1.png";
import digitalInnovation from "../../assets/digitalInnovation.png";
import cybersecurityBlog from "../../assets/cybersecurityBlog.png";
import blog3Image from "../../assets/blog3.png";

export const blogs = [
{
  tag: "HRM",
  date: "March 10, 2026",
  title: "Sculpting HRM Application part 1",
  author: "Vasanth",
  color: "#E4EFFF",
  image: hrmPart1,
  link: "https://vasanth4059.blogspot.com/2026/04/march-05-2026-modern-hrm-application.html",
  excerpt:
    "Organizations once depended on spreadsheets, manual entries, and disconnected systems for HR management. Modern HRM applications now streamline employee operations through automation, efficiency, and flexible digital workflows.",
},
{
  tag: "PROdesX InfoTech",
  date: "July 9, 2025",
  title: "Driving Digital Innovation, Delivering Business Success",
  author: "Sridharan Pandi",
  color: "#E3F9DA",
  image: digitalInnovation,
  link: "https://prodesx.blogspot.com/2025/07/prodesx-infotech-driving-digital.html",
  excerpt:
    "In an increasingly digital world, businesses are constantly seeking innovative ways to stay competitive, efficient, and connected. At the heart of this transformation lies technology—and at the heart of technology lies PROdesX InfoTech.",
},
{
  tag: "Rise of Technology",
  date: "July 9, 2025",
  title: "The Unstoppable Rise of Technology",
  author: "Sridharan Pandi",
  color: "#F8F8DE",
  image: blog3Image,
  link: "https://prodesx.blogspot.com/2025/07/unstoppable-rise-of-technology-how.html",
  excerpt:
    "Technology is growing at an unprecedented pace, and what it means for businesses, individuals, and the future.",
},
{
  tag: "Cybersecurity",
  date: "July 9, 2025",
  title: "Safeguarding the Digital World in an Era of Growing Threats",
  author: "Sridharan Pandi",
  color: "#E4EFFF",
  image: cybersecurityBlog,
  link: "https://prodesx.blogspot.com/2025/07/cybersecurity-safeguarding-digital.html",
  excerpt:
    "Cybersecurity is not just about protecting systems; it's about protecting trust, reputation, data, and livelihoods.",
},
];

export const newestFirstBlogs = [...blogs].reverse();
