import Hotel from "../models/Hotel.js";

/* CREATE */
export const createHotel = async (req, res, next) => {
  //we will use next to pass the error to the next middleware
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

/* UPDATE */
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body }, // $set is a MongoDB operator that replaces the value of a field with the specified value
      { new: true } // findByIDAndUpdate returns the old document by default, we want the new one
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

/* DELETE */
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};

/* READ */
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find(req.params.id);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};
// export const getHotels = async (req, res, next) => {
//   const { min, max, ...others } = req.query;
//   try {
//     const hotels = await Hotel.find({
//       ...others,
//       cheapestPrice: { $gt: min | 1, $lt: max || 999 },
//     }).limit(req.query.limit);
//     res.status(200).json(hotels);
//   } catch (err) {
//     next(err);
//   }
// };

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
