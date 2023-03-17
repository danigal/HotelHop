import Hotels from "../models/Hotel.js";

/* CREATE */
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};
// /* CREATE */
// export const createHotel = async (req, res) => {
//    // we do the console.log to see what we are getting from the client
//   try {
//     const { scenarioName, description} = req.body;
//     //console.log("req.body", req.body); // we do the console.log to see what we are getting from the client
//     const newScenario = new Scenario( // Create new scenario
//       req.body // req.body is the object we are sending from the client
//     );
//     //console.log("🚀 ~ file: scenarios.js:12 ~ createScenario ~ newScenario:", newScenario)

//     await newScenario.save(); // Save to database

//     res.status(201).json(newScenario);
//   } catch (err) {
//     res.json({ message: err.message }); // 409: Conflict
//   }
// };

// // /* READ */
// export const getScenarios = async (req, res) => {
//   try {
//     const scenario = await Scenario.find();
//     res.status(200).json(scenario);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };
