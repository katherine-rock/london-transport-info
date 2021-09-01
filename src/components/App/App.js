import React from 'react'
import Disruption from '../Disruption/Disruption';
import DisruptionList from '../DisruptionList/DisruptionList';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {
  render () {
    return (
        <div class="App">
          <h1>London Traffic Report</h1>
          <SearchBar />
          <DisruptionList />
        </div>
    )
  }
}

export default App
