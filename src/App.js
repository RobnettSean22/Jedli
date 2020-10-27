import React from "react";
import { Switch, Route } from "react-router";
import Landing from "./compnents/Landing";
import Music from "./compnents/Music";

import axios from "axios";

const App = props => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/music/' component={Music} />
      </Switch>
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

// async itunes() {
//   const res = await axios.get(
//     `https://itunes.apple.com/search?term=JedLi&country=JP`
//   );
//   const { data } = await res;
//   console.log(res.data);
//   const filterMusic = await data.results.filter(specArtist => {
//     return specArtist.artistId === 1492578733;
//   });
//   this.setState({
//     itunesMusic: filterMusic
//   });
// }

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
