import React from "react";
import { Box } from "@chakra-ui/core";

export type WrapperVariant = "small" | "regular";

interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box
      mt={4}
      mx="auto"
      w="100%"
      width={{ sm: "full", md: "auto" }}
      alignItems="center"
    >
      {children}
    </Box>
  );
};
