import { Add } from "@mui/icons-material";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

import ScenarioWrapper from "./ScenarioWrapper";
import FlexBetween from "./FlexBetween";

const ScenariosFeed = ({ onAddScenarioClick }) => {
  const scenarios = useSelector((state) => state.scenarios);
  // console.log(
  //   "🚀 ~ file: ScenariosFeed.jsx:6 ~ ScenariosFeed ~ scenarios :",
  //   scenarios
  // );
  const isNonMobile = useMediaQuery("(min-width:1000px)");

  //TODO: navigate when clicking on a AddScenario
  return (
    <Box>
      <FlexBetween>
        <Typography variant="h3">Scenarios</Typography>
        <Button onClick={onAddScenarioClick}>
          <Add />
          Add Scenario
        </Button>
      </FlexBetween>

      <Box
        mt="1x"
        display="grid"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        justifyContent="space-between"
        rowGap="20px"
        columnGap="1.33%"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >
        {scenarios.map(({ _id, scenarioName, description, scenes }) => (
          <ScenarioWrapper
            key={_id}
            scenarioId={_id}
            scenarioName={scenarioName}
            description={description}
            scenes={scenes}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ScenariosFeed;
