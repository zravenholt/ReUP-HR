import React from 'react';
import {createStore} from 'redux';

//reducer makes changes to the state based on the action passed to it.
//                   the "action" is "dispatched" from where the event takes place
const reducer = function(state, action) {
  return state;
}

// redux produces a new store every time the state is passed through the reducer
// the second argument here is the initial state of our "state" (containing all the values of our application state)
const store = createStore(reducer, {})

store.subscribe(() => {
  console.log("store has changed ", store.getState())
})

class App extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //   };
  // }

  render() {
    return (
        <div>
          Hello World!!!
          <ignTile />
          <redditTile />
          <youtubeTile />
        </div>
    );
  }
}

export default App;