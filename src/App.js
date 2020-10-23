import React from "react";
import { Switch, Route } from "react-router";
import axios from "axios";

import Landing from "./compnents/Landing";

const App = props => {
  return (
    <>
      <Landing />
    </>
  );
};
export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       itunesMusic: "",
//       soundCloudMusic: ""
//     };
//   }
//   componentDidMount() {
//     this.itunes();
//   }

//   async itunes() {
//     const res = await axios.get(
//       `https://itunes.apple.com/search?term=JedLi&country=JP`
//     );
//     const { data } = await res;
//     console.log(res.data);
//     const filterMusic = await data.results.filter(specArtist => {
//       return specArtist.artistId === 1492578733;
//     });
//     this.setState({
//       itunesMusic: filterMusic
//     });
//   }

//   render() {
//     const { itunesMusic, soundCloudMusic } = this.state;

//     console.log(soundCloudMusic);
//     return (
//       <div>
//         <div id='tiled'>
//           <Switch>
//             <Route
//               exact
//               path='/'
//               exact
//               render={() => <Music content={itunesMusic} />}
//             />
//             <Route exact path='/lyrics' component={Lyrics} />
//             <Route exact path='/events' component={Events} />
//             <Route exact path='/past-events' component={PastEvents} />
//             <Route exact path='/story' component={Story} />
//           </Switch>
//         </div>
//       </div>
//     );
//   }
// }
