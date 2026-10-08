import React from "react";
import { ArrowOutward } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function ArrowLink({ children }) {
  return (
    <Button className="arrow-link" endIcon={<ArrowOutward />}>
      {children}
    </Button>
  );
}