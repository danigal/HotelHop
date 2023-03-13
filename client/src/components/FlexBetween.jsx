import { Box } from "@mui/material";
import { styled } from "@mui/system";

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between", // space-between aligns the children with equal spacing between them
  alignItems: "center", // aligns the children vertically
});

export default FlexBetween;
