import React, { useEffect } from "react";
import { Box, Typography, Container, Stack, Divider, Link as MuiLink } from "@mui/material";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: [
        "Welcome to ProxBytes!",
        "ProxBytes is a platform designed to help students enhance their technical skills through coding competitions, practical challenges, and learning opportunities.",
        "We are committed to protecting the privacy and personal information of our users. This Privacy Policy explains how ProxBytes handles, uses, stores, and protects personal information when users access our website, mobile application, and associated services.",
        "By accessing or using ProxBytes, you agree to the practices described in this Privacy Policy.",
      ],
    },
    {
      id: "personal-information",
      title: "2. Personal Information",
      content: [
        "ProxBytes may collect and process personal information that users voluntarily provide while registering for an account or using our services.",
        "We handle this information responsibly and use it only for legitimate purposes related to providing, maintaining, and improving our platform.",
        "We take reasonable measures to ensure that personal information is processed securely and is accessible only to authorized individuals when necessary.",
      ],
    },
    {
      id: "use-of-information",
      title: "3. Use of Personal Information",
      content: ["Personal information may be used for the following purposes:"],
      list: [
        "To create, manage, and authenticate user accounts.",
        "To provide access to platform features and services.",
        "To manage student and institution registrations.",
        "To facilitate coding competitions and related activities.",
        "To communicate important account and platform updates.",
        "To provide notifications regarding contests, participation, and results.",
        "To maintain platform security and prevent unauthorized activities.",
        "To improve platform performance and user experience.",
        "To respond to support requests and resolve technical issues.",
        "To comply with applicable legal obligations.",
      ],
      extra: "We do not sell or rent users' personal information to third parties for commercial purposes.",
    },
    {
      id: "sharing-disclosure",
      title: "4. Information Sharing and Disclosure",
      content: [
        "We respect the confidentiality of personal information and do not share it unnecessarily.",
        "Information may be shared with authorized institutions, service providers, or technology partners when required to provide platform functionality.",
        "We may also disclose information when required by applicable laws, legal processes, or legitimate security requirements.",
        "Third-party service providers are expected to handle information responsibly and implement appropriate security measures.",
      ],
    },
    {
      id: "data-security",
      title: "5. Data Security",
      content: [
        "We implement reasonable technical and organizational security measures to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.",
        "These measures may include secure authentication, access restrictions, encryption where appropriate, and regular system monitoring.",
        "Although we continuously work to protect user information, no method of electronic transmission or storage can guarantee complete security.",
      ],
    },
    {
      id: "data-retention",
      title: "6. Data Retention",
      content: [
        "We retain personal information only for as long as necessary to provide our services, maintain user accounts, fulfill operational requirements, and comply with applicable legal obligations.",
        "When personal information is no longer required, we take reasonable steps to delete or anonymize it, subject to applicable legal and regulatory requirements.",
      ],
    },
    {
      id: "account-deletion",
      title: "7. Account Deletion and Data Removal",
      content: [
        "Users have the right to request deletion of their ProxBytes accounts and associated personal information.",
        "Users can initiate an account deletion request through the available account settings within the application or by contacting our support team.",
        "Upon receiving a valid request, we will process the deletion in accordance with applicable requirements.",
        "Certain information may be retained where necessary to comply with legal obligations, resolve disputes, or prevent fraudulent activities.",
      ],
    },
    {
      id: "third-party-services",
      title: "8. Third-Party Services",
      content: [
        "ProxBytes may use trusted third-party services to support platform operations, communications, authentication, hosting, and notification delivery.",
        "These services operate under their respective privacy policies and terms of service.",
        "We encourage users to review the privacy practices of third-party services when accessing external platforms or services through ProxBytes.",
      ],
    },
    {
      id: "children-privacy",
      title: "9. Children's Privacy",
      content: [
        "ProxBytes may be used by students, including individuals below the age of 18.",
        "We are committed to handling personal information responsibly and in accordance with applicable privacy and child protection laws.",
        "Where required, appropriate parental or legal guardian consent will be obtained before processing children's personal information.",
      ],
    },
    {
      id: "policy-changes",
      title: "10. Changes to This Privacy Policy",
      content: [
        "We may update this Privacy Policy periodically to reflect changes in our services, privacy practices, or applicable legal requirements.",
        "Any updates will be published on this page with a revised Last Updated date.",
        "Users are encouraged to review this policy periodically to remain informed about our privacy practices.",
      ],
    },
    {
      id: "contact",
      title: "11. Contact Us",
      content: [
        "If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us:",
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
              Privacy &amp; Data Protection
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
              Privacy Policy
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
                        Organization: ProxBytes
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

