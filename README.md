# Ben's noDB Project

## Application Concept and Wireframe

### Application Concept
- This is a Tom Clancy's Rainbow Six Siege stat tracker
- I am utilizing a datafile that I created for my account organized by season
- Full CRUD
    - GET: get all players
    - POST: selected players will be posted in my array
    - PUT: edit the information of the player
    - DELETE: delete the player from my array

### Functionality
- I want a header at the top of the page to display the name of my app
- I will be able to add a player into the stat tracker
- The stat tracker will show the players in the array, and any that get added
- The stat tracker will have an edit button
- The stat tracker will have a delete button
- The stat tracker will update the array when a player is deleted

### Endpoints
- GET - fetch all 7 Players from data.js (send it to front and back)
- GET - fetch our stat tracker
- POST - push user added playeres into the stat tracker
- PUT - change a player's information in the stat tracker
- DELETE - delete a player from the stat tracker

### Component Architecture
- App.js (stateful: hold added players in the stat tracker, this.state.seasonsAdded)
    - Header.js (functional)
    - Option.js (stateful: axios request to fetch all players)
        - Chooser.js (stateful: this.state.clickedChooser)
    - Tracker.js (functional)
        - Player.js (stateful: this.state.name, this.state.maxRank, this.state.maxMMR, this.state.gamesPlayed, this.state.gamesWon, this.state.gamesLost, this.state.gamesAbandoned this.state.winPercent this.state.editing)

### Wireframe
<img src="./screenshots/Capture3.PNG"/>
<img src="./screenshots/Capture2.PNG"/>
<img src="./screenshots/Capture1.PNG"/>