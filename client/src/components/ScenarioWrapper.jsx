import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Wrapper from "components/Wrapper";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ScenarioWrapper = ({ scenarioId, scenarioName, description, scenes }) => {
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const navigate = useNavigate();

  console.log(scenes[0]);

  return (
    <Wrapper>
      <Box>
        {/* {scenes.length > 0 && (
          <img
            width="100%"
            height="auto"
            alt=""
            style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
            src={`http://localhost:3001/assets/${picturePath}`}
          />
        )} */}
        <Typography color={main} variant="h5" sx={{ mt: "1rem" }}>
          {scenarioName}
        </Typography>
        <Typography color={main} sx={{ mt: "1rem" }}>
          {description}
        </Typography>
      </Box>
      <IconButton onClick={() => navigate(`/scenes/${scenarioId}`)}>
        <Typography>See scenes</Typography>
      </IconButton>
    </Wrapper>
  );
};

export default ScenarioWrapper;
