import React, { useEffect } from "react";
import { Box, Typography, Container, Stack, Divider, Link as MuiLink } from "@mui/material";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: [
        "Welcome to ProxBytes!",
        "These Terms & Conditions govern your access to and use of the ProxBytes website, mobile application, and related services.",
        "By accessing, registering, or using ProxBytes, you agree to comply with these Terms & Conditions. If you do not agree with these terms, please discontinue using the platform.",
      ],
    },
    {
      id: "accounts",
      title: "2. User Registration and Accounts",
      content: [
        "Users must provide accurate and complete information during registration.",
        "Users are responsible for maintaining the confidentiality of their account credentials.",
        "Each user is responsible for activities performed through their account.",
        "Users must not impersonate another individual or create accounts using false information.",
        "Users must notify ProxBytes immediately if they suspect unauthorized access to their accounts.",
        "ProxBytes reserves the right to restrict or suspend accounts that contain misleading information or violate platform policies.",
      ],
    },
    {
      id: "usage",
      title: "3. Platform Usage",
      content: [
        "ProxBytes provides services related to coding competitions, technical challenges, educational activities, and student engagement.",
        "Users agree to:",
      ],
      list: [
        "Use the platform only for lawful and authorized purposes.",
        "Follow all applicable platform rules and competition guidelines.",
        "Provide genuine and accurate information.",
        "Respect other users and institutions.",
        "Avoid activities that disrupt platform operations or compromise security.",
      ],
      extra: "Any misuse of the platform may result in appropriate restrictions or account suspension.",
    },
    {
      id: "competitions",
      title: "4. Coding Competitions and Participation",
      content: [
        "ProxBytes may organize coding competitions, programming challenges, and other technical activities.",
        "Users must follow the specific rules and eligibility requirements of each competition.",
        "Contest registration must be completed within the specified registration period.",
        "Users must submit their solutions before the applicable deadlines.",
        "Submissions must represent work that the user is authorized to submit.",
        "Plagiarism, fraudulent participation, manipulation of results, or unauthorized collaboration may result in disqualification.",
        "Contest results and rankings will be determined according to the applicable evaluation criteria.",
        "ProxBytes reserves the right to modify, postpone, or cancel competitions when necessary.",
      ],
    },
    {
      id: "ip-submissions",
      title: "5. Submission Guidelines and Intellectual Property",
      content: [
        "Users may submit project links, GitHub repositories, or other permitted materials as part of competition participation.",
        "Users retain ownership of their original intellectual property.",
        "Users must ensure they have the necessary rights and permissions to submit their work.",
        "Submissions must not violate third-party copyrights, licenses, or intellectual property rights.",
        "Users grant ProxBytes permission to access and review submitted materials for competition evaluation and platform-related purposes.",
        "ProxBytes does not claim ownership of user-created projects or submissions.",
        "Users are responsible for ensuring that submitted materials do not contain confidential information, passwords, API keys, or unauthorized content.",
      ],
    },
    {
      id: "institutions",
      title: "6. Institution and College Responsibilities",
      content: [
        "Institutions and authorized administrators using ProxBytes must:",
      ],
      list: [
        "Provide accurate institutional information.",
        "Ensure that authorized representatives manage institutional accounts.",
        "Use the platform responsibly for academic and competition-related activities.",
        "Maintain appropriate control over institution-associated accounts.",
        "Avoid unauthorized access, misuse, or manipulation of student information.",
      ],
      extra: "ProxBytes reserves the right to review and verify institution registrations before granting access to institution-specific features.",
    },
    {
      id: "payments",
      title: "7. Payments and Refunds",
      content: [
        "Certain competitions or platform services may require payment.",
        "Applicable fees will be clearly displayed before payment confirmation.",
        "Users are responsible for ensuring that payment details are accurate.",
        "Payments may be processed through authorized third-party payment providers.",
        "Refund eligibility, where applicable, will be governed by the refund policy communicated for the relevant service or competition.",
        "Users must not attempt fraudulent transactions or payment manipulation.",
        "Any applicable refund conditions will be communicated separately.",
      ],
    },
    {
      id: "prohibited",
      title: "8. Prohibited Activities",
      content: ["Users must not:"],
      list: [
        "Attempt unauthorized access to platform systems or accounts.",
        "Upload malicious software, harmful scripts, or unauthorized content.",
        "Manipulate contest submissions, rankings, or evaluation results.",
        "Copy or submit another participant's work as their own.",
        "Exploit bugs or vulnerabilities for unauthorized benefits.",
        "Distribute spam, misleading content, or abusive material.",
        "Interfere with platform availability, performance, or security.",
        "Use automated methods to manipulate platform activities without authorization.",
      ],
      extra: "Violation of these rules may result in disqualification, account suspension, or permanent termination.",
    },
    {
      id: "proxbytes-ip",
      title: "9. Intellectual Property of ProxBytes",
      content: [
        "All platform-related materials, including branding, logos, website design, application interfaces, software, content, and associated materials, are owned by or licensed to ProxBytes unless otherwise stated.",
        "Users may not reproduce, modify, distribute, or commercially exploit ProxBytes-owned materials without prior written permission.",
        "Nothing in these Terms transfers ownership of ProxBytes intellectual property to users.",
      ],
    },
    {
      id: "third-party",
      title: "10. Third-Party Services",
      content: [
        "ProxBytes may integrate with or provide access to third-party services, including external repositories, payment providers, communication services, and other platforms.",
        "Such services are governed by their respective terms and policies.",
        "ProxBytes is not responsible for the availability, functionality, or independent practices of third-party services.",
      ],
    },
    {
      id: "termination",
      title: "11. Account Suspension and Termination",
      content: [
        "ProxBytes reserves the right to restrict, suspend, or terminate user accounts when:",
      ],
      list: [
        "These Terms & Conditions are violated.",
        "Fraudulent or unauthorized activities are identified.",
        "Platform security or integrity is compromised.",
        "Users engage in harmful or abusive activities.",
        "Suspension or termination is necessary to comply with applicable legal requirements.",
      ],
      extra: "Where reasonably appropriate, users may be notified of the action and its general reason. Users may also request account closure in accordance with the applicable account deletion process.",
    },
    {
      id: "liability",
      title: "12. Limitation of Liability",
      content: [
        "ProxBytes aims to provide reliable and uninterrupted services. However, we do not guarantee that the platform will always be available, error-free, or uninterrupted.",
        "To the extent permitted by applicable law, ProxBytes will not be responsible for indirect or consequential losses arising from the use or inability to use the platform.",
        "Nothing in these Terms excludes liability that cannot legally be excluded under applicable law.",
      ],
    },
    {
      id: "changes",
      title: "13. Changes to These Terms",
      content: [
        "ProxBytes may update these Terms & Conditions periodically to reflect changes in platform functionality, operational requirements, or applicable laws.",
        "Updated terms will be published on this page with a revised Last Updated date.",
        "Continued use of the platform after changes become effective constitutes acceptance of the updated terms, to the extent permitted by applicable law.",
      ],
    },
    {
      id: "law",
      title: "14. Governing Law and Jurisdiction",
      content: [
        "These Terms & Conditions shall be governed by the applicable laws of India.",
        "Any disputes arising in connection with these Terms shall be subject to the jurisdiction of the competent courts in the applicable jurisdiction where ProxBytes operates, subject to applicable law.",
      ],
    },
    {
      id: "contact",
      title: "15. Contact Information",
      content: [
        "For questions, concerns, or assistance regarding these Terms & Conditions, please contact us:",
      ],
      contactBox: true,
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#0d0d0d",
        color: "#f5f5f5",
        minHeight: "100vh",
        pt: { xs: 14, md: 18 },
        pb: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <Box sx={{ mb: 6, textAlign: { xs: "left", md: "center" } }}>
            <Typography
              sx={{
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#9e9e9e",
                mb: 1.5,
                fontWeight: 600,
              }}
            >
              Legal Agreement
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.2rem", sm: "3rem", md: "3.6rem" },
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1.15,
                color: "#ffffff",
                mb: 2,
              }}
            >
              Terms &amp; Conditions
            </Typography>
            <Typography
              sx={{
                fontSize: "0.95rem",
                color: "rgba(255, 255, 255, 0.6)",
                display: "inline-block",
                px: 2,
                py: 0.6,
                borderRadius: "999px",
                bgcolor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              Effective Date: November 5, 2026 &nbsp;|&nbsp; Last Updated: November 5, 2026
            </Typography>
          </Box>

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.12)", mb: 6 }} />

          {/* Body Sections */}
          <Stack spacing={5}>
            {sections.map((sec) => (
              <Box
                key={sec.id}
                id={sec.id}
                sx={{
                  p: { xs: 2.5, sm: 3.5 },
                  borderRadius: 3,
                  bgcolor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  transition: "border-color 0.2s ease",
                  "&:hover": {
                    borderColor: "rgba(255, 255, 255, 0.15)",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.25rem", md: "1.45rem" },
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "#ffffff",
                    mb: 2,
                  }}
                >
                  {sec.title}
                </Typography>

                <Stack spacing={1.5}>
                  {sec.content.map((p, idx) => (
                    <Typography
                      key={idx}
                      sx={{
                        fontSize: { xs: "0.95rem", md: "1.02rem" },
                        lineHeight: 1.75,
                        color: "rgba(255, 255, 255, 0.78)",
                      }}
                    >
                      {p}
                    </Typography>
                  ))}

                  {sec.list && (
                    <Box component="ul" sx={{ pl: 3, m: 0 }}>
                      {sec.list.map((item, idx) => (
                        <Box
                          component="li"
                          key={idx}
                          sx={{
                            fontSize: { xs: "0.95rem", md: "1rem" },
                            lineHeight: 1.75,
                            color: "rgba(255, 255, 255, 0.78)",
                            mb: 0.8,
                          }}
                        >
                          {item}
                        </Box>
                      ))}
                    </Box>
                  )}

                  {sec.extra && (
                    <Typography
                      sx={{
                        fontSize: { xs: "0.95rem", md: "1.02rem" },
                        lineHeight: 1.75,
                        color: "rgba(255, 255, 255, 0.78)",
                        mt: 1,
                      }}
                    >
                      {sec.extra}
                    </Typography>
                  )}

                  {sec.contactBox && (
                    <Box
                      sx={{
                        mt: 2,
                        p: 2.5,
                        borderRadius: 2,
                        bgcolor: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      <Typography sx={{ color: "#fff", fontWeight: 500, mb: 0.5 }}>
                        Platform: ProxBytes
                      </Typography>
                      <Typography sx={{ color: "rgba(255, 255, 255, 0.8)", mb: 0.5 }}>
                        Website:{" "}
                        <MuiLink
                          href="https://proxbytes.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ color: "#90caf9", textDecoration: "none" }}
                        >
                          https://proxbytes.com
                        </MuiLink>
                      </Typography>
                      <Typography sx={{ color: "rgba(255, 255, 255, 0.8)", mb: 0.5 }}>
                        Email:{" "}
                        <MuiLink
                          href="mailto:info@proxbytes.com"
                          sx={{ color: "#90caf9", textDecoration: "none" }}
                        >
                          info@proxbytes.com
                        </MuiLink>
                      </Typography>
                      <Typography sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
                        Organization: PROdesX InfoTech Pvt Lmt.
                      </Typography>
                    </Box>
                  )}
                </Stack>
              </Box>
            ))}
          </Stack>

          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Typography sx={{ fontSize: "0.88rem", color: "rgba(255, 255, 255, 0.5)" }}>
              &copy; {new Date().getFullYear()} ProxBytes. All Rights Reserved.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

