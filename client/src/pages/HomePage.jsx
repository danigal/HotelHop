import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
//import ScenariosWidget from 'scenes/widgets/ScenariosWidget';
//import Header from "components/Header";
import AddScenario from "components/AddScenario";
import ScenariosFeed from "components/ScenariosFeed";
import { useDispatch, useSelector } from "react-redux";
import { setScenarios } from "state";

//import AddScenario from 'components/AddScenario';

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const dispatch = useDispatch();
  const scenarios = useSelector((state) => state.scenarios);
  const token = useSelector((state) => state.token);
  const [showAddScenario, setShowAddScenario] = useState(false);

  useEffect(() => {
    async function fetchScenarios() {
      const response = await fetch(`http://localhost:3001/scenarios`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }, // You don't need to set the content type for GET requests
        // You don't need body for GET requests
      });
      const data = await response.json();
      dispatch(setScenarios({ scenarios: data }));
    }

    fetchScenarios();
  }, [dispatch, token]); // dispatch and token are dependencies, so if they change, useEffect will run again

  const handleAddScenarioOpen = () => {
    setShowAddScenario(true);
  };

  //TODO: Change AddScenario to be a page instead of a component
  //TODO: Insted of changing the state of showAddScenario, change the route to /add-scenario, for not having messed up the state of the app when i return home
  return (
    <Box
      width="100%"
      padding="2rem 6%"
      display={isNonMobileScreens ? "flex" : "block"}
    >
      <Box
        flexBasis={isNonMobileScreens ? "92%" : undefined}
        mt={isNonMobileScreens ? undefined : "2rem"} //
      >
        {scenarios.length === 0 ? (
          <AddScenario />
        ) : (
          <>
            {showAddScenario ? ( // if showAddScenario is true, then show AddScenario component
              <AddScenario />
            ) : (
              // if showAddScenario is false, then show ScenariosFeed component
              <ScenariosFeed onAddScenarioClick={handleAddScenarioOpen} />
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
