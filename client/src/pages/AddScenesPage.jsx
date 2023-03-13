import { Box, Typography, useTheme, Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setScenes } from "state";
import Wrapper from "components/Wrapper";
import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";
import { EditOutlined } from "@mui/icons-material";
import ExistingScenes from "components/ExistingScenes";

const AddScenesPage = () => {
  const { scenarioId } = useParams(); // we get the scenarioId from the URL
  //console.log(scenarioId);
  const [sceneName, setSceneName] = useState(`Scene ${1}`);
  const [image, setImage] = useState(null);
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  //const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;
  const scenes = useSelector((state) => state.scenes);
  useEffect(() => {
    // write your get method here
    async function fetchScenes() {
      const scenes = await fetch(`http://localhost:3001/scenes/${scenarioId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await scenes.json();
      dispatch(setScenes({ scenes: data }));
    }
    fetchScenes();
  }, [dispatch, scenarioId, token]);

  const handleScene = async () => {
    const formData = new FormData();
    formData.append("sceneName", sceneName);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }
    console.log(formData);
    const response = await fetch(`http://localhost:3001/scenes/${scenarioId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const scene = await response.json();
    const { _id: sceneId } = scene;
    dispatch(setScenes({ scenes: [...scenes, scene] })); // we add the new scene to the scenes array
    setImage(null);
    setSceneName("");

    //navigate(`/scenes/${sceneId}/view`);
  };

  // const handleFileChange = (files) => {
  //   setFile(files[0]); // we only allow one file to be uploaded
  // };

  return (
    <Wrapper mt="2rem" maxWidth="800px" ml="2rem">
      <Typography variant="h4" gutterBottom>
        {" "}
        {/* gutterBottom add a little space below the text */}
        New Scenario
      </Typography>
      <Box border={`1px solid ${medium}`} p="1rem" borderRadius="0.75rem">
        <Typography variant="h5" gutterBottom>
          Create a new scene
        </Typography>
        <TextField
          label="Name"
          margin="normal"
          value={sceneName}
          onChange={(e) => setSceneName(e.target.value)}
        />
        <Box
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
        >
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <Box
                {...getRootProps()}
                border={`2px dashed ${palette.primary.main}`}
                p="1rem"
                width="100%"
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                <input {...getInputProps()} />
                {!image ? (
                  <p>Add Image Here</p>
                ) : (
                  <FlexBetween>
                    <Typography>{image.name}</Typography>
                    <EditOutlined />
                  </FlexBetween>
                )}
              </Box>
            )}
          </Dropzone>
        </Box>
        <Button
          variant="contained"
          disabled={!sceneName || !image}
          onClick={handleScene}
          sx={{ mt: "1rem", alignSelf: "flex-end" }}
        >
          Create Scene
        </Button>
      </Box>
      <ExistingScenes />
    </Wrapper>
  );
};

export default AddScenesPage;
