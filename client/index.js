import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/App.jsx';
// import Home from './components/Home.jsx';
// import Explore from './containers/Explore.jsx';
// import Feed from './containers/Feed.jsx';


//provider tag
ReactDOM.render(<App />, document.getElementById('app'));

// /*ReactDOM.render(
//     <Router>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-sm-2 col-md-2 col-lg-2">
//             <Home />
//           </div>
//           <div className="col-sm-10 col-md-10 col-lg-10">
//             {/*<Route path="/" component={Explore} />*/}
//             <Route path="/explore" component={Explore} />
//             <Route path="/feed" component={Feed} />
//           </div>
//         </div>
//       </div>
//     </Router>,
//   document.getElementById('app'));*/

//provider tag
// ReactDOM.render(<App />, document.getElementById('app'));