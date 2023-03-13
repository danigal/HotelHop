I'm going to built a modern elearning authoring web app in MERN stack using react-bootstrap, react router and axios.
The application will look like this:
- Home Screen: 
  - Learner dashboard with a list of existing Scenarios available from DB
  - Allow user to create a new Scenario
- Create a new scenario screen 1: 
  - Give our new Scenario a name
  - Optionally include a description of the scenario
  - We can also use this screen to add additional basic metadata about the new scenario
- Create new scenario screen 2:
  - Adding first scene
  - Change name of scene
  - Upload image
- Create scenario screen 3: 
  - Add hotspots in image
  - Save scene
- Create scenario screen 3a:
  - Add questions to the hotspot:
    - Select questions from database
      - Select type of question (e.g. mcq, text)
      - After that select the questions to include in the scene from the list
    - Add new Questions
    - Save hotspot
- Create scenario screen 3b (save scene):
  - Add new scene
  - Save scenario 
  
