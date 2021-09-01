import React from 'react'
import Disruption from '../Disruption/Disruption';
import DisruptionList from '../DisruptionList/DisruptionList';
import SearchBar from '../SearchBar/SearchBar';

const disruption = {
  location: "London bridge",
  severity: "major",
  category: "accident",
  subcategory: "bingle",
  comments: "Comments about the accident",
  currentUpdate: "Latest update on the incident",
  currentUpdateDateTime: "9:00am on 01-Sep-2021",
  status: "ongoing",
};

const disruptions = [
  disruption, disruption, disruption, disruption, disruption, disruption
]

class App extends React.Component {
  render () {
    return (
        <div class="App">
          <h1>London Traffic Report</h1>
          <SearchBar />
          <DisruptionList disruptions={disruptions} />
        </div>
    )
  }
}

export default App
