import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
//import { useNavigate } from "react-router-dom";

const ExistingScenes = ({ scenarioId }) => {
  //  const navigate = useNavigate();
  const scenes = useSelector((state) => state.scenes);

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Existing scenes
      </Typography>
      {scenes.length === 0 ? (
        <Typography variant="h5" gutterBottom>
          No scenes found
        </Typography>
      ) : (
        <Box>
          {scenes.map((scene) => (
            <Box
              key={scene._id}
              display="flex"
              alignItems="center"
              border="1px solid"
              borderColor="grey.400"
              p="0.5rem"
              borderRadius="0.5rem"
              my="0.5rem"
              width="100%"
            >
              <img
                src={`http://localhost:3001/assets/${scene.picturePath}`}
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  marginRight: "1rem",
                }}
              />
              <Typography variant="h4" sx={{ mr: "0.5rem" }}>
                {/*console.log(scene)*/}
                {scene.sceneName}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ExistingScenes;
