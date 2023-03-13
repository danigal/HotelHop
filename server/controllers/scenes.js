import Scene from "../models/Scene.js";
import Scenario from "../models/Scenario.js";

/* CREATE */
export const createScene = async (req, res) => {
  try {
    const { scenarioId } = req.params;
    //console.log("scenarioId: ", scenarioId);
    const { sceneName, picturePath } = req.body;

    // const scenario = await Scenario.findById(scenarioId);
    // console.log("🚀 ~ file: scenes.js:12 ~ createScene ~ scenario:", scenario)
    // if (!scenario) throw new Error("Scenario not found");

    const newScene = new Scene({
      // Create new post
      sceneName,
      picturePath,
      scenario: scenarioId,
    });

    // scenario.scenes.push(newScene); // Add post to scenario
    await newScene.save(); // Save to database

    const scenario = await Scenario.findById(scenarioId);
    if (!scenario) throw new Error("Scenario not found");

    scenario.scenes.push(newScene);
    await scenario.save();

    res.status(201).json(newScene);
  } catch (err) {
    res.json({ message: err.message }); // 409: Conflict
  }
};

/* READ */
export const getScenarioScenes = async (req, res) => {
  try {
    const { scenarioId } = req.params;
    const scenes = await Scene.find({ scenario: scenarioId });
    res.status(200).json(scenes);
  } catch (err) {
    res.json({ message: err.message });
  }
};
