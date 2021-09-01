import React from 'react'
// import Disruption from '../Disruption/Disruption';
import DisruptionList from '../DisruptionList/DisruptionList';
import SearchBar from '../SearchBar/SearchBar';
import TFL from '../../utils/TFL'

// const disruption = {
//   location: "London bridge",
//   severity: "major",
//   category: "accident",
//   subcategory: "bingle",
//   comments: "Comments about the accident",
//   currentUpdate: "Latest update on the incident",
//   currentUpdateDateTime: "9:00am on 01-Sep-2021",
//   status: "ongoing",
// };

// const disruptions = [
//   disruption, disruption, disruption, disruption, disruption, disruption
// ]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disruptions: []};
    this.searchTFL = this.searchTFL.bind(this);
  }

  searchTFL(road) {
    // console.log(`Searching Transport For London with road term ${road}`)
    TFL.searchTFL(road)
      .then((disruptions) => {
        this.setState({disruptions: disruptions})
      })
  }

  render () {
    return (
        <div class="App">
          <h1>London Traffic Report</h1>
          <SearchBar searchTFL={this.searchTFL} />
          <DisruptionList disruptions={this.state.disruptions} />
        </div>
    )
  }
}

export default App
