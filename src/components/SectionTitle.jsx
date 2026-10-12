import React from "react";
import { Box, Typography } from "@mui/material";
import Reveal from "./Reveal";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  layout = "stack",
  align = "left",
  dark = false,
  prominent = false,
  titleSx = {},
  sx = {},
}) {
  const titleColor = dark ? "#fff" : "#111";
  const descriptionColor = dark ? "rgba(255,255,255,.66)" : "#6f6b74";

  return (
    <Box
      sx={{
        display: layout === "split" ? "grid" : "block",
        gridTemplateColumns:
          layout === "split" ? { xs: "1fr", md: "minmax(0, 1fr) minmax(280px, .72fr)" } : undefined,
        alignItems: "end",
        gap: { xs: 3, md: 8 },
        textAlign: align,
        ...sx,
      }}
    >
      <Box sx={{ minWidth: 0 }}>
        <Reveal>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: align === "center" ? "center" : "flex-start",
              gap: prominent ? 1.5 : 1.25,
              mb: prominent ? { xs: 2.75, md: 3.75 } : { xs: 2.5, md: 3.5 },
            }}
          >
            <Box
              aria-hidden="true"
              sx={{
                width: prominent ? 10 : 8,
                height: prominent ? 10 : 8,
                borderRadius: "50%",
                bgcolor: "#b58aff",
                flexShrink: 0,
              }}
            />
            <Typography
              component="p"
              sx={{
                m: 0,
                color: dark ? "#cbb0f5" : "#77717f",
                fontSize: prominent ? { xs: 12, md: 14 } : { xs: 10, md: 11 },
                fontWeight: 700,
                letterSpacing: prominent ? ".13em" : ".12em",
                lineHeight: 1.5,
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </Typography>
          </Box>
        </Reveal>

        <Reveal delay={0.05}>
          <Typography
            component="h2"
            sx={{
              m: 0,
              color: titleColor,
              fontSize: {
                xs: "clamp(40px, 8vw, 58px)",
                md: "clamp(62px, 6vw, 78px)",
              },
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "-.075em",
              textAlign: align,
              ...titleSx,
            }}
          >
            {title}
          </Typography>
        </Reveal>

        {description && layout !== "split" && (
          <Reveal delay={0.1}>
            <Box
              component="p"
              sx={{
                mt: { xs: 2, md: 2.5 },
                mb: 0,
                mx: align === "center" ? "auto" : 0,
                maxWidth: 640,
                color: descriptionColor,
                fontSize: { xs: 14, md: 17 },
                lineHeight: 1.75,
              }}
            >
              {description}
            </Box>
          </Reveal>
        )}
      </Box>

      {description && layout === "split" && (
        <Reveal delay={0.1}>
          <Box
            component="p"
            sx={{
              maxWidth: 560,
              m: 0,
              color: descriptionColor,
              fontSize: { xs: 14, md: 17 },
              lineHeight: 1.8,
            }}
          >
            {description}
          </Box>
        </Reveal>
      )}
    </Box>
  );
}
