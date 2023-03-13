import {
  Box,
  Typography,
  useTheme,
  Button,
  TextField,
} from "@mui/material";
//import FlexBetween from "components/FlexBetween";
import Wrapper from "components/Wrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setScenarios } from "state";
//import { useNavigate } from "react-router-dom";

const AddScenario = () => {

  const [scenarioName, setScenarioName] = useState(""); 
  const [description, setDescription] = useState("");

  const { palette } = useTheme();
  const dispatch = useDispatch(); // we are going to use dispatch to dispatch the action that is going to set the scenario info in the redux store
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  //const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  //const mediumMain = palette.neutral.mediumMain;
  //const medium = palette.neutral.medium;
  const scenarios = useSelector((state) => state.scenarios); // we get the scenarios from the redux store



  const handleScenario = async () => {
  //  console.log(scenarioName); // for knowing if the scenarioName is being passed
    const response = await fetch(`http://localhost:3001/scenarios`, {
      method: "POST",
      headers: {Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"

    },
      body: JSON.stringify({scenarioName: scenarioName, description: description}), // we use JSON.stringify to convert the object to a string
    });
    const newScenario = await response.json(); // we get the new scenario from the response
    const { _id: scenarioId } = newScenario; // we get the id of the new scenario
    dispatch(setScenarios({ scenarios : [...scenarios, newScenario] }));
    setScenarioName("");
    setDescription("");
    navigate(`/scenes/${scenarioId}`);
  };

 return (
    <Wrapper>
      <Box border={`2px dashed ${palette.primary.main}`} p="1rem" borderRadius="0.75rem">
        <Typography variant="h4">Create a scenario</Typography>
        <TextField
          label="Scenario Name"
          onChange={(e) =>
            setScenarioName(e.target.value )
          }
          value={scenarioName}
          fullWidth
          margin="normal"
        ></TextField>
        <TextField
          label="Description"
          multiline
          rows={3}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          value={description}
          fullWidth
          margin="normal"
        ></TextField>
        <Box display="flex" flexDirection="column" 
        >
        <Button
          disabled={!scenarioName}
          onClick={handleScenario}
          sx={{ 
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: "3rem",  
            mt: "1rem", 
            alignSelf: "flex-end",
          }}
        >Create Scenario</Button>
        </Box>
      </Box>
    </Wrapper>
  );

};

export default AddScenario;
